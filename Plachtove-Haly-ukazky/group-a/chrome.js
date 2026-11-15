const seller='https://www.plachtovehaly-agrodabaki.cz';
const tel='<a href="tel:+420774960063">+420 774 960 063</a>';
const mail='<a href="mailto:agro@dabaki.cz">agro@dabaki.cz</a>';
const external=(path,text)=>'<a href="'+seller+path+'" target="_blank" rel="noopener">'+text+'</a>';
const buyInfo=external('/m/informace-4/vse-o-nakupu-5/','Vše o nákupu');
const terms=external('/m/informace-4/obchodni-podminky-16/','Obchodní podmínky');
const account=external('/profil/settings/','Můj účet');
function searchForm(){
  return '<form class="search" role="search"><input type="search" name="q" placeholder="Napište, co hledáte" aria-label="Hledat v sortimentu"><button aria-label="Vyhledat">'+(['merkur','adamin'].includes(theme)?'Hledat':icon('search'))+'</button></form>';
}
function header(checkout){
  const links=categories.map(c=>'<a href="'+categoryLink(c)+'">'+esc(label(c))+'</a>').join('');
  const brand='<a class="brand" href="#home">'+logo()+'</a>';
  const phone='<div class="main-phone"><small>Zákaznická podpora</small>'+tel+'</div>';
  const cart='<a class="cart-link" href="#cart" aria-label="Nákupní košík">'+icon('cart')+'<span>'+(count()?money(total()):'Prázdný košík')+'</span><b>'+count()+'</b></a>';
  const menu='<button type="button" class="burger" aria-label="Kategorie" aria-controls="main-nav" aria-expanded="false">'+icon('menu')+'<small>Menu</small></button>';
  const accountButton='<a class="account-link" href="'+seller+'/profil/settings/" target="_blank" rel="noopener" aria-label="Můj účet"><svg aria-hidden="true" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 7 0 0 1 16 0v2z"/></svg><span>Můj účet</span></a>';
  const mini=theme==='adamin'&&!checkout?'<details class="mini"><summary aria-label="Rozbalit košík">⌄</summary><div><strong>Nákupní košík</strong>'+storeItems().map(p=>'<p>'+basket[p.id]+' × '+esc(p.name)+'</p>').join('')+'<a href="#cart">Zobrazit košík</a></div></details>':'';
  const searchToggle='<button type="button" class="search-toggle" aria-label="Otevřít hledání" aria-expanded="false">'+icon('search')+'</button>';
  const utility='<div class="utility"><div class="wrap">'+buyInfo+terms+'<a href="#contact">Kontakty</a>'+(theme==='merkur'?'<div class="top-phone">'+tel+'</div>':'')+'<span>Čeština &nbsp; · &nbsp; CZK</span></div></div>';
  const mast='<div class="mast wrap">'+(theme==='jupiter'?menu:'')+brand+(['adamin'].includes(theme)?phone:'')+searchForm()+(theme==='jupiter'?phone:'')+searchToggle+(theme==='merkur'?'<a class="mobile-phone" href="tel:+420774960063" aria-label="Zavolat prodejci">☎</a>':'')+accountButton+'<div class="basket-control">'+(!checkout?cart:'')+mini+'</div>'+(theme==='jupiter'?'':menu)+'</div>';
  return '<header class="store-header '+(checkout?'in-checkout':'')+'">'+utility+mast+'<nav id="main-nav" aria-label="Kategorie"><div class="wrap">'+links+'</div></nav></header>';
}
function contactPage(){
  return crumb('Kontakt')+'<section class="wrap contact"><h1>Kontakt</h1><h2>Agro Dabaki s.r.o.</h2><p>Blanická 152<br>257 03 Jankov<br>IČO 05763177</p><p>'+tel+'<br>'+mail+'<br>Po–Pá 8.00–16.00</p>'+external('/m/kontakt-6/','Kontaktní formulář na původním e-shopu')+'</section>';
}
function footer(checkout){
  if(checkout){
    if(theme!=='adamin')return '';
    return '<div class="end-banner"><a href="#products"><img src="'+img(window.CATALOG.hero)+'" alt=""><span>Plachtové haly AgroDabaki<small>Prohlédnout nabídku</small></span></a></div>';
  }
  const section=(title,body)=>'<details class="foot-group" open><summary>'+title+'</summary><div>'+body+'</div></details>';
  const support=section('Zákaznický servis',buyInfo+terms+'<a href="#contact">Kontakty</a>');
  const catalog=section('Náš sortiment',categories.slice(0,4).map(c=>'<a href="'+categoryLink(c)+'">'+esc(label(c))+'</a>').join(''));
  const business=section('Informace pro vás','<a href="#contact">Agro Dabaki s.r.o.</a>'+buyInfo+account);
  const pay=section('Doprava a platba','<span>GEIS · FOFR</span><span>Osobní odběr</span><span>Bankovní převod</span>');
  const address='<div class="foot-contact"><a class="brand" href="#home">'+logo()+'</a><strong>Zákaznická podpora</strong>'+tel+mail+'<a href="#contact">Blanická 152, 257 03 Jankov</a></div>';
  const social='<a href="https://www.facebook.com/dabaki.cz" target="_blank" rel="noopener">Facebook Agro Dabaki</a>';
  const newsletter='<div class="footer-news"><div><strong>'+(theme==='merkur'?'Mějte přehled o novinkách':theme==='jupiter'?'Aktuální novinky na váš e-mail':'Odebírat newsletter')+'</strong></div><form class="demo-news"><label>E-mail<input type="email" required placeholder="Váš e-mail" aria-label="E-mail pro ukázku newsletteru"></label><button>Odebírat</button><span aria-live="polite"></span></form></div>';
  const socialBar='<div class="foot-service"><b>Pomůžeme vám s výběrem</b>'+mail+tel+social+'</div>';
  const columns=theme==='adamin'?business+pay+section('Vyhledávání',searchForm())+address:theme==='jupiter'?business+catalog+pay+section('Sledujte nás',social):theme==='merkur'?support+catalog+business+address:support+business+pay+address;
  return '<footer class="store-footer '+(checkout?'checkout-footer':'')+'"><div class="foot-wrap">'+newsletter+(theme==='jupiter'?socialBar:'')+'<div class="foot-grid">'+columns+'</div><div class="foot-base">© Agro Dabaki s.r.o. &nbsp; · &nbsp; Plachtové haly</div></div></footer>';
}
shop.addEventListener('click',e=>{
  const btn=e.target.closest('.search-toggle');if(!btn)return;
  const head=btn.closest('header');const open=head.classList.toggle('search-open');
  btn.setAttribute('aria-expanded',String(open));if(open)head.querySelector('input[name=q]').focus();
});
shop.addEventListener('submit',e=>{
  if(e.target.classList.contains('demo-news')){e.preventDefault();e.target.querySelector('span').textContent='Ukázka přihlášení dokončena.';e.target.reset();}
});
const narrow=window.matchMedia('(max-width:700px)');
function footGroups(){document.querySelectorAll('.foot-group').forEach(group=>{group.open=!narrow.matches || theme==='adamin';});}
narrow.addEventListener('change',footGroups);
render();


