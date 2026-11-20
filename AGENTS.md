# Práce s projektem

- Pro změny katalogu načti [návod pro správce a přebírající Codex](docs/plachtovehaly/katalog/SPRAVA-KATALOGU.md): dostupnosti, produkty, varianty, názvy, parametry a ověření.

- Piš česky. Otevři [rozcestník](docs/README.md) a [aktuální plán](docs/PLAN.md), potom jen dokumentaci k danému projektu a úkolu. Starší evidenci načítej při dohledávání konkrétního rozhodnutí.
- Nové pomocné a automatizační skripty piš standardně v Pythonu 3, pokud příslušná část projektu nemá stanovený jiný jazyk nebo použitý nástroj nevyžaduje jiný runtime. Při úpravě existujícího skriptu zachovej jeho jazyk; zavedené postupy (např. Playwright v JavaScriptu) nepřepisuj jen kvůli této výchozí volbě.
- Produkční prezentace patří do [src/agrodabaki/web](src/agrodabaki/web/); změny Shoptetu spravuj podle [administrace](docs/plachtovehaly/ADMINISTRACE.md). Ukázky Adaminu mají vlastní [pracovní strom](src/plachtovehaly/ukazky/); při změně zkontroluj dopad sdílených souborů group-a a shared na ostatní varianty.
- Změnu nákupní cesty otestuj od detailu přes košík po dotčený krok objednávky. Vzhled ověř na mobilu i počítači. Po nasazení zapiš do plánu datum, místo správy, výsledek kontroly a zbývající práci. Aktualizuj příslušný provozní návod a [předání správci](docs/plachtovehaly/PREDANI.md).
- Kategorie, názvy a navigaci navrhuj podle sortimentu a zákazníka. Před importem posuď model, parametry a kompatibilitu WEXBO. Provedení stejného výrobku sdruž pod varianty, samostatné alternativy propoj; řady 26 a 40 mají vlastní karty. Každému zdrojovému ID a URL přiřaď cíl. Zachovej SKU, cenu, dostupnost, fotografie a odlišující parametry. Obchodní údaje ověř proti aktuálním podkladům firmy.
- Pro český košík rozhoduje cena zboží včetně DPH. Do 100 000 Kč včetně GEIS, výše externí spedice.
- Přístupy ke správě jsou v lokálním ignorovaném souboru accesses.txt v kořeni. Předávej je bezpečně zvlášť. Hesla, tokeny ani exporty objednávek či zákazníků nepatří do Gitu, chatu ani logů. Lokální pracovní soubory v `.shoptet-cache` (Shoptet) a `.wexbo-cache` (původní WEXBO) nejsou součástí předání. Nové zálohy, exporty a skripty ukládej podle systému; migrační skripty pro Shoptet čtou původní podklady z `.wexbo-cache` a výstupy ukládají do `.shoptet-cache`.

## Vedení plánu a historie

- [PLAN.md](docs/PLAN.md) je společný aktuální plán i historie celého projektu, včetně firemního webu, migrace, návrhů a provozních rozhodnutí. Otevřené úkoly jsou nahoře, historie je členěná podle dnů a témat.
- Piš **jeden odrážkový bod pro jednu myšlenku nebo jeden samostatný úkol (job)**. Nespojuj nesouvisející práce do souhrnné odrážky ani tabulkového řádku. Ověření a výsledek patří k danému úkolu; samostatný zbývající úkol patří do vlastního checkboxu.
- Po každém dokončeném úkolu zapiš do příslušného dne stručný název, výsledek, místo správy nebo soubor, provedenou kontrolu a odkaz na podklady. Rozlišuj návrh, schválené rozhodnutí, přípravu, nasazení a ověření. Nenasazený návrh ani neprovedený test neoznačuj za hotový.
- Datum vztahuj k provedení práce v časovém pásmu Europe/Prague, ne ke dni dodatečného zápisu. Při zpětném doplnění uveď zdrojový chat nebo datovaný protokol; nejisté datum označ, nevymýšlej je.
- Při dokončení odstraň úkol z otevřených bodů a zachovej výsledek v historii. Při změně rozhodnutí ponech původní krok a doplň nový krok s návazností a dnešním stavem. Starší práci nenahrazuj pouhým odkazem do archivu.
- Při rekonstrukci historie projdi relevantní aktivní i archivované projektové chaty a porovnej je s dokumentací. Historický stav odliš od aktuálního; neověřenou vzpomínku nepovažuj za důkaz nasazení. Nepřenášej hesla, tokeny ani osobní údaje zákazníků.
- Před zápisem načti poslední verzi PLAN.md a zachovej mezitím přidané záznamy z ostatních chatů. Podrobný provozní postup patří do tematického návodu, plán na něj odkazuje.

## Přístup do administrace Shoptetu

- Pro správu používej samostatnou relaci prohlížeče na pozadí. Nevyžaduj otevření ani ovládání uživatelova Chromu, pokud lze úkol provést samostatně. Nejprve ověř dostupné nástroje a dosavadní postupy projektu.
- Přenositelný základ automatizace je [session.cjs](src/plachtovehaly/tools/browser/session.cjs), instalace a čtecí test jsou v [návodu převzetí](docs/plachtovehaly/AUTOMATIZACE.md). Používá Playwright se samostatným headless Chromium a pojmenovanými přístupy v `accesses.txt`, nikoli veřejné API Shoptetu. Běžná správa po předání nevyžaduje původní cache ani WEXBO. Před použitím skriptu zkontroluj jeho rozsah a vedlejší účinky. Použij způsob ovládání povolený nástroji aktuálního chatu; dostupný samostatný in-app browser je také vhodný.
- Opakovaně používané nástroje ukládej do verzovaného `src/plachtovehaly/tools`; do cache patří jejich pracovní data a jednorázové pokusy. Historické migrační nástroje nejsou startovací postup pro běžnou správu Shoptetu.
- Administrace je na `https://plachtovehaly.agrodabaki.cz/admin/`, případně `https://828678.myshoptet.com/admin/`. Před zadáním přístupů ověř cílovou doménu. Přístupy načítej bez vypsání do chatu či logů.
- Selhání ovládání nativního okna neznamená, že administrace není dostupná samostatnou relací. O zásah uživatele požádej až při konkrétní překážce, kterou nelze vyřešit dostupným povoleným postupem; vysvětli, co přesně brání pokračování.
