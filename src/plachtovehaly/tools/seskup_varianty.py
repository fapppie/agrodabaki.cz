"""Příprava rodin pro Shoptet podle úplného exportu před sloučením."""
import argparse
import csv
import html
import json
import re
from copy import deepcopy
from pathlib import Path

from lxml import etree as E

ROOT = Path(__file__).resolve().parents[3]
DOC = Path(__file__).resolve().parents[1] / "migrace"
CACHE = ROOT / ".shoptet-cache"
# První ID je zachovaná karta. Seznamy omezují seskupení na porovnané řady.
FAMILIES = [
    ("Sedlová hala s dvojitou konstrukcí, šířka 6,1 m", "délka", [152,122,125,143,128,131,155]),
    ("Sedlová hala řady 23, šířka 7 m", "délka", [233,236,239]),
    ("Sedlová hala řady 26, šířka 8 m", "délka", [164,167,170,173]),
    ("Sedlová hala řady 30, šířka 9,15 m", "délka", [92,95,134,98,140,101,146]),
    ("Sedlová hala řady 33, šířka 10 m", "délka", [50,149,53,56,62,59,161,197]),
    ("Sedlová hala s bočním vstupem, šířka 10 m", "délka", [104,107,110]),
    ("Sedlová hala řady PP, šířka 10 m", "délka", [113,218,176,116,119,182,221,224]),
    ("Sedlová hala řady 40, šířka 12,2 m", "délka", [203,188,68,65,191,71,194,74]),
    ("Sedlová hala řady 50, šířka 15,25 m", "délka", [200,185,179,77,215,80]),
    ("Sedlová hala řady 60, šířka 18,3 m", "délka", [206,209,212]),
    ("Oblouková hala se zipovými vraty, šířka 6,1 m", "délka", [44,728,749,731]),
    ("Oblouková hala s navijákem, šířka 9,15 m", "délka", [734,743,737,740,746]),
    ("Zastřešení kontejnerů C20, šířka 6 m", "délka", [674,677]),
    ("Zastřešení kontejnerů C26, šířka 8 m", "délka", [695,680]),
    ("Zastřešení kontejnerů C33S, šířka 10 m", "délka", [683,686]),
    ("Zastřešení kontejnerů s navijákovými vraty, hloubka 12 m", "šířka", [689,692]),
    ("Plachtová garáž pro karavan 4,3 × 9,2 m", "výška", [707,704]),
    ("Přístřešek pro zvířata Animal s hrazením a plachtou 750 g/m²", "šířka", [659,662]),
    ("Příkopový mulčovač AGE", "model", [248,251]),
    ("Mulčovač AGF PRO", "model", [254,257,260,263]),
    ("Lesní mulčovač FFM", "model", [272,275]),
    ("Rotační brány LXG", "model", [278,281,284]),
    ("Mulčovací sekačka FM", "model", [635,638,641]),
    ("Transportní box PRMH", "model", [287,290,293,296,299]),
    ("Klínový řemen B 17", "řemen", [545,551,554,557,548,542,560,563,566]),
    ("Gufero pro mulčovač AGF", "rozměr", [314,344]),
    ("Pouzdro řemenice pro mulčovač AGF", "rozměr", [365,353]),
    ("Šroub M24 pro mulčovač AGF", "rozměr", [404,419]),
]
AXES = {"délka":"Délka", "šířka":"Šířka", "výška":"Výška", "model":"Model", "řemen":"Délka Lw / Li", "rozměr":"Rozměr"}
VARIANT_LABELS = """<style>
body:has(.dabaki-volba-varianty) #simple-variants{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,12rem),1fr));gap:.45rem}
body:has(.dabaki-volba-varianty) #simple-variants>span{display:none}
body:has(.dabaki-volba-varianty) #simple-variants label.advanced-parameter{display:block;width:auto;height:auto;margin:0;padding:.45rem;border:1px solid #aaa;cursor:pointer}
body:has(.dabaki-volba-varianty) #simple-variants label:has(input:checked){outline:2px solid #4b7432}
body:has(.dabaki-volba-varianty) #simple-variants label .advanced-parameter-inner{display:none}
body:has(.dabaki-volba-varianty) #simple-variants label .parameter-value[hidden]{display:block!important;font-size:13px;line-height:1.3}
</style><p class="dabaki-volba-varianty">Vyberte provedení produktu. U zvolené varianty se zobrazí její cena a dostupnost.</p>"""

def read_json(path):
    return json.loads(path.read_text(encoding="utf-8-sig"))

def codes(item):
    return item.findall("VARIANTS/VARIANT") or [item]

def dimension(name, axis):
    if axis == "model":
        return name.rsplit(" ",1)[0].split(" ")[-1] + " " + name.rsplit(" ",1)[-1] if not name.endswith(" PRO") else name.split(" ",1)[1]
    if axis == "řemen":
        return name.split(", ",1)[1]
    numbers = re.search(r"(\d+(?:,\d+)?(?: × \d+(?:,\d+)?)+)", name)
    if axis == "rozměr":
        return numbers[1] + " mm"
    if numbers:
        return numbers[1].split(" × ")[{"šířka":0, "délka":1, "výška":2}[axis]] + " m"
    return re.search(r"šířka ([\d,]+ m)",name)[1]

def copy_sales(source, example_tags):
    variant=E.Element("VARIANT")
    for field in source:
        if field.tag in example_tags and field.tag != "PARAMETERS":
            variant.append(deepcopy(field))
    return variant

def set_param(variant, values):
    params=E.SubElement(variant,"PARAMETERS")
    for name,value in values.items():
        if not value:
            raise ValueError(f"Prázdná volba {name}")
        param=E.SubElement(params,"PARAMETER")
        E.SubElement(param,"NAME").text=name
        E.SubElement(param,"VALUE").text=value

def details(item):
    name=html.escape(item.findtext("NAME"))
    content="".join(item.findtext(tag,"") for tag in ("SHORT_DESCRIPTION","DESCRIPTION"))
    # Ze starých textů nepřenášet překonanou podmínku dopravy/dobírky.
    content=re.sub(r"<p\b[^>]*>(?:(?!</p>).)*(?:nelze tento typ haly zaslat|doprava po domluvě|doprava zdarma)(?:(?!</p>).)*</p>", "",content,flags=re.I|re.S)
    specs=item.findall("INFORMATION_PARAMETERS/INFORMATION_PARAMETER")
    if specs:
        rows="".join(f"<tr><th>{html.escape(s.findtext('NAME',''))}</th><td>{html.escape(s.findtext('VALUE',''))}</td></tr>" for s in specs)
        content+=f"<table><tbody>{rows}</tbody></table>"
    return f"<details><summary>{name}</summary>{content}</details>" if content else ""

def common_information(record, originals):
    """Filtry vázané na model necháváme v technických údajích jednotlivých provedení."""
    tables=[{p.findtext("NAME"):p.findtext("VALUE","") for p in i.findall("INFORMATION_PARAMETERS/INFORMATION_PARAMETER")} for i in originals]
    common={k:v for k,v in tables[0].items() if all(t.get(k)==v for t in tables)}
    if common:
        info=E.SubElement(record,"INFORMATION_PARAMETERS")
        for k,v in common.items():
            param=E.SubElement(info,"INFORMATION_PARAMETER")
            E.SubElement(param,"NAME").text=k
            E.SubElement(param,"VALUE").text=v

def archives(manifest, original_by_id, target_urls):
    shop=E.Element("SHOP")
    for g in manifest:
        target_url=target_urls[g["targetId"]]
        if not re.fullmatch(r"(?:https://plachtovehaly\.agrodabaki\.cz)?/[a-z0-9-]+/",target_url):
            raise ValueError(f"Neplatná adresa produktu {target_url}")
        for card in g["cards"][1:]:
            item=E.SubElement(shop,"SHOPITEM")
            E.SubElement(item,"NAME").text=card["name"]
            E.SubElement(item,"SHORT_DESCRIPTION").text=E.CDATA(f'<p>Toto provedení vyberete na stránce <a href="{target_url}">{html.escape(g["name"])}</a>.</p>')
            E.SubElement(item,"VISIBILITY").text="detailOnly"
            source=original_by_id[int(card["id"])]
            vs=None if card["single"] else E.SubElement(item,"VARIANTS")
            for v in codes(source):
                target=item if vs is None else E.SubElement(vs,"VARIANT")
                E.SubElement(target,"CODE").text="ARCHIV-SP-"+v.findtext("CODE")
                if v.find("PARAMETERS") is not None:
                    target.append(deepcopy(v.find("PARAMETERS")))
                E.SubElement(E.SubElement(target,"STOCK"),"AMOUNT").text="0"
                E.SubElement(target,"NEGATIVE_AMOUNT").text="0"
                E.SubElement(target,"VISIBLE").text="0"
    return shop

def generate(export, destination, schema, url_file=None):
    items={int(i.get("id")):i for i in E.parse(str(export)).findall("SHOPITEM")}
    with (DOC/"mapa-url.csv").open(encoding="utf-8-sig",newline="") as stream:
        urls={r["wexbo_id"]:r["puvodni_url"] for r in csv.DictReader(stream,delimiter=";") if r["typ"]=="produkt"}
    tarps={r["id"]:r["variant"] for r in read_json(DOC/"sedlove-haly.json")}
    all_tags={c.tag for i in items.values() for v in i.findall("VARIANTS/VARIANT") for c in v}
    validator=E.RelaxNG(E.parse(str(schema)))
    shop=E.Element("SHOP")
    manifest=[]
    seen=set()
    for title,axis,ids in FAMILIES:
        originals=[items[i] for i in ids]
        group={"name":title,"targetId":str(ids[0]),"cards":[]}
        record=E.SubElement(shop,"SHOPITEM")
        E.SubElement(record,"NAME").text=title
        E.SubElement(record,"SHORT_DESCRIPTION").text=E.CDATA(VARIANT_LABELS)
        E.SubElement(record,"DESCRIPTION").text=E.CDATA("".join(details(i) for i in originals))
        record.append(deepcopy(originals[0].find("CATEGORIES")))
        common_information(record,originals)
        images=E.SubElement(record,"IMAGES")
        known=set()
        E.SubElement(record,"VISIBILITY").text="visible"
        variants=E.SubElement(record,"VARIANTS")
        labels=set()
        for i in originals:
            name=i.findtext("NAME")
            for image in i.findall("IMAGES/IMAGE"):
                if image.text not in known:
                    images.append(deepcopy(image))
                    known.add(image.text)
            card={"id":i.get("id"),"name":name,"codes":[],"variants":[],"single":i.find("CODE") is not None}
            group["cards"].append(card)
            for v in codes(i):
                code=v.findtext("CODE")
                if code in seen: raise ValueError(f"Duplicitní kód {code}")
                seen.add(code)
                target=copy_sales(v,all_tags)
                variants.append(target)
                if target.find("IMAGE_REF") is None and i.find("IMAGES/IMAGE") is not None:
                    E.SubElement(target,"IMAGE_REF").text=i.findtext("IMAGES/IMAGE")
                if target.findtext("IMAGE_REF") and target.findtext("IMAGE_REF") not in known:
                    raise ValueError(f"Chybí fotografie {code}")
                params={AXES[axis]:dimension(name,axis)}
                params.update({p.findtext("NAME"):p.findtext("VALUE") for p in v.findall("PARAMETERS/PARAMETER")})
                if card["single"] and code in tarps and tarps[code]:
                    params["Provedení plachty"]=tarps[code]
                if i.get("id")=="680": params["Rozteč oblouků"]="1 m"
                if i.get("id")=="704": params["Barva plachty"]="Bílá"
                set_param(target,params)
                if tuple(params.items()) in labels: raise ValueError(f"Stejné volby {code}")
                labels.add(tuple(params.items()))
                card["codes"].append(code)
                card["variants"].append({"code":code,"sourceUrl":urls[code],"options":params})
                for field in ["PRICE","AVAILABILITY_IN_STOCK","AVAILABILITY_OUT_OF_STOCK","STOCK/AMOUNT","VISIBLE"]:
                    assert target.findtext(field)==v.findtext(field), (code,field)
        keys={tuple(v["options"]) for c in group["cards"] for v in c["variants"]}
        if len(keys)!=1: raise ValueError(f"Nesourodé parametry {title}: {keys}")
        manifest.append(group)
    validator.assertValid(shop)
    destination.mkdir(parents=True,exist_ok=True)
    E.ElementTree(shop).write(str(destination/"rodiny-variant.xml"),encoding="UTF-8",xml_declaration=True,pretty_print=True)
    (destination/"rodiny-variant.json").write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    if url_file:
        archive=archives(manifest,items,read_json(url_file))
        validator.assertValid(archive)
        E.ElementTree(archive).write(str(destination/"rodiny-archiv.xml"),encoding="UTF-8",xml_declaration=True,pretty_print=True)
    print(f"{len(shop)} rodin, {sum(len(g['cards']) for g in manifest)} zdrojových karet, {len(seen)} prodejních kódů.")

if __name__=="__main__":
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--export",type=Path,default=CACHE/"shoptet-po-skladu.xml")
    parser.add_argument("--destination",type=Path,default=DOC)
    parser.add_argument("--schema",type=Path,default=CACHE/"schema/products-complete-v10.rng")
    parser.add_argument("--url-file",type=Path,help="JSON s ověřenou veřejnou URL ponechaných karet podle ID Shoptetu")
    args=parser.parse_args()
    generate(args.export,args.destination,args.schema,args.url_file)
