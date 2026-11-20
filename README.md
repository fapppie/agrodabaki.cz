# Agro Dabaki

Tento repozitář předává dva samostatně provozované weby. **agrodabaki.cz** je statická firemní prezentace. **plachtovehaly.agrodabaki.cz** je e-shop provozovaný v Shoptetu.

Začněte v [rozcestníku podle úkolu](docs/README.md). [PLAN](docs/PLAN.md) uvádí stav migrace a zbývající práci. Pro Codex platí [pravidla projektu](AGENTS.md).

| Projekt | Kód a podklady | Provoz |
| --- | --- | --- |
| Firemní web | [Produkční soubory](src/agrodabaki/web/) · [návrhy](src/agrodabaki/navrhy/) | [Lokální náhled, SFTP a obnova](docs/agrodabaki/NASAZENI.md) |
| Plachtové haly | [Úpravy Shoptetu](src/plachtovehaly/shoptet/) · [migrační nástroje](src/plachtovehaly/tools/) · [galerie návrhů](src/plachtovehaly/ukazky/index.html) | [Správa Shoptetu a nasazení](docs/plachtovehaly/ADMINISTRACE.md) |

## První otevření u nového správce

Přístupy mají jednotný formát `KEY=value`: [prázdná šablona](accesses.example.txt), [význam klíčů a pravidla čtení](docs/plachtovehaly/AUTOMATIZACE.md#přístupy). Vyplněný `accesses.txt` zůstává pouze lokálně mimo Git.

Výchozí provoz po předání je Shoptet. Začněte [instalací automatizace a převzetím bez cache](docs/plachtovehaly/AUTOMATIZACE.md): verzovaný modul, závislosti, vlastní přístupy a čtecí zkouška přihlášení. Python a lxml níže potřebují jen některé historické generátory importů, nikoli běžná správa Shoptetu.

Otevřete kořen tohoto repozitáře v Codexu, aby se načetla pravidla AGENTS.md. Pro lokální prohlížení stačí prohlížeč; jednoduchý HTTP server lze spustit pomocí Pythonu 3. Pro generování importů navíc potřebujete knihovnu lxml. Přihlášení do Shoptetu, přístup k ACTIVE 24 a SFTP převezměte od majitele samostatně. Adresář `.shoptet-cache` obsahuje lokální exporty, zálohy a pracovní skripty Shoptetu; `.wexbo-cache` obsahuje pouze podklady a skripty původního WEXBO. Oba adresáře jsou ignorované Gitem a nejsou součástí předání. Migrační skripty mohou číst z obou složek, importní výstupy pro Shoptet patří do `.shoptet-cache`. Pro nové prostředí se potřebný export pořizuje znovu podle návodu k danému úkolu.
