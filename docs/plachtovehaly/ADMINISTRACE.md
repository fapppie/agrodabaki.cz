# Kde udělat změnu v Shoptetu

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

## Nasazení nebo vrácení bloku

1. Zkopírujte právě uložené znění dotčeného pole z administrace do lokální pracovní zálohy. Porovnejte je se [zdroji](../../src/plachtovehaly/shoptet/). Jedno pole záhlaví či zápatí může obsahovat několik bloků.
2. Nahraďte jen upravovaný blok a zachovejte okolní nastavení. Uložte, znovu otevřete editor a ověřte uložené znění.
3. Na veřejné stránce otestujte dotčenou funkci v čistém okně na telefonu a počítači. Při regresi vraťte původní obsah dotčeného bloku a test opakujte. Zapište výsledek do [plánu](../PLAN.md).

### Složení polí ověřené 16. 11. 2026

Celý obsah obou polí byl v administraci porovnán se zdrojovými soubory. Záhlaví obsahovalo postupně [boční panel](../../src/plachtovehaly/shoptet/bocni-panel.html), [CSS náhledů menu](../../src/plachtovehaly/shoptet/menu-nahledy.css) uvnitř elementu `<style id="dabaki-menu-fotografie">` a [titulní stranu](../../src/plachtovehaly/shoptet/titulni-strana-vzhled.html). V zápatí následoval za [konfigurátorem](../../src/plachtovehaly/shoptet/vyber-haly.html) [postranní košík](../../src/plachtovehaly/shoptet/kosik-v-kategorii.html). Po odečtení těchto pěti bloků zbyly v obou polích jen bílé znaky.
