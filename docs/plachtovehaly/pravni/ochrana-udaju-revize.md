# Kontrola podkladů k ochraně osobních údajů

Dne 16. 11. 2026 se na veřejné stránce stále zobrazoval pokyn Shoptetu, kde si stáhnout jeho vzor. K projednání s provozovatelem vznikl [pracovní zákaznický text](ochrana-udaju-pracovni.md). Před publikací nahradit jeho tři pracovní poznámky potvrzenými údaji. [Veřejná stránka](https://plachtovehaly.agrodabaki.cz/podminky-ochrany-osobnich-udaju/)

## Co je doloženo

Na stránce Kontakty jsou údaje společnosti, veřejný kontakt a formulář s poli jméno a příjmení, e-mail a zpráva. Produktový dotaz pracuje také s telefonem a vazbou na výrobek. Obě systémové akce zasílají zprávu na agro@dabaki.cz. Web odkazuje na registraci. VOP a skutečný košík dokládají převod, dobírku a dopravce GEIS nebo externí spedici. Samotná registrace domény u ACTIVE 24 neprokazuje, kdo zpracovává poštu na adrese dabaki.cz. [Kontakty](https://plachtovehaly.agrodabaki.cz/kontakty/) · [Nastavení dotazů](../objednavky/formulare-dotazy.md) · [Doprava a platby](../objednavky/doprava-a-platby.md) · [VOP](https://plachtovehaly.agrodabaki.cz/obchodni-podminky/)

Ve dvou čistých nepřihlášených relacích Chromu byla otevřena stránka zásad, provedena jedna volba a poté otevřen detail plachtové garáže pro karavan, bez kliknutí na sociální ikony. Zaznamenány byly pouze názvy cookies, jejich doby platnosti a hostitelé požadavků. Níže jsou výsledky tohoto scénáře, ne úplná inventura e-shopu a pokladny.

| Kdy | Co prohlížeč pozoroval |
| --- | --- |
| Před volbou ve dvou čistých relacích | Lišta obsahovala Nastavení, Odmítnout a Souhlasím. PHPSESSID na dobu relace a language přibližně 365 dní. Síťové požadavky na domény obchodu, cdn.myshoptet.com, ajax.googleapis.com, cdn.jsdelivr.net, cdnjs.cloudflare.com, code.jquery.com a connect.facebook.net. |
| Po odmítnutí a otevření produktu | CookiesConsent přibližně na 7 dní. Mezi dalšími cíli byly platform.twitter.com, syndication.twitter.com, www.facebook.com a static.xx.fbcdn.net. Přibyla krátkodobá cookie __cf_bm na doméně .twitter.com. Odkaz pro změnu volby byl v patičce. |
| Po souhlasu a otevření téhož produktu | CookiesConsent přibližně na 180 dní. Zachycena stejná skupina hostitelů a __cf_bm na .twitter.com. |

Síťový požadavek vystavuje cílovému serveru přinejmenším připojovací informace návštěvníka. Ze jména hostitele ani z __cf_bm nelze dovodit konkrétní reklamní účel, právní roli poskytovatele, zemi zpracování nebo provedení profilování. Prioritně určit, která součást stránky sociální požadavky spouští. Pokud jsou součástí volitelného sdílení, vhodnou možností jsou obyčejné odkazy spouštěné kliknutím nebo načtení komponenty až po odpovídající volbě. Po případné změně znovu měřit před volbou, po odmítnutí, po souhlasu a po jeho odvolání, včetně košíku. [Pokyny ÚOOÚ](https://uoou.gov.cz/verejnost/qa-otazky-a-odpovedi/cookies) · [Nastavení Shoptetu](https://podpora.shoptet.cz/cookies/)

## Původní otázky a rozsah technické revize

1. Kdo skutečně poskytuje schránku agro@dabaki.cz, fakturaci, případné externí účetnictví, IT podporu a zálohy? Které doplňky mají přístup k objednávkám nebo účtům? Doložit příjemce, rozsah, právní role a zpracovatelské smlouvy. Ověřit kontaktní osobu pro práva a případně kontakt jmenovaného pověřence. [Shoptet ke zpracovatelské smlouvě](https://www.shoptet.cz/slovnik-pojmu/zpracovatelska-smlouva/)
2. Po jaké době se v Shoptetu i e-mailové schránce mažou dotazy, neaktivní účty, logy a zálohy a kdo to zajišťuje? Potvrdit oddělení účetních dokladů, důkazů pro konkrétní nárok a ostatních dat; datum výmazu schránky nelze odvodit z lhůty DPH. [Zákon o DPH, § 35](https://www.e-sbirka.cz/sb/2004/235)
3. Které marketingové či analytické služby jsou skutečně aktivní, zasílá se newsletter nebo dotazník po nákupu, dochází k profilování či k automatizovanému rozhodnutí s významnými účinky? Pro každou aktivní činnost doložit právní titul, účel, rozsah, odvolání souhlasu či možnost odmítnutí, lhůty a příjemce. Prověřit technické i volitelné služby, včetně režimu sdílení Facebook/X. Porovnat je se seznamem v liště. Samotné potvrzení seznámení u obchodního dotazu nepoužívat jako marketingový souhlas.
4. Ověřit předávání mimo EHP a případný vzdálený přístup podle skutečných dodavatelů a smluv. Pokud k němu dochází, doplnit zemi, právní nástroj, podmínky a kontakt pro získání kopie záruk. Prověřit také nepřímé získání údajů jiných kontaktů při dodání. Po odsouhlasení finálního znění doplnit datum a ověřit dostupnost z formulářů, registrace, objednávky, patičky a VOP.

Základní informační rozsah vychází z čl. 12–14 GDPR, práva z čl. 15–22 a stížnost z čl. 77. [GDPR v Úředním věstníku EU](https://eur-lex.europa.eu/legal-content/CS/TXT/PDF/?uri=CELEX%3A32016R0679) · [Stížnost u ÚOOÚ](https://uoou.gov.cz/verejnost/stiznost-na-spravce-nebo-zpracovatele)

## Odpovědi zadavatele a další postup, 16. 11. 2026

- Majitel sám spravuje firemní schránku, objednávky, fakturaci, účetnictví a zálohy a odpovídá na žádosti zákazníků. Z výpovědi o osobním přístupu nelze určit poskytovatele poštovní nebo zálohovací infrastruktury. Příjemce a předávání údajů posoudit také podle smluv a nastavení služeb.
- Dne 16. 11. 2026 provozovatel potvrdil čtvrtletní kontrolu běžných dotazů přes 12 měsíců od uzavření a účtů přes 24 měsíců od poslední aktivity. Před zavedením této pravidelné kontroly provozovatel dotazy ani neaktivní účty pravidelně nemazal. První provedení zatím čeká na ověření. [Postup pro majitele](../PREDANI.md#čtvrtletní-kontrola-dotazů-a-účtů)
- Newsletter se neposílá. Případný doplněk Shoptetu je budoucí možnost. Před aktivací zkontrolovat poskytovatele, účel a právní titul rozesílky, odhlášení, rozsah údajů, uchování a aktualizovat zásady. Používání analytiky či reklamních služeb nebylo odpovědí o newsletteru určeno.
- Ve zdrojovém HTML veřejné garáže pro karavan ověřen Facebook SDK (connect.facebook.net), tlačítko fb-share-button a vložení platform.twitter.com/widgets.js s twitter-share-button. Sdílecí prvky tedy mají konkrétní vazbu na síťové nálezy. Další krok: dohledat nastavení sdílení v Shoptetu, podle potřeby použít obyčejné odkazy otevřené kliknutím a znovu otestovat scénáře souhlasu. Přítomnost těchto prvků sama nedokládá placenou reklamu.