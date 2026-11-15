(() => {
  "use strict";

  const {products, logo, hero} = window.CATALOG;
  const categories = [...new Set(products.map(p => p.category))];
  const template = document.body.dataset.template;
  const sniper = template === "sniper-one";
  const celestin = template === "celestin";
  const storageKey = "plachtove-haly-cart-" + template;
  const store = document.querySelector("#store");
  const header = document.querySelector("#header");
  const dialog = document.querySelector("#feedback");
  const icons = {
    shop: '<path d="M2 3h3l2.5 12H19l2-9H6"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/>',
    search:'<circle cx="10" cy="10" r="6.5"/><path d="m15 15 6 6"/>',
    menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
    box:'<path d="m3 6 9-4 9 4v12l-9 4-9-4zm0 0 9 5 9-5m-9 5v11"/>',
    phone:'<path d="m5 3 4 4-2 3c1.5 3 4 5.5 7 7l3-2 4 4-2 2C11 24 0 12 3 5z"/>',
    arrow:'<path d="m9 4 8 8-8 8"/>',
    ruler:'<path d="m3 16 13-13 5 5L8 21zm6-6 2 2m2-6 2 2"/>'
  };
  const icon = name => '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+icons[name]+'</svg>';
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const rootAsset = p => "../../" + p;
  const money = n => new Intl.NumberFormat("cs-CZ",{style:"currency",currency:"CZK",maximumFractionDigits:0}).format(n);
  const detailLink = p => "#product/" + encodeURIComponent(p.id);
  const categoryLink = c => "#category/" + encodeURIComponent(c);
  const fold = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
  const photo = (url,alt,attrs="") => '<img src="'+esc(rootAsset(url))+'" alt="'+esc(alt)+'" '+attrs+'>';
  const cart = window.loadDemoCart(() => localStorage.getItem(storageKey));
  function setCount(id, count) {
    if (count > 0) cart[id] = Math.min(999,Math.floor(count));
    else delete cart[id];
    try {localStorage.setItem(storageKey,JSON.stringify(cart));} catch {}
  }
  const titan=window.titanStore?.({categories,categoryLink,esc,photo,logo,icon,products,hero,money,detailLink,quantity,crumbs});
  const chrome=titan || window.storeChrome({template,categories,categoryLink,esc,photo,logo,icon});
  function drawHeader() {
    const inOrder=checkout.pages.includes(location.hash.slice(1));
    header.innerHTML=chrome.header(Object.values(cart).reduce((s,n)=>s+n,0),inOrder);
    document.querySelector("footer").innerHTML=chrome.footer(inOrder);
  }
  function sidebar() {
    return '<aside class="categories"><h2>Kategorie</h2>'+categories.map(c=>'<a href="'+esc(categoryLink(c))+'">'+(celestin?icon("box"):"")+'<span>'+esc(c)+'</span>'+icon("arrow")+'</a>').join("")+'<a href="#assortment">Celá nabídka '+icon("arrow")+'</a></aside>';
  }
  function spotlight(url, label, target, style, cta="Prohlédnout") {
    return '<a class="spot '+style+'" href="'+esc(target)+'">'+photo(url,"")+'<div><strong>'+esc(label)+'</strong><span>'+esc(cta)+'</span></div></a>';
  }
  function highlightProducts() {
    const picks = categories.map(c=>products.find(p=>p.category===c));
    return [...picks,...products.filter(p=>!picks.includes(p))];
  }
  let heroIndex=0;
  function orionLead(picks) {
    const p=picks[heroIndex % picks.length];
    const lead=spotlight(heroIndex===0 ? hero : p.image,heroIndex===0 ? "Plachtové haly" : p.category,detailLink(p),"lead",heroIndex===0 ? "Prohlédnout halu" : "Prohlédnout produkt");
    return '<div class="orion-hero">'+lead+'<div class="hero-controls"><button data-hero="-1" aria-label="Předchozí nabídka">‹</button><button data-hero="1" aria-label="Další nabídka">›</button></div></div>';
  }
  function banners() {
    const picks = highlightProducts();
    const [first,second=first,third=first] = picks;
    if (sniper) {
      return '<section class="carousel" aria-label="Výběr z nabídky"><div class="portraits">'+picks.slice(0,6).map((p,i)=>spotlight(i===0?hero:p.image,p.category,detailLink(p),"portrait","Prohlédnout produkt")).join("")+'</div><button class="previous" data-slide="-1" aria-label="Předchozí bannery">‹</button><button class="next" data-slide="1" aria-label="Další bannery">›</button></section>';
    }
    return '<section class="banners" aria-label="Výběr z nabídky">'+(celestin ? spotlight(hero,"Plachtové haly",detailLink(first),"lead","Prohlédnout halu") : orionLead(picks))+spotlight(second.image,second.category,categoryLink(second.category),"side")+spotlight(third.image,third.category,categoryLink(third.category),"side")+'</section>';
  }
  function services() {
    return '<div class="services"><div>'+icon("ruler")+'<span><b>Atypické rozměry hal</b>Šířka, délka i výška na přání</span></div><div>'+icon("phone")+'<span><b>Poradíme s výběrem</b><a href="tel:+420774960063">+420 774 960 063</a></span></div><div>'+icon("box")+'<span><b>Náhradní díly</b>Doprava zdarma nad 5 000 Kč</span></div></div>';
  }
  function quantity(id, value=1) {
    return '<input class="quantity" aria-label="Počet kusů" type="number" inputmode="numeric" min="1" max="999" step="1" value="'+value+'" data-quantity="'+esc(id)+'">';
  }
  function cards(items) {
    if(titan) return titan.cards(items);
    return '<div class="products">'+items.map(p=>'<article class="product-card"><a class="card-image" href="'+detailLink(p)+'">'+photo(p.image,p.name,'loading="lazy"')+'</a><div class="product-body"><a class="product-name" href="'+detailLink(p)+'">'+esc(p.name)+'</a><span class="availability">'+esc(p.availability)+'</span><strong class="card-price">'+money(p.price)+'</strong>'+(sniper?'<div class="add">'+quantity(p.id)+'<button class="action" data-add="'+esc(p.id)+'">Do košíku</button></div>':'<a class="detail-btn" href="'+detailLink(p)+'">Detail produktu</a>')+'</div></article>').join("")+'</div>';
  }
  function crumbs(title, category) {
    return '<div class="crumbs"><a href="#home">Úvodní stránka</a> / '+(category?'<a href="'+categoryLink(category)+'">'+esc(category)+'</a> / ':"")+esc(title)+'</div>';
  }
  function home() {
    if(titan) return titan.home();
    const promotion=sniper ? '<div class="wide-banners">'+categories.slice(-2).map(c=>products.find(p=>p.category===c)).map(p=>spotlight(p.image,p.category,categoryLink(p.category),"wide","Prohlédnout nabídku")).join("")+'</div>' : "";
    return banners()+promotion+services()+'<section id="products"><h1>Z naší nabídky</h1>'+cards(products)+'</section>';
  }
  function detail(p) {
    if(titan) return titan.detail(p);
    const imgs = [...new Set([p.image,...(p.images || [])])];
    const params = Object.entries(p.params || {});
    return crumbs(p.name,p.category)+'<div class="detail"><div class="gallery"><div class="gallery-track" tabindex="0" aria-label="Fotografie produktu">'+imgs.map((f,i)=>photo(f,p.name+' – fotografie '+(i+1))).join("")+'</div>'+(imgs.length>1?'<div class="thumbs">'+imgs.map((f,i)=>'<button data-photo="'+i+'" aria-label="Fotografie '+(i+1)+'">'+photo(f,"")+'</button>').join("")+'</div>':'')+'</div><div class="purchase"><a class="category-link" href="'+categoryLink(p.category)+'">'+esc(p.category)+'</a><h1>'+esc(p.name)+'</h1><p>'+esc(p.description)+'</p><span class="availability">'+esc(p.availability)+'</span><div class="price">'+(p.oldPrice>p.price?'<del>'+money(p.oldPrice)+'</del> ':'')+'<strong>'+money(p.price)+'</strong> <small>s DPH</small></div><div class="add">'+quantity(p.id)+'<button class="action" data-add="'+esc(p.id)+'">'+icon("shop")+' Do košíku</button></div></div></div>'+(params.length?'<section class="specs"><h2>Parametry produktu</h2><dl>'+params.map(([k,v])=>'<div><dt>'+esc(k)+'</dt><dd>'+esc(v)+'</dd></div>').join("")+'</dl></section>':'');
  }
  const checkout = window.createCheckout({cart, products, money, esc, photo, detailLink, template, quantity, setCount});
  function render() {
    const [page, raw=""] = location.hash.slice(1).split("/");
    let arg = "";
    try {arg = decodeURIComponent(raw);} catch {}
    drawHeader();
    let body;
    const checkoutPage = checkout.pages.includes(page);
    if (checkoutPage) body = checkout.view(page);
    else if (page==="product") body = detail(products.find(p=>String(p.id)===arg) || products[0]);
    else if (page==="category" || page==="search" || page==="assortment") {
      const items = page==="category" ? products.filter(p=>p.category===arg) : products.filter(p=>fold(p.name+" "+p.category).includes(fold(arg)));
      const title = page==="category" ? arg : page==="search" ? 'Výsledky pro „'+arg+'“' : "Celá nabídka";
      body = crumbs(title)+'<h1>'+esc(title)+'</h1>'+(items.length?cards(items):'<p>Žádný produkt neodpovídá vašemu hledání.</p><a class="detail-btn" href="#assortment">Celá nabídka</a>');
    } else body = home();
    store.innerHTML = '<div class="layout">'+(sniper || titan || checkoutPage ? "" : sidebar())+'<main id="content" tabindex="-1">'+body+'</main></div>';
    document.body.dataset.page=page || "home";
    document.body.classList.toggle("in-checkout",checkoutPage);
    window.scrollTo(0,0);
  }
  function added(p,n) {
    document.querySelector("#feedback-content").innerHTML='<h2>Přidáno do košíku</h2><div class="added">'+photo(p.image,p.name)+'<div><b>'+esc(p.name)+'</b><p>'+n+' ks · '+money(p.price*n)+'</p></div></div><div class="dialog-actions"><button data-close>Pokračovat v nákupu</button><a class="action" href="#cart" data-close>Přejít do košíku</a></div>';
    dialog.showModal();
  }
  document.addEventListener("click", event=>{
    const button = event.target.closest("button, a");
    if (!button) return;
    if (button.dataset.adjust) {
      const id=button.dataset.id;
      setCount(id, Math.max(1,Math.min(999,(cart[id] || 1)+Number(button.dataset.adjust)))); render(); return;
    }
    if (button.classList.contains("skip")) {event.preventDefault();document.querySelector("main").focus();return;}
    if (button.hasAttribute("data-close")) dialog.close();
    if (button.classList.contains("menu-btn")) {
      const menu = document.querySelector("#menu-panel");
      menu.hidden=!menu.hidden;
      header.querySelectorAll(".menu-btn").forEach(b=>b.setAttribute("aria-expanded",String(!menu.hidden)));
    } else if (button.dataset.hero) {
      const picks=highlightProducts().slice(0,3);
      const direction=Number(button.dataset.hero);
      heroIndex=(heroIndex+direction+picks.length)%picks.length;
      store.querySelector(".orion-hero").outerHTML=orionLead(picks);
      store.querySelector('[data-hero="'+direction+'"]').focus({preventScroll:true});
    } else if(button.dataset.slide) {
      const track = store.querySelector(".portraits");
      const amount = (track.firstElementChild.offsetWidth+12)*Number(button.dataset.slide);
      if(amount>0 && track.scrollLeft+track.clientWidth>=track.scrollWidth-2) track.scrollTo({left:0});
      else if(amount<0 && track.scrollLeft<2) track.scrollTo({left:track.scrollWidth});
      else track.scrollBy({left:amount});
    } else if(button.hasAttribute("data-photo")) {
      const gallery = store.querySelector(".gallery-track");
      gallery.scrollTo({left:gallery.clientWidth*Number(button.dataset.photo)});
    } else if(button.dataset.add) {
      const p=products.find(p=>String(p.id)===button.dataset.add);
      const input=button.parentElement.querySelector("input");
      if(!input.reportValidity()) return;
      const n=Number(input.value);
      const room=999-(cart[p.id] || 0);
      if (room<n) {input.setCustomValidity("V košíku může být nejvýše 999 kusů tohoto produktu.");input.reportValidity();input.setCustomValidity("");return;}
      setCount(p.id,(cart[p.id]||0)+n);
      drawHeader();
      added(p,n);
    } else if(button.dataset.remove) {setCount(button.dataset.remove,0);render();}
    if (button.matches("#menu-panel a")) document.querySelector("#menu-panel").hidden=true;
  });
  document.addEventListener("change",event=>{
    if(location.hash==="#cart" && event.target.matches(".quantity")) {
      const input=event.target;
      if(input.checkValidity()) {setCount(input.dataset.quantity,Number(input.value));render();}
      else {input.reportValidity();input.value=cart[input.dataset.quantity];}
    }
  });
  document.addEventListener("submit",event=>{
    if(!event.target.matches(".search")) return;
    event.preventDefault();
    location.hash="search/"+encodeURIComponent(event.target.querySelector("input").value.trim());
  });
  window.addEventListener("hashchange",()=>{if(dialog.open) dialog.close();render();});
  render();
})();





