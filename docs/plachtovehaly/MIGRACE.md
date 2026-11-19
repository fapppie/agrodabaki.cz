# Import a přepnutí původní domény

[Mapa URL](../../src/plachtovehaly/migrace/mapa-url.csv) spojuje původní ID a URL s cílovou kartou, variantou, ID Shoptetu a výsledkem ověření. Na 16. 11. 2026 obsahuje 332 produktových ID. Na jednom cíli se může sejít více zdrojových adres.

## Příprava a import

1. V Shoptetu pořiďte aktuální kompletní XML export produktů. Ověřte ceny, sklad a dostupnost proti podkladům firmy. Pro návrat uchovejte také popisy, parametry, fotografie a pořadí variant. Citlivé exporty patří mimo Git.
2. [Nástroje](../../src/plachtovehaly/tools/) používají Python 3 a knihovnu lxml. Argumenty zjistíte např. příkazem `python src/plachtovehaly/tools/priprav_sedm_variant.py --help` z kořene. Generátor potřebuje čerstvý export, schéma Shoptetu products-complete-v10.rng včetně závislostí a cestu pro výstup. Starší dávky mají vlastní očekávaný vstup popsaný v tematických záznamech; vstupy do pracovní cache obstarejte pro konkrétní dávku.
3. [Historická XML a manifesty](../../src/plachtovehaly/migrace/) zachycují obchodní údaje v okamžiku importu. Pro další změnu připravte nový dílčí soubor podle konkrétních SKU a ověřte ho schématem. Dávka sedmi bílých variant už byla nasazena. [Podrobný příklad](katalog/sedm-variant-import.md)
4. V Produkty → Import zvolte dílčí aktualizaci se zachováním neuvedených produktů a variant. Zkontrolujte volby pro prázdná pole a změnu URL. Po importu projděte protokol a porovnejte nový úplný export se zálohou podle SKU, cen, skladu, parametrů, dostupností a galerie. Vyberte novou kombinaci v detailu a porovnejte SKU a cenu v košíku.
5. Při chybě zjistěte z protokolu, co už se zpracovalo. Připravte opravu jen pro zasažené položky ze zálohy a samostatně vyřešte případné nově založené varianty. Po kontrole aktualizujte mapu.

## Přepnutí

### Příprava domény v Shoptetu — 19. 11. 2026

Na žádost zadavatele přidáno přesměrování původní domény do Shoptetu, bez změny DNS u WEXBO. [Přehled přesměrování](https://plachtovehaly.agrodabaki.cz/admin/dns-presmerovani/?id=2), [detail záznamu 1237637](https://plachtovehaly.agrodabaki.cz/admin/dns-presmerovani-detail/?marketId=2&redirectionId=1237637). Místo správy: Prodejní kanály → Online obchody → DNS a doména → Přesměrování domén.

Zadáno `www.plachtovehaly-agrodabaki.cz` a cíl `*`; Shoptet uloženou doménu v přehledu i detailu normalizuje na `plachtovehaly-agrodabaki.cz`. Hvězdička zachovává cestu za doménou směrem k hlavnímu obchodu `plachtovehaly.agrodabaki.cz`; nenahrazuje dosud nedokončenou mapu starých URL. Uložení ověřeno opětovným načtením detailu a novou přihlášenou relací v přehledu.

Kontrola Shoptetu hlásí původní IP `109.248.251.41` a nameservery `ns2.oxiweb.sk, ns.oxiweb.sk`. Očekávané A záznamy ukazuje `185.184.254.10` a `185.184.254.11`, CNAME pro www `www.myshoptet.com`; stav je záměrně zatím nesprávný, protože k přepnutí nedošlo. Tyto hodnoty před nasazením znovu ověřit. Změna A pro web nesmí změnit A pro mail. Případné ukončení DNS u WEXBO řešit samostatně před koncem služby.

Veřejně ověřeno HTTPS 200 na původní www adrese i současné adrese Shoptetu; obě zůstaly na svých dosavadních URL. Nákupní cesta ani vzhled se neměnily. Přesměrování provozu a certifikát původní domény na Shoptetu zatím nebyly ověřeny. Zbývá mapa URL, schválené přepnutí DNS, HTTPS a závěrečné testy dle plánu. Návrat přípravy: odstranit pouze záznam 1237637 v přehledu přesměrování; DNS ani hlavní doménu neměnit.

### Analýza domény a ukončení WEXBO — 19. 11. 2026

Jde o ověřený obecný postup a návrh, nikoli provedené přepnutí. Původní adresa je `www.plachtovehaly-agrodabaki.cz`, cílová dle dosavadní migrační mapy `plachtovehaly.agrodabaki.cz`. Lze ponechat současnou hlavní adresu Shoptetu a původní doménu přidat jako přesměrovávanou, nebo původní doménu zvolit hlavní i na Shoptetu. Finální volbu potvrdit před změnami.

- Shoptet podporuje přesměrování domény se zachováním cesty pomocí `*` a kombinaci s mapou jednotlivých URL. Nenastavovat všechny staré odkazy na homepage. Aktuální nápověda uvádí Prodejní kanály → Online obchody → DNS a doména → Přesměrování domén; skutečné menu ověřit v účtu. DNS směrovat podle zvolené varianty a aktuální nápovědy. U přesměrovávané domény mají nameservery zůstat mimo Shoptet. Certifikát přesměrovávané domény se dle nápovědy generuje po půlnoci, proto nelze slíbit okamžité HTTPS. [Zdroj Shoptet](https://podpora.shoptet.cz/presmerovani-domen/).
- Podle veřejné nápovědy WEXBO není potřebná výpověď ani oznámení: služba se neprodlouží neuhrazením objednávky na další období. U ostrého účtu uvádí pozastavení den po expiraci a smazání dat 90 dní po expiraci. Před ukončením exportovat potřebné objednávky, doklady, produkty a případnou poštu mimo Git. [Ukončení WEXBO](https://wexbo.com/sk/faq/end/).
- Doménu zachovat a dále prodlužovat nezávisle na pronájmu e-shopu. Pokud ji WEXBO registrovalo na sebe zrychlenou registrací, nejprve změnit držitele na firmu, následně řešit transfer podle podpory a AUTH-ID. Skutečný držitel, registrátor, expirace, DNS a poskytovatel pošty původní domény nebyli touto analýzou ověřeni. ACTIVE 24 je doložen pro `agrodabaki.cz`, nikoli automaticky pro původní doménu. [Správa domén WEXBO](https://wexbo.com/cs/faq/domain/).
- Pokud DNS nebo pošta závisejí na předplatném WEXBO, zajistit jejich pokračování nebo oddělenou migraci před ukončením. Změnu nameserverů neprovádět současně s přepnutím obchodu; případný přesun DNS připravit zvlášť s úplnou zónou a zachováním poštovních záznamů. [Přechod na Shoptet](https://podpora.shoptet.cz/presun-na-domenu-pri-prechodu-od-jineho-provozovatele-e-shopu/).
- Před spuštěním dokončit otevřené katalogové cíle, poslední synchronizaci cen/skladu, platební údaje a testy objednávek dle plánu. Při přepnutí omezit příjem objednávek ve starém obchodu, zkontrolovat poslední objednávky a po změně otestovat HTTPS, www/bez www, staré cesty a mobilní i desktopový nákup. WEXBO nechat krátce dostupné administrátorovi pro kontrolu a teprve po ověření migrace neprodloužit.

Původní WEXBO zatím přijímá návštěvníky z firemního webu. Nová subdoména má doložený CNAME na www.myshoptet.com u ACTIVE 24. Před přepnutím původní domény zkontrolujte její oba tvary, DNS, certifikát a připravené seznamy pro [produkty](../../src/plachtovehaly/migrace/presmerovani-wexbo-produkty.csv), [kategorie](../../src/plachtovehaly/migrace/presmerovani-wexbo-kategorie.csv) a [stránky](../../src/plachtovehaly/migrace/presmerovani-wexbo-stranky.csv). Interní pravidla Shoptetu byla na přání zadavatele 19. 11. 2026 všechna odstraněna; historickou sadu sloučených karet neobnovujte automaticky. Při přepnutí řešte potřebné původní URL WEXBO a znovu ověřte přímé cíle. [Aktuální stav a záloha](ADMINISTRACE.md#interní-přesměrování-vypnuta--19-11-2026). Po změně ověřte původní URL → 301 → cílová stránka s 200, objednávku a případné chyby 404. Aktualizujte odkaz na [firemní prezentaci](../agrodabaki/NASAZENI.md) podle schváleného data přepnutí.
