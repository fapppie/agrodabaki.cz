(() => {
  'use strict';
  const theme = document.documentElement.className;
  const apeti = theme.startsWith('apeti');
  const clear = theme === 'apeti-clear';
  const jaspis = theme === 'jaspis';
  const dark = theme === 'tmavy-vzhled';
  const { logo, hero, products } = window.CATALOG;
  const categories = [...new Set(products.map(p => p.category).filter(Boolean))];
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const money = value => new Intl.NumberFormat('cs-CZ', { maximumFractionDigits: 2 }).format(value) + ' Kč';
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
  const path = value => '../../' + escape(value);
  const find = id => products.find(p => String(p.id) === String(id));
  const itemLink = p => '#product/' + encodeURIComponent(p.id);
  const catLink = value => '#category/' + encodeURIComponent(value);
  const storeKey = 'agrodabaki-preview-cart-b-' + theme;
  const cart = window.loadDemoCart(() => sessionStorage.getItem(storeKey));
  const total = () => Object.entries(cart).reduce((sum, [id, qty]) => sum + find(id).price * qty, 0);
  const icon = name => {
    const icons = {
      cart: '<path d="M2 3h3l3 12h12l2-9H6"/><circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/>',
      search:'<circle cx="10" cy="10" r="6.5"/><path d="m15 15 6 6"/>',
      menu:'<path d="M3 5h18M3 12h18M3 19h18"/>',
      house:'<path d="m2 11 10-9 10 9M5 10v11h14V10M9 21v-7h6v7"/>',
      phone:'<path d="M6 3h3l2 5-2 2c2 3 3 4 6 5l2-2 4 2v4c0 4-10 1-14-4S1 4 6 3Z"/>',
      mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>'
    };
    return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + icons[name] + '</svg>';
  };
  const phone = '<a href="tel:+420774960063">' + icon('phone') + '+420 774 960 063</a>';
  const email = '<a href="mailto:agro@dabaki.cz">' + icon('mail') + 'agro@dabaki.cz</a>';
  const categoryMenu = () => categories.map(c => `<a href="${catLink(c)}">${escape(c)}</a>`).join('');

  const seller = 'https://www.plachtovehaly-agrodabaki.cz';
  const external = (url, label) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  const infoLinks = external(seller+'/m/4/5/','Vše o nákupu') + external(seller+'/m/4/16/','Obchodní podmínky') + external(seller+'/m/4/17/','Ochrana soukromí');
  const social = external('https://www.facebook.com/dabaki.cz','Facebook');
  const navNames = ['Obloukové haly','Sedlové haly','Pro zvířata','Garáže','Pro kontejnery','Mulčovače'];
  const nav = () => `<nav class="nav wrap" aria-label="Hlavní nabídka">${categories.map((c,i)=>'<a href="'+catLink(c)+'">'+escape(navNames[i] || c)+'</a>').join('')}<a href="#contact">Kontakt</a></nav>`;
  const search = () => `<form class="search" role="search"><input name="term" aria-label="Hledat produkty" placeholder="Napište, co hledáte" required><button type="submit" aria-label="Vyhledat">${apeti?icon('search'):'Hledat'}</button></form>`;
  let announcement = true;
  const checkout = createPreviewCheckout({cart,find,money,escape,path,itemLink,phone,email,apeti,dark,save});
  const basketControl = () => `<a class="basket" href="#cart" aria-label="Košík">${icon('cart')}<b>${Object.values(cart).reduce((a,b)=>a+b,0)}</b><span>${total()?money(total()):'Prázdný košík'}</span></a>`;
  function renderHeader(route) {
    const ordering=['cart','shipping','information','complete'].includes(route);
    document.body.classList.toggle('ordering',ordering);
    const account=external(seller+'/profil/settings/','Můj účet');
    const searchButton='<button class="mobile-search" aria-label="Hledat v katalogu">'+icon('search')+'</button>';
    const menu='<button class="mob-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Otevřít nabídku">'+icon('menu')+'</button>';
    header.innerHTML = `${apeti && announcement && !ordering?'<div class="announce">Plachtové haly také v atypických rozměrech <button data-dismiss aria-label="Zavřít oznámení">×</button></div>':''}
    <div class="top"><div class="wrap top-inner"><div class="contacts">${jaspis?infoLinks:(dark?email:phone+email)}</div>${clear ? search() : !jaspis && !dark ? '<div class="top-links">'+infoLinks+'</div>':''}<div class="language">CZK &nbsp; | &nbsp; Čeština &nbsp; &nbsp; ${account}</div></div></div>
    ${clear?'<div class="mobile-top">'+searchButton+account+' <span>Čeština</span></div>':''}
    <div class="mast wrap"><a href="#home" class="logo"><img src="${path(logo)}" alt="Agro Dabaki – úvodní strana"></a>
    ${jaspis?'<div class="social-mark">'+external('https://www.facebook.com/dabaki.cz','<b aria-label="Facebook">f</b>')+'</div>':''}
    ${clear ? nav() : search()}${jaspis ? '<div class="hotline"><small>Zákaznická podpora</small>' + phone + '</div>' : ''}
    ${!ordering?basketControl():''}${jaspis||dark?searchButton:''}${menu}</div>
    ${!clear && apeti && !ordering?'<div class="mobile-search-row">'+search()+'</div>':''}
    ${clear || jaspis ? '' : '<div class="nav-line">' + nav() + '</div>'}
    <div class="mobile-nav" id="mobile-menu" hidden>${search()}<a href="#home">Úvodní strana</a><a href="#catalog">Všechny produkty</a>${categoryMenu()}<a href="#contact">Kontakt</a>${infoLinks}</div>`;
  }
  function renderFooter(route) {
    const footer=document.querySelector('footer');
    footer.hidden=!apeti && ['cart','shipping','information','complete'].includes(route);
    if(footer.hidden) return;
    const newsletter='<form class="newsletter"><label>Odebírat newsletter<input name="email" type="email" placeholder="Váš e-mail" required></label><button>Přihlásit se</button><small role="status"></small></form>';
    const logoLink='<a class="footer-logo" href="#home"><img src="'+path(logo)+'" alt="Agro Dabaki"></a>';
    const contacts='<section><h2>Kontakt</h2>'+email+phone+social+'</section>';
    const info='<section><h2>Informace pro vás</h2>'+infoLinks+'</section>';
    const searchSection='<section><h2>Vyhledávání</h2>'+search()+'</section>';
    const footerBody=apeti?searchSection+contacts+info:jaspis?logoLink+info+searchSection+'<section><h2>Nákupní košík</h2>'+basketControl()+'</section>':logoLink+newsletter+contacts+'<section><h2>Způsoby platby</h2><p>Převodem</p><p>Hotově při osobním odběru</p></section>';
    footer.innerHTML=(jaspis?'<div class="newsletter-band">'+newsletter+'</div>':'')+'<div class="footer-cols wrap">'+footerBody+'</div><div class="footer-credit">'+(dark?'<div>'+infoLinks+'</div>':'')+'© 2026 Agro Dabaki s.r.o.</div>';
  }
  const aside = () => `<aside class="categories"><h2>Kategorie</h2>${categoryMenu()}<a href="#catalog">Celý sortiment</a></aside>`;
  const card = p => `<article class="product-card"><a href="${itemLink(p)}"><img loading="lazy" src="${path(p.image)}" alt="${escape(p.name)}"></a><div class="card-info"><a class="product-name" href="${itemLink(p)}">${escape(p.name)}</a><small>${escape(p.availability)}</small><strong>${money(p.price)}</strong><a class="pill card-cta" href="${itemLink(p)}">Detail produktu</a></div></article>`;
  const grid = items => `<div class="products">${items.map(card).join('')}</div>`;
  const heroBanner = () => `<section class="hero"><img src="${path(hero || products[0].image)}" alt=""><div class="hero-copy"><h1>Plachtové haly</h1><p>Obloukové a sedlové haly pro zemědělství, techniku i skladování.</p><a class="pill" href="#catalog">Prohlédnout nabídku</a></div></section>`;
  const tiles = () => `<div class="tiles">${categories.slice(0,2).map(c=>`<a href="${catLink(c)}"><img src="${path(products.find(p=>p.category===c).image)}" alt=""><b>${escape(c)}</b></a>`).join('')}</div>`;
  function home() {
    if (jaspis) return `<div class="wrap column-layout jaspis-home">${aside()}<div>${heroBanner()}${tiles()}<h2>Z naší nabídky</h2>${grid(products)}</div></div>`;
    return `${heroBanner()}<div class="wrap home-body">${apeti ? `<section class="feature"><img loading="lazy" alt="" src="${path(products[1]?.image || products[0].image)}"><div><h2>Hala podle vašich rozměrů</h2><p>Šířku, délku i výšku haly můžeme přizpůsobit vašim požadavkům.</p><a class="pill" href="#contact">Kontaktovat Agro Dabaki</a></div></section>` : tiles()}<h2>Z naší nabídky</h2>${grid(products)}</div>`;
  }
  const breadcrumb = title => `<div class="crumb"><a href="#home" aria-label="Úvodní strana">${icon('house')}</a><span>›</span>${escape(title)}</div>`;
  function detail(p) {
    const pics = [...new Set([p.image, ...(p.images || [])].filter(Boolean))];
    const facts = Object.entries(p.params || {});
    return `<div class="wrap">${breadcrumb(p.category)}<div class="column-layout">${aside()}<div><div class="detail-grid"><div class="gallery"><img class="main-photo" src="${path(pics[0])}" alt="${escape(p.name)}">${pics.length > 1 ? '<div class="thumbs">' + pics.map((pic,i)=>`<button type="button" data-photo="${path(pic)}" aria-label="Fotografie ${i+1}" aria-pressed="${!i}"><img src="${path(pic)}" alt=""></button>`).join('')+'</div>' : ''}</div><section class="detail-info"><a class="category-tag" href="${catLink(p.category)}">${escape(p.category)}</a><h1>${escape(p.name)}</h1><p class="availability">${escape(p.availability)}</p><div class="price">${money(p.price)}</div>${p.oldPrice > p.price ? `<del>${money(p.oldPrice)}</del>`:''}<form class="buy" data-id="${escape(p.id)}"><label>Počet kusů<input name="qty" aria-label="Počet kusů" type="number" min="1" max="999" value="1" required></label><button class="pill">Přidat do košíku</button></form><p class="description">${escape(p.description)}</p></section></div>${facts.length ? `<section class="parameters"><h2>Parametry produktu</h2><dl>${facts.map(([k,v])=>`<div><dt>${escape(k)}</dt><dd>${escape(v)}</dd></div>`).join('')}</dl></section>` : ''}</div></div></div>`;
  }
  function listing(category,term) {
    const norm = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    const shown = products.filter(p=>(!category || p.category === category) && (!term || norm(p.name+' '+p.category).includes(norm(term))));
    const title = category || (term ? 'Výsledky hledání „'+term+'“' : 'Všechny produkty');
    return `<div class="wrap">${breadcrumb(title)}<div class="column-layout">${aside()}<section><h1>${escape(title)}</h1>${shown.length ? grid(shown) : '<p>Žádné produkty neodpovídají zadání.</p><a href="#catalog">Zobrazit celý sortiment</a>'}</section></div></div>`;
  }
  function render() {
    let [route, ...parts] = location.hash.slice(1).split('/');
    let arg;
    try { arg = decodeURIComponent(parts.join('/')); } catch { arg = ''; }
    renderHeader(route);
    if (route === 'product') main.innerHTML = detail(find(arg) || products[0]);
    else if (['cart','shipping','information','complete'].includes(route)) main.innerHTML = checkout.page(route);
    else if (['catalog','category','search'].includes(route)) main.innerHTML = listing(route === 'category' ? arg : '',route === 'search' ? arg : '');
    else if (route === 'contact') main.innerHTML = '<section class="wrap contact-page">'+breadcrumb('Kontakt')+'<h1>Agro Dabaki</h1><h2>Kontakt</h2>'+phone+email+'<p>Po–Pá 8:00–16:00</p></section>';
    else main.innerHTML = home();
    renderFooter(route);
    document.title = (main.querySelector('h1')?.textContent || 'Katalog') + ' | Agro Dabaki';
  }
  function save() { try { sessionStorage.setItem(storeKey, JSON.stringify(cart)); } catch {} }
  document.addEventListener('click', e => {
    if(e.target.closest('[data-dismiss]')) {announcement=false; e.target.closest('.announce').remove();}
    const adjust=e.target.closest('[data-adjust]');
    if(adjust){const id=adjust.dataset.id;cart[id]=Math.max(1,Math.min(999,cart[id]+Number(adjust.dataset.adjust))); save(); render();}
    const toggle = e.target.closest('.mob-toggle,.mobile-search');
    if (toggle) {
      const menu = document.querySelector('.mobile-nav');
      menu.hidden = !menu.hidden;
      document.querySelector('.mob-toggle').setAttribute('aria-expanded', String(!menu.hidden));
      if(toggle.matches('.mobile-search')&&!menu.hidden) menu.querySelector('input').focus();
    }
    const photo = e.target.closest('[data-photo]');
    if (photo) {
      document.querySelector('.main-photo').src = photo.dataset.photo;
      document.querySelectorAll('[data-photo]').forEach(b=>b.setAttribute('aria-pressed',String(b===photo)));
    }
    const remove = e.target.closest('[data-remove]');
    if (remove) { delete cart[remove.dataset.remove]; save(); render(); }
    if (e.target.closest('.skip')) { e.preventDefault(); main.focus(); }
    if (e.target.closest('.mobile-nav a')) document.querySelector('.mobile-nav').hidden = true;
  });
  document.addEventListener('input', e=>checkout.remember(e.target));
  document.addEventListener('change', e => {
    checkout.change(e.target,render);
    if (e.target.matches('[data-qty]')) {
      const qty = Number(e.target.value);
      if (Number.isInteger(qty) && qty >= 1 && qty <= 999) { cart[e.target.dataset.qty] = qty; save(); }
      render();
    }
  });
  document.addEventListener('submit',e=>{
    e.preventDefault();
    const form = e.target;
    if(form.matches('#checkout-info')) checkout.finish();
    if(form.matches('.newsletter')){form.querySelector('[role=status]').textContent='Ukázka přihlášení dokončena. E-mail se neodeslal.';form.elements.email.value='';}
    if (form.matches('.search')) location.hash = 'search/' + encodeURIComponent(form.elements.term.value.trim());
    if (form.matches('.buy')) {
      const id = form.dataset.id;
      cart[id] = Math.min(999, (cart[id] || 0) + Number(form.elements.qty.value)); save(); location.hash = 'cart';
    }
  });
  window.addEventListener('hashchange',()=>{render(); window.scrollTo(0,0);});
  render();
})();
