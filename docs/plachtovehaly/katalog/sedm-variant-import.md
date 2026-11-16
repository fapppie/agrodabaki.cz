# Sedm bílých variant pro tři existující karty

Dne 16. 11. 2026 byl sestaven [dílčí import Shoptetu](../../../src/plachtovehaly/migrace/sedm-variant-import.xml) z úplného XML exportu administrace a živých nabídek WEXBO. Import byl nasazen 16. 11. 2026. Následný úplný export potvrdil 9, 9 a 13 variant na třech samostatných kartách. Všech 24 původních variant zachovalo údaje a původní fotografie zachovaly pořadí.

| Karta | SKU | Model | Šířka × délka | Cena vč. DPH | Počet ks | Dostupnost dle WEXBO |
| --- | --- | --- | --- | ---: | ---: | --- |
| Oblouková hala se zipovými vraty | 1000010 | 203012 R | 6,1 × 9,15 m | 46 900 Kč | 1 | skladem |
| Sedlová hala řady 26 | 1000351 | 265017DP | 8 × 15,25 m | 159 900 Kč | 3 | skladem |
| Sedlová hala řady 26 | 1000352 | 266017DP | 8 × 18,3 m | 179 900 Kč | 0 | 10. 12. 2026 |
| Sedlová hala řady 26 | 1000353 | 267017DP | 8 × 21,35 m | 199 900 Kč | 2 | skladem |
| Sedlová hala řady 26 | 1000354 | 268017DP | 8 × 24,4 m | 219 900 Kč | 2 | skladem |
| Sedlová hala řady 40 | 1000331 | 405021DP | 12,2 × 15,25 m | 239 900 Kč | 0 | 30. 11. 2026 |
| Sedlová hala řady 40 | 1000228 | 406021DP | 12,2 × 18,3 m | 264 900 Kč | 0 | 5. 12. 2026 |

Kód 1000010 má bílou plachtu 750 g/m², šest setů s roztečí 1,83 m, oválný profil 70 × 42 × 1,5 mm a balení 2,2 × 0,8 × 0,8 m o hmotnosti 430 kg. U řady 40 mají oba doplněné modely rozteč 3,05 m, první má šest setů a druhý sedm. U řady 26 WEXBO označuje fotografie za ilustrační. Barvu potvrzuje název i popis konkrétní nabídky. Při kontrole v náhledu prohlédnout hlavní snímek pro každou kombinaci. Původní nabídky lze dohledat podle SKU v [mapě URL](../../../src/plachtovehaly/migrace/mapa-url.csv).

## Obnovení a kontrola

1. V administraci Shoptetu stáhnout aktuální systémový **Kompletní export XML** a uložit ho do ignorované pracovní složky. Připravit schéma Shoptetu pro kompletní produktový import v10 včetně jeho závislostí.
2. Spustit `python src/plachtovehaly/tools/priprav_sedm_variant.py CESTA_K_EXPORTU CESTA_K_products-complete-v10.rng src/plachtovehaly/migrace/sedm-variant-import.xml` v prostředí s knihovnou lxml. Skript znovu načte údaje a fotografie WEXBO. Změna technického popisu, kolize kombinace i přítomnost přidávaného SKU v exportu zpracování zastaví k ruční kontrole.
3. Ověřeno proti exportu a schématu dne 16. 11. 2026. Karta 44 přechází z 8 na 9 variant, karta 164 z 5 na 9 a karta 203 z 11 na 13. Všech 24 dosavadních kódů má shodné parametry, XML pro ně posílá pouze kód a parametry. Původní galerie zůstávají na začátku ve stejném pořadí. Přibyly 4, 12 a 10 fotografických odkazů. Každý z 26 odkazů odpověděl daty JPEG. Popisy obsahují nové řádky srovnávacích tabulek a informační parametr Délka zahrnuje nové hodnoty.
4. Při nasazení zvolit dílčí aktualizaci a přidání variant na tři existující karty, bez mazání položek mimo tento soubor. Zkontrolovat načtení cen včetně DPH, skladů, termínů, fotografií a délkových filtrů. U nulového skladu s datem XML povoluje objednání. Předem ověřit, že Shoptet rozpoznal všechny tři datované dostupnosti a přiřadil nový sklad do správného skladu e-shopu.
5. Po importu znovu exportovat a porovnat původních 24 variant včetně cen a skladů. Pro všech sedm nových kódů vybrat bílou barvu, šířku a délku na veřejné kartě, přidat do košíku a porovnat SKU a cenu. Teprve potom aktualizovat stav v mapě URL a připravit přesměrování.

Po nasazení byla každá ze sedmi kombinací ověřena výběrem na detailu a přidáním do košíku při šířkách 390 a 1440 px. V košíku odpovídaly kód, délka, barva i cena. Mapa URL obsahuje cílové karty a sedm pravidel je připraveno pro přepnutí domény.
