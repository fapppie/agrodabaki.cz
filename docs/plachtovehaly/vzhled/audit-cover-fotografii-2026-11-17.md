# Audit hlavních produktových fotografií – 17. 11. 2026

## Výsledek a rozsah

Požadavek: fotografie ve výpisu mají vyplnit celou obrazovou část dlaždice bez prázdných pásů. Audit je dokončen; fotografie ani nastavení živého obchodu se v tomto kroku neměnily.

Z veřejné [Mapy webu](https://plachtovehaly.agrodabaki.cz/mapa-webu/) načteno všech 141 produktových detailů. Z 28 výpisů kategorií a jejich stránek získáno všech 141 skutečných náhledů. U každé karty stažen hlavní originál, změřeny rozměry, porovnán náhled a inventarizovány odkazy galerie. U všech 141 karet odpovídá soubor hlavního obrázku detailu souboru ve výpisu. Čtení bez chyb HTTP při získávání detailů a hlavních obrázků. Vizuálně prošly všechny hlavní obrázky na kontaktních přehledech. Živé Sedlové haly ověřeny na šířce 390 a 1440 px.

- 67 fotografií, 69 technických výkresů a 5 izolovaných produktových vizuálů na bílém pozadí.
- 46 originálů má odchylku od 4 : 3 odpovídající nejvýše 2 % ořezu; 25 vyžaduje 2–15 % a 70 více než 15 %.
- Těchto 95 odlišných poměrů stran **není 95 fotografií vhodných k AI úpravě**: většinu tvoří výkresy a produktové podklady, kde by ořez poškodil informaci.
- V prioritní skupině 23 hal, přístřešků, zastřešení a garáží vyhovuje 8 fotografií a 15 vyžaduje řešení. Nejsou zde započítány výkresy příslušenství, náhradní oblouky ani nájezdová rampa.

[Úplná data včetně zdrojových URL, otisků a galerií](audit-cover-fotografii-2026-11-17.json). Přehledy skutečných náhledů: [1 – stavby a technika](../overeni/cover-audit-1.jpg), [2 – náhradní díly](../overeni/cover-audit-2.jpg), [3 – náhradní díly](../overeni/cover-audit-3.jpg), [4 – lesní technika a vybavení](../overeni/cover-audit-4.jpg). Přehledy slouží k porovnání obsahu, nejsou screenshotem rozložení e-shopu.

## Proč jsou kolem fotografií bílé pásy

V [Sedlových halách](https://plachtovehaly.agrodabaki.cz/sedlove-haly/) mají všechny obrázky z CDN již rozměr **423 × 318 px**, tedy téměř přesně 4 : 3. Při viewportu 1440 px bylo naměřeno vykreslení 220,22 × 165,56 px, při 390 px 142,48 × 107,13 px. Poměr zůstává stejný. Obrázky mají vypočtené `object-fit: fill`; jejich elementy obrazovou plochu vyplňují.

Bílé pásy jsou ve staženém rastrovém náhledu. Shoptet do společného formátu vloží originál s jiným poměrem stran. Nastavení `object-fit: cover` nad tímto již doplněným rastrem tedy problém samo nevyřeší. Použití nezarámovaného originálu s `cover` by pásy odstranilo, ale automaticky by ořezávalo výrobky. Prosté roztažení by zkreslilo rozměry a geometrii.

Ukázková řada 33 má originál **2609 × 974 px**, poměr 2,679 : 1. Pro ořez do 4 : 3 by zůstalo jen asi 1299 × 974 px, tedy by se odstranilo **50,2 % plochy** záběru. Pro zachování celé šířky je naopak potřeba plátno přibližně 2609 × 1957 px: doplnit přibližně 983 px výšky, rozdělených podle kompozice mezi oblohu a terén. Nezvětšovat samotnou halu.

Pozor také na rozdíl mezi náhledem výpisu a verzí `big` 1024 × 768: u malých originálů je v této větší verzi další volná plocha. Například řada 23 má pouze 510 × 274 px. Nelze proto měřit pásy na `og:image` a vydávat je za stav katalogové dlaždice; výsledný audit měří skutečné katalogové náhledy.

## Doporučená první etapa – 23 fotografií staveb

| Postup | Produkty | Počet |
| --- | --- | --- |
| Formát ponechat | SP, řada 30, boční vstup, obě obloukové haly, C26, C33S, garáž pro karavan | 8 |
| Zkusit jemný individuální ořez | Řada PP, Animal, garáž pro auto, garáž pro autobus, C20 | 5 |
| Rozšířit prostředí / nejdříve zkusit lepší zdroj | Dvojitá konstrukce, řady 23, 26, 33, 60 | 5 |
| Vyjasnit identitu fotografie před úpravou | Řady 40 a 50, C4040 otevřené a s vraty, zastřešení s navijákovými vraty | 5 |

Ořez je návrh k ověření, nikoli hotový schválený výřez. U Animal zachovat hrazení, u C20 oba kontejnery a kotvení, u garáží celý obrys. Pokud to mírný ořez nesplní, doplnit raději okolí. Řada PP je užší než 4 : 3, takže potřebuje mírný ořez nahoře/dole, zatímco ostatní čtyři kandidáti jsou širší a ořezávají se po stranách.

### Sedlové haly podrobně

| Produkt | Originál | Ztráta při ořezu do 4 : 3 | Doporučení |
| --- | --- | --- | --- |
| SP | 1440 × 1080 | 0 % | Ponechat. |
| Dvojitá konstrukce | 955 × 494 | 31,0 % | Doplnit oblohu a terén; původní výrobek zachovat. |
| Řada 23 | 510 × 274 | 28,4 % | Nejprve hledat kvalitnější originál; pak rozšíření nahoře/dole a případně kontrolovaný upscale. |
| Řada 26 | 954 × 524 | 26,8 % | Rozšíření nahoře/dole, chránit vjezd i bok. |
| Řada 33 | 2609 × 974 | 50,2 % | Výrazné rozšíření nahoře/dole; případně jiný ověřený záběr téhož modelu. |
| Řada 30 | 1600 × 1200 | 0 % | Ponechat. |
| Řada PP | 815 × 667 | 8,4 % | Zkusit ořez výšky přibližně na 611 px. |
| Řada 40 | 2881 × 1620 | 25,0 % | Ověřit fotografii konkrétní řady. |
| Boční vstup | 2104 × 1578 | 0 % | Ponechat. |
| Řada 50 | 2881 × 1620 | 25,0 % | Ověřit fotografii konkrétní řady. |
| Řada 60 | 1440 × 1800 | 40,0 % | Doplnit okolí vlevo/vpravo, případně širší doložený záběr. |

### Identita výrobků

Originály řad **40 a 50 jsou bitově totožné** (ověřeno SHA-256). Totéž platí pro trojici **C4040 otevřené, C4040 s vraty a zastřešení s navijákovými vraty**. Nejde pouze o podobné záběry. Fotografie u otevřeného C4040 zobrazuje čelo s vraty. AI nesmí odstranit vrata či měnit konstrukci, aby podklad vypadal jako jiný prodejní model. Pro tuto trojici potřebujeme potvrzení přiřazení a správný podklad otevřeného provedení.

Navazuje to na [dřívější kontrolu galerií](nahledove-fotografie.md): u velkých řad už byla zaznamenána nejistá identita. Aktuální audit nově ověřil hlavní soubory a jejich shodu. Neprovedl nový vizuální průchod každým snímkem všech 141 galerií; jejich odkazy jsou v JSON jako podklad dalšího výběru. Nelze zatím tvrdit, že kvalitnější alternativní snímek neexistuje.

## Standard pro přípravu nových coverů

1. Nejprve hledat kvalitnější skutečný originál téhož modelu a provedení. Pracovat z `/shop/orig/`, nikoli zvětšovat náhled 423 × 318.
2. Připravovat obraz **4 : 3**, doporučený master **1600 × 1200 px**, s celým výrobkem a přirozeným okolím. Větší kvalitní originál ponechat i v archivu. Tento rozměr je pracovní standard, ne ověřený limit Shoptetu.
3. U malého zdroje zvlášť posoudit ostrost. Řada 23 je kritická; upscale nevytvoří doložené detaily plachty, spojů a vrat. Nezvětšovat všechny obrázky automaticky na stejný vysoký počet pixelů.
4. Ořezat pouze bezpečné okolí. Zachovat špičku střechy, paty konstrukce, vjezd, zadní konec, kontejnery, kotvení i stávající označení/vodoznaky.
5. Při AI rozšíření generovat jen okolí mimo původní snímek. Požadovat stejnou perspektivu, světlo, počasí a návaznost terénu. Nedomýšlet konstrukční prvky, vrata, výztuhy, barvu ani rozměry výrobku. Výstup porovnat přes překryv s originálem; samotný prompt nezaručuje zachování výrobku.
6. Bílý prostor u technických výkresů není prázdná fotografie. Zachovat výkres v galerii; pokud má mít i tato karta fotografický cover až do kraje, získat fotografii skutečného dílu. AI nevytváří věrnou produktovou fotografii z montážního schématu.

## Pilot a následné nasazení

Doporučený pilot jsou čtyři různé situace: **garáž pro auto (710)** – mírný ořez; **dvojitá konstrukce (152)** – rozšíření oblohy/terénu; **řada 33 (50)** – extrémně široký záběr; **řada 23 (233)** – malý zdroj. Pilot ukáže, zda je dosažitelná přirozená kompozice, dostatečná ostrost a úplné zachování produktu. Následně lze zpracovat ostatní karty z rozpisu.

Správa: Produkty → Přehled → detail → galerie. Před změnou evidovat původní ID fotografie, pořadí a vazby na varianty. Nový cover přidat jako samostatný soubor, původní zachovat. Neměnit hromadně obrázky všech variant. Prověřit, zda se nová hlavní fotografie správně propsala do výpisu, detailu, hledání a doporučených produktů. Homepage a Mapa webu mají i přímo zapsané odkazy na obrázky a nemusí změnu hlavní fotografie převzít.

Kontrola vydání: telefon 320/390 px a počítač 1440/1680 px, načtení nového CDN souboru, skutečný obsah až po hrany obrazové plochy, neporušený výrobek, čitelné štítky. V detailu ověřit výchozí snímek i přepnutí barev/rozměrů. Pokud se zasahuje do vazeb variant nebo konfigurátoru, pokračovat přes košík do dotčeného kroku objednávky. Návrat: původní fotografie znovu první a původní vazby variant. Po skutečném nasazení aktualizovat plán, návod a předání.

## Metoda a omezení čísel

Ztráta ořezem = `100 × (1 − min(r/t, t/r))`, kde `r = šířka/výška` a `t = 4/3`. Při zachování celého záběru je stejná hodnota geometrickým podílem plochy nového plátna, který je potřeba doplnit. Nejde o automaticky bezpečný ořez ani přesné procento viditelnosti výrobku.

Orientační bílé obvodové pásy v JSON měřeny ze skutečného náhledu převzorkovaného na 128 × 96 px, přes bounding box pixelů, u nichž je alespoň jeden kanál RGB pod 240. Přesnost je přibližná; světlá obloha, bílé pozadí, popisky a JPEG komprese výsledek ovlivňují. U výkresů toto číslo nelze vydávat za chybu. Vzhled a bezpečnost zásahu proto posouzeny také vizuálně. Rozdíl mezi přesnými 4 : 3 a CDN 423 : 318 je pod 0,3 % a nevysvětluje velké pásy.

## Úplný seznam 141 karet

Ztráta je geometrický podíl plochy původního záběru při vyplnění 4 : 3 ořezem. Neříká, zda je ořez bezpečný. Výkresy jsou záměrně oddělené od fotografií.

| ID | Produkt | Originál v px | Ztráta ořezem | Doporučení |
| --- | --- | --- | --- | --- |
| 233 | [Sedlová hala řady 23](https://plachtovehaly.agrodabaki.cz/sedlova-hala-rady-23/) | 510 × 274 | 28.4 % | Doplnit oblohu a terén; nízké rozlišení, nejprve hledat kvalitnější originál. |
| 164 | [Sedlová hala řady 26](https://plachtovehaly.agrodabaki.cz/sedlova-hala-rady-26/) | 954 × 524 | 26.8 % | Doplnit okolí nahoře/dole; boční ořez by zasáhl halu. |
| 92 | [Sedlová hala řady 30](https://plachtovehaly.agrodabaki.cz/sedlova-hala-rady-30/) | 1600 × 1200 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 50 | [Sedlová hala řady 33](https://plachtovehaly.agrodabaki.cz/sedlova-hala-rady-33/) | 2609 × 974 | 50.2 % | Doplnit oblohu a terén; ořez by odstranil polovinu záběru. |
| 203 | [Sedlová hala řady 40](https://plachtovehaly.agrodabaki.cz/sedlova-hala-rady-40/) | 2881 × 1620 | 25.0 % | Nejdříve potvrdit model; stejný soubor jako řada 50. |
| 200 | [Sedlová hala řady 50](https://plachtovehaly.agrodabaki.cz/sedlova-hala-rady-50/) | 2881 × 1620 | 25.0 % | Nejdříve potvrdit model; stejný soubor jako řada 40. |
| 206 | [Sedlová hala řady 60](https://plachtovehaly.agrodabaki.cz/sedlova-hala-rady-60/) | 1440 × 1800 | 40.0 % | Doplnit okolí vlevo/vpravo nebo získat širší fotografii potvrzeného modelu. |
| 113 | [Sedlová hala řady PP](https://plachtovehaly.agrodabaki.cz/sedlova-hala-rady-pp/) | 815 × 667 | 8.4 % | Kandidát na mírný ořez nahoře/dole; zkontrolovat špičku střechy. |
| 104 | [Sedlová hala s bočním vstupem](https://plachtovehaly.agrodabaki.cz/sedlova-hala-s-bocnim-vstupem/) | 2104 × 1578 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 152 | [Sedlová hala s dvojitou konstrukcí](https://plachtovehaly.agrodabaki.cz/sedlova-hala-s-dvojitou-konstrukci/) | 955 × 494 | 31.0 % | Doplnit oblohu a terén; ořez ohrožuje konec haly. |
| 83 | [Sedlová hala SP](https://plachtovehaly.agrodabaki.cz/sedlova-hala-sp/) | 1440 × 1080 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 734 | [Oblouková hala s navijákem](https://plachtovehaly.agrodabaki.cz/obloukova-hala-s-navijakem/) | 751 × 569 | 1.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 44 | [Oblouková hala se zipovými vraty](https://plachtovehaly.agrodabaki.cz/obloukova-hala-se-zipovymi-vraty/) | 2100 × 1575 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 47 | [Náhradní oblouk pro halu šířky 6 m](https://plachtovehaly.agrodabaki.cz/nahradni-oblouk-pro-halu-1000059/) | 588 × 384 | 12.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 587 | [Náhradní oblouk pro halu šířky 9 m](https://plachtovehaly.agrodabaki.cz/nahradni-oblouk-pro-halu-1000203/) | 588 × 384 | 12.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 698 | [Zastřešení kontejnerů 12 × 12 m (C4040), otevřené](https://plachtovehaly.agrodabaki.cz/zastreseni-kontejneru-c4040-otevrene/) | 768 × 1024 | 43.8 % | Získat správnou fotografii otevřeného provedení; současná ukazuje vrata. |
| 701 | [Zastřešení kontejnerů 12 × 12 m (C4040), s vraty](https://plachtovehaly.agrodabaki.cz/zastreseni-kontejneru-c4040-s-vraty/) | 768 × 1024 | 43.8 % | Potvrdit model a odlišit od ID 689; pak rozšířit okolí vlevo/vpravo. |
| 674 | [Zastřešení kontejnerů C20](https://plachtovehaly.agrodabaki.cz/zastreseni-kontejneru-c20/) | 1440 × 911 | 15.6 % | Kandidát na ořez boků; chránit oba kontejnery a kotvení. |
| 695 | [Zastřešení kontejnerů C26](https://plachtovehaly.agrodabaki.cz/zastreseni-kontejneru-c26/) | 1290 × 968 | 0.1 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 683 | [Zastřešení kontejnerů C33S](https://plachtovehaly.agrodabaki.cz/zastreseni-kontejneru-c33s/) | 2048 × 1536 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 689 | [Zastřešení kontejnerů s navijákovými vraty](https://plachtovehaly.agrodabaki.cz/zastreseni-kontejneru-s-navijakovymi-vraty/) | 768 × 1024 | 43.8 % | Potvrdit navijáková vrata; stejný soubor jako C4040. |
| 725 | [Nájezdová rampa do kontejneru PD08B, nosnost 6 t](https://plachtovehaly.agrodabaki.cz/najezdova-rampa-do-kontejneru-pd08b-nosnost-6-t/) | 2032 × 1524 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 719 | [Přední čelo s vraty pro zastřešení C20, šířka 6 m](https://plachtovehaly.agrodabaki.cz/predni-celo-s-vraty-pro-zastreseni-c20/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 722 | [Přední čelo s vraty pro zastřešení C26, šířka 8 m](https://plachtovehaly.agrodabaki.cz/predni-celo-s-vraty-pro-zastreseni-c26/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 716 | [Přední čelo s vraty pro zastřešení C33S, šířka 10 m](https://plachtovehaly.agrodabaki.cz/predni-celo-s-vraty-pro-zastreseni-c33s/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 659 | [Přístřešek pro zvířata Animal](https://plachtovehaly.agrodabaki.cz/pristresek-pro-zvirata-animal/) | 2504 × 1669 | 11.1 % | Kandidát na jemný ořez boků; chránit hrazení. |
| 710 | [Plachtová garáž pro auto (122008R)](https://plachtovehaly.agrodabaki.cz/plachtova-garaz-pro-auto/) | 1320 × 885 | 10.6 % | Kandidát na jemný ořez boků; chránit celou garáž. |
| 713 | [Plachtová garáž pro autobus a nákladní vůz](https://plachtovehaly.agrodabaki.cz/plachtova-garaz-pro-autobus-a-nakladni-vuz/) | 2481 × 1654 | 11.1 % | Kandidát na jemný ořez boků; chránit celou garáž. |
| 707 | [Plachtová garáž pro karavan](https://plachtovehaly.agrodabaki.cz/plachtova-garaz-pro-karavan/) | 2048 × 1536 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 272 | [Lesní mulčovač FFM](https://plachtovehaly.agrodabaki.cz/lesni-mulcovac-ffm/) | 2733 × 2049 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 254 | [Mulčovač AGF PRO](https://plachtovehaly.agrodabaki.cz/mulcovac-agf-pro/) | 1800 × 1350 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 266 | [Mulčovač pro čtyřkolku ATV 120](https://plachtovehaly.agrodabaki.cz/mulcovac-pro-ctyrkolku-atv-120/) | 1742 × 1306 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 269 | [Mulčovač pro čtyřkolku ATV 145 OT](https://plachtovehaly.agrodabaki.cz/mulcovac-pro-ctyrkolku-atv-145-ot/) | 2198 × 1648 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 248 | [Příkopový mulčovač AGE](https://plachtovehaly.agrodabaki.cz/prikopovy-mulcovac-age/) | 2183 × 1637 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 278 | [Rotační brány LXG](https://plachtovehaly.agrodabaki.cz/rotacni-brany-lxg/) | 1440 × 1080 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 287 | [Transportní box PRMH](https://plachtovehaly.agrodabaki.cz/transportni-box-prmh/) | 1523 × 1142 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 302 | [Paletizační vidle Deleks D 300](https://plachtovehaly.agrodabaki.cz/paletizacni-vidle-deleks-d-300/) | 900 × 924 | 26.9 % | Sjednotit měřítko produktu; bílé pozadí není pouze okraj. Pro fotografický cover získat vhodný podklad. |
| 305 | [Paletizační vidle Deleks D 700](https://plachtovehaly.agrodabaki.cz/paletizacni-vidle-deleks-d-700/) | 900 × 924 | 26.9 % | Sjednotit měřítko produktu; bílé pozadí není pouze okraj. Pro fotografický cover získat vhodný podklad. |
| 308 | [Paletizační vidle Deleks D 1200](https://plachtovehaly.agrodabaki.cz/paletizacni-vidle-deleks-d-1200/) | 900 × 924 | 26.9 % | Sjednotit měřítko produktu; bílé pozadí není pouze okraj. Pro fotografický cover získat vhodný podklad. |
| 620 | [Čerpadlo traktorového podkopu BH](https://plachtovehaly.agrodabaki.cz/cerpadlo-traktoroveho-podkopu-bh/) | 2079 × 1559 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 623 | [Hydraulický rozvaděč podkopu BH](https://plachtovehaly.agrodabaki.cz/hydraulicky-rozvadec-podkopu-bh/) | 1942 × 1457 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 569 | [Podkopová lžíce pro BH](https://plachtovehaly.agrodabaki.cz/podkopova-lzice-pro-bh/) | 2235 × 1676 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 572 | [Podkopová lžíce pro BH 5 R](https://plachtovehaly.agrodabaki.cz/podkopova-lzice-pro-bh-5-r/) | 1000 × 750 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 575 | [Zub podkopové lžíce](https://plachtovehaly.agrodabaki.cz/zub-podkopove-lzice/) | 1948 × 1461 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 635 | [Mulčovací sekačka FM](https://plachtovehaly.agrodabaki.cz/mulcovaci-sekacka-fm/) | 1635 × 1226 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 632 | [Baterie mulčovače ATV](https://plachtovehaly.agrodabaki.cz/baterie-mulcovace-atv/) | 1536 × 2048 | 43.8 % | Individuální ořez nebo doplnění okolí; chránit geometrii výrobku. |
| 311 | [Boční ližina mulčovače AGF](https://plachtovehaly.agrodabaki.cz/bocni-lizina-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 374 | [Čep mulčovače AGF](https://plachtovehaly.agrodabaki.cz/cep-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 443 | [Čep podkovy mulčovače AGF](https://plachtovehaly.agrodabaki.cz/cep-podkovy-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 440 | [Držák hlavní podkovy mulčovače AGF](https://plachtovehaly.agrodabaki.cz/drzak-hlavni-podkovy-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 416 | [Držák hlavního zavěšení mulčovače AGF](https://plachtovehaly.agrodabaki.cz/drzak-hlavniho-zaveseni-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 371 | [Držák převodovky mulčovače AGF](https://plachtovehaly.agrodabaki.cz/drzak-prevodovky-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 464 | [Držák zadního válce mulčovače AGE](https://plachtovehaly.agrodabaki.cz/drzak-zadniho-valce-mulcovace-age/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 326 | [Držák zadního válce mulčovače AGF](https://plachtovehaly.agrodabaki.cz/drzak-zadniho-valce-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 314 | [Gufero pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/gufero-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 461 | [Hlavní hřídel mulčovače AGE](https://plachtovehaly.agrodabaki.cz/hlavni-hridel-mulcovace-age/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 482 | [Hlavní hřídel mulčovače ATV](https://plachtovehaly.agrodabaki.cz/hlavni-hridel-mulcovace-atv/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 452 | [Horní řemenice mulčovače AGE](https://plachtovehaly.agrodabaki.cz/horni-remenice-mulcovace-age/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 359 | [Horní velká řemenice mulčovače AGF](https://plachtovehaly.agrodabaki.cz/horni-velka-remenice-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 392 | [Hydraulická hadice mulčovače AGF](https://plachtovehaly.agrodabaki.cz/hydraulicka-hadice-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 401 | [Hydraulická rychlospojka R1 pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/hydraulicka-rychlospojka-r1-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 407 | [Hydraulický píst mulčovače AGF](https://plachtovehaly.agrodabaki.cz/hydraulicky-pist-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 434 | [Hydraulický píst mulčovače AGF, typ B](https://plachtovehaly.agrodabaki.cz/hydraulicky-pist-mulcovace-agf-typ-b/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 446 | [Hydraulický píst na držáku mulčovače AGE](https://plachtovehaly.agrodabaki.cz/hydraulicky-pist-na-drzaku-mulcovace-age/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 449 | [Hydraulický píst na stroji mulčovače AGE](https://plachtovehaly.agrodabaki.cz/hydraulicky-pist-na-stroji-mulcovace-age/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 626 | [Kladka mulčovače ATV](https://plachtovehaly.agrodabaki.cz/kladka-mulcovace-atv/) | 1536 × 2048 | 43.8 % | Individuální ořez nebo doplnění okolí; chránit geometrii výrobku. |
| 479 | [Kryt vzduchového filtru mulčovače ATV včetně filtru](https://plachtovehaly.agrodabaki.cz/kryt-vzduchoveho-filtru-mulcovace-atv-vcetne-filtru/) | 800 × 600 | 0.0 % | Sjednotit měřítko produktu; bílé pozadí není pouze okraj. Pro fotografický cover získat vhodný podklad. |
| 410 | [Krytka hlavního zavěšení mulčovače AGF](https://plachtovehaly.agrodabaki.cz/krytka-hlavniho-zaveseni-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 491 | [Krytka připojovací hlavice mulčovače ATV](https://plachtovehaly.agrodabaki.cz/krytka-pripojovaci-hlavice-mulcovace-atv/) | 720 × 960 | 43.8 % | Individuální ořez nebo doplnění okolí; chránit geometrii výrobku. |
| 320 | [Levý krycí plech mulčovače AGF](https://plachtovehaly.agrodabaki.cz/levy-kryci-plech-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 332 | [Ložisko 6308 pro zadní válec mulčovače AGF](https://plachtovehaly.agrodabaki.cz/lozisko-6308-pro-zadni-valec-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 347 | [Ložisko rotoru 1308 pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/lozisko-rotoru-1308-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 488 | [Ložisko UC 205 s uložením pro zadní válec mulčovače ATV](https://plachtovehaly.agrodabaki.cz/lozisko-uc-205-s-ulozenim-pro-zadni-valec-mulcovace-atv/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 467 | [Ložisko UC 207 s uložením pro hlavní hřídel mulčovače ATV](https://plachtovehaly.agrodabaki.cz/lozisko-uc-207-s-ulozenim-pro-hlavni-hridel-mulcovace-atv/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 350 | [Ložiskový domek rotoru mulčovače AGF](https://plachtovehaly.agrodabaki.cz/loziskovy-domek-rotoru-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 389 | [Matice čepu M30 × 2 pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/matice-cepu-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 431 | [Matice M30 pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/matice-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 323 | [Maznička M10 × 1 pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/maznicka-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 470 | [Motor mulčovače ATV](https://plachtovehaly.agrodabaki.cz/motor-mulcovace-atv/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 473 | [Palivová nádrž mulčovače ATV](https://plachtovehaly.agrodabaki.cz/palivova-nadrz-mulcovace-atv/) | 1400 × 933 | 11.1 % | Sjednotit měřítko produktu; bílé pozadí není pouze okraj. Pro fotografický cover získat vhodný podklad. |
| 368 | [Podkova tříbodového závěsu mulčovače AGF](https://plachtovehaly.agrodabaki.cz/podkova-tribodoveho-zavesu-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 437 | [Podpěrná noha mulčovače AGF, typ L](https://plachtovehaly.agrodabaki.cz/podperna-noha-mulcovace-agf-typ-l/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 383 | [Podpěrná noha mulčovače AGF, typ S](https://plachtovehaly.agrodabaki.cz/podperna-noha-mulcovace-agf-typ-s/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 377 | [Pouzdro čepu 40 × 44 × 50 pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/pouzdro-cepu-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 413 | [Pouzdro hlavního čepu mulčovače AGF](https://plachtovehaly.agrodabaki.cz/pouzdro-hlavniho-cepu-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 365 | [Pouzdro řemenice pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/pouzdro-remenice-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 395 | [Průtokový šroub M16 × 1,5 pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/prutokovy-sroub-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 380 | [Pružná závlačka 3,2 pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/pruzna-zavlacka-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 458 | [Převodovka mulčovače AGE](https://plachtovehaly.agrodabaki.cz/prevodovka-mulcovace-age/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 362 | [Převodovka mulčovače AGF](https://plachtovehaly.agrodabaki.cz/prevodovka-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 422 | [Půlměsícový držák mulčovače AGF](https://plachtovehaly.agrodabaki.cz/pulmesicovy-drzak-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 428 | [Půlměsícový držák mulčovače AGF, provedení Single](https://plachtovehaly.agrodabaki.cz/pulmesicovy-drzak-mulcovace-agf-provedeni-single/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 341 | [Rotor mulčovače AGF](https://plachtovehaly.agrodabaki.cz/rotor-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 356 | [Spodní malá řemenice mulčovače AGF](https://plachtovehaly.agrodabaki.cz/spodni-mala-remenice-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 455 | [Spodní řemenice mulčovače AGE](https://plachtovehaly.agrodabaki.cz/spodni-remenice-mulcovace-age/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 485 | [Spojka s řemenicí pro mulčovač ATV](https://plachtovehaly.agrodabaki.cz/spojka-s-remenici-pro-mulcovac-atv/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 317 | [Šroub M10 × 1 pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/sroub-m10-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 404 | [Šroub M24 pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/sroub-m24-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 425 | [Šroub M30 × 70 pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/sroub-m30-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 398 | [Těsnicí podložka pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/tesnici-podlozka-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 476 | [Tlumič výfuku mulčovače ATV](https://plachtovehaly.agrodabaki.cz/tlumic-vyfuku-mulcovace-atv/) | 1024 × 768 | 0.0 % | Posoudit jemný ořez a skutečné okraje originálu. |
| 335 | [Vnější pojistný kroužek 40 pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/vnejsi-pojistny-krouzek-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 329 | [Vnitřní pojistný kroužek 90 pro mulčovač AGF](https://plachtovehaly.agrodabaki.cz/vnitrni-pojistny-krouzek-pro-mulcovac-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 338 | [Zadní válec mulčovače AGF](https://plachtovehaly.agrodabaki.cz/zadni-valec-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 386 | [Zajišťovací kolík podpěrné nohy mulčovače AGF](https://plachtovehaly.agrodabaki.cz/zajistovaci-kolik-podperne-nohy-mulcovace-agf/) | 1200 × 1696 | 46.9 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 494 | [Hroty rotačních bran, levý a pravý v páru](https://plachtovehaly.agrodabaki.cz/hroty-rotacnich-bran-levy-a-pravy-v-paru/) | 800 × 800 | 25.0 % | Individuální ořez nebo doplnění okolí; chránit geometrii výrobku. |
| 584 | [Držák ostří lesního mulčovače FFM](https://plachtovehaly.agrodabaki.cz/drzak-ostri-lesniho-mulcovace-ffm/) | 2622 × 1966 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 503 | [Kladívko pro mulčovač AGE](https://plachtovehaly.agrodabaki.cz/kladivko-pro-mulcovac-age/) | 1024 × 768 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 497 | [Kladívko pro mulčovače AGF a BCS](https://plachtovehaly.agrodabaki.cz/kladivko-pro-mulcovace-agf-a-bcs/) | 423 × 318 | 0.2 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 578 | [Kladivo pro lesní mulčovač FFM](https://plachtovehaly.agrodabaki.cz/kladivo-pro-lesni-mulcovac-ffm/) | 1000 × 750 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 656 | [Kroužek rotačního nože](https://plachtovehaly.agrodabaki.cz/krouzek-rotacniho-noze/) | 2002 × 1502 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 500 | [Nože pro mulčovač ATV, pár](https://plachtovehaly.agrodabaki.cz/noze-pro-mulcovac-atv-par/) | 800 × 800 | 25.0 % | Individuální ořez nebo doplnění okolí; chránit geometrii výrobku. |
| 617 | [Nůž mulčovací sekačky FM](https://plachtovehaly.agrodabaki.cz/nuz-mulcovaci-sekacky-fm/) | 1759 × 1319 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 581 | [Ostří pro lesní mulčovač FFM](https://plachtovehaly.agrodabaki.cz/ostri-pro-lesni-mulcovac-ffm/) | 2440 × 1830 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 650 | [Rotační nůž MS 200](https://plachtovehaly.agrodabaki.cz/rotacni-nuz-ms-200/) | 1895 × 1421 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 653 | [Stacionární nůž MS 200](https://plachtovehaly.agrodabaki.cz/stacionarni-nuz-ms-200/) | 1945 × 1458 | 0.1 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 506 | [Ložisko UC 205 s uložením](https://plachtovehaly.agrodabaki.cz/lozisko-uc-205-s-ulozenim/) | 1024 × 768 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 509 | [Ložisko UC 207 s uložením](https://plachtovehaly.agrodabaki.cz/lozisko-uc-207-s-ulozenim/) | 1024 × 768 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 515 | [Převodovka pro EFGC, BEM, MENASOR, GKH a MS](https://plachtovehaly.agrodabaki.cz/prevodovka-pro-efgc-bem-menasor-gkh-a-ms/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 512 | [Převodovka rotačních bran LXG](https://plachtovehaly.agrodabaki.cz/prevodovka-rotacnich-bran-lxg/) | 1240 × 1754 | 47.0 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 527 | [Hydraulický motor štěpkovače BX 92 RS](https://plachtovehaly.agrodabaki.cz/hydraulicky-motor-stepkovace-bx-92-rs/) | 1240 × 1754 | 47.0 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 533 | [Kompletní hydraulický průtokový ventil štěpkovače BX 92 RS](https://plachtovehaly.agrodabaki.cz/kompletni-hydraulicky-prutokovy-ventil-stepkovace-bx-92-rs/) | 1240 × 1754 | 47.0 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 629 | [Nůž špalíkovače TR 110](https://plachtovehaly.agrodabaki.cz/nuz-spalikovace-tr-110/) | 1536 × 2048 | 43.8 % | Individuální ořez nebo doplnění okolí; chránit geometrii výrobku. |
| 518 | [Nůž štěpkovače BX 92 RS](https://plachtovehaly.agrodabaki.cz/nuz-stepkovace-bx-92-rs/) | 1240 × 1754 | 47.0 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 539 | [Nůž štěpkovače BX 122 RS](https://plachtovehaly.agrodabaki.cz/nuz-stepkovace-bx-122-rs/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 521 | [Protiostří štěpkovače BX 92 RS](https://plachtovehaly.agrodabaki.cz/protiostri-stepkovace-bx-92-rs/) | 1240 × 1754 | 47.0 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 536 | [Protiostří štěpkovače BX 122 RS](https://plachtovehaly.agrodabaki.cz/protiostri-stepkovace-bx-122-rs/) | 1754 × 1240 | 5.7 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 524 | [Pružina štěpkovače BX 92 RS](https://plachtovehaly.agrodabaki.cz/pruzina-stepkovace-bx-92-rs/) | 1240 × 1754 | 47.0 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 530 | [Regulační ventil štěpkovače BX 92 RS](https://plachtovehaly.agrodabaki.cz/regulacni-ventil-stepkovace-bx-92-rs/) | 1240 × 1754 | 47.0 % | Zachovat celý výkres; pro plnoplošný fotografický cover získat skutečnou fotografii dílu. |
| 545 | [Klínový řemen B 17](https://plachtovehaly.agrodabaki.cz/klinovy-remen-b-17/) | 800 × 600 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 644 | [Kolečko mulčovací sekačky FM](https://plachtovehaly.agrodabaki.cz/kolecko-mulcovaci-sekacky-fm/) | 1536 × 2048 | 43.8 % | Individuální ořez nebo doplnění okolí; chránit geometrii výrobku. |
| 602 | [Špalíkovač dřeva TR 110](https://plachtovehaly.agrodabaki.cz/spalikovac-dreva-tr-110/) | 1811 × 1358 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 647 | [Špalíkovač dřeva TRS 110 s dopravníkem](https://plachtovehaly.agrodabaki.cz/spalikovac-dreva-trs-110-s-dopravnikem/) | 2497 × 1873 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 590 | [Štěpkovač dřeva BX 92 RS](https://plachtovehaly.agrodabaki.cz/stepkovac-dreva-bx-92-rs/) | 2239 × 1679 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 593 | [Traktorová štípačka dřeva WX 310](https://plachtovehaly.agrodabaki.cz/traktorova-stipacka-dreva-wx-310/) | 2049 × 1537 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 596 | [Traktorová štípačka dřeva WX 350](https://plachtovehaly.agrodabaki.cz/traktorova-stipacka-dreva-wx-350/) | 2049 × 1537 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 599 | [Traktorová štípačka dřeva WX 380](https://plachtovehaly.agrodabaki.cz/traktorova-stipacka-dreva-wx-380/) | 2049 × 1537 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 608 | [Planýrovač jízdárny HM 200 ATV](https://plachtovehaly.agrodabaki.cz/planyrovac-jizdarny-hm-200-atv/) | 1280 × 960 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 605 | [Planýrovač jízdárny HM 200 do tříbodového závěsu](https://plachtovehaly.agrodabaki.cz/planyrovac-jizdarny-hm-200-do-tribodoveho-zavesu/) | 1740 × 1305 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 611 | [Planýrovač jízdárny HV 200 s válcem](https://plachtovehaly.agrodabaki.cz/planyrovac-jizdarny-hv-200-s-valcem/) | 1871 × 1403 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
| 614 | [Sběrač koňského trusu KSP 120](https://plachtovehaly.agrodabaki.cz/sberac-konskeho-trusu-ksp-120/) | 2041 × 1531 | 0.0 % | Poměr stran vyhovuje; bez nutnosti zásahu kvůli formátu. |
