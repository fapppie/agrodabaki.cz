window.titanStore=function({categories,categoryLink,esc,photo,logo,icon,products,hero,money,detailLink,quantity,crumbs}){
  const base="https://www.plachtovehaly-agrodabaki.cz";
  const external=(path,text)=>'<a href="'+esc(base+path)+'" target="_blank" rel="noopener">'+text+'</a>';
  const info=[["/m/4/5/","Jak nakupovat"],["/m/4/16/","Obchodní podmínky"],["/m/4/17/","Podmínky ochrany osobních údajů"]].map(([p,t])=>external(p,t)).join("");
  const phone='<a href="tel:+420774960063">+420 774 960 063</a>',email='<a href="mailto:agro@dabaki.cz">agro@dabaki.cz</a>';
  const links=categories.map(c=>'<a href="'+categoryLink(c)+'">'+esc(c)+'</a>').join("");
  const brand='<a class="t-logo" href="#home">'+photo(logo,'AgroDabaki – úvodní stránka')+'</a>';
  const search='<form class="search t-search" role="search"><button aria-label="Hledat">'+icon("search")+'</button><input placeholder="Napište, co hledáte" type="search" aria-label="Vyhledat produkt"></form>';
  const menuButton='<button class="menu-btn" aria-label="Otevřít kategorie" aria-controls="menu-panel" aria-expanded="false">'+icon("menu")+'</button>';
  let hideNotice=false;
  function header(count,order){
    const short=["Obloukové haly","Sedlové haly","Přístřešky pro zvířata","Plachtové garáže"];
    const nav=short.map((s,i)=>'<a href="'+categoryLink(categories[i])+'">'+s+' ⌄</a>').join("");
    return '<div class="t-utility"><div>'+phone+email+'</div><div>'+info+'</div></div><div class="t-main-head">'+menuButton+brand+search+'<div class="t-account-slot"><small>Jazyk a měna</small><b>Čeština · Kč</b></div><div class="t-account-slot"><small>Uživatel</small>'+external("/profil/settings/",'<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="7" r="4"/><path d="M4 22v-2a8 8 0 0 1 16 0v2"/></svg> Přihlášení')+'</div><button class="t-search-toggle" aria-label="Vyhledávání">'+icon("search")+'</button>'+(order?"":'<a class="t-bag" href="#cart"><small>Nákupní košík</small><b>'+icon("shop")+' <span>'+(count?count+' ks':'Prázdný košík')+'</span></b></a>')+'</div><nav class="t-nav">'+nav+external("/m/4/16/","Obchodní podmínky")+external("/m/6/","Kontakty")+menuButton+'</nav><nav id="menu-panel" hidden><a href="#home">Úvodní stránka</a>'+links+info+'</nav>'+(!order && !hideNotice?'<div class="t-notice">Náhradní díly nad 5 000 Kč s dopravou zdarma<button aria-label="Skrýt oznámení">×</button></div>':'');
  }
  function footer(order){
    const copy='<div class="t-copy">© AgroDabaki · '+external("/m/4/17/","Ochrana osobních údajů")+'</div>';
    if(order) return copy;
    return '<div class="t-footcols"><section><h2>Kategorie</h2>'+links+'</section><section><h2>Kontakt</h2><b>AgroDabaki</b>'+email+phone+'<a href="https://www.facebook.com/dabaki.cz" target="_blank" rel="noopener">Facebook</a></section><section><h2>Způsoby platby</h2><p>Bankovním převodem</p><p>Hotově při odběru</p></section><section><h2>Přihlášení</h2><p>Zákaznický účet AgroDabaki</p>'+external("/profil/settings/",'<span class="t-cta">Přihlásit se</span>')+'</section></div><div class="t-news"><div><h2>Odebírat newsletter</h2>'+external("/m/4/17/","Podmínky ochrany osobních údajů")+'</div><form class="t-subscribe"><input type="email" placeholder="Váš e-mail" aria-label="Váš e-mail" required><button>Přihlásit se</button><output aria-live="polite"></output></form></div>'+copy;
  }
  function cards(items){
    return '<div class="t-cards">'+items.map(p=>'<article><small>Kód '+esc(p.id)+'</small><a class="t-card-photo" href="'+detailLink(p)+'">'+photo(p.image,p.name,'loading="lazy"')+'</a><a class="t-name" href="'+detailLink(p)+'">'+esc(p.name)+'</a><span class="availability">'+esc(p.availability)+'</span><strong>'+money(p.price)+'</strong><span class="t-vat">s DPH</span><p>'+esc(p.description)+'</p><div class="t-add">'+quantity(p.id)+'<button class="t-cta" data-add="'+esc(p.id)+'">'+icon("shop")+' Do košíku</button></div></article>').join("")+'</div>';
  }
  function banner(p,img,title,cta,classes){
    return '<a class="t-banner '+classes+'" href="'+detailLink(p)+'"><div><strong>'+title+'</strong><span>'+cta+'</span></div>'+photo(img,"")+'</a>';
  }
  function home(){
    const featured=[products[0], products.find(p=>p.category===categories[2]),products.find(p=>p.category===categories[5])];
    const guide='<div class="t-guides"><div>'+icon("box")+'<b>Náhradní díly</b><span>Doprava zdarma nad 5 000 Kč</span></div><div>'+icon("phone")+'<b>Poradíme s výběrem</b>'+phone+'</div><div>'+icon("ruler")+'<b>Haly na míru</b><span>Úprava šířky, délky i výšky</span></div><div>'+icon("shop")+'<b>Informace o nákupu</b>'+external("/m/4/5/","Doprava a platba")+'</div></div>';
    return '<section class="t-banners">'+banner(featured[0],hero,"Plachtové haly AgroDabaki","Prohlédnout halu","main-banner")+banner(featured[1],featured[1].image,"Přístřešky pro zvířata","Podívat se","second-banner")+banner(featured[2],featured[2].image,"Zemědělská technika","Prohlédnout","third-banner")+'</section>'+guide+'<div class="t-title"><h1>Z naší nabídky</h1><div><button data-grid="-1" aria-label="Předchozí produkty">‹</button><button data-grid="1" aria-label="Další produkty">›</button></div></div>'+cards(products);
  }
  function detail(p){
    const imgs=[...new Set([p.image,...p.images])];
    const sticky='<div class="t-fixed-buy" hidden>'+photo(p.image,"")+'<div><strong>'+esc(p.name)+'</strong><span>'+money(p.price)+'</span></div>'+quantity(p.id)+'<button class="t-cta" data-add="'+esc(p.id)+'">Přidat do košíku</button></div>';
    const related=products.filter(item=>item.id!==p.id && item.category===p.category);
    const title='<h1>'+esc(p.name)+'</h1>';
    const params=Object.entries(p.params || {}).map(([k,v])=>'<dt>'+esc(k)+'</dt><dd>'+esc(v)+'</dd>').join("");
    return crumbs(p.name,p.category)+'<div class="t-detail"><div class="t-mobile-title">'+title+'</div><div class="gallery"><div class="gallery-track" tabindex="0" aria-label="Fotografie produktu">'+imgs.map((f,i)=>photo(f,p.name+' – fotografie '+(i+1))).join("")+'</div><div class="thumbs">'+imgs.map((f,i)=>'<button data-photo="'+i+'" aria-label="Fotografie '+(i+1)+'">'+photo(f,"")+'</button>').join("")+'</div></div><div class="t-details"><div class="t-desktop-title">'+title+'</div><small>Kód '+esc(p.id)+'</small><a class="t-detail-cat" href="'+categoryLink(p.category)+'">'+esc(p.category)+'</a><p>'+esc(p.description)+'</p><button data-specs>Detailní informace</button><div class="t-stock">'+esc(p.availability)+'</div><div class="price"><strong>'+money(p.price)+'</strong><small>s DPH</small></div><div class="add">'+quantity(p.id)+'<button class="t-cta" data-add="'+esc(p.id)+'">'+icon("shop")+' Přidat do košíku</button></div></div></div><section class="t-specs" tabindex="-1"><h2>Detailní informace</h2><dl><dt>Kategorie</dt><dd>'+esc(p.category)+'</dd><dt>Kód produktu</dt><dd>'+esc(p.id)+'</dd>'+params+'</dl><p>'+esc(p.description)+'</p></section>'+(related.length?'<h2>Související produkty</h2>'+cards(related):'')+sticky;
  }
  document.addEventListener("click",e=>{
    const el=e.target.closest("button");if(!el)return;
    if(el.matches(".t-search-toggle")) {const search=document.querySelector(".t-search");search.classList.toggle("is-open");if(search.classList.contains("is-open"))search.querySelector("input").focus();}
    if(el.closest(".t-notice")){hideNotice=true;el.parentElement.remove();}
    if(el.hasAttribute("data-specs"))document.querySelector(".t-specs").focus();
    if(el.dataset.grid) {const list=document.querySelector(".t-cards");list.scrollBy({left:list.clientWidth*Number(el.dataset.grid),behavior:"smooth"});}
  });
  document.addEventListener("submit",e=>{if(e.target.matches(".t-subscribe")){e.preventDefault();e.target.querySelector("output").textContent="Ukázkové přihlášení k odběru. E-mail zůstává v prohlížeči.";}}); 
  function syncSticky() {
    document.querySelector("#header").classList.toggle("t-scrolled",window.scrollY>160);
    const fixed=document.querySelector(".t-fixed-buy");
    if(fixed) fixed.hidden=document.querySelector(".t-details .add").getBoundingClientRect().bottom>60;
  }
  window.addEventListener("scroll",syncSticky,{passive:true});
  window.addEventListener("resize",syncSticky);
  return {header,footer,cards,home,detail};
};


