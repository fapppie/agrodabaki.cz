(function () {
  function embedVideos() {
    document.querySelectorAll('.type-detail .basic-description a[href], .type-detail .p-short-description a[href]').forEach(function (link) {
      const url = new URL(link.href);
      if (!['www.youtube.com', 'youtube.com'].includes(url.hostname) || url.pathname !== '/watch') return;
      const id = url.searchParams.get('v');
      if (!id || !/^[\w-]{11}$/.test(id)) return;
      const section = link.closest('.basic-description, .p-short-description');
      if (section.querySelector('iframe[src*="/embed/' + id + '"]')) return;
      const player = document.createElement('iframe');
      const seconds = /^(\d+)s?$/.exec(url.searchParams.get('t') || '');
      player.src = 'https://www.youtube-nocookie.com/embed/' + id + (seconds ? '?start=' + seconds[1] : '');
      player.title = link.textContent.trim();
      player.loading = 'lazy';
      player.allow = 'encrypted-media; picture-in-picture; fullscreen';
      player.allowFullscreen = true;
      player.style.cssText = 'display:block;width:100%;max-width:760px;height:auto;aspect-ratio:16/9;border:0;margin:16px 0 8px';
      (link.closest('p') || link).before(player);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', embedVideos, {once:true});
  else embedVideos();
})();
