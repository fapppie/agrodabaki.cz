const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '../../../..');
const base = 'https://plachtovehaly.agrodabaki.cz';
const hosts = new Set(['plachtovehaly.agrodabaki.cz', '828678.myshoptet.com']);

function assertAdminUrl(value) {
  const url = new URL(value);
  if (url.protocol !== 'https:' || !hosts.has(url.hostname) ||
      url.port || url.username || url.password || !url.pathname.startsWith('/admin/')) {
    throw new Error('Nepovolená adresa administrace. Přístupy nebyly odeslány.');
  }
  return url;
}

function parseCredentials(text) {
  // Pojmenované řádky lze přidat do existujícího souboru bez změny ostatních přístupů.
  const values = {};
  for (const line of text.replace(/^\uFEFF/, '').split(/\r?\n/)) {
    const match = /^(SHOPTET_EMAIL|SHOPTET_PASSWORD)=(.*)$/.exec(line);
    if (!match) continue;
    if (Object.hasOwn(values, match[1])) throw new Error('Duplicitní klíč přístupů Shoptetu.');
    values[match[1]] = match[2];
  }
  if (!values.SHOPTET_EMAIL?.trim() || !values.SHOPTET_PASSWORD) {
    throw new Error('Doplňte SHOPTET_EMAIL a SHOPTET_PASSWORD do accesses.txt podle návodu.');
  }
  return { email: values.SHOPTET_EMAIL.trim(), password: values.SHOPTET_PASSWORD };
}

async function run(fn) {
  // Žádná závislost na cache, profilu Chrome ani interní instalaci Codexu.
  const credentials = parseCredentials(fs.readFileSync(path.join(root, 'accesses.txt'), 'utf8'));
  const { chromium } = require('playwright');
  const browser = await chromium.launch({ headless: true });
  try {
    const context = await browser.newContext({ acceptDownloads: false });
    context.setDefaultTimeout(20000);
    const page = await context.newPage();
    await page.goto(base + '/admin/', { waitUntil: 'domcontentloaded' });
    assertAdminUrl(page.url());
    const password = page.locator('input[name="password"]');
    await password.waitFor({ state: 'visible' });
    // Pole name="action" může zastínit DOM vlastnost form.action.
    const action = await password.evaluate(input => input.form
      ? new URL(input.form.getAttribute('action') || location.href, document.baseURI).href
      : null);
    if (!action) throw new Error('Přihlašovací formulář nebyl rozpoznán.');
    assertAdminUrl(action);
    // Po dobu přihlášení nepovolíme odeslání formuláře na jinou doménu.
    await context.route('**/*', async route => {
      if (route.request().method() === 'POST') {
        try { assertAdminUrl(route.request().url()); }
        catch { return route.abort(); }
      }
      await route.continue();
    });
    await page.locator('input[name="email"]').fill(credentials.email);
    await password.fill(credentials.password);
    await password.locator('xpath=ancestor::form').locator('[type="submit"]').click();
    await page.waitForURL(url => hosts.has(url.hostname) && url.pathname === '/admin/');
    await password.waitFor({ state: 'hidden' });
    assertAdminUrl(page.url());
    // Pozitivní známka přihlášení; samotná URL /admin/ nestačí.
    await page.locator('a[href*="logout"]').first().waitFor({ state: 'attached' });
    await context.unroute('**/*');
    await fn(page, browser);
  } finally {
    await browser.close();
  }
}

module.exports = { run, base, assertAdminUrl, parseCredentials };
