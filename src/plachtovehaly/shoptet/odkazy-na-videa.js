document.querySelectorAll('.type-detail :is(.basic-description, .p-short-description) a[href]').forEach(function (link) {
  if (['youtube.com', 'www.youtube.com', 'youtu.be'].includes(link.hostname)) {
    link.target = '_blank';
    link.relList.add('noopener');
  }
});
