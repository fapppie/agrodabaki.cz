# Varianty katalogu podle rozměru a barvy

**Animal, nasazeno 15. 11. 2026.** V kategorii Přístřešky pro zvířata je jediná [karta Animal](https://plachtovehaly.agrodabaki.cz/pristresek-pro-zvirata-animal/) s deseti rozměry od 4 × 4 do 12 × 12 m. V Shoptetu se spravuje v Produkty → Přehled pod ID 659. [Konfigurace a společný popis](../../../src/plachtovehaly/migrace/animal-varianty.xml) obsahují srovnání rozměrů, gramáže, rozteče a vstupu. Jediným společným technickým parametrem je vojenská zelená barva plachty. U provedení 12 × 12 m zbývá od dodavatele získat gramáž, rozteč a rozměry vstupu.

Po importu úplný export potvrdil u deseti původních SKU jedinečnost, šířku a délku, cenu a měnu, skladové množství, obě dostupnosti, viditelnost a pozice snímků variant ve 24členné galerii. Veřejný detail a kategorie vracely HTTP 200. Všechna tři původní URL šířek 8, 10 a 12 m vracela přímo 301 na společný detail. Původní [karty 665, 668 a 671](../../../src/plachtovehaly/migrace/animal-archiv.xml) mají nulové zásoby a pomocné kódy. Všech deset vazeb z WEXBO je v [mapě URL](../../../src/plachtovehaly/migrace/mapa-url.csv).

Dřívější dávka `rodiny-variant.xml` dokumentuje stav před rozšířením. Její opakování by obnovilo staré popisy a neúplný výběr Animal. Nový export lze ověřit příkazem `python src/plachtovehaly/tools/priprav_animal.py --verify cesta-k-exportu.xml`. Přepínač `--map` při úspěšné kontrole aktualizuje všech deset cílů WEXBO v mapě URL.

15. 11. 2026 zadavatel potvrdil, že rozměry a barvy stejného výrobku patří na společnou kartu napříč sortimentem. Dávka po řadě SP zahrnuje 28 dalších rodin. V úplném exportu před sloučením jim odpovídá 112 karet a 152 prodejních kódů. Každý kód má v [mapě rodin](../../../src/plachtovehaly/migrace/rodiny-variant.json) původní URL WEXBO, ID výchozí karty a vlastní kombinaci voleb.

| Sortiment | Společné řady | Co zákazník vybírá |
| --- | --- | --- |
| Sedlové haly | Dvojitá konstrukce 6,1 m a dalších devět řad | Délku a dostupné provedení plachty. Řada s bočním vstupem a řada PP mají odlišná vrata. |
| Obloukové haly | Zipová vrata 6,1 m a naviják 9,15 m | Délku, barvu a gramáž dostupné plachty. U bílé pilotní haly délky 7,3 m je ve zdroji 650 g/m². |
| Zastřešení, garáže, přístřešky | Čtyři konstrukční řady zastřešení kontejnerů, garáž pro karavan 4,3 × 9,2 m a Animal s hrazením a plachtou 750 g/m² | Rozměr, u příslušné řady také barvu, délku nebo rozteč. Každé provedení má vlastní výčet technických údajů. |
| Stroje | AGE, AGF PRO, FFM, LXG, FM a PRMH | Velikost podle označení výrobce. Technické údaje velikosti zahrnují známé údaje o nosnosti, požadovaném výkonu, záběru a výbavě. |
| Náhradní díly | Klínové řemeny B 17, gufera AGF, pouzdra řemenice AGF a šrouby M24 pro AGF | Přesné rozměry. U řemenů se zobrazují obě původní délky Lw a Li. |

**Příprava importu.** [Generátor](../../../src/plachtovehaly/tools/seskup_varianty.py) z [mapy URL](../../../src/plachtovehaly/migrace/mapa-url.csv) a úplného exportu před sloučením připravil [hlavní XML](../../../src/plachtovehaly/migrace/rodiny-variant.xml) a [archiv původních karet](../../../src/plachtovehaly/migrace/rodiny-archiv.xml). V obou dávkách bylo ověřeno schéma Shoptetu. U každého původního kódu byly porovnány cena, stav zásob a dostupnosti, zkontrolována vazba fotografie na galerii a jedinečnost výběru v rodině. Pro archiv je připraveno 84 karet se 115 pomocnými kódy a s odkazem na jejich společný produkt. Už objednané kódy se evidují na společných kartách. Protokol živého importu a zkouška objednání patří do [plánu](../../PLAN.md).

**Případy, kde výběr podle rozměru nestačí.**

- Štípačky WX mají podle modelu horizontální, vertikální nebo přestavitelnou polohu pístu. U planýrovačů se mění závěs nebo válec. U vidlí Deleks D se mění nosnost a potřebný výkon traktoru, u D 1200 uvádí zdroj nosnost 1 500 kg. Karty zůstávají samostatné.
- U podkopových lžic se nejdřív volí kompatibilní podkop BH nebo BH 5 R. Uvnitř každé rodiny jsou šířky již variantami. U ložisek a oblouků je před spojením třeba potvrdit shodu uchycení. U dvou předních krytů řemenu AGF chybí výkres nebo označení dílu.
- U Animal šířky 8 m se mění gramáž oproti řadě 4 a 6 m. Verze 10 m má jinou rozteč a u verze 12 m nejsou doložené stejné technické údaje. U zastřešení C4040 se otevřené čelo a čelo s vraty liší dodanou výbavou.
- U odložených hal s nejasnými rozměry, barvou nebo konstrukcí zůstávají důvody postupně k ověření v mapě původních URL. Po obdržení technického listu patří potvrzené kombinace do odpovídající rodiny.
