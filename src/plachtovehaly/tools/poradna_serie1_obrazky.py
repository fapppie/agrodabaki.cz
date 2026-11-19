"""Vlastní SVG schémata pro původních osm článků. Bez změny textů a bez sítě."""
import json
from html import escape
from pathlib import Path
ROOT=Path(__file__).resolve().parents[3]
OUT=ROOT/'src/plachtovehaly/shoptet/poradna/serie-1-obrazky'
OUT.mkdir(exist_ok=True)
if (OUT/'obrazky.json').exists() and any(a.get('published') for a in json.loads((OUT/'obrazky.json').read_text(encoding='utf-8'))):
    raise SystemExit('Obrázky jsou publikované. Generátor nesmí přepsat produkční manifest; úpravy proveďte cíleně.')
articles=json.loads((OUT.parent/'clanky.json').read_text(encoding='utf-8'))[:8]
def t(x,y,s,size=28,bold=False):
    return f'<text x="{x}" y="{y}" font-size="{size}" font-weight="{700 if bold else 400}">{escape(s)}</text>'
def r(x,y,w,h,fill='#fff'):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="{fill}" stroke="#273a3d" stroke-width="3"/>'
def l(x,y,x2,y2,color='#273a3d',dash=False):
    return f'<path d="M{x} {y} L{x2} {y2}" fill="none" stroke="{color}" stroke-width="4"'+(' stroke-dasharray="9 7"' if dash else '')+'/>'
def dim(x,y,x2,y2):
    return f'<path d="M{x} {y} L{x2} {y2}" fill="none" stroke="#a57312" stroke-width="3" marker-start="url(#arrow)" marker-end="url(#arrow)"/>'
def c(x,y,rad,fill='#f3c54c'):
    return f'<circle cx="{x}" cy="{y}" r="{rad}" fill="{fill}" stroke="#273a3d" stroke-width="2"/>'
panels=[]
panels.append((
    r(225,180,650,355,'#e4eeeb')+r(360,255,380,280)+r(480,320,140,110,'#c9dfe2')+r(430,420,240,70,'#f3c54c')+r(405,430,60,105,'#273a3d')+r(635,430,60,105,'#273a3d')+r(490,295,20,25,'#f3c54c')+dim(320,260,320,530)+dim(365,570,735,570)+t(80,135,'Celá souprava v přepravní poloze',34,True)+t(890,310,'Volný otvor',26)+t(890,345,'při otevření',26)+l(885,355,745,355)+t(405,615,'Šířka průjezdu',28)+t(75,665,'Započítejte výbavu, nářadí a podmínky příjezdu.',28),
    'Traktor ve vratovém otvoru: měřit maximální obrys soupravy a skutečný volný průjezd.',
    'Schéma bez měřítka. Výška haly ve vrcholu není průjezdná výška vrat.'))
panels.append((
    t(75,135,'Nejdřív model, potom rozměry',36,True)+r(75,185,430,360)+t(110,240,'ŠTÍTEK STROJE',29,True)+t(110,300,'Model a výrobní číslo',26)+t(110,350,'Číslo dílu z rozkresu',26)+t(110,400,'Fotografie uchycení',26)+t(110,475,'AGE ≠ automaticky AGF',25,True)+r(560,185,565,360,'#fff')+t(600,240,'CO POROVNAT',29,True)+t(600,300,'01  Šířka uchycení',27)+t(600,350,'02  Průměr otvoru',27)+t(600,400,'03  Délka a pracovní šířka',27)+t(600,450,'04  Tvar a odsazení',27)+t(600,500,'05  Předepsaná hmotnost',27)+t(75,625,'Fotografie + měření + dokumentace',32,True)+t(75,670,'Podobný vzhled není potvrzením kompatibility.',27),
    'Přehled údajů pro výběr kladívka: štítek, číslo dílu a pět porovnávaných vlastností.',
    'Pomůcka k identifikaci dílu; rozměry porovnejte s dokumentací svého mulčovače.'))
panels.append((
    t(75,135,'Záběr a celková šířka jsou různé údaje',34,True)+r(310,260,580,170,'#f3c54c')+r(230,290,65,150,'#273a3d')+r(905,290,65,150,'#273a3d')+l(295,330,310,330)+l(890,330,905,330)+l(600,260,600,190)+dim(315,480,885,480)+t(440,525,'Pracovní záběr',30)+dim(235,580,965,580)+t(420,630,'Celková šířka s koly',30)+t(75,685,'Průjezd ověřte pro skutečné uspořádání stroje.',26),
    'Pohled shora na schematický mulčovač: pracovní záběr mezi boky a širší obrys včetně kol.',
    'Obecné schéma bez měřítka, nikoli konstrukční výkres ATV 120 nebo ATV 145 OT.'))
panels.append((
    t(75,135,'Ověřte podpěry i volný profil',36,True)+r(140,330,220,220,'#d7e3df')+r(840,330,220,220,'#d7e3df')+''.join(l(x,350,x,530,'#93aca3') for x in [180,225,270,315,880,925,970,1015])+ '<path d="M250 330 Q600 65 950 330" fill="none" stroke="#273a3d" stroke-width="8"/>'+c(250,330,10)+c(950,330,10)+dim(255,595,945,595)+t(305,645,'Rozteč montážních bodů podle výkresu',27)+t(475,410,'VOLNÝ',32,True)+t(445,455,'PRŮJEZD',32,True)+t(75,695,'Výška zastřešení sama neurčuje výšku vjezdu.',25),
    'Dva kontejnery se schematickou střechou: rozteč podpěr a volný prostor mezi kontejnery.',
    'Ilustrační princip bez měřítka. Montážní body, jejich rozteč a uchycení určuje výkres konkrétního zastřešení.'))
panels.append((
    t(75,135,'Přístřešek jako součást provozu',36,True)+r(420,210,380,230,'#fff')+t(475,305,'PŘÍSTŘEŠEK',30,True)+l(530,440,700,440,'#f3c54c')+r(420,475,380,105,'#f7eccb')+t(465,535,'Volný prostor u vstupu',25)+r(75,215,230,100,'#d9e8ed')+t(105,275,'Napájení',28)+r(875,215,250,100,'#e8d5ae')+t(915,275,'Krmivo',28)+l(190,340,420,500,'#a57312',True)+l(990,340,800,500,'#a57312',True)+l(610,580,610,640,'#a57312')+t(715,630,'Přístup pro obsluhu',27)+t(75,690,'Sledujte také vítr, odtok vody a chování skupiny.',26),
    'Modelový půdorys přístřešku s volným vstupem a návazností na napájení, krmení a obsluhu.',
    'Schéma provozních vazeb, nikoli doporučení rozestupů či kapacity přístřešku. Trasy přizpůsobte konkrétnímu místu.'))
panels.append((
    t(75,135,'Vozidlo + povrch jízdárny',38,True)+''.join(r(x,195,330,360) for x in [75,435,795])+t(100,255,'HM 200 ATV',30,True)+t(465,255,'HM 200',30,True)+t(825,255,'HV 200',30,True)+t(105,330,'Závěs ATV',27)+t(465,330,'Tříbodový závěs',25)+t(825,330,'Tříbodový závěs',25)+t(105,405,'100 kg',40,True)+t(465,405,'100 kg',40,True)+t(825,405,'150 kg',40,True)+t(105,485,'Záběr 200 cm',27)+t(465,485,'Záběr 200 cm',27)+t(825,485,'Záběr 200 cm',27)+t(825,530,'Provedení s válcem',24)+t(75,625,'Společný záběr, různé připojení a vybavení.',29)+t(75,670,'Volbu pracovních prvků vztáhněte ke skladbě povrchu.',25),
    'Srovnání planýrovačů HM 200 ATV, HM 200 a HV 200: závěs, hmotnost, záběr a válec.',
    'Přehled údajů z článku. Vhodnost připojení a pracovních prvků ověřte pro vozidlo a povrch jízdárny.'))
def plan(x,aisle):
    out=r(x,210,216,360,'#fff')
    if aisle:out+=f'<rect x="{x+72}" y="210" width="72" height="360" fill="#f7eccb"/>'
    for col in range(6):
        if aisle and col in (2,3):continue
        for row in range(10):out+=c(x+18+col*36,228+row*36,15,'#d8b875')
    return out
panels.append((
    t(75,130,'Modelová plocha 7,2 × 12 m',36,True)+plan(140,False)+plan(680,True)+t(105,190,'Bez průběžné uličky',28)+t(660,190,'Středová ulička 2,4 m',28)+t(165,625,'60 pozic',38,True)+t(705,625,'40 pozic',38,True)+t(390,345,'Balíky',28)+t(390,385,'Ø 1,2 m',28)+t(390,440,'Jedna',28)+t(390,480,'vrstva',28)+t(75,685,'Modelový výpočet; skutečné odstupy a manipulaci ověřte zvlášť.',25),
    'Dva půdorysy 7,2 krát 12 metrů: 60 balíků bez uličky a 40 balíků s uličkou širokou 2,4 metru.',
    'Model z článku: balíky o průměru 1,2 m na kruhové podstavě v jedné vrstvě. Nejde o kapacitu konkrétní haly ani doporučenou šířku uličky.'))
panels.append((
    t(75,135,'Nejdřív rodina podkopu, potom šířka',34,True)+r(75,190,510,355)+r(615,190,510,355)+t(110,250,'BH',38,True)+t(650,250,'BH 5 R',38,True)+t(110,330,'30 cm / 3 zuby',30)+t(110,375,'Kód 1000188',27)+t(110,450,'40 cm / 4 zuby',30)+t(110,495,'Kód 1000189',27)+t(650,330,'30 cm / 3 zuby',30)+t(650,375,'Kód 1000192',27)+t(650,450,'40 cm / 4 zuby',30)+t(650,495,'Kód 1000193',27)+t(75,620,'Stejná šířka nepotvrzuje stejné uchycení.',30,True)+t(75,670,'Porovnejte model, čepy, rozteče a připojovací šířky.',27),
    'Čtyři podkopové lžíce ve dvou rodinách BH a BH 5 R: šířky, počet zubů a objednací kódy.',
    'Přehled podle článku. Rodiny BH a BH 5 R jsou oddělené; kompatibilitu určete podle konkrétního podkopu.'))
manifest=[]
for a,(drawing,alt,caption) in zip(articles,panels):
    name='poradna-'+a['slug']
    svg=f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720" role="img" aria-labelledby="title desc"><title id="title">{escape(a['title'])}</title><desc id="desc">{escape(alt)}</desc><defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#a57312"/></marker></defs><rect width="1200" height="720" rx="20" fill="#f0f3ef"/><g font-family="Segoe UI,Arial,sans-serif" fill="#1f292b">{t(75,65,'AGRO DABAKI / PORADNA',24,True)}{drawing}</g></svg>'''
    (OUT/(name+'.svg')).write_text(svg,encoding='utf-8')
    manifest.append(dict(slug=a['slug'],file=name,alt=alt,caption=caption,adminUrl=a['adminUrl'],url=a['url']))
(OUT/'obrazky.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Připraveno osm SVG schémat a manifest obrázků.')
