# Sedlové haly

## Aktuální řada SP šířky 6,1 m

Zákazník na [společné kartě Shoptetu](https://plachtovehaly.agrodabaki.cz/sedlova-hala-sp/) vybírá jednu z devíti délek od 6,1 do 18,3 m a bílou nebo vojensky zelenou plachtu 750 g/m². Dne 15. 11. 2026 bylo sloučeno všech 18 provedení pod ID 83 se zachováním původních prodejních kódů. Při dalším importu použít [aktuální uspořádání řady SP](../../../src/plachtovehaly/migrace/sedlove-sp-konfigurator.xml) a před zápisem cen a množství převzít aktuální údaje. Starší soubor sedlove-shoptet.xml a přehled níže zachycují původní rozdělení na samostatné délky.

## Původní návrh před sloučením délek

Návrh z 15. 11. 2026 pokrývá 116 veřejných produktových adres. Na 76 kartách připadá 40 modelů na dvojice barevných provedení a 36 modelů má ve zdroji jediné provedení. ID, navržený název, provedení a důvod k ověření uvádí [mapování pro přípravu importu](../../../src/plachtovehaly/migrace/sedlove-haly.json). Podkladem jsou titulky a popisy všech 116 veřejných detailů a [původní kategorie](https://www.plachtovehaly-agrodabaki.cz/e/plachtove-haly-sedlova-strecha-47/).

V kategorii **Sedlové haly** lze začít půdorysem a zúžit výběr podle výšky vrat, umístění vstupu a konstrukce. V názvu zákazník uvidí šířku a délku, u hal s bočním vstupem nebo dvojitou konstrukcí také toto provedení. Výšku hřebene zobrazíme samostatně. Číselný odkaz na model zachová možnost dohledat díly.

| Modelové rozhodnutí | Co ukazuje původní nabídka |
| --- | --- |
| Dvě karty pro halu 10 × 18,3 m ve výšce 6,1 m | Model P336020DP má boční vstup a vrata 5,7 × 3 m. U PP336020DP mají vrata 4,26 × 4,26 m. Oba lze propojit jako alternativy. [P336020DP](https://www.plachtovehaly-agrodabaki.cz/d/plachtova-hala-p336020dp-10m-x-183m-x-61m-bila-1000268/) · [PP336020DP](https://www.plachtovehaly-agrodabaki.cz/d/pp336020dp-plachtova-hala-10m-x-183m-x-61m-bila-1000288/) |
| Jedna karta s volbou plachty pro SP202012P | Bílý i zelený detail uvádí 6,1 × 6,1 × 3,66 m, stejný profil, zipová vrata a gramáž 750 g/m². Sklad a cenu evidovat za každé provedení. [Bílá](https://www.plachtovehaly-agrodabaki.cz/d/plachtova-hala-sp202012p-61m-x-61m-x-366m-bila-1000253/) · [Zelená](https://www.plachtovehaly-agrodabaki.cz/d/plachtova-hala-sp202012p-61m-x-61m-x-366m-vojenska-zelena-1000260/) |
| Dvě karty pro haly 6,1 × 12,2 m | Model SP204012P má hřeben ve výšce 3,66 m. Model 204016DP má dvojitou konstrukci a hřeben 4,88 m. [SP204012P](https://www.plachtovehaly-agrodabaki.cz/d/plachtova-hala-sp204012p-61m-x-122m-x-366m-bila-1000255/) · [204016DP](https://www.plachtovehaly-agrodabaki.cz/d/plachtova-hala-204016dp-61m-x-122m-x-488m-900g-pvc-bila-dvojita-konstrukce-1000298/) |

## Co ověřit před převodem

- U zelených hal 1000381 až 1000384 odporuje jejich barvě věta v popisu o celobílé hale. Ověřit odstín, fotografii a text s firmou. [Příklad](https://www.plachtovehaly-agrodabaki.cz/d/265017dp-plachtova-hala-8m-x-1525m-x-518m-vojenska-zelena-1000381/)
- U 1000386, 1000387 a 1000391 chybí popis a u 1000244 také informace o barvě. Gramáž a barvu lze zákazníkovi slíbit jen podle podkladů konkrétní položky.
- Podle titulku má 1000315 délku 36 m, zatímco 12 polí po 3,05 m dává 36,6 m. U 1000316 a 1000328 uvádí titulek 30 m a deset polí vychází na 30,5 m. Potvrdit celkovou délku z výkresu. [Model 3312017DP](https://www.plachtovehaly-agrodabaki.cz/d/plachtova-hala-10-x-36-x-52-3312017dp-bila-1000315/)
- Řádky s otevřenou otázkou mají v JSON příznak `hold`. Při prvním importu ponechat celou dotčenou kartu k ověření. Rozhodnutí se týká 11 zdrojových ID v 10 modelech.

## Přehled všech karet

| Cílová karta | Výška hřebene | Původní ID a provedení |
| --- | ---: | --- |
| Sedlová hala 6,1 × 6,1 m (SP202012P) | 3,66 m | 1000253 Bílá · 750 g/m² / 1000260 Vojenská zelená · 750 g/m² |
| Sedlová hala 6,1 × 7,32 m s dvojitou konstrukcí (202416DP) | 4,88 m | 1000339 Bílá · 900 g/m² / 1000340 Vojenská zelená · 900 g/m² |
| Sedlová hala 6,1 × 7,62 m (SP202512P) | 3,66 m | 1000410 Bílá · 750 g/m² / 1000411 Vojenská zelená · 750 g/m² |
| Sedlová hala 6,1 × 9,15 m (SP203012P) | 3,66 m | 1000254 Bílá · 750 g/m² / 1000261 Vojenská zelená · 750 g/m² |
| Sedlová hala 6,1 × 9,76 m s dvojitou konstrukcí (203216DP) | 4,88 m | 1000296 Bílá · 900 g/m² / 1000370 Vojenská zelená · 900 g/m² |
| Sedlová hala 6,1 × 10,67 m (SP203512P) | 3,66 m | 1000412 Bílá · 750 g/m² / 1000413 Vojenská zelená · 750 g/m² |
| Sedlová hala 6,1 × 12,2 m (SP204012P) | 3,66 m | 1000255 Bílá · 750 g/m² / 1000262 Vojenská zelená · 750 g/m² |
| Sedlová hala 6,1 × 12,2 m s dvojitou konstrukcí (204016DP) | 4,88 m | 1000298 Bílá · 900 g/m² / 1000299 Vojenská zelená · 900 g/m² |
| Sedlová hala 6,1 × 13,72 m (SP204512P) | 3,66 m | 1000421 Vojenská zelená · 750 g/m² / 1000422 Bílá · 750 g/m² |
| Sedlová hala 6,1 × 14,64 m s dvojitou konstrukcí (204816DP) | 4,88 m | 1000322 Bílá · 900 g/m² / 1000323 Vojenská zelená · 900 g/m² |
| Sedlová hala 6,1 × 15,25 m (SP205012P) | 3,66 m | 1000306 Bílá · 750 g/m² / 1000374 Vojenská zelená · 750 g/m² |
| Sedlová hala 6,1 × 16,78 m (SP205512P) | 3,66 m | 1000423 Vojenská zelená · 750 g/m² / 1000424 Bílá · 750 g/m² |
| Sedlová hala 6,1 × 17 m s dvojitou konstrukcí (205616DP) | 4,88 m | 1000300 Bílá · 900 g/m² / 1000301 Vojenská zelená · 900 g/m² |
| Sedlová hala 6,1 × 18,3 m (SP206012P) | 3,66 m | 1000345 Bílá · 750 g/m² / 1000377 Vojenská zelená · 750 g/m² |
| Sedlová hala 6,1 × 19,52 m s dvojitou konstrukcí (206416DP) | 4,88 m | 1000302 Bílá · 900 g/m² / 1000303 Vojenská zelená · 900 g/m² |
| Sedlová hala 6,1 × 24,4 m s dvojitou konstrukcí (208016DP) | 4,88 m | 1000341 Bílá · 900 g/m² / 1000342 Vojenská zelená · 900 g/m² |
| Sedlová hala 7 × 9,15 m (233017DP) | 5,2 m | 1000414 Bílá · 900 g/m² |
| Sedlová hala 7 × 12,2 m (234017DP) | 5,2 m | 1000415 Bílá · 900 g/m² |
| Sedlová hala 7 × 15,25 m (235017DP) | 5,2 m | 1000416 Bílá · 900 g/m² |
| Sedlová hala 8 × 9,15 m (263017DP) | 5,18 m | 1000349 Bílá · 900 g/m² |
| Sedlová hala 8 × 12,2 m (264017DP) | 5,18 m | 1000350 Bílá · 900 g/m² / 1000378 Vojenská zelená · 900 g/m² |
| Sedlová hala 8 × 15,25 m (265017DP) | 5,18 m | 1000351 Bílá · 900 g/m² / 1000381 Vojenská zelená · 900 g/m² (ověřit) |
| Sedlová hala 8 × 18,3 m (266017DP) | 5,18 m | 1000352 Bílá · 900 g/m² / 1000382 Vojenská zelená · 900 g/m² (ověřit) |
| Sedlová hala 8 × 21,35 m (267017DP) | 5,18 m | 1000353 Bílá · 900 g/m² / 1000383 Vojenská zelená · 900 g/m² (ověřit) |
| Sedlová hala 8 × 24,4 m (268017DP) | 5,18 m | 1000354 Bílá · 900 g/m² / 1000384 Vojenská zelená · 900 g/m² (ověřit) |
| Sedlová hala 8 × 27,45 m (269017DP) | 5,18 m | 1000355 Bílá · 900 g/m² |
| Sedlová hala 8 × 30,5 m (2610017DP) | 5,18 m | 1000356 Bílá · 900 g/m² |
| Sedlová hala 9,15 × 9,15 m (303020DP) | 6,1 m | 1000256 Bílá · 900 g/m² / 1000263 Vojenská zelená · 900 g/m² |
| Sedlová hala 9,15 × 12 m (304020DP) | 6,1 m | 1000257 Bílá · 900 g/m² / 1000264 Vojenská zelená · 900 g/m² |
| Sedlová hala 9,15 × 15,25 m (305020DP) | 6,1 m | 1000304 Bílá · 900 g/m² / 1000319 Vojenská zelená · 900 g/m² |
| Sedlová hala 9,15 × 18,3 m (306020DP) | 6,1 m | 1000258 Bílá · 900 g/m² / 1000265 Vojenská zelená · 900 g/m² |
| Sedlová hala 9,15 × 21,35 m (307020DP) | 6,1 m | 1000309 Bílá · 900 g/m² / 1000321 Vojenská zelená · 900 g/m² |
| Sedlová hala 9,15 × 24,4 m (308020DP) | 6,1 m | 1000259 Bílá · 900 g/m² / 1000266 Vojenská zelená · 900 g/m² |
| Sedlová hala 9,15 × 30,5 m (3010020DP) | 6,1 m | 1000326 Bílá · 900 g/m² |
| Sedlová hala 10 × 9,15 m (333017DP) | 5,2 m | 1000327 Bílá · 900 g/m² / 1000425 Vojenská zelená · 900 g/m² |
| Sedlová hala 10 × 9,15 m (PP333020DP) | 6,1 m | 1000407 Bílá · 900 g/m² |
| Sedlová hala 10 × 12 m s bočním vstupem (P334020DP) | 6,1 m | 1000267 Bílá · 900 g/m² |
| Sedlová hala 10 × 12,2 m (334017P) | 5,2 m | 1000026 Vojenská zelená · 900 g/m² / 1000027 Bílá · 900 g/m² |
| Sedlová hala 10 × 12,2 m (PP334020DP) | 6,1 m | 1000287 Bílá · 900 g/m² |
| Sedlová hala 10 × 15,25 m (335017DP) | 5,2 m | 1000028 Vojenská zelená · 900 g/m² / 1000029 Bílá · 900 g/m² |
| Sedlová hala 10 × 15,25 m (PP335020DP) | 6,1 m | 1000362 Bílá · 900 g/m² |
| Sedlová hala 10 × 18,3 m (336017P) | 5,2 m | 1000030 Vojenská zelená · 900 g/m² / 1000031 Bílá · 900 g/m² |
| Sedlová hala 10 × 18,3 m (PP336020DP) | 6,1 m | 1000288 Bílá · 900 g/m² |
| Sedlová hala 10 × 18,3 m s bočním vstupem (P336020DP) | 6,1 m | 1000268 Bílá · 900 g/m² |
| Sedlová hala 10 × 21,35 m (337017P) | 5,2 m | 1000226 Vojenská zelená · 900 g/m² / 1000227 Bílá · 900 g/m² |
| Sedlová hala 10 × 21,35 m (PP337020DP) | 6,1 m | 1000391 Bílá (ověřit) |
| Sedlová hala 10 × 24,4 m (338017P) | 5,2 m | 1000032 Vojenská zelená · 900 g/m² / 1000033 Bílá · 900 g/m² |
| Sedlová hala 10 × 24,4 m (PP338020DP) | 6,1 m | 1000289 Bílá · 900 g/m² |
| Sedlová hala 10 × 24,4 m s bočním vstupem (P338020DP) | 6,1 m | 1000269 Bílá · 900 g/m² |
| Sedlová hala 10 × 27,45 m (339017P) | 5,2 m | 1000348 Bílá · 900 g/m² / 1000426 Vojenská zelená · 900 g/m² |
| Sedlová hala 10 × 30 m (3310017DP) | 5,2 m | 1000316 Bílá · 900 g/m² (ověřit) / 1000328 Vojenská zelená · 900 g/m² (ověřit) |
| Sedlová hala 10 × 30,5 m (PP3310020DP) | 6,1 m | 1000368 Bílá · 900 g/m² |
| Sedlová hala 10 × 33,55 m (3311017DP) | 5,2 m | 1000375 Bílá · 900 g/m² |
| Sedlová hala 10 × 33,55 m (PP3311020DP) | 6,1 m | 1000408 Bílá · 900 g/m² |
| Sedlová hala 10 × 36 m (3312017DP) | 5,2 m | 1000315 Bílá · 900 g/m² (ověřit) |
| Sedlová hala 10 × 36,6 m (PP3312020DP) | 6,1 m | 1000409 Bílá · 900 g/m² |
| Sedlová hala 12,2 × 9,15 m (403021DP) | 6,4 m | 1000392 Bílá · 900 g/m² |
| Sedlová hala 12,2 × 12,2 m (404021DP) | 6,4 m | 1000371 Bílá · 900 g/m² / 1000385 Vojenská zelená · 900 g/m² |
| Sedlová hala 12,2 × 15,25 m (405021DP) | 6,4 m | 1000331 Bílá · 900 g/m² / 1000386 Vojenská zelená (ověřit) |
| Sedlová hala 12,2 × 18,3 m (406021DP) | 6,4 m | 1000228 Bílá · 900 g/m² / 1000387 Vojenská zelená (ověřit) |
| Sedlová hala 12,2 × 21,3 m (407021DP) | 6,4 m | 1000238 Bílá · 900 g/m² |
| Sedlová hala 12,2 × 24,4 m (408021DP) | 6,4 m | 1000229 Bílá · 900 g/m² / 1000388 Vojenská zelená · 900 g/m² |
| Sedlová hala 12,2 × 27,45 m (409021DP) | 6,4 m | 1000372 Bílá · 900 g/m² |
| Sedlová hala 12,2 × 30,5 m (4010021DP) | 6,4 m | 1000239 Bílá · 900 g/m² / 1000389 Vojenská zelená · 900 g/m² |
| Sedlová hala 12,2 × 33,55 m (4011021DP) | 6,4 m | 1000373 Bílá · 900 g/m² |
| Sedlová hala 12,2 × 36,6 m (401202DP) | 6,4 m | 1000240 Bílá · 900 g/m² |
| Sedlová hala 15,25 × 15,25 m (505023DP) | 7,015 m | 1000390 Bílá · 900 g/m² |
| Sedlová hala 15,25 × 18,3 m (506023DP) | 7,015 m | 1000369 Bílá · 900 g/m² |
| Sedlová hala 15,25 × 21,35 m (507023DP) | 7,015 m | 1000365 Bílá · 900 g/m² |
| Sedlová hala 15,25 × 24,4 m (508023DP) | 7,015 m | 1000242 Bílá · 900 g/m² |
| Sedlová hala 15,25 × 27,45 m (509023DP) | 7,015 m | 1000406 Bílá · 900 g/m² |
| Sedlová hala 15,25 × 30,5 m (5010023DP) | 7,015 m | 1000243 Bílá · 900 g/m² |
| Sedlová hala 15,25 × 36,6 m (5012023DP) | 7,015 m | 1000244 barvu ověřit (ověřit) |
| Sedlová hala 18,3 × 24,4 m (608025DP) | 7,6 m | 1000397 Bílá · 900 g/m² |
| Sedlová hala 18,3 × 31,72 m (6011025DP) | 7,6 m | 1000398 Bílá · 900 g/m² |
| Sedlová hala 18,3 × 36,6 m (6012025DP) | 7,6 m | 1000399 Bílá · 900 g/m² |
