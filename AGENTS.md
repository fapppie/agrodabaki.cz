# Práce s projektem

- Piš česky. Otevři [rozcestník](docs/README.md) a [aktuální plán](docs/PLAN.md), potom jen dokumentaci k danému projektu a úkolu. Starší evidenci načítej při dohledávání konkrétního rozhodnutí.
- Produkční prezentace patří do [src/agrodabaki/web](src/agrodabaki/web/); změny Shoptetu spravuj podle [administrace](docs/plachtovehaly/ADMINISTRACE.md). Ukázky Adaminu mají vlastní [pracovní strom](src/plachtovehaly/ukazky/); při změně zkontroluj dopad sdílených souborů group-a a shared na ostatní varianty.
- Změnu nákupní cesty otestuj od detailu přes košík po dotčený krok objednávky. Vzhled ověř na mobilu i počítači. Po nasazení zapiš do plánu datum, místo správy, výsledek kontroly a zbývající práci. Aktualizuj příslušný provozní návod a [předání správci](docs/plachtovehaly/PREDANI.md).
- Kategorie, názvy a navigaci navrhuj podle sortimentu a zákazníka. Před importem posuď model, parametry a kompatibilitu WEXBO. Provedení stejného výrobku sdruž pod varianty, samostatné alternativy propoj; řady 26 a 40 mají vlastní karty. Každému zdrojovému ID a URL přiřaď cíl. Zachovej SKU, cenu, dostupnost, fotografie a odlišující parametry. Obchodní údaje ověř proti aktuálním podkladům firmy.
- Pro český košík rozhoduje cena zboží včetně DPH. Do 100 000 Kč včetně GEIS, výše externí spedice.
- Přístupy ke správě jsou v lokálním ignorovaném souboru accesses.txt v kořeni. Předávej je bezpečně zvlášť. Hesla, tokeny ani exporty objednávek či zákazníků nepatří do Gitu, chatu ani logů. Lokální pracovní soubory v .wexbo-cache nejsou součástí předání.
