# Ilustrace blogu a Poradny — styl C

Zadavatel 18. 11. 2026 vybral **C — malované filmové pozadí** a následně schválil celou sadu 16 obrázků k nasazení. Tento styl je výchozí pro další blogové a poradenské články Agro Dabaki. Nevztahuje se automaticky na produktové fotografie katalogu.

## Výtvarná pravidla

- Kombinace realistických proporcí a kvalitní malované anime ilustrace: věrohodné stroje, materiály a prostor, jemné viditelné tahy štětce a měkčí krajina. Referenční poměr přibližně 40 % realismu a 60 % malované stylizace je popis směru, nikoli měřitelná vlastnost.
- Teplé boční světlo a chladnější stíny, přirozené barvy českého venkova, jemně malovaná obloha a vegetace. U zimy či kondenzace přizpůsobit světlo roční době a tématu.
- Hlavní motiv musí být rozpoznatelný v malém náhledu. Kompozici přizpůsobit článku: celek haly, provozní scéna nebo detail dílu na stole. Nekopírovat do každého tématu traktor, kostel, břízu ani totožné pozadí reference.
- Horizontální formát přibližně 5 : 3. Bez vložených sloganů, log, vodoznaků, rozměrových šipek a popisků; důležité údaje patří do HTML nebo samostatného schématu.
- Ilustrace nemá tvrdit přesné provedení, kompatibilitu nebo rozměry konkrétního výrobku. U technických scén ověřit základní vztahy: uchycení nářadí, poloha balíků, průchod, provozní prostor a orientace dílů. Vyhnout se mechanicky nesmyslným spojením.

[Schválená reference C](../../../src/plachtovehaly/shoptet/poradna/pilot-ilustrace/C-malovane-filmove-pozadi.png) · [Celá sada](../../../src/plachtovehaly/shoptet/poradna/ilustrace-styl-c/index.html) · [Manifest, přesná zadání a soubory](../../../src/plachtovehaly/shoptet/poradna/ilustrace-styl-c/manifest.json).

## Příprava dalšího obrázku

1. Přečíst článek a jeho schéma; vybrat jeden hlavní motiv. U konkrétního výrobku pracovat s jeho ověřenými podklady.
2. Použít vestavěný imagegen a schválenou referenci C jako **vzor výtvarného stylu**. V promptu samostatně popsat motiv, kompozici a omezení; reference není technický výkres produktu. Přesná zadání první sady jsou v manifestu.
3. Prohlédnout výsledek ve velkém i jako náhled. Zkontrolovat mechaniku, perspektivu, počet a polohu hlavních prvků, nepřítomnost falešných nápisů a shodu s článkem. Opravy řešit cílenou další iterací. U první sady byla takto opravena poloha balíků na kruhové podstavě.
4. Uložit finální originál do `src/plachtovehaly/shoptet/poradna/`; pro tuto sadu je složka `ilustrace-styl-c/`. Názvy odpovídají slugům článků. Uchovat prompt, referenci, rozměry, datum a přiřazení k článku. Nenechávat jedinou kopii v uživatelské složce generátoru.
5. Připravit webovou kopii JPEG, delší strana maximálně 1600 px, kvalita 88, progresivní uložení. U této sady jsou kopie v `web/blog-c-<slug>.jpg`; originály PNG se nepřepisují. Kvalitu a velikost posoudit podle konkrétního obrázku.

Základ promptu: „Sophisticated hand-painted cinematic anime background, realistic proportions and structure, visible delicate brushwork, golden sidelight, cool shadows, rich natural materials, painterly vegetation and clouds. Landscape editorial illustration for a Czech agricultural equipment shop. Use the reference only for style. No lettering, logos, watermarks or infographic panels.“ Za něj doplnit konkrétní scénu a omezení podle článku.

## Umístění na e-shopu

Správa: **Vzhled a obsah → Články → Poradna (rubrika 797)** a **Správce souborů**. Webový JPEG nahrát do `/user/documents/upload/blog-c-<slug>.jpg` a samostatně jako náhled článku. Editor může převést vložený obrázek na CDN adresu.

V těle vložit ilustraci za úvodní odstavec jako `<figure data-dabaki-hero="styl-c">`, s konkrétním českým alternativním textem, skutečnými atributy width/height a pružnou šířkou (`width:100%;height:auto`). Popisek: **„Ilustrační vizualizace; konkrétní provedení a parametry ověřte u výrobku.“** Odkaz „Zvětšit ilustraci“ otevírá obrázek. Původní technické schéma s jeho popiskem a odkazem na zvětšení ponechat v navazující obsahové části; nenahrazovat jím doložené údaje ani ilustrací přepisovat schéma.

Obal `.dabaki-poradna-clanek` a již nasazený `article-illustrations.css` potlačují automatický duplicitní náhled nad článkem. Detail tak obsahuje jednu novou ilustraci a jedno původní schéma. Neměnit kvůli této sadě globální CSS ani HTML kódy záhlaví/zápatí.

## Kontrola, evidence a návrat

Před změnou zálohovat aktuální HTML, title, SEO title, meta description a adresu náhledu. Po uložení porovnat původní text bez figure a ověřit zachování obrázku schématu. Synchronizovat společný `clanky.json`, jednotlivá HTML a u druhé série také její manifest a těla článků. Pole `image` dál označuje schéma; nová pole `heroImage`, `heroAlt`, `heroStyle` označují ilustraci. V manifestu ilustrací zapsat veřejnou adresu a datum publikace.

Veřejně ověřit všechny upravené detaily a výpis při 390/1440 px: načtení ilustrace i schématu, alternativní texty, jedinou ilustraci bez duplikátu, náhledy ve výpisu, zvětšení, nepřetékání stránky a zachování SEO metadat. Výsledky této sady patří do `ilustrace-styl-c/overeni/produkce.json`. Konečný výsledek nasazení je v [plánu](../../PLAN.md).

Zálohy před nasazením této sady jsou lokálně v ignorované `.wexbo-cache/poradna-c-before-<slug>.json`. Pro návrat obnovit odpovídající HTML a původní náhled ze schématu, potom synchronizovat projektové zdroje a ověřit veřejnou stránku. Sdílené CSS ponechat. Nepotřebné obrázky nemazat, dokud nejsou zkontrolované všechny odkazy na ně.
