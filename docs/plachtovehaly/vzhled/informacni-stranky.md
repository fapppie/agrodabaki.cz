# Informační stránky pro Shoptet

**Aktuální ilustrace Poradny od 18. 11. 2026:** všech 16 článků má schválenou malovanou ilustraci stylu C v úvodu i náhledu; původní technické schéma zůstává v navazující části. Výchozí styl dalších blogových obrázků, assety, prompty a provozní postup popisuje [návod blogových ilustrací](blogove-ilustrace.md). Nasazeno přes Články a Správce souborů, bez změny sdíleného CSS. Kontrola 32/32 detailů při 390/1440 px a všech 16 náhledů na obou šířkách prošla, včetně metadat a zvětšení. [Produkční ověření](../../../src/plachtovehaly/shoptet/poradna/ilustrace-styl-c/overeni/produkce.json). Níže jsou také historické fáze přípravy a publikace.

Stav přípravy k 15. 11. 2026. Cílové cesty v tabulce jsou relativní k `https://plachtovehaly.agrodabaki.cz`. Kontakty, návod k nákupu, obchodní podmínky a ochrana údajů už mají odkazy na titulní stránce Shoptetu. Po výměně obsahu zkontrolovat cíle v patičce, v košíku i v objednávkových e-mailech. Přesměrování ze staré domény patří do dne přepnutí.

| Stránka | Zdrojové cesty na WEXBO | Cíl v Shoptetu | Umístění |
| --- | --- | --- | --- |
| Kontakty | `/m/kontakt-6/`, `/m/6/` | `/kontakty/` | Hlavička a patička |
| Jak nakupovat | `/m/informace-4/vse-o-nakupu-5/`, `/m/4/5/` | `/jak-nakupovat/` | Horní lišta a patička |
| Obchodní a reklamační podmínky | `/m/informace-4/obchodni-podminky-16/`, `/m/4/16/` | `/obchodni-podminky/` | Patička a objednávka |
| Ochrana osobních údajů | `/m/informace-4/ochrana-soukromi-17/`, `/m/4/17/` | `/podminky-ochrany-osobnich-udaju/` | Patička a formuláře |
| Blog | `/m/blog-15/` | `/jak-vybrat-plachtovou-halu/` | Odkaz ze stránky Jak nakupovat |

## Kontakty – text pro zákazníky

Potřebujete poradit s výběrem haly nebo ověřit, zda náhradní díl pasuje na váš stroj? Zavolejte nám na **[+420 774 960 063](tel:+420774960063)** od pondělí do pátku mezi **8.00 a 16.00** nebo napište na **[agro@dabaki.cz](mailto:agro@dabaki.cz)**. U dotazu na náhradní díl připojte označení modelu.

**Sídlo společnosti**  
Agro Dabaki s.r.o.  
Jankov 215, 257 03 Jankov  
IČO 05763177

Chcete si zboží vyzvednout osobně? Ozvěte se předem, abychom vám potvrdili místo a termín odběru.

## Podklady k přenosu

- **Identita firmy.** ARES přímo k IČO 05763177 vrací společnost Agro Dabaki s.r.o. a sídlo č.p. 215 v Jankově. Původní kontakty označují Blanickou 152 za fakturační adresu, obchodní podmínky ji označují za sídlo a blog uvádí Jankov 215. S firmou potvrdit současnou fakturační adresu, umístění skladu a místo převzetí reklamací. Telefon, e-mail a provozní dobu telefonu uvádí původní web. [ARES](https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty/05763177) · [Kontakty WEXBO](https://www.plachtovehaly-agrodabaki.cz/m/kontakt-6/)
- **Nákup, doprava a platba.** Průvodce původního obchodu uvádí GEIS a FOFR, hotovost ve skladu a převod podle faktury. Odeslání do 48 hodin podmiňuje dostupností a způsobem platby. Pro český Shoptet použít [schválené podmínky dopravy a platby](../objednavky/doprava-a-platby.md). Před zveřejněním potvrdit osobní odběr a platební údaje. Text průvodce potom odvodit od skutečných voleb v Shoptetu pro rozměrnou halu a malý díl. [Původní informace o nákupu](https://www.plachtovehaly-agrodabaki.cz/m/informace-4/vse-o-nakupu-5/)
- **Obchodní podmínky.** Ve zdroji je jiná doména `www.Dabaki-eshop.cz`, rozdílné číslo popisné proti ARES a překlep v PSČ. Text také slibuje přílohy obchodních podmínek a zásad ochrany osobních údajů v e-mailovém potvrzení objednávky. Převzít od provozovatele aktuální znění, doplnit schválenou adresu pro reklamace a ověřit skutečné přílohy zprávy. [Původní podmínky](https://www.plachtovehaly-agrodabaki.cz/m/informace-4/obchodni-podminky-16/)
- **Ochrana osobních údajů.** Krátký odkaz z patičky vede na stránku s HTTP 200, která oznamuje chybějící nebo neaktivní článek. Pro Shoptet si vyžádat od provozovatele aktuální text pro objednávky, kontaktní formulář a případný newsletter. Ověřit každý odkaz přímo u příslušného formuláře. [Odkaz ze staré patičky](https://www.plachtovehaly-agrodabaki.cz/m/4/17/)
- **Blog.** Jedna zdrojová stránka obsahuje čtyři tematické bloky o místě nákupu, průmyslovém skladování, zemědělském využití a sortimentu Agro Dabaki. Při přenosu zachovat původní blogovou URL přes přesměrování na nový rozcestník. U textů o odolnosti konstrukce, hořlavosti, prodloužení haly a kotvení nejprve přiřadit konkrétní model a jeho technický list. [Původní blog](https://www.plachtovehaly-agrodabaki.cz/m/blog-15/)

## Veřejné ověření a přepnutí adres · 15. 11. 2026

Všechny čtyři informační stránky ze sitemapy WEXBO vrátily HTTP 200. Kontakty na novém webu uvádějí telefon, e-mail a sídlo firmy a obsahují kontaktní formulář. V sekci **Vzhled a obsah → Stránky → Jak nakupovat** (ID 27) byl publikován [nový průvodce](../../../src/plachtovehaly/shoptet/jak-nakupovat.html). Na veřejné stránce byly ověřeny výběr varianty, objednání, hranice 100 000 Kč včetně DPH, oba způsoby platby a odkaz na Kontakty. Oba cíle vracejí HTTP 200 a uvádějí vlastní kanonickou adresu. [Jak nakupovat](https://plachtovehaly.agrodabaki.cz/jak-nakupovat/) · [Kontakty](https://plachtovehaly.agrodabaki.cz/kontakty/)

[Import pro den přepnutí](../../../src/plachtovehaly/migrace/presmerovani-wexbo-stranky.csv) obsahuje dvě plné a dvě krátké adresy WEXBO pro tyto dvě stránky. Obchodní podmínky (ID 39) mají v Shoptetu HTTP 200, ale obsahují ukázkové pokyny. Před přesměrováním potřebují zveřejněné znění provozovatele. Původní Blog má obsah o výběru, skladování a zemědělství. Zamýšlená cesta na Shoptetu `/blog/` vrací HTTP 404. Po zveřejnění průvodce ověřit jeho obsah a kanonickou adresu a přidat zdrojovou cestu do importu. Ochrana údajů z patičky je nad rámec čtyř stránek ze sitemapy.

## Jak vybrat plachtovou halu pro sklad nebo techniku

Redakční podklad k publikované stránce. [Nasazené HTML](../../../src/plachtovehaly/shoptet/jak-vybrat-plachtovou-halu.html)

**Kolik místa potřebujete uvnitř?** Změřte věci, které chcete pod střechu uložit. Připočtěte prostor, kudy projdete k uloženému materiálu nebo projedete se strojem. Při ukládání palet si načrtněte i cestu od vrat k zadní řadě. Rozměry konkrétních provedení porovnejte v nabídce [obloukových](https://plachtovehaly.agrodabaki.cz/obloukove-haly/) a [sedlových hal](https://plachtovehaly.agrodabaki.cz/sedlove-haly/).

**Projede váš stroj vraty?** Změřte nejširší místo stroje včetně vybavení a jeho výšku v poloze, ve které zajíždí dovnitř. Tyto hodnoty porovnejte se šířkou a výškou vjezdu vybraného provedení. Zvažte také směr příjezdu a místo před vraty, zvlášť pokud při vjezdu zatáčíte nebo couváte s přívěsem.

**Co ověřit před výběrem konkrétní haly?** Připravte si rozměry volné plochy, typ povrchu a místo instalace. Pokud potřebujete ověřit kotvení nebo zatížení konstrukce, pošlete nám tyto údaje spolu s odkazem na vybraný model. Vlastnosti se mohou lišit i u podobně vypadajících hal.

**Kde zjistíte dostupnost a dopravu?** V detailu výrobku zvolte rozměr a barvu. Cena a dostupnost patří k vybranému provedení. Podrobnosti o českých dopravcích a platbě najdete v [průvodci nákupem](https://plachtovehaly.agrodabaki.cz/jak-nakupovat/). Pokud vybíráte mezi dvěma halami, přiložte do [dotazu](https://plachtovehaly.agrodabaki.cz/kontakty/) odkazy na obě a napište, co chcete do haly umístit.

**Poznámka pro redakci.** Při návrhu struktury jsme srovnali, jak Halmax popisuje typ vjezdu u konkrétní haly a TENTino člení nabídku podle využití skladu. Pro zákazníky Agro Dabaki jsme z toho odvodili otázky na rozměr vrat, manipulaci uvnitř a výběr varianty. Technické údaje, služby a termíny musejí vycházet z podkladů Agro Dabaki. [Halmax – hala s bočním vjezdem](https://www.halmax.cz/plachtove-haly/plachtova-hala-sirka-10-m-vyska-6-1-m-dp-bocni-vjezd/) · [TENTino – skladové haly](https://www.tentino.cz/skladove-haly-tentino/)

## Průvodce výběrem haly · 16. 11. 2026

Ve Vzhled a obsah → Stránky je publikovaný průvodce pod ID 791. Veřejně ověřeny čtyři části textu, kanonická adresa a čtyři funkční odkazy na obě kategorie hal, Kontakty a Jak nakupovat. Na šířkách 1440 a 390 px se stránka vejde bez vodorovného posuvu a bez výzvy ke komentování. Při přepnutí použít aktuální [import pěti adres](../../../src/plachtovehaly/migrace/presmerovani-wexbo-stranky.csv) včetně původního blogu. [Veřejný průvodce](https://plachtovehaly.agrodabaki.cz/jak-vybrat-plachtovou-halu/)

## Mapa webu

Stránku pro návštěvníky spravujte ve Vzhled a obsah → Stránky → Mapa webu (ID 794). Patičkový odkaz je ve Vzhled a obsah → Menu → Informace pro vás jako typ Stránka. Seznam je ruční. Při přesunu, přejmenování nebo přidání kategorie aktualizujte stránku i [uložené HTML](../../../src/plachtovehaly/shoptet/mapa-webu.html). Dne 16. 11. 2026 ověřeno 28 odkazů do katalogu a pět informačních stránek. [Veřejná mapa webu](https://plachtovehaly.agrodabaki.cz/mapa-webu/)

Mapa má rychlé skoky na devět skupin a seznam konkrétních produktů. Pět skupin hal a přístřešků doplňují fotografie. Výrobek zařaďte jednou podle poslední kategorie v drobečkové navigaci veřejné karty. Při změně sortimentu upravte název, odkaz, zařazení a počet produktů v úvodu. Skupinám ponechte kotvy. Vzhled je součástí HTML stránky 794. Po uložení vyzkoušejte skok na skupinu a proklik na produkt na telefonu i počítači.

17. 11. 2026 – Schválené VOP s osobním odběrem jsou zveřejněné. Import pro den přepnutí obsahuje sedm pravidel, včetně obou původních adres VOP a průvodce místo původního blogu.

## Poradna · publikace 17. 11. 2026

Osm schválených SEO/GEO článků je zveřejněno v [Poradně](https://plachtovehaly.agrodabaki.cz/poradna/). Správa: Vzhled a obsah → Články, rubrika Poradna ID 797; články ID 2, 5, 8, 11, 14, 17, 20 a 23. Přesné veřejné i administrační adresy, SEO titulky, meta popisy a HTML jsou v [manifestu článků](../../../src/plachtovehaly/shoptet/poradna/clanky.json). Jednotlivé HTML soubory jsou ve stejném adresáři. Při další úpravě aktualizujte také tyto podklady.

Rubrika zobrazuje perex o 240 znacích, skrývá datum a nabízí předchozí/následující článek. Patičkový odkaz je v Menu → Informace pro vás jako typ Rubrika → Poradna. Ruční Mapa webu (stránka 794) obsahuje blok Poradna se všemi osmi odkazy; nové články do něj doplňujte i v uloženém HTML mapy.

Veřejná kontrola při 390 a 1440 px ověřuje HTTP 200, H1, SEO title, meta description, canonical, nepřítomnost noindex a šířku stránky. [Výsledky kontroly](../../../src/plachtovehaly/shoptet/poradna/overeni.json) obsahují i stav cílových odkazů a sitemap. Nefunkční zdroj HZS byl nahrazen dostupným článkem HZS se stejným upozorněním na vlhké seno a samovznícení.

XML sitemap vytváří Shoptet automaticky a ručně se neupravuje ([podpora Shoptet](https://podpora.shoptet.cz/faq-marketing/)). Při první kontrole po publikaci stále obsahovala starší generaci z 17. 11. 2026 v 15:21:29 +01:00, bez nových článků. Zbývá potvrdit jejich automatické propsání po obnově. Kontrolujte nejen `/sitemap.xml`, ale také odkazovaný `/sitemaps/sitemap0.xml.gz`. HTML Mapa webu již obsahuje všech osm článků.

## Poradna · druhá série připravena 18. 11. 2026

Na schválených osm témat navázaly kompletní redakční návrhy s SEO title, meta description, navrženou URL, interními odkazy a osmi vlastními vektorovými schématy. [Náhled celé série](../../../src/plachtovehaly/shoptet/poradna/serie-2/index.html) · [Manifest](../../../src/plachtovehaly/shoptet/poradna/serie-2/clanky.json). Příprava byla následně téhož dne zveřejněna; aktuální stav a správa jsou níže.

Návrhy vytvořil [Python skript](../../../src/plachtovehaly/tools/poradna_serie2.py); po publikaci má pojistku proti přepsání produkčního manifestu. Soubory `nahled-*.html` a `index.html` jsou samostatné redakční náhledy s noindex; nenahrávat jejich obal do Shoptetu. Samostatné soubory podle slugů obsahují těla článků. SVG jsou původní schémata bez měřítka, PNG exporty jsou ve stejné složce `obrazky`; nejde o fotografie realizací ani montážní výkresy. Každé schéma má alternativní text, popisek a možnost zvětšení.

Před publikací nahrát obrázky do správce souborů a nahradit lokální cesty, přizpůsobit styly tabulek a obrázků Shoptetu, vytvořit články v rubrice 797 a doplnit jejich ID do manifestu. Potom aktualizovat ruční Mapu webu a ověřit skutečné veřejné stránky při 390/1440 px včetně metadat, canonical a sitemap. Dosavadní kontrola ověřila pouze lokální náhledy: všech 16 kombinací má jeden H1, načtené obrázky a žádné přetečení stránky; všech 24 odlišných veřejných odkazů v tělech článků vrátilo HTTP 200. [Kontrola náhledů](../../../src/plachtovehaly/shoptet/poradna/serie-2/overeni/kontrola.json) · [Odkazy](../../../src/plachtovehaly/shoptet/poradna/serie-2/overeni/odkazy.json).

Produktové tabulky vycházejí z veřejných karet načtených 18. 11. U garáže jsou rozměry vrat výslovně odlišeny od potvrzeného volného průjezdu. U D 1200 se nosnost nepřebírá do článku bez dokumentace konkrétního provedení: karta uvádí 1 500 kg, název modelu není dokladem nosnosti. Článek proto srovnává délku a vlastní hmotnost. Maximální průměr větví TR 110 není přenesen na TRS 110. Historické slevy za osobní odběr nalezené v některých popisech nebyly do článků převzaty.

## Poradna · druhá série nasazena 18. 11. 2026

Ve **Vzhled a obsah → Články → Poradna (797)** zveřejněny články 26, 29, 32, 35, 38, 41, 44 a 47. Celkem je nyní veřejných 16 článků. [Společný manifest](../../../src/plachtovehaly/shoptet/poradna/clanky.json) obsahuje všech 16, samostatný manifest druhé série obsahuje osm nových včetně administračních adres, uloženého HTML a veřejných adres obrázků. Mapa webu (stránka 794) má všech 16 odkazů. Aktualizovány i lokální náhledy a ZIP.

Osm PNG schémat je ve správci souborů pod `/user/documents/upload/<slug>.png`, náhledové obrázky jsou nahrány u článků v `/user/articles/images/`. Editor převádí obrázky v textu na CDN adresy. Ponechte popisky, alternativní texty a odkaz „Zvětšit schéma“. Tabulky a obrázky mají vlastní inline styly pro mobil i počítač.

Šablona automaticky vykresluje náhledový obrázek také nad textem. Aby nebyl dvakrát, je v **Editor → HTML kódy → Zápatí (před koncovým BODY)** odkaz na `/user/documents/upload/article-illustrations.css`. [Zdroj CSS](../../../src/plachtovehaly/shoptet/poradna/article-illustrations.css) skrývá pouze přímý `.article-image` uvnitř `.news-item-detail`, který obsahuje `.dabaki-poradna-clanek`. Náhledy v rubrice ani jiné články nemění. Při návratu odstranit tento jediný link; automatický obrázek se opět zobrazí. Záhlaví bylo již téměř plné, proto je link v zápatí.

Na výslovné přání zadavatele odstraněno sedm odkazů na konkurenční prodejce ze čtyř článků (HAGRO, POLAK, halyskladem, JIRBO). Prázdné bloky Podklady odstraněny; odkazy na vlastní produkty zůstaly. Rešeršní zdroje jsou pouze v interním `researchSources`, do veřejného HTML je nevracet. Stejné pravidlo dodržují lokální náhledy a generátor návrhů.

[Produkční ověření](../../../src/plachtovehaly/shoptet/poradna/serie-2/overeni/produkce.json): všech osm detailů při 390/1440 px vrací 200, má správné H1, SEO title, meta description a canonical, není noindex, nemá přetečení stránky a ukazuje jeden viditelný obrázek s alternativním textem. Ve všech kontrolách nulový počet konkurenčních odkazů. Výpis Poradny má 16 článků, všech osm náhledů se po přiscrollování načte na obou šířkách. Ověřeno otevření zvětšeného obrázku. Automatická XML sitemap i ruční Mapa webu obsahují všech 16 článků; tím je uzavřena také čekající kontrola první série ze 17. 11.

## Poradna · obrázky první série doplněny 18. 11. 2026

Původní články ID 2, 5, 8, 11, 14, 17, 20 a 23 mají vlastní schéma v textu i náhled ve výpisu. Všech 16 článků Poradny tak má ilustraci. Správa: Vzhled a obsah → Články → Poradna; PNG v souborovém správci pod `/user/documents/upload/poradna-<slug>.png`, náhled zvlášť u článku. [Manifest obrázků, popisky a adresy](../../../src/plachtovehaly/shoptet/poradna/serie-1-obrazky/obrazky.json) · [Přehled schémat](../../../src/plachtovehaly/shoptet/poradna/serie-1-obrazky/prehled.png).

SVG zdroje a PNG 1200 × 720 jsou ve stejné složce. [Generátor](../../../src/plachtovehaly/tools/poradna_serie1_obrazky.py) má pojistku proti přepsání publikovaného manifestu. Jde o vysvětlující schémata, nikoli fotografie výrobků či montážní výkresy; model balíků zachovává výslovně označený příklad z článku. Ponechte alternativní text, popisek a odkaz na zvětšení. Obrázek je za prvním odstavcem, tělo má obal `.dabaki-poradna-clanek`; již nasazené CSS potlačuje duplicitní obrázek šablony i u první série, bez další změny HTML kódů.

Při uložení porovnány původní texty a SEO údaje: zachovány. Aktualizován společný manifest i osm HTML souborů. Zálohy před úpravou jsou lokálně v ignorované `.shoptet-cache/poradna1-before-<slug>.json`. Při návratu obnovte původní tělo a odeberte náhled konkrétního článku; sdílené CSS ponechte pro ostatní ilustrované články.

[Produkční kontrola](../../../src/plachtovehaly/shoptet/poradna/serie-1-obrazky/overeni/produkce.json): všech osm detailů při 390/1440 px prošlo (16/16), včetně metadat, canonical, načtení jednoho viditelného obrázku s alternativním textem a absence přetečení. Výpis na obou šířkách načetl všech 16 náhledů. Ověřeno zvětšení a všech 16 adres v ruční i XML mapě webu. Vizuálně zkontrolována sada schémat i produkční mobilní a desktopový detail. TODO první série je uzavřené.
