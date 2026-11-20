# Převzetí automatizace Shoptetu bez pracovní cache

Výchozí provoz po předání je Shoptet. Kolega potřebuje klon repozitáře a vlastní přístupy předané bezpečně zvlášť. Nepotřebuje historii chatů, `.wexbo-cache`, původní `.shoptet-cache` ani interní runtime Codexu. Tento návod nepředpokládá, že přepnutí původní domény již proběhlo; skutečný stav je v [plánu](../PLAN.md).

## Instalace na novém počítači

Nainstalujte podporovanou LTS verzi Node.js s npm. Z kořene klonu spusťte:

```powershell
cd src/plachtovehaly/tools/browser
npm ci
npm run install-browser
npm test
```

Balíček a lockfile určují verzi Playwrightu. Prohlížeč se instaluje zvlášť a spouští se jako samostatný headless Chromium bez uživatelského profilu. Při změně verze Playwrightu zopakujte instalaci prohlížeče. Na Linuxu mohou být potřeba systémové knihovny (`npx playwright install --with-deps chromium`). [Oficiální postup](https://playwright.dev/docs/browsers).

## Přístupy

V kořeni klonu vytvořte lokální ignorovaný `accesses.txt` podle verzované prázdné [šablony accesses.example.txt](../../accesses.example.txt). Existující soubor nepřepisujte prázdnou šablonou. Pro přihlášení Shoptetu vyplňte tyto dva klíče, každý právě jednou:

```text
SHOPTET_EMAIL=<přihlašovací e-mail správce>
SHOPTET_PASSWORD=<heslo správce>
```

Zástupné hodnoty nahraďte v místním editoru. Nepoužívejte uvozovky; vše za prvním `=` je hodnota, včetně dalších `=` a případných mezer v hesle. Starý formát „třetí řádek, e-mail / heslo“ nový modul záměrně nečte. Nepředávejte kolegovi celý soubor s přístupy k jiným službám. Pro běžnou správu stačí oprávněný účet Shoptetu; SFTP firemního webu a DNS se předávají samostatně podle rozsahu práce.

Soubor používá `KEY=value`, sekce jsou komentáře začínající `#`. Prázdné řádky se ignorují. Klíče mají velká písmena, bez mezer kolem `=`; hodnoty jsou jednořádkové, bez expanze proměnných a bez zpracování escape sekvencí. Není to shell skript a nespouští se jako příkaz. Nejde o plnou implementaci dotenv. Uvnitř hodnoty se `#`, `/` i `=` zachovávají doslovně.

| Služba | Klíče |
| --- | --- |
| Shoptet | `SHOPTET_ADMIN_URL`, `SHOPTET_URL`, `SHOPTET_EMAIL`, `SHOPTET_PASSWORD` |
| E-mail | `EMAIL_USERNAME`, `EMAIL_PASSWORD` |
| SFTP | `SFTP_HOST`, `SFTP_PORT`, `SFTP_USERNAME`, `SFTP_PASSWORD` |
| Historický WEXBO | `WEXBO_ADMIN_URL`, `WEXBO_USERNAME`, `WEXBO_PASSWORD` |

Výchozí veřejná URL je `https://plachtovehaly.agrodabaki.cz/`, administrace `https://plachtovehaly.agrodabaki.cz/admin/`. Tyto netajné parametry jsou předvyplněné i v šabloně. Adresa `https://828678.myshoptet.com/admin/` zůstává záložním přímým vstupem při potížích s vlastní doménou; není výchozím veřejným odkazem. Používejte cestu `/admin/` s koncovým lomítkem.

URL a hostitelé jsou evidované parametry, hesla jsou tajné údaje. Současný Playwright modul čte pouze `SHOPTET_EMAIL` a `SHOPTET_PASSWORD`; cílovou doménu záměrně určuje a ověřuje ve zdrojovém kódu. Samotná změna `SHOPTET_ADMIN_URL` tedy nepřesměruje automatizaci na jiný obchod. Ostatní klíče jsou určené pro příslušné provozní postupy, nepřidávají automaticky podporu nové služby. Přístupy k DNS či iDokladu doplňte až podle skutečně zvolené služby; šablona je nevymýšlí.

Od 20. 11. 2026 je celý lokální soubor převeden na pojmenované klíče. Historické skripty v cache, které čtou pevné číslo řádku nebo dvojici `uživatel / heslo`, s ním nejsou kompatibilní. Před jejich případným použitím převeďte čtení na odpovídající klíče; neobnovujte starý formát kvůli historickému skriptu. Staré skripty nebyly tímto plošně migrovány ani spuštěny.

Přístupy nevkládejte do příkazů ani chatu. Nezapínejte při přihlašování debug logy Playwrightu, trace nebo video; mohou zachytit vyplňované hodnoty. Ani chyby callbacku nevypisujte celé bez kontroly obsahu.

## Čtecí zkouška přihlášení

Ze složky `src/plachtovehaly/tools/browser`:

```powershell
npm run check-login
```

Skript pouze otevře administraci, přihlásí se, ověří zmizení heslového pole a přítomnost odkazu pro odhlášení a ukončí prohlížeč. Nemění katalog ani nastavení, neexportuje zákazníky a neukládá cookies. Chyba má návratový kód 1 a obecnou zprávu bez citlivého obsahu. Úspěšná lokální jednotková zkouška `npm test` nenahrazuje tento test skutečného přihlášení.

Pokud kontrola selže, ověřte instalaci, existenci obou klíčů a dostupnost administrace. Změněný formulář, dvoufaktorové ověření nebo CAPTCHA vyžadují upravit postup či použít povolenou samostatnou relaci prohlížeče; neopakujte neúspěšné přihlášení hromadně. Modul nepředstavuje obcházení oprávnění nástrojů aktuálního prostředí.

## Použití při dalším úkolu

Verzovaný [session.cjs](../../src/plachtovehaly/tools/browser/session.cjs) nahrazuje závislost návodů na lokálním `flag-common.cjs`. Poskytuje `run(async (page, browser) => { ... })` a `base`. Přihlášení načítá z kořene projektu bez ohledu na pracovní adresář. Při zavření relace se zahodí profil a cookies. Callback může zapisovat do administrace: jeho konkrétní rozsah musí odpovídat zadanému úkolu a před spuštěním se kontroluje.

Před každou změnou pořiďte novou zálohu dotčených polí nebo export z aktuálního Shoptetu. Pracovní soubory ukládejte do nově vytvořené `.shoptet-cache` v kořeni klonu. Potom upravte pouze požadované hodnoty, znovu je načtěte a ověřte podle [administrace](ADMINISTRACE.md) a [správy katalogu](katalog/SPRAVA-KATALOGU.md). Opakovaně používané skripty patří do `src/plachtovehaly/tools`, jednorázová data a pokusy do cache. Původní lokální skripty automaticky nepřepínáme na nový modul.

## Co zůstává z migrace WEXBO

Migrační mapy, původní skripty a historické protokoly zachováváme jako podklady přechodu a dohledatelnosti. Nejsou výchozím nástrojem běžné správy. Starý import nesmí obnovit historické ceny, zásoby nebo dostupnosti. Pro nové produkty se používá současný Shoptet a podklady firmy.

Historické generátory mohou vyžadovat Python, lxml, původní HTML WEXBO nebo konkrétní starý export. Bez těchto vstupů nejsou reprodukovatelné; nový export Shoptetu nenahradí původní data WEXBO. Pokud se k migraci skutečně vracíme, potřebné vstupy zajistí původní správce bezpečně zvlášť. Pro běžné předání je nevyžadujte.

Stejně tak nelze z nového exportu zrekonstruovat historickou zálohu „před změnou“. Odkazy do cache ve starých protokolech dokládají tehdejší práci, nejsou příslibem dostupnosti této zálohy v klonu. Před budoucí změnou se pořizuje vlastní čerstvá záloha. Přesměrování původní domény a jejich mapy se zachovávají i po spuštění Shoptetu.

## Přejímací kontrola kolegy

- Instalace a `npm test` projdou v novém klonu bez původních cache.
- S vlastním oprávněným účtem projde `npm run check-login`.
- Správce najde konkrétní SKU, jeho varianty a místo úpravy podle návodu katalogu.
- Správce umí pořídit novou zálohu před zásahem; nepotřebuje historické lokální soubory autora.

Kontrolu na počítači kolegy zaznamenejte do [předání](PREDANI.md). Předání není potvrzené jen tím, že existuje tento návod.
