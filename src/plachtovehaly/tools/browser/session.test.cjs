const test = require('node:test');
const assert = require('node:assert/strict');
const { assertAdminUrl, parseCredentials } = require('./session.cjs');

test('povolí pouze HTTPS administraci obou známých hostitelů', () => {
  for (const host of ['plachtovehaly.agrodabaki.cz', '828678.myshoptet.com']) {
    assert.doesNotThrow(() => assertAdminUrl(`https://${host}/admin/login/`));
  }
  for (const url of [
    'http://plachtovehaly.agrodabaki.cz/admin/',
    'https://plachtovehaly.agrodabaki.cz.example.org/admin/',
    'https://example.org/admin/',
    'https://plachtovehaly.agrodabaki.cz/',
    'https://user:pass@plachtovehaly.agrodabaki.cz/admin/',
    'https://plachtovehaly.agrodabaki.cz:444/admin/'
  ]) assert.throws(() => assertAdminUrl(url));
});

test('přístupy nezávisí na čísle řádku a zachovají znaky hesla', () => {
  assert.deepEqual(parseCredentials('\uFEFF# poznámka\r\nSHOPTET_PASSWORD=test=/ heslo\r\n\r\nSHOPTET_EMAIL=example@example.invalid\r\n'), {
    email: 'example@example.invalid', password: 'test=/ heslo'
  });
});

test('neúplné a duplicitní přístupy skončí bez vypsání obsahu', () => {
  for (const text of ['SHOPTET_EMAIL=test@example.invalid',
    'SHOPTET_PASSWORD=secret-test\nSHOPTET_PASSWORD=secret-test']) {
    assert.throws(() => parseCredentials(text), error => !error.message.includes('secret-test'));
  }
});
