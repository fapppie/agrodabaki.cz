(() => {
  function arrangeFooter() {
    const row = document.querySelector('#footer .custom-footer');
    const info = row?.querySelector('.custom-footer__articles');
    if (!info || row.classList.contains('dh-footer')) return;
    info.before(document.querySelector('#dabaki-paticka').content.cloneNode(true));
    const guide = document.createElement('a');
    guide.href = '/jak-vybrat-plachtovou-halu/';
    guide.textContent = 'Jak vybrat plachtovou halu';
    const item = document.createElement('li');
    item.append(guide);
    info.querySelector('ul')?.prepend(item);
    function addEmail() {
      const phone = row.querySelector('.site-name .contacts a[href^="tel:"]');
      if (!phone) return false;
      if (!phone.parentElement.querySelector('a[href^="mailto:"]')) {
        const email = document.createElement('a');
        email.href = 'mailto:agro@dabaki.cz';
        email.className = 'project-email';
        const address = document.createElement('span');
        address.textContent = 'agro@dabaki.cz';
        email.append(address);
        email.style.cssText = 'display:block;margin-top:8px;font-size:16px;overflow-wrap:anywhere';
        phone.parentElement.style.display = 'inline-block';
        phone.parentElement.style.textAlign = 'left';
        phone.after(email);
      }
      return true;
    }
    if (!addEmail()) {
      const observer = new MutationObserver(() => {
        if (addEmail()) observer.disconnect();
      });
      observer.observe(row, {childList: true, subtree: true});
    }
    const credit = document.querySelector('#footer .copyright .podpis');
    const designer = credit?.querySelector('a[href*="shoptak.cz"]');
    if (designer) credit.replaceChildren('Design ', designer);
    row.classList.add('dh-footer');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrangeFooter);
  else arrangeFooter();
})();