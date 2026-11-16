# Předání e-shopu Agro Dabaki

Stav k 16. listopadu 2026. Shoptet běží na [plachtovehaly.agrodabaki.cz](https://plachtovehaly.agrodabaki.cz/). Firemní prezentace má vlastní adresu [agrodabaki.cz](https://agrodabaki.cz/). Přechod zákazníků z původního WEXBO je ještě před námi. [Historie změn, dohody se zadavatelem a seznam úkolů](../PLAN.md)

| Co správce potřebuje | Kde navázat |
| --- | --- |
| Přihlášení, doména a licence | [Administrace Shoptetu](https://828678.myshoptet.com/admin/), projekt 828678, tarif Business a šablona Adamin. Doména agrodabaki.cz je u ACTIVE 24. Registrace Shoptetu proběhla na realizační účet. Při předání dořešit správce, vlastníka a fakturaci. Přístupy jsou u realizačního týmu v lokálním souboru accesses.txt mimo Git. |
| Produkty, ceny a sklad | 312 původních prodejních kódů je na 141 nabízených kartách. V administraci otevřít Produkty → Přehled a vyhledat kód. U sloučených výrobků upravovat cenu a sklad konkrétní varianty. Pomocné kódy ARCHIV-SP- patří původním kartám. [Rozhodnutí o slučování a kontrola exportu](katalog/rodiny-variant.md) |
| Výběr provedení | U společných karet zákazník vybírá z dostupných provedení. Jediná dostupná hodnota se předvolí automaticky. Nastavení → Produkty → Zobrazení používá rozdělené varianty. Adamin má navíc ve Vzhled a obsah → Editor → HTML kód → Zápatí [úpravu roletek](../../src/plachtovehaly/shoptet/vyber-haly.html). Po úpravě zkontrolovat na telefonu i počítači výběr, kód, cenu a variantu v košíku. |
| Doprava a platba | Nastavení → Doprava a platby. Pro český košík rozhoduje hodnota zboží včetně DPH. Do 100 000 Kč včetně je GEIS, od 100 000,01 Kč externí spedice. Obě jsou zatím zdarma, převod i dobírka bez příplatku. [Uložené sazby a výsledky testů](objednavky/doprava-a-platby.md) |
| Staré odkazy | Marketing → Základní SEO → Přesměrování adres (URL). Všech 143 evidovaných starších adres v Shoptetu vede přímo přes HTTP 301 na platný produkt. Při přejmenování karty upravte pole URL adresa, přesměrujte její dosavadní adresu i starší aliasy přímo na nový cíl a aktualizujte mapu WEXBO. Pro rodiny výrobků použijte název řady bez rozměrů jednotlivých variant. [Nasazená pravidla](../../src/plachtovehaly/migrace/presmerovani-sloucenych-karet.csv) a [mapa původních adres WEXBO pro přepnutí](../../src/plachtovehaly/migrace/mapa-url.csv) |
| Vzhled a obsah | Ve Vzhled a obsah → Editor → Editor vzhledu spravujte [vodorovné logo Agro Dabaki](../../src/plachtovehaly/shoptet/agro-dabaki-horizontal.svg) v části Záhlaví → Logo a [ikonu karty](../../src/plachtovehaly/shoptet/favicon-agro-dabaki.png) v Další nastavení → Favicona. V zelené navigaci je ověřeno všech 17 fotek podkategorií. Stav textů a informací pro zákazníky je v [přehledu informačních stránek](vzhled/informacni-stranky.md). |

## Co dokončit před předáním

Aktuální úkoly a zbývající ověření udržujeme v [plánu přechodu](../PLAN.md). Nastavení podle požadované změny najdete v [mapě administrace](ADMINISTRACE.md).

### Údržba popisů a konfigurací (15. 11. 2026)

V Shoptetu upravujte společný text jednou na produktové kartě. V tabulce rozlišujte skutečné kombinace, neuvádějte nepotvrzené parametry jako vlastnosti celé řady. Cenu a sklad udržujte u SKU, nikoli ručně v popisu. U odkazu na video napište, co zákazník uvidí, a zachovejte jeho adresu včetně časové značky.

Nasazené texty jsou v [halách](../../src/plachtovehaly/migrace/popis-haly.xml), [technice](../../src/plachtovehaly/migrace/popis-technika.xml), [garážích](../../src/plachtovehaly/migrace/popis-garaze.xml) a [dílech](../../src/plachtovehaly/migrace/popis-dily.xml); deset přístřešků má samostatnou [kartu Animal](../../src/plachtovehaly/migrace/animal-varianty.xml). Starší skupinové importy obsahují původní texty. Nepřehrávejte je přes aktuální katalog; při nové migraci použijte poslední export, porovnejte aktuální SKU a aplikujte finální popisy. XML Animal slouží jako záznam migrace, obsahuje i tehdejší obchodní hodnoty. Při opravě textu jej neimportujte celý. Přesuny a ověření viz [rodiny variant](katalog/rodiny-variant.md); otázky pro zadavatele viz [plán](../PLAN.md).

### Přesměrování produktů při přechodu z WEXBO

Pro původní kategorie je připraven [import 56 přesměrování](../../src/plachtovehaly/migrace/presmerovani-wexbo-kategorie.csv). Použijte jej při přepnutí původní domény. Předtím vyřešte cíle pro Nože, Univerzální náhradní díly a Výprodej podle [mapy](../../src/plachtovehaly/migrace/mapa-url.csv). Pro 312 zveřejněných kódů je připraven [seznam původních a cílových cest](../../src/plachtovehaly/migrace/presmerovani-wexbo-produkty.csv). Při přepnutí původní domény porovnejte cíle s aktuálním katalogem a v Shoptetu importujte soubor se zachováním existujících pravidel. Po připojení domény otestujte původní odkazy s www i bez www, odpověď 301 a konečný detail s HTTP 200. U [Obloukové haly se zipovými vraty](https://plachtovehaly.agrodabaki.cz/obloukova-hala-se-zipovymi-vraty/) jsou čtyři přesměrování v Shoptetu již aktivní. Osm adres WEXBO pro stejnou kartu je připraveno v seznamu pro přepnutí. Konkrétní provedení a zdrojový kód dohledáte v [mapě URL](../../src/plachtovehaly/migrace/mapa-url.csv).

Pevné rozměry jsou od 15. 11. 2026 součástí prodejních variant 20 karet. Při úpravách vycházejte z aktuálního exportu, historické importy popisů obsahují starší názvy a parametry. [Aktuální rozměry, názvy a SKU](../../src/plachtovehaly/migrace/konfigurace-rozmery.xml) odpovídají [konfigurátoru v zápatí šablony](../../src/plachtovehaly/shoptet/vyber-haly.html). Jediná dostupná hodnota se vybírá automaticky. U tří garáží udržujte v katalogu společný parametr Půdorys ve formátu šířka × délka. Konfigurátor v zápatí Adaminu jej na detailu rozdělí do dvou předvolených polí Šířka a Délka. V exportu se používá původní společná hodnota. Hlavní i rozbalovací košík přebírají pořadí a názvy parametrů z konfigurátoru v zápatí Adaminu. U karavanu se výška zobrazuje za délkou a před barvou. [Ukázka na mobilu](overeni/garaz-rozmery-mobil.png)

V konfigurátoru uvádějte barvu plachty samostatně. Plošná hmotnost patří do technických údajů konkrétního provedení. U obloukové haly se zipovými vraty může mít stejná barva při jiné délce odlišnou gramáž. Aktuální podoba 117 variant na 13 kartách je v souboru [konfigurace rozměrů a barev](../../src/plachtovehaly/migrace/konfigurace-rozmery.xml).

Konfigurátor v zápatí řadí rozměry vedle sebe a poté nabízí barvy dostupné pro zvolený rozměr. Pořadí spravuje seznam poradi v [konfigurátoru](../../src/plachtovehaly/shoptet/vyber-haly.html).

Blok Přijímáme online platby v bočním panelu kategorií skrývá [styl bočního panelu](../../src/plachtovehaly/shoptet/bocni-panel.html) v administraci Vzhled a obsah → Editor → HTML kód → Záhlaví. Pokud se v budoucnu zapne příjem karet, lze loga znovu zobrazit odstraněním tohoto pravidla.

Lištu výhod spravujte ve Vzhled a obsah → Bannery → Konkurenční výhody. Zelené ikony jsou v [projektu](../../src/plachtovehaly/shoptet/vyhody). Při změně plateb nebo dopravců aktualizujte také text příslušného banneru.
Po změně favicony otevřete přímo veřejný [soubor 60 × 60 px](https://plachtovehaly.agrodabaki.cz/favicon-60x60.png) a malé velikosti 16 a 32 px. U všech musí být vidět tmavě zelená střecha s průhlednou mezerou nad tyrkysovou halou a průhledné pozadí.
Diskuze u informačních stránek jsou od 16. 11. 2026 vypnuté společně ve Vzhled a obsah → Stránky → Nastavení diskuzí. Toto nastavení se vztahuje i na nově založené stránky.
U první instalace Adaminu dne 15. 11. 2026 vychází 30 dní na 15. 12. 2026. Přesný poslední bezplatný den administrace neuvádí. Po zkoušce má být jednorázový odkup 3 990 Kč bez DPH v následující faktuře. Datum splatnosti ověřte na vystaveném dokladu.

Fotografie, názvy a odkazy úvodní stránky upravujte ve Vzhled a obsah → Titulní strana. [Uložený obsah](../../src/plachtovehaly/shoptet/titulni-strana.html) používá fotografie z katalogu Shoptetu. Rozložení a ruční přepínání hlavní nabídky jsou v Editor → HTML kódy → Záhlaví, v bloku [Dabaki: titulní strana](../../src/plachtovehaly/shoptet/titulni-strana-vzhled.html). Při výměně produktu zkontrolujte také jeho fotku a cílový odkaz na homepage.
Zákaznické potvrzení objednávky používá v Shoptetu šablonu order (ID 1) při systémové akci ID 2. Před testem doručení porovnejte účet s údaji od firmy a nastavte přílohy podle finálního znění podmínek. [Ověřený stav a postup](objednavky/doprava-a-platby.md)
Při změně prodejných délek sedlové haly aktualizujte také Produkty → detail produktu → Parametry → Parametry pro filtrování. Zkontrolujte souběžný výběr šířky a délky v kategorii a výsledky po vymazání filtrů. [Přehled filtru délky](katalog/filtry-sedlove.md)

Návrhář šablon obsahuje od 16. 11. 2026 srovnávací koncept Step s kategoriemi vlevo. Veřejný vzhled spravujte dál v Adaminu na šabloně Classic. Podklady pro případné rozhodnutí o změně jsou v [migračním plánu](../PLAN.md).

Na detailu produktu i v kategoriích Adaminu na počítači začíná postranní košík sbalený. Pravidlo se vztahuje na každý výskyt tohoto panelu. Kliknutím na nadpis Nákupní košík ho zákazník rozbalí nebo sbalí. Spravuje se ve Vzhled a obsah → Editor → HTML kódy → Zápatí, v bloku [výchozí stav postranního košíku](../../src/plachtovehaly/shoptet/kosik-v-kategorii.html).

Hlavní obrázek produktové karty se nastavuje pořadím v galerii produktu. Vyberte první snímek tak, aby byl výrobek dobře rozpoznatelný i na telefonu. U barevných variant ověřte také změnu fotografie při výběru barvy. [Příklad tří plachtových garáží](vzhled/nahledove-fotografie.md)


U garáží a obloukových hal se pořadí Šířka → Délka řídí globální prioritou v Parametry a příznaky → Parametry pro filtrování. Při změně variant aktualizujte také filtrační hodnoty na kartě. [Ověřené hodnoty a kombinace](katalog/filtry-garaze-oblouk.md)

Pro jednotlivé kategorie udržujte rozměrové filtry podle účelu výrobku. Pracovní záběr, délka vidlí, šířka kompatibilní haly a půdorys přístřešku mají rozdílný význam. Při změně nabídky provedení zkontrolujte hodnoty na kartě a dostupné volby v kategorii. [Přehled všech 28 kategorií a postup správy](katalog/filtry-ostatni-kategorie.md)

Produktové dotazy i zprávy z Kontaktů mají v Shoptetu nastavenou adresu agro@dabaki.cz. Při předání ověřte příjem z obou formulářů a možnost odpovědět zákazníkovi. [Umístění obou nastavení a postup kontroly](objednavky/formulare-dotazy.md)

Velikosti náhledů kategorií v menu se upravují ve Vzhled a obsah → Editor → HTML kódy → Záhlaví, v bloku dabaki-menu-fotografie. [Rozměry a ověřené ukázky](vzhled/menu-nahledy.md)

Náhradní oblouky pro haly spravujte v Produkty → Kategorie → Obloukové haly → Náhradní oblouky (ID 710). [Veřejná podkategorie](https://plachtovehaly.agrodabaki.cz/nahradni-dily-k-halam/)

Obrázek podkategorie Náhradní oblouky se mění v jejím detailu v poli Obrázek kategorie. Výpis i rozbalovací menu používají stejný náhled; nyní je to nákres oblouku z produktu 1000059.

Pořadí hlavního menu se spravuje v Produkty → Kategorie. Dle dohody z 16. 11. 2026 začíná pěti kategoriemi v pořadí Sedlové haly, Obloukové haly, Zastřešení lodních kontejnerů, Přístřešky pro zvířata a Plachtové garáže. [Ověřené mobilní menu](overeni/menu-plachty-390.png)


Od 16. 11. 2026 je verze VOP na stránce ID 39 veřejná. V Nastavení → Emaily → Automatické zasílání → šablona order (ID 1) je připojen soubor obchodni-podminky-2026-11-16.pdf. Pro změny vždy aktualizujte stránku i přílohu a uchovejte předchozí datovanou verzi. Sedmidenní splatnost se vkládá částí šablony Informace pro platbu převodem. [Archiv zveřejněné verze](../../src/plachtovehaly/shoptet/obchodni-podminky-2026-11-16.pdf)

U sedlových hal byly v galeriích upraveny náhledy SP, dvojité konstrukce a řady 26. Při výměně fotografií u řad 40, 50 a 60 nejprve ověřte, ke kterému modelu snímek patří. [Přehled kontrol](vzhled/nahledove-fotografie.md)

K revizi zásad ochrany osobních údajů jsou připraveny [pracovní text](pravni/ochrana-udaju-pracovni.md) a [zjištění z webu a otázky pro provozovatele](pravni/ochrana-udaju-revize.md).

### Čtvrtletní kontrola dotazů a účtů

Kontrolu provádí majitel. Ve schránce projde běžné dotazy déle než 12 měsíců od vyřízení. Smaže nepotřebné zprávy. Při vazbě na probíhající objednávku, reklamaci či spor posoudí další potřebu jednotlivě.

V Shoptetu vybere účty s doloženou neaktivitou delší než 24 měsíců. Samotné stáří registrace nestačí. Při chybějících údajích o aktivitě nejprve ověří dostupnou evidenci. Na adresu účtu předem napíše, jak může zákazník zachování potvrdit a do kdy může odpovědět. Do uplynutí termínu účet ponechá aktivní a před zrušením ověří odpověď i případnou novou aktivitu. Účetní doklady se uchovávají podle vlastního režimu.

Po kontrole zaznamená datum, počty posouzených, ponechaných a smazaných položek a případná omezení. Do projektového záznamu patří souhrn bez zákaznických údajů.

## Sedm bílých variant hal (16. 11. 2026)

Správa v Shoptetu pod Produkty → Přehled, v detailu karty na záložce variant. Oblouková hala se zipovými vraty má 9 variant, Sedlová hala řady 26 má 9 a Sedlová hala řady 40 má 13. Kódy, rozměry a dostupnost při importu uvádí [přehled variant](katalog/sedm-variant-import.md).
Paleta od 16. 11. 2026 se spravuje ve Vzhled a obsah → Editor → Editor vzhledu. Barva šablony 1 je #00B07E, konverzní barva a barva šablony 3 jsou #007655. Pro najetí se používá #344D46. Vlastní barvy bannerů úvodní stránky jsou v bloku Dabaki: titulní strana v HTML kódu záhlaví.
Pro hlavičku i kartu podpory nahrávejte [webové SVG s průhledným pozadím](../../src/plachtovehaly/shoptet/agro-dabaki-horizontal.svg). Obě místa přebírají stejný soubor z nastavení loga.
