# Předání e-shopu Agro Dabaki

**Technické převzetí na novém počítači:** [instalace, přístupy a čtecí test Shoptetu](AUTOMATIZACE.md). Výchozí provoz po předání je Shoptet; staré cache se nekopírují. WEXBO podklady zůstávají pro historii a dokončení migrace. Přejímací test kolegy zatím nebyl proveden.

**Výchozí návod pro přebírajícího správce a jeho Codex:** [Správa katalogu](katalog/SPRAVA-KATALOGU.md). Postupy jsou použitelné bez historie chatu a bez lokální pracovní cache; přístupy se předávají zvlášť.

19. 11. 2026 — Původní doména je připravena v Shoptetu jako přesměrovaná s cílem `*`, hlavní adresa zůstává `plachtovehaly.agrodabaki.cz`. DNS u WEXBO dosud nezměněno; hlášení nesprávných DNS hodnot je v této fázi očekávané. [Nastavení domény](https://plachtovehaly.agrodabaki.cz/admin/dns-presmerovani-detail/?marketId=2&redirectionId=1237637) · [ověření, další kroky a návrat](MIGRACE.md#příprava-domény-v-shoptetu--19-11-2026).

Stav k 16. listopadu 2026. Shoptet běží na [plachtovehaly.agrodabaki.cz](https://plachtovehaly.agrodabaki.cz/). Firemní prezentace má vlastní adresu [agrodabaki.cz](https://agrodabaki.cz/). Přechod zákazníků z původního WEXBO je ještě před námi. [Historie změn, dohody se zadavatelem a seznam úkolů](../PLAN.md)

| Co správce potřebuje | Kde navázat |
| --- | --- |
| Přihlášení, doména a licence | [Administrace Shoptetu](https://828678.myshoptet.com/admin/), projekt 828678, tarif Business a šablona Adamin. Doména agrodabaki.cz je u ACTIVE 24. Registrace Shoptetu proběhla na realizační účet. Při předání dořešit správce, vlastníka a fakturaci. Přístupy jsou u realizačního týmu v lokálním souboru accesses.txt mimo Git. |
| Produkty, ceny a sklad | 312 původních prodejních kódů je na 141 nabízených kartách. V administraci otevřít Produkty → Přehled a vyhledat kód. U sloučených výrobků upravovat cenu a sklad konkrétní varianty. Pomocné kódy ARCHIV-SP- patří původním kartám. [Rozhodnutí o slučování a kontrola exportu](katalog/rodiny-variant.md) |
| Výběr provedení | U společných karet zákazník vybírá z dostupných provedení. Jediná dostupná hodnota se předvolí automaticky. Nastavení → Produkty → Zobrazení používá rozdělené varianty. Adamin má navíc ve Vzhled a obsah → Editor → HTML kód → Zápatí [úpravu roletek](../../src/plachtovehaly/shoptet/vyber-haly.html). Po úpravě zkontrolovat na telefonu i počítači výběr, kód, cenu a variantu v košíku. |
| Doprava a platba | Nastavení → Doprava a platby. Pro český košík rozhoduje hodnota zboží včetně DPH. Do 100 000 Kč včetně je GEIS, od 100 000,01 Kč externí spedice. Obě jsou zatím zdarma, převod i dobírka bez příplatku. [Uložené sazby a výsledky testů](objednavky/doprava-a-platby.md) |
| Staré odkazy | Od 19. 11. 2026 je všech 143 interních přesměrování na přání zadavatele odstraněno. Používejte přímé adresy současných produktových karet; všech 141 ověřeno s HTTP 200. Historické CSV automaticky neimportujte. [Správa, kontrola a záloha](ADMINISTRACE.md#interní-přesměrování-vypnuta--19-11-2026). Přechod staré domény WEXBO se řeší samostatně. |
| Vzhled a obsah | Ve Vzhled a obsah → Editor → Editor vzhledu spravujte [vodorovné logo Agro Dabaki](../../src/plachtovehaly/shoptet/agro-dabaki-horizontal.svg) v části Záhlaví → Logo a [ikonu karty](../../src/plachtovehaly/shoptet/favicon-agro-dabaki.png) v Další nastavení → Favicona. V zelené navigaci je ověřeno všech 17 fotek podkategorií. Stav textů a informací pro zákazníky je v [přehledu informačních stránek](vzhled/informacni-stranky.md). |

## Co dokončit před předáním

Od 17. 11. 2026 se nedostupné zboží ve zveřejněném katalogu označuje červeně **Momentálně nedostupné** a nelze je vložit do košíku. Globální nákup do minusu je zakázán; výjimky u variant s termínem, na objednání nebo na dotaz zůstávají povolené. Při změně dostupnosti kontrolujte zároveň tento přepínač u konkrétního SKU. Po naskladnění se běžný prodej obnoví automaticky. [Nastavení a ověření](ADMINISTRACE.md#nedostupné-zboží-a-nákup-do-minusu).

Aktuální úkoly a zbývající ověření udržujeme v [plánu přechodu](../PLAN.md). Nastavení podle požadované změny najdete v [mapě administrace](ADMINISTRACE.md).

### Údržba popisů a konfigurací (15. 11. 2026)

V Shoptetu upravujte společný text jednou na produktové kartě. V tabulce rozlišujte skutečné kombinace, neuvádějte nepotvrzené parametry jako vlastnosti celé řady. Cenu a sklad udržujte u SKU, nikoli ručně v popisu. U odkazu na video napište, co zákazník uvidí, a zachovejte jeho adresu včetně časové značky.

Nasazené texty jsou v [halách](../../src/plachtovehaly/migrace/popis-haly.xml), [technice](../../src/plachtovehaly/migrace/popis-technika.xml), [garážích](../../src/plachtovehaly/migrace/popis-garaze.xml) a [dílech](../../src/plachtovehaly/migrace/popis-dily.xml); deset přístřešků má samostatnou [kartu Animal](../../src/plachtovehaly/migrace/animal-varianty.xml). Starší skupinové importy obsahují původní texty. Nepřehrávejte je přes aktuální katalog; při nové migraci použijte poslední export, porovnejte aktuální SKU a aplikujte finální popisy. XML Animal slouží jako záznam migrace, obsahuje i tehdejší obchodní hodnoty. Při opravě textu jej neimportujte celý. Přesuny a ověření viz [rodiny variant](katalog/rodiny-variant.md); otázky pro zadavatele viz [plán](../PLAN.md).

### Přesměrování produktů při přechodu z WEXBO

Pro původní kategorie je připraven [import 56 přesměrování](../../src/plachtovehaly/migrace/presmerovani-wexbo-kategorie.csv). Použijte jej při přepnutí původní domény. Předtím vyřešte cíle pro Nože, Univerzální náhradní díly a Výprodej podle [mapy](../../src/plachtovehaly/migrace/mapa-url.csv). Pro 312 zveřejněných kódů je připraven [seznam původních a cílových cest](../../src/plachtovehaly/migrace/presmerovani-wexbo-produkty.csv). Při přepnutí původní domény porovnejte cíle s aktuálním katalogem a v Shoptetu importujte soubor se zachováním existujících pravidel. Po připojení domény otestujte původní odkazy s www i bez www, odpověď 301 a konečný detail s HTTP 200. U [Obloukové haly se zipovými vraty](https://plachtovehaly.agrodabaki.cz/obloukova-hala-se-zipovymi-vraty/) byla čtyři interní přesměrování aktivní do 19. 11. 2026; nyní jsou spolu s ostatními odstraněna. Osm adres WEXBO pro stejnou kartu je připraveno v seznamu pro přepnutí. Konkrétní provedení a zdrojový kód dohledáte v [mapě URL](../../src/plachtovehaly/migrace/mapa-url.csv).

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

Obrázek podkategorie Náhradní oblouky se mění v jejím detailu v poli Obrázek kategorie. Výpis i rozbalovací menu používají stejný náhled; nyní používá stejnou [ikonu](../../src/plachtovehaly/shoptet/kategorie/prislusenstvi-kontejnery.svg) jako Příslušenství ke kontejnerům. Obrázek se nahrává do každé kategorie zvlášť.

Pořadí hlavního menu se spravuje v Produkty → Kategorie. Podle frekvence nákupů začíná od 17. 11. 2026 takto: Sedlové haly, Obloukové haly, Přístřešky pro zvířata, Plachtové garáže a Zastřešení lodních kontejnerů.


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

Mapu webu v patičce spravujte ve Stránkách (ID 794). Po změně stromu katalogu upravte její odkazy a ověřte cestu z patičky. [Návod pro správce](vzhled/informacni-stranky.md#mapa-webu)
Adamin sdílí menu Informace pro vás mezi patičkou a horní lištou. [Styl pro horní lištu](../../src/plachtovehaly/shoptet/mapa-webu-lista.html) patří do Vzhled a obsah → Editor → HTML kódy → Záhlaví. Od šířky 768 px styl skrývá celou informační lištu. Na telefonu stejný prvek slouží jako mobilní navigace. Pět informačních odkazů spravujte v patičce.
Hlavní navigace se spravuje ve Vzhled a obsah → Menu → Horní menu a používá položku Všechny hlavní kategorie. Kontakty a Obchodní podmínky jsou v menu Informace pro vás v patičce.
Příslušenství ke kontejnerům se spravuje v Produkty → Kategorie → Zastřešení lodních kontejnerů → Příslušenství (ID 788). Původní URL /prislusenstvi-ke-kontejnerum/ zůstává v platnosti.
Ikonu Příslušenství změňte v detailu kategorie 788 v poli Obrázek kategorie. [Zdroj SVG](../../src/plachtovehaly/shoptet/kategorie/prislusenstvi-kontejnery.svg) používá společně dlaždice podkategorie i desktopové menu.
Na konci hlavních kategorií je Vybavení pro chov koní a poté Náhradní díly. V detailu kategorie ID 719 rozlišujte název stránky Náhradní díly ke strojům a kratší text odkazu do menu Náhradní díly.
Konkurenční výhody: text, cíl a obrázek měňte v každém banneru (01–04); kompaktní rozložení je v HTML kódu záhlaví. [Nasazené soubory a správa](vzhled/konkurencni-vyhody.md#správa-nasazené-verze).

Na titulní straně je osm ručně vybraných produktů ve skupinách Haly, garáže a zastřešení a Pro chov a práci na pozemku. Při skrytí produktu nebo výměně jeho fotek zkontrolujte také jeho kartu na homepage. [Postup správy výběru](ADMINISTRACE.md)

Ikony devíti hlavních kategorií se od 17. 11. 2026 spravují společně v CSS. Při přesunutí položky v pořadí ikona následuje její odkaz. Při změně adresy nebo přidání hlavní kategorie upravte přiřazení podle [návodu k ikonám hlavních kategorií](ADMINISTRACE.md#ikony-hlavních-kategorií).
Aktuální nasazená verze menu-ikony-v2.css používá pro zemědělskou techniku traktor a pro lesní techniku smrk.

Při osobním odběru zákazník přijede do skladu na adrese firmy až po potvrzení termínu. Pokyny se spravují u dopravy Osobní odběr (89) a na stránce Jak nakupovat (27).

Tři planýrovače jízdárny a sběrač KSP 120 jsou přímo ve Vybavení pro chov koní. Další výrobky tohoto sortimentu zařazujte přímo sem (ID 755).
Lišta konkurenčních výhod se zobrazuje pouze na úvodní stránce. Umístění i text „Zavolejte nám“ spravujte v [nastavení konkurenčních výhod](vzhled/konkurencni-vyhody.md#správa-nasazené-verze).

17. 11. 2026 – VOP na stránce 39 a datovaná příloha potvrzení objednávky (order, ID 1) nyní zahrnují bezplatné storno katalogové objednávky při osobním odběru až do převzetí, včetně nákupu na firmu. U doručení platí storno do předání dopravci. Publikované znění rozlišuje platby podle dopravy a odběr ve skladu po potvrzení termínu. Veřejné znění ověřeno při 390 a 1440 px, nová příloha ověřena po načtení šablony. Při plánované testovací objednávce ověřit její skutečné doručení. Pro starší objednávky použít archivní PDF příslušného vydání.
Kontakty, veřejná diskuze a produktový dotaz používají společný [styl zákaznických formulářů](objednavky/formulare-dotazy.md#vzhled-zákaznických-formulářů).

17. 11. 2026 – Vzhled a obsah → Stránky → VOP (39). Tabulka dopravy má ohraničení buněk a ceny zarovnané doprava. Ověřeno na veřejné stránce při 390 a 1440 px. Opravené PDF je u potvrzení objednávky (order, ID 1) pod názvem obchodni-podminky-2026-11-17-uprava.pdf.

Od 17. 11. 2026 jsou [informace o soukromí](https://plachtovehaly.agrodabaki.cz/podminky-ochrany-osobnich-udaju/) na stránce 691. Při změně služeb nebo doby uchování aktualizujte veřejné znění. Pro doplnění doložte poskytovatele pošty a záloh, jejich lhůty a případná předání mimo EHP, prověřte sociální prvky a měření a zaznamenejte první čtvrtletní kontrolu. [Otevřené otázky](pravni/ochrana-udaju-revize.md)

Provozovatel používá pro analytiku Google Analytics. Při změně měření zkontrolujte nastavení souhlasu a uchování a aktualizujte stránku 691.
Mřížku používají pouze tabulky vložené do popisu produktu. Konfigurátor a doplňkové parametry používají původní vzhled šablony. [Správa stylu tabulek](ADMINISTRACE.md#tabulky-v-popisech-produktů)

Hodnocení firmy pod průvodcem na homepage se aktualizuje ručně. Při změně skóre nebo počtu hodnocení na Firmy.cz upravte oba údaje i datum kontroly podle [návodu](ADMINISTRACE.md#hodnocení-firmy-na-homepage).

Odkazy na hlavní kategorie v patičce jsou ručně spravované. Po změně názvu nebo adresy upravte také [blok patičky podle návodu](ADMINISTRACE.md#patička-s-kategoriemi-a-vizitkou). Vizitka s telefonem pochází ze šablony Adamin.

E-mail pod telefonem ve vizitce je ve skriptu patičky. Při změně zákaznické adresy jej aktualizujte spolu se stránkou Kontakty podle výše uvedeného návodu.
Pro vložení produktového videa přidejte do popisu odkaz na YouTube. Odkaz se otevře v nové kartě a zákazníkovi zůstane otevřený detail produktu. [Návod](ADMINISTRACE.md#videa-v-popisech-produktů)

Dne 18. 11. 2026 byla po zkoušce schválena původní karta v designu obchodu; oficiální odznak a iframe byly odstraněny. Ověřeno na mobilu i počítači. Skóre, počet a datum kontrolujte jednou měsíčně nebo při nové recenzi; občas obměňte skutečnou citaci s autorem a datem. Automatické obnovování zatím není zavedeno. [Správa](ADMINISTRACE.md#hodnocení-firmy-na-homepage). Kontaktní odstavec s telefonem a e-mailem je spravován samostatně na Titulní straně. Od 18. 11. 2026 je oddělen větším odstupem a jemným zeleným podkladem; vzhled je uložen přímo v HTML odstavce. [Správa a návrat](ADMINISTRACE.md#závěrečný-kontakt-na-homepage).
Při úpravě vizitky zachovejte třídu project-email na e-mailovém odkazu, aby šablona zobrazila zavináč svisle vystředěný vůči adrese.

U přístřešku Animal se zákazníkovi předvyplní vojenská zelená. U zastřešení kontejnerů C26, C33S a zastřešení s navijákovými vraty se předvyplní bílá. Odstín správce upraví v Produkty → Přehled na příslušné kartě v doplňkovém parametru „Barva plachty“.

K 17. 11. 2026 uvádí karta na homepage 4,5 z 5 podle 10 hodnocení na Firmy.cz.
U staveb se do porovnání variant automaticky doplní i pevný rozměr. [Správa rozměrů v tabulce](ADMINISTRACE.md#rozměry-a-barvy-v-porovnání-konfigurací)

Lesní technika nabízí přímo jeden štěpkovač, tři štípačky a dva špalíkovače. Nové stroje těchto typů zařaďte přímo do Lesní techniky.

Fotografie, odkazy a rozložení mapy webu upravujte společně v HTML stránky 794. [Správa fotografického rozcestníku](vzhled/informacni-stranky.md#mapa-webu)
Mapa obsahuje také ručně udržovaný seznam produktů. Při změně katalogu aktualizujte názvy, odkazy, zařazení podle drobečkové navigace a počet karet v úvodu.

Novou rozměrovou hodnotu zařaďte podle skutečné velikosti do pořadí hodnot v detailu parametru Shoptetu. [Správa řazení filtrů](katalog/filtry-ostatni-kategorie.md#číselné-pořadí-hodnot-od-17-11-2026).

### Přenos příznaků z WEXBO (17. 11. 2026)

Na 21 kartách jsou přeneseny společné štítky všech variant, 15× Novinka a 6× Akce. [Postup správy a smíšené karty](ADMINISTRACE.md#příznaky-novinka-a-akce) obsahuje odkaz na veřejný zdrojový stav všech 332 SKU. Zadavatel 17. 11. 2026 potvrdil přenos pouze při shodě všech variant. Smíšené karty jsou z přenosu příslušného štítku vyřazeny. Přenos zveřejněného katalogu je podle tohoto pravidla dokončen. Dalších 14 Novinek a 2 Akce patří mezi odložené položky.

### Ceny s DPH a bez DPH (17. 11. 2026)

Obchod je po souhlasu zadavatele nastaven jako plátce DPH se sazbou 21 %. Kategorie a detail zobrazují obě ceny, hlavní je včetně DPH. Shoda koncových cen s WEXBO ověřena u všech 312 zveřejněných SKU. Košík uvádí také součet bez DPH, doprava se posuzuje podle částky včetně DPH. [Nastavení a výsledky kontroly](ADMINISTRACE.md#zobrazení-cen-s-dph-a-bez-dph).

### Poradna a SEO články (17. 11. 2026)

18. 11. 2026 následně nasazeny schválené malované ilustrace stylu C jako úvodní obrázky a náhledy všech 16 článků. Původní schémata zůstávají v obsahové části. Styl C je výchozí pro další blogové ilustrace; pravidla, zdrojové assety, prompty, správa a návrat jsou v [návodu blogových ilustrací](vzhled/blogove-ilustrace.md). Veřejná kontrola prošla 32/32 při 390/1440 px, ověřeny všechny náhledy a zvětšení; texty a SEO údaje zachovány. Historické zápisy níže popisují předchozí fáze.

18. 11. 2026 nasazena druhá série osmi článků (ID 26, 29, 32, 35, 38, 41, 44, 47) s vlastními schématy, náhledy a SEO údaji. Celkem 16 článků; všechny jsou v ruční i XML mapě webu. Ověřeny nové detaily a výpis při 390/1440 px, načtení obrázků, zvětšení a metadata. Veřejné odkazy na konkurenci byly na žádost zadavatele odstraněny, interní rešerše zachována. [Aktuální správa, CSS a kontrola](vzhled/informacni-stranky.md#poradna--druhá-série-nasazena-18-11-2026).

18. 11. 2026 následně doplněna schémata i náhledy původním osmi článkům (ID 2, 5, 8, 11, 14, 17, 20, 23). Všech 16 článků má nyní vlastní ilustraci. Původní texty i SEO metadata zachovány; kontrola osmi detailů na mobilu a počítači prošla 16/16, výpis načetl všech 16 náhledů a zvětšení funguje. TODO uzavřeno. [Správa první série, zdroje a ověření](vzhled/informacni-stranky.md#poradna--obrázky-první-série-doplněny-18-11-2026).

První série zveřejněná 17. 11. obsahuje osm článků o halách, mulčovačích, technice pro jízdárny a dílech. Rubrika Poradna má ID 797, první články ID 2, 5, 8, 11, 14, 17, 20, 23. Odkaz je v patičce. [Podklady první série](vzhled/informacni-stranky.md#poradna--publikace-17-11-2026). Tehdejší čekající propsání do XML sitemap bylo potvrzeno 18. 11. Při přidání dalšího článku doplňte ruční Mapu webu a uložené podklady.

## Covery – aktualizace 17. 11. 2026

18. 11. 2026 opraveny přehlédnuté ruční odkazy na odstraněné originály: pět v homepage a jeden v Mapě webu. Nyní používají nové covery; veřejné načtení a homepage na mobilu/počítači ověřeny. Při dalším úklidu kontrolovat i odkazy mimo galerie. [Evidence opravy](vzhled/nahledove-fotografie.md#oprava-ručních-odkazů--18-11-2026).

Úklid galerií dokončen 17. 11. 2026: všech 38 schválených originálů a kopií odstraněno z 15 karet, 34 vazeb variant převedeno. Ostatní pohledy a výkresy zachovány; konečné galerie i všech 15 veřejných detailů ověřeny, vzhled kontrolován na mobilu i počítači. Lokální zálohy zachovány. [Evidence a obnova](vzhled/nahledove-fotografie.md#úklid-originálů--dokončeno-17-11-2026). Následující zápisy zachycují předchozí fáze nasazení.

Deset schválených fotografií 4 : 3 je nasazeno jako první obrázky produktových galerií. U PP odstraněno ALLSHELTER, na řadě 26 je Agro Dabaki. Původní snímky jsou zachované. Pět nejasných zdrojů (řady 40/50, C4040 otevřené/s vraty a navijáková vrata) čeká na potvrzení správného výrobku. [Správa, kontrola a návrat](vzhled/nahledove-fotografie.md#covery-4--3--nasazení-17-11-2026).

Od 17. 11. 2026 jsou výhody na homepage vystředěné v jednotlivých desktopových sloupcích a mezera před kategoriemi je 24 px. Správa: Editor → HTML kódy → Záhlaví, blok výhod a blok titulní strany. Ověřeno při 320, 390, 1024 a 1680 px. CSS výhod je v administraci kompaktní kvůli limitu pole.

17. 11. 2026 – Doplněno pět dříve odložených coverů po výslovném potvrzení stávajících fotografií uživatelem. Celkem 15 nasazených coverů. [Pět nových ID, ověření a návrat](vzhled/nahledove-fotografie.md#doplnění-pěti-coverů--17-11-2026). Nadále jde o sdílené fotografie pro více provedení, nikoli nové fotografické rozlišení modelů.

### Slevy z WEXBO (17. 11. 2026)

Původní ceny 35 SKU na 11 kartách jsou přeneseny do Standardní ceny, sleva se dopočítává pro jednotlivé varianty. Kategorie zobrazují slevu „až“, detail zvoleného provedení přesnou původní cenu i procento. Veřejná kontrola všech 35 SKU a nákupní cesta příkladu řady 33 na mobilu i počítači prošla. SKU 1000011 čeká na dokončení migrace. [Postup správy, zdrojový rozpis a ověření](ADMINISTRACE.md#slevy-a-přeškrtnuté-ceny).

Ikona Rozmanitý výběr byla 17. 11. 2026 zvětšena na 56 × 42 px (mobilní mřížka 44 × 32 px). Vystředění a mezera 24 px před kategoriemi zachovány, ověřeno na telefonu i počítači.

Slevy od 17. 11. 2026 používají červený obdélníkový štítek s bílým textem. Styl je ve Správci souborů a HTML záhlaví, podrobnosti a návrat popisuje [správa štítků](ADMINISTRACE.md#červené-slevové-štítky-17-11-2026).

Od 17. 11. 2026 po následném sjednocení má Akci pouze karta se skutečnou slevou všech SKU. Příznak je na pěti kartách. Při změně ceny či variant správce aktualizuje také Akci. [Pravidlo a ověření](ADMINISTRACE.md#sjednocení-akce-se-skutečnou-slevou-17-11-2026).

Oprava 17. 11. 2026 používá slevove-stitky-v3.css. U variant bez slevy skrývá červený štítek i pomlčky nad cenou, při přepnutí na zlevněnou variantu údaje znovu zobrazí. [Správa opravy](ADMINISTRACE.md#prázdná-sleva-u-varianty-17-11-2026).


## Test objednávkových zpráv — 18. 11. 2026

Příjemce oznámení pro obchod byl na žádost zadavatele změněn z hlavního kontaktu na info@ruzickahonza.cz. Před předáním potvrdit cílovou adresu a případně vrátit hlavní e-mail obchodu. Test 2026000001 za 49 Kč (GEIS, převodem) byl označen NEEXPEDOVAT a po kontrole stornován; ověřen návrat zásoby 1 ks. Zákaznické potvrzení a datované PDF VOP byly skutečně doručeny a doloženy snímky zadavatele. Chybí bankovní účet v nastavení CZK i v potvrzení; doplnit ověřený účet, prověřit fakturu. Logo e-mailu je zatím starší zelené. [Výsledek a postup](objednavky/doprava-a-platby.md#test-objednavky-18-11-2026).

Ze společného podpisu automatických e-mailů odstraněno „S přátelskými pozdravy,“; název obchodu a kontakty zůstávají. Uložení ověřeno, nové doručení změněného podpisu zatím neproběhlo.


18. 11. 2026 – Číslování nových objednávek upraveno na %YYYY%9, celková délka 10, postupně od 1. Vzor 2026900001 je oddělený od WEXBO 1{YY}[5]. Uložení ověřeno, generování novou objednávkou zbývá. WEXBO nemá v Bankovních účtech ani detailu platby převodem konkrétní účet; zadavatel požádán o správný firemní účet. [Správa číslování](ADMINISTRACE.md#cislovani-objednavek).


18. 11. 2026 – Opakovaný test 2026900002 prokázal doručení zákaznického potvrzení na ja@ruzickahonza.cz i interního oznámení na info@ruzickahonza.cz (aliasy téže schránky), potvrzeno zadavatelem a snímkem. Test se shodnou adresou obou příjemců předtím doručil pouze zákaznickou zprávu. Interní šablona orderAdmin (27) má nyní odlišný předmět a text pro provozovatele. Nová číselná řada skutečně generuje 2026900001, 2026900002. Oba testy stornovány a sklad vrácen. [Podrobný výsledek](objednavky/doprava-a-platby.md#opakovany-test-emailu).


<a id="idoklad-test-a-predani"></a>
## iDoklad — test a předání

Dohoda 18. 11. 2026: propojení nejprve otestovat na iDokladu Jana Růžičky, při předání přepnout na účet majitele e-shopu. Zatím jde o schválený postup, nikoli nasazené propojení. Integrační služba a cena ještě nejsou vybrané; přístup k iDokladu ani službě není v accesses.txt.

Před prvním dokladem ověřit tarif a způsob připojení, oddělení testovací řady a omezení na označené testovací objednávky. Ověřit dodavatele na dokladu, DPH, částky, číslo objednávky versus faktury, variabilní symbol, bankovní účet, QR platbu a doručení. Fakturu musí vystavovat a odesílat jediná určená cesta, aby nevznikaly duplicity. Testovací účet zadavatele není produkčním vystavitelem dokladů Agro Dabaki.

Při předání připojit účet majitele, ověřit jeho firemní a platební údaje i číselné řady, otestovat návaznosti, vypnout testovací přenos a odpojit oprávnění k účtu zadavatele. Doklady již vytvořené na testovacím účtu neoznačovat za automaticky převedené do účtu majitele. Přístupy předávat odděleně mimo Git a chat.


## Portrét podpory — 18. 11. 2026

V košíku je místo výchozího pána v klobouku ilustrační AI portrét montéra. Spravuje se samostatně ve Fotografii obchodníka v kontaktních údajích obchodu, nikoli v nastavení loga. Ověřeno na mobilu a počítači včetně telefonu. [Zdrojové obrázky, postup výměny a kontroly](ADMINISTRACE.md#portret-podpory).

Od 18. 11. 2026 je Novinka modrá (#2563eb) s bílým textem. Barvu spravuje vlastní barva příznaku a styl slevove-stitky-v4.css kvůli přepisu v Adaminu. [Postup](ADMINISTRACE.md#modrá-novinka-18-11-2026).


## Barvy dostupnosti — 18. 11. 2026

Termíny naskladnění jsou nově oranžové s textem „Dostupné od“ v kategorii i detailu; Skladem zelené a Momentálně nedostupné červené. Při vytváření nového termínu nastavte v Nastavení → Produkty → Dostupnosti název „Dostupné od DD.MM. RRRR“ a barvu `b85c00` bez mřížky. Nasazeno u všech 22 stávajících termínů, řada 23 ověřena na mobilu i počítači včetně tří variant. [Správa, snímky a návrat](ADMINISTRACE.md#oranžové-termíny-naskladnění--18-11-2026).


18. 11. 2026 – Také dostupnost **Na objednání** (ID 32) používá oranžovou #b85c00 a velké počáteční N. Nastavení je společné pro všechny produkty s touto dostupností. Ověřeno na všech 13 kombinacích řady 40 na mobilu i počítači. [Správa a návrat](ADMINISTRACE.md#na-objednání--18-11-2026).


19. 11. 2026 — Z nabídky dostupností odstraněno nepoužívané „nedostupné“ (71). Následně na pokyn zadavatele převedeno 10 přiřazení na systémové „Vyprodáno“ a dvě na „Na dotaz“, vlastní duplicity odstraněny. Nabídka obsahuje 28 stavů bez duplicit lišících se velikostí písmen. Používejte systémové názvy; skladová a nákupní pravidla zachována. [Význam obou skladových sloupců, kontrola a návrat](ADMINISTRACE.md#sloupce-dostupnosti-a-úklid-nabídky--19-11-2026).


19. 11. 2026 — Do patičky přidán běžný odkaz Facebook Agro Dabaki převzatý z WEXBO; X na přání zadavatele nepřidáván. [Místo správy a ověření](ADMINISTRACE.md#facebook-v-patičce--19-11-2026). Cookie audit zůstává samostatně otevřený.


19. 11. 2026 — Facebook z patičky následně odstraněn: zadavatel oznámil neexistující stránku. Aktuálně není vložen odkaz na Facebook ani X. Původní odkaz z WEXBO neobnovovat bez ověření nového profilu. [Kontrola odstranění](ADMINISTRACE.md#odstranění-neplatného-facebooku--19-11-2026).


### Sloučené podkategorie — 20. 11. 2026

Náhradní oblouky (2 karty) se spravují přímo v Obloukových halách; příslušenství kontejnerů (4 karty) přímo v Zastřešení lodních kontejnerů, vždy včetně výchozí kategorie. Obě podkategorie jsou odstraněné a Mapa webu již zobrazuje společné seznamy pod hlavními kategoriemi. Staré adresy se před spuštěním podle zadání nepřesměrovávají. [Postup a ověření](ADMINISTRACE.md#sloučení-podkategorií--20-11-2026).


### Lokální cache podle systému — 20. 11. 2026

Pracovní exporty, zálohy a skripty Shoptetu jsou v ignorované `.shoptet-cache`; původní podklady a skripty WEXBO zůstávají v `.wexbo-cache`. Ani jedna složka se nepředává přes Git. Cesty verzovaných migračních nástrojů a provozních návodů odpovídají tomuto rozdělení. [Pravidla a ověření přesunu](ADMINISTRACE.md#lokální-pracovní-cache).
