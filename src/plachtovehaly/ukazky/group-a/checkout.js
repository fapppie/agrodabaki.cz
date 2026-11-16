const checkoutMethods = {
  pickup: {label:'Osobní odběr', price:0},
  geis: {label:'GEIS', price:null},
  fofr: {label:'FOFR', price:null}
};
let delivery='pickup', payment='cash', customer={}, receipt=null;
const feeLabel=value=>value===null ? 'Dle dohody' : value ? money(value) : 'Zdarma';
const paymentName=()=>payment==='cash'?'Hotově při odběru':'Bankovním převodem';
const routes=['cart','shipping','customer'];
function progress(step){
  const labels=[theme==='apollo'?'Můj košík':'Nákupní košík','Doprava & platba',theme==='apollo'?'Osobní údaje a adresa':'Informace o vás'];
  return '<div class="order-progress">'+labels.map((s,i)=>{
    const contents='<b>'+ (i+1)+'</b><span>'+s+'</span>';
    return i<=step?'<a class="'+(step===i?'active':'')+'" href="#'+routes[i]+'" '+(step===i?'aria-current="step"':'')+'>'+contents+'</a>':'<span>'+contents+'</span>';
  }).join('')+'</div>';
}
function helpBox(){
  return '<div class="order-help"><strong>Potřebujete pomoc?</strong><div>'+logo()+'<p>Plachtové haly AgroDabaki<br><a href="#contact">Kontaktní údaje</a></p></div></div>';
}
function voucher(){
  const field='<form class="voucher"><input aria-label="Slevový kupón" required placeholder="Vložit slevový kupón"><button>Přidat</button><span aria-live="polite"></span></form>';
  if(theme==='apollo'||theme==='adamin')return '<div class="order-coupon"><strong>'+(theme==='apollo'?'Mám slevový kupón':'Dárky a slevy')+'</strong>'+field+'</div>';
  return '<details class="order-coupon"><summary>Mám slevový kupón</summary>'+field+'</details>';
}
function buyLine(p){
  return '<div class="cart-entry"><a class="entry-pic" href="'+detailLink(p)+'"><img src="'+img(p.image)+'" alt=""></a><div class="entry-name"><a href="'+detailLink(p)+'">'+esc(p.name)+'</a></div><span class="availability">'+esc(p.availability)+'</span><div class="entry-qty"><button data-nudge="-1" data-id="'+esc(p.id)+'" aria-label="Snížit množství">−</button><input value="'+basket[p.id]+'" aria-label="Množství pro '+esc(p.name)+'" data-qty="'+esc(p.id)+'" type="number" min="1" max="999"><button data-nudge="1" data-id="'+esc(p.id)+'" aria-label="Zvýšit množství">+</button></div><small class="unit">'+money(p.price)+' / ks</small><strong class="entry-total">'+money(p.price*basket[p.id])+'</strong><button class="entry-remove" data-remove="'+esc(p.id)+'" aria-label="Odebrat '+esc(p.name)+'">×</button></div>';
}
function orderActions(step){
  const back=step===0?'#products':'#'+routes[step-1];
  const next=step===2?'<button type="submit" form="demo-customer" class="order-next">Dokončit ukázkovou objednávku</button>':'<a class="order-next" href="#'+routes[step+1]+'">Pokračovat <span aria-hidden="true">›</span></a>';
  return '<div class="order-actions">'+next+'<a class="order-back" href="'+back+'">‹ '+(step===0?'Zpět do obchodu':'Zpět')+'</a></div>';
}
function orderTotal(step){
  const items=storeItems(), method=checkoutMethods[delivery];
  return '<div class="order-total">'+(step?'<h2>Rekapitulace objednávky</h2>'+items.map(p=>'<div class="recap-row"><span>'+esc(p.name)+' × '+basket[p.id]+'</span><b>'+money(p.price*basket[p.id])+'</b></div>').join('')+'<div class="recap-row"><span>'+method.label+'</span><b>'+feeLabel(method.price)+'</b></div><div class="recap-row"><span>'+paymentName()+'</span><b>Zdarma</b></div>':'')+'<div class="order-grand"><span>'+(step?(method.price===null?'Celkem bez ceny dopravy':'Celkem k úhradě'):'Celkem za zboží')+'</span><strong>'+money(total()+(step?method.price:0))+'</strong></div>'+orderActions(step)+'</div>';
}
function orderHeader(){return theme==='apollo'?'<div class="apollo-title"><h1>Můj košík</h1><a href="#contact">Potřebujete pomoc? Jsme tu pro vás &nbsp; · &nbsp; Kontakt</a></div>':'';}
function cartBody(){
  const head=theme==='jupiter'?'<div class="entry-head"><span>Produkt</span><span>Dostupnost</span><span>Počet</span><span>Cena za m. j.</span><span>Celkem</span></div>':'';
  const table='<section class="order-items" aria-label="Položky košíku">'+head+storeItems().map(buyLine).join('')+'</section>';
  const shipping='<div class="delivery-note">'+icon('box')+'<span>Doprava a osobní odběr<br><small>Výběr v dalším kroku</small></span></div>';
  if(theme==='apollo')return '<div class="cart-panel">'+table+'<div class="apollo-boxes">'+voucher()+shipping+orderTotal(0)+'</div></div>';
  if(theme==='jupiter')return table+voucher()+'<div class="jupiter-summary">'+shipping+orderTotal(0)+'</div>';
  const help=helpBox();
  return '<div class="order-columns"><div>'+table+voucher()+'</div><aside>'+(theme==='merkur'?help+orderTotal(0):orderTotal(0)+help)+'</aside></div>';
}
function shippingForm(){
  const radios=(name,options,selected)=>options.map(([value,text,fee])=>'<label class="method"><input type="radio" name="'+name+'" value="'+value+'" '+(value===selected?'checked':'')+'><span>'+text+'</span><b>'+fee+'</b></label>').join('');
  const deliveries=Object.entries(checkoutMethods).map(([id,m])=>[id,m.label,feeLabel(m.price)]);
  const payments=[['transfer','Bankovním převodem','Zdarma']];if(delivery==='pickup')payments.unshift(['cash','Hotově při odběru','Zdarma']);
  return '<section class="order-fields"><h2>Základní údaje objednávky</h2><div class="fixed-fields"><span>Země doručení<b>Česká republika</b></span><span>Měna<b>CZK</b></span></div><h2>Zvolte způsob dopravy</h2><p class="demo-note">Cenu přepravy haly potvrdí prodejce podle rozměrů a místa dodání.</p>'+radios('shipping',deliveries,delivery)+'<h2>Zvolte způsob platby</h2>'+radios('payment',payments,payment)+'</section>';
}
function customerForm(){
  const inputs=fields=>fields.map(([name,label,type='text'])=>'<label>'+label+'<input name="'+name+'" value="'+esc(customer[name]||'')+'" type="'+type+'" required autocomplete="off"></label>').join('');
  return '<form id="demo-customer" class="order-fields customer"><h2>Osobní údaje</h2><p class="demo-note">Pro zkoušku použijte smyšlené údaje. Formulář se zpracuje jen v tomto prohlížeči.</p>'+inputs([['fullname','Jméno a příjmení'],['email','E-mail','email'],['telephone','Telefon','tel']])+'<h2>Fakturační adresa</h2>'+inputs([['street','Ulice a číslo domu'],['city','Město'],['postcode','PSČ']])+'<label>Země<input value="Česká republika" readonly></label><details><summary>Zadat poznámku pro prodejce</summary><textarea name="note" aria-label="Poznámka pro prodejce">'+esc(customer.note||'')+'</textarea></details></form>';
}
function checkoutPage(step){
  const filled=count()>0;
  const empty='<div class="order-empty">'+icon('cart')+'<h1>Váš nákupní košík je prázdný</h1><a class="order-next" href="#products">Zpět do obchodu</a></div>';
  let content=filled?cartBody():empty;
  if(filled&&step>0)content='<div class="order-columns checkout-columns">'+(step===1?shippingForm():customerForm())+'<aside>'+((theme==='merkur'||theme==='adamin')?helpBox():'')+orderTotal(step)+'</aside></div>';
  return '<section class="order-shell stage-'+step+'"><div class="order-wrap">'+orderHeader()+progress(filled?step:0)+content+'</div></section>';
}
function completePage(){
  if(!receipt)return checkoutPage(0);
  return '<section class="order-shell"><div class="order-wrap"><div class="order-empty"><h1>Ukázková objednávka je dokončena</h1><p>'+esc(receipt.method)+' · '+esc(receipt.payment)+'</p><strong>'+money(receipt.total)+(receipt.quoted?' bez ceny dopravy':'')+'</strong><p>Objednávka byla vyzkoušena pouze v tomto prohlížeči.</p><a class="order-next" href="#products">Zpět do obchodu</a></div></div></section>';
}
shop.addEventListener('click',e=>{
  const btn=e.target.closest('[data-nudge]');if(!btn)return;
  const id=btn.dataset.id;basket[id]=Math.max(1,Math.min(999,basket[id]+Number(btn.dataset.nudge)));save();render(false);
});
shop.addEventListener('input',e=>{
  if(e.target.form?.id==='demo-customer')customer[e.target.name]=e.target.value;
});
shop.addEventListener('change',e=>{
  if(e.target.name==='shipping'){delivery=e.target.value;if(delivery!=='pickup')payment='transfer';render(false);}
  if(e.target.name==='payment'){payment=e.target.value;render(false);}
});
shop.addEventListener('submit',e=>{
  if(e.target.classList.contains('voucher')){e.preventDefault();e.target.querySelector('span').textContent='Tento kupón není v ukázce dostupný.';}
  if(e.target.id==='demo-customer'){
    e.preventDefault();receipt={total:total()+checkoutMethods[delivery].price,quoted:checkoutMethods[delivery].price===null,method:checkoutMethods[delivery].label,payment:paymentName()};
    customer={};for(const id of Object.keys(basket))delete basket[id];save();location.hash='complete';
  }
});



