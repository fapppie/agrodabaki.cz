const { run } = require('./session.cjs');

run(async () => {
  console.log('Přihlášení ověřeno. Nebyla provedena změna katalogu ani nastavení.');
}).catch(() => {
  // Chyba Playwrightu může obsahovat vyplňované hodnoty nebo údaje stránky.
  console.error('Přihlášení se nepodařilo ověřit. Zkontrolujte instalaci, přístupy a postup v docs/plachtovehaly/AUTOMATIZACE.md.');
  process.exitCode = 1;
});
