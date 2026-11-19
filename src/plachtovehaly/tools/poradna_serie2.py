"""Sestaví druhou sérii Poradny, vlastní SVG schémata a náhled pro redakci.

Python 3, pouze standardní knihovna. Bez sítě a bez změny Shoptetu.
"""
from pathlib import Path
from html import escape
import json

ROOT = Path(__file__).resolve().parents[3]
OUT = ROOT / 'src/plachtovehaly/shoptet/poradna/serie-2'
BASE = 'https://plachtovehaly.agrodabaki.cz'
OUT.mkdir(parents=True, exist_ok=True)
if (OUT / 'clanky.json').exists():
    current = json.loads((OUT / 'clanky.json').read_text(encoding='utf-8'))
    if any(a.get('status') == 'published' for a in current):
        raise SystemExit('Série je publikovaná. Generátor návrhů nesmí přepsat produkční manifest; upravte cíleně nasazené HTML a evidenci.')
(OUT / 'obrazky').mkdir(exist_ok=True)
articles = []

def link(path, text):
    return f'<a href="{BASE}/{path}/">{text}</a>'

def table(headers, rows):
    return '<div class="table-scroll" style="overflow-x:auto"><table><thead><tr>' + ''.join(f'<th scope="col">{x}</th>' for x in headers) + '</tr></thead><tbody>' + ''.join('<tr>' + ''.join(f'<td>{x}</td>' for x in row) + '</tr>' for row in rows) + '</tbody></table></div>'

def add(slug, title, seo, meta, intro, body, alt, caption, sources):
    articles.append(dict(slug=slug,title=title,seo=seo,meta=meta,intro=intro,body=body,alt=alt,caption=caption,researchSources=sources,sources=[u for u in sources if u.startswith(BASE+'/')],status='redakcni-navrh',verified='2026-11-18'))

add('kondenzace-v-plachtove-hale',
    'Proč v plachtové hale kape voda, i když neprší? Kondenzace a možnosti řešení',
    'Kondenzace v plachtové hale: příčiny a co zkontrolovat',
    'Kape v plachtové hale voda? Zjistěte, jak odlišit kondenzaci od zatékání a co prověřit u podlahy, uložených věcí a větrání.',
    'Kapky na vnitřní straně plachty mohou vznikat kondenzací vodní páry na chladném povrchu. Samotná mokrá plachta ale příčinu neurčí. Nejdříve sledujte, kde a kdy se voda objevuje, a prověřte také přítok vody z okolí a stav opláštění.',
    '''<h2>Začněte místem a časem výskytu</h2>
<p>Jiné vodítko představují drobné kapky rozptýlené po větší ploše střechy a jiné mokré místo pod jedním spojem po dešti. Kondenzace se může objevit i za suchého počasí. Zatékání a kondenzace se navíc mohou v jedné hale potkat.</p>
<p>Vyfoťte celkový pohled i detail. Zapište čas, počasí a předchozí činnost: zaparkování mokrého stroje, mytí podlahy nebo přivezení vlhkého materiálu. Při opakovaném problému pomůže záznam teploty a relativní vlhkosti uvnitř a venku. Jediné měření u otevřených vrat nevystihuje celý den.</p>'''
    + table(['Co pozorujete','Co prověřit'],[
        ['Kapky na větší ploše, také bez deště','Vlhkost vzduchu, chladnutí opláštění a provoz haly.'],
        ['Voda u jednoho spoje hlavně po dešti','Stav plachty a spoje; místo vyfotit pro dodavatele.'],
        ['Mokrá podlaha u obvodu','Směr odtoku vody z okolní plochy a střechy.'],
        ['Zhoršení po navezení materiálu','Zda se nezměnilo množství vlhkosti vnášené do haly.']])
    + '''<h2>Odkud se bere vlhkost</h2>
<p>Zdroj může být uvnitř i pod halou. Na mokrých kolech a nářadí přivezete vodu, nezpevněný vlhký povrch ji může postupně uvolňovat a kaluž po dešti prodlouží dobu vysychání. Proto má smysl řešit současně opláštění, okolní terén a způsob používání prostoru.</p>
<p>Odstraňte stojící vodu a podle možností omezte vnášení mokrých věcí. Skladované předměty rozmístěte tak, aby neblokovaly určené větrací otvory. Pokud voda přitéká zvenčí, samotná změna větrání tuto příčinu neodstraní.</p>
<h2>Větrání přizpůsobte konstrukci a počasí</h2>
<p>Výměna vzduchu může pomoci odvádět vlhkost, její účinek ale závisí také na venkovních podmínkách. Trvale otevřená vrata nejsou univerzálním řešením: musí být dodržen provozní režim haly, zejména při větru. Používejte větrací prvky a polohy vrat, které připouští dokumentace.</p>
<p>Dodatečný otvor, ventilátor nebo vnitřní podhled nejprve projednejte s dodavatelem konkrétní haly. Zásah do opláštění může změnit jeho namáhání. Zachycení kapek pod střechou také samo o sobě neznamená odstranění zdroje vlhkosti.</p>
<h2>Co poslat při dotazu</h2>
<p>Uveďte model a rozměry haly, její využití, typ podlahy, dostupné větrací otvory a popis počasí. Přiložte fotografie vnitřní strany střechy, mokrých míst a okolí. Díky tomu lze řešit konkrétní situaci místo odhadu podle jedné kapky.</p>
<p>Pro nový sklad začněte také ''' + link('jak-vybrat-plachtovou-halu','výběrem vhodné haly') + '. Pokud skladujete balíky, propojte návrh prostoru s ' + link('poradna/kolik-kulatych-baliku-se-vejde-do-haly','plánem rozmístění a manipulační uličky') + '. S podklady se můžete obrátit na ' + link('kontakty','Agro Dabaki') + '.</p>',
    'Schéma tří míst ke kontrole: chladná plachta, vlhkost uvnitř haly a voda u podlahy.',
    'Princip kondenzace a místa ke kontrole. Schéma není návrhem větrání konkrétní haly.',
    ['https://www.haly-polak.cz/cs/m-229-kondenzace-vody-v-hale-proc-vznika-a-jak-ji-resit', 'https://hagro.cz/kondenzace-vody-v-plachtove-hale/'])

add('podklad-a-kotveni-plachtove-haly',
    'Co připravit pod plachtovou halu? Podklad, odvodnění a kotvení před objednávkou',
    'Podklad a kotvení plachtové haly: příprava pozemku',
    'Připravujete místo pro plachtovou halu? Projděte zaměření, odvodnění, kotvení, příjezd a podklady, které si vyžádat před úpravou plochy.',
    'Plocha pod plachtovou halou musí vyhovět dvěma různým úkolům: používání skladu a přenosu sil z konstrukce do podloží. Zpevněný povrch pro pojezd proto ještě sám o sobě nepotvrzuje vhodnost kotvení.',
    '''<h2>Nejprve určete, co se bude uvnitř dít</h2>
<p>Jiné požadavky bude mít stání lehkého přívěsu a jiné sklad, kam pravidelně zajíždí naložená manipulační technika. Připravte rozměry strojů, jejich provozní hmotnosti a způsob uložení materiálu. U regálů nebo těžkých předmětů zvažte také soustředěné zatížení podlahy.</p>
<p>Do náčrtu zakreslete půdorys haly, vrata, příjezd a prostor pro manipulaci. Místo kolem konstrukce budete potřebovat i při montáži a následné údržbě. Jeho šířku určete podle montážního postupu vybraného modelu.</p>
<h2>Co zaměřit ještě před úpravou plochy</h2>
<ul><li>Dostupnou délku a šířku pozemku včetně okolních překážek.</li><li>Výškové rozdíly v rozích a směr sklonu.</li><li>Příjezdovou trasu, šířku brány a místo pro vykládku.</li><li>Vedení sítí a další omezení v místech budoucích základů a kotev.</li><li>Místa, kde se po dešti drží nebo kudy protéká voda.</li></ul>
<p>Vytyčovací rozměry přebírejte z výkresu. Vnější šířka haly, osová vzdálenost sloupů a rozteč kotev mohou být různé údaje. Základy zhotovené jen podle obchodního názvu výrobku se nemusejí potkat s patkami konstrukce.</p>
<h2>Podlaha a kotvení se posuzují samostatně</h2>'''
    + table(['Situace na pozemku','Co zjistit pro návrh'],[
        ['Existující beton','Rozměry, tloušťku, stav, vyztužení a vhodnost míst pro kotvy.'],
        ['Asfalt nebo panely','Skladbu a únosnost pod povrchem; samotný vzhled nestačí.'],
        ['Štěrk, zemina nebo násyp','Složení, zhutnění, stabilitu a podmínky pro zvolený kotevní systém.'],
        ['Nové patky nebo deska','Výkres pro konkrétní konstrukci a podklady k místním podmínkám.']])
    + '''<p>Typ a počet kotev, jejich hloubku ani rozměry základů nelze určit univerzálně podle podlahové plochy haly. Návrh musí odpovídat konstrukci, podloží a zatížení v místě instalace. Stejná hala může na jiném pozemku vyžadovat jiné řešení založení.</p>
<h2>Kam odteče voda ze střechy</h2>
<p>Prohlédněte pozemek i po vydatnějším dešti. Voda ze střechy ani z okolí by neměla zůstávat u kotev nebo proudit dovnitř vraty. Navržené odvodnění musí fungovat také při obsazené hale a nesmí podmáčet založení. Případné úpravy odtoku řešte společně s přípravou plochy.</p>
<h2>Co má obsahovat podklad pro dodavatele</h2>
<p>Pošlete adresu instalace, účel haly, odkaz na vybraný model, rozměrový náčrt, fotografie a známé údaje o podkladu. Vyžádejte si výkres základů či kotevních bodů a rozdělení prací: kdo připraví plochu, kdo zajistí kotvy a kdo montáž.</p>
<p>Porovnávat můžete ''' + link('sedlove-haly','sedlové haly') + ' a ' + link('obloukove-haly','obloukové haly') + '. Než objednáte zemní práce, ' + link('kontakty','ověřte podklady k vybranému provedení') + '.</p>',
    'Půdorysný náčrt s halou, kontrolou rozměrů, okolním prostorem a příjezdem pro vykládku.',
    'Orientační plán místa. Rozteče, základy i prostor pro montáž určuje dokumentace konkrétní haly.',
    ['https://hagro.sk/vystavba-a-montaz-plachtovych-hal/', 'https://www.halyskladem.cz/montaz-a-udrzba-hal/'])

add('plachtova-garaz-pro-karavan-vyber',
    'Plachtová garáž pro karavan: co ověřit kromě délky a výšky',
    'Plachtová garáž pro karavan: rozměry, vrata a prostor',
    'Vyberte garáž pro karavan podle skutečného vozu, rozměrů vrat a místa kolem něj. Srovnání dvou výšek garáže s půdorysem 4,3 × 9,2 m.',
    'Pro karavan potřebujete ověřit celý průjezd a prostor při odstavení. Výška garáže ve vrcholu nestačí: rozhoduje otvor vrat, tvar konstrukce a nejvyšší bod vozu včetně střešního vybavení.',
    '''<h2>Změřte vůz v podobě, ve které ho budete ukládat</h2>
<p>Do délky zahrňte oj přívěsu nebo zadní nosič a další výbavu, kterou necháváte namontovanou. Do výšky započítejte klimatizaci, anténu a jiné střešní prvky v přepravní poloze. Šířku měřte v nejširším místě skutečné sestavy.</p>
<p>Zapište zvlášť rozměry pro průjezd a prostor potřebný po zaparkování. Zrcátka mohou mít jinou polohu při jízdě a při odstavení; dveře a servisní dvířka vyžadují další místo. Na svahu nebo přes práh se mění poloha vozu vůči otvoru vrat.</p>
<h2>Dvě výšky garáže, dva rozměry vrat</h2>
<p>Produktová karta Agro Dabaki uvádí u garáže pro karavan společný půdorys 4,3 × 9,2 m a vrata na obou čelech. Provedení se liší také rozměrem vrat.</p>'''
    + table(['Provedení','Model','Vrata podle produktové karty','Barva'],[
        ['Výška 4,3 m','143014R','3,2 × 3,3 m','Bílá'],
        ['Výška 5 m','143016R','4 × 4 m','Vojenská zelená nebo šedá']])
    + '<p>Údaje pocházejí z ' + link('plachtova-garaz-pro-karavan','karty garáže pro karavan') + '''. Rozměr označený jako „vrata“ si před objednávkou nechte potvrdit jako skutečný volný otvor v otevřené poloze. Půdorys 4,3 × 9,2 m není automaticky využitelný vnitřní obdélník bez konstrukčních prvků.</p>
<h2>Modelový příklad: obytné auto vysoké 3,15 m</h2>
<p>Proti uváděné výšce vrat 3,3 m zbývá aritmetický rozdíl 15 cm. To ještě nepotvrzuje bezpečný průjezd. Ověřit je třeba volný otvor, sklon příjezdu, nerovnosti i skutečnou maximální výšku auta. Provozní rezervu určete pro konkrétní místo; samotné odečtení dvou čísel ji nenahrazuje.</p>
<h2>Naplánujte přístup při odstavení</h2>
<p>Do půdorysu zakreslete otevřené vstupní dveře, přístup k úložným prostorům a cestu podél vozu. U přívěsu přidejte místo potřebné k odpojení a manipulaci s ojí. Pokud budete pravidelně kontrolovat střechu nebo provádět údržbu, řešte také potřebný pracovní prostor.</p>
<p>Vrata na obou čelech mohou pomoci s uspořádáním příjezdu. Jejich skutečnou výhodu ale určuje volná plocha před a za garáží, nikoli jen přítomnost druhého otvoru.</p>
<h2>Krytý vůz stále potřebuje správný režim skladování</h2>
<p>Garáž chrání prostor, nenahrazuje však zazimování vozidla podle jeho výrobce. Věnujte pozornost vlhkosti a předepsanému větrání. Střecha nad vozem sama o sobě nezaručuje suché prostředí při všech podmínkách.</p>
<p>Před výběrem pošlete rozměry vozu, fotografii příjezdu a požadavky na přístup kolem něj. ''' + link('kontakty','Ověřit vhodné provedení garáže') + ' · ' + link('plachtove-garaze','Prohlédnout plachtové garáže') + '</p>',
    'Schéma obytného vozu s vyznačením celkové délky, střešní výbavy a místa pro otevření dveří.',
    'Měřte skutečný vůz včetně příslušenství. Ilustrační schéma bez měřítka.',
    [BASE+'/plachtova-garaz-pro-karavan/'])

add('plachtova-hala-pred-zimou',
    'Plachtová hala před zimou: co zkontrolovat na plachtě, vratech a konstrukci',
    'Plachtová hala před zimou: kontrola a údržba',
    'Připravte plachtovou halu na zimní provoz. Kontrolní seznam opláštění, kotev, spojů a vrat a údaje, které dohledat v návodu své haly.',
    'Před zimou zkontrolujte stav haly podle návodu konkrétního modelu a vyřešte závady včas. Důležité jsou opláštění, spoje, kotvení, vrata a odvod vody. Limity zatížení i postup při sněhu a větru patří k dokumentaci dané konstrukce.',
    '''<h2>Začněte dokumentací a záznamem stavu</h2>
<p>Dohledejte přesný model, montážní návod a provozní pokyny. Pokud se hala upravovala, přidejte podklady k těmto změnám. Vyfoťte ji ze všech stran a zvlášť místa, u kterých chcete sledovat vývoj: spoje, napínací prvky, kotvy a dříve opravované části.</p>
<p>Kontrolu naplánujte na vhodné počasí a používejte předepsaný bezpečný přístup. Z fotografie podobné haly nelze odvozovat utažení spojů, napnutí plachty ani povolený způsob odstraňování sněhu.</p>
<h2>Kontrolní seznam před zimním provozem</h2>'''
    + table(['Oblast','Co sledovat','Co zaznamenat'],[
        ['Plachta','Trhliny, odření, volná místa a neobvyklé prověšení.','Fotografie, umístění, změna od minulé kontroly.'],
        ['Napínací prvky','Stav popruhů, šněrování a předepsané napnutí.','Co vyžaduje úpravu podle návodu.'],
        ['Konstrukce a spoje','Chybějící díly, uvolnění, deformace či korozi.','Místo závady a domluvené řešení.'],
        ['Kotvení a okolí','Pohyb kotev, poškození podkladu, podmáčení.','Změny podloží a odtoku vody.'],
        ['Vrata','Úplné zavření, upevnění a stav ovládacích prvků.','Závady a požadovaný režim při větru.']])
    + '''<p>Do jednoduchého provozního záznamu přidejte datum, jméno kontrolujícího a výsledek opravy. Pokud závadu nelze na místě posoudit, pošlete detail i celkový pohled dodavateli. Deformace konstrukce nebo posun kotvení vyžadují odborné posouzení před dalším používáním dotčeného prostoru.</p>
<h2>Proč nestačí údaj o centimetrech sněhu</h2>
<p>Stejně vysoká vrstva sněhu může mít podle svého stavu různou hmotnost. Zatížení může být navíc nerovnoměrné. Pro provoz proto potřebujete znát podmínky konkrétní haly a předepsaný postup, nikoli obecný slib podle výšky sněhu.</p>
<p>Nespoléhejte na to, že sníh vždy sám sklouzne. Způsob a okamžik zásahu musí odpovídat návodu. Nevstupujte na plachtu a neimprovizujte ostrými nástroji nebo zásahem z prostoru pod poškozenou konstrukcí. Při známkách přetížení zamezte přístupu do ohroženého místa a zajistěte odborné řešení.</p>
<h2>Vítr, vrata a voda kolem haly</h2>
<p>Před nepříznivým počasím ověřte předepsanou polohu a zajištění vrat. Odstraňte volné předměty, které mohou poškodit opláštění. Sledujte, zda voda a tající sníh neodtékají ke kotevním bodům nebo do vjezdu. Kontrolu zopakujte po mimořádné události podle provozních pokynů.</p>
<h2>Co připravit pro konzultaci</h2>
<p>Uveďte model, místo instalace, stáří haly a popis závady. Připojte fotografie a dostupný návod. Konkrétní informace pomohou určit správný další krok i případný náhradní díl.</p>
<p>Máte nejasnost v návodu nebo v zimním režimu svého modelu? ''' + link('kontakty','Obraťte se na Agro Dabaki') + '. Pro výběr nové konstrukce můžete začít ' + link('jak-vybrat-plachtovou-halu','průvodcem výběrem haly') + '.</p>',
    'Schéma čtyř kontrolních oblastí haly: opláštění, spoje, vrata a kotvení.',
    'Místa kontroly. Konkrétní postupy a intervaly určuje návod dané haly.',
    ['https://www.halyskladem.cz/montaz-a-udrzba-hal/', 'https://hagro.sk/vystavba-a-montaz-plachtovych-hal/'])

add('plachtova-hala-celkova-cena',
    'Kolik stojí plachtová hala celkem? Co připočítat k ceně konstrukce',
    'Cena plachtové haly celkem: podklad, montáž a doprava',
    'Sestavte rozpočet plachtové haly včetně přípravy plochy, kotvení, vykládky a montáže. Přehled položek pro porovnání dvou nabídek.',
    'Celkový rozpočet tvoří cena vybrané haly a práce potřebné k jejímu zprovoznění na vašem pozemku. Při porovnávání nabídek si u každé položky ověřte rozsah dodávky, cenu a odpovědnost. Stejný půdorys nemusí znamenat stejný obsah nabídky.',
    '''<h2>Začněte jedním společným zadáním</h2>
<p>Dodavatelům pošlete stejný účel použití, místo instalace, požadovaný prostor, rozměry vjezdu a informace o pozemku. Uveďte, zda už máte připravenou plochu a jaké práce chcete zajistit sami. Nabídky pak budou porovnatelné nejen cenou, ale také výsledkem.</p>
<p>U samotné haly sledujte konkrétní rozměrovou variantu, provedení plachty, vrata a doplňky. Rozlišujte katalogový půdorys a skutečně využitelný prostor. Levnější řešení, do kterého neprojede technika, původní úkol nesplní.</p>
<h2>Rozpočet po jednotlivých položkách</h2>'''
    + table(['Položka','Otázka před objednávkou'],[
        ['Hala a příslušenství','Která varianta, vrata a další součásti jsou v ceně?'],
        ['Příprava plochy','Kdo zajistí zemní práce, podlahu a odvodnění?'],
        ['Založení a kotvení','Jsou zahrnuty podklady, materiál i práce pro konkrétní místo?'],
        ['Doprava','Jaké podmínky platí pro místo doručení a příjezd?'],
        ['Vykládka','Kdo zajistí vhodnou techniku a manipulaci s balením?'],
        ['Montáž','Co zahrnuje práce, vybavení a případné přesuny techniky?'],
        ['Podklady a související služby','Co je potřeba pro konkrétní záměr a kdo to obstará?']])
    + '''<p>U každého řádku si doplňte částku, dodavatele a stav „zahrnuto“, „samostatně“ nebo „čeká na potvrzení“. Neznámou částku nepovažujte za nulu. Rozpočet označte datem a u všech cen používejte stejný režim DPH.</p>
<h2>Jak započítat dopravu v Agro Dabaki</h2>
<p>Podle aktuálního průvodce nákupem rozhoduje pro českou objednávku hodnota zboží včetně DPH: do 100 000 Kč včetně GEIS, nad tuto hranici externí spedice. Doprava je uvedena zdarma. Před dokončením objednávky zkontrolujte aktuální volby v košíku a podmínky doručení.</p>
<p>Bezplatná přeprava sama o sobě neříká, jaké vybavení potřebujete k vyložení konkrétního balení. Předem potvrďte rozměry a hmotnost zásilky, možnosti příjezdu a způsob vykládky. Externí spedice je podle současného průvodce spojena s platbou převodem.</p>
<p>Aktuální pravidla najdete na stránce ''' + link('jak-nakupovat','Jak nakupovat') + '''. Dostupnost i cenu haly posuzujte vždy po výběru konkrétní varianty.</p>
<h2>Příklad porovnání bez vymyšlených cen</h2>
<p>Nabídka A obsahuje konstrukci a opláštění. Nabídka B navíc uvádí montáž a kotevní materiál. Nejprve doplňte do nabídky A cenu srovnatelného rozsahu a v obou ověřte, zda kotevní řešení odpovídá pozemku. Teprve potom porovnejte součty. Stejně postupujte u vykládky a přípravy podkladu.</p>
<h2>Nezapomeňte na používání haly</h2>
<p>Vedle jednorázové investice počítejte také s kontrolami, údržbou a případnými provozními náklady podle zamýšleného využití. Jejich rozsah vychází z konkrétního modelu a provozu. Nesnažte se je nahradit jedním univerzálním procentem pořizovací ceny.</p>
<p>Pro porovnání připravte odkazy na vybrané haly a společné zadání. ''' + link('kontakty','Požádat o upřesnění rozsahu dodávky') + ' · ' + link('sedlove-haly','Sedlové haly') + ' · ' + link('obloukove-haly','Obloukové haly') + '</p>',
    'Přehled rozpočtu: hala, podklad, kotvení, doprava a vykládka, montáž a související podklady.',
    'Rozpočtové položky bez cen. Zaškrtněte, co nabídka skutečně obsahuje.',
    [BASE+'/jak-nakupovat/'])

add('prikopovy-mulcovac-age-agf-pro-vyber',
    'Příkopový mulčovač za traktor: stačí výkon, nebo rozhoduje i hmotnost a dosah?',
    'Příkopový mulčovač AGE a AGF PRO: jak vybrat',
    'Porovnejte AGE a AGF PRO podle hmotnosti, záběru a minimálního výkonu. Zjistěte, co ověřit u traktoru, hydrauliky, závěsu a bočního dosahu.',
    'Minimální výkon je pouze jeden údaj při výběru příkopového mulčovače. Ověřit potřebujete také hmotnost neseného stroje, možnosti závěsu, hydrauliku a pracovní polohy. U bočně vysunutého mulčovače je zvlášť důležitá vhodnost celé sestavy.',
    '''<h2>Nejdříve popište pozemek a traktor</h2>
<p>Jinou situaci představuje pravidelně udržovaný okraj louky a jinou zanedbaný příkop s překážkami. Připravte fotografie, popis porostu, sklonu a způsobu přístupu. Pracovní dosah stroje a přípustná práce soupravy ve svahu jsou dvě různé otázky.</p>
<p>U traktoru zjistěte přesný model, hmotnost, kategorii závěsu, zvedací schopnost v příslušné vzdálenosti, parametry hydrauliky a vývodového hřídele. Výkon motoru nezaměňujte za výkon dostupný na vývodovém hřídeli.</p>
<h2>Srovnání AGE a AGF PRO podle produktových karet</h2>'''
    + table(['Model','Záběr','Hmotnost','Uváděný min. výkon traktoru'],[
        ['AGE 125','125 cm','240 kg','20 HP'],['AGE 145','145 cm','290 kg','30 HP'],
        ['AGF 140 PRO','140 cm','550 kg','50 HP'],['AGF 160 PRO','160 cm','590 kg','50 HP'],
        ['AGF 180 PRO','180 cm','630 kg','70 HP'],['AGF 200 PRO','200 cm','670 kg','80 HP']])
    + '<p>Zdrojem jsou karty ' + link('prikopovy-mulcovac-age','AGE') + ' a ' + link('mulcovac-agf-pro','AGF PRO') + '''. Jde o orientaci v nabídce, nikoli potvrzení kompatibility s libovolným traktorem stejného výkonu. Obě řady uvádějí boční hydraulický posuv. AGE má pevný zadní kryt, AGF PRO otevíratelný; jeho pracovní polohu určuje návod.</p>
<h2>Podobný záběr, výrazně jiná hmotnost</h2>
<p>AGE 145 má podle karty záběr 145 cm a hmotnost 290 kg. AGF 140 PRO má záběr 140 cm a hmotnost 550 kg. Rozdíl 260 kg ukazuje, proč se nelze rozhodovat pouze podle šířky sečení. Potřebujete posoudit nesení, pracovní polohy i stabilitu traktoru.</p>
<p>Údaj o zvedací schopnosti traktoru musí odpovídat podmínkám, za kterých ho výrobce uvádí. Nosnost u závěsných bodů nelze bez dalšího přenést na břemeno vzdálené za traktorem. Potřebné dotížení a dovolené zatížení náprav vycházejí z dokumentace soupravy.</p>
<h2>Pracovní záběr není boční dosah</h2>
<p>Záběr popisuje šířku zpracovávaného pásu. Pro práci podél příkopu potřebujete znát i polohu stroje vůči traktoru, rozsah posuvu a přípustné pracovní úhly. Tyto hodnoty si vyžádejte pro konkrétní variantu v rozměrovém výkresu.</p>
<p>Na náčrt pozemku vyznačte bezpečnou trasu traktoru a místo, kam má mulčovač dosáhnout. Samotná možnost natočit stroj neznamená, že je přípustný stejný sklon pro celý traktor.</p>
<h2>Co ověřit před objednávkou</h2>
<ul><li>Shodu závěsu a vhodnost traktoru pro hmotnost i pracovní polohy.</li><li>Předepsané otáčky, směr a provedení pohonu.</li><li>Počet a parametry hydraulických přípojek.</li><li>Skutečný boční dosah, pracovní úhly a přepravní rozměry.</li><li>Určení stroje pro porost a podmínky na vašem pozemku.</li></ul>
<p>Pošlete ''' + link('kontakty','dotaz s údaji o traktoru') + ' a odkazem na vybranou variantu. Pokud už mulčovač máte a řešíte díl, pomůže ' + link('poradna/kladivko-do-mulcovace-age-agf','průvodce výběrem kladívka AGE nebo AGF') + '.</p>',
    'Porovnání AGE 145 a AGF 140 PRO: podobný pracovní záběr, hmotnosti 290 a 550 kilogramů.',
    'Údaje z produktových karet Agro Dabaki. Hmotnost a výkon samy nepotvrzují vhodnost celé soupravy.',
    [BASE+'/prikopovy-mulcovac-age/',BASE+'/mulcovac-agf-pro/'])

add('stepkovac-nebo-spalikovac',
    'Štěpkovač, nebo špalíkovač? Vyberte podle toho, co chcete z větví získat',
    'Štěpkovač, nebo špalíkovač? BX 92 RS, TR a TRS 110',
    'Porovnejte štěpkovač BX 92 RS a špalíkovače TR 110 a TRS 110. Rozhodujte podle výsledného materiálu, možností traktoru a manipulace.',
    'Začněte požadovaným výsledkem: chcete drobnější štěpku, nebo delší kusy větví? Potom posuďte materiál, který budete zpracovávat, možnosti traktoru a cestu hotového produktu. Samotný maximální průměr větve k výběru nestačí.',
    '''<h2>Nejdříve rozhodněte o výsledném materiálu</h2>
<p>Štěpkovač rozděluje dřevo na menší částice. Špalíkovač vytváří delší kusy větví. Názvy se v nabídkách někdy používají nejednotně, proto si prohlédněte skutečný výstup konkrétního stroje a údaje o jeho velikosti.</p>
<p>Pokud má materiál sloužit jako palivo, ověřte požadavky svého spalovacího zařízení na druh, rozměry i vlhkost paliva. Čerstvě zpracované dřevo není automaticky připravené ke spalování. Pro jiné použití si předem ujasněte, jak budete materiál skladovat a rozvážet.</p>
<h2>Tři stroje v nabídce Agro Dabaki</h2>'''
    + table(['Stroj','Zaměření','Hmotnost podle karty','Uváděný traktor od'],[
        ['BX 92 RS','Štěpkování větví','650 kg','60 HP'],
        ['TR 110','Výroba špalíků','160 kg','20 HP'],
        ['TRS 110','Výroba špalíků, provedení s dopravníkem','340 kg','25 HP']])
    + '<p>Produktové karty ' + link('spalikovac-dreva-tr-110','TR 110') + ' a ' + link('spalikovac-dreva-trs-110-s-dopravnikem','TRS 110') + ' uvádějí délku špalků 7–15 cm. U ' + link('stepkovac-dreva-bx-92-rs','BX 92 RS') + ''' si velikost výsledné štěpky potvrďte pro zamýšlený materiál. Hranice výkonu v tabulce nenahrazuje kontrolu připojení, pohonu a nosnosti traktoru.</p>
<h2>Maximální průměr větve neříká výkon za hodinu</h2>
<p>Karta TR 110 uvádí průměr větví 11 cm, karta BX 92 RS 25 cm. Před nákupem ověřte, pro jaký druh a stav dřeva údaje platí. Rozvětvené, křivé nebo tvrdé větve se mohou zpracovávat jinak než rovný materiál. Hodnotu TR 110 nepřenášejte automaticky na TRS 110 jen kvůli podobnému označení.</p>
<p>Pro odhad práce popište běžný materiál, nikoli pouze jednu nejsilnější větev. Užitečná je fotografie hromady po řezu, přibližný rozsah prací a zamýšlený počet pracovníků. Výkon celé práce může omezit přísun a odvoz materiálu stejně jako samotný stroj.</p>
<h2>Kdy zvažovat dopravník</h2>
<p>U TRS 110 je dopravník součástí označeného provedení. Před výběrem zjistěte jeho rozměry, výsypnou výšku a uspořádání na pracovišti. Porovnejte je s vozíkem nebo nádobou, do které chcete materiál dopravovat. Vyšší hmotnost sestavy patří také do posouzení vhodnosti traktoru.</p>
<p>Nakreslete si tok materiálu: hromada větví, místo obsluhy, stroj a výstup. Zachovejte pracovní zóny předepsané návodem a zajistěte, aby se odvoz nekřížil s podáváním.</p>
<h2>Podklady pro konkrétní výběr</h2>
<p>Pošlete model traktoru, údaje o závěsu a pohonu, fotografie větví a popis požadovaného výsledku. Uveďte také způsob sběru a skladování. Provozní a bezpečnostní postupy přebírejte z návodu stroje; porovnávací článek je nenahrazuje.</p>
<p>''' + link('lesni-technika','Prohlédnout lesní techniku') + ' · ' + link('kontakty','Poradit s výběrem stroje') + '</p>',
    'Schematické srovnání drobnější štěpky a delších špalíků; třetí krok připomíná dopravu materiálu.',
    'Ilustrace rozdílu výsledného materiálu, nikoli fotografie výstupu konkrétního stroje. Bez měřítka.',
    [BASE+'/stepkovac-dreva-bx-92-rs/',BASE+'/spalikovac-dreva-tr-110/',BASE+'/spalikovac-dreva-trs-110-s-dopravnikem/','https://www.jirbo.cz/cs/drtice-stepkovace-spalikovace-rozdily'])

add('paletizacni-vidle-za-traktor-vyber',
    'Paletizační vidle za traktor: jak vybrat nosnost, uchycení a délku vidlic',
    'Paletizační vidle za traktor: nosnost a výběr',
    'Jak vybrat paletizační vidle? Porovnejte délku vidlic a hmotnost D 300, D 700 a D 1200 a ověřte náklad, těžiště i možnosti traktoru.',
    'Vidle vybírejte podle nákladu a celé soupravy. Nosnost samotného nářadí není automaticky hmotnost, kterou smí zvednout váš traktor. Rozhoduje také poloha těžiště, vlastní hmotnost vidlí, připojení a podmínky práce.',
    '''<h2>Zvažte celý náklad včetně obalu</h2>
<p>Zapište maximální hmotnost toho, co skutečně zvedáte: materiálu, palety, přepravní bedny i dalšího obalu. Doplňte rozměry a rozložení hmotnosti. Dvě stejně těžké palety mohou zatěžovat soupravu odlišně, pokud je těžiště jedné dále od traktoru.</p>
<p>U nestandardního nákladu připravte fotografii a náčrt. Běžná délka palety sama nepotvrdí, kde leží těžiště ani jak se náklad opírá. Předem určete způsob jeho zajištění podle návodu pro dané použití.</p>
<h2>Nosnost vidlí a zvedací schopnost traktoru</h2>
<p>Na straně nářadí potřebujete znát nosnost a podmínky, pro které je stanovena. Na straně traktoru zjistěte dovolené zatížení, zvedací schopnost v příslušné vzdálenosti a požadavky na stabilitu a dotížení. Do zatížení závěsu vstupují i samotné vidle.</p>
<p>Například náklad o hmotnosti 500 kg a vidle o hmotnosti 105 kg představují dohromady 605 kg nesené hmotnosti. Tento součet je pouze první vstup do posouzení. Nezohledňuje polohu těžiště ani další omezení soupravy a sám nepotvrzuje možnost náklad zvedat.</p>
<h2>Rozměrové porovnání tří modelů</h2>'''
    + table(['Model','Délka vidlí podle karty','Vlastní hmotnost podle karty'],[
        ['Deleks D 300','90 cm','55 kg'],['Deleks D 700','100 cm','105 kg'],['Deleks D 1200','110 cm','120 kg']])
    + '<p>Odkazy na jednotlivé nabídky: ' + link('paletizacni-vidle-deleks-d-300','D 300') + ', ' + link('paletizacni-vidle-deleks-d-700','D 700') + ' a ' + link('paletizacni-vidle-deleks-d-1200','D 1200') + '''. Tabulka porovnává délku a vlastní hmotnost. Přesnou nosnost dodávaného provedení včetně polohy těžiště potvrďte podle jeho dokumentace; neodvozujte ji z čísla v názvu modelu.</p>
<h2>Zkontrolujte uchycení a rozměry nákladu</h2>
<p>Pro traktor s tříbodovým závěsem potřebujete shodu konkrétního připojení. Nářadí určené pro jiný způsob uchycení nelze vybrat jen podle podobné fotografie. Připravte údaje o kategorii závěsu a provedení připojovacích bodů.</p>
<p>Délku vidlic porovnejte s podepřením nákladu a s prostorem za ním. Příliš dlouhé vidlice mohou zasáhnout další uložené věci. Dále ověřte nastavitelnou rozteč, vstupní otvory palety a možnost bezpečného zasunutí podle návodu.</p>
<h2>Myslete na celou trasu</h2>
<p>Zahrňte šířku průjezdu, zatáčení, nerovnosti, sklon a únosnost povrchu. Přeprava nákladu mění chování traktoru; postup, výšku přepravy i pracovní omezení určují návody celé sestavy. Vidle nejsou určeny ke zvedání osob.</p>
<p>Pro výběr pošlete model traktoru, nejvyšší hmotnost a rozměry nákladu, údaje o závěsu a fotografii místa manipulace. ''' + link('kontakty','Ověřit vhodné paletizační vidle') + ' · ' + link('paletizacni-vidle','Nabídka paletizačních vidlí') + '</p>',
    'Schéma nákladu na vidlích s vyznačením těžiště, jeho vzdálenosti a délky vidlic.',
    'Poloha těžiště je součástí posouzení celé soupravy. Schéma není zátěžovým diagramem.',
    [BASE+'/paletizacni-vidle-deleks-d-300/',BASE+'/paletizacni-vidle-deleks-d-700/',BASE+'/paletizacni-vidle-deleks-d-1200/'])

# Autorská vektorová schémata: neslouží jako montážní výkresy.
def txt(x,y,s,size=28,color='#1f292b',weight=400):
    return f'<text x="{x}" y="{y}" font-size="{size}" fill="{color}" font-weight="{weight}">{escape(s)}</text>'
def line(x1,y1,x2,y2,color='#273a3d',dash=False):
    return f'<path d="M{x1} {y1} L{x2} {y2}" fill="none" stroke="{color}" stroke-width="5"'+(' stroke-dasharray="10 10"' if dash else '')+'/>'
def rect(x,y,w,h,fill='#fff',stroke='#273a3d'):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{fill}" stroke="{stroke}" stroke-width="3"/>'
def hall():
    return '<path d="M250 505 V300 L600 170 L950 300 V505 Z" fill="#ffffff" stroke="#273a3d" stroke-width="7"/><path d="M430 505 V350 H770 V505" fill="#edf3f2" stroke="#273a3d" stroke-width="5"/>'
def dot(x,y,n):
    return f'<circle cx="{x}" cy="{y}" r="25" fill="#f3c54c"/>'+txt(x-9,y+10,str(n),30,weight=700)

art=[]
art.append(hall()+ ''.join(f'<path d="M{x} 285 q-18 28 0 28 q18 0 0 -28" fill="#4a859c"/>' for x in (450,550,650,750)) + line(370,465,370,350,'#4a859c')+line(370,350,356,372,'#4a859c')+line(370,350,384,372,'#4a859c')+rect(505,430,170,75,'#d1bc96')+txt(70,150,'1  Chladný povrch',30)+line(355,155,475,215)+txt(730,570,'2  Vlhkost uvnitř',30)+txt(70,570,'3  Voda u podlahy',30)+line(260,540,300,495)+txt(75,635,'Sledujte místo výskytu, počasí a změny provozu.',28))
art.append(rect(250,180,700,350,'#edf3f2')+rect(350,240,500,230)+txt(490,365,'PŮDORYS HALY',30,weight=700)+line(350,205,850,205)+txt(485,145,'Rozměry z výkresu',25)+line(290,240,290,470)+txt(80,330,'Prostor',26)+txt(80,365,'pro montáž',26)+line(590,465,590,600,'#c48d16')+line(590,600,575,577,'#c48d16')+txt(650,585,'Příjezd a vykládka',28)+txt(75,650,'Zaměřte výšky, podklad a směr odtoku vody.',28))
art.append(rect(220,260,740,225,'#fff')+rect(265,300,150,100,'#d9e8ed')+rect(465,300,150,100,'#d9e8ed')+rect(730,310,100,175,'#f7eccb')+rect(565,225,130,35,'#f3c54c')+'<circle cx="365" cy="490" r="40" fill="#273a3d"/><circle cx="830" cy="490" r="40" fill="#273a3d"/>'+line(195,565,985,565)+txt(420,610,'Délka včetně příslušenství',30)+line(1030,225,1030,485)+txt(815,185,'Střešní výbava',28)+line(820,195,670,228)+txt(75,180,'Změřte i otevření dveří',28)+txt(75,650,'Ověřte průjezd i prostor kolem zaparkovaného vozu.',28))
art.append(hall()+dot(600,220,1)+dot(300,325,2)+dot(600,410,3)+dot(920,505,4)+txt(70,125,'1  Opláštění',28)+txt(770,125,'2  Spoje',28)+txt(70,590,'3  Vrata a zajištění',28)+txt(730,590,'4  Kotvení',28)+txt(75,650,'Kontrolujte podle návodu svého modelu.',28))
budget=['Hala a příslušenství','Podklad a odvodnění','Založení a kotvení','Doprava a vykládka','Montáž a technika','Související podklady']
art.append(''.join(rect(70+(i%2)*550,165+(i//2)*145,510,115,'#fff')+rect(95+(i%2)*550,200+(i//2)*145,38,38,'#f3c54c')+txt(155+(i%2)*550,230+(i//2)*145,s,26) for i,s in enumerate(budget))+txt(75,650,'U každé položky: rozsah • cena • kdo ji zajistí',28))
art.append(rect(70,160,510,400,'#fff')+rect(620,160,510,400,'#fff')+txt(115,220,'AGE 145',37,weight=700)+txt(665,220,'AGF 140 PRO',37,weight=700)+txt(115,300,'Záběr 145 cm',30)+txt(665,300,'Záběr 140 cm',30)+rect(115,365,215,80,'#f3c54c')+rect(665,365,408,80,'#f3c54c')+txt(115,510,'290 kg',52,weight=700)+txt(665,510,'550 kg',52,weight=700)+txt(75,625,'Podobný záběr. Rozdíl hmotnosti 260 kg.',30)+txt(75,665,'Vhodnost traktoru se posuzuje pro celou sestavu.',26))
chips=''.join(f'<path d="M{x} {y} l25 -8 l12 20 l-28 9 Z" fill="#b99161"/>' for x,y in [(150,280),(210,300),(270,270),(330,320),(180,365),(250,375),(310,385)])
logs=''.join(rect(x,y,135,42,'#b99161') for x,y in [(690,270),(850,290),(730,345),(880,365)])
art.append(rect(70,165,510,350,'#fff')+rect(620,165,510,350,'#fff')+txt(115,225,'ŠTĚPKA',34,weight=700)+txt(665,225,'ŠPALÍKY',34,weight=700)+chips+logs+txt(115,470,'Drobnější částice',28)+txt(665,470,'Delší kusy větví',28)+txt(75,585,'1  Požadovaný výsledek     2  Vhodný stroj',29)+txt(75,640,'3  Sběr, doprava a skladování materiálu',29))
art.append(rect(330,220,520,235,'#e8d5ae')+line(260,180,260,490)+line(260,490,960,490)+line(330,465,850,465)+ '<circle cx="590" cy="330" r="15" fill="#c67c14"/>'+line(590,300,590,360,'#c67c14')+line(560,330,620,330,'#c67c14')+txt(670,185,'Těžiště nákladu',29)+line(690,195,600,310)+line(260,540,590,540)+txt(275,585,'Vzdálenost těžiště',26)+line(260,625,960,625)+txt(700,665,'Délka vidlic',26)+txt(75,130,'Náklad + vidle + možnosti traktoru',30,weight=700))

CSS='''*{box-sizing:border-box}body{margin:0;background:#f5f4ef;color:#253132;font:18px/1.7 "Segoe UI",Arial,sans-serif}main{max-width:900px;margin:auto;padding:40px 24px 80px}h1{font-size:clamp(30px,5vw,46px);line-height:1.16;margin:18px 0 26px}h2{font-size:27px;line-height:1.3;margin:40px 0 14px}p{margin:0 0 18px}a{color:#235c6c;text-underline-offset:3px}figure{margin:26px 0}figure img{display:block;width:100%;height:auto;border-radius:12px}figcaption{font-size:14px;color:#596768;margin-top:8px}.intro{font-size:21px;line-height:1.55}.label{font-size:13px;letter-spacing:.12em;text-transform:uppercase}.editor{background:#fff5d4;padding:16px;border-left:4px solid #d4a127;margin:24px 0;font-size:15px}.sources{font-size:14px;border-top:1px solid #d4dcda;margin-top:40px;padding-top:18px}table{width:100%;border-collapse:collapse;background:white;font-size:16px;line-height:1.5}th,td{padding:12px;text-align:left;border:1px solid #d4dcda;vertical-align:top}th{background:#e8eeeb}.table-scroll{margin:22px 0}li{margin:7px 0}.card{display:block;color:inherit;text-decoration:none;padding:24px;background:#fff;margin:18px 0;border-radius:12px}.card h2{margin:0 0 8px}.card img{width:100%;height:auto}.seo{font-size:14px;color:#536163} @media(max-width:600px){main{padding:24px 18px 50px}body{font-size:17px}h2{font-size:24px}th,td{padding:8px;font-size:14px}} @media print{.editor,nav{display:none}body{background:#fff}main{max-width:none}}'''
CSS += '\n.editor,.sources{overflow-wrap:anywhere}.zoom{font-size:14px}figure a{display:block}'
(OUT/'nahled.css').write_text(CSS,encoding='utf-8')

for i,a in enumerate(articles):
    svg=f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720" role="img" aria-labelledby="title desc"><title id="title">{escape(a['title'])}</title><desc id="desc">{escape(a['alt'])}</desc><rect width="1200" height="720" rx="20" fill="#f0f3ef"/><g font-family="Segoe UI,Arial,sans-serif">{txt(70,65,'AGRO DABAKI / PORADNA',24,weight=700)}{txt(990,65,f'0{i+1}',26,weight=700)}{art[i]}</g></svg>'''
    (OUT/'obrazky'/f'{a["slug"]}.svg').write_text(svg,encoding='utf-8')
    figure=f'<figure><a href="obrazky/{a["slug"]}.svg" target="_blank" rel="noopener" aria-label="Zvětšit schéma"><img src="obrazky/{a["slug"]}.svg" alt="{escape(a["alt"],quote=True)}" width="1200" height="720" decoding="async"/></a><figcaption>{a["caption"]} <a class="zoom" href="obrazky/{a["slug"]}.svg" target="_blank" rel="noopener">Zvětšit schéma</a></figcaption></figure>'
    sources='<div class="sources"><strong>Podklady</strong><ul>'+''.join(f'<li><a href="{u}">{escape(u.split("/")[2])} – {escape(u.rstrip("/").split("/")[-1].replace("-"," "))}</a></li>' for u in a['sources'])+'</ul><p>Produktové údaje zkontrolovány 18. 11. 2026. Konkrétní dodávané provedení ověřte před objednávkou.</p></div>'
    a['html']='<p class="intro">'+a['intro']+'</p>'+figure+a['body']+(sources if a['sources'] else '')
    a['url']=BASE+'/poradna/'+a['slug']+'/'
    a['image']='obrazky/'+a['slug']+'.svg'
    (OUT/(a['slug']+'.html')).write_text(a['html'],encoding='utf-8')
    page=f'''<!doctype html><html lang="cs"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{escape(a['seo'])}</title><meta name="description" content="{escape(a['meta'],quote=True)}"><meta name="robots" content="noindex,nofollow"><link rel="stylesheet" href="nahled.css"></head><body><main><nav><a href="index.html">← Všech osm článků</a></nav><div class="editor">Redakční náhled · připraveno k posouzení, nezveřejněno</div><div class="label">Agro Dabaki / Poradna</div><h1>{escape(a['title'])}</h1>{a['html']}<div class="editor"><strong>SEO title:</strong> {escape(a['seo'])}<br><strong>Meta description:</strong> {escape(a['meta'])}<br><strong>Navržená URL:</strong> {a['url']}</div></main></body></html>'''
    (OUT/('nahled-'+a['slug']+'.html')).write_text(page,encoding='utf-8')

cards=''.join(f'<a class="card" href="nahled-{a["slug"]}.html"><span class="label">Článek {i+1:02}</span><h2>{a["title"]}</h2><p>{a["meta"]}</p><img src="{a["image"]}" alt="{a["alt"]}" width="1200" height="720" loading="lazy"></a>' for i,a in enumerate(articles))
(OUT/'index.html').write_text('<!doctype html><html lang="cs"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Poradna — druhá série osmi článků</title><link rel="stylesheet" href="nahled.css"></head><body><main><div class="label">Agro Dabaki / Redakční náhled</div><h1>Dalších osm odpovědí pro vaše zákazníky.</h1><p>Kompletní texty, vlastní schémata a SEO podklady. Připraveno 18. 11. 2026. Články dosud nejsou zveřejněné.</p>'+cards+'</main></body></html>',encoding='utf-8')
(OUT/'clanky.json').write_text(json.dumps(articles,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(f'Sestaveno {len(articles)} článků a {len(art)} SVG schémat: {OUT}')
