'use strict';

const { products, categories } = window.CATALOG;
const theme = document.documentElement.dataset.theme;
const shop = document.querySelector('#shop');
const cartKey = 'agrodabaki-demo-' + theme;
const money = value => new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(value);
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
const img = path => '../../' + esc(path);
const getProduct = id => products.find(p => String(p.id) === String(id));
const detailLink = p => '#product/' + encodeURIComponent(p.id);
const categoryLink = c => '#category/' + encodeURIComponent(c);
const storeItems = () => products.filter(p => basket[p.id] > 0);
const count = () => storeItems().reduce((sum, p) => sum + basket[p.id], 0);
const total = () => storeItems().reduce((sum, p) => sum + basket[p.id] * p.price, 0);
const basket = window.loadDemoCart(() => sessionStorage.getItem(cartKey));
let slide = 0;

const shortLabels = [
  [/garáž/i,'Plachtové garáže'], [/oblouková/i,'Obloukové haly'], [/sedlová/i,'Sedlové haly'],
  [/zvířata/i,'Přístřešky pro zvířata'], [/kontejner/i,'Lodní kontejnery'], [/mulčovače/i,'Mulčovače']
];
function label(c) { return shortLabels.find(([pattern]) => pattern.test(c))?.[1] || c; }
function choose(id, index) { return getProduct(id) || products[index % products.length]; }
const slides = [choose('1000426',0), choose('1000419',1), choose('1000376',2), choose('1000405',3)];
const slideTitles = ['Haly se sedlovou střechou','Haly s obloukovou střechou','Garáže pro velká vozidla','Přístřešky na kontejnery'];
const paths = {
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  cart:'<path d="M2 3h3l3 12h11l3-9H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/>',
  menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
  hall:'<path d="M2 21V8l10-6 10 6v13H2Zm4 0V9l6-4 6 4v12M9 21v-8h6v8"/>',
  shed:'<path d="M2 21v-5C2 5 22 5 22 16v5M6 21v-6c0-7 12-7 12 0v6M2 21h20"/>',
  box:'<path d="m3 7 9-5 9 5v10l-9 5-9-5V7Zm0 0 9 5 9-5M12 12v10"/>',
  ruler:'<path d="m3 16 13-13 5 5L8 21l-5-5Zm9-9 2 2m-5 1 2 2m-5 1 2 2"/>'
};
function icon(name) { return '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+paths[name]+'</svg>'; }
function logo() {
  const file = window.CATALOG.logo;
  return file && file !== 'assets/logo.jpg' ? '<img class="logo-image" src="'+img(file)+'" alt="Plachtové haly AgroDabaki">' : '<span class="brand-mark">'+icon('hall')+'</span><span>AgroDabaki<small>Plachtové haly</small></span>';
}
function banner(p, title, style, text) {
  return '<a class="banner '+style+'" href="'+detailLink(p)+'"><img src="'+img(p.image)+'" alt=""><div class="banner-copy"><strong>'+esc(title)+'</strong>'+(text?'<span>'+esc(text)+'</span>':'')+'<b>Prohlédnout</b></div></a>';
}
function hero() {
  const p=slides[slide], title=slideTitles[slide];
  const controls = '<div class="arrows"><button data-slide="'+((slide+3)%4)+'" aria-label="Předchozí banner">‹</button><button data-slide="'+((slide+1)%4)+'" aria-label="Další banner">›</button></div>';
  const tabs = theme === 'jupiter' ? '<div class="tabs">'+slides.map((item,i)=>'<button data-slide="'+i+'" aria-pressed="'+(i===slide)+'">'+esc(label(item.category))+'</button>').join('')+'</div>' : '';
  let side = '';
  if (theme !== 'apollo') {
    side = '<aside>'+banner(slides[2],'Plachtové garáže','small')+(theme==='jupiter'?'':banner(choose('1000401',4),'Přístřešky pro zvířata','small'))+'</aside>';
  }
  return '<section class="hero '+(theme==='apollo'?'':'wrap')+'" aria-label="Výběr z nabídky"><div class="main-banner">'+banner(p,title,'large', theme==='apollo'?'Plachtové haly AgroDabaki':'')+controls+tabs+'</div>'+side+'</section>';
}
function benefits() {
  const icons=['shed','hall','ruler','box'];
  return '<div class="benefits"><div class="wrap">'+categories.slice(0,4).map((c,i)=>'<a href="'+categoryLink(c)+'">'+icon(icons[i])+'<span>'+esc(label(c))+'</span></a>').join('')+'</div></div>';
}
function productCard(p) {
  return '<article><a href="'+detailLink(p)+'"><img loading="lazy" src="'+img(p.image)+'" alt="'+esc(p.name)+'"><h3>'+esc(p.name)+'</h3></a><span class="availability">'+esc(p.availability)+'</span><div class="card-price"><strong>'+money(p.price)+'</strong><a href="'+detailLink(p)+'">Detail</a></div></article>';
}
function productGrid(items, heading, level='h2') {
  return '<section class="catalog wrap" id="sortiment"><'+level+'>'+esc(heading)+'</'+level+'><div class="products">'+items.map(productCard).join('')+'</div>'+(items.length?'':'<p>Žádný produkt neodpovídá hledanému výrazu.</p><a href="#products">Zobrazit celý sortiment</a>')+'</section>';
}
function home() {
  const categoryTiles='<section class="category-tiles wrap"><h2>Oblíbené kategorie</h2><div>'+categories.map(c=>'<a href="'+categoryLink(c)+'"><img src="'+img(products.find(p=>p.category===c).image)+'" alt="">'+esc(label(c))+'</a>').join('')+'</div></section>';
  const order = [...new Set([...slides, ...products])];
  return hero()+benefits()+(theme==='adamin'||theme==='jupiter'?categoryTiles:'')+productGrid(order,'Výběr ze sortimentu');
}
function crumb(last, mid='') {return '<div class="crumb wrap"><a href="#home">Domů</a> <span>›</span> '+mid+esc(last)+'</div>'; }
function detail(p) {
  const gallery=Array.from(new Set([p.image,...(p.images||[])]));
  const rows=Object.entries(p.params||{}).filter(([k,v])=>k&&v);
  const description=esc(p.description);
  return crumb('Detail produktu','<a href="'+categoryLink(p.category)+'">'+esc(label(p.category))+'</a> <span>›</span> ')+
    '<div class="detail wrap"><div class="pictures"><img class="main-photo" src="'+img(p.image)+'" alt="'+esc(p.name)+'">'+(gallery.length>1?'<div class="thumbs">'+gallery.map((url,i)=>'<button data-photo="'+esc(url)+'" aria-pressed="'+(i===0)+'" aria-label="Fotografie '+(i+1)+'"><img src="'+img(url)+'" alt=""></button>').join('')+'</div>':'')+'</div><div class="detail-info"><small>Kód produktu '+esc(p.id)+'</small><h1>'+esc(p.name)+'</h1><a href="'+categoryLink(p.category)+'">'+esc(label(p.category))+'</a><p>'+description+'</p><span class="availability">'+esc(p.availability)+'</span><div class="purchase">'+(p.oldPrice>p.price?'<del>'+money(p.oldPrice)+'</del>':'')+'<strong>'+money(p.price)+'</strong><div><input id="quantity" type="number" min="1" max="999" value="1" aria-label="Množství"><button data-add="'+esc(p.id)+'" class="cta">'+icon('cart')+' Do košíku</button></div></div></div></div>'+
    '<section class="specs wrap"><h2>Popis produktu</h2><p>'+description+'</p>'+(rows.length?'<h2>Parametry</h2><dl>'+rows.map(([k,v])=>'<dt>'+esc(k)+'</dt><dd>'+esc(v)+'</dd>').join('')+'</dl>':'')+'</section>'+
    (theme==='jupiter'?'<div class="sticky-buy" hidden><span>'+esc(p.name)+'</span><strong>'+money(p.price)+'</strong><button data-add="'+esc(p.id)+'" class="cta">Do košíku</button></div>':'');
}
function save() {try{sessionStorage.setItem(cartKey,JSON.stringify(basket));}catch{}}
function render(scroll=true) {
  const [route, ...components]=location.hash.slice(1).split('/');
  let value=''; try{value=decodeURIComponent(components.join('/'));}catch{}
  let main;
  if(routes.includes(route)) main=checkoutPage(routes.indexOf(route));
  else if(route==='complete') main=completePage();
  else if(route==='product') main=detail(getProduct(value) || products[0]);
  else if(route==='category') main=crumb(value)+productGrid(products.filter(p=>p.category===value),value,'h1');
  else if(route==='search') main=crumb('Vyhledávání')+productGrid(products.filter(p=>(p.name+' '+p.category).toLocaleLowerCase('cs').includes(value.toLocaleLowerCase('cs'))),'Výsledky hledání „'+value+'“','h1');
  else if(route==='products') main=crumb('Sortiment')+productGrid(products,'Sortiment','h1');
  else if(route==='contact') main=contactPage();
  else main=home();
  shop.innerHTML=header(routes.includes(route)||route==='complete')+'<main>'+main+'</main>'+footer(routes.includes(route)||route==='complete');
  footGroups();
  if(scroll) window.scrollTo(0,0);
  updateSticky();
}
function updateSticky(){
  const bar=document.querySelector('.sticky-buy');
  if(bar) bar.hidden=document.querySelector('.purchase').getBoundingClientRect().bottom>0;
}
shop.addEventListener('click',e=>{
  const btn=e.target.closest('button'); if(!btn)return;
  if(btn.classList.contains('burger')){
    const expanded=btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded',String(!expanded)); document.querySelector('header').classList.toggle('open',!expanded);
  }else if(btn.dataset.slide!==undefined){
    slide=Number(btn.dataset.slide); document.querySelector('.hero').outerHTML=hero();
  }else if(btn.dataset.photo){
    document.querySelector('.main-photo').src=img(btn.dataset.photo);
    document.querySelectorAll('[data-photo]').forEach(el=>el.setAttribute('aria-pressed',String(el===btn)));
  }else if(btn.dataset.add){
    const field=document.querySelector('#quantity');
    if(!field.reportValidity()||!field.valueAsNumber){field.focus();return;}
    const id=btn.dataset.add;
    basket[id]=Math.min(999,(basket[id]||0)+field.valueAsNumber);
    save();location.hash='cart';
  }else if(btn.dataset.remove){delete basket[btn.dataset.remove]; save(); render(false);}
});
shop.addEventListener('change',e=>{
  if(e.target.dataset.qty){
    if(!e.target.reportValidity() || !e.target.valueAsNumber){e.target.value=basket[e.target.dataset.qty];return;}
    basket[e.target.dataset.qty]=e.target.valueAsNumber; save(); render(false);
  }
});
shop.addEventListener('submit',e=>{if(e.target.classList.contains('search')){e.preventDefault(); const q=e.target.elements.q.value.trim();location.hash=q?'search/'+encodeURIComponent(q):'products';}});
window.addEventListener('hashchange',()=>render());
window.addEventListener('scroll',updateSticky,{passive:true});


