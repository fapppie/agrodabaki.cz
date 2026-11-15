window.createCheckout = function({cart,products,money,esc,photo,detailLink,template,quantity,setCount}) {
  const pages=["cart","shipping","customer","complete"];
  const sniper=template==="sniper-one";
  const celestin=template==="celestin";
  const labels=["Nákupní košík","Doprava & platba","Informace o vás"];
  const shipMethods={"pickup":["Osobní odběr",0],"geis":["GEIS",null],"fofr":["FOFR",null]};
  const methods={"bank":"Bankovním převodem","cash":"Hotově při osobním odběru"};
  let shipping="pickup", payment="bank", draft={}, receipt=null;
  const inCart=()=>products.filter(p=>cart[p.id]>0);
  const subtotal=()=>inCart().reduce((sum,p)=>sum+p.price*cart[p.id],0);
  const price=n=>n===null ? "Dle dohody" : n ? money(n) : "Zdarma";
  const field=(id,label,type="text",required=true)=>'<label class="field"><span>'+label+(required?' *':'')+'</span><input name="'+id+'" type="'+type+'" value="'+esc(draft[id])+'" '+(required?"required ":"")+(id==="zip"?'pattern="[0-9]{3} ?[0-9]{2}" placeholder="110 00" ':'')+(id==="telephone"?'pattern="[+0-9 ()-]{9,20}" ':'')+'></label>';
  function steps(n) {
    return '<nav class="checkout-steps" aria-label="Kroky objednávky">'+labels.map((label,i)=>{
      const inner='<b>'+(i+1)+'</b><span>'+label+'</span>';
      return i<n?'<a href="#'+pages[i]+'">'+inner+'</a>':'<span '+(i===n?'aria-current="step"':'')+'>'+inner+'</span>';
    }).join("")+'</nav>';
  }
  function cartRows(){return '<div class="order-items">'+inCart().map(p=>{
    const adjust=(sign,label)=>'<button type="button" data-id="'+esc(p.id)+'" data-adjust="'+sign+'" aria-label="'+label+' počet kusů">'+(sign>0?"+":"−")+'</button>';
    return '<div class="order-item basket-row">'+photo(p.image,p.name)+'<a href="'+detailLink(p)+'">'+esc(p.name)+'</a><span class="availability">'+esc(p.availability)+'</span><div class="counter">'+adjust(-1,"Snížit")+quantity(p.id,cart[p.id])+adjust(1,"Zvýšit")+'</div><small>'+money(p.price)+' / ks</small><strong>'+money(p.price*cart[p.id])+'</strong><button class="remove" data-remove="'+esc(p.id)+'" aria-label="Odebrat '+esc(p.name)+'">×</button></div>';
  }).join("")+'</div>';}
  function coupons(){
    const box='<form class="coupon"><label><span class="sr-only">Slevový kupón</span><input placeholder="Vložit slevový kupón" required></label><button>Přidat</button><output aria-live="polite"></output></form>';
    return '<section class="coupon-area"><h2>Dárky a slevy</h2>'+(sniper?'<details><summary>Mám slevový kupón</summary>'+box+'</details>':box)+'</section>';
  }
  const help='<section class="order-help"><h2>Potřebujete pomoc?</h2><b>AgroDabaki</b><a href="mailto:agro@dabaki.cz">agro@dabaki.cz</a><a href="tel:+420774960063">+420 774 960 063</a></section>';
  function totals(n){
    const sub=subtotal(), rate=n===0 ? 0 : shipMethods[shipping][1], total=sub+rate;
    const review=inCart().map(p=>'<div class="review-product">'+(sniper?photo(p.image,""):"")+'<span>'+esc(p.name)+'</span><small>'+cart[p.id]+' ks</small><b>'+money(p.price*cart[p.id])+'</b></div>').join("");
    return '<div class="summary-inner">'+(n>0?'<h2>Rekapitulace objednávky</h2>'+review+'<div class="summary-line"><span>Celkem za zboží</span><b>'+money(sub)+'</b></div><div class="summary-line"><span>Způsob dopravy</span><b>'+shipMethods[shipping][0]+' · '+price(rate)+'</b></div><div class="summary-line"><span>Platba</span><b>'+methods[payment]+'</b></div>':'')+'<div class="grand"><span>'+(n===0?'Celkem za zboží':(rate===null?"Celkem bez ceny dopravy":"Celkem k úhradě"))+'</span><strong>'+money(total)+'</strong></div></div>';
  }
  function actions(n){
    return '<div class="order-actions"><a href="#'+(n ? pages[n-1] : 'home')+'">'+(n ? "Zpět" : "Zpět do obchodu")+'</a>'+(n<2 ? '<a class="advance" href="#'+pages[n+1]+'">Pokračovat</a>':'<button form="customer-data" class="advance">Dokončit ukázkovou objednávku</button>')+'</div>';
  }
  function choices(){
    const radios = (map,group,current)=>Object.entries(map).map(([id,item])=>{
      const isShip=group==="shipping";
      const label=isShip ? item[0] : item;
      const disabled=!isShip && id==="cash" && shipping!=="pickup";
      return '<label class="choice"><input type="radio" name="'+group+'" value="'+id+'" '+(current===id?'checked ':'')+(disabled?'disabled ':'')+'><span>'+label+'</span><b>'+price(isShip ? item[1] : 0)+'</b></label>';
    }).join("");
    return (!sniper?'<section class="order-block"><h2>Základní údaje objednávky</h2><span>Měna</span><div class="currency">CZK</div></section>':'')+'<section class="order-block"><h2>Zvolte způsob dopravy</h2><p class="demo-note">Cenu přepravy GEIS a FOFR potvrdí prodejce podle zásilky.</p>'+radios(shipMethods,'shipping',shipping)+'</section><section class="order-block"><h2>Zvolte způsob platby</h2>'+radios(methods,"payment",payment)+'</section>';
  }
  function customer(){
    const toggle=(id,label,more)=>'<label class="form-switch"><input name="'+id+'" type="checkbox" '+(draft[id]?'checked':'')+'> '+label+'</label><div data-fields="'+id+'" '+(draft[id]?'':'hidden')+'>'+more+'</div>';
    return '<form id="customer-data" autocomplete="off"><section class="order-block"><h2>Osobní údaje</h2><p class="demo-note">Pro zkoušku můžete použít smyšlené údaje.</p>'+field("fullname","Jméno a příjmení")+field("email","E-mail","email")+field("telephone","Telefon","tel")+'</section><section class="order-block"><h2>Fakturační adresa</h2>'+field("street","Ulice a číslo domu")+field("city","Město")+field("zip","PSČ")+'<label class="field"><span>Země</span><select><option>Česká republika</option></select></label>'+toggle("company","Nakupuji na firmu",field("companyName","Název společnosti","text",false)+field("companyId","IČ","text",false)+field("vatId","DIČ","text",false))+toggle("different","Doručit na jinou adresu",field("deliveryName","Příjemce","text",false)+field("deliveryStreet","Ulice a číslo domu","text",false)+field("deliveryCity","Město","text",false)+field("deliveryZip","PSČ","text",false))+toggle("withNote","Zadat poznámku pro prodejce",'<label class="field"><span>Poznámka</span><textarea name="note">'+esc(draft.note)+'</textarea></label>')+'</section></form>';
  }
  function complete(){
    const r=receipt;
    if(!r) return empty();
    return '<section class="receipt"><h1>Ukázková objednávka je dokončena</h1><p>Vaše objednávka zůstala v této ukázce.</p><h2>Rekapitulace objednávky</h2>'+r.items.map(({name,count,price})=>'<div class="summary-line"><span>'+esc(name)+' · '+count+' ks</span><strong>'+money(price*count)+'</strong></div>').join("")+'<div class="summary-line"><span>'+esc(r.shipping)+'</span><b>'+price(r.rate)+'</b></div><div class="summary-line"><span>Platba</span><b>'+esc(r.payment)+'</b></div><div class="grand"><span>'+(r.rate===null?"Celkem bez ceny dopravy":"Celkem s DPH")+'</span><strong>'+money(r.total)+'</strong></div><h2>Kontaktní údaje</h2><p>'+[r.details.fullname,r.details.email,r.details.telephone,r.details.street,r.details.zip+" "+r.details.city].map(esc).join("<br>")+'</p>'+(r.details.company ? '<p>'+[r.details.companyName,r.details.companyId,r.details.vatId].filter(Boolean).map(esc).join("<br>")+'</p>':'')+(r.details.different ? '<p>Doručovací adresa<br>'+[r.details.deliveryName,r.details.deliveryStreet,r.details.deliveryZip+" "+r.details.deliveryCity].map(esc).join("<br>")+'</p>':'')+(r.details.withNote?'<p>'+esc(r.details.note)+'</p>':'')+'<a class="advance" href="#home">Zpět do obchodu</a></section>';
  }
  function empty(){return '<section class="empty"><h1>Váš košík je prázdný</h1><a class="action" href="#home">Prohlédnout nabídku</a></section>';}
  function view(page){
    if(page==="complete") return complete();
    if(!inCart().length) return empty();
    const n=pages.indexOf(page);
    const deliveryInfo='<p class="shipping-info">Dopravu si zvolíte v dalším kroku.</p>';
    const cartBody=cartRows() + (template==="orion"?deliveryInfo+coupons():coupons()+deliveryInfo);
    return '<div class="order-grid step-'+n+'">'+steps(n)+'<div class="order-body">'+[cartBody,choices,customer].map((part,i)=>i===n?(typeof part==="function"?part():part):"").join("")+'</div><aside class="order-side"><div class="summary">'+totals(n)+actions(n)+'</div>'+(!sniper?help:'')+'</aside></div>';
  }
  document.addEventListener("input",e=>{
    if(e.target.form?.id==="customer-data") draft[e.target.name]=e.target.type==="checkbox"?e.target.checked:e.target.value;
  });
  document.addEventListener("change",e=>{
    const input=e.target;
    if(input.matches('.choice input')){
      if(input.name==="shipping") {shipping=input.value;if(shipping!=="pickup" && payment==="cash")payment="bank";}
      else payment=input.value;
      document.querySelector(".order-body").innerHTML=choices();
      document.querySelector(".summary-inner").outerHTML=totals(1);
      document.querySelector('.choice input[name="'+input.name+'"]:checked').focus({preventScroll:true});
    }
    if(input.matches(".form-switch input")) {
      const container=document.querySelector('[data-fields="'+input.name+'"]');
      container.hidden=!input.checked;
      if (input.name==="different") container.querySelectorAll("input").forEach(f=>f.required=input.checked);
    }
  });
  document.addEventListener("submit",e=>{
    if(e.target.matches(".coupon")){
      e.preventDefault();
      e.target.querySelector("output").textContent="Pro tento kupón není v ukázce nastavená sleva.";
    }
    if(e.target.id==="customer-data"){
      e.preventDefault();
      const [method,rate]=shipMethods[shipping];
      receipt={items:inCart().map(p=>({name:p.name,count:cart[p.id],price:p.price})),shipping:method,rate,payment:methods[payment],total:subtotal()+rate,details:{...draft}};
      for(const p of inCart()) setCount(p.id,0);
      draft={};shipping="pickup";payment="bank";location.hash="complete";
    }
  });
  return {pages,view};
};

