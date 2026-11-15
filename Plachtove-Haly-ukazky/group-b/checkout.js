function createPreviewCheckout({cart, find, money, escape, path, itemLink, phone, email, apeti, dark, save}) {
  const steps = ['Nákupní košík','Doprava & platba','Informace o vás'];
  const routes = ['cart','shipping','information'];
  const transportNames = { pickup:'Osobní odběr', geis:'GEIS', fofr:'FOFR' };
  const paymentNames = { transfer:'Bankovním převodem', cash:'Hotově při osobním odběru' };
  let transport = 'pickup', payment = 'transfer', finished = false;
  const details = {};
  const entries = () => Object.entries(cart);
  const subtotal = () => entries().reduce((sum,[id,qty])=>sum+find(id).price*qty,0);
  const subtotalLabel = () => transport === 'pickup' ? 'Celkem k úhradě' : 'Celkem bez ceny dopravy';
  const sendPrice = () => transport === 'pickup' ? 'Zdarma' : 'Dle domluvy';
  const help = () => `<section class="checkout-help"><h2>Potřebujete pomoc?</h2><div>${email}${phone}</div></section>`;
  function progress(step) {
    return `<ol class="checkout-steps">${steps.map((label,i)=>`<li${i===step?' aria-current="step"':''}>${i<step?`<a href="#${routes[i]}">${escape(label)}</a>`:escape(label)}</li>`).join('')}</ol>`;
  }
  function row(id,qty) {
    const p=find(id);
    return `<article class="checkout-row cart-row"><a class="checkout-photo" href="${itemLink(p)}"><img src="${path(p.image)}" alt=""></a><a class="checkout-name product-name" href="${itemLink(p)}">${escape(p.name)}</a>
    <span class="checkout-stock"><small>Dostupnost</small>${escape(p.availability)}</span>
    <div class="checkout-amount"><button type="button" data-adjust="-1" data-id="${escape(id)}" aria-label="Snížit počet kusů"${qty<=1?' disabled':''}>−</button><input data-qty="${escape(id)}" value="${qty}" aria-label="Množství ${escape(p.name)}" type="number" min="1" max="999"><button type="button" data-adjust="1" data-id="${escape(id)}" aria-label="Zvýšit počet kusů"${qty>=999?' disabled':''}>+</button></div>
    <span class="checkout-unit"><small>Cena za m. j.</small><b>${money(p.price)}</b> / ks</span><strong class="checkout-total"><small>Součet</small>${money(p.price*qty)}</strong>
    <button type="button" class="remove-item" data-remove="${escape(id)}" aria-label="Odebrat ${escape(p.name)}">×</button></article>`;
  }
  function amount() {
    return `<div class="sum-line"><span>Celkem za zboží:</span><strong>${money(subtotal())}</strong></div>`;
  }
  function basket() {
    if (!entries().length) return `<div class="wrap cart-page">${progress(0)}<section class="empty"><h2>Košík je prázdný</h2><a class="pill" href="#catalog">Prohlédnout produkty</a></section></div>`;
    return layout(0, `<div class="checkout-items">${entries().map(([id,qty])=>row(id,qty)).join('')}</div><section class="checkout-extras"><h2>Dárky a slevy</h2><p>Cenu dopravy pro vybrané zboží upřesníme podle místa doručení.</p></section>`,help()+`<section class="checkout-box">${amount()}<a class="checkout-continue" href="#shipping">Pokračovat ›</a><a class="checkout-back" href="#catalog">Zpět do obchodu</a></section>`);
  }
  function summary(step) {
    return `${apeti?'':help()}<section class="checkout-review"><h2>Rekapitulace objednávky</h2><div class="recap-items">${entries().map(([id,qty])=>`<div><a href="${itemLink(find(id))}">${escape(find(id).name)}</a><small>${qty} ks</small><b>${money(find(id).price*qty)}</b></div>`).join('')}</div>
    <div class="sum-part"><span>Celkem za zboží:</span><b>${money(subtotal())}</b></div><div class="sum-part"><span>${transportNames[transport]}</span><b>${sendPrice()}</b></div><div class="sum-part"><span>${paymentNames[payment]}</span><b>Zdarma</b></div>
    <div class="sum-line"><span>${subtotalLabel()}:</span><strong>${money(subtotal())}</strong></div>
    ${step===2?'<p class="demo-note">Ukázková objednávka. Použijte smyšlené údaje. Žádné údaje se neodesílají.</p><button form="checkout-info" class="checkout-continue" type="submit">Dokončit ukázkovou objednávku</button>':'<a class="checkout-continue" href="#information">Pokračovat ›</a>'}
    <a class="checkout-back" href="#${routes[step-1]}">Zpět</a></section>`;
  }
  function layout(step,body,side) {
    return `<div class="wrap checkout-layout checkout-step-${step}"><div class="checkout-content">${progress(step)}<h1 class="mobile-step">${steps[step]}</h1>${body}</div><aside class="checkout-side">${side}</aside></div>`;
  }
  const method = (name,key,label,price,checked) => `<label class="checkout-method"><input type="radio" name="${name}" value="${key}"${checked?' checked':''}><b>${label}</b><span>${price}</span></label>`;
  function shipping() {
    const carriers = Object.entries(transportNames).map(([key,label])=>method('delivery',key,label,key==='pickup'?'Zdarma':'Dle domluvy',key===transport)).join('');
    const payments = Object.entries(paymentNames).filter(([key])=>key!=='cash'||transport==='pickup').map(([key,label])=>method('payment',key,label,'Zdarma',key===payment)).join('');
    return layout(1,`<section class="checkout-panel"><h2>Základní údaje objednávky</h2><div class="checkout-currency">Měna <span>CZK</span></div></section>
    <fieldset class="checkout-panel"><legend>Zvolte způsob dopravy</legend>${carriers}</fieldset>
    <fieldset class="checkout-panel"><legend>Zvolte způsob platby</legend>${payments}</fieldset>`,summary(1));
  }
  const field=(key,label,type='text',attrs='required')=>`<label class="customer-field"><span>${label}${attrs.includes('required')?' *':''}</span><input name="${key}" type="${type}" value="${escape(details[key]||'')}" ${attrs}></label>`;
  function info() {
    const company=details.company===true, different=details.different===true, note=details.note===true;
    return layout(2,`<form id="checkout-info" autocomplete="off">
    <section class="checkout-panel"><h2>Osobní údaje</h2><p class="demo-note">Pro ukázku můžete použít smyšlené údaje.</p>${field('fullName','Jméno a příjmení')}${field('email','E-mail','email')}${field('telephone','Telefon','tel','required minlength="6"')}</section>
    <section class="checkout-panel"><h2>Fakturační adresa</h2><label class="optional"><input type="checkbox" name="company"${company?' checked':''}> Nakupuji na firmu</label>${company?field('companyName','Název společnosti')+field('registration','IČO'):''}
    ${field('street',dark?'Ulice':'Ulice a číslo domu')}${dark?field('building','Číslo domu'):''}${field('city','Město')}${field('post','PSČ','text','required pattern="[0-9]{3} ?[0-9]{2}" inputmode="numeric"')}<p>Země &nbsp; <b>Česká republika</b></p>
    <label class="optional"><input type="checkbox" name="different"${different?' checked':''}> Doručit na jinou adresu</label>${different?field('deliveryStreet','Ulice a číslo domu')+field('deliveryCity','Město doručení')+field('deliveryPost','PSČ doručení','text','required pattern="[0-9]{3} ?[0-9]{2}"'):''}
    <label class="optional"><input type="checkbox" name="note"${note?' checked':''}> Zadat poznámku pro prodejce</label>${note?'<label class="customer-field"><span>Poznámka</span><textarea name="message">'+escape(details.message||'')+'</textarea></label>':''}</section></form>`,summary(2));
  }
  function page(route) {
    if(route==='complete' && finished) return `<section class="wrap checkout-complete"><h1>Ukázková objednávka je dokončená</h1><p>Objednávka ani kontaktní údaje se neodeslaly prodejci.</p><a href="#catalog" class="checkout-continue">Zpět do obchodu</a></section>`;
    if(!entries().length || route==='cart' || route==='complete') return basket();
    return route==='shipping'?shipping():info();
  }
  function change(input,render) {
    if(input.name==='delivery'){transport=input.value;if(transport!=='pickup')payment='transfer';render();return;}
    if(input.name==='payment'){payment=input.value;render();return;}
    if(input.closest('#checkout-info') && input.type==='checkbox'){details[input.name]=input.checked;render();}
  }
  function remember(input) {if(input.name && input.closest('#checkout-info') && input.type!=='checkbox') details[input.name]=input.value;}
  function finish() {
    finished=true;
    for(const id of Object.keys(cart)) delete cart[id];
    for(const key of Object.keys(details)) delete details[key];
    save();
    location.hash='complete';
  }
  return {page,change,remember,finish};
}
