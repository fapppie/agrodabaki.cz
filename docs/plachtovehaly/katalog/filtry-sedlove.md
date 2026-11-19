# Filtry v kategorii Sedlové haly

Dne 16. 11. 2026 byly na všech 11 kartách doplněny hodnoty zákaznického filtru Délka podle jejich veřejných prodejních variant. Dříve jediná délka 9,15 m nabídla jednu kartu. Ve veřejném výpisu je nyní osm různých šířek a 23 délek. U všech 31 hodnot byl porovnán počet nabízených karet s konfiguracemi všech jedenácti výrobků. [Kategorie Sedlové haly](https://plachtovehaly.agrodabaki.cz/sedlove-haly/)

| Výběr | Ověřený výsledek |
| --- | --- |
| Bez filtru | 11 karet |
| Šířka 10 m | Řada 33, řada PP, hala s bočním vstupem |
| Šířka 10 m a délka 12,2 m | Řada 33 a řada PP |
| Vymazat filtry | Znovu všech 11 karet |

Celý postup proběhl v prohlížeči při šířce 1440 a 390 px. Na telefonu se ovládání otevře přes „Otevřít filtr“. [Počítač](../overeni/filtry-sedlove-1440.png) · [Mobil](../overeni/filtry-sedlove-390.png)

## Údržba

### Kontrola filtru Na skladě — 18. 11. 2026

Na podnět zadavatele ověřena řada 23 (produkt 233). Kategorie bez filtru obsahuje 11 karet, po kliknutí na Na skladě osm; řada 23 vypadne. V administraci Produkty → Přehled → řada 23 → varianty mají SKU 1000414 (9,15 m), 1000415 (12,2 m) a 1000416 (15,25 m) všechna množství 0 ks, dostupnost při kladném skladu Skladem (ID −1) a při vyprodání 05.01. 2027 (ID 14). Samotná hodnota pole dostupnosti při kladném skladu neznamená skutečnou zásobu.

Ve veřejném detailu po postupném výběru všech tří délek ověřen termín 05.01. 2027; stejný výsledek také u délky 9,15 m při šířce 390 px. Filtr odpovídá uloženým nulovým zásobám. Nastavení ani sklad nebyly měněny. Skutečný fyzický sklad tato kontrola nepotvrzuje; jeho aktualizace podle firmy zůstává součástí otevřeného úkolu před přepnutím. Zdroj: živá [kategorie s filtrem](https://plachtovehaly.agrodabaki.cz/sedlove-haly/?stock=1), [detail řady 23](https://plachtovehaly.agrodabaki.cz/sedlova-hala-rady-23/) a čtení tří variant v administraci.

Při přidání nebo vyřazení rozměrového provedení otevřete v administraci produkt → Parametry → Parametry pro filtrování. Udržujte pevnou šířku a u parametru Délka všechny různé délky přítomné na kartě. Jednotku zapisujte s mezerou, desetinné rozměry s čárkou, například 12,2 m. Napříč dnešními kartami jde o 66 přiřazení délek. Zvlášť ponechte doložené hodnoty 21,3 m a 21,35 m u různých modelů.

Přiřazení filtrů kategoriím je v Nastavení → Produkty → Parametrické filtry. Používají se stávající informační parametry Šířka a Délka. Tato funkce je zahrnuta v tarifu Business. [Nastavení parametrických filtrů](https://podpora.shoptet.cz/parametricke-filtry/) · [Dostupnost v tarifech](https://doplnky.shoptet.cz/parametricke-filtry)
