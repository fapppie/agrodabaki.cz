# Kam zařadit plachtové garáže

Podklad k rozhodnutí · 16. 11. 2026

Dne 16. 11. 2026 zadavatel potvrdil název **Plachtové garáže**. Na třech kartách si zákazník vybírá podle vozidla – auto, karavan nebo autobus a nákladní vůz. Slovo „garáž“ odpovídá názvům všech tří výrobků. „Garážové haly“ může vyvolat představu většího objektu a zákazník s osobním autem může nabídku přehlédnout. To je úsudek o srozumitelnosti; měření vyhledávanosti ani chování zákazníků k dispozici nemáme.

Společnou položku **Plachtové haly** dává smysl vyzkoušet jako rozcestník se třemi přímými volbami **Obloukové haly · Sedlové haly · Plachtové garáže**. Uvolní místo v hlavním menu, ale na telefonu přidá rozbalení před výběrem typu haly. Doporučuji nejdřív porovnat obě menu na mobilu a zkusit dva úkoly: „Najdi halu se sedlovou střechou“ a „Najdi garáž pro karavan“. Dílům k halám ponechat vlastní odkaz vedle rozcestníku. Do rozhodnutí platí již schválené pořadí hlavního menu.

## Co je ověřeno

- Veřejné výpisy obsahují dvě karty obloukových hal, jedenáct sedlových a tři plachtové garáže. Všechny tři kategorie vracejí HTTP 200. Navržená cesta rozcestníku `/plachtove-haly/` vrátila HTTP 404. [Obloukové haly](https://plachtovehaly.agrodabaki.cz/obloukove-haly/) · [Sedlové haly](https://plachtovehaly.agrodabaki.cz/sedlove-haly/) · [Plachtové garáže](https://plachtovehaly.agrodabaki.cz/plachtove-garaze/)
- Na detailu garáže pro auto dnes vede cesta Domů → Plachtové garáže → Plachtová garáž pro auto. Při seskupení má nová cesta mezi Domů a Plachtové garáže zobrazit také Plachtové haly. [Detail garáže](https://plachtovehaly.agrodabaki.cz/plachtova-garaz-pro-auto/)
- Homepage má přímý odkaz do garáží v horním banneru a v dlaždici kategorií. V připraveném importu WEXBO vede na tři posuzované kategorie celkem 17 starých adres (3 obloukové, 13 sedlových, 1 garáže). [Obsah homepage](../../../src/plachtovehaly/shoptet/titulni-strana.html) · [Import kategorií](../../../src/plachtovehaly/migrace/presmerovani-wexbo-kategorie.csv)

Při schválení seskupení zachovat dosavadní adresy podkategorií i produktů a přímé odkazy z homepage. Před zveřejněním ověřit, jak Shoptet po přesunu generuje URL a drobečky. Pokud některou adresu změní, upravit interní odkazy a oba migrační podklady a ověřit přímé přesměrování 301 ze staré adresy na správnou stránku s HTTP 200. [Mapa URL](../../../src/plachtovehaly/migrace/mapa-url.csv)
