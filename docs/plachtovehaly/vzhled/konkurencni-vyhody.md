# Konkurenční výhody · návrh pro homepage a detail produktu

Aktuálně se lišta zobrazuje pouze na úvodní stránce. Nasazeno 17. 11. 2026. Níže jsou také měření a snímky z přípravné fáze. Vykreslen ve stávajícím Adaminu v lokálním náhledu prohlížeče. Obsah, CSS a ikony jsou připravené pro revizi.

| Nadpis | Podtitulek | Cíl po kliknutí |
| --- | --- | --- |
| Rozmanitý výběr | Haly, přístřešky i garáže | Mapa webu, která začíná přehledem sortimentu |
| Poradíme s výběrem | Zavolejte nám | Kontakty s telefonem a provozní dobou |
| Přivezeme a vyložíme | Vykládka u vás je v ceně dopravy. | VOP, kotva cena-platba-a-dodani-v-ceske-republice |
| Díly i po nákupu | Nože, řemeny a ložiska | Kategorie Náhradní díly ke strojům |

## Východiska

Dosavadní odkaz o výběru rozměrů vede jen na Obloukové haly, přestože zákazník může vybírat mezi několika konstrukcemi. Druhý odkaz vede na náhradní oblouky. Doprava a platby jsou pouze text. Návrh každému sdělení dává vlastní užitečný cíl. Složení u vozidla vychází z podmínek standardního dodání; jeřáb a montáž mají individuální režim. U náhradních dílů odkazujeme na současný katalog bez příslibu dostupnosti konkrétního dílu v budoucnu. [Obchodní podmínky](https://plachtovehaly.agrodabaki.cz/obchodni-podminky/#cena-platba-a-dodani-v-ceske-republice)

HALMAX ukazuje služby kolem stavby a kontakt na člověka, který poradí. Haly skladem dokládají rozsah nabídky konstrukcemi a způsoby využití. U Agro Dabaki dává smysl převzít tuto míru konkrétnosti a sdělení vázat na vlastní nabídku. Baymard při testu produktového detailu zjistil, že část zákazníků přehlédla informaci o dopravě umístěnou jen v banneru. Lišta tedy může na výhodu upozornit, podmínky dodání má kupující najít rovněž při nákupu. [HALMAX](https://www.halmax.cz/) · [Haly skladem](https://www.halyskladem.cz/) · [Baymard Institute](https://baymard.com/research-articles/avoid-banners-only-free-shipping)

## Podklady a měření

Ve složce Agro_dabaki_visual jsou čtyři SVG varianty loga a jednostránkový PDF manuál s ukázkou značky a hlavičky. Samostatná sada funkčních ikon zde chybí. Současné čtyři ikony lišty používají zelenou #487237. Návrh kombinuje obrys #344D46 a akcent #00B07E. První ikonou jsou čtyři siluety v jediném SVG: sedlová hala, oblouková hala, přístřešek se slepicí a garáž. Na desktopu kresba měří 56 × 42 px, v mobilní mřížce 44 × 32 px.

Na homepage při 1680 px byla původní položka vysoká 46 px. K tomu se přičítalo 15 px nahoře i dole u položek a 40 + 20 px odsazení obalu. Na detailu přidávala šablona mimo vlastní blok také 30 px nahoře i dole. Návrh cílí pouze na lištu těchto dvou umístění. Ponechává klikatelným položkám minimální výšku 44 px a na telefonu od 360 px skládá nabídku do dvou sloupců.

| Šířka okna | Homepage původně → návrh | Detail obloukové haly původně → návrh |
| --- | --- | --- |
| 1680 px | 136 → 66 px | 136 → 90 px |
| 1024 px | 212 → 66 px | 212 → 144 px |
| 390 px | 364 → 155 px | 364 → 179 px |
| 320 px | 404 → 228 px | 404 → 252 px |

Měření zahrnuje vlastní blok a jeho svislé vnější okraje. Sousední sekce zůstaly ve svém stávajícím rozložení. Na všech čtyřech šířkách jsme ověřili, že obsah nepřetéká vodorovně. [Homepage na počítači](../overeni/vyhody-navrh-home-1680.png) · [Homepage na telefonu](../overeni/vyhody-navrh-home-390.png) · [Detail na počítači](../overeni/vyhody-navrh-produkt-1680.png) · [Detail na telefonu](../overeni/vyhody-navrh-produkt-390.png)

## Správa nasazené verze

Vzhled a obsah → Bannery → Konkurenční výhody. Interní názvy mají pořadí 01–04, ID jsou 13, 11, 14 a 12. Používají ikony brand-sortiment, brand-telefon, brand-doprava a brand-dily ze [složky produkčních SVG](../../../src/plachtovehaly/shoptet/vyhody/). [Styl lišty](../../../src/plachtovehaly/shoptet/vyhody/lista.css) je v Editor → HTML kódy → Záhlaví, blok dabaki-konkurencni-vyhody. [Živá verze na telefonu](../overeni/vyhody-live-home-390.png) · [Živá verze na počítači](../overeni/vyhody-live-home-1680.png).
Pro všechny čtyři bannery je v poli Viditelný na zaškrtnuta pouze Úvodní stránka. Kategorie a Stránka produktu jsou vypnuté. Podtitulek „Zavolejte nám“ se upravuje u banneru 02 Poradíme s výběrem (ID 11).

## Vystředění a odsazení od 17. 11. 2026

CSS výhod používá justify-content:center a flex-wrap:nowrap. Mobilní mřížka 360–600 px zachovává dosavadní uspořádání. Blok titulní strany nastavuje horní padding .homepage-box.welcome-wrapper s obsahem .dabaki-home na 8 px; s okrajem nadpisu vzniká mezera 24 px místo 96 px. Ověřeno při 320, 390, 1024 a 1680 px bez přetečení. V HTML záhlaví je CSS výhod kompaktní kvůli limitu 8192 znaků včetně normalizace konců řádků. Pro návrat odeberte uvedené dvě flex vlastnosti a pravidlo paddingu.

17. 11. 2026 – První ikona má skutečně 56 × 42 px, v mobilní mřížce 44 × 32 px. Při kompaktním vkládání CSS zachovejte mezeru mezi :first-child a :is(...); označuje potomka. Její odstranění zneplatnilo cílení a zmenšilo ikonu na 32 px. Opraveno a ověřeno při 320/390/1024/1680 px.
