# Plán a historie projektu Agro Dabaki / Plachtové haly

Poslední souhrnná revize: **17. 11. 2026**. Tento dokument zachycuje další práci i vývoj od prvního zadání. Jeden bod znamená jeden samostatný úkol nebo rozhodnutí; jeho kontroly a výsledek zůstávají u něj. Podrobné návody jsou v [rozcestníku dokumentace](README.md).

## Aktuální stav

- **Nový e-shop:** Shoptet Business, šablona Adamin na Classic, [plachtovehaly.agrodabaki.cz](https://plachtovehaly.agrodabaki.cz/). Původní WEXBO ještě není přepnutý.
- **Katalog:** 312 zveřejněných zdrojových SKU na 141 kartách; 20 dalších položek čeká na ověření firmy. Čísla karet, prodejních kódů a pomocných archivních kódů nejsou zaměnitelná. [Mapa URL](../src/plachtovehaly/migrace/mapa-url.csv)
- **Firemní web:** na [agrodabaki.cz](https://agrodabaki.cz/) je Panorama. Dlaždice hal zatím směřuje do původního WEXBO; druhá do dabaki-eshop.cz. [Správa webu](agrodabaki/NASAZENI.md)
- **Doprava:** rozhoduje cena zboží včetně DPH; GEIS do 100 000 Kč včetně, výše externí spedice. Externí spedice je od 17. 11. pouze s převodem; osobní odběr po potvrzení termínu, hotovost do 270 000 Kč včetně. [Aktuální pravidla](plachtovehaly/objednavky/doprava-a-platby.md)
- **Právní obsah:** VOP a PDF u potvrzení objednávky jsou publikované, zásady soukromí zahrnují Google Analytics. Doručení zákaznického potvrzení s PDF i oznámení obchodu bylo ověřeno 18. 11.; bankovní účet čeká na majitele, technické chování cookies na zkoušku.
- **Fotografie:** nasazeno 15 upravených coverů 4 : 3; odstraněno všech 38 nahrazených originálů a kopií, 34 vazeb variant převedeno. [Záznam fotografií](plachtovehaly/vzhled/nahledove-fotografie.md)

## Otevřené úkoly před přepnutím

### Katalog a výběr výrobku

- [ ] **Dořešit 20 odložených položek:** od firmy získat identitu výrobků, technické parametry a kompatibilitu; každému SKU a zdrojové URL určit cíl. [Podklady](plachtovehaly/katalog/odlozene-polozky.md)
- [ ] **Potvrdit chybějící údaje zveřejněných produktů:** zejména Animal 12 × 12 m, boxy PRMH, kompatibilitu řemenů B 17 a chybějící rozměry dílů; nepřebírat údaje sousední varianty. [Rodiny](plachtovehaly/katalog/rodiny-variant.md)
- [ ] **Obnovit ceny před přepnutím:** porovnat poslední WEXBO s cílovými SKU, včetně původních cen a slev; hlavní cena je s DPH.
- [ ] **Obnovit sklad a dostupnosti před přepnutím:** zachovat zákaz nákupu nedostupného zboží a vědomé výjimky pro termín / objednání / dotaz. [Správa dostupností](plachtovehaly/ADMINISTRACE.md#nedostupné-zboží-a-nákup-do-minusu)
- [ ] **Doplnit příznaky odložených produktů:** při jejich importu posoudit 14 Novinek podle shody všech variant a Akci podle skutečné slevy všech SKU. [Pravidlo příznaků](plachtovehaly/ADMINISTRACE.md#příznaky-novinka-a-akce)
- [ ] **Doplnit slevu odloženého SKU 1000011:** při migraci ověřit aktuální prodejní i původní cenu. [Správa slev](plachtovehaly/ADMINISTRACE.md#slevy-a-přeškrtnuté-ceny)
- [ ] **Porovnat konfigurátory s filtry a tabulkami:** ověřit dostupné kombinace a předvolené pevné rozměry; kontrola všech 42 tabulek nenahrazuje kontrolu každé nákupní kombinace.
- [ ] **Doložit světlé výšky vjezdu garáží:** až potom zavést filtr Výška vjezdu. [Filtry garáží](plachtovehaly/katalog/filtry-garaze-oblouk.md)
- [ ] **Rozhodnout o historických slevách při osobním odběru:** původní částky u hal a lžic nejsou v nových popisech slibovány; případné obnovení potvrdit s firmou. [Historické podklady](plachtovehaly/historie/PLAN-2026-11-16.md)

### Obsah a vzhled

- [ ] **Posoudit přístup k rozcestníku hal z mobilní navigace:** fotografická Mapa webu je hotová; rozhodnout, zda zákazník potřebuje také společný vstup Plachtové haly v menu. [Návrh zařazení](plachtovehaly/katalog/kategorie-garazi.md)

### Objednávky, formuláře a soukromí

- [ ] **Otestovat propojení s iDokladem zadavatele:** dohoda 18. 11.; zvolit integrační službu, ověřit tarif a přístup, oddělit testovací doklady a ověřit objednávku → fakturu → doručení bez duplicit. Přístup k iDokladu ani integrační službě zatím není v lokálním souboru přístupů. [Předání](plachtovehaly/PREDANI.md#idoklad-test-a-predani).
- [ ] **Přepnout fakturaci na iDoklad majitele při předání:** nastavit jeho firmu, účet, číselné řady a variabilní symboly, ověřit doklad a doručení, odpojit přístup k testovacímu iDokladu zadavatele.
- [ ] **Zopakovat hraniční košíky po změnách plateb:** 100 000 Kč včetně DPH musí nabídnout GEIS, vyšší cenu externí spedici; ověřit i osobní odběr a limit hotovosti. [Doprava](plachtovehaly/objednavky/doprava-a-platby.md)
- [ ] **Dokončit kontrolu platby převodem:** test 18. 11. ověřil objednávku, doručení zákaznického potvrzení, sedmidenní splatnost a přílohu VOP. Doplnit firmou potvrzený bankovní účet (CZK má prázdné pole), zopakovat platební instrukce a ověřit návaznost faktury. [Výsledek testu](plachtovehaly/objednavky/doprava-a-platby.md#test-objednavky-18-11-2026)
- [ ] **Dokončit testovací objednávku dobírkou:** u dopravy, která ji povoluje, ověřit celý průchod, skutečné potvrzení a návaznost dokladů.
- [ ] **Ověřit skutečné doručení produktového dotazu:** systémová akce 7 směřuje na firemní schránku; doložit příjem a způsob evidence. [Formuláře](plachtovehaly/objednavky/formulare-dotazy.md)
- [ ] **Ověřit skutečné doručení kontaktního formuláře:** systémová akce 5 má nastaveného příjemce; doložit příjem a způsob evidence.
- [ ] **Ověřit Google Analytics při změně souhlasu:** porovnat odmítnutí, přijetí i odvolání a skutečné nastavení doby uchování. [Revize soukromí](plachtovehaly/pravni/ochrana-udaju-revize.md)
- [ ] **Prověřit sociální prvky Facebook/X:** předchozí kontrola odhalila načítání i bez volitelného souhlasu; upravit technické chování a podle výsledku text zásad.
- [ ] **Potvrdit dodavatele a uchování technických údajů:** pošta, logy, zálohy a případné předávání mimo EHP; promítnout skutečný stav do zásad.
- [ ] **Provést první čtvrtletní kontrolu dotazů a účtů:** podle schválených 12/24 měsíců, s odděleným posouzením dokladů a sporů; ověřit dostupnost poslední aktivity. [Postup](plachtovehaly/PREDANI.md#čtvrtletní-kontrola-dotazů-a-účtů)

### Přepnutí a předání

- [ ] **Určit cíl původní kategorie Nože:** zachovat smysluplnou cestu k rozdělenému sortimentu. [Migrace](plachtovehaly/MIGRACE.md)
- [ ] **Určit cíl původní kategorie Univerzální náhradní díly:** zohlednit skutečné cílové kategorie a kompatibilitu výrobků.
- [ ] **Určit cíl původního Výprodeje:** potvrdit aktuální nabídku, včetně odložených položek.
- [ ] **Uzavřít mapu původních URL:** produkty, kategorie a informační stránky včetně dlouhých i krátkých cest; odlišit připravený import WEXBO od interních pravidel Shoptetu odstraněných na přání zadavatele 19. 11. 2026.
- [ ] **Přepnout původní doménu:** po uzavření předchozích podmínek nasadit přesměrování a ověřit varianty www/bez www, přímé 301 → 200 a kanonické adresy.
- [ ] **Zkontrolovat obchod po přepnutí:** mobilní nákup a chyby 404, opravit nalezené návaznosti podle migrační mapy.
- [ ] **Přepnout dlaždici hal na firemním webu:** až při spuštění nového obchodu změnit cíl Panoramy a zkontrolovat oba vstupy. [Nasazení webu](agrodabaki/NASAZENI.md)
- [ ] **Uklidit zbylá demo data:** nejprve identifikovat objednávky, značky, skryté produkty a bannery; odlišit skutečné objednávky a projektové testy a ověřit vazby před odstraněním.
- [ ] **Potvrdit fakturaci a konec zkoušky Adaminu:** instalace doložena 15. 11.; výpočet 30 dní není potvrzením posledního bezplatného dne poskytovatelem.
- [ ] **Předat správu účtů a domén majiteli:** potvrdit vlastníka, fakturaci, přístup k DNS a bezpečné předání přístupů mimo dokumentaci.
- [ ] **Předvést běžnou správu obchodu:** katalog, varianty, sklad, obsah a vyřízení objednávky; zapsat výsledek do [předání správci](plachtovehaly/PREDANI.md).

### Průběžná údržba hodnocení

- [ ] **Jednou měsíčně zkontrolovat hodnocení Firmy.cz:** ověřit skóre a počet recenzí, aktualizovat ruční kartu i datum kontroly; první další kontrola do 18. 12. 2026, případně dříve při nové recenzi. [Postup](plachtovehaly/ADMINISTRACE.md#hodnocení-firmy-na-homepage)
- [ ] **Při další kontrole posoudit obměnu citace:** případnou novou skutečnou recenzi převzít přesně, s autorem a datem; zachovat odkaz na všechny recenze.

## Historie vývoje

Historie uvádí stav v době provedení. Pozdější rozhodnutí může dřívější řešení nahradit; dnešní závazné úkoly jsou výše. Data jsou v časovém pásmu Europe/Prague a byla rekonstruována 17. 11. 2026 z chatů a datovaných protokolů. Dřívější dílčí úspěch neznamená dokončené předání celého obchodu.

### 13. 11. 2026 — Zadání a výběr šablony

- **Rozsah zakázky — dohodnutý základ:** migrace WEXBO na Shoptet včetně produktů, fotografií, popisů, cen, kategorií, informačních stránek, dopravy, plateb, e-mailů, přesměrování, testu nákupu, domény a předání administrace. Původní odhad 300–400 produktů měl být zpřesněn exportem. Zdroj: chat „Naplánovat migraci na Shoptet“.
- **Vylepšení katalogu — součást zadání:** upravit strukturu kategorií a navigaci, sjednotit parametry a jednotky a doladit filtry podle sortimentu.
- **Vylepšení vzhledu — součást zadání:** výrazněji upravit homepage v možnostech vybrané šablony, zpracovat stávající grafiku a ověřit mobilní i desktopové zobrazení.
- **Původní nacenění — historická nabídka:** práce přibližně 30 000 Kč, licence Apollo zvlášť 4 990 Kč, orientační součet 34 990 Kč; návrh poloviny práce předem. Citovaná nabídka uváděla Shoptet 1 490 Kč bez DPH měsíčně a odhad domény 300 Kč ročně. Nejde o potvrzení úhrady ani dnešní ceník.
- **Galerie 11 šablon — připravena:** Apollo, Merkur, Jupiter, Adamin, Jaspis, Apeti Clear, Apeti Standard, Tmavý vzhled, Celestin, Orion a Sniper One. Hlavní HTML sdružuje iframe ukázky s názvem, cenou a proklikem; použity podklady skutečného e-shopu. [Pracovní strom ukázek](../src/plachtovehaly/ukazky/)
- **Tři stránky každého dema — vytvořeny:** homepage, detail a košík; požadována funkčnost na počítači i telefonu. Skupiny group-a/b/c jsou organizační členění souborů, nikoli pořadí doporučených šablon.
- **Naplnění demo košíků — doplněno:** dvě skutečné položky za celkem 214 800 Kč umožnily zkoušet množství a odebrání zboží.
- **Věrnost košíků a pokračování objednávky — opraveno po připomínce:** zadavatel odmítl domyšlené košíky bez dalšího kroku. Následovala kontrola naplněných košíků skutečných demo obchodů a doplnění průchodu objednávkou v lokálních ukázkách; jde o simulaci pro výběr vzhledu.
- **Hlavičky a patičky ukázek — doplněny:** nahradit obsah demo dodavatelů logem, kontakty a sortimentem Dabaki při zachování struktury jednotlivých šablon.
- **Titan — přidán jako 12. ukázka:** na základě rozšíření výběru o vhodnou další šablonu; zpracována stejným postupem jako ostatní ukázky.
- **Patička Titanu — opravena:** řešeno rozpadlé rozložení a načítání starého sdíleného JavaScriptu; použito verzování souborů pro aktualizaci prohlížeče.
- **Publikovaná galerie — potvrzeno 12 šablon:** po rozdílu mezi lokálním indexem a FTP verzí zadavatel potvrdil správné zobrazení na ruzickahonza.cz/plachtove-haly. Historická pracovní adresa ukázek, nikoli produkční e-shop.

### 15. 11. 2026 — Shoptet, katalog a první nasazení

#### Založení obchodu a pravidla migrace

- **Výběr Adaminu — schválen:** vedení vybralo Adamin podle lokální ukázky. Další implementace se řídí touto šablonou. [Archiv rozhodnutí](plachtovehaly/historie/PLAN-2026-11-16.md)
- **První verze repozitáře — odeslána:** commit f52b18e v main obsahoval 200 souborů včetně ukázek a ZIPu; lokální a vzdálená větev souhlasily. README, AGENTS a plán vytvořily základ průběžné evidence.
- **Tarif Business — potvrzen:** pro rozsah katalogu zvolen Business místo nedostačujícího Basic; Shoptet potvrdil ostrý provoz a převod testovacích dat projektu 828678.
- **Objednávka Business — připravena se slevou:** tehdejší objednávka uváděla 361 Kč včetně DPH měsíčně pro první dva měsíce a následně 1 490 Kč bez DPH měsíčně. Historický údaj z objednávky, nikoli ověření zaplacení nebo dnešní ceny.
- **Licence Adaminu — nainstalována:** potvrzení objednávky uvádí odkup za 3 990 Kč bez DPH. Částka za práci zůstává oddělená; fakturace a přesný konec zkoušky jsou předávací úkol.
- **Subdoména e-shopu — připojena:** ACTIVE 24, CNAME plachtovehaly.agrodabaki.cz → www.myshoptet.com, TTL 600 s; ověřen autoritativní DNS, platné HTTPS a HTTP 200. Původní WEXBO zatím pokračuje.
- **Základní vzhled Adaminu — nasazen:** původní logo Dabaki, zelená navigace #347821 a konverzní barva #297623; veřejně ověřeno načtení loga a navigace. Paletu nahradila nová identita 16. 11.
- **Pravidla modelování katalogu — schválena:** názvy a kategorie podle zákazníka; skutečná provedení sdružovat do variant, odlišné modely propojit jako alternativy. Každé původní ID/URL musí mít dohledatelný cíl a zachované obchodní údaje. [Rodiny výrobků](plachtovehaly/katalog/rodiny-variant.md)
- **Inventura veřejného WEXBO — hotová:** 396 URL tvořilo 332 produktů, 59 kategorií, čtyři informační stránky a úvod. Vytvořena mapa zdrojů a budoucích cílů. [Mapa URL](../src/plachtovehaly/migrace/mapa-url.csv)
- **Inventura administrace WEXBO — hotová:** všech 15 stran obsahovalo 361 záznamů, z toho 332 aktivních a 29 neaktivních; aktivní ID odpovídala veřejnému katalogu.
- **Návrh obloukových hal — připraven:** 26 zdrojových adres přiřazeno ke 13 navrženým kartám; pro pilot zvolen model 202412 R a náhradní oblouk. [Návrh](plachtovehaly/katalog/obloukove-haly.md)

#### Importy a zachování obchodních údajů

- **Pilotní import — ověřen:** dvě skryté karty, bílá/zelená hala 1000335/1000336 za 41 900 Kč a oblouk 1000059 za 3 200 Kč. Opakovaný import aktualizoval stejné karty; opraveno oddělení skladové dostupnosti a termínu 8. 1. 2027 při vyprodání zelené varianty.
- **Pilotní nákup — ověřen:** bílá hala a oblouk vloženy do košíku za 45 100 Kč; po testu karty znovu skryty. Provizorní sklad byl následně nahrazen ověřenými daty WEXBO. [Archiv pilotu](plachtovehaly/historie/PLAN-2026-11-16.md)
- **Import sedlových hal — proveden:** přidáno 66 karet; zpětný export kontroloval SKU, cenu, zařazení, varianty, fotografie a alternativy. [Sedlové haly](plachtovehaly/katalog/sedlove-haly.md)
- **Import obloukových hal — proveden:** přidáno osm karet mimo pilot se zachováním zdrojových prodejních kódů.
- **Import přístřešků, garáží a příslušenství — proveden:** přidáno 23 karet; nejasné vztahy a technické údaje ponechány k ověření.
- **Import strojů, nářadí a dílů — proveden:** přidáno 137 karet se 153 prodejními kódy; výsledek porovnán zpětným exportem. [Stroje a díly](plachtovehaly/katalog/stroje.md)
- **První zveřejnění katalogu — ověřeno:** čtyři importy a pilot daly 236 karet s 305 zdrojovými SKU; import č. 236 aktivoval všechny karty, veřejně ověřen výpis s cenami. Zbývalo 27 odložených položek.
- **Skladová množství — přenesena:** import č. 251 doplnil 171 hodnot na 140 kartách; zpětný export potvrdil množství a shodu koncových cen všech 305 zdrojových SKU.
- **Dva přední kryty AGF — prověřeny, neuzavřeny:** SKU 1000106 a 1000109 měly shodnou cenu 499 Kč a 1 ks, ale bez rozlišujícího modelu či přílohy; identita zůstala k potvrzení firmou.
- **Řada SP — sloučena:** devět délek ve dvou barvách na kartě 83, všech 18 SKU zachováno; zelená 12,2 m prošla košíkem jako 1000262 za 61 900 Kč.
- **Dalších 28 modelových rodin — sloučeno:** 112 karet převedeno na 28 rodin; zachováno 152 SKU a 513 položek galerií. Zpětný export ověřil kombinace, ceny, sklad a dostupnost. Katalog měl po tomto kroku 144 karet a stále 305 SKU. [Kontrola rodin](plachtovehaly/katalog/rodiny-variant.md)
- **Nahrazené samostatné karty — zneaktivněny:** 84 karet a 115 pomocných kódů skryto s nulovým skladem, staré detaily odkazují na společný produkt; nejde o další prodejní sortiment.
- **Animal — sloučen:** čtyři karty nahrazeny jednou kartou 659 s deseti rozměrovými kombinacemi; zachována SKU, ceny, dostupnosti a 24 fotografií s vazbami. Katalog se ustálil na 141 kartách a 305 SKU.
- **Popisy variantních produktů — přepracovány:** importem upraveno 47 popisů, společné údaje jednou a rozdíly v tabulkách. Všech 42 variantních karet mělo tabulku bez starých rozbalovacích bloků; 14 YouTube odkazů dostalo konkrétní text. Obchodní údaje zůstaly shodné.

#### Konfigurátory a první filtry

- **První rozměrové filtry — ověřeny:** doplněny parametry 35 karet hal; na výpisu obloukových hal vyzkoušena šířka 6,1 m a odpovídající výsledek. [Archiv zkoušky](plachtovehaly/historie/PLAN-2026-11-16.md)
- **Samostatné roletky variant — nasazeny:** Adamin dál spojoval volby i po nastavení rozdělených variant, proto doplněn HTML blok v zápatí navázaný na původní Shoptet variantu. DP a SP ověřeny přes výběr až do košíku. [Zdroj konfigurátoru](../src/plachtovehaly/shoptet/vyber-haly.html)
- **Kontrola všech tehdejších konfigurátorů — provedena:** ze 144 karet mělo 17 dva parametry, 26 jeden a 101 žádný; všech 17 dvojic veřejně vyzkoušeno na konkrétní SKU, včetně garáže pro karavan.
- **Pevné rozměry v konfigurátoru — doplněny:** na 20 kartách předvolena šířka, hloubka nebo půdorys; ověřeno 135 SKU a nezměněné obchodní údaje, fotografie a sady parametrů.
- **Názvy barev — sjednoceny:** u 117 variant na 13 kartách použity Bílá / Vojenská zelená; gramáž ponechána v technickém popisu. U zipové haly ověřeny všechny kombinace dvou barev a čtyř délek.
- **Pořadí voleb — sjednoceno:** rozměry před barvou; zipová hala ověřena s oběma barvami délky 12,8 m a správným SKU v košíku.
- **Půdorys garáží — rozdělen:** šířka a délka samostatně na třech kartách, u karavanu navíc výška; ověřeno všech sedm SKU a nákup reprezentativní varianty každé garáže.
- **Parametry v obou košících — sladěny:** rozbalovací i hlavní košík používají stejné názvy a pořadí jako detail; ověřeny zelená hala a šedý karavan včetně množství při 390/1440 px.

#### URL a migrace návštěvnosti

- **Přesměrování sloučených karet — nasazena:** nejprve 92 starších URL Shoptetu na 29 rodin, po Animal celkem 95; všechny tehdejší cíle ověřeny přímým 301 → 200.
- **URL zipové haly — opravena:** společný produkt dostal adresu podle modelu bez jediné varianty; aktualizovány původní aliasy, odkazy kategorie a osm zdrojových cest WEXBO.
- **Produktové URL — zkráceny:** na 47 kartách odstraněny údaje jediné varianty, zachováno rozlišení modelů a dílů. Všech 141 cílů ověřeno včetně canonical a ID; celkem 143 starších adres Shoptetu vracelo přímé 301. [Pravidla](../src/plachtovehaly/migrace/presmerovani-sloucenych-karet.csv)
- **Produktová přesměrování WEXBO — připravena:** 305 unikátních zdrojových cest na 141 ověřených detailů, nově doplněno 129 cílů. Soubor čeká na přepnutí původní domény. [Import](../src/plachtovehaly/migrace/presmerovani-wexbo-produkty.csv)
- **Kategorie WEXBO — zmapovány:** 59 zdrojových kategorií, připraveno 56 přesměrování na 23 ověřených cílů. Nože, Univerzální náhradní díly a Výprodej zůstaly bez konečného rozhodnutí. [Import](../src/plachtovehaly/migrace/presmerovani-wexbo-kategorie.csv)

#### Navigace, obsah a objednávka

- **Název obchodu — opraven:** „Můj e-shop“ nahrazen „Plachtové haly Agro Dabaki“, odstraněn demo podtitul; ověřeno v patičce a na Kontaktech.
- **Firemní kontakty — nastaveny:** telefon +420 774 960 063, agro@dabaki.cz, sídlo a kontaktní formulář; ověřen také klikací telefon v hlavičce.
- **Nastavení cookies — prověřeno:** odkaz v patičce otevřel změnu preferencí; zachovat jej při dalších úpravách.
- **Podpisy dodavatelů — posouzeny:** pro výslednou patičku zachováno označení Shoptetu a designéra Shoptak; pozdější odstranění duplicitního textu není odstraněním povinných označení.
- **Demo doporučení — vypnuta:** skryto 12 ukázkových karet, následně vypnut Top 10, který dál zobrazoval hodinky a mikinu; veřejná kontrola potvrdila jejich zmizení.
- **Produktové obrázky podkategorií — nasazeny:** nahrazeno 17 zástupných fotoaparátů skutečnými snímky; všechny motivy a cíle ověřeny, včetně mobilního rozbalení menu.
- **Větší náhledy menu — navrženy:** ověřeno zvětšení z 60 × 43 na 112 × 80 px při 1440 px a 88 × 63 při 1024 px; vlastní nasazení následovalo 16. 11. [Podklady](plachtovehaly/vzhled/menu-nahledy.md)
- **Úklid demo navigace — dokončen:** odstraněny tři větve s deseti podkategoriemi, z menu vypnuto pět prázdných značek a deaktivovány dva demo bannery. Ověřeno 17 skutečných podkategorií a dostupnost informačních stránek na telefonu i počítači.
- **Pořadí menu — zadáno:** nejprve Obloukové haly, Sedlové haly a díly; techniku řadit Zemědělská → Lesní → Náhradní díly. Nasazení a další změny pořadí jsou v historii 16.–17. 11.
- **Jak nakupovat — publikováno:** vlastní zákaznický text na základě revidovaných informací; připraveny dlouhé i krátké cesty informačních stránek pro budoucí přesměrování.
- **Průvodce výběrem — připraven koncept:** vlastní struktura schválena zadavatelem; zveřejnění následovalo 16. 11. [Informační stránky](plachtovehaly/vzhled/informacni-stranky.md)
- **Dopravní hranice — nasazena a ověřena:** GEIS do 100 000 Kč včetně DPH, externí spedice místo FOFR od 100 000,01 Kč; tehdy obě zdarma s převodem i dobírkou. Košík 100 000 Kč nabídl GEIS, po přidání gufera za 69 Kč externí spedici. Osm demo doprav skryto. Platby byly změněny 17. 11. [Doprava](plachtovehaly/objednavky/doprava-a-platby.md)
- **První lišta výhod — nasazena:** čtyři texty a zelené ikony podle skutečného sortimentu a služeb místo demo slibů; homepage a detail ověřeny při 1280/390 px. Nahrazena novou verzí 17. 11.
- **Loga online plateb — skryta:** nepoužívaný blok v postranním panelu kategorií odstraněn ze zobrazení CSS; ověřeno na telefonu i počítači.

#### Logo e-shopu

- **Pět vektorových směrů loga — připraveno:** návrhy s oběma názvy, písmo v křivkách a srovnávací náhled; pouze podklad pro výběr. [Návrhy](../src/plachtovehaly/navrhy-loga/)
- **Deset žlutočerných variant — připraveno:** zadavatel upřesnil střechu, název a návaznost na původní podpis Dabaki; pro první nasazení vybrána 01.
- **Nápis Dabaki — vyhlazen:** rastrový obrys ve všech deseti variantách nahrazen vektorovými křivkami Magneto Bold; ověřen detail, náhled i obsah ZIPu.
- **Logo 01 — nasazeno:** veřejně ověřeno v hlavičce při 1440/390 px; slabší kontrast žluté ponechán k doladění. Toto řešení nahradila dodaná identita 16. 11.
- **Favicon 01 — opraven:** po ořezu posunuté střechy znovu vykreslen celý symbol; veřejné PNG 16/32/60 px zkontrolovány po nahrání.

#### Firemní web agrodabaki.cz

- **Hosting — zvolen:** pro statickou firemní prezentaci doporučen a dále použit ACTIVE 24; web je oddělený od Shoptetu na subdoméně. Zdroj: archivovaný chat „Doporuč server pro agrodabaki.cz“.
- **Tři návrhy prezentace — vytvořeny:** Ze dvora, Konstrukce a Rozcestník; ověřeny obrázky, odkazy a rozložení při 320/390/1440 px. [Návrhy](../src/agrodabaki/navrhy/)
- **Rovnocenné vstupy do oborů — upraveny:** Rozcestník dostal stejně velké fotografie hal a zemědělské techniky s jednotným „Vstoupit do e-shopu“.
- **Mapa provozovny — doplněna:** interaktivní mapa Jankova a plánování trasy; ověřeno načtení a mobilní rozložení.
- **Rozcestník — nasazen přes SFTP:** veřejné soubory porovnány s lokálními podklady, HTTP/HTTPS ověřeno. Produkční adresář a návrat jsou v [návodu nasazení](agrodabaki/NASAZENI.md).
- **Telefon firemního webu — opraven:** starší údaj z Webnode nahrazen provozovatelem potvrzeným +420 774 960 063; ověřen text a tel odkaz na živém webu.
- **Firemní žlutá — sjednocena:** #F9F052 podle dodaného loga, ověřeno vykreslení při 390/1440 px.
- **Metadata firemního webu — doplněna:** favicon, titulek, popis, canonical, náhled sdílení a LocalBusiness včetně ověřeného telefonu.
- **HTTPS a www — sjednoceny:** .htaccess vede HTTP i www jediným 301 na https://agrodabaki.cz/, zachovává cestu a parametry; cílová stránka vrací 200.
- **Panorama a Polní katalog — připraveny:** dvě další funkční varianty pro porovnání se stávajícím Rozcestníkem; ověřeny obě šířky a cíle vstupů.
- **Panorama — vybrána a nasazena:** finální firemní prezentace; na pokyn zadavatele vede dlaždice hal do původního WEXBO a technika do dabaki-eshop.cz. Oba cíle ověřeny na mobilu i počítači, ostatní návrhy zachovány.

### 16. 11. 2026 — Dokončení katalogu, zákaznický obsah a identita

#### Katalog, konfigurátory a fotografie

- **Plachtové garáže — potvrzen název:** posouzeny tři karty garáží, dvě obloukové a jedenáct sedlových; případný společný rodič Plachtové haly zůstal návrhem. [Rozbor](plachtovehaly/katalog/kategorie-garazi.md)
- **Filtry sedlových hal — rozšířeny:** 66 vazeb délek pro 11 karet; ověřeno všech 23 délek a osm šířek. Kombinace 10 m × 12,2 m ponechala řady 33 a PP na mobilu i počítači. [Protokol](plachtovehaly/katalog/filtry-sedlove.md)
- **Filtry garáží a obloukových hal — nasazeny:** Šířka před Délkou, ověřeno všech 17 hodnot, společné kombinace i reset při 390/1440 px. [Protokol](plachtovehaly/katalog/filtry-garaze-oblouk.md)
- **Filtry napříč katalogem — rozšířeny:** prověřeno 141 karet a 28 kategorií; rozměrové filtry mělo 22 z 24 kategorií s produkty. U vybraných dílů zůstaly chybějící doložené rozměry; pozdější změny stromu změnily i počty kategorií. [Pokrytí](plachtovehaly/katalog/filtry-ostatni-kategorie.md)
- **Konfigurátor řady 26 — ověřen:** tehdejších pět variant karty 164 odpovídalo tabulce a SKU; deset kontrol od detailu do košíku při 390/1440 px. Další bílé varianty byly importovány později téhož dne. [Protokol](plachtovehaly/katalog/konfigurace-rada-26.md)
- **Hlavní fotografie garáží — zkontrolovány:** 25 položek tří galerií; u 122008R nastavena široká fotografie otevřeného vjezdu, ostatní dvě vyhověly. Ověřeny výpis, detail a barevné varianty na obou šířkách.
- **Fotografie obloukových hal a Animal — přeuspořádány:** změněn hlavní snímek tří karet, zachováno všech 116 položek galerií; ověřeny výpisy, detaily a přepínání variant při 390/1440 px.
- **Fotografie zastřešení kontejnerů — zkontrolovány:** 17 položek šesti galerií, nové hlavní snímky C20/C33S/C26; ověřeno šest detailů a 11 variant. Nejasné zdroje C4040 a navijákových vrat evidovány k ověření. [Záznam fotografií](plachtovehaly/vzhled/nahledove-fotografie.md)
- **Odložených 27 SKU — znovu posouzeno:** sedm bílých variant doloženo pro import, 20 položek ponecháno k potvrzení firmy; zkontrolováno také produktové pokrytí tří dosud neurčených zdrojových kategorií. [Odložené položky](plachtovehaly/katalog/odlozene-polozky.md)
- **Import sedmi variant — připraven a validován:** XML podle schématu Shoptet v10, porovnáno 24 stávajících kombinací tří karet a zdrojové ceny i dostupnosti. [Podklady](plachtovehaly/katalog/sedm-variant-import.md)
- **Sedm bílých variant — importováno:** do tří existujících karet; řady 26 a 40 zůstávají samostatné. Úplný export potvrdil 24 původních variant a pořadí fotografií, všech sedm nových SKU prošlo výběrem a košíkem na telefonu i počítači. Celkem 312 zdrojových SKU na 141 kartách, 20 odloženo.
- **Přesměrování nových variant — připravena:** sedm zdrojových cest doplněno do podkladů pro budoucí přepnutí WEXBO; nejde o již přepnutou původní doménu.

#### Homepage, menu a nákupní rozhraní

- **Homepage podle Adaminu — nasazena:** přepínání sedlové/obloukové haly, vedle vstupy do garáží a přístřešků, šest kategorií, čtyři výrobky a průvodce. Ověřeno při 320/390/1440 px bez přetečení, odkazy i přepínání banneru. Správa: Titulní strana a HTML záhlaví.
- **Větší náhledy podkategorií — nasazeny:** v HTML záhlaví zvětšeno 17 fotografií na 112 × 80 px při 1440 px; při 1024 px 88 × 63 px. Ověřeny cíle a mobilní textová navigace. [Návod](plachtovehaly/vzhled/menu-nahledy.md)
- **První pořadí kategorií — nasazeno:** ověřeny obě trojice hal a techniky podle zadání z 15. 11., všechny cíle měly HTTP 200 a odpovídající nadpis.
- **Plachtový sortiment na začátku menu — nasazen:** Sedlové, Obloukové, Zastřešení kontejnerů, Přístřešky pro zvířata a Garáže před technikou; všech deset tehdejších kořenových cílů ověřeno při 390/1440 px. Pořadí bylo dále upraveno 17. 11.
- **Náhradní oblouky — zanořeny:** kategorie 710 přesunuta pod Obloukové haly 707 se zachováním URL; veřejně ověřeny podmenu, drobečky a oba náhradní oblouky 6/9 m.
- **Obrázek Náhradních oblouků — nahrán:** katalogový nákres 1000059 se zobrazil v kategorii i desktopovém menu; zkontrolováno při 390/1440 px. Nákres nahradila SVG ikona 17. 11.
- **Příslušenství kontejnerů — zanořeno:** kategorie 788 pod 782, kratší název Příslušenství a zachovaná URL; ověřena tři čela, rampa PD08B a návaznost Mapy webu na obou šířkách.
- **Postranní košík v kategoriích — sbalen:** HTML zápatí Adaminu upraveno; se dvěma produkty ověřen přechod mezi kategoriemi, ruční otevření a vstup do hlavního košíku. [Zdroj](../src/plachtovehaly/shoptet/kosik-v-kategorii.html)
- **Sbalení košíku na dalších stránkách — rozšířeno:** detail, homepage a Jak nakupovat; při 390/1440 px ověřen výchozí stav, přístup do hlavního košíku a pokračování k dopravě.
- **Step s levým menu — pouze vyzkoušen:** uložen návrh se sloupcem 11 kategorií. Adamin zůstal veřejně aktivní; test Step odhalil konflikt doplňku a mobilní přesah 468 px v okně 372 px. Nejde o schválenou změnu šablony.
- **Mapa webu — publikována:** stránka 794, pátý odkaz v patičkovém menu Informace pro vás; všech 33 cílů přímo HTTP 200 a proklik do Sedlových hal ověřen při 390/1440 px. [Zdroj](../src/plachtovehaly/shoptet/mapa-webu.html)
- **Mapa v horní informační liště — skryta:** první úprava ponechala čtyři původní odkazy bez přetečení při 868/1024/1440 px; mapa zůstala v patičce.
- **Horní informační lišta — následně skryta celá:** na žádost zadavatele od 768 px; telefon v hlavičce a mobilní navigace zachovány, patičkové odkazy ověřeny.
- **Kontakty a VOP v hlavním menu — odebrány:** ponechány v patičce, hlavní navigace slouží kategoriím; oba informační cíle HTTP 200 při veřejné kontrole.

#### Informační stránky, e-maily a právní obsah

- **Diskuze informačních stránek — vypnuty:** globální nastavení Stránky → Nastavení diskuzí; veřejně ověřen obsah bez komentářových výzev a HTTP 200.
- **Průvodce výběrem haly — publikován:** stránka 791 propojena z Jak nakupovat; čtyři cíle, canonical a rozložení ověřeny při 390/1440 px. Zdrojový blog doplněn do budoucího přesměrování. [Obsah](plachtovehaly/vzhled/informacni-stranky.md)
- **Potvrzení objednávky — zkontrolováno:** zákaznická akce 2 a šablona order/1, značka a kontakty ve vzhledu Moderna, platební údaje podmíněné převodem. Tato kontrola náhledu ještě neprokazuje skutečné doručení.
- **Příjemci formulářů — ověřeni:** systémové akce Dotaz k produktu/7 a Kontaktní formulář/5 měly jediného příjemce agro@dabaki.cz; reálné doručení a evidence ponechány k testu. [Návod](plachtovehaly/objednavky/formulare-dotazy.md)
- **VOP — připraveno revidované znění:** navázáno na WEXBO, doplněn formulář odstoupení a šest obchodních otázek; zveřejnění čekalo na potvrzení celého textu. [Revize](plachtovehaly/pravni/obchodni-podminky-revize.md)
- **Vratky — potvrzeno místo příjmu:** běžné zásilky do sídla v Jankově; podmínku zadavatel zachoval i při konečném schválení znění.
- **Svoz hal — potvrzeno pravidlo:** zvláštní svoz hal po ČR zajišťuje prodávající zdarma podle schválených podmínek.
- **Dodání a vykládka — potvrzeno pravidlo:** skladové zboží do deseti pracovních dnů a složení u vozidla; promítnuto do konečného textu VOP.
- **Vznik smlouvy — potvrzeno pravidlo:** první potvrzovací e-mail je akceptací objednávky; upravena formulace zákaznické zprávy.
- **Splatnost převodu — potvrzena:** sedm kalendářních dnů; podmíněný blok billingInfo upraven v potvrzení objednávky.
- **Storno katalogové objednávky — schváleno:** bezplatně do předání dopravci i pro nákup na firmu; běžná katalogová varianta odlišena od skutečné zakázky. Osobní odběr byl doplněn 17. 11.
- **VOP — zveřejněny:** stránka 39 s účinností 16. 11. 2026 po konečném souhlasu; při 390/1440 px porovnány nadpisy, odstavce a tabulka s připraveným HTML.
- **PDF VOP — přiloženo k potvrzení:** datovaná příloha u order/1 a uložené znění akceptace ověřeny opětovným načtením; příjem skutečného e-mailu zůstává samostatný test.
- **Zpracování osobních údajů — zmapováno:** provozovatel potvrdil jediného správce agendy, neposílání newsletteru a dosavadní nemazání dotazů/účtů; připraveny pracovní zásady a technické otázky. [Revize](plachtovehaly/pravni/ochrana-udaju-revize.md)
- **Sociální doplňky — zjištěna otevřená otázka:** na detailu potvrzeny prvky Facebook/X, včetně načítání bez volitelného souhlasu; technické chování se musí dořešit podle skutečného provozu.
- **Retenční postup — schválen:** čtvrtletní kontrola dotazů starších 12 měsíců od uzavření a účtů bez aktivity 24 měsíců s nabídkou zachování; doklady, reklamace a spory posuzovat odděleně. První provedení zůstalo otevřené. [Postup](plachtovehaly/PREDANI.md#čtvrtletní-kontrola-dotazů-a-účtů)
- **Licence Adaminu — prověřena:** administrace přesný konec zkoušky nezobrazila; doložena instalace 15. 11. a objednávka odkupu do následující faktury. Datum 15. 12. je výpočet 30 dní, nikoli potvrzení poskytovatele.
- **Úklid zbývajících demo dat — zadán:** objednávky, značky, skryté produkty a bannery; před odstraněním rozlišit demo od skutečných či testovacích dat. V této fázi nezaznamenáno dokončení celého úklidu.
- **Portrét podpory — zadána výměna:** výchozího pána v klobouku nahradit podkladem odpovídajícím firmě; zůstává otevřené.

#### Nová identita a organizace projektu

- **Nová identita Agro Dabaki — nasazena:** dodané vodorovné SVG, tyrkysová #00B07E, tmavá #344D46 a tmavší tlačítka #007655; sjednocena šablona i vlastní bannery, kontrola při 390/1440 px. Nahradila pracovní žlutočerné logo.
- **Průhledné logo — nasazeno:** odstraněn bílý podklad SVG; veřejná hlavička i karta podpory načítaly shodný soubor.
- **Favicon pro malé velikosti — upraven:** nejprve bílá střecha a tyrkysová hala na tmavém podkladu; zkontrolovány veřejné 16/32px verze.
- **Finální průhledný favicon — nasazen:** podle připomínky obnoven dvoubarevný symbol, horní střecha posunuta výš; ověřena průhlednost rohů i mezery při 16/32 px.
- **Reorganizace repozitáře — dokončena:** firemní web, ukázky, Shoptet a migrace mají samostatné stromy; produkční web v src/agrodabaki/web, návody v tematických složkách docs. [Rozcestník](README.md)
- **Kontrola po přesunu souborů — provedena:** lokální produkční web, galerie a Adamin otevřeny při 390/1440 px; ověřeny cíle obchodů, lokální soubory, dokumentační odkazy a kotvy.
- **Migrační nástroje po reorganizaci — ověřeny:** pět utilit spustilo nápovědu, regenerace XML pro 137 karet/153 SKU dala totožný obsah, ověřovač rodin prošel historickými vstupy. Pět projektových HTML bloků porovnáno s administrací Shoptetu.
- **Verzování reorganizace — dokončeno:** v hlavním migračním chatu doloženo odeslání změn Panoramy a struktury projektu do main (e1fa3d9 a 444c7ea); nejedná se o automatické nasazení dalších budoucích změn.

### 17. 11. 2026 — Doladění a průběžná kontrola

Následující záznamy zachovávají i mezikroky, které byly později téhož dne změněny. Například mřížka systémových tabulek a vložené YouTube přehrávače byly vráceny zpět; poslední příslušný záznam určuje výsledek.
- **Sjednocení nedostupností.** Nastavení → Produkty → Sklady a Produkty → Sklad: u všech 312 zveřejněných SKU ověřeny dostupnosti a individuální výjimky. Původní „vyprodáno“ a „nedostupné“ u 34 SKU nahrazeny červeným systémovým „Momentálně nedostupné“ (−3, #d00000). Globálně zakázán nákup do minusu se zachováním viditelnosti; 214 SKU bez výjimky, 98 s termínem / na objednání / na dotaz má výjimku. Aktuálně nedostupných 37 SKU nelze objednat. Čerpadlo BH ověřeno při 390/1440 px, odmítnutí nedostupné varianty lžíce a nákup skladové varianty přes košík k dopravě při 390 px; hala na objednání stejnou cestou při 1440 px. Původní košík obnoven. Hotovo; při obnově skladu před přepnutím zachovat toto pravidlo v importu. [Provozní návod](plachtovehaly/ADMINISTRACE.md#nedostupné-zboží-a-nákup-do-minusu).
- **Ikona příslušenství kontejnerů — dokončeno:** V detailu kategorie Příslušenství (ID 788) nahrána SVG ikona čela s vraty. Na veřejné dlaždici při 390 a 1440 px ověřeno načtení v šířce 45 px a proklik do správné kategorie. Stejný obrázek se načetl i v rozbaleném desktopovém menu. Úkol dokončen.
- **Ikona náhradních oblouků — dokončeno:** U Náhradních oblouků (Produkty → Kategorie, ID 710) byl nákres nahrazen stejnou SVG ikonou jako u Příslušenství (788). Ověřeno načtení v dlaždici při 390 a 1440 px, proklik na Náhradní oblouky a zobrazení v rozbaleném menu na počítači. Úkol dokončen.
- **Krátký název Náhradní díly — dokončeno:** Produkty → Kategorie: poslední dvě kořenové položky jsou Vybavení pro chov koní a Náhradní díly. U ID 719 změněn jen text odkazu na Náhradní díly. Plný název a URL zachovány. Na 1680 px se krátký název vejde přímo na lištu, na 1440 px jej Adamin přesune do přetečení. Ověřeno též pořadí v otevřeném mobilním menu při 390 px.
- **Pořadí kategorií podle poptávky — dokončeno:** Podle poptávky uváděné zadavatelem změněno pořadí v Produkty → Kategorie. Přístřešky pro zvířata jsou třetí, Plachtové garáže čtvrté a Zastřešení lodních kontejnerů páté. Ověřeno po uložení v administraci a ve veřejném menu při 1440 a 390 px. Úkol uzavřen.
- **Výhody — návrh připraven:** Pro Konkurenční výhody je připraven [návrh textů, čtyř ikon a kompaktní lišty](plachtovehaly/vzhled/konkurencni-vyhody.md). Obsahuje průzkum konkurence a srovnání homepage i detailu při 320, 390, 1024 a 1680 px. V tomto kroku se čekalo na výběr; následovalo nasazení popsané níže.
- **Nová lišta výhod — nasazení — dokončeno:** Nasazeny všechny čtyři Konkurenční výhody včetně textu „Přivezeme a vyložíme“ a podtitulku „Vykládka u vás je v ceně dopravy.“ Kontrola homepage a detailu při 320, 390, 1024 a 1680 px ověřila pořadí, načtení čtyř SVG a rozložení bez vodorovného přetečení. Ověřeny čtyři cíle včetně kotvy VOP. Úkol dokončen.
- **Osm produktů na homepage — dokončeno:** Ve Vzhled a obsah → Titulní strana nasazen Výběr ze sortimentu v1 s osmi produkty ve dvou skupinách po čtyřech. V Editor → HTML kódy → Záhlaví upraveny styly karet. Použity skutečné široké fotografie z galerií. Při 1440, 390 a 320 px ověřeno všech osm fotografií a rozložení bez vodorovného přetečení. Všech osm odkazů vedlo přímo na produktový detail s HTTP 200. Verze v1 je dokončena. [Živý výběr](https://plachtovehaly.agrodabaki.cz/#vyber-ze-sortimentu)
- **Devět ikon hlavního menu — dokončeno:** Nasazeny obrysové ikony devíti hlavních kategorií. Správce souborů → menu-ikony.css, Editor → HTML kódy → Záhlaví → odkaz dabaki-menu-ikony. Na veřejné liště se při 1024 / 1440 / 1680 px zobrazilo přímo 5 / 7 / 9 kategorií. Při 1440 px ověřena ikona Náhradních dílů pod Více, při 320 a 390 px všech devět ikon v mobilní nabídce, při 390 px rozbalení Obloukových hal. Kontrola bez vodorovného přetečení. Úkol dokončen. [Desktop](plachtovehaly/overeni/menu-ikony-1440.png) · [Telefon](plachtovehaly/overeni/menu-ikony-390.png)
- **Osobní odběr a povolené platby — dokončeno:** Nastavení → Doprava a platby. Nasazen osobní odběr, hotovost do 270 000 Kč včetně a převod předem. Externí spedice pouze převodem. Košíky ověřeny od produktových detailů při 46 900, 239 900 a 289 900 Kč. Otevřeno k vydání: sjednotit Jak nakupovat, VOP a jejich e-mailovou přílohu, upřesnit místo odběru a storno před vyzvednutím. [Rozbor a provozní postup](plachtovehaly/objednavky/doprava-a-platby.md).
- **Ikony traktoru a smrku — dokončeno:** U Zemědělské techniky upraven traktor, u Lesní techniky nasazen jednoduchý smrk. Ve Správci souborů je menu-ikony-v2.css, připojený v HTML záhlaví. Na veřejném webu ověřeny nové SVG při 390 a 1440 px a aktualizovány oba snímky výše. Úkol uzavřen.
- **Místo a termín osobního odběru — dokončeno:** Osobní odběr ve skladu na adrese firmy vždy po potvrzení termínu. Uložen a po načtení ověřen popis dopravy ID 89, aktualizována a veřejně ověřena stránka Jak nakupovat ID 27. Pro VOP a jejich přílohu zbývá uzavřít pravidlo storna při odběru.
- **Vybavení pro koně bez mezikategorie — dokončeno:** Produkty → Přehled → Kategorie. Karty 605, 608, 611 a 614 mají výchozí kategorii Vybavení pro chov koní (755). V Produkty → Kategorie smazána prázdná podkategorie 776, ve Vzhled a obsah → Stránky upravena Mapa webu (794). Při 390 a 1440 px ověřeny čtyři produkty, jejich detaily a drobečková navigace, mapa webu a přímá odpověď 404 původní podkategorie. Přesměrování na žádost zadavatele vynecháno. Úkol dokončen.
- **Výhody pouze na homepage — dokončeno:** Vzhled a obsah → Bannery → Konkurenční výhody. U všech čtyř položek ponechána pouze Úvodní stránka. Při 390 a 1680 px ověřeny čtyři výhody na homepage, odkaz na Kontakty a absence lišty v kategorii Obloukové haly i na detailu haly se zipovými vraty. Úkol dokončen.
- **Výzva u poradenství — změněna:** konkurenční výhoda ID 11 nově uvádí „Zavolejte nám“; ověřen odkaz na Kontakty na mobilu i počítači.
- **Storno osobního odběru ve VOP — dokončeno:** VOP na stránce 39 a datovaná příloha potvrzení objednávky (order, ID 1) nyní zahrnují bezplatné storno katalogové objednávky při osobním odběru až do převzetí, včetně nákupu na firmu. U doručení platí storno do předání dopravci. Publikované znění rozlišuje platby podle dopravy a odběr ve skladu po potvrzení termínu. Veřejné znění ověřeno při 390 a 1440 px, nová příloha ověřena po načtení šablony. Při plánované testovací objednávce ověřit její skutečné doručení. Pro starší objednávky použít archivní PDF příslušného vydání.
- **Vzhled zákaznických formulářů — dokončeno:** Dokončen nový vzhled kontaktů, produktové diskuze a produktového dotazu. Správce souborů → formulare.css, Editor → HTML kódy → Záhlaví → dabaki-formulare. Na veřejném webu ověřeno rozložení všech tří při 320, 390 a 1440 px, psaní, fokus a validace e-mailu bez přetečení. Předávací zkouška doručení soukromých zpráv zůstává otevřená. [Správa a snímky](plachtovehaly/objednavky/formulare-dotazy.md#vzhled-zákaznických-formulářů).
- **Vzhled tabulky dopravy ve VOP — dokončeno:** Vzhled a obsah → Stránky → VOP (39). Tabulka dopravy má ohraničení buněk a ceny zarovnané doprava. Ověřeno na veřejné stránce při 390 a 1440 px. Opravené PDF je u potvrzení objednávky (order, ID 1) pod názvem obchodni-podminky-2026-11-17-uprava.pdf.
- **Publikace zásad soukromí — dokončeno:** Vzhled a obsah → Stránky → Podmínky ochrany osobních údajů (691). Pokyn ke stažení vzoru nahradily informace pro zákazníky. Na veřejné stránce ověřeny odstavce, odkazy a šířka bez přetečení při 390 a 1440 px. Otevřené otázky ke službám, přenosům, logům a zálohám a první provozní kontrole zůstávají v revizi. [Publikovaný zdroj](../src/plachtovehaly/shoptet/ochrana-osobnich-udaju.html)
- **Google Analytics v zásadách — dokončeno:** Provozovatel uvedl pro analytiku pouze Google. Do stránky 691 doplněn Google Analytics, účel měření a souhlas. Text a odkazy ověřeny na veřejném webu při 390 a 1440 px. Technické chování měření při volbě cookies a nastavení uchování v Analytics zbývá ověřit.
- **Mřížka tabulek v popisech — dokončeno:** Nasazeny [tabulky v popisech produktů](plachtovehaly/ADMINISTRACE.md#tabulky-v-popisech-produktů) podle vzhledu VOP, se šířkou podle obsahu. Správce souborů a HTML záhlaví. Na přístřešku Animal, zastřešení C20 a obloukové hale se zipovými vraty ověřena při 320, 390 a 1440 px mřížka, dostupnost posledního sloupce a rozložení bez vodorovného přetečení stránky. Úkol dokončen.
- **První hodnocení Firmy.cz na homepage — dokončeno:** Vzhled a obsah → Titulní strana. Pod průvodcem je hodnocení Agro Dabaki na Firmy.cz, 4,5 z 5 podle 9 hodnocení, s datem a krátkým úryvkem. Ověřeno opětovné načtení editoru, umístění, obsah, cílová URL a zobrazení bez přetečení při 390 a 1440 px. Při změně skóre aktualizovat datovaný údaj.
- **Mřížka systémových tabulek — později vrácena — dokončeno:** Mřížka podle VOP rozšířena i na systémové tabulky na detailu. Správce souborů → tabulky-produktu-v3.css, Editor → HTML kódy → Záhlaví → dabaki-tabulky-popisu. Kontrola v prohlížeči prošla všech 141 produktových URL z veřejné mapy a potvrdila rámečky buněk ve všech 235 tabulkách (42 v popisech, 52 v doplňkových parametrech a 141 u ceny). Na přístřešku Animal ověřena volba varianty při 320, 390 a 1440 px. Úkol dokončen. [Snímek doplňkových parametrů](plachtovehaly/overeni/tabulka-parametry-animal.png). Při průchodu mapou vracela starší adresa kategorie /udrzba-vybehu-a-jizdaren/ HTTP 404.
- **Nové skupiny odkazů v patičce — dokončeno:** V Editor → HTML kódy → Zápatí nasazeny skupiny Haly a přístřešky a Technika a vybavení, odkaz na průvodce a responzivní rozložení s původní vizitkou. Styl ve Správci souborů centruje spodní řádek. Na veřejné homepage ověřeno 16 interních cílů s HTTP 200 a rozložení bez přetečení při 320, 390, 900 a 1440 px. Úprava dokončena. [Počítač](plachtovehaly/overeni/paticka-1440.png) · [Telefon](plachtovehaly/overeni/paticka-390.png).
- **Systémové tabulky vráceny do původního vzhledu — dokončeno:** Na žádost zadavatele vrácen odkaz dabaki-tabulky-popisu v HTML záhlaví na původní tabulky-popisu.css ze Správce souborů. Mřížka platí pouze pro popisy. Na živém detailu obloukové haly se zipovými vraty při 390 a 1440 px ověřena mřížka v popisu a shoda rámečků, odsazení a svislého zarovnání systémových buněk s původní šablonou. Hotovo.
- **E-mail ve vizitce patičky — dokončeno:** Správce souborů a Editor → HTML kódy → Zápatí. Vizitka pod telefonem zobrazuje klikací agro@dabaki.cz podle stránky Kontakty. Ověřeny odkaz mailto, označení designéra, ikonka platformy, vystředění a 16 interních cílů na veřejné homepage. Kontrola při 320, 390, 900 a 1440 px prošla. Úkol dokončen.
- **Vložené přehrávače — později nahrazeny odkazy — dokončeno:** Produktová videa: Správce souborů → videa-v-popisu.js, HTML zápatí → dabaki-videa-v-popisu. Ve 141 produktech bylo 14 popisů s 11 různými videi. Na všech 14 ověřen jediný odpovídající iframe, čas začátku a šířka střídavě při 390 a 1440 px. Na obloukové hale se zipovými vraty ověřeno skutečné přehrávání montáže po kliknutí. Hotovo.
- **Karta hodnocení Firmy.cz — dokončeno:** Titulní strana, Správce souborů a HTML záhlaví. Nasazena responzivní karta hodnocení Firmy.cz. Na veřejné homepage při 320, 390 a 1440 px ověřeny rozložení, odkazy a mezera 16 px před patičkou. Po získání oficiálního widgetu nahradit obsah karty.
- **Kontakt pod hodnocením — oddělen:** kontaktní odstavec má samostatnou linku, klikací telefon a e-mail; mezera před patičkou snížena na 16 px. Ověřeno při 320/390/1440 px.
- **Duplicitní podpis platformy — odstraněn:** v patičce odebrán text „Vytvořil Shoptet“, zachována ikonka platformy s odkazem a podpis Design Shoptak.cz. Veřejná kontrola patičky při 320/390/900/1440 px prošla.
- **Ikona e-mailu v patičce — dokončeno:** Správce souborů a Editor → HTML kódy → Zápatí. Nasazena nativní obálka Adaminu u e-mailu ve vizitce. Na veřejné homepage ověřeno načtení SVG a shodné zarovnání telefonu a adresy při 320, 390, 900 a 1440 px. Dokončeno.
- **Předvolená barva Animal — dokončeno:** Editor → HTML kódy → Zápatí. Na kartě Animal (659) je u všech rozměrů od otevření vybraná barva Vojenská zelená. Při 390 px ověřen rozměr 4 × 4 m (1000251), při 1440 px rozměr 12 × 12 m (1000360), v obou případech přes košík až k výběru dopravy. Úkol dokončen.
- **Návrat k odkazům na YouTube — dokončeno:** V HTML zápatí nahrazen blok pro vkládání přehrávačů úpravou textových odkazů na YouTube (target="_blank", rel="noopener"). Na všech 14 dotčených detailech ověřeny původní adresy a absence iframe. Kliknutí na detailu obloukové haly otevřelo YouTube v nové kartě a zachovalo polohu na stránce produktu. Hotovo.
- **Svislé zarovnání e-mailu — dokončeno:** Správce souborů a Editor → HTML kódy → Zápatí. Nasazen paticka-v6.js se svislým vystředěním zavináče a e-mailu. Na veřejné homepage při 320, 390, 900 a 1440 px ověřena shoda středů i zarovnání adresy s telefonem. Úkol dokončen.
- **Předvolená bílá u tří zastřešení — dokončeno:** Editor → HTML kódy → Zápatí. U zastřešení C26 (695), C33S (683) a s navijákovými vraty (689) konfigurátor od otevření předvyplňuje bílou ze společného parametru Barva plachty. Na každé kartě ověřeny dvě různé varianty při 390 a 1440 px, správné SKU v košíku a přechod k dopravě. Úkol dokončen.
- **Aktualizace počtu recenzí — dokončeno:** Vzhled a obsah → Titulní strana. Po kontrole veřejného profilu Firmy.cz aktualizován počet na 10 hodnocení, skóre 4,5 z 5. Uložení v editoru a veřejná karta ověřeny při 390 a 1440 px. Další aktualizace při změně profilu do dodání widgetu.
- **Rozměry a barvy ve srovnávacích tabulkách — dokončeno:** Správce souborů a HTML zápatí: rozměry a barvy v porovnávacích tabulkách. Projit katalog 141 produktů, ověřeno všech 42 tabulek v popisech. Změněno 21 tabulek staveb, zbylých 21 u strojů a dílů porovnáno s původním obsahem. Řada 26 má šířku 8 m ve všech osmi řádcích. Kontrola 390/1440 px a kontrola YouTube odkazu dokončena. [Řada 26](plachtovehaly/overeni/tabulka-rada26-rozmery.png).
- **Lesní technika bez mezikategorií — dokončeno:** Produkty → Přehled → Kategorie. Všech šest karet ze Štěpkovačů, Štípaček dřeva a Špalíkovačů přesunuto do Lesní techniky (752). Prázdné kategorie 767, 770 a 773 smazány a odebrány z Mapy webu (794). Na 390 a 1440 px ověřeny výpis, všech šest původních adres produktů, drobečková navigace a mapa webu. Tři zrušené adresy vracejí přímo 404. Upraveny podklady pro migraci WEXBO. Úkol dokončen.
- **Fotografická Mapa webu — dokončeno:** Vzhled a obsah → Stránky → Mapa webu (794). Nasazen fotografický rozcestník hal, skupiny techniky a blok pro nákup a kontakty. Na veřejném webu ověřeno pět fotografií, 29 cílů s přímým HTTP 200, proklik do Sedlových hal a rozložení při 320, 390 a 1440 px. Redesign dokončen. [Počítač](plachtovehaly/overeni/mapa-webu-1440.png) · [Telefon](plachtovehaly/overeni/mapa-webu-390.png)
- **Seznam 141 produktů v Mapě webu — dokončeno:** Vzhled a obsah → Stránky → Mapa webu (794). Publikován seznam 141 produktových karet v devíti skupinách podle veřejných detailů. Na šířkách 320, 390 a 1440 px ověřeny názvy a odkazy všech produktů, zachování 29 původních cílů, kotvy, šířka stránky a proklik z Lesní techniky na produkt. Úkol dokončen. Při změně sortimentu obnovit seznam a počet.
- **Revize migračních úkolů — dokončeno:** Revize TODO. V migrační mapě jsou 312 zveřejněných kódů, 20 k ověření a tři zdrojové kategorie bez cíle. Ověřeny živé VOP na obou webech, zásady s Google Analytics, Mapa webu a nečíselné pořadí hodnot rozměrů u Sedlových hal. Do podkladů pro přepnutí přidána dlouhá a krátká cesta starých VOP. Test přesměrování 301 → 200 patří ke změně domény.
- **Číselné řazení filtrů — dokončeno:** Číselné pořadí rozměrových filtrů dokončeno v Nastavení → Produkty → Parametry a příznaky. Z 24 kategorií menu obsahuje 20 rozměrové filtry. Ve všech 20 ověřeno pořadí na veřejném webu při 390 a 1440 px před výběrem i po výběru jedné hodnoty. [Návod pro správce](plachtovehaly/katalog/filtry-ostatni-kategorie.md#číselné-pořadí-hodnot-od-17-11-2026).
- **Přenos příznaků Novinka a Akce — dokončeno:** Produkty → Přehled → detail → Hlavní údaje. Z veřejného WEXBO načteno všech 332 detailů a porovnáno se sitemap a mapou URL. Přeneseno 15 příznaků Novinka a 6 příznaků Akce na 21 kartách s jednotným stavem všech variant. Ověřena shoda SKU před zápisem, opětovné načtení všech uložených karet a veřejné příznaky na všech 21 detailech. Vizuální kontrola příkopového mulčovače AGE a přístřešku Animal při 390 a 1440 px. Zadavatel potvrdil přenos pouze při shodě všech variant. Devět smíšených karet pro Novinku a šest pro Akci je z přenosu příslušného štítku vyřazeno. Přenos zveřejněného katalogu dokončen. Při doplnění odložených položek ověřit jejich 14 Novinek a 2 Akce podle stejného pravidla. [Správa a zdrojový rozpis](plachtovehaly/ADMINISTRACE.md#příznaky-novinka-a-akce).
- **Audit hlavních produktových fotografií — dokončen:** Dokončen [audit cover fotografií](plachtovehaly/vzhled/audit-cover-fotografii-2026-11-17.md): 141 detailů, originálů a katalogových náhledů z 28 výpisů. Sedlové haly ověřeny při 390/1440 px. Bílé pásy jsou v CDN náhledech, cílový formát 4 : 3. Z 23 fotografií staveb je 8 vyhovujících, 5 kandidátů na jemný ořez, 5 na rozšíření okolí a 5 vyžaduje ověření modelu. Správa následných změn: Produkty → Přehled → galerie. V době auditu bez změny produkce; následoval pilot a dvě schválené série nasazení níže.
- **DPH a zobrazení obou cen — dokončeno:** Nastavení → Základní nastavení → Daně. Po výslovném souhlasu zadavatele opraven režim neplátce na plátce DPH, sazba 21 %, hlavní ceny včetně DPH. V kategoriích a detailech zapnuto zobrazení obou cen. Všech 312 zveřejněných SKU má před změnou i po ní shodnou koncovou cenu s WEXBO. Zdrojové ceny všech 332 položek odpovídají 21 %. Ověřeny varianty, košík a doprava pro 46 900 a 199 900 Kč při 390 a 1440 px, GEIS a externí spedice podle ceny včetně DPH. Kontrola vzhledu kategorií a detailů prošla. Dokončeno. [Správa cen a ověření](plachtovehaly/ADMINISTRACE.md#zobrazení-cen-s-dph-a-bez-dph).
- **AI pilot čtyř coverů — připraven, původně neschválen:** Připraven [pilot čtyř coverů](../src/plachtovehaly/navrhy/cover-pilot/README.md) pomocí image_gen: garáž 710 (dva pokusy), dvojitá konstrukce 152, řada 33 (50), řada 23 (233). Čtyři uložené návrhy mají 1448 × 1086 px a vyplněné okraje. Vizuální kontrola proti originálům odhalila překreslení detailů výrobku; návrhy nejsou schválené pro nasazení. Bez změny produkce. Zbývá zachovat originál v chráněné vrstvě a použít AI pouze pro okolí, u řady 23 hledat lepší zdroj; potom ověřit výsledné karty na mobilu a počítači.
- **Publikace osmi článků Poradny — dokončeno:** Vzhled a obsah → Články: zveřejněno všech osm schválených SEO/GEO článků v rubrice Poradna (797), včetně SEO title, meta description a propojení na sortiment. Doplněn odkaz v Menu → Informace pro vás a všech osm odkazů do Mapy webu (794). Veřejné stránky ověřeny při 390/1440 px: HTTP 200, H1, canonical, indexovatelnost a rozložení. Opraven nedostupný zdroj HZS. Publikace dokončena; zbývá potvrdit automatické propsání do XML sitemap po obnově Shoptetu (první kontrola vracela generaci z 15:21:29 +01:00). [Správa a ověření](plachtovehaly/vzhled/informacni-stranky.md#poradna--publikace-17-11-2026).
- **Prvních deset coverů — schváleno a nasazeno — dokončeno:** Po následném schválení AI detailů nasazeno deset coverů 4 : 3 v Produkty → Přehled → galerie (710, 152, 233, 164, 50, 113, 206, 674, 659, 713). PP bez ALLSHELTER, řada 26 se štítkem Agro Dabaki. Původní galerie zachovány. Veřejné náhledy a všech deset detailů ověřeny při 390/1440 px; u dvojité konstrukce ověřeno přepnutí fotografie bílé varianty. Po první sérii zbývalo pět karet s nejasnou identitou zdroje (40/50, C4040 otevřené/s vraty, navijáková vrata); dokončení je zaznamenáno níže. [Nasazení, návrat a snímky](plachtovehaly/vzhled/nahledove-fotografie.md#covery-4--3--nasazení-17-11-2026). Tento souhlas nahrazuje dřívější stav neschváleného pilotu.
- **Vystředění výhod — dokončeno:** Editor → HTML kódy → Záhlaví. Výhody vystředěny v jednotlivých desktopových sloupcích, ikony zůstávají vedle textu. Uložení i živá homepage ověřeny při 320, 390, 1024 a 1680 px bez přetečení. Hotovo, bez zbývající práce.
- **Mezera mezi výhodami a kategoriemi — zmenšena:** v HTML záhlaví snížena z 96 na 24 px; homepage ověřena při 320/390/1024/1680 px bez přetečení.
- **Dalších pět coverů — schváleno a nasazeno — dokončeno:** Dokončeno dalších pět coverů 4 : 3: C4040 otevřené (698), s vraty (701), navijáková vrata (689), řady 40 (203) a 50 (200). Uživatel výslovně schválil použití stávajících snímků i u dříve nejasných zdrojů. Produkty → Přehled → galerie. Po uložení ověřeno pořadí a zachování původních galerií; pět detailů i obě kategorie zkontrolovány na 390/1440 px. Celkem 15 coverů nasazeno, tato série dokončena. [Záznam a snímky](plachtovehaly/vzhled/nahledove-fotografie.md#doplnění-pěti-coverů--17-11-2026).
- **Přenos původních cen a slev — dokončeno:** Produkty → Import a Nastavení → Produkty → Zobrazení. Z 332 veřejných položek WEXBO identifikováno 36 slev. Přeneseno 35 původních cen na odpovídající SKU v 11 kartách, 1000011 čeká na dokončení migrace. Export potvrdil 35 standardních cen a shodu prodejních cen všech 448 kódů. Veřejná kontrola všech 35 SKU ověřila aktuální cenu, původní cenu a procenta slev. Kategorie zobrazují slevu „až“, přesná přeškrtnutá cena je na detailu konkrétní varianty. Příklad 1000028 ověřen při 390/1440 px od detailu přes košík po dopravu, včetně ceny 169 900 Kč z původních 233 900 Kč a slevy 27 %. Ověřena i varianta bez slevy. Přenos zveřejněného katalogu dokončen. [Správa slev](plachtovehaly/ADMINISTRACE.md#slevy-a-přeškrtnuté-ceny).
- **Oprava první ikony výhod — dokončeno:** Editor → HTML kódy → Záhlaví, blok dabaki-konkurencni-vyhody. Opraven selektor první ikony po kompaktním vložení CSS: obnoven rozměr 56 × 42 px na počítači a 44 × 32 px v mobilní mřížce místo 32 × 23 px. Ověřeno uložení a živá homepage při 320, 390, 1024 a 1680 px, bez přetečení, mezera před kategoriemi zůstává 24 px. Hotovo.
- **Fotomontáž malé garáže — připravena jako návrh:** vytvořena vizualizace na dodané zahradě, následně rozšířena na celou šířku cesty s betonovou deskou a druhým autem. Podklad v chatu „Vygeneruj fotomontáž malé haly“; nejde o fotografii realizace ani nasazený produktový snímek.
- **Python 3 pro nové pomocné skripty — stanoveno pravidlo:** doplněno do AGENTS.md s výjimkou existujících jazyků a požadavků nástrojů; bez přepisování zavedené automatizace jen kvůli této volbě.
- **Samostatný přístup do administrace — zdokumentován:** AGENTS.md popisuje relaci na pozadí, kontrolu cílové domény a práci s lokálními přístupy bez jejich výpisu; selhání ovládání nativního okna není důkaz nedostupnosti administrace.
- **Plán a historie projektu — rekonstruovány:** prošlo 18 aktivních i archivovaných projektových chatů a dobové protokoly; doplněny zejména samostatné úkoly z 15.–16. 11. Zachovány historické mezikroky, otevřená práce oddělena a do AGENTS.md přidáno pravidlo jednoho bodu na úkol. Kontrola tohoto zápisu je dokumentační, neopakuje historické testy na produkci.
- **Červené slevové štítky — dokončeno:** Správce souborů a Editor → HTML kódy → Záhlaví. Slevová kolečka nahrazena kompaktními červenými štítky s bílým procentem, podle přání zadavatele. Nasazen slevove-stitky-v2.css přes dabaki-slevove-stitky. Pro limit záhlaví zkráceno pouze odsazení CSS bloků. V kategoriích Sedlové haly a Mulčovače a na detailu řady 33 ověřeny barva, rozměry, souběh příznaků a rozložení při 390/1440 px. Dokončeno. [Správa vzhledu štítků](plachtovehaly/ADMINISTRACE.md#červené-slevové-štítky-17-11-2026).
- **Akce sjednocena se skutečnými slevami — dokončeno 17. 11. 2026:** v Produkty → Přehled → Hlavní údaje zapnuta u FFM a AGF PRO, vypnuta u AGE, WX 310 a TRS 110. Akci má pět karet, vždy se slevou všech SKU. Nové pravidlo nahrazuje původní přenos příznaku z WEXBO. Export ověřil všech 141 zveřejněných karet, osm veřejných detailů a kategorie ověřeny při 390/1440 px. Bez zbývající práce v tomto úkolu. [Správa příznaku](plachtovehaly/ADMINISTRACE.md#sjednocení-akce-se-skutečnou-slevou-17-11-2026).

- **Prázdné slevové údaje u variant — opraveno 17. 11. 2026:** Správce souborů a HTML záhlaví → slevove-stitky-v3.css. U nezlevněné varianty se skryje celý červený štítek i pomlčky původní ceny a procenta nad cenou. Na živém detailu obloukové haly ověřeno přepnutí 7,3 m → 9,15 m → 7,3 m při 390/1440 px, správné zobrazení slevy i prodejních cen. Dokončeno. [Postup](plachtovehaly/ADMINISTRACE.md#prázdná-sleva-u-varianty-17-11-2026).

- [x] **Úklid nahrazených fotografií — dokončeno 17. 11. 2026:** Produkty → Přehled → Hlavní údaje → Fotogalerie; odstraněno všech 38 schválených originálů a totožných kopií u 15 produktů. Před mazáním převedeno 34 vazeb variant. Opětovné načtení administrace ověřilo přesné pořadí všech zachovaných snímků; veřejná kontrola všech 15 detailů potvrdila nový cover a nepřítomnost odstraněných fotografií. Ověřeno přepínání bílé/zelené garáže, vzhled PP na počítači a PP/C4040 na mobilu. Lokální zálohy zachovány, bez zbývající práce. [Evidence a obnova](plachtovehaly/vzhled/nahledove-fotografie.md#úklid-originálů--dokončeno-17-11-2026).

### 18. 11. 2026 — Oprava odkazů na fotografie

- **Novinka změněna na modrou — dokončeno 18. 11. 2026:** vlastní barva příznaku ID 2 nastavena na #2563eb, přepis Adaminu upraven v slevove-stitky-v4.css přes HTML záhlaví. Bílý text na modrém pozadí ověřen v Sedlových halách a detailu řady 30 při 390/1440 px. [Správa barvy](plachtovehaly/ADMINISTRACE.md#modrá-novinka-18-11-2026).


- **Obrázky homepage po úklidu galerií — opraveno:** Ruční HTML stále odkazovalo na smazané originály. Ve Vzhled a obsah → Titulní strana nahrazeno pět odkazů (689, 164, 710, 674, 659) novými covery a ve Stránkách → Mapa webu (794) jeden odkaz (689). Zachován ostatní aktuální obsah a upraveny oba projektové HTML zdroje. Veřejné načtení všech náhrad ověřeno, homepage vizuálně při 390/1440 px; na homepage ani v Mapě webu nezůstal obrazový odkaz z odstraněné sady 38 fotografií. Bez zbývající práce. [Záznam a snímky](plachtovehaly/vzhled/nahledove-fotografie.md#oprava-ručních-odkazů--18-11-2026).

### 18. 11. 2026 — Objednávkové e-maily a test nákupu

- **Příjemce nových objednávek — změněn na žádost zadavatele:** Nastavení → Emaily → Automatické zasílání → Oznámení o objednávce e-shopu (akce 1): původní hlavní příjemce agro@dabaki.cz nahrazen přímým příjemcem info@ruzickahonza.cz. Opětovným otevřením ověřen jediný příjemce; veřejný kontakt a ostatní akce beze změny. [Správa a návrat](plachtovehaly/objednavky/doprava-a-platby.md#test-objednavky-18-11-2026).
- **Testovací objednávka převodem — vytvořena a zákaznický e-mail doručen:** objednávka 2026000001, SKU 1000084, 49 Kč včetně DPH, GEIS zdarma, převodem. Průchod od detailu přes košík a dopravu po potvrzení a záznam administrace ověřen; označeno TEST – NEEXPEDOVAT. Zadavatel snímky v tomto chatu doložil doručení potvrzení, sedmidenní splatnost a PDF obchodni-podminky-2026-11-17-uprava.pdf (68,3 kB ve schránce). Zjištěno prázdné číslo účtu v e-mailu i nastavení CZK a starší zelené logo. Doručení samostatného oznámení pro obchod a návaznost faktury nejsou doloženy. Po dokončení testu stornována; ověřen návrat dostupnosti Skladem (1 ks). [Podrobný výsledek](plachtovehaly/objednavky/doprava-a-platby.md#test-objednavky-18-11-2026).
- **Podpis automatických e-mailů — upraven:** Části šablon → Podpis emailu (ID 3, signature); odstraněno „S přátelskými pozdravy,“ podle zadání. Zachovány značky názvu obchodu, telefonu a e-mailu. Uložené HTML ověřeno opětovným načtením; již doručená zpráva zůstává původní. [Správa](plachtovehaly/ADMINISTRACE.md#objednavkove-e-maily).

- **Číselná řada objednávek — oddělena od WEXBO:** živé WEXBO Nastavení → Eshop → Číslování dokladů má objednávky `1{YY}[5]` (poslední zobrazená 12600124, náhled další 12600125). Shoptet Nastavení → Objednávky → Doklady → Objednávky změněn z `%YYYY%` na `%YYYY%9`, délka 10, postupná řada od 1; očekávaný formát 2026900001. Uložení ověřeno znovunačtením všech čtyř hodnot. Stávající test 2026000001 nepřečíslován; další objednávka v nové řadě zatím nevytvořena. [Správa řady](plachtovehaly/ADMINISTRACE.md#cislovani-objednavek).
- **Bankovní účet původního obchodu — prověřen bez nalezeného účtu:** WEXBO Nastavení → Eshop → Bankovní účty nemá žádné položky; detail platby Předem na účet (ID 2) obsahuje jen obecný text, žádné číslo účtu. Shoptet CZK je také prázdný. Zadavatel požádán o skutečný firemní účet; platební údaje zatím nebyly měněny. Účet poskytovatele WEXBO pro úhradu hostingu není účtem obchodu a nesmí být převzat.
- **Testovací objednávka — bezpečně uzavřena:** 2026000001 přepnuta z Nevyřízená na Stornována. Opětovným načtením administrace ověřen stav, veřejný detail SKU 1000084 opět uvádí Skladem (1 ks). Objednávka zachována pro dohledání testu, bez úhrady a expedice.

### 18. 11. 2026 — Rozlišení a doručení oznámení obchodu

- **Oznámení provozovateli — upraveno a doručení doloženo:** akce 1, šablona orderAdmin (ID 27), příjemce info@ruzickahonza.cz. Původní předmět byl shodný se zákaznickým potvrzením a text oslovoval zákazníka. Nově předmět „[#WEBSITE_NAME#] NOVÁ OBJEDNÁVKA #ORDER_CODE# – oznámení pro obchod“, nadpis Nová objednávka v e-shopu a interní úvod; odstraněny zákaznické platební instrukce a poděkování, rekapitulace a kontakty zachovány. Uložení ověřeno načtením. Test 2026900001 se shodnou adresou zákazníka a obchodu opět doručil podle zadavatele pouze zákaznické potvrzení. Test 2026900002 s autorizovaným aliasem ja@ruzickahonza.cz pro zákazníka doručil obě zprávy; zadavatel potvrdil příjem a přiložil snímek interního oznámení. Výsledek ukazuje souvislost se shodnou adresou, přesný mechanismus potlačení nebyl doložen logem Shoptetu. [Správa a test](plachtovehaly/objednavky/doprava-a-platby.md#opakovany-test-emailu).
- **Nová číselná řada — ověřena objednávkami:** skutečně přidělena čísla 2026900001 a 2026900002, odpovídají nastavení %YYYY%9 s délkou 10. Oba testy 49 Kč, GEIS zdarma, převodem; oba následně stornovány, stav načten z administrace a veřejně ověřen návrat dostupnosti SKU 1000084 na Skladem (1 ks). Bankovní účet zůstává čekající na dodání majitelem; test není ověřením platebních údajů.

### 18. 11. 2026 — Dohoda o testu iDokladu

- **iDoklad — schválen postup, dosud nezapojeno:** zadavatel potvrdil test na svém účtu a přepnutí na účet majitele e-shopu při předání. Konkrétní integrační služba, její cena a přístup zatím nejsou vybrané; žádná faktura nebyla vytvořena. Dohoda z tohoto chatu, kontrola lokálního souboru přístupů bez výpisu tajných údajů. [Podmínky testu a předání](plachtovehaly/PREDANI.md#idoklad-test-a-predani).

### 18. 11. 2026 — Portrét podpory v košíku

- **Montér místo výchozího portrétu — nasazeno:** na žádost zadavatele vytvořen ilustrační AI portrét montéra a nahrán do Nastavení → Základní nastavení → Nastavení obchodu → Kontaktní údaje pro vaše zákazníky → Fotografie obchodníka. Uložení ověřeno opětovným načtením administrace; veřejný prázdný košík při 390 a 1440 px zobrazuje nový obrázek, kruhový ořez, název firmy a správný telefonní odkaz bez vodorovného přetečení. Nákupní logika se neměnila. Bez zbývající práce. [Správa a podklady](plachtovehaly/ADMINISTRACE.md#portret-podpory).

### 18. 11. 2026 — Kontrola skladového filtru řady 23

- **Řada 23 ve filtru Na skladě — prověřeno bez změn:** všechny tři varianty 1000414–1000416 mají v administraci produktu 233 nulovou zásobu a dostupnost při vyprodání 05.01. 2027. Pole Skladem platí pro kladnou zásobu. Veřejná kategorie po kliknutí na filtr přejde z 11 na osm karet bez řady 23; všechny tři vybrané varianty v detailu zobrazují uvedený termín, jedna také ověřena při 390 px. Filtr odpovídá uloženým údajům; fyzický sklad nepotvrzen, jeho obnova zůstává v otevřeném předmigračním úkolu. [Podklady a správa](plachtovehaly/katalog/filtry-sedlove.md#kontrola-filtru-na-skladě--18-11-2026).


### 18. 11. 2026 — Oranžová dostupnost s termínem

- **Termíny naskladnění — nasazena oranžová:** Nastavení → Produkty → Dostupnosti, všech 22 existujících datovaných dostupností má #b85c00. Následně na přání zadavatele doplněno „Dostupné od“ před datum; sdílený název se zobrazuje v detailu i kategorii. Ostatní pole zachována, Skladem nadále zelené a Momentálně nedostupné červené. Uložení všech termínů ověřeno znovunačtením; veřejná kategorie Sedlové haly a detail řady 23 se všemi třemi délkami ověřeny při 390 a 1440 px včetně skutečné barvy textu a snímků. Bez zbývající práce. [Správa a podklady](plachtovehaly/ADMINISTRACE.md#oranžové-termíny-naskladnění--18-11-2026).

### 18. 11. 2026 — Návrh druhé série článků Poradny

- **Osm dalších SEO témat — návrh k výběru, nenapsáno a nepublikováno:** připraveny náměty na kondenzaci v hale, přípravu podkladu, garáž pro karavan, zimní kontrolu haly, celkový rozpočet haly, výběr příkopového mulčovače, štěpkovač versus špalíkovač a paletizační vidle. Kontrola překryvu podle [manifestu osmi vydaných článků](../src/plachtovehaly/shoptet/poradna/clanky.json) a původního chatu „Analyzuj SEO témata pro haly“ (01a1ea39-8fc7-7412-8474-54040bff3a65); aktuální zadání a podrobné návrhy v chatu 01a1eeea-5153-7301-89fa-cb63408c0fd9. Online kvalitativní rešerše zahrnula [kondenzaci HAGRO](https://hagro.cz/kondenzace-vody-v-plachtove-hale/), [montáž hal](https://www.plachtovehaly.cz/montaz) a [srovnání dřevozpracujících strojů JIRBO](https://www.jirbo.cz/cs/drtice-stepkovace-spalikovace-rozdily). Bez měření hledanosti a bez změny Shoptetu; přímé načtení veřejné poradny se v této relaci nezdařilo. Při psaní ověřit technické údaje konkrétních modelů proti podkladům firmy.

### 18. 11. 2026 — Oranžové Na objednání

- **Na objednání — nasazeno:** Nastavení → Produkty → Dostupnosti, ID 32 přejmenováno z „na objednání“ na „Na objednání“ a nastaveno #b85c00. Opětovným načtením ověřeny obě hodnoty i zachování ostatních polí. Všech 13 kombinací řady 40 zkontrolováno při 390 a 1440 px; bílé délky 30,5 a 33,55 m mají nový oranžový text. Kategorie nadále správně hlásí Skladem (1 ks) podle skladové varianty. Bez zbývající práce. [Správa a snímky](plachtovehaly/ADMINISTRACE.md#na-objednání--18-11-2026).

### 18. 11. 2026 — Příprava druhé série Poradny

- **Osm dalších článků — napsáno, nezveřejněno:** po souhlasu s tématy dokončeny texty, SEO title, meta description, návrhy URL, srovnávací tabulky a odkazy. Produktové údaje ověřeny proti veřejným kartám; všech 24 odlišných odkazů vrací HTTP 200. Příprava navazuje na výše uvedený návrh témat, živou Poradnu nemění. [Náhled](../src/plachtovehaly/shoptet/poradna/serie-2/index.html) · [Správa a kontrola](plachtovehaly/vzhled/informacni-stranky.md#poradna--druhá-série-připravena-18-11-2026). Zdroj zadání: tento chat 01a1eeea-5153-7301-89fa-cb63408c0fd9.
- **Osm obrázků k nové sérii — připraveno:** vlastní SVG schémata s českými popisky a PNG exporty, alternativní texty a zvětšení obrázku v náhledu. Vizuálně zkontrolována celá sada; lokální články ověřeny při 390/1440 px, všechny obrázky načtené, jeden H1 a bez přetečení stránky ve všech 16 kontrolách. Jde o ilustrační schémata, nikoli realizace či montážní výkresy. [Obrázky](../src/plachtovehaly/shoptet/poradna/serie-2/obrazky/) · [Ověření](../src/plachtovehaly/shoptet/poradna/serie-2/overeni/kontrola.json).

### 18. 11. 2026 — Nasazení druhé série Poradny

- **Osm článků s obrázky — nasazeno a ověřeno:** Vzhled a obsah → Články, rubrika 797, nové články ID 26, 29, 32, 35, 38, 41, 44, 47. Zveřejněny schválené texty, SEO údaje, osm PNG schémat a náhledy. Ruční Mapa webu doplněna na 16 článků; manifesty, HTML, náhledy a ZIP synchronizovány. Všech osm detailů i výpis ověřeny při 390/1440 px včetně H1, metadat, canonical, indexovatelnosti, obrázků a rozložení. Zvětšení obrázku funguje. [Správa a produkční kontroly](plachtovehaly/vzhled/informacni-stranky.md#poradna--druhá-série-nasazena-18-11-2026).
- **Dvojitý obrázek v článku — opraveno:** Editor → HTML kódy → Zápatí, odkaz na article-illustrations.css. Pouze nové články s vlastním figure skrývají automatický obrázek nad textem; náhledy v Poradně zachovány. Jeden viditelný obrázek v detailu ověřen ve všech 16 mobilních/desktopových kontrolách. [Zdroj stylu](../src/plachtovehaly/shoptet/poradna/article-illustrations.css).
- **Odkazy na konkurenční prodejce — odstraněny na přání zadavatele:** ze čtyř nových článků odebráno sedm odkazů a prázdné bloky Podklady. Rešerše ponechána pouze interně, vlastní produktové odkazy zachovány. Ověřeno uložení administrace a nepřítomnost konkurenčních odkazů ve všech nových veřejných článcích; aktualizovány i náhledy a generátor.
- **XML sitemap Poradny — ověřeno:** automatická XML mapa i ruční Mapa webu obsahují všech 16 článků. Uzavřen také otevřený úkol čekající od publikace první série 17. 11. [Výsledek kontroly](../src/plachtovehaly/shoptet/poradna/serie-2/overeni/produkce.json).
- **Obrázky pro původní články — zadáno jako navazující TODO:** na přání zadavatele po dokončení současné činnosti projít první sérii a doplnit vhodné obrázky i náhledy. Úkol je veden samostatně nahoře; zatím nepřipraveno ani nenasazeno.

### 18. 11. 2026 — obrázky původních článků Poradny

- **Nasazeno a ověřeno osm schémat první série:** články ID 2, 5, 8, 11, 14, 17, 20 a 23 ve Vzhled a obsah → Články mají obrázek s popiskem, alternativním textem a zvětšením i samostatný náhled. PNG nahrány do správce souborů; původní texty a SEO údaje při uložení porovnány a zachovány. Aktualizován manifest, HTML a předání. Produkční kontrola prošla pro osm detailů při 390/1440 px (16/16); výpis načetl všech 16 náhledů na obou šířkách, zvětšení funguje a všech 16 článků je v HTML i XML mapě. Vizuálně ověřena sada i mobilní a desktopový detail. Tím je uzavřen dřívější TODO obrázků první série. [Správa a podklady](plachtovehaly/vzhled/informacni-stranky.md#poradna--obrázky-první-série-doplněny-18-11-2026) · [Produkční kontrola](../src/plachtovehaly/shoptet/poradna/serie-1-obrazky/overeni/produkce.json).

### 18. 11. 2026 — pilot výtvarného stylu Poradny

- **Připraveny tři návrhy ilustrace haly pro traktor:** na výslovnou žádost zadavatele subagent navrhl tři směry a vestavěný imagegen vytvořil varianty A (filmový anime realismus), B (architektonická vizualizace), C (malované filmové pozadí). Výchozí reference je dosavadní schéma vjezdu; návrhy byly vizuálně prohlédnuty a uloženy do `src/plachtovehaly/shoptet/poradna/pilot-ilustrace/`. Jde o obecné ilustrace, nikoli doložené fotografie konkrétního modelu. Nenasazeno, výběr stylu čeká na zadavatele. [Přesné prompty a reference](../src/plachtovehaly/shoptet/poradna/pilot-ilustrace/prompty.json).

### 18. 11. 2026 — schválený styl C a celá série ilustrací

- **Styl C schválen zadavatelem; připraveno 16 ilustrací:** k pilotu haly pro traktor doplněno 15 tematických obrázků vestavěným imagegenem v jednotném malovaném filmovém stylu. Všechny finální PNG jsou v `src/plachtovehaly/shoptet/poradna/ilustrace-styl-c/`, společně s přesnými prompty, mapováním článků, rozměry a SHA-256. Vizuálně prohlédnuto všech 16; poloha balíků opravena na kruhové podstavě podle příkladu v článku. Ověřena existence a PNG hlavička všech 16 souborů (celkem 47,5 MB originálů). Jde o redakční vizualizace, nikoli produktové fotografie. Zatím nenasazeno; stávající technická schémata a veřejné články zachovány. [Přehled celé série](../src/plachtovehaly/shoptet/poradna/ilustrace-styl-c/index.html) · [Manifest a zadání](../src/plachtovehaly/shoptet/poradna/ilustrace-styl-c/manifest.json).

### 18. 11. 2026 — nasazení ilustrací stylu C

- **Nasazeno všech 16 schválených ilustrací a náhledů:** Vzhled a obsah → Články → Poradna (797), články ID 2 až 47 po třech; Správce souborů → `blog-c-<slug>.jpg`. Za úvodem je nová ilustrace, původní schéma přesunuto do navazující obsahové části. Při každém uložení ověřeno zachování textu, SEO údajů a schématu. Veřejně prošlo 32/32 kontrol při 390/1440 px; výpis načetl všech 16 nových náhledů na obou šířkách, zvětšení funguje, bez přetečení. Vizuálně zkontrolován mobilní detail i desktopový výpis. Originály PNG a webové JPEG (7,26 MB celkem) jsou v src, manifesty a HTML synchronizovány. [Produkční kontrola](../src/plachtovehaly/shoptet/poradna/ilustrace-styl-c/overeni/produkce.json).
- **Styl C zapsán jako výchozí pro blogové ilustrace:** nový návod popisuje výtvarná pravidla, schválenou referenci, prompty, kontrolu technických motivů, ukládání do src, webové exporty, správu a návrat změny. Propojen rozcestník, provozní návod a předání správci. [Blogové ilustrace](plachtovehaly/vzhled/blogove-ilustrace.md).

### 18. 11. 2026 — zkouška oficiálního widgetu Firmy.cz

- **Oficiální odznak a iframe — nasazeno pod původní kartu:** Vzhled a obsah → Titulní strana, nová sekce `hodnoceni-firmy-widget`. Na výslovné přání zadavatele zůstala původní ruční karta beze změny; tím se pro tuto zkoušku mění dřívější plán jejího nahrazení. Dodané URL pro profil 13362870, iframe s limitem tří recenzí a výškou 420 px, šířka přizpůsobená mobilu. Záloha před změnou lokálně, uložený obsah znovu načten a zdroj homepage synchronizován. Veřejně i vizuálně ověřeno při 390/1440 px: odznak načten, recenze načteny, správné pořadí za původní kartou, bez vodorovného přetečení. Delší obsah se posouvá uvnitř iframe. [Samostatný blok](../src/plachtovehaly/shoptet/hodnoceni-firmy-widget.html) · [Počítač](plachtovehaly/overeni/firmy-widget-1440.png) · [Mobil](plachtovehaly/overeni/firmy-widget-390.png). Zbývá vybrat finální podobu podle dojmu zadavatele.

### 18. 11. 2026 — finální podoba hodnocení

- **Vlastní karta schválena a ponechána; zkušební prvky odstraněny:** po vizuálním porovnání zadavatel zvolil původní kartu v designu obchodu. Vzhled a obsah → Titulní strana: odstraněna pouze sekce `hodnoceni-firmy-widget` s odznakem a iframe; původní karta, její datum, citace, odkaz i kontaktní odstavec zachovány. Znovu načtené uložení a veřejná homepage ověřeny při 390/1440 px, bez zkušebních prvků a vodorovného přetečení; snímky vizuálně zkontrolovány. [Zdroj](../src/plachtovehaly/shoptet/titulni-strana.html) · [Mobil](plachtovehaly/overeni/firmy-final-390.png) · [Počítač](plachtovehaly/overeni/firmy-final-1440.png). Navazuje na dnešní zkoušku widgetu; jeho samostatný HTML blok zůstává pouze jako nepoužitý podklad.
- **Údržba hodnocení — schváleno:** ručně jednou měsíčně nebo při nové recenzi ověřit skóre, počet a datum; občas obměnit skutečnou citaci s autorem a datem. Automatické obnovování řešit až při výraznějším přibývání recenzí. Navazující úkoly jsou v průběžné údržbě výše, nejde o nastavenou automatizaci. [Správa](plachtovehaly/ADMINISTRACE.md#hodnocení-firmy-na-homepage).

### 18. 11. 2026 — oddělení závěrečného kontaktu

- **Kontaktní blok homepage — nasazeno a ověřeno:** Vzhled a obsah → Titulní strana, odstavec `dh-contact-note` má nově odstup 48 px nad blokem, jemný zelený podklad, zaoblení a vnitřní odsazení. Otázka „Potřebujete jiný rozměr?“ je zvýrazněná a oddělená od úvodního textu. Původní text, telefonní a e-mailový odkaz zachovány; znovu načtené uložení potvrdilo, že okolní obsah nebyl změněn. Veřejná a vizuální kontrola při 390/1440 px bez vodorovného přetečení. Bez zbývající práce. [Zdroj](../src/plachtovehaly/shoptet/titulni-strana.html) · [Mobil](plachtovehaly/overeni/home-kontakt-390.png) · [Počítač](plachtovehaly/overeni/home-kontakt-1440.png).

### 19. 11. 2026 — analýza přechodu domény z WEXBO

- **Doména a ukončení WEXBO — analyzováno, nenasazeno:** porovnána migrační mapa a oficiální nápovědy WEXBO/Shoptet; popsáno přesměrování původní domény, alternativa zachování hlavní domény, neprodloužení WEXBO a podmínky zachování domény, DNS, pošty a dat. Konkrétní registrátor, držitel a expirace původní domény zůstávají neověřené. Žádné služby ani DNS změněny nebyly. Postup a odkazy: [Migrace](plachtovehaly/MIGRACE.md#analýza-domény-a-ukončení-wexbo--19-11-2026). Zdroj: dnešní chat „Zanalyzuj mi přechod z toho současného wexbo eshopu“.

- **Původní doména — připravena v Shoptetu 19. 11. 2026:** na žádost zadavatele přidán záznam 1237637 pro plachtovehaly-agrodabaki.cz s cílem `*`. Uložení potvrzeno načtením detailu i přehledu v nové relaci. DNS u WEXBO nezměněno; oba veřejné obchody odpověděly HTTPS 200 na dosavadních adresách. Hlášení nesprávných DNS hodnot je očekávané. Zbývá dokončit mapu URL a provést přepnutí i závěrečné testy dle otevřených úkolů. [Správa, kontrola a návrat](plachtovehaly/MIGRACE.md#příprava-domény-v-shoptetu--19-11-2026).

### 19. 11. 2026 — vypnutí interních přesměrování

- **Všech 143 interních pravidel — odstraněno a ověřeno:** na výslovné přání zadavatele před spuštěním obchodu, Marketing → Základní SEO → Přesměrování adres (URL). CSV zazálohováno, po hromadném smazání a novém načtení žádné položky. Všech 141 současných produktových adres vrací přímo HTTP 200; homepage, Mapa webu a produktové detaily neobsahují odkazy na odstraněné zdroje. Řemen B 17 ověřen při 390/1440 px; stará adresa konkrétní délky ze snímku vrací 404, prodej pokračuje na společné kartě s variantami. Nahrazuje dřívější rozhodnutí o zachování interních aliasů; produkty ani samostatná příprava domény WEXBO nezměněny. Bez zbývající práce v tomto rozsahu. [Správa, záloha a ověření](plachtovehaly/ADMINISTRACE.md#interní-přesměrování-vypnuta--19-11-2026). Zdroj: tento chat se žádostí o vypnutí interních přesměrování a snímkem řemenu B 17.

### 19. 11. 2026 — úklid nepoužívaných dostupností

- **Nepoužívané „nedostupné“ — odstraněno:** Nastavení → Produkty → Dostupnosti, ID 71, nula vazeb v obou sloupcích; zmizení ověřeno v přehledu i selectu skladu. Kontrola zahrnula celý katalog včetně archivních položek. „vyprodáno“ (68) ponecháno pro 10 archivních kódů, „na dotaz“ (77) pro dvě varianty včetně prodejní 1000324. Ostatní vlastní dostupnosti jsou používané, systémové zachovány. Zadavateli vysvětlen rozdíl dostupnosti při kladné zásobě a po vyprodání. [Správa, záloha a kontrola](plachtovehaly/ADMINISTRACE.md#sloupce-dostupnosti-a-úklid-nabídky--19-11-2026). Bez zbývající práce v zadaném rozsahu odstranění nepoužívaných položek; zdroj: tento chat se dvěma snímky sloupců a selectu skladu.

### 19. 11. 2026 — sjednocení dostupností bez duplicit

- **Vyprodáno a Na dotaz — sjednoceno a ověřeno:** navazující výslovný pokyn zadavatele mění předchozí ponechání použitých duplicit. Produkty → Sklad: 10 vazeb z ID 68 na systémové −2 a dvě z 77 na systémové −5; poté Nastavení → Produkty → Dostupnosti, odstraněna nepoužívaná ID 68/77. Nabídka má 28 stavů bez duplicit podle velikosti písmen. Export všech 448 kódů před/po potvrdil jen 12 změn dostupnosti, ostatní data včetně zásob a pravidel nákupu zachována. Veřejný detail varianty 1000324 vizuálně ověřen při 390/1440 px s textem Na dotaz. Bez zbývající práce. [Správa, zálohy a protokol](plachtovehaly/ADMINISTRACE.md#sjednocení-velikosti-písmen--19-11-2026). Zdroj: tento chat, pokyn sjednotit casing obou dostupností.

## Zdroje a dohledatelnost rekonstrukce



Revize 17. 11. 2026 prošla historii dostupných chatů projektu podle přiřazení projektu i pracovního adresáře, včetně archivu. Dlouhé vlákno migrace bylo čteno po stránkách do začátku; u nadlimitního vlákna fotografií byly doplněny zprávy z jeho lokálního záznamu. Seznam níže umožňuje dohledat konkrétní rozhodnutí bez kopírování celých chatů a citlivých pracovních dat.

- „Naplánovat migraci na Shoptet“ — původní zadání, 12 ukázek, realistické košíky, hlavičky/patičky, Titan, publikace a zadání historie; ID 01a1d40c-534d-73f1-881e-bc85f042dfe1.
- „Shoptet migration“ — založení, importy, varianty, URL, katalog, doprava, právní obsah, identita a reorganizace; ID 01a1dfc1-7541-7782-b1be-21874807b9bb.
- „Doporuč server pro agrodabaki.cz“ (archivovaný) — hosting, návrhy a produkční Panorama; ID 01a1e004-8950-7ae0-9927-828b18619416.
- „Navrhni varianty loga“ — pět směrů, deset žlutočerných návrhů a vyhlazení písma; ID 01a1e0ce-e9d0-7701-8a42-7ab152aa8ab4.
- „Načti plán úprav e-shopu“ — osm produktů na homepage; ID 01a1e8c3-234d-7b03-9df1-3f1c288bfa8d.
- „Analyzuj ikony hlavního menu“ — ikony, formuláře, tabulky, videa a jejich vrácení; ID 01a1e9d9-0033-74c3-b71a-ee21a758bc53.
- „Přesunout produkty do kategorie“ — koně a Lesní technika, rušení prázdných podkategorií; ID 01a1e9e5-34e3-7791-a620-6687f192c31b.
- „Prozkoumej obsah homepage e-shopu“ — Firmy.cz, kontakty a čekání na oficiální widget; ID 01a1e9f1-fff1-78a1-85cb-fd53311caee5.
- „Upravte zásady ochrany osobních údajů“ — publikace a Google Analytics; ID 01a1e9f4-6bf1-75c0-99bf-6ca769e22ff0.
- „Doplnit pravou stranu patičky“ — skupiny odkazů, vizitka, e-mail a zarovnání; ID 01a1ea03-2767-78d0-ac78-44ab2bb95816.
- „Vygeneruj fotomontáž malé haly“ — dvě vizualizace pro představu velikosti; ID 01a1ea06-d7ae-7a92-9f45-d1c2c99893b9.
- „Zobrazit barvu u přístřešku Animal“ — pevná barva Animal a tří zastřešení; ID 01a1ea15-ba95-7f01-b620-e4b6ec573d84.
- „Redesignovat mapu webu e-shopu“ — fotografický rozcestník a 141 produktů; ID 01a1ea25-8963-7010-937a-86df8080ae72.
- „Ověřit štítkování produktů v Shoptetu“ — Novinka/Akce, DPH a slevy; ID 01a1ea35-75e9-7eb1-9daf-9fe30970eee6.
- „Analyzuj SEO témata pro haly“ — osm článků, Poradna a pravidlo Pythonu; ID 01a1ea39-8fc7-7412-8474-54040bff3a65.
- „Analyzovat cover obrázky dlaždic“ — audit, AI pilot, schválení, 15 coverů a úklid originálů; ID 01a1ea40-f942-7fe3-90c7-93a4560d6edd.
- „Vyjasnit stav nedostupnosti v e-shopu“ — sjednocení dostupností a výjimky nákupu do minusu; ID 01a1ea46-cadd-7953-a6a8-22ce46cedc58.
- „Vycentrovat výhody na homepage“ — vystředění a zmenšení mezery; ID 01a1ea66-c105-72f1-bb71-642680ac4e22.
- [Původní plán k 16. 11. 2026](plachtovehaly/historie/PLAN-2026-11-16.md) — dobové počty, původní zadání a odkazy na ověřovací snímky; checkboxy v archivu nejsou aktuální TODO.
- [Předání správci](plachtovehaly/PREDANI.md) a [administrace](plachtovehaly/ADMINISTRACE.md) — aktuální provozní postupy; [migrace](plachtovehaly/MIGRACE.md) a [firemní web](agrodabaki/NASAZENI.md) upřesňují místa správy a přepnutí.

Pro 14. 11. 2026 nebyl v dohledaných podkladech identifikován samostatný doložený výsledek; datum se nedoplňuje odhadem. Nové práce z rozpracovaných chatů přibývají až po doloženém výsledku. Při dalších zápisech dodržujte [pravidla vedení plánu a historie](../AGENTS.md#vedení-plánu-a-historie).

### 19. 11. 2026 — provozní návod katalogu pro předání Codexu

- **Návod správy katalogu — doplněn:** samostatný postup pro dostupnosti a nákup do minusu, sjednocené názvy stavů, založení produktu a varianty, SKU, parametry, filtry, pojmenování, fotografie, ceny, URL, importy, návrat a kontrolu výsledku. Propojen z AGENTS.md, rozcestníku, administrace a předání. Vychází z existujících projektových návodů a dnešních protokolů; neprovádí nové změny e-shopu ani nové nákupní testy. Zkontrolovány odkazy nového návodu a rozsah připraveného commitu. [Návod](plachtovehaly/katalog/SPRAVA-KATALOGU.md). Zdroj: tento chat, žádost připravit dokumentaci pro kolegův Codex. Bez zbývající práce v rozsahu sepsání návodu.


### 19. 11. 2026 — uložení celého pracovního stromu

- **Souhrnný commit projektových změn — připraven:** na výslovnou žádost zadavatele zahrnuta dosavadní necommitnutá dokumentace, zdroje, migrační podklady, ilustrace a ověřovací snímky. Přístupy a pracovní cache zůstávají ignorované; kontrola názvů souborů a textových signatur tajných údajů. Jde o uložení existující práce, nikoli nové nasazení ani opakování funkčních testů. Zdroj: tento chat, žádost „commitni prosím celý working tree“.
