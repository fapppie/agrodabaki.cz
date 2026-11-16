# Informační stránky pro Shoptet

Stav přípravy k 15. 11. 2026. Cílové cesty v tabulce jsou relativní k `https://plachtovehaly.agrodabaki.cz`. Kontakty, návod k nákupu, obchodní podmínky a ochrana údajů už mají odkazy na titulní stránce Shoptetu. Po výměně obsahu zkontrolovat cíle v patičce, v košíku i v objednávkových e-mailech. Přesměrování ze staré domény patří do dne přepnutí.

| Stránka | Zdrojové cesty na WEXBO | Cíl v Shoptetu | Umístění |
| --- | --- | --- | --- |
| Kontakty | `/m/kontakt-6/`, `/m/6/` | `/kontakty/` | Hlavička a patička |
| Jak nakupovat | `/m/informace-4/vse-o-nakupu-5/`, `/m/4/5/` | `/jak-nakupovat/` | Horní lišta a patička |
| Obchodní a reklamační podmínky | `/m/informace-4/obchodni-podminky-16/`, `/m/4/16/` | `/obchodni-podminky/` | Patička a objednávka |
| Ochrana osobních údajů | `/m/informace-4/ochrana-soukromi-17/`, `/m/4/17/` | `/podminky-ochrany-osobnich-udaju/` | Patička a formuláře |
| Blog | `/m/blog-15/` | `/jak-vybrat-plachtovou-halu/` | Odkaz ze stránky Jak nakupovat |

## Kontakty – text pro zákazníky

Potřebujete poradit s výběrem haly nebo ověřit, zda náhradní díl pasuje na váš stroj? Zavolejte nám na **[+420 774 960 063](tel:+420774960063)** od pondělí do pátku mezi **8.00 a 16.00** nebo napište na **[agro@dabaki.cz](mailto:agro@dabaki.cz)**. U dotazu na náhradní díl připojte označení modelu.

**Sídlo společnosti**  
Agro Dabaki s.r.o.  
Jankov 215, 257 03 Jankov  
IČO 05763177

Chcete si zboží vyzvednout osobně? Ozvěte se předem, abychom vám potvrdili místo a termín odběru.

## Podklady k přenosu

- **Identita firmy.** ARES přímo k IČO 05763177 vrací společnost Agro Dabaki s.r.o. a sídlo č.p. 215 v Jankově. Původní kontakty označují Blanickou 152 za fakturační adresu, obchodní podmínky ji označují za sídlo a blog uvádí Jankov 215. S firmou potvrdit současnou fakturační adresu, umístění skladu a místo převzetí reklamací. Telefon, e-mail a provozní dobu telefonu uvádí původní web. [ARES](https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty/05763177) · [Kontakty WEXBO](https://www.plachtovehaly-agrodabaki.cz/m/kontakt-6/)
- **Nákup, doprava a platba.** Průvodce původního obchodu uvádí GEIS a FOFR, hotovost ve skladu a převod podle faktury. Odeslání do 48 hodin podmiňuje dostupností a způsobem platby. Pro český Shoptet použít [schválené podmínky dopravy a platby](../objednavky/doprava-a-platby.md). Před zveřejněním potvrdit osobní odběr a platební údaje. Text průvodce potom odvodit od skutečných voleb v Shoptetu pro rozměrnou halu a malý díl. [Původní informace o nákupu](https://www.plachtovehaly-agrodabaki.cz/m/informace-4/vse-o-nakupu-5/)
- **Obchodní podmínky.** Ve zdroji je jiná doména `www.Dabaki-eshop.cz`, rozdílné číslo popisné proti ARES a překlep v PSČ. Text také slibuje přílohy obchodních podmínek a zásad ochrany osobních údajů v e-mailovém potvrzení objednávky. Převzít od provozovatele aktuální znění, doplnit schválenou adresu pro reklamace a ověřit skutečné přílohy zprávy. [Původní podmínky](https://www.plachtovehaly-agrodabaki.cz/m/informace-4/obchodni-podminky-16/)
- **Ochrana osobních údajů.** Krátký odkaz z patičky vede na stránku s HTTP 200, která oznamuje chybějící nebo neaktivní článek. Pro Shoptet si vyžádat od provozovatele aktuální text pro objednávky, kontaktní formulář a případný newsletter. Ověřit každý odkaz přímo u příslušného formuláře. [Odkaz ze staré patičky](https://www.plachtovehaly-agrodabaki.cz/m/4/17/)
- **Blog.** Jedna zdrojová stránka obsahuje čtyři tematické bloky o místě nákupu, průmyslovém skladování, zemědělském využití a sortimentu Agro Dabaki. Při přenosu zachovat původní blogovou URL přes přesměrování na nový rozcestník. U textů o odolnosti konstrukce, hořlavosti, prodloužení haly a kotvení nejprve přiřadit konkrétní model a jeho technický list. [Původní blog](https://www.plachtovehaly-agrodabaki.cz/m/blog-15/)

## Veřejné ověření a přepnutí adres · 15. 11. 2026

Všechny čtyři informační stránky ze sitemapy WEXBO vrátily HTTP 200. Kontakty na novém webu uvádějí telefon, e-mail a sídlo firmy a obsahují kontaktní formulář. V sekci **Vzhled a obsah → Stránky → Jak nakupovat** (ID 27) byl publikován [nový průvodce](../../../src/plachtovehaly/shoptet/jak-nakupovat.html). Na veřejné stránce byly ověřeny výběr varianty, objednání, hranice 100 000 Kč včetně DPH, oba způsoby platby a odkaz na Kontakty. Oba cíle vracejí HTTP 200 a uvádějí vlastní kanonickou adresu. [Jak nakupovat](https://plachtovehaly.agrodabaki.cz/jak-nakupovat/) · [Kontakty](https://plachtovehaly.agrodabaki.cz/kontakty/)

[Import pro den přepnutí](../../../src/plachtovehaly/migrace/presmerovani-wexbo-stranky.csv) obsahuje dvě plné a dvě krátké adresy WEXBO pro tyto dvě stránky. Obchodní podmínky (ID 39) mají v Shoptetu HTTP 200, ale obsahují ukázkové pokyny. Před přesměrováním potřebují zveřejněné znění provozovatele. Původní Blog má obsah o výběru, skladování a zemědělství. Zamýšlená cesta na Shoptetu `/blog/` vrací HTTP 404. Po zveřejnění průvodce ověřit jeho obsah a kanonickou adresu a přidat zdrojovou cestu do importu. Ochrana údajů z patičky je nad rámec čtyř stránek ze sitemapy.

## Jak vybrat plachtovou halu pro sklad nebo techniku

Redakční podklad k publikované stránce. [Nasazené HTML](../../../src/plachtovehaly/shoptet/jak-vybrat-plachtovou-halu.html)

**Kolik místa potřebujete uvnitř?** Změřte věci, které chcete pod střechu uložit. Připočtěte prostor, kudy projdete k uloženému materiálu nebo projedete se strojem. Při ukládání palet si načrtněte i cestu od vrat k zadní řadě. Rozměry konkrétních provedení porovnejte v nabídce [obloukových](https://plachtovehaly.agrodabaki.cz/obloukove-haly/) a [sedlových hal](https://plachtovehaly.agrodabaki.cz/sedlove-haly/).

**Projede váš stroj vraty?** Změřte nejširší místo stroje včetně vybavení a jeho výšku v poloze, ve které zajíždí dovnitř. Tyto hodnoty porovnejte se šířkou a výškou vjezdu vybraného provedení. Zvažte také směr příjezdu a místo před vraty, zvlášť pokud při vjezdu zatáčíte nebo couváte s přívěsem.

**Co ověřit před výběrem konkrétní haly?** Připravte si rozměry volné plochy, typ povrchu a místo instalace. Pokud potřebujete ověřit kotvení nebo zatížení konstrukce, pošlete nám tyto údaje spolu s odkazem na vybraný model. Vlastnosti se mohou lišit i u podobně vypadajících hal.

**Kde zjistíte dostupnost a dopravu?** V detailu výrobku zvolte rozměr a barvu. Cena a dostupnost patří k vybranému provedení. Podrobnosti o českých dopravcích a platbě najdete v [průvodci nákupem](https://plachtovehaly.agrodabaki.cz/jak-nakupovat/). Pokud vybíráte mezi dvěma halami, přiložte do [dotazu](https://plachtovehaly.agrodabaki.cz/kontakty/) odkazy na obě a napište, co chcete do haly umístit.

**Poznámka pro redakci.** Při návrhu struktury jsme srovnali, jak Halmax popisuje typ vjezdu u konkrétní haly a TENTino člení nabídku podle využití skladu. Pro zákazníky Agro Dabaki jsme z toho odvodili otázky na rozměr vrat, manipulaci uvnitř a výběr varianty. Technické údaje, služby a termíny musejí vycházet z podkladů Agro Dabaki. [Halmax – hala s bočním vjezdem](https://www.halmax.cz/plachtove-haly/plachtova-hala-sirka-10-m-vyska-6-1-m-dp-bocni-vjezd/) · [TENTino – skladové haly](https://www.tentino.cz/skladove-haly-tentino/)

## Průvodce výběrem haly · 16. 11. 2026

Ve Vzhled a obsah → Stránky je publikovaný průvodce pod ID 791. Veřejně ověřeny čtyři části textu, kanonická adresa a čtyři funkční odkazy na obě kategorie hal, Kontakty a Jak nakupovat. Na šířkách 1440 a 390 px se stránka vejde bez vodorovného posuvu a bez výzvy ke komentování. Při přepnutí použít aktuální [import pěti adres](../../../src/plachtovehaly/migrace/presmerovani-wexbo-stranky.csv) včetně původního blogu. [Veřejný průvodce](https://plachtovehaly.agrodabaki.cz/jak-vybrat-plachtovou-halu/)
