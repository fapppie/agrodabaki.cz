# Firemní prezentace agrodabaki.cz

## Co provozujeme

Provozovatel vybral Panoramu se dvěma vstupy do obchodů. Produkční [index.html](../../src/agrodabaki/web/index.html) obsahuje kontakty, odkazy, mapu, metadata pro sdílení a strukturované údaje LocalBusiness. Vzhled společně spravuje [panorama.css](../../src/agrodabaki/web/panorama.css). Web má vlastní faviconu. Dlaždice hal vede do dokončení migrace na původní WEXBO, zemědělská technika na dabaki-eshop.cz. Při změně telefonu upravte viditelný text, odkaz tel a strukturovaná data. [Výběr vzhledu a rozhodnutí](../plachtovehaly/historie/PLAN-2026-11-16.md#rozsah-migrace-a-tarif-shoptetu)

## Změna a kontrola

1. Upravte soubory v [produkční složce](../../src/agrodabaki/web/). Její veřejné HTML, CSS a média byla při reorganizaci převzata z běžícího webu 16. 11. 2026. [Návrhy](../../src/agrodabaki/navrhy/index.html) a dřívější ZIP Rozcestníku slouží k porovnání.
2. Z kořene spusťte `python -m http.server 8000 --bind 127.0.0.1 --directory src/agrodabaki/web`. Na http://127.0.0.1:8000/ projděte obě dlaždice, telefon, mapu, fotografie a navigaci při 390 a 1440 px.
3. Přes SFTP na hostiteli agrodabaki.cz, port 22, stáhněte stávající měněné soubory jako zálohu mimo veřejný adresář. Porovnejte je s pracovní verzí kvůli souběžným změnám. Přístup použijte z lokálního accesses.txt.
4. Do **/agrodabaki.cz/web** nahrajte příslušné soubory z produkční složky přímo pod jejich jmény. Závislosti nahrajte před HTML. Pravidla HTTPS spravuje [.htaccess](../../src/agrodabaki/web/.htaccess), převzatý z dřívější nasazené konfigurace ACTIVE 24; při jeho změně nejprve porovnejte kopii na serveru.
5. Na veřejném webu ověřte HTTP 200, odkazy obchodů, načtení nového CSS a podle změny i obrázky či metadata. Po změně přesměrování ověřte HTTP a www včetně podstránky s parametrem. Při problému vraťte zálohu daného nasazení a stejnou kontrolu zopakujte. [Veřejný web](https://agrodabaki.cz/)
