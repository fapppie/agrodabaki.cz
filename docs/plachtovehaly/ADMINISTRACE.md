# Kde udělat změnu v Shoptetu

Přihlášení čte `SHOPTET_EMAIL` a `SHOPTET_PASSWORD` z lokálního `accesses.txt`; [formát všech přístupů a parametrů](AUTOMATIZACE.md#přístupy) vychází z prázdné verzované šablony. Historické čtení pevných řádků již nepoužívejte.

Pro běžnou správu produktů a předání AI začněte [návodem správy katalogu](katalog/SPRAVA-KATALOGU.md). Aktuální pravidla dostupností a jejich sjednocení k 19. 11. 2026 jsou součástí tohoto návodu.

Obchod 828678 používá Business a Adamin nad šablonou Classic. Živé nastavení, objednávky, ceny a sklad jsou v administraci. Repozitář obsahuje nasazované bloky, migrační data a záznamy kontrol. [Přihlášení](https://828678.myshoptet.com/admin/) · [Veřejný obchod](https://plachtovehaly.agrodabaki.cz/)

| Chci změnit | Místo v administraci a ověření |
| --- | --- |
| Logo, faviconu, paletu | Vzhled a obsah → Editor → Editor vzhledu → Záhlaví / Barevnost šablony. Favicona je v Dalším nastavení. Použijte [průhledné SVG](../../src/plachtovehaly/shoptet/agro-dabaki-horizontal.svg) a [ikonu](../../src/plachtovehaly/shoptet/favicon-agro-dabaki.png). Ověřte mobilní záhlaví, kartu podpory a veřejný PNG 16 × 16. |
| Homepage, výhody | Vzhled a obsah → Titulní strana pro [obsah homepage](../../src/plachtovehaly/shoptet/titulni-strana.html); Editor → HTML kódy → Záhlaví pro [vzhled a přepínání bannerů](../../src/plachtovehaly/shoptet/titulni-strana-vzhled.html). Konkurenční výhody mají vlastní položky ve Vzhled a obsah → Bannery. |
| Kategorie a menu | Produkty → Kategorie pro rodiče, pořadí a fotku; v detailu podkategorie pole Obrázek kategorie. Vzhled a obsah → Menu pro samostatné navigační odkazy. Změnu porovnejte v kategorii, rozbaleném menu a mobilní navigaci. [Rozměry fotografií](vzhled/menu-nahledy.md) |
| Detail, ceny, sklad a filtry | Produkty → Přehled, vyhledejte SKU, otevřete kartu a její varianty. Pro filtry otevřete Parametry → Parametry pro filtrování. Globální prioritu polí spravují Parametry a příznaky. Vyberte dvě kombinace a ověřte správné SKU, cenu a dostupnost v košíku. [Předání katalogu](PREDANI.md) |
| Konfigurátor a postranní košík | Vzhled a obsah → Editor → HTML kódy → Zápatí. Identifikujte příslušný [blok výběru variant](../../src/plachtovehaly/shoptet/vyber-haly.html) nebo [výchozí sbalení košíku](../../src/plachtovehaly/shoptet/kosik-v-kategorii.html). [Viditelnost platebních log](../../src/plachtovehaly/shoptet/bocni-panel.html) je samostatný blok záhlaví. |
| Doprava, platby, e-maily | Nastavení → Doprava a platby. V Nastavení → Emaily → Automatické zasílání zkontrolujte šablonu order (ID 1) a systémovou akci potvrzení (ID 2). U formulářů rozlišujte produktový dotaz (7) a kontaktní formulář (5). [Doprava a platby](objednavky/doprava-a-platby.md) · [Příjemci formulářů](objednavky/formulare-dotazy.md) |
| Informační stránky a VOP | Vzhled a obsah → Stránky. Jak nakupovat má ID 27, průvodce výběrem ID 791, VOP ID 39. Při vydání VOP publikujte odpovídající stránku i datované PDF u potvrzení objednávky a uchovejte předchozí vydání. [Obsah stránek](vzhled/informacni-stranky.md) · [VOP](pravni/obchodni-podminky-revize.md) |
| Přesměrování, doména a licence | Marketing → Základní SEO → Přesměrování adres (URL). Před přepnutím otestujte seznam zdrojů a cílů podle [migračního postupu](MIGRACE.md). [Doména obchodu](https://828678.myshoptet.com/admin/dns/?id=2) · [Správce doplňků](https://828678.myshoptet.com/admin/spravce-doplnku/) |

## Nedostupné zboží a nákup do minusu

Od 17. 11. 2026 používá zveřejněný katalog jednotnou systémovou dostupnost **Momentálně nedostupné** (ID −3), barva `#d00000`. Nastavení → Produkty → Sklady → Nastavení: Nákup do mínusu = **Nepovolit - zobrazit produkt**; dostupnost při nepovoleném nákupu do minusu = **Momentálně nedostupné**. Kontrola skladu musí zůstat zapnutá.

V Produkty → Sklad spravujte dostupnost při vyprodání a výjimku Nákup do mínusu pro každé SKU, včetně variant. Prázdná dostupnost při vyprodání přebírá výchozí nedostupnost; nákup do minusu u ní nepovolujte. Stejně postupujte u explicitního „Momentálně nedostupné“. Po doplnění kladné zásoby se produkt opět prodává jako Skladem. Pro „na objednání“, „na dotaz“ a potvrzené termíny naskladnění lze zachovat individuální povolení nákupu do minusu. Samotný text dostupnosti nákup neblokuje.

Kontrola zahrnula všech 312 zveřejněných SKU: 34 přiřazení původního „vyprodáno“ / „nedostupné“ převedeno na systémové ID −3, celkem 37 aktuálně nedostupných SKU. U 98 SKU zachován nákup s konkrétní dostupností nebo termínem; zbývajících 214 má zakázaný nákup do minusu. Skladová množství zachována. Historické XML nepoužívat k obnovení těchto nastavení bez úpravy dostupností a příznaku prodeje do minusu.

Ověření: čerpadlo BH (1000223) při 390 a 1440 px zobrazuje červený stav bez nákupního tlačítka. U lžíce BH 5 R nedostupná varianta 1000193 odmítla vložení hláškou „Tato varianta není dostupná a není možné ji objednat.“; tlačítko může u variant zůstat viditelné. Skladová varianta 1000192 prošla při 390 px přes košík k dopravě. Hala na objednání 1000013 prošla při 1440 px stejnou cestou. Testovací položky byly odebrány, původní obsah košíku zachován. [Počítač](overeni/nedostupnost-1440.jpg) · [Telefon](overeni/nedostupnost-390.jpg).

Při návratu použijte poslední export nebo lokální záznam původních hodnot, obnovujte po SKU. Pouhé globální povolení nákupu do minusu by znovu umožnilo nakupovat nedostupné zboží. Při hromadné kontrole řaďte podle unikátního kódu a ověřte úplnost 312 SKU; pořadí variant se stejným názvem není stabilní.

## Nasazení nebo vrácení bloku

Před odstraněním produktové fotografie zkontrolujte také ručně vložené URL v homepage, Mapě webu, bannerech a obsahových stránkách. Cache může zakrýt smazaný soubor; porovnejte odkazy s evidencí odstraněných snímků. Dne 18. 11. 2026 takto opraveno pět odkazů v Titulní straně a jeden v Mapě webu (794), viz [oprava fotografií](vzhled/nahledove-fotografie.md#oprava-ručních-odkazů--18-11-2026).

1. Zkopírujte právě uložené znění dotčeného pole z administrace do lokální pracovní zálohy. Porovnejte je se [zdroji](../../src/plachtovehaly/shoptet/). Jedno pole záhlaví či zápatí může obsahovat několik bloků.
2. Nahraďte jen upravovaný blok a zachovejte okolní nastavení. Uložte, znovu otevřete editor a ověřte uložené znění.
3. Na veřejné stránce otestujte dotčenou funkci v čistém okně na telefonu a počítači. Při regresi vraťte původní obsah dotčeného bloku a test opakujte. Zapište výsledek do [plánu](../PLAN.md).

### Složení polí ověřené 16. 11. 2026

Celý obsah obou polí byl v administraci porovnán se zdrojovými soubory. Záhlaví obsahovalo postupně [boční panel](../../src/plachtovehaly/shoptet/bocni-panel.html), [CSS náhledů menu](../../src/plachtovehaly/shoptet/menu-nahledy.css) uvnitř elementu `<style id="dabaki-menu-fotografie">` a [titulní stranu](../../src/plachtovehaly/shoptet/titulni-strana-vzhled.html). V zápatí následoval za [konfigurátorem](../../src/plachtovehaly/shoptet/vyber-haly.html) [postranní košík](../../src/plachtovehaly/shoptet/kosik-v-kategorii.html). Po odečtení těchto pěti bloků zbyly v obou polích jen bílé znaky.

Výběr ze sortimentu upravujte ve Vzhled a obsah → Titulní strana, v sekci s ID `vyber-ze-sortimentu`. Každá skupina má vlastní nadpis a čtyři odkazy přímo na produkty. U fotografie vyberte široký záběr konkrétního produktu a zkontrolujte ořez 3 : 2. Pokud má vygenerovaný náhled bílé okraje, použijte vhodný originál z galerie. Po uložení otevřete všechny cíle a projděte obě řady na počítači i telefonu.

## Ikony hlavních kategorií

Ve Správci souborů je v kořeni nahraný soubor menu-ikony-v2.css. Jeho projektový zdroj je [menu-ikony.css](../../src/plachtovehaly/shoptet/menu-ikony.css). Obsahuje devět SVG přímo v CSS. Editor → HTML kódy → Záhlaví načítá soubor z /user/documents/upload/menu-ikony-v2.css odkazem s ID dabaki-menu-ikony. Při změně URL kategorie upravte odpovídající selektor v CSS a nahrajte aktualizovaný soubor. Ověřte lištu, nabídku Více a otevřené mobilní menu. Pro návrat odeberte ze záhlaví samotný odkaz s tímto ID.

U vybavení pro chov koní nastavujte na kartě produktu v záložce Kategorie zařazení i výchozí kategorii na Vybavení pro chov koní (ID 755). Při změně stromu upravte také ruční odkazy na stránce Mapa webu (ID 794).

## Ochrana osobních údajů

Vzhled a obsah → Stránky → Podmínky ochrany osobních údajů (ID 691). Obsah upravte v HTML editoru podle [publikovaného zdroje](../../src/plachtovehaly/shoptet/ochrana-osobnich-udaju.html). Před uložením si uchovejte předchozí HTML pro případ návratu. Po uložení zkontrolujte veřejnou stránku, kontakt pro žádosti a odkaz na ÚOOÚ na telefonu i počítači.

## Tabulky v popisech produktů

Mřížku a odsazení buněk podle tabulky z VOP spravuje [tabulky-popisu.css](../../src/plachtovehaly/shoptet/tabulky-popisu.css). Šířku určuje obsah. Styl se používá pouze pro tabulky vložené do popisu produktu. Správce souborů → tabulky-popisu.css, Editor → HTML kódy → Záhlaví → odkaz dabaki-tabulky-popisu. Odebráním tohoto odkazu se obnoví původní vzhled.

## Hodnocení firmy na homepage

Ve Vzhled a obsah → Titulní strana upravte sekci s ID hodnoceni-firmy hned za průvodcem výběrem. Současně upravte [zdroj](../../src/plachtovehaly/shoptet/titulni-strana.html). Skóre, počet a datum ověřte na [profilu provozovny](https://www.firmy.cz/detail/13362870-agro-dabaki-jankov.html#hodnoceni). Citaci ponechte s autorem a datem. Při odebrání smažte pouze tuto sekci.

Dne 18. 11. 2026 zadavatel po zkoušce oficiálního odznaku a iframe schválil ponechání vlastní karty. Zkušební sekce `hodnoceni-firmy-widget` byla z homepage odstraněna; [samostatný blok](../../src/plachtovehaly/shoptet/hodnoceni-firmy-widget.html) je pouze nepoužitý podklad. Finální zobrazení ověřeno při 390/1440 px. Jednou měsíčně, případně při nové recenzi, porovnejte skóre a počet s Firmy.cz a aktualizujte datum ověření. Při obměně citace zachovejte přesné znění, autora a datum skutečné recenze i odkaz na všechny recenze. Automatické obnovování nyní není zavedeno; znovu je posoudit až při výraznějším přibývání hodnocení.

## Závěrečný kontakt na homepage

Vzhled a obsah → Titulní strana, odstavec `dh-contact-note` za hodnocením. Od 18. 11. 2026 má přímo v HTML inline styl: odstup nahoře 48 px a dole 24 px, padding 28 px / 20–40 px podle šířky, pozadí `#eff7f4`, zaoblení 12 px a bez původní horní linky. Otázka je zvýrazněná elementem strong po zalomení řádku. [Aktuální zdroj](../../src/plachtovehaly/shoptet/titulni-strana.html). Základní pravidla stále doplňuje `hodnoceni-firmy.css`; inline styl má pro tento blok přednost. Pro návrat odstraňte inline styl odstavce, zalomení a obal strong, zachovejte text i oba kontaktní odkazy. Ověřeno při 390/1440 px včetně odkazů a nepřetékání stránky.

## Patička s kategoriemi a vizitkou

Editor → HTML kódy → Zápatí obsahuje [blok navigace](../../src/plachtovehaly/shoptet/paticka.html) a odkaz na [paticka-v1.css](../../src/plachtovehaly/shoptet/paticka-v1.css) ze Správce souborů. Při přejmenování hlavní kategorie aktualizujte její text a URL v bloku. Průvodce výběrem doplňuje skript do patičky, ostatní informační odkazy jsou ve Vzhled a obsah → Menu → Informace pro vás. Pro návrat odeberte ze Zápatí odkaz dabaki-paticka-styl, šablonu dabaki-paticka a její navazující skript. Po uložení ověřte pořadí vizitky, odkazy, nastavení cookies a vystředění copyrightu.

Blok nyní načítá [paticka-v6.js](../../src/plachtovehaly/shoptet/paticka-v6.js) ze Správce souborů. Skript přidává průvodce, doplňuje do vizitky e-mail a zkracuje textový podpis na Design Shoptak.cz. Při změně e-mailu upravte adresu mailto i zobrazený text podle stránky Kontakty. Třída project-email přidává ikonu zavináče Adaminu. Pro novou verzi nahrajte soubor pod novým názvem a v Zápatí aktualizujte odkaz.

## Videa v popisech produktů

V editoru popisu vložte běžný textový odkaz na YouTube. V Editor → HTML kódy → Zápatí je [blok dabaki-videa-v-popisu](../../src/plachtovehaly/shoptet/videa-v-popisu.html), který odkazům přidává target="_blank" a rel="noopener".

Vzhled karty a kontaktního odstavce pod ní upravuje [hodnoceni-firmy.css](../../src/plachtovehaly/shoptet/hodnoceni-firmy.css) ve Správci souborů přes odkaz dabaki-hodnoceni-firmy v HTML záhlaví. Při výměně karty za widget ponechte pravidla pro dh-contact-note a odsazení patičky.

U přístřešku Animal (659) a zastřešení C26 (695), C33S (683) a s navijákovými vraty (689) přebírá konfigurátor v zápatí jedinou barvu z doplňkového parametru „Barva plachty“ na kartě produktu. Pokud přibudou barevné varianty, použijte u nich parametr Barva nebo Barva plachty. Konfigurátor pak nabídne barvy podle zvoleného rozměru.

Při aktualizaci samotného počtu stačí v sekci hodnoceni-firmy upravit text v dh-review-summary a ověřit skóre proti Firmy.cz.

## Rozměry a barvy v porovnání konfigurací

Správce souborů → rozmery-v-popisu.js, Editor → HTML kódy → Zápatí → dabaki-rozmery-v-popisu. [Skript](../../src/plachtovehaly/shoptet/rozmery-v-popisu.js) doplňuje existující tabulky v dlouhém popisu hal, garáží, přístřešků a zastřešení z hodnot variant a doplňkových parametrů. Barvy přiřazuje podle rozměrů řádku. Pokud jsou v původní buňce uvedené i gramáže, zachová je. Odebráním odkazu na skript se vrátí původní tabulky. Odkazy na YouTube nyní zajišťuje samostatný soubor odkazy-na-videa.js načítaný ze zápatí.

U štěpkovačů, štípaček a špalíkovačů použijte v Produkty → Přehled → detail → Kategorie jako výchozí kategorii Lesní technika (752).

## Příznaky Novinka a Akce

Příznaky se zapínají v Produkty → Přehled → detail produktu → Hlavní údaje. Platí pro celou kartu včetně variant. Název, barvu a automatiku spravuje Nastavení → Produkty → Parametry a příznaky → Příznaky. Před zapnutím na sloučené kartě porovnejte všechna SKU. Zadavatel 17. 11. 2026 potvrdil pravidlo přenosu pouze při shodě všech variant.

Kontrola veřejných detailů WEXBO dne 17. 11. 2026 zahrnula všech 332 produktů ze sitemap a jejich přiřazení v migrační mapě. Novinku mělo 122 zdrojových položek a Akci 24. Do Shoptetu bylo přeneseno 15 příznaků Novinka a 6 příznaků Akce na 21 kartách. U každé byly ověřeny kódy všech variant, uložení a veřejné zobrazení. [Rozpis po SKU](../../src/plachtovehaly/migrace/priznaky-wexbo-2026-11-17.json)

Podle potvrzeného pravidla se Novinka nepřenáší na smíšené karty 44, 50, 203, 200, 83, 734, 674, 707 a 152. Při původním přenosu byla Akce vyřazena u smíšených karet 44, 254, 278, 203, 659 a 695. Následné sjednocení níže nahradilo pravidlo pro Akci posouzením skutečných slev. Počty označených variant lze vyčíst z rozpisu po SKU. Mimo zveřejněný katalog zůstává 14 zdrojových Novinek a 2 Akce. Při doplnění odložených položek ověřte jejich aktuální štítky znovu.

Pro ukončení příznaku zrušte jeho zaškrtnutí nebo nastavte konec platnosti. Přenos vycházel z veřejně viditelného stavu k datu kontroly, budoucí platnost akce je potřeba spravovat samostatně.

## Zobrazení cen s DPH a bez DPH

Od 17. 11. 2026 je v Nastavení → Základní nastavení → Daně aktivní plátce DPH se standardní sazbou 21 %. Zadavatel přepnutí výslovně schválil. Výchozí ceny jsou včetně DPH, pro kategorii i detail je zapnuto Zobrazovat obě ceny. Výchozí zadávání cen v administraci je také včetně DPH.

Před změnou byl obchod nastaven jako neplátce. Přepnutí přiřadilo produktům sazbu 21 % při zachování koncových cen. Kontrola všech 332 detailů WEXBO potvrdila poměr cen odpovídající 21 %. Před změnou i po ní byly ceny všech 312 zveřejněných SKU v exportu Shoptetu shodné s aktuálními cenami WEXBO. Kontrolní export po změně obsahoval 21 % u všech 448 kódů včetně neveřejných položek.

Při změně varianty se aktualizuje hlavní cena i dodatková cena bez DPH. Ověřeno při 390 a 1440 px na SKU 1000010 (46 900 Kč včetně DPH / 38 760,33 Kč bez DPH) a 1000353 (199 900 Kč / 165 206,61 Kč), v kategorii Sedlové haly i od detailu přes košík po dopravu. Pro první košík byla dostupná GEIS, pro druhý externí spedice. Objednávka při kontrole nebyla odeslána. [Mobilní detail](overeni/ceny-dph-mobil.png) · [Kategorie na počítači](overeni/ceny-dph-kategorie.png)

Pro změnu zobrazování upravujte volby cen v nastavení daní. Pravidlo dopravy se nadále vyhodnocuje z ceny zboží včetně DPH.

## Hlavní produktové fotografie 4 : 3

Správa: Produkty → Přehled → detail produktu → galerie. Přidejte schválený JPG 4 : 3 a přesuňte jej na první místo. Původní fotografie ponechte kvůli variantám i možnosti návratu. Cizí loga a texty do nových coverů nepřenášejte; vlastní značku Agro Dabaki zachovejte podle skutečné reference, nikdy ji nenahrazujte vymyšlenou značkou. Zkontrolujte kategorii, výchozí detail a přepnutí varianty na mobilu i počítači. [Deset nasazených coverů, seznam ID a návrat](vzhled/nahledove-fotografie.md#covery-4--3--nasazení-17-11-2026).

## Zarovnání výhod a mezera před kategoriemi

Editor → HTML kódy → Záhlaví: blok dabaki-konkurencni-vyhody obsahuje CSS z vyhody/lista.css s vystředěním ikon a textů. Blok titulni-strana-vzhled.html nastavuje horní padding obalu kategorií na 8 px; výsledná mezera je 24 px. CSS výhod vkládejte kompaktně kvůli limitu 8192 znaků celého záhlaví. Pro návrat odeberte justify-content:center, flex-wrap:nowrap a nové pravidlo padding-top:8px. Ostatní bloky zachovejte.

Doplnění 17. 11. 2026: dalších pět coverů 698/701/689/203/200 je po potvrzení zdrojů nasazeno, celkem 15. Stejný postup správy a návratu; [aktuální seznam](vzhled/nahledove-fotografie.md#doplnění-pěti-coverů--17-11-2026).

## Slevy a přeškrtnuté ceny

Dne 17. 11. 2026 byly z aktuálních veřejných detailů WEXBO přeneseny původní přeškrtnuté ceny 35 SKU na 11 kartách Shoptetu. Zdrojový katalog obsahoval 36 slev mezi 332 položkami. Odložené SKU 1000011 zatím nemá zveřejněný cíl; jeho slevu znovu ověřte při dokončení migrace. [Zdrojový rozpis slev](../../src/plachtovehaly/migrace/slevy-wexbo-2026-11-17.json)

Správa je v Produkty → Přehled → detail produktu → Ceník → Standardní cena. U variant nejprve otevřete příslušné provedení. Standardní cena obsahuje původní přeškrtnutou cenu včetně DPH, Cena obsahuje současnou prodejní cenu. Procento dopočítává Shoptet a zaokrouhluje dolů. Přenos použil dvě importní pole code a standardPrice, režim zachování položek mimo import a vypnuté mazání prázdnými hodnotami. Kontrolní export ověřil všech 35 původních cen a shodu prodejních cen všech 448 kódů před importem a po něm.

V Nastavení → Produkty → Zobrazení je pro kategorii zapnutá Sleva a vypnutá Standardní cena. Rodiny s různě zlevněnými rozměry tak zobrazují maximální slevu s označením „až“. Původní cena a přesné procento jsou na detailu po výběru konkrétní varianty. Toto nastavení bylo zvoleno při nasazení, protože šablona ve výpisu slučovala přeškrtnutou minimální cenu a slevu jiného rozměru.

Veřejně ověřeno všech 35 zlevněných SKU střídavě při 390 a 1440 px. SKU 1000028 odpovídá příkladu zadavatele, původně 233 900 Kč, nyní 169 900 Kč včetně DPH, 140 413,22 Kč bez DPH a sleva 27 %. Na obou šířkách prošel detail, vložení do košíku a přechod k externí spedici. Na stejné kartě byla ověřena také varianta 9,15 m v bílé bez číselné slevy. [Mobilní detail](overeni/sleva-rada33-390.png) · [Detail na počítači](overeni/sleva-rada33-1440.png) · [Kategorie na mobilu](overeni/slevy-kategorie-390.png)

Zdrojový rozpis zachycuje veřejné přeškrtnuté ceny WEXBO ke dni přenosu. Při ukončení slevy vyprázdněte Standardní cenu daného SKU a ověřte veřejný detail.

Při kompaktním vkládání CSS výhod zachovejte mezeru v selektoru :first-child :is(...). První ikona sortimentu má 56 × 42 px, v mobilní mřížce 44 × 32 px. Ověřeno 17. 11. 2026.

### Červené slevové štítky (17. 11. 2026)

Slevová bublina má kompaktní obdélníkový tvar s rohy 3 px, tmavě červenou barvu #b5362d a bílý text. Zobrazuje procento slevy, u rodin také „až“. Původní přeškrtnutá cena je u ceny produktu; uvnitř štítku je skrytá.

Styl spravuje [slevove-stitky-v4.css](../../src/plachtovehaly/shoptet/slevove-stitky-v4.css), nahraný přes Správce souborů a připojený v HTML záhlaví odkazem dabaki-slevove-stitky. Pro návrat odeberte tento odkaz. Kvůli limitu 8192 znaků bylo při nasazení zkráceno odsazení CSS bloků v záhlaví.

Ověřeno na veřejných kategoriích Sedlové haly a Mulčovače a na detailu řady 33 při 390 a 1440 px. Štítky mají červené pozadí, výšku 28 px, správné procento a společné zobrazení s Novinkou nebo Akcí bez přetečení stránky. U vybrané zelené varianty 15,25 m je −27 %. [Mobil](overeni/slevovy-stitek-sedlove-haly-390.png) · [Mulčovače na počítači](overeni/slevovy-stitek-mulcovace-1440.png).

### Úklid nahrazených coverů (17. 11. 2026)

Dokončeno odstranění všech 38 schválených originálů a kopií u 15 produktů; 34 vazeb variant převedeno na nové fotografie. Správa: Produkty → Přehled → Hlavní údaje → Fotogalerie, vazby variant v Ceníku. Zachované galerie a veřejné detaily ověřeny. Odstraněný originál lze obnovit opětovným nahráním z lokální zálohy; nové ID potom případně přiřadit variantám. [Přesná evidence, kontrola a zálohy](vzhled/nahledove-fotografie.md#úklid-originálů--dokončeno-17-11-2026).


### Sjednocení Akce se skutečnou slevou (17. 11. 2026)

Na žádost zadavatele je Akce zapnutá pouze tehdy, když má každé SKU na kartě skutečnou slevu, tedy Standardní cenu vyšší než aktuální prodejní cenu. Při změně cen, ukončení slevy nebo přidání varianty zkontrolujte také příznak Akce na celé kartě. Jde o uložené nastavení příznaků, které správce aktualizuje spolu s cenami.

V Produkty → Přehled → Hlavní údaje byla Akce zapnuta u FFM (272) a AGF PRO (254), vypnuta u AGE (248), WX 310 (593) a TRS 110 (647). Nadále ji mají ATV 120 (266), ATV 145 OT (269) a BX 92 RS (590). Výsledkem je pět karet s Akcí. Slevové štítky jednotlivých variant se dále řídí jejich cenami.

Aktuální export ověřil pravidlo u všech 141 zveřejněných karet. Na veřejných detailech všech osmi dotčených nebo zachovaných karet ověřeno zobrazení při 390 a 1440 px, v kategorii Mulčovače také rozložení bez přetečení. [Mobil](overeni/akce-slevy-390.png) · [Počítač](overeni/akce-slevy-1440.png).


### Prázdná sleva u varianty (17. 11. 2026)

Nasazen slevove-stitky-v3.css přes existující odkaz dabaki-slevove-stitky v HTML záhlaví. Styl respektuje označení skrytého štítku no-display/noDisplay a skrývá prázdnou původní cenu i prázdné procento, pokud aktivní varianta obsahuje pouze pomlčku. Při přepnutí zpět na zlevněnou variantu se štítek a údaje u ceny opět zobrazí.

Na živém detailu obloukové haly se zipovými vraty ověřeno při 390 a 1440 px přepnutí bílé varianty 7,3 m bez slevy → 9,15 m se slevou → 7,3 m bez slevy. V obou místech je prázdná sleva skrytá, zlevněná varianta má původní cenu a procento, prodejní ceny odpovídají 41 900 a 46 900 Kč.


<a id="objednavkove-e-maily"></a>
## Objednávkové e-maily

Od 18. 11. 2026 je na žádost zadavatele příjemce oznámení pro obchod (systémová akce 1) info@ruzickahonza.cz. Veřejný kontakt agro@dabaki.cz se neměnil. Zákaznické potvrzení je akce 2, šablona order (ID 1). [Test a vrácení příjemce](objednavky/doprava-a-platby.md#test-objednavky-18-11-2026).

Společný podpis upravujte v Nastavení → Emaily → Automatické zasílání → Části šablon → Podpis emailu (ID 3, signature). Zachovejte značky #WEBSITE_NAME#, #PROJECT_PHONE# a #PROJECT_EMAIL#. Dne 18. 11. odstraněn pozdrav „S přátelskými pozdravy,“; změna ověřena načtením uloženého HTML. Dopadá na všechny šablony používající signature, nikoli na již odeslané zprávy.

Bankovní účet pro CZK patří do Nastavení → Základní nastavení → Měny → Koruna → Bankovní účet. Při testu 18. 11. byl prázdný; před zapnutím reálného prodeje převodem doplnit firmou potvrzené údaje a zkontrolovat nově odeslané potvrzení.


<a id="cislovani-objednavek"></a>
## Číslování objednávek

Od 18. 11. 2026: Nastavení → Objednávky → Doklady → Objednávky, předpona `%YYYY%9`, tvorba číslování „číselná řada“, počet znaků 10, začít od 1. Výsledný formát pro rok 2026 je `20269xxxxx` (např. 2026900001). Nastavení ověřeno opětovným načtením; první reálné přidělení a nový e-mail se ověří další testovací objednávkou po doplnění účtu.

Původní WEXBO má řadu objednávek `1{YY}[5]`, např. 12600124. Již původní desetimístná řada Shoptetu se od ní lišila; dodatečná číslice 9 zřetelně označuje novou řadu. Číslování dříve vytvořených objednávek ani řady ostatních dokladů se tímto zásahem neměnily. Pro návrat byla původní předpona `%YYYY%`, ostatní hodnoty stejné. Před jakoukoli změnou prověřit již přidělená čísla a variabilní symboly; nevytvářet duplicity ani nepřečíslovávat uhrazené objednávky.


Doplnění 18. 11. 2026: interní šablona orderAdmin (ID 27) má rozlišující předmět „NOVÁ OBJEDNÁVKA … – oznámení pro obchod“ a úvod pro provozovatele, bez zákaznické výzvy k zaplacení. Při testech použijte rozdílné adresy zákazníka a interního příjemce. Se shodnou info@ dorazilo jen zákaznické potvrzení, s aliasem ja@ pro zákazníka byly u objednávky 2026900002 doloženy obě zprávy. Skutečná řada potvrzena čísly 2026900001 a 2026900002. [Výsledek](objednavky/doprava-a-platby.md#opakovany-test-emailu).


<a id="portret-podpory"></a>
## Portrét podpory v košíku — 18. 11. 2026

Nastavení → Základní nastavení → Nastavení obchodu → Kontaktní údaje pro vaše zákazníky → Fotografie obchodníka. Portrét montéra je ilustrační AI postava, nikoli fotografie konkrétního zaměstnance. Název firmy a telefon zůstávají v původních kontaktních polích.

Nasazený [PNG 76 × 76](../../src/plachtovehaly/shoptet/monter-podpora-76.png) je na `/user/merchant/monter-podpora-76.png`; [originál](../../src/plachtovehaly/shoptet/monter-podpora.png) je uložen v projektu. Shoptet uvádí maximální rozměry 76 × 84 px, proto nahrávejte připravenou malou verzi. Nahrání se uloží přímo; ověřte znovunačtením administrace a veřejného košíku. Při změně zachovejte volby zobrazení fotografie a kontaktů. Pro návrat nahrajte předchozí fotografii; lokální záloha původního portrétu je `.shoptet-cache/portrait-original.png`.

Ověřen prázdný košík při 390 a 1440 px: nový obrázek načten, kruhový ořez bez deformace, jméno firmy a `tel:+420774960063` zachovány, bez vodorovného přetečení. [Telefon](overeni/monter-podpora-390.png) · [Počítač](overeni/monter-podpora-1440.png). Nákupní logika beze změny, objednávka při této vizuální úpravě nevytvářena.

Vytvořeno vestavěným nástrojem imagegen; zadání: „Create a square photorealistic head-and-shoulders portrait for a small circular customer-support avatar on a Czech agricultural machinery shop. A fictional friendly, respectable male machinery mechanic about 40 years old, neat short brown hair, subtle stubble, natural warm slight smile, looking at camera. Clean charcoal work overalls over muted green work shirt, recognizable practical mechanic clothing. No hat, no helmet, no logos, no text, no tools obscuring face. Soft light grey studio background, soft natural lighting, realistic skin. Center face and shoulders with generous safe margin for circular cropping, crisp readable face at 64px. Single portrait, not a webpage or collage.“


### Modrá Novinka (18. 11. 2026)

Novinka má modré pozadí #2563eb a bílý text. V Nastavení → Produkty → Parametry a příznaky → Příznaky → Novinka (ID 2) je nastavena vlastní barva 2563eb. Adamin tuto hodnotu přepisoval oranžovou, proto se stejná barva prosazuje také v slevove-stitky-v4.css, připojeném stávajícím odkazem dabaki-slevove-stitky v HTML záhlaví. Při další změně odstínu aktualizujte administraci i tento styl.

Na veřejné kategorii Sedlové haly a detailu řady 30 ověřeno modré pozadí, bílý text a rozložení při 390 a 1440 px. [Mobilní kategorie](overeni/novinka-modra-kategorie-390.png).


## Oranžové termíny naskladnění — 18. 11. 2026

Nastavení → Produkty → Dostupnosti → detail konkrétního termínu → Název a Barva. Všech 22 existujících datovaných dostupností má název „Dostupné od DD.MM. RRRR“ a barvu `#b85c00`; do textového pole barvy se zadává **b85c00 bez mřížky** (limit šest znaků). Stejný formát a barvu nastavte při založení dalšího termínu. Název i barvu přebírá kategorie a detail produktu včetně přepínání variant.

Skladem zůstává `#3c840f`, Momentálně nedostupné `#d00000`. Změněny pouze názvy a barvy datovaných dostupností; ostatní pole každého formuláře porovnána před uložením a po něm. Skladová množství a pravidla nákupu nebyla měněna.

U všech 22 termínů ověřeno uložení opětovným načtením administrace. Veřejně ověřena řada 23 v kategorii Sedlové haly a všechny tři délky 9,15 / 12,2 / 15,25 m v detailu při 390 a 1440 px: „Dostupné od 05.01. 2027“ má vypočtenou barvu rgb(184, 92, 0). [Detail mobil](overeni/dostupnost-oranzova-detail-390.png) · [Detail počítač](overeni/dostupnost-oranzova-detail-1440.png) · [Kategorie mobil](overeni/dostupnost-oranzova-kategorie-390.png) · [Kategorie počítač](overeni/dostupnost-oranzova-kategorie-1440.png).

Pro návrat vyprázdněte Barvu dotčených datovaných dostupností (původně byly všechny prázdné) a z názvu odstraňte předponu „Dostupné od “. Nezasahujte do dostupností Skladem a Momentálně nedostupné. Úkol nemá zbývající práci.


### Na objednání — 18. 11. 2026

Nastavení → Produkty → Dostupnosti → ID 32: název **Na objednání**, barva **b85c00** bez mřížky. Změna platí pro všechny produkty používající tuto dostupnost. Ostatní pole formuláře zachována a porovnána po opětovném načtení. Pro návrat nastavte původní název „na objednání“ a prázdnou barvu.

Ověřeno všech 13 kombinací řady 40 při 390 a 1440 px: bílé délky 30,5 a 33,55 m zobrazují oranžové „Na objednání“, ostatní kombinace zachovávají zelené Skladem nebo oranžový termín. Kategorie řadu 40 správně zobrazuje jako Skladem (1 ks), protože jedna varianta je skladem. [Mobilní detail](overeni/na-objednani-detail-390.png) · [Detail na počítači](overeni/na-objednani-detail-1440.png). Pouze textová a barevná změna, nákupní pravidla beze změny; bez zbývající práce.


## Interní přesměrování vypnuta — 19. 11. 2026

Na přání zadavatele před spuštěním odstraněno všech 143 pravidel v Marketing → Základní SEO → Přesměrování adres (URL), `/admin/presmerovani-url/`. Po opětovném načtení přehled hlásí „Žádné položky“. Postup: CSV export, vybrat vše, Použít na všechny stránky → Funkce → Smazat → Ok. [Záloha odstraněných pravidel](../../src/plachtovehaly/migrace/presmerovani-vypnuta-2026-11-19.csv) obsahuje pouze URL a stav pravidel; pro návrat ji lze importovat na stejné stránce po kontrole aktuálních cílů.

Používejte přímo aktuální produktové adresy; při změně URL před spuštěním aktualizujte odkazy a zkontrolujte případná automaticky vytvořená pravidla. Dřívější CSV sloučených karet jsou historické podklady, nikoli aktuálně nasazená pravidla. Produkty, varianty, viditelnost a doménové přesměrování nebyly měněny. Příprava přechodu staré domény WEXBO zůstává samostatným úkolem.

Ověřeno 141/141 zveřejněných produktových adres: přímé HTTP 200 a produktový detail. Kontrola odkazů v těchto detailech, na homepage a Mapě webu (143 stránek) nenašla žádnou odstraněnou zdrojovou URL. Řemen B 17 funguje přímo na `/klinovy-remen-b-17/`, s výběrem délek; stará adresa `/klinovy-remen-b-17-1110-lw-1050-li/` vrací 404 bez přesměrování. Odstranění pravidla nezveřejňuje původní skryté karty. Vizuálně ověřen detail při 390/1440 px, bez vodorovného přetečení. Nákupní logika nezměněna, průchod objednávkou v tomto úkolu netestován. Bez zbývající práce v rozsahu vypnutí interních pravidel.

[Protokol](overeni/presmerovani-vypnuto-2026-11-19.json) · [Mobil](overeni/primy-remen-390.png) · [Počítač](overeni/primy-remen-1440.png).


## Sloupce dostupnosti a úklid nabídky — 19. 11. 2026

Produkty → Sklad: „Dostupnost“ (`availabilityInStockId`) určuje text pro kladnou zásobu; „Dostupnost při vyprodání“ (`availabilityId`) pro vyčerpanou zásobu. Nastavené Skladem v prvním sloupci tedy neznamená, že je skutečně kladný počet kusů. Při nulové zásobě rozhoduje druhý sloupec a pravidlo nákupu do minusu; samotný název dostupnosti nákup nepovoluje ani nezakazuje. Prázdnou dostupnost posuzujte společně s globálním nastavením skladu výše.

Nastavení → Produkty → Dostupnosti: odstraněna pouze vlastní nepoužívaná položka **nedostupné** (ID 71, nulové přiřazení v obou sloupcích). Zmizení ověřeno v přehledu i nabídce skladu. Při prvním úklidu bylo vlastní **vyprodáno** (ID 68) přiřazené k 10 archivním kódům ARCHIV-SP-, **na dotaz** (ID 77) ke dvěma variantám, prodejní 1000324 a archivní ARCHIV-SP-1000324; tehdy ponechány, následně sjednoceny podle odstavce níže. Všechny vlastní termíny i Na objednání mají přiřazení. Systémové položky zachovány. Malé počáteční písmeno není kritériem nepoužívané dostupnosti.

Záloha formuláře a kompletní exporty před/po jsou lokálně v `.shoptet-cache/availability-71-backup.json` a `availability-cleanup-before.xml` / `availability-cleanup-after.xml`. Návrat: vytvořit vlastní „nedostupné“ s prázdným popisem, lhůtami, Google dostupností a barvou; nové ID může být jiné. Nejsou žádné produktové vazby k obnově. Veřejný vzhled a nákupní cesta se neměnily, nebyly znovu testovány. [Protokol kontroly](overeni/dostupnosti-uklid-2026-11-19.json).


### Sjednocení velikosti písmen — 19. 11. 2026

Na následný pokyn zadavatele převedeno v Produkty → Sklad všech 10 přiřazení „vyprodáno“ (68) na systémové **Vyprodáno** (−2) a obě přiřazení „na dotaz“ (77) na systémové **Na dotaz** (−5). Po ověření nulových vazeb odstraněny obě vlastní dostupnosti v Nastavení → Produkty → Dostupnosti. V nabídce zůstává 28 názvů bez duplicit při porovnání bez ohledu na velikost písmen. Pro další práci používejte systémové varianty; historické exporty nepoužívejte k obnově starých názvů.

Porovnání kompletních exportů všech 448 kódů potvrdilo pouze 12 požadovaných změn dostupnosti při vyprodání; zásoby, ceny, viditelnost, nákup do minusu i ostatní produktová data jsou shodná. Veřejně a vizuálně ověřena prodejní varianta 1000324 (bílá hala s navijákem 9,15 × 30 m) při 390/1440 px: „Na dotaz“, cena 189 900 Kč a nákupní tlačítko. Průchod objednávkou neopakován; nákupní nastavení se nezměnilo. [Protokol](overeni/dostupnosti-sjednoceni-2026-11-19.json) · [Mobil](overeni/sjednoceni-na-dotaz-390.png) · [Počítač](overeni/sjednoceni-na-dotaz-1440.png).

Zálohy: lokální `.shoptet-cache/availability-merge-before.xml`, `availability-merge-after.xml`, formuláře `availability-68-backup.json` a `availability-77-backup.json`. Pro případný návrat vytvořit původní vlastní stavy podle záloh a přiřadit pouze 12 kódů z protokolu; nové ID nebude původní. Bez zbývající práce.


## Facebook v patičce — 19. 11. 2026

**Aktuální stav: odkaz následně odstraněn 19. 11. 2026.** Zadavatel oznámil, že stránka neexistuje. Níže je historie původního vložení, nikoli pokyn k obnovení. Ověřený nový profil nemáme; bez jeho potvrzení odkaz nevracet.

Editor → HTML kódy → Zápatí, šablona `dabaki-paticka`: poslední položka ve sloupci Technika a vybavení je běžný odkaz **Facebook Agro Dabaki** na `https://www.facebook.com/dabaki.cz`. Cíl převzat z veřejné homepage původního WEXBO. Zadavatel potvrdil pouze Facebook, profil X neexistuje. [Zdroj patičky](../../src/plachtovehaly/shoptet/paticka.html).

Přidán pouze anchor bez SDK, iframe nebo widgetu. Existující sdílecí tlačítka Facebook/X a analytika nebyly měněny; jejich samostatný cookie audit v plánu není tímto uzavřen. Zjištěno zapnuté sdílecí tlačítko Facebook v Propojení → Sociální sítě. Při práci s touto stránkou nelogovat hodnoty tajných integračních polí.

Zápatí je blízko limitu Shoptetu 8192; editor odmítl delší variantu bez změny polí. Finální šablona má odstraněné pouze mezery mezi HTML značkami, okolní obsah zápatí zachován a po uložení porovnán. Znovunačtení administrace a veřejná kontrola při 390/1440 px potvrdily odkaz po odmítnutí cookies, správný cíl, viditelnost a nepřetékání. [Protokol](overeni/facebook-paticka.json) · [Mobil](overeni/facebook-paticka-390.png) · [Počítač](overeni/facebook-paticka-1440.png). Nákupní cesta nezměněna, netestována. Návrat: odebrat pouze li s tímto odkazem; pracovní záloha celého pole je lokálně `.shoptet-cache/facebook-footer-before.html`.


### Odstranění neplatného Facebooku — 19. 11. 2026

Na pokyn zadavatele odstraněn pouze prvek li s odkazem `facebook.com/dabaki.cz` z šablony dabaki-paticka v Editor → HTML kódy → Zápatí. Znovu načtené pole odpovídá původnímu obsahu bez tohoto prvku; zdroj paticka.html synchronizován. Na veřejné homepage při 390/1440 px nula těchto odkazů a žádné přetečení, snímky vizuálně ověřeny. [Protokol](overeni/facebook-odstranen.json) · [Mobil](overeni/facebook-odstranen-390.png) · [Počítač](overeni/facebook-odstranen-1440.png). Historické snímky přidaného odkazu ponechány jako evidence. Nákupní cesta nezměněna; cookie audit existujících sdílecích prvků je nadále otevřený.


## Sloučení podkategorií — 20. 11. 2026

Náhradní oblouky již nejsou samostatnou podkategorií: obě karty 47 a 587 patří přímo do Obloukových hal (707). Příslušenství kontejnerů (karty 725, 719, 722, 716) patří přímo do Zastřešení lodních kontejnerů (782). Produkty → detail → Kategorie: nastavovat členství i výchozí kategorii. Původní kategorie 710 a 788 byly po přesunu odstraněny.

Mapa webu (Stránky, ID 794) má sloučené seznamy produktů bez obou mezilehlých nadpisů; udržujte [zdroj mapy](../../src/plachtovehaly/shoptet/mapa-webu.html). Článek Poradny ID 11 odkazuje na hlavní kategorii kontejnerů. Staré adresy se podle zadání před spuštěním nepřesměrovávají. Historické importy mohou staré členění obnovit; používejte aktuální export. Případný návrat vyžaduje znovu vytvořit podkategorie, přiřadit produkty i výchozí kategorii a upravit Mapu webu; neobnovovat celý starý katalog.

Čerstvé úplné exporty před/po obsahují shodně 236 karet a liší se pouze CATEGORIES šesti uvedených karet. Veřejné detaily, odkazy a mobilní/desktopové kategorie i Mapa webu ověřeny; mobilní test SKU 1000059 prošel do dopravy bez objednání. [Protokol](overeni/subkategorie-zruseni-2026-11-20.json), snímky ve stejné složce s prefixem subkategorie-. Pracovní zálohy XML/HTML jsou lokálně v ignorované .shoptet-cache/subcats-* a nejsou součástí předání.


## Lokální pracovní cache

Pro nový klon použijte [instalaci a čtecí kontrolu přihlášení](AUTOMATIZACE.md). Sdílený modul je verzovaný v `src/plachtovehaly/tools/browser`; návody již nevyžadují lokální `flag-common.cjs`. Běžná správa Shoptetu nepotřebuje WEXBO ani historické exporty. Před každou změnou pořiďte vlastní čerstvou zálohu. Opakovaně používané nástroje patří do `src/plachtovehaly/tools`; zmínky o skriptech v cache níže se týkají jednorázové a historické práce.

Od 20. 11. 2026 používejte `.shoptet-cache` pro skripty, exporty, zálohy, snímky a importní výstupy Shoptetu. `.wexbo-cache` obsahuje pouze původní stránky, inventuru a čtecí skripty WEXBO. Migrační skript může číst obě složky; umístění vstupu se řídí systémem, ze kterého data pocházejí, a výstup pro import do Shoptetu patří do `.shoptet-cache`. Například číselné HTML produktů zůstává ve WEXBO, schéma `products-complete-v10.rng` a import `sklad-wexbo.xml` patří do Shoptetu (poslední soubor má přes název formát importu Shoptetu).

Obě složky jsou ignorované Gitem, mohou obsahovat citlivá data a nejsou součástí předání. Trvalé zdroje patří do `src/plachtovehaly`, ověřovací protokoly bez citlivých údajů do `docs/plachtovehaly/overeni`. Samotný přesun ani kontrola syntaxe neopravuje staré přístupy, historické cesty nebo zastaralé obchodní údaje: před spuštěním staré automatizace vždy prověřte její rozsah.

Lokální `.shoptet-cache/cache-split-manifest.json` eviduje původní a nové cesty a kontrolní součty všech 2 235 souborů. `.shoptet-cache/cache-split-checks.json` obsahuje výsledek kontroly. Původní znění 232 upravených skriptů je v `.shoptet-cache/cache-split-original-scripts`; slouží pouze pro návrat a obsahuje staré cesty. Při návratu postupujte podle manifestu a neobnovujte zálohu přes novější práci. Data exportů, obrázků a HTML nebyla při přesunu obsahově měněna.
