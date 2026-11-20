# Nástroje projektu

Přístupy se čtou jako pojmenované klíče z lokálního `accesses.txt`, podle [prázdné šablony](../../../accesses.example.txt) a [popisu formátu](../../../docs/plachtovehaly/AUTOMATIZACE.md#přístupy). Historické skripty čtoucí pevná čísla řádků či `uživatel / heslo` vyžadují před spuštěním úpravu.

Pro běžnou správu Shoptetu začněte v [návodu převzetí automatizace](../../../docs/plachtovehaly/AUTOMATIZACE.md). Přenositelný Playwright modul, závislosti a čtecí zkouška přihlášení jsou v `browser/`.

Python skripty v tomto adresáři vznikly pro jednotlivé migrace katalogu a přípravu obsahu. Nejde o startovací postup po převzetí obchodu. Před použitím ověřte jejich vstupy, výstupy a aktuálnost obchodních dat. Migrační generátory mohou potřebovat původní `.wexbo-cache`, exporty v `.shoptet-cache` a knihovnu lxml; tyto lokální podklady klon neobsahuje. Žádný historický import nespouštějte automaticky při instalaci.
