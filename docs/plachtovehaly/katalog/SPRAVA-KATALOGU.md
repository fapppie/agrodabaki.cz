# Správa katalogu pro správce a přebírající Codex

Provozní pravidla a pracovní postup, stav ověřený **19. 11. 2026**. Tento návod je výchozí pro přidávání a údržbu produktů, variant, dostupností a parametrů. Čísla produktů, ceny, počty položek a sklad jsou časové snímky, nikoli trvale platné obchodní údaje. Pro dostupnosti, interní přesměrování a postupy katalogu má tento stav z 19. 11. přednost před staršími odstavci předání a migračními protokoly. Starší záznamy mohou popisovat dnes odstraněná pravidla nebo názvy.

## 1. Jak převzít práci bez historie chatu

Pro lokální `accesses.txt` platí [pojmenované klíče a prázdná šablona](../AUTOMATIZACE.md#přístupy). Shoptet používá `SHOPTET_EMAIL` a `SHOPTET_PASSWORD`; pořadí řádků není významové.

1. Přečtěte kořenový [AGENTS.md](../../../AGENTS.md), [rozcestník](../../README.md) a otevřené úkoly v [plánu](../../PLAN.md). Potom tento návod a jen tematické dokumenty k zásahu.
2. Ověřte `git status`, větev a remote. Cizí rozpracované změny nepřepisujte ani bez rozlišení nepřidávejte do commitu.
3. Živý stav katalogu zjistěte v administraci Shoptetu projektu **828678**. Historická XML v repozitáři nejsou záloha současných cen a skladů. Před hromadnou změnou stáhněte nový kompletní XML export přes Produkty → Export.
4. Přístupy si správce převezme bezpečně zvlášť. Lokální ignorovaný `accesses.txt`, `.shoptet-cache` (Shoptet) a `.wexbo-cache` (původní WEXBO) nejsou součástí klonu. Přístupy vyžádejte bezpečně zvlášť; novou `.shoptet-cache` vytvořte podle potřeby. Původní cache ani WEXBO nejsou podmínkou běžné správy. Nekopírujte hesla do dokumentace, proměnných v příkazové řádce ani logů.
5. Administrace: `https://plachtovehaly.agrodabaki.cz/admin/`, případně `https://828678.myshoptet.com/admin/`. Před přihlášením ověřte doménu. Použijte samostatnou relaci na pozadí a nástroje povolené daným prostředím. Pro Playwright použijte [verzovaný modul a postup instalace](../AUTOMATIZACE.md), který nevyžaduje interní runtime Codexu ani skript z pracovní cache. Nejde o veřejné API Shoptetu.
6. Zapište si dotčené ID karty, SKU variant, výchozí hodnoty a zamýšlený rozdíl. Při rozporu mezi starým protokolem a živým stavem změnu nejdříve objasněte; fyzický sklad, termín dodání a kompatibilitu potvrzuje firma.

[Mapa míst správy](../ADMINISTRACE.md) · [Předání](../PREDANI.md) · [Import a domény](../MIGRACE.md).

## 2. Karta, varianta a SKU nejsou totéž

| Pojem | Význam a pravidlo |
| --- | --- |
| Produktová karta | Společná veřejná stránka výrobku nebo konstrukční řady, s vlastním ID Shoptetu a URL. Obsahuje společný popis, kategorie a galerii. |
| Varianta | Konkrétní prodávané provedení. Má jednoznačnou kombinaci voleb a vlastní SKU, cenu, zásobu a dostupnosti. |
| SKU / kód | Identifikátor prodejního provedení. Zachovat původní kód; nesmí existovat dvakrát. Pro úplně nový výrobek získat kód od firmy a před založením hledat v celém katalogu. |
| ARCHIV-SP-… | Pomocný kód původní skryté karty po sloučení. Není nový prodejní výrobek. Nezveřejňovat, nepřidávat mu sklad a nezaměňovat ho s původním SKU. |
| Alternativa | Samostatný výrobek s podobným účelem; propojovat jako alternativu, ne jako variantu s předstíranou shodnou konstrukcí. |

Stejná konstrukce v jiné barvě či rozměru patří obvykle na společnou kartu. Odlišný model, pohon, připojení nebo neprokázaná kompatibilita vyžadují samostatné posouzení. **Řada 26 a řada 40 mají vždy samostatné karty.** Lžíce BH a BH 5 R jsou dvě rodiny; uvnitř rodiny se volí šířka. U štípaček WX a planýrovačů se konstrukce liší, proto je neslučovat jen podle rozměru.

Vytvářejte pouze skutečně prodávané kombinace, ne celý kartézský součin barev a délek. Před přidáním ověřte jedinečnost SKU i kombinace voleb. Podklady: [rodiny variant](rodiny-variant.md), [stroje a kompatibility](stroje.md), [příklad přidání sedmi variant](sedm-variant-import.md). Jejich datované ceny a termíny jsou historické.

## 3. Názvy a jednotný zápis

- Kartu pojmenujte českým druhem výrobku a rozlišující řadou/modelovým označením: **Sedlová hala řady 26**, **Oblouková hala s navijákem**, **Klínový řemen B 17**. Technické označení výrobce zachovejte, marketingové superlativy a dostupnost do názvu nepatří.
- Název společné karty nesmí popisovat jen jednu variantu. Délka, barva nebo velikost patří do voleb, pokud se na kartě mění. U samostatného dílu zahrňte doložený kompatibilní model, např. „… pro mulčovač AGF“.
- U konkrétní konfigurace uvádějte rozměry v pořadí **šířka × délka × výška**, například `9,15 × 30 m`. Desetinná čárka, mezera před jednotkou: `12,2 m`, `40 cm`, `296 mm`, `750 g/m²`. Modelový kód výrobce nepřepisujte na základě tohoto typografického pravidla.
- Zachovejte skutečně odlišné hodnoty `21,3 m` a `21,35 m`; nezaokrouhlujte je na jednu. Názvy barev přebírejte ze stávajícího parametru, např. **Bílá**, **Vojenská zelená**; nezakládejte paralelní „bílá“.
- Řemeny popisujte oběma doloženými délkami **Lw / Li**; neodvozujte kompatibilitu pouze z podobného rozměru.
- Před založením názvu parametru, hodnoty či dostupnosti hledejte shodu po ořezu mezer a bez ohledu na velikost písmen. Použijte existující hodnotu. Nezaměňujte však významově odlišné stavy.

## 4. Logika skladu a dostupností

### Tři oddělená nastavení

V **Produkty → Sklad** kontrolujte vždy společně počet kusů, oba sloupce dostupnosti a **Nákup do minusu**. U variant pracujte podle SKU, ne pouze podle názvu celé karty.

| Pole | Co určuje |
| --- | --- |
| Počet kusů | Evidovanou zásobu konkrétního SKU; musí odpovídat podkladům firmy. |
| Dostupnost | Text pro kladnou zásobu, typicky Skladem. Interní pole formuláře `availabilityInStockId`, v XML `AVAILABILITY_IN_STOCK`. Samotná volba Skladem není důkaz zásoby. |
| Dostupnost při vyprodání | Text pro vyčerpanou zásobu, včetně budoucího termínu. Pole `availabilityId`, v XML `AVAILABILITY_OUT_OF_STOCK`. |
| Nákup do minusu | Zda může zákazník objednat i bez dostatečné zásoby. Text „Na dotaz“ ani budoucí datum toto povolení samy nevytvářejí. |

V Nastavení → Produkty → Sklady → Nastavení je kontrola skladu zapnutá. Výchozí nákup do minusu je **Nepovolit – zobrazit produkt**, při zákazu systémové **Momentálně nedostupné**. Prázdná dostupnost při vyprodání se řeší podle globálního nastavení; nepoužívejte ji jako náhradu za potvrzený termín. Před změnou globálního pravidla posuďte celý katalog.

### Co nastavit pro konkrétní výrobek

| Situace | Zásoba a text | Pravidlo nákupu |
| --- | --- | --- |
| Výrobek fyzicky skladem | Skutečný počet, Dostupnost = Skladem. Druhý sloupec vyplnit podle toho, co má nastat po vyprodání. | Bez výjimky do minusu, pokud firma výslovně nepotvrdila další objednávky. |
| Není skladem a nelze objednat | Nulová zásoba, při vyprodání Momentálně nedostupné. | Zakázat nákup do minusu; ověřit, že vložení skutečně odmítne. |
| Potvrzený budoucí termín a povolené objednání | Nulová zásoba, při vyprodání Dostupné od DD.MM. RRRR. | Individuální výjimka do minusu jen podle potvrzeného obchodního režimu. |
| Firma přijímá objednávky bez pevného data | Při vyprodání Na objednání. | Povolení do minusu nastavit vědomě; samotný text nestačí. |
| Dostupnost se musí ověřit | Při vyprodání Na dotaz. | Zachovat schválený režim SKU. Na tomto projektu existuje prodejní varianta, kterou lze i v tomto stavu vložit do košíku; není to automaticky režim „pouze formulář“. |
| Staré archivní položky po sloučení | Zachovat skrytí, nulový sklad a pomocný kód. | Neobnovovat jejich prodej při úklidu dostupností. |

Příklad ověřený 19. 11.: bílá hala s navijákem 9,15 × 30 m, SKU 1000324, používá **Na dotaz** a má nákupní tlačítko. Tento příklad není automatické povolení do minusu pro jiné výrobky.

Kategorie může zobrazovat „Skladem“, pokud má karta skladovou variantu, i když vybraná jiná varianta není skladem. Kontrolujte konkrétní výběr na detailu a filtr Na skladě, ne jen titulek karty.

### Jediný stav pro každý název

| Stav | ID v tomto obchodě | Použití |
| --- | --- | --- |
| Skladem | −1 | Systémový stav kladné zásoby. |
| Vyprodáno | −2 | Systémový stav; od 19. 11. nahradil malé „vyprodáno“ u 10 archivních kódů. Pro novou neobjednatelnou nabídku používat výše uvedené pravidlo Momentálně nedostupné. |
| Momentálně nedostupné | −3 | Výchozí stav při nepovoleném nákupu do minusu; červený. |
| Objednáno | −4 | Samostatný systémový stav. Není totožný s Na objednání; nepřiřazovat jen kvůli podobnému slovu. |
| Na dotaz | −5 | Systémový stav; nahradil malé „na dotaz“ u prodejní i archivní varianty 1000324. |
| Na objednání | 32 | Vlastní zavedený stav, oranžový `#b85c00`. |
| Dostupné od … | Různá ID | Vlastní potvrzené termíny, oranžové `#b85c00`. |

K 19. 11. existuje 28 názvů bez duplicit lišících se velikostí písmen. Smazána vlastní ID 71 „nedostupné“, 68 „vyprodáno“ a 77 „na dotaz“. ID nehardcodovat bez ověření v cílovém účtu. [Protokol sjednocení](../overeni/dostupnosti-sjednoceni-2026-11-19.json).

### Editace, přidání a odstranění dostupnosti

1. Otevřete **Nastavení → Produkty → Dostupnosti**. Zkontrolujte počet přiřazení v obou sloupcích včetně skrytých a archivních produktů. Zálohujte upravovaná pole.
2. Pro jiný termín jediného SKU použijte existující odpovídající dostupnost, případně přidejte novou. Přejmenování sdílené dostupnosti změní text všem jejím uživatelům. Datum v názvu není plánovač automatického naskladnění.
3. Nový termín zakládejte až po potvrzení firmou, se zavedeným názvem `Dostupné od DD.MM. RRRR` a oranžovou barvou. Upravujete-li existující formát data, nejdřív ověřte rozsah všech jeho vazeb. Pole Naskladnění v hodinách, Doručení v hodinách a Google Nákupy vyplňujte podle skutečné lhůty a významu stavu, ne odhadem podle názvu.
4. Uložte, znovu načtěte detail a zkontrolujte název, barvu i zachování ostatních polí. Ve skladu přiřaďte stav konkrétním SKU do správného sloupce, uložte a ověřte po načtení.
5. Při slučování nejprve převeďte všechny vazby na cílový stav. Zachovejte zásoby a pravidla nákupu. Teprve při nulových přiřazeních a po kontrole výchozích nastavení smažte vlastní duplicitu. Systémové stavy ponechte.
6. Zkontrolujte select skladu, veřejnou variantu a případný vliv na objednání. Historické XML při importu převeďte na současné názvy, jinak může vrátit duplicity.

## 5. Parametry: volba, technický údaj a filtr

| Vrstva | Co do ní patří | Kontrola |
| --- | --- | --- |
| Parametry variant | Volby určující konkrétní SKU: délka, barva, rozměr, provedení, kompatibilní model. | Každá kombinace jednoznačná a skutečně dostupná v sortimentu. |
| Doplňkové / informační parametry | Společné vlastnosti karty a doložené technické údaje. | Hodnota nesmí nepravdivě platit pro všechny varianty; rozdíly patří do srovnávací tabulky nebo konkrétního provedení. |
| Parametry pro filtrování | Hodnoty potřebné pro výběr karty v kategorii. | Zahrnout všechny skutečné hodnoty prodejních variant; ověřit filtr veřejně. |

V detailu produktu otevřete **Parametry**; rozsah filtrů kategorií je v **Nastavení → Produkty → Parametrické filtry**, sdílené názvy a pořadí hodnot v **Parametry a příznaky**. Přesné označení ovládání ověřte v aktuálním rozhraní.

- **Haly, garáže, zastřešení:** doložená šířka, délka, výška, barva, gramáž a typ vrat; výška vjezdu jen s podkladem. Celková výška není průjezdná výška. Gramáž se může lišit podle konkrétní barvy a délky.
- **Stroje:** model, pracovní záběr, hmotnost, potřebný výkon traktoru, pohon a připojení; podle druhu nosnost, počet kladiv/nožů, délka vidlí či zpracovatelný průměr. Vyplnit jen relevantní a doložené údaje.
- **Náhradní díly:** kompatibilní model, rozměry, uchycení, strana, průměr či závit; u řemenů Lw a Li. Podobný vzhled nezaručuje kompatibilitu.
- **Animal a nepravidelné kombinace rozměrů:** zachovat přesné půdorysy; nezavádět filtrováním neexistující kombinace.

Číselné hodnoty řaďte podle velikosti po převodu jednotek, nikoli abecedně. Novou variantu promítněte do filtrů i tabulky v popisu. [Sedlové haly](filtry-sedlove.md) · [Ostatní kategorie](filtry-ostatni-kategorie.md).

## 6. Přidání nového produktu

1. Vyžádejte podklady: SKU, model, doložené parametry a kompatibilitu, cenu včetně DPH, sazbu, počet kusů, režim po vyprodání, fotografie a kategorii. Chybějící údaj označte k doplnění; nepřebírejte ho od sousední velikosti.
2. Vyhledejte SKU i odpovídající rodinu v **Produkty → Přehled**. Pokud jde o další provedení existující konstrukce, pokračujte přidáním varianty níže.
3. Založte novou kartu jako skrytou. Při kopírování podobné karty odstraňte převzaté SKU, cenu, zásobu, termíny, kompatibility a fotografie, které nepatří novému výrobku. Pole vyplňte ze skutečných podkladů.
4. Nastavte název, stabilní URL, krátký úvod a dlouhý popis. Popis má vysvětlit použití, výběr provedení, doložené technické údaje a obsah dodávky; rozdíly variant přehledně srovnat. Nedoložené nosnosti či přísliby dodání neuvádět.
5. Přiřaďte věcně správnou kategorii a **výchozí kategorii**, parametry, filtry a případné související či alternativní produkty. Kategorie slouží zákazníkovi, nikoli názvům importních dávek.
6. V ceníku a skladu ověřte cenu včetně DPH, sazbu podle firmy, skutečnou zásobu, obě dostupnosti a nákup do minusu. Projekt nyní používá standardní sazbu 21 %; při založení ji ověřte, nespoléhejte na automatický výchozí stav.
7. Nahrajte pravé fotografie; první je hlavní náhled. Ověřte galerii a fotky variant, pořadí a popisky. Existující vazby na fotografie nerušte naslepo. Náhledy projektu používají 4 : 3; ilustrační obrázek nezaměňovat za důkaz vlastností výrobku.
8. Příznaky Novinka a Akce nastavujte pro celou kartu pouze při odpovídajícím stavu jejích variant. Akce vyžaduje skutečnou slevu; Standardní cena není aktuální Cena. Ceny se nevymýšlejí kvůli přeškrtnutému štítku.
9. Projděte kontrolu v části 9, zveřejněte podle zadání a ověřte skutečný veřejný detail. Doplňte mapu URL, pokud jde o položku migrace; u nového sortimentu zapište ID/SKU a podklady do evidence úkolu.

## 7. Přidání nebo úprava varianty

1. Otevřete správnou kartu v Produkty → Přehled a její sekci variant. Zálohujte současná SKU a kombinace, galerie, ceny a sklad. Ověřte, že nová varianta skutečně patří do stejné rodiny.
2. Použijte stávající parametry a hodnoty; pořadí pro haly je šířka, délka, případně výška, barva. Vytvořte jen chybějící kombinaci, přidělte unikátní SKU. Neměňte osy celé existující rodiny jen kvůli jedné nové volbě bez posouzení všech variant.
3. Vyplňte vlastní cenu, zásobu, dostupnosti, pravidlo nákupu a fotku. Ověřte, že kopírování varianty nepřevzalo cizí termín nebo množství. Jedna skladová varianta nesmí automaticky změnit stav ostatních.
4. Aktualizujte společný popis a tabulku, pokud přibyl rozměr nebo technický rozdíl; společné parametry musí dál platit pro celou kartu. Doplňte všechny délky/šířky do filtrů.
5. Uložte a znovu načtěte. Porovnejte všechny původní varianty, nejen novou. Pak na veřejné kartě vyberte novou kombinaci a alespoň jednu původní, ověřte SKU, fotku, cenu a dostupnost a porovnejte je s košíkem.

Konfigurátor není jen standardní Shoptet: [vyber-haly.html](../../../src/plachtovehaly/shoptet/vyber-haly.html) je nasazován v Editor → HTML kódy → Zápatí. Jediná hodnota se předvoluje. U garáží existuje složený Půdorys, který skript rozděluje na šířku a délku; tento zavedený model nepřestavujte bez kontroly skriptu. Nový název parametru může vyžadovat úpravu konfigurátoru. Aktuální nasazený blok nejdřív přečtěte z administrace, lokální kopie nemusí být poslední.

## 8. URL, import a bezpečný návrat

Interní přesměrování nového obchodu byla 19. 11. na přání zadavatele odstraněna (143 pravidel). Používejte přímé URL současných karet. Smazání přesměrování nezveřejní starou skrytou kartu; stará adresa může vracet 404. Neobnovujte historická interní pravidla z migračních souborů. Přechod původní domény WEXBO a její původní cesty jsou samostatný úkol podle [migračního návodu](../MIGRACE.md).

Při změně URL aktualizujte interní odkazy v kategoriích, popisech, homepage, Mapě webu a relevantních blocích. Zkontrolujte automaticky vzniklá pravidla. Po ostrém spuštění se staré používané URL posuzují znovu podle návštěvnosti; rozhodnutí před spuštěním není trvalý zákaz účelných přesměrování.

Pro hromadnou změnu připravte dílčí import z **čerstvého exportu** podle [postupu importu](../MIGRACE.md). Validujte schéma a přesný rozsah, zachovejte položky mimo dávku a vědomě nastavte chování prázdných polí i URL. Staré XML může vrátit ceny, smazané dostupnosti nebo archivní karty. Výsledek prokazuje nový export a veřejná kontrola, ne samotná hláška o úspěšném importu.

Při chybě zastavte další dávky, zjistěte skutečně provedené změny a obnovte pouze dotčená pole/SKU ze zálohy. Nepřehrávejte celý starý export přes mezitím změněné objednávky, zásoby nebo jinou práci. Nové chybné karty nejdřív skryjte a prověřte vazby; mazání není výchozí způsob návratu.

## 9. Kontrola před označením úkolu za hotový

- Po novém načtení administrace jsou uložené správné hodnoty a žádné neplánované změny. Při hromadné práci porovnat exporty podle SKU: počet, jedinečnost, parametry, ceny, sklad, dostupnosti, viditelnost, nákup do minusu a fotografie.
- Veřejný detail vrací přímé HTTP 200, má správný název a URL. Nová varianta je vybratelná, nenabízejí se neexistující kombinace, sedí její SKU, cena, fotka a dostupnost.
- Kategorie, výchozí zařazení, filtr rozměru i Na skladě odpovídají skutečnému katalogu. Prověřit souběh filtrů a jejich vymazání.
- Zobrazení ověřit na mobilu i počítači (běžně 390 a 1440 px), včetně obrázků, tabulek, konfigurátoru a přetečení stránky.
- Při změně nákupní cesty projít **detail → košík → dotčený krok objednávky**. Ověřit vybranou variantu, množství a cenu; u nedostupné varianty skutečné odmítnutí nákupu. U výjimky do minusu vyzkoušet její účinek. České dopravě rozhoduje cena zboží s DPH: do 100 000 Kč včetně GEIS, výše externí spedice. Objednávku neodesílat jen kvůli kontrole výběru, pokud to úkol nevyžaduje. Použít čistou testovací relaci a odstranit vlastní testovací položky.
- Zapsat do PLAN.md datum Europe/Prague, jeden úkol na bod, co se změnilo, kde se spravuje, provedené kontroly a odkazy na protokol. Neprovedený test uvést výslovně. Otevřené otázky vést samostatně; aktualizovat provozní návod a předání.

## 10. Co AI nesmí domýšlet a co zbývá

Majitel potvrzuje fyzický sklad, ceny, termíny, kompatibility, technické parametry a obchodní režim objednání. Není-li údaj doložený, nevydávat odhad za vlastnost produktu. Rozpracovaná změna v Gitu ani soubor XML nejsou důkaz nasazení.

Při vydání tohoto návodu zůstává mimo jiné 20 odložených položek, údaje Animal 12 × 12 m, kompatibility řemenů B 17, část rozměrů dílů a boxů PRMH, doložení výšek vjezdu a předspouštěcí obnova cen/skladu. Aktuální seznam je vždy v PLAN.md. Návod nepředstavuje dokončenou migraci ani potvrzení těchto údajů.

Tento dokument vznikl z projektových pravidel, tematických návodů a živých kontrol dostupností z 19. 11. 2026. Popisuje postupy; při jeho sepsání nebyly vytvářeny nové produkty ani testovací objednávky.
