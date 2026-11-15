window.storeChrome = function({template,categories,categoryLink,esc,photo,logo,icon}) {
  const base="https://www.plachtovehaly-agrodabaki.cz";
  const external=(url,text)=>'<a href="'+esc(url)+'" target="_blank" rel="noopener">'+text+'</a>';
  const seller=(path,text)=>external(base+path,text);
  const phone='<a href="tel:+420774960063">+420 774 960 063</a>';
  const mail='<a href="mailto:agro@dabaki.cz">agro@dabaki.cz</a>';
  const fb=external("https://www.facebook.com/dabaki.cz",'<span class="facebook" aria-label="Facebook AgroDabaki">f</span>');
  const info=[["/m/4/5/","Jak nakupovat"],["/m/4/16/","Obchodní podmínky"],["/m/4/17/","Podmínky ochrany osobních údajů"],["/m/6/","Kontakty"]].map(([p,t])=>seller(p,t)).join("");
  const articleTitles=["Kde koupím plachtovou halu?","Průmyslové sklady nové generace","Odolné zázemí pro vaše hospodaření"];
  const blogs=articleTitles.map(t=>seller("/m/blog-15/#:~:text="+encodeURIComponent(t),esc(t))).join("");
  const blog=seller("/m/blog-15/","Blog");
  const cats=categories.map(c=>'<a href="'+esc(categoryLink(c))+'">'+esc(c)+'</a>').join("");
  const brand='<a class="brand" href="#home">'+photo(logo,"AgroDabaki – úvodní stránka")+'</a>';
  const account=seller("/profil/settings/",'<svg aria-label="Zákaznický účet" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="7" r="3.5"/><path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2"/></svg>');
  const menu='<button class="menu-btn mobile-toggle" aria-label="Kategorie" aria-controls="menu-panel" aria-expanded="false">'+icon("menu")+'</button>';
  const search='<form class="search" role="search"><input aria-label="Vyhledat produkt" type="search" placeholder="Napište, co hledáte"><button aria-label="Hledat">'+icon("search")+'</button></form>';
  const nav='<nav id="menu-panel" aria-label="Výběr kategorie" hidden><a href="#home">Úvodní stránka</a>'+cats+info+'</nav>';
  const copyright='<div class="copyright">© AgroDabaki</div>';
  const column=(heading,body)=>'<section><h2>'+heading+'</h2>'+body+'</section>';
  const notice='<div class="store-notice">Plachtové haly na míru · Informace na +420 774 960 063</div>';
  const utility='<div class="chrome-utility"><div>'+info+'</div><div>'+phone+mail+fb+'</div></div>';
  const footerSearch='<form class="footer-search search" role="search"><input type="search" aria-label="Název produktu" placeholder="Název produktu…"><button>Hledat</button></form>';
  function header(count,checkout) {
    const shopping = checkout?'':'<a class="cart-btn" href="#cart" aria-label="Košík, '+count+' kusů">'+icon("shop")+'<span>Košík</span><b>'+count+'</b></a>';
    const panelToggle='<button class="menu-btn nav-toggle" aria-label="Otevřít kategorie" aria-controls="menu-panel" aria-expanded="false">'+icon("menu")+'</button>';
    let html;
    if(template==="celestin") {
      const navLinks=categories.slice(0,2).map((c,i)=>'<a href="'+categoryLink(c)+'">'+(i?"Sedlové haly":"Obloukové haly")+' ⌄</a>').join("");
      html=(checkout?'':notice)+'<div class="mast"><div class="mast-inner">'+brand+'<div class="celestin-nav">'+navLinks+panelToggle+'</div><span class="lang">🇨🇿</span><button class="action-icon" aria-label="Otevřít vyhledávání" data-search-toggle>'+icon("search")+'<small>Hledat</small></button><span class="account">'+account+'<small>Přihlášení</small></span>'+shopping+menu+'</div></div><div class="header-search" hidden>'+search+'</div>';
    } else if(template==="orion"){
      html=utility+'<div class="mast"><div class="mast-inner">'+menu+brand+search+'<span class="lang">🇨🇿</span><span class="account">'+account+'</span>'+shopping+'</div></div>'+(checkout?'':notice);
    } else {
      html=(checkout?'':notice)+utility+'<div class="mast"><div class="mast-inner">'+brand+'<button class="menu-btn browse" aria-controls="menu-panel" aria-expanded="false">Sortiment ⌄</button><span class="mast-link">'+seller("/m/4/5/","Jak nakupovat")+'</span><span class="mast-link">'+blog+'</span>'+search+'<span class="account">'+account+'</span>'+shopping+menu+'</div></div>';
    }
    return html+nav;
  }
  function footer(checkout) {
    if(checkout && template!=="sniper-one") return '<div class="checkout-foot">'+brand+'<span>© AgroDabaki</span>'+seller("/m/4/17/","Ochrana osobních údajů")+'</div>';
    if(template==="orion") return '<div class="news-band"><div><h2>Odebírat newsletter</h2><p>Informace o novinkách v nabídce AgroDabaki.</p></div><form class="demo-news"><label><span class="sr-only">E-mail</span><input required type="email" placeholder="Váš e-mail"></label><button>Přihlásit se</button><output></output></form></div><div class="foot-columns"><section class="orion-contact"><span class="phone-pill">'+phone+'</span>'+brand+'<h2>Kontakt</h2><b>AgroDabaki</b>'+mail+fb+'</section>'+column("Informace pro vás",info)+column("Oblíbené kategorie",categories.slice(0,3).map(c=>'<a href="'+categoryLink(c)+'">'+esc(c)+'</a>').join(""))+column("Vyhledávání",footerSearch)+column("Z našeho blogu",blogs)+'</div>'+copyright;
    if(template==="celestin") return '<div class="foot-columns"><section>'+brand+'</section>'+column("Přihlášení",'<p>Přístup k zákaznickému účtu AgroDabaki</p>'+seller("/profil/settings/",'<span class="signin-link">Přihlásit se</span>'))+column("Kontakt",mail+phone)+column("Informace",info)+'</div>'+copyright;
    return '<div class="foot-support"><strong>Potřebujete poradit?</strong><div>'+phone+'<small>Po – Pá 8.00–16.00</small></div><div>'+mail+'<small>Napište kdykoliv</small></div>'+fb+'</div><div class="foot-columns"><section>'+brand+'</section>'+column("Informace pro vás",info)+column("Oblíbené kategorie",cats)+column("AgroDabaki",blog+seller("/m/6/","Kontakt")+fb)+'</div><div class="pay-strip">Způsoby platby <b>Bankovním převodem</b><b>Hotově při odběru</b></div>'+copyright;
  }
  document.addEventListener("click",e=>{
    if(e.target.closest("[data-search-toggle]")){
      const panel=document.querySelector(".header-search");panel.hidden=!panel.hidden;
      if(!panel.hidden) panel.querySelector("input").focus();
    }
  });
  document.addEventListener("submit",e=>{
    if(e.target.matches(".demo-news")) {e.preventDefault();e.target.querySelector("output").textContent="Ukázka přihlášení k odběru. E-mail se neodesílá.";}
  });
  return {header,footer};
};
