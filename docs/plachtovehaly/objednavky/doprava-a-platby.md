# Doprava a platby

## Platná konfigurace od 17. 11. 2026

V Nastavení → Doprava a platby → Způsoby dopravy je pro český e-shop aktivní GEIS (83), Externí spedice (86) a Osobní odběr (89). Rozhoduje cena zboží včetně DPH. Všechny tři metody jsou zdarma.

| Způsob převzetí | Hodnota zboží | Povolené platby bez příplatku |
| --- | --- | --- |
| GEIS | Do 100 000 Kč včetně | Převod předem nebo dobírka |
| Externí spedice | Nad 100 000 Kč | Převod předem |
| Osobní odběr po domluvě | Libovolná | Převod předem nebo hotově při převzetí. Nad 270 000 Kč pouze převod. |

U osobního odběru jsou zaškrtnuté platby Hotově (2) a Převodem (5). V českém ceníku platby Hotově je horní mez 270 000,01 Kč vyjma této hodnoty. Při vybírání hotovosti správce zohlední i další platby stejného zákazníka firmě za tentýž kalendářní den. [Zákon o omezení plateb v hotovosti](https://mf.gov.cz/cs/kontrola-a-regulace/legislativa/legislativni-dokumenty/2004/zakon-c-254-2004-sb-3569)

Test od detailu výrobku přes košík do kroku Doprava a platba. Na mobilu při 46 900 Kč nabídl GEIS převod a dobírku, odběr hotovost a převod. Na počítači při 239 900 Kč nabízela spedice jen převod a odběr obě platby. Při 289 900 Kč umožnily odběr i spedice jen převod. Test skončil před odesláním objednávky.

### Dopad na zákaznické informace

Kontrola 141 veřejných produktových karet a šesti hlavních stránek dne 17. 11. 2026 našla v prohledaných popisech starou informaci na dvou stránkách, Jak nakupovat a Obchodní podmínky. Všechny kontrolované adresy odpověděly úspěšně.

- **Jak nakupovat** (stránka 27). Aktualizováno a veřejně ověřeno 17. 11. 2026. Návod rozlišuje všechny tři způsoby převzetí a vyžaduje potvrzený termín pro návštěvu skladu.
- **Obchodní podmínky** (stránka 39). Změnit odstavec o způsobech platby, přidat odběr do tabulky a nahradit individuálně sjednávanou cenu odběru. U převodu před vyzvednutím popsat připsání platby. U storna katalogové objednávky současné znění váže lhůtu na předání dopravci. Pro osobní odběr navrhujeme jako konec lhůty převzetí zákazníkem. Potvrzeno a zveřejněno 17. 11. 2026, viz záznam o vydání níže.
- **Potvrzení objednávky** (šablona order, ID 1). Rekapitulace přebírá zvolenou dopravu a platbu. Při vydání VOP nahradit jejich přílohu v téže verzi jako HTML, datovat a archivovat předchozí PDF. Zkontrolovat skutečnou zprávu pro hotovost i převod při odběru.
- **Kontakty a pokyny k odběru.** Sídlo v Jankově bylo potvrzeno pro vratky, firemní web uvádí sklad v Jankovské Lhotě. Zadavatel potvrdil odběr ve skladu na adrese firmy, vždy až po potvrzení termínu. Tuto informaci obsahuje i popis dopravy ID 89. Historické slevy WEXBO nejsou součástí nového ceníku.

## Historické podklady a výsledky před 17. 11. 2026

Kontrola z 15. 11. 2026 porovnává veřejné nákupní informace a obchodní podmínky WEXBO s detaily jednotlivých produktů. Částky odpovídají zobrazení na zdrojových kartách. Pro nový obchod se doprava určuje z ceny zboží v celém košíku podle pravidel níže.

[Vše o nákupu](https://www.plachtovehaly-agrodabaki.cz/m/informace-4/vse-o-nakupu-5/) uvádí přepravce GEIS a FOFR a expedici do 48 hodin podle platby a dostupnosti. Pro platbu uvádí hotovost ve skladu a převod podle faktury. [Obchodní podmínky](https://www.plachtovehaly-agrodabaki.cz/m/informace-4/obchodni-podminky-16/) zmiňují také dobírku a online kartu. Aktuální smlouvu s platební bránou, podporované způsoby úhrady a účet pro převod musí potvrdit provozovatel.

| Zdrojový výrobek | Doprava na detailu | Platba a osobní odběr |
| --- | --- | --- |
| [Oblouková hala 6,1 × 7,3 m, bílá](https://www.plachtovehaly-agrodabaki.cz/d/202412-r-plachtova-hala-61-x-73-x-366-m-bila-1000335/) | GEIS zdarma, paleta se složením přes hydraulické čelo | Sleva za odběr ve skladu 2 000 Kč |
| [Oblouková hala 9,15 × 12 m, bílá](https://www.plachtovehaly-agrodabaki.cz/d/plachtova-hala-915-x-12-x-45-900g-m2-%2B-navijak-bila-1000279/) | GEIS zdarma | Kvůli velikosti nelze zaslat na dobírku. Sleva za odběr 4 000 Kč |
| [Sedlová hala 15,25 × 36,6 m](https://www.plachtovehaly-agrodabaki.cz/d/plachtova-hala-50-120-23-dp-1525m-x-366m-x-7015-1000244/) | Individuální dohoda o dopravě | Způsob úhrady upřesní firma |
| [Mulčovač AGE 125](https://www.plachtovehaly-agrodabaki.cz/d/mulcovac-age-125-1000034/) | GEIS zdarma, přepravní rám | Sleva za odběr 2 000 Kč |
| [Šroub M10 × 1](https://www.plachtovehaly-agrodabaki.cz/d/sroub-m-10x1-1000084/) | FOFR od 250 Kč | Cena a dostupnost dobírky v košíku k potvrzení |
| [Náhradní oblouk pro halu 6 m](https://www.plachtovehaly-agrodabaki.cz/d/z-kompletni-oblouk-hala-6-m-1000059/) | Štítek uvádí dopravu v ceně, nabídka dopravce uvádí FOFR od 250 Kč | Sleva za odběr 300 Kč, částku za doručení potvrdit |

## Dořešit před přepnutím

- Sladit zdrojové popisy a zákaznické stránky se schválenými pravidly. S firmou dořešit osobní odběr, slevy při odběru, účet pro převod a případné přepravní výjimky u nadrozměrných výrobků.
- V košíku ověřit hraniční částky, nabídku dobírky i převodu a soulad s objednávkovým e-mailem.

## Test Shoptetu 15. 11. 2026

Samostatné košíky s obloukovou halou, mulčovačem a guferem nabízely všech osm výchozích doprav, včetně AlzaBoxu zdarma. V nabídce byla i dobírka. Mulčovač označený jako vyprodaný šel přidat do košíku. Test skončil před odesláním objednávky. Tři testované karty byly po kontrole opět skryty (import č. 161). [Košík s halou](../overeni/test-doprava-hala.jpg)

## Pravidla pro ČR potvrzená 15. 11. 2026

| Cena zboží v košíku včetně DPH | Doprava | Cena dopravy | Platba |
| --- | --- | ---: | --- |
| Do 100 000 Kč včetně | GEIS | 0 Kč | Převodem nebo dobírkou, příplatek 0 Kč |
| Nad 100 000 Kč | Externí spedice, dopravce vybere firma podle zásilky | 0 Kč | Převodem nebo dobírkou, příplatek 0 Kč |

V Shoptetu byla metoda FOFR přejmenována na „Externí spedice“ a dobírka byla povolena pro obě dopravy. Osm ukázkových služeb včetně AlzaBoxu má vypnutou viditelnost. Cena dopravy 0 Kč platí podle poslední dostupné informace zadavatele.

## Ověření po změně dopravce a dobírky

V uloženém ceníku má GEIS horní mez 100 000,01 Kč bez zahrnutí této hodnoty a externí spedice spodní mez 100 000,01 Kč včetně. Při zkoušce v zákaznickém košíku jsme použili dostupné katalogové ceny v celých korunách.

- Štěpkovač za 88 000 Kč a vidle za 12 000 Kč nabídly pouze GEIS. Při volbě převodu i dobírky zůstala celková částka 100 000 Kč. [Košík GEIS](../overeni/doprava-geis-dobirka.png)
- Přidání gufera za 69 Kč změnilo jediného dostupného dopravce na Externí spedici. Převod i dobírka byly zdarma a rekapitulace po výběru dobírky potvrdila 100 069 Kč. [Košík s externí spedicí](../overeni/doprava-externi-spedice-dobirka.png)

## Historické testy hranice před změnou názvu spedice

- Štěpkovač BX 92 RS a paletizační vidle D 700 daly přesně 100 000 Kč. Košík nabídl pouze GEIS zdarma. [Test GEIS](../overeni/doprava-geis.png)
- Čtyři planýrovače HM 200 ATV a 29 gufer po 69 Kč daly přesně 100 001 Kč. Košík nabídl pouze horní pásmo zdarma pod tehdejším názvem FOFR. [Původní test horního pásma](../overeni/doprava-fofr.png)

## Potvrzení objednávky zákazníkovi · 16. 11. 2026

V Nastavení → Emaily → Automatické zasílání jsme ověřili akci Oznámení o objednávce zákazníkovi (ID 2), příjemce Zákazník a napojenou [šablonu order, ID 1](https://plachtovehaly.agrodabaki.cz/admin/detail-emailu-systemove-akce/?id=1). Předmět skládá název e-shopu a kód objednávky. Rekapitulaci zajišťuje systémová značka `#TEMPLATE.orderContent#`. Pevný text neuvádí žádného dopravce, sazbu, dárek ani termín dodání. Úprava zprávy proto nebyla potřeba.

Platební instrukce se vkládají přes `#EMAIL[BILLING_METHOD=transfer].billingInfo#` jen pro převod. Část billingInfo obsahuje značky pro účet, variabilní symbol a QR kód. Vzhled emailů → Moderna → Zobrazit ukázku vykreslil nadpis „Objednávka na Plachtové haly Agro Dabaki“, rekapitulaci, adresní oddíly a podpis s veřejným telefonem a e-mailem agro@dabaki.cz. V detailu potvrzení nebyla uvedena žádná nahraná příloha.

Před předáním potvrdit účet s provozovatelem. Při end-to-end testu ověřit skutečné doručení zprávy, konkrétní částku a způsob dopravy i platby, správné platební údaje při převodu a obsah přiložených dokumentů podle finálních podmínek. Při této kontrole šlo o interní náhled bez vytvoření objednávky a odeslání zprávy.

### Text k nasazení spolu s autorizovanými VOP (16. 11. 2026)

V detailu první zákaznické zprávy (order, ID 1) byly znovu ověřeny systémové značky rekapitulace a platebních instrukcí. V textu šablony chybí výslovná akceptace a sedmidenní splatnost. V detailu nebyl nalezen odkaz na přiložené PDF podmínek.

- Do první zprávy před rekapitulaci vložit „Vaši objednávku tímto přijímáme. Doručením tohoto e-mailu je kupní smlouva uzavřena. V příloze najdete obchodní podmínky platné pro vaši objednávku.“
- Do platebních instrukcí pouze pro převod vložit „Částku prosím uhraďte do 7 kalendářních dnů od doručení tohoto e-mailu. Platební údaje najdete níže.“
- Aktivovat spolu se schváleným dokumentem, sjednotit splatnost na dokladech a prověřit skutečně doručenou zprávu pro převod i dobírku. Při pozdější změně VOP archivovat předchozí verzi a pro opětovné odeslání použít znění příslušné k objednávce.

**Nasazeno 16. 11. 2026.** První potvrzení výslovně přijímá objednávku a obsahuje datovanou přílohu obchodních podmínek (69 392 bajtů). Sedmidenní splatnost je v části pro převod. Ověřeno po uložení v administraci, kontrola skutečných zpráv ve schránce při obou platbách zůstává součástí testu nákupu.

17. 11. 2026 – VOP na stránce 39 a datovaná příloha potvrzení objednávky (order, ID 1) nyní zahrnují bezplatné storno katalogové objednávky při osobním odběru až do převzetí, včetně nákupu na firmu. U doručení platí storno do předání dopravci. Publikované znění rozlišuje platby podle dopravy a odběr ve skladu po potvrzení termínu. Veřejné znění ověřeno při 390 a 1440 px, nová příloha ověřena po načtení šablony. Při plánované testovací objednávce ověřit její skutečné doručení. Pro starší objednávky použít archivní PDF příslušného vydání.


<a id="test-objednavky-18-11-2026"></a>
## Test objednávky 18. 11. 2026

Na výslovnou žádost zadavatele má akce **Oznámení o objednávce e-shopu (ID 1)** jediného přímého příjemce **info@ruzickahonza.cz**. Původně používala hlavní e-mail obchodu agro@dabaki.cz. Veřejný kontakt ani příjemci ostatních akcí se neměnili. Správa: Nastavení → Emaily → Automatické zasílání → Systémové akce. Pro návrat přidat příjemce „Hlavní e-mailová adresa e-shopu“, poslat jako přímý adresát, ověřit agro@dabaki.cz a odstranit testovacího příjemce. Před spuštěním potvrdit se zadavatelem cílovou adresu.

Test 2026000001 prošel od detailu šroubu M10 × 1 (SKU 1000084) přes košík a GEIS / převodem až na děkovací stránku a do administrace: zboží 49 Kč včetně DPH, doprava a platba 0 Kč. Poznámka jasně označuje test, zákaz expedice a smyšlené kontaktní údaje. Po dokončení testu byla objednávka stornována a zůstává nezaplacená. Stav ověřen opětovným načtením, veřejný detail znovu uvádí Skladem (1 ks). Záznam objednávky zůstává zachovaný.

Zadavatel v chatu doložil snímky skutečně doručeného zákaznického potvrzení včetně správné položky, ceny, dopravy, platby, variabilního symbolu a sedmidenní splatnosti. Samostatný snímek doložil jedinou přílohu obchodni-podminky-2026-11-17-uprava.pdf, 68,3 kB. Administrace šablony order (ID 1) zobrazovala stejnou přílohu, 69,95 KB. Obsah přijatého PDF ani faktura nebyly v tomto testu otevřeny. Přijetí samostatného oznámení pro obchod dosud není doloženo.

Zjištěná chyba: potvrzení obsahuje prázdné „Číslo účtu“. Nastavení → Základní nastavení → Měny → Koruna (CZK, ID 1) má prázdný Bankovní účet, IBAN, BIC i majitele. Před dalším testem doplnit účet potvrzený firmou. Nevymýšlet platební údaje. E-mail také stále používá starší zelené logo; změna vzhledu nebyla součástí tohoto zásahu.

Na následnou žádost odstraněno „S přátelskými pozdravy,“ ze společné části signature (ID 3). Zůstává název obchodu a kontakty, potvrzení má před podpisem „Děkujeme za objednávku.“ Uložení ověřeno načtením HTML; nové doručení s upraveným podpisem zatím netestováno.


Následná kontrola WEXBO 18. 11. 2026: Nastavení → Eshop → Bankovní účty je prázdné, platba Předem na účet (detail/payment/2) nemá konkrétní platební účet. Zadavatel musí dodat potvrzený firemní účet. Nezaměňovat za účet WEXBO z dokladů poskytovatele hostingu.

Na žádost zadavatele oddělena číselná řada nových objednávek: WEXBO používá 1{YY}[5], Shoptet nyní %YYYY%9 při celkové délce 10 (formát 2026900001). Původní test 2026000001 se nemění. Uložení nastavení ověřeno; v nové řadě ještě nebyla odeslána objednávka. [Správa](../ADMINISTRACE.md#cislovani-objednavek).


<a id="opakovany-test-emailu"></a>
## Opakovaný test oznámení — 18. 11. 2026

Zadavatel následně potvrdil, že u prvního testu dorazilo jen zákaznické potvrzení. Živá kontrola ověřila správného příjemce info@ruzickahonza.cz u akce 1 a zákazníka u akce 2. Šablona orderAdmin (ID 27) měla shodný předmět se zákaznickým potvrzením a nesprávné oslovení zákazníka. Upraven pouze interní e-mail: předmět `[#WEBSITE_NAME#] NOVÁ OBJEDNÁVKA #ORDER_CODE# – oznámení pro obchod`, nadpis „Nová objednávka v e-shopu“, úvod vysvětlující přijetí objednávky a určení provozovateli. Odstraněny instrukce k zaplacení a zákaznické poděkování. Zachovány systémový odkaz objednávky, obsah, adresy a podpis. Uložení ověřeno opětovným načtením.

Test 2026900001 se stejnou adresou info@ pro zákazníka i obchod podle zadavatele znovu doručil jen zákaznické potvrzení. Na další výslovnou žádost použit alias ja@ruzickahonza.cz pro zákazníka u testu 2026900002, interní příjemce zůstal info@. Zadavatel potvrdil doručení obou zpráv a snímkem doložil interní oznámení se správným číslem, položkou a částkou. Při budoucím testu vždy používat rozdílné e-mailové adresy; pro tento případ stačil alias téže schránky. Přesný důvod potlačení při shodě adres není doložen serverovým logem, nelze jej zaměňovat za prokázanou obecnou poruchu doručování.

Oba nové testy: SKU 1000084, 49 Kč včetně DPH, GEIS a převod zdarma. Čísla 2026900001 a 2026900002 potvrzují generování nové řady. Objednávky byly po testu stornovány; ověřen stav v administraci i návrat dostupnosti Skladem (1 ks). Skutečné doručení je doloženo vyjádřením a snímkem zadavatele v tomto chatu, nikoli pouhou přítomností příjemce v nastavení. Účet stále chybí a čeká se na pokyny majitele.
