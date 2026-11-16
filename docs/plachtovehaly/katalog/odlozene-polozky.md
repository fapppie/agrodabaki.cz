# Odložené nabídky WEXBO před přepnutím

Dne 16. 11. 2026 odpovědělo všech 27 odložených produktových detailů a tři původní výpisy HTTP 200. Na všech 141 veřejných kartách Shoptetu z migrační mapy bylo nalezeno 305 různých SKU. Žádný z 27 odložených kódů se mezi nimi nevyskytuje. U sedmi bílých variant stačí k odstranění původní překážky vlastní údaje na WEXBO. Zbývajících 20 kódů má otevřenou technickou nebo identifikační otázku. Výchozí adresy všech jednotlivých nabídek jsou v [mapě URL](../../../src/plachtovehaly/migrace/mapa-url.csv).

## Sedm variant nasazených 16. 11. 2026

| WEXBO kód | Co potvrzuje jeho vlastní stránka | Cílová rodina po doplnění varianty |
| --- | --- | --- |
| 1000010 | Bílá 203012 R, délka 9,15 m, gramáž 750 g/m². Vlastní popis uvádí nosný profil 70 × 42 × 1,5 mm. | [Oblouková hala se zipovými vraty](https://plachtovehaly.agrodabaki.cz/obloukova-hala-se-zipovymi-vraty/) |
| 1000331, 1000228 | Bílé modely 405021DP délky 15,25 m a 406021DP délky 18,3 m mají vlastní technické popisy. První má šest setů, druhý sedm, oba rozteč 3,05 m. Chybějící popis se týká jejich zelených protějšků. | [Sedlová hala řady 40](https://plachtovehaly.agrodabaki.cz/sedlova-hala-rady-40/) |
| 1000351, 1000352, 1000353, 1000354 | Bílou u všech čtyř modelů potvrzuje název i popis. Jde postupně o délky 15,25 / 18,3 / 21,35 / 24,4 m. | [Sedlová hala řady 26](https://plachtovehaly.agrodabaki.cz/sedlova-hala-rady-26/) |

Dne 16. 11. 2026 byl připraven [dílčí XML import a postup kontroly](sedm-variant-import.md). Zahrnuje sedm cen a skladových stavů, 26 fotografických odkazů a aktualizované srovnávací tabulky. Zbývá aktualizovat podklad v den importu, provést import a ověřit každé SKU v košíku. Přesměrování je samostatný následný krok.

## Otázky pro provozovatele k 20 kódům

| Kódy | Co potřebujeme rozhodnout |
| --- | --- |
| 1000011, 1000417, 1000418, 1000419, 1000420 | Jaká je podle výkresu jednotka posledního rozměru nosného profilu 70 × 42 × 1,5? Nabídky píší „1,5 m“. Potvrdit pro zelenou 203012 R a obě barvy modelů 203612 R a 205412 R. |
| 1000106, 1000109 | K jakým verzím mulčovače AGF patří přední kryty řemenu za 499 Kč? Dodat označení dílu nebo výkres upevnění. Pokud jde o jeden díl, určit prodejní kód a potvrdit stav skladu. |
| 1000386, 1000387 | Je výbava zelených 405021DP a 406021DP shodná s bílými stejného modelu včetně profilů, vrat a plachty? Zelené vlastní technický popis nemají. |
| 1000244 | Jakou barvu má plachta modelu 50 120 23 DP, 15,25 × 36,6 m? |
| 1000315, 1000316, 1000328 | Potvrďte jmenovitou délku 3312017DP a 3310017DP. Nadpisy uvádějí 36 a 30 m, rozteče a počet polí dávají 36,6 a 30,5 m. |
| 1000346, 1000347 | Kolik obloukových setů a jakou rozteč má 40m hala s navijákem? Obě barvy uvádějí 19 setů v rozteči 2 m. Dodat výkres 40m provedení. |
| 1000381, 1000382, 1000383, 1000384 | Potvrďte barvu všech čtyř plachet řady 26. V názvu mají vojenskou zelenou, text uvádí celou bílou halu. |
| 1000391 | Dodat technický list PP337020DP 10 × 21,35 m v bílém provedení. Zdroj nemá technický popis. |

## Tři původní výpisy

| Výpis | Pokrytí v novém katalogu | Rozhodnutí před přepnutím |
| --- | --- | --- |
| Nože (31) | Všech 8 z 8 kódů je v prodeji na šesti kartách. Šest kódů vede do Nože, kladívka a ostří. Hrot 1000156 patří k rotačním branám a nůž 1000230 ke špalíkovačům. | Má původní odkaz ukazovat celý výběr? V tom případě připravit společný výpis nebo doplnit vedlejší zařazení a ověřit všech osm kódů. |
| Univerzální náhradní díly (33) | Všechny 4 ze 4 položek jsou dohledatelné. Kódy 1000160, 1000161 a 1000163 vedou do Ložiska a převodovky. Kolečko 1000235 patří do Díly k sekačkám. | Potvrdit, zda stačí nadřazený rozcestník Náhradní díly ke strojům, nebo má vzniknout výpis těchto čtyř dílů. |
| Výprodej (62) | Ze šesti původních SKU jsou v Shoptetu čtyři: sekačky 1000232 a 1000233 a lžíce 1000188 a 1000189. Dvě barevné varianty haly 1000346 a 1000347 čekají na výkres. | Které konkrétní SKU mají být ve výprodeji a za jaké ceny? Před přesměrováním vytvořit nebo vybrat odpovídající výpis podle potvrzené akční nabídky. |
