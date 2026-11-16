# Plán přechodu a předání

Stav k 16. 11. 2026. Firemní prezentace už směruje zákazníky do původního obchodu; nový Shoptet běží na vlastní subdoméně. Podle mapy má 312 zveřejněných prodejních kódů na 141 kartách a 20 položek čeká na ověření. [Mapa URL](../src/plachtovehaly/migrace/mapa-url.csv)

## Před přepnutím

| Oblast | Další práce a podmínka dokončení |
| --- | --- |
| Katalog | Vyřešit identitu, technické parametry a kompatibilitu zbývajících 20 položek s provozovatelem. Před přepnutím obnovit ceny, sklad a dostupnosti z aktuálních dat. [Odložené položky](plachtovehaly/katalog/odlozene-polozky.md) |
| Výběr a fotografie | Ověřit soulad rozměrů v konfigurátoru, filtrech a tabulkách. Pro filtr výšky vjezdu získat světlé výšky. Doplnit identifikované chybějící širokoúhlé fotografie zastřešení a velkých sedlových hal. [Fotografie](plachtovehaly/vzhled/nahledove-fotografie.md) |
| Menu a patička | Prověřit společný rozcestník hal na telefonu, zařazení příslušenství ke kontejnerům a rampy PD08B. Odebrat duplicitní odkazy na Kontakty a VOP z hlavního menu při zachování hlavičky a patičky. Vybrat cíl odkazu Mapa webu a otestovat jej v patičce. |
| Obsah a soukromí | Dokončit zásady po ověření analytiky, sociálních doplňků, logů a záloh. Provést první kontrolu dotazů a neaktivních účtů. Ověřit příjem skutečných dotazů z kontaktů i produktu. [Revize](plachtovehaly/pravni/ochrana-udaju-revize.md) |
| Nákup | Ověřit dopravu kolem hranice 100 000 Kč, osobní odběr a případné výjimky. Dokončit objednávku s převodem i dobírkou, ověřit skutečné doručení potvrzení, přílohu VOP, účet, splatnost, fakturu a návaznost v administraci. [Doprava a platby](plachtovehaly/objednavky/doprava-a-platby.md) |
| Přepnutí | Vyřešit cíle původních kategorií Nože, Univerzální náhradní díly a Výprodej. Ověřit mapu produktů, kategorií a stránek; po přepnutí otestovat 301 → 200, mobilní nákup a chyby 404. Aktualizovat dlaždici firemního webu. |
| Provoz | Identifikovat a uklidit zbývající demo data. Ověřit fakturaci Adaminu a předat správu účtů, domén, přístupy a běžnou práci s objednávkou majiteli. [Předání](plachtovehaly/PREDANI.md) |

## Rozhodnutí a dokončená práce

- **15.–16. 11. 2026.** Rozsah zakázky, cenová nabídka, obchodní dohody, všechny původní úkoly, testy a jednotlivá nasazení jsou zachovány v [úplném původním plánu](plachtovehaly/historie/PLAN-2026-11-16.md). Zaškrtávací políčka v něm odpovídají době zápisu. Pro další práci používejte tabulku výše a aktuální [předání](plachtovehaly/PREDANI.md).
- **16. 11. 2026.** Dokončen import sedmi bílých variant do tří samostatných modelových rodin, logo a transparentní favicona. Publikované VOP jsou přiloženy k prvnímu potvrzení objednávky. [Varianty](plachtovehaly/katalog/sedm-variant-import.md) · [VOP](plachtovehaly/pravni/obchodni-podminky-revize.md)
- **16. 11. 2026.** Zdroje a dokumentace obou projektů mají vlastní adresáře. Firemní web má samostatnou produkční složku pro SFTP. Navazující konfigurace pokračuje podle tabulky výše. [Rozcestník](README.md)

### Ověření reorganizace

Na místním HTTP serveru byla při 390 a 1440 px otevřena produkční prezentace, galerie šablon i ukázka Adaminu. Ověřeny byly oba cílové e-shopy a načtení lokálních souborů. Kontrola prošla místní odkazy v dokumentaci, jejich kotvy a relativní odkazy ve statických HTML. Všech pět migračních utilit spustilo nápovědu. Obsah záhlaví a zápatí byl porovnán čtením z administrace Shoptetu s pěti projektovými bloky. Reorganizace proběhla v repozitáři.
Zkouška na archivních vstupech po přesunu cest vytvořila totožné XML pro 137 karet strojů a 153 prodejních kódů. Ověřovač rodin úspěšně porovnal historický export se základním exportem a manifestem. Výstup testu vznikl v ignorované pracovní složce.
