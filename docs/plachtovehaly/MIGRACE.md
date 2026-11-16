# Import a přepnutí původní domény

[Mapa URL](../../src/plachtovehaly/migrace/mapa-url.csv) spojuje původní ID a URL s cílovou kartou, variantou, ID Shoptetu a výsledkem ověření. Na 16. 11. 2026 obsahuje 332 produktových ID. Na jednom cíli se může sejít více zdrojových adres.

## Příprava a import

1. V Shoptetu pořiďte aktuální kompletní XML export produktů. Ověřte ceny, sklad a dostupnost proti podkladům firmy. Pro návrat uchovejte také popisy, parametry, fotografie a pořadí variant. Citlivé exporty patří mimo Git.
2. [Nástroje](../../src/plachtovehaly/tools/) používají Python 3 a knihovnu lxml. Argumenty zjistíte např. příkazem `python src/plachtovehaly/tools/priprav_sedm_variant.py --help` z kořene. Generátor potřebuje čerstvý export, schéma Shoptetu products-complete-v10.rng včetně závislostí a cestu pro výstup. Starší dávky mají vlastní očekávaný vstup popsaný v tematických záznamech; vstupy do pracovní cache obstarejte pro konkrétní dávku.
3. [Historická XML a manifesty](../../src/plachtovehaly/migrace/) zachycují obchodní údaje v okamžiku importu. Pro další změnu připravte nový dílčí soubor podle konkrétních SKU a ověřte ho schématem. Dávka sedmi bílých variant už byla nasazena. [Podrobný příklad](katalog/sedm-variant-import.md)
4. V Produkty → Import zvolte dílčí aktualizaci se zachováním neuvedených produktů a variant. Zkontrolujte volby pro prázdná pole a změnu URL. Po importu projděte protokol a porovnejte nový úplný export se zálohou podle SKU, cen, skladu, parametrů, dostupností a galerie. Vyberte novou kombinaci v detailu a porovnejte SKU a cenu v košíku.
5. Při chybě zjistěte z protokolu, co už se zpracovalo. Připravte opravu jen pro zasažené položky ze zálohy a samostatně vyřešte případné nově založené varianty. Po kontrole aktualizujte mapu.

## Přepnutí

Původní WEXBO zatím přijímá návštěvníky z firemního webu. Nová subdoména má doložený CNAME na www.myshoptet.com u ACTIVE 24. Před přepnutím původní domény zkontrolujte její oba tvary, DNS, certifikát a připravené seznamy pro [produkty](../../src/plachtovehaly/migrace/presmerovani-wexbo-produkty.csv), [kategorie](../../src/plachtovehaly/migrace/presmerovani-wexbo-kategorie.csv) a [stránky](../../src/plachtovehaly/migrace/presmerovani-wexbo-stranky.csv). V Shoptetu zachovejte existující pravidla. Po změně ověřte původní URL → 301 → cílová stránka s 200, objednávku a případné chyby 404. Aktualizujte odkaz na [firemní prezentaci](../agrodabaki/NASAZENI.md) podle schváleného data přepnutí.
