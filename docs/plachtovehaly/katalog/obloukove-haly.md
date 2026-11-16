# Obloukové haly – návrh pro Shoptet

Pracovní návrh z 15. 11. 2026 pro kategorii **Obloukové haly**. V nabídce se zákazník nejprve rozhoduje, jak velkou halu může postavit a zda do ní projede technikou. V přehledu proto zobrazit půdorys, výšku a způsob otevírání vrat. Na detailu uvést zvlášť výšku vrat a skutečnou průjezdnou výšku, pokud ji dodavatel udává.

Navržené filtry: šířka a délka v metrech, průjezdná výška v metrech a způsob otevírání vrat. Šířky 6,1 a 9,15 m mohou být rychlé volby v jedné kategorii. Náhradní oblouky patří do **Náhradní díly k halám**. Odkaz z konkrétní haly doplníme podle potvrzené kompatibility.

## Navržené produktové karty

Každý řádek představuje jednu kartu. Půdorys ponecháváme v názvu, aby šly haly porovnat už ve výpisu. Zákazník na detailu vybírá provedení plachty. U každého provedení zachováme vlastní fotky, prodejní kód, cenu, dostupnost a gramáž. V tabulce jsou původní ID WEXBO. Původní adresy jsou dohledatelné podle ID v [pracovní mapě](../../../src/plachtovehaly/migrace/mapa-url.csv). Obě adresy v páru mají po publikaci směřovat na příslušnou kartu. Skutečnou URL doplníme po založení v Shoptetu.

| Navržený název | Bílá · ID | Vojenská zelená · ID |
| --- | ---: | ---: |
| Oblouková hala 6,1 × 7,3 m (202412 R) | 1000335 | 1000336 |
| Oblouková hala 6,1 × 9,15 m (203012 R) | 1000010 | 1000011 |
| Oblouková hala 6,1 × 10,98 m (203612 R) | 1000417 | 1000418 |
| Oblouková hala 6,1 × 12,8 m (204212 R) | 1000013 | 1000014 |
| Oblouková hala 6,1 × 14,64 m (204812 R) | 1000337 | 1000338 |
| Oblouková hala 6,1 × 16,47 m (205412 R) | 1000420 | 1000419 |
| Oblouková hala 6,1 × 18,3 m (206012 R) | 1000016 | 1000017 |
| Oblouková hala 9,15 × 12 m s navijákem | 1000279 | 1000282 |
| Oblouková hala 9,15 × 16 m s navijákem | 1000317 | 1000318 |
| Oblouková hala 9,15 × 20 m s navijákem | 1000280 | 1000283 |
| Oblouková hala 9,15 × 26 m s navijákem | 1000281 | 1000284 |
| Oblouková hala 9,15 × 30 m s navijákem | 1000324 | 1000325 |
| Oblouková hala 9,15 × 40 m s navijákem | 1000347 | 1000346 |

## Co už víme z detailů

- **202412 R, 6,1 × 7,3 m.** Shodné rozměry a konstrukce, odlišná gramáž podle barvy. Nabídnout dvě volby „Bílá · 650 g/m²“ a „Vojenská zelená · 750 g/m²“. Gramáž patří ke konkrétnímu provedení. [Bílá](https://www.plachtovehaly-agrodabaki.cz/d/202412-r-plachtova-hala-61-x-73-x-366-m-bila-1000335/) · [Zelená](https://www.plachtovehaly-agrodabaki.cz/d/202412-r-plachtova-hala-61-x-73-x-366-m-vojenska-zelena-1000336/)
- **203012 R, 6,1 × 9,15 m.** Obě barvy mají podle detailů plachtu 750 g/m², šest oblouků a zipová vrata. Výška vrat je 3,10 m, průjezdná výška 3,00 m. U zelené ověřit jednotku tloušťky profilu. Stejně velká sedlová hala SP203012P má jiné zastřešení a jiná vrata. Může být alternativou na samostatné kartě. [Oblouková bílá](https://www.plachtovehaly-agrodabaki.cz/d/203012-r-plachtova-hala-61-x-915-x-366-m-bila-1000010/) · [Oblouková zelená](https://www.plachtovehaly-agrodabaki.cz/d/203012-r-plachtova-hala-61-x-915-x-366-m-vojenska-zelena-1000011/) · [Sedlová SP203012P](https://www.plachtovehaly-agrodabaki.cz/d/plachtova-hala-sp203012p-61m-x-915m-x-366m-bila-1000254/)
- **9,15 × 12 m s navijákem.** Obě barvy mají podle detailů plachtu 900 g/m², sedm oblouků po dvou metrech a vrata 3,50 × 3,90 m. Při testu nákupu ověřit omezení dobírky pro tuto halu. [Bílá](https://www.plachtovehaly-agrodabaki.cz/d/plachtova-hala-915-x-12-x-45-900g-m2-%2B-navijak-bila-1000279/) · [Zelená](https://www.plachtovehaly-agrodabaki.cz/d/plachtova-hala-915-x-12-x-45-900g-m2-%2B-navijak-vojenska-zelena-1000282/)

## Podklady ke zkušebnímu převodu

U modelů 204212 R a 204812 R uvádějí detaily bílou plachtu 750 g/m² a zelenou 650 g/m², tedy opačnou kombinaci než u 202412 R. U 206012 R mají obě barvy 750 g/m². Tyto hodnoty jsou zapsané u příslušných ID v mapě. U zelené haly délky 40 m (ID 1000346) ověřit výkres: uváděných 19 oblouků s roztečí 2 m dává mezi krajními oblouky 36 m. Pro posouzení potřebujeme rozměry krajních polí nebo přesahů.

Pro první převod použít 202412 R a samostatnou položku [náhradní oblouk, ID 1000059](https://www.plachtovehaly-agrodabaki.cz/d/z-kompletni-oblouk-hala-6-m-1000059/). U oblouku dodavatel uvádí pět oválných trubek a označení „hala 6 m“. Před propojením s konkrétním modelem ověřit jeho profil, uchycení a kompatibilitu. Dílu pro halu 9 m patří vlastní záznam (ID 1000203).

Před importem potvrdit kódy, ceny, dostupnost a fotografie obou provedení z aktuálního exportu. U zbývajících dvojic porovnat technické listy stejným postupem. Ve zdrojovém filtru se objevuje i šířka „9,15 cm“; rozměry převést na metry až po porovnání s detailem. V košíku zkontrolovat konkrétní vybrané provedení, cenu a kód. [Výpis šířky 6,1 m](https://www.plachtovehaly-agrodabaki.cz/e/plachtove-haly-obloukova-strecha-1/plachtove-haly-61m-6/) · [Výpis šířky 9,15 m](https://www.plachtovehaly-agrodabaki.cz/e/plachtove-haly-obloukova-strecha-1/plachtove-haly-915m-7/)
