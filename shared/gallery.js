const favoritesKey = 'plachtove-haly:favorite-templates';
let favorites = new Set();
try { favorites = new Set(JSON.parse(localStorage.getItem(favoritesKey) || '[]')); } catch {}
let size = matchMedia('(max-width: 570px)').matches ? 'mobile' : 'desktop';
let filter = 'all';
const cards = document.querySelector('#cards');
const entries = [];
function node(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}
function link(label, url, cls) {
  const a = node('a', cls, label);
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener';
  return a;
}
function resize(entry) {
  const width = entry.preview.clientWidth;
  if (!width) return;
  const mobile = size === 'mobile';
  const viewport = mobile ? 390 : 1280;
  const scale = Math.min(width / viewport, mobile ? 0.76 : 1);
  const height = mobile ? 420 : Math.min(430, 680 * scale);
  entry.preview.style.height = height + 'px';
  entry.screen.style.width = (viewport * scale) + 'px';
  entry.frame.style.width = viewport + 'px';
  entry.frame.style.height = Math.ceil(height / scale) + 'px';
  entry.frame.style.transform = 'scale(' + scale + ')';
}
function refresh() {
  let visible = 0;
  for (const entry of entries) {
    const saved = favorites.has(entry.item.slug);
    entry.star.setAttribute('aria-pressed', saved);
    entry.star.setAttribute('aria-label', (saved ? 'Odebrat z favoritů' : 'Přidat do favoritů') + ' – ' + entry.item.name);
    entry.star.title = entry.star.getAttribute('aria-label');
    entry.star.textContent = saved ? '★' : '☆';
    entry.card.style.display = filter === 'all' || saved ? '' : 'none';
    if (entry.card.style.display !== 'none') { visible++; resize(entry); }
  }
  document.querySelector('#saved-count').textContent = favorites.size;
  document.querySelector('#empty').hidden = visible > 0;
  for (const button of document.querySelectorAll('[data-filter]')) button.setAttribute('aria-pressed', button.dataset.filter === filter);
  for (const button of document.querySelectorAll('[data-size]')) button.setAttribute('aria-pressed', button.dataset.size === size);
}
for (const item of window.TEMPLATES) {
  const url = item.group + '/' + item.slug + '/index.html';
  const card = node('article','card');
  const meta = node('div','meta');
  const star = node('button','star');
  meta.append(node('h2','',item.name), star);
  const preview = node('div','preview');
  const screen = node('div','screen');
  const frame = node('iframe');
  frame.title = item.name + ' – interaktivní ukázka';
  frame.loading = 'lazy';
  frame.src = url;
  screen.append(frame);
  preview.append(screen);
  const copy = node('div','copy');
  copy.append(node('strong','',item.price), node('p','',item.description));
  const actions = node('div','actions');
  const sources = node('div','footlinks');
  sources.append(link('Ukázkový košík',url + '#cart'));
  sources.append(link('Nabídka',item.source));
  if (item.demo) sources.append(link(item.slug === 'tmavy-vzhled' ? 'Základ Classic' : 'Předloha',item.demo));
  actions.append(link('Otevřít demo ↗',url,'open'),sources);
  const references = node('details','references');
  references.append(node('summary','',item.slug === 'tmavy-vzhled' ? 'Snímky výchozí světlé šablony Classic' : 'Snímky původního dema'));
  const screenshots = node('div','footlinks');
  const prefix = 'reference/' + item.slug;
  screenshots.append(link('Hlavička',prefix + '-header.jpg'), link('Patička',prefix + '-footer.jpg'), link('Naplněný košík',prefix + '.png'));
  references.append(screenshots);
  card.append(meta,preview,copy,actions,references);
  cards.append(card);
  const entry = {card,preview,screen,frame,star,item};
  entries.push(entry);
  new ResizeObserver(() => resize(entry)).observe(preview);
  star.onclick = () => {
    if (favorites.has(item.slug)) favorites.delete(item.slug); else favorites.add(item.slug);
    try { localStorage.setItem(favoritesKey, JSON.stringify([...favorites])); } catch {}
    refresh();
  };
}
for (const button of document.querySelectorAll('[data-filter]')) button.onclick = () => { filter = button.dataset.filter; refresh(); };
for (const button of document.querySelectorAll('[data-size]')) button.onclick = () => { size = button.dataset.size; refresh(); };
refresh();
document.querySelector('#template-count').textContent = entries.length;
