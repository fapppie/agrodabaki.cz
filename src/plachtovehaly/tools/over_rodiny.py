"""Porovná nové rodiny s čerstvým úplným XML ze Shoptetu."""
import argparse
import csv
import json
from collections import Counter
from pathlib import Path

from lxml import etree as E

ROOT = Path(__file__).resolve().parents[3]
DOC = Path(__file__).resolve().parents[1] / "migrace"

def compare(export, original, manifest):
    live = {i.get("id"): i for i in E.parse(str(export)).findall("SHOPITEM")}
    baseline = {i.get("id"): i for i in E.parse(str(original)).findall("SHOPITEM")}
    codes = Counter(c for item in live.values() for c in item.xpath("./CODE/text() | VARIANTS/VARIANT/CODE/text()"))
    problems = []
    for group in manifest:
        item = live[group["targetId"]]
        if item.findtext("NAME") != group["name"] or item.findtext("VISIBILITY") != "visible":
            problems.append(f"ID {group['targetId']} má jiný název nebo viditelnost")
        variants = {v.findtext("CODE"): v for v in item.findall("VARIANTS/VARIANT")}
        expected = {code for c in group["cards"] for code in c["codes"]}
        if set(variants) != expected:
            problems.append(f"ID {group['targetId']} kódy {sorted(set(variants)^expected)}")
        for card in group["cards"]:
            source = baseline[card["id"]]
            source_rows = {v.findtext("CODE"):v for v in (source.findall("VARIANTS/VARIANT") or [source])}
            for record in card["variants"]:
                code = record["code"]
                if codes[code] != 1:
                    problems.append(f"Kód {code} nalezen {codes[code]}×")
                if code not in variants:
                    continue
                v=variants[code]
                opts = {p.findtext("NAME"):p.findtext("VALUE") for p in v.findall("PARAMETERS/PARAMETER")}
                if opts != record["options"]:
                    problems.append(f"Kód {code} má volby {opts}")
                for tag in ["PRICE","CURRENCY","STOCK/AMOUNT","VISIBLE","AVAILABILITY_IN_STOCK","AVAILABILITY_OUT_OF_STOCK"]:
                    before,after=source_rows[code].findtext(tag,''),v.findtext(tag,'')
                    if before != after:
                        problems.append(f"Kód {code} {tag}: {before!r} → {after!r}")
            if card["id"] != group["targetId"]:
                archived=live[card["id"]]
                if archived.findtext("VISIBILITY") not in {"hidden","detailOnly"}:
                    problems.append(f"ID {card['id']} je stále v nabídce")
                archive_rows=archived.findall("VARIANTS/VARIANT") or [archived]
                if {v.findtext("CODE") for v in archive_rows}!={"ARCHIV-SP-"+c for c in card["codes"]}:
                    problems.append(f"ID {card['id']} má jiné archivní kódy")
                for v in archive_rows:
                    if v.findtext("STOCK/AMOUNT") != "0" or v.findtext("VISIBLE") != "0":
                        problems.append(f"Kód {v.findtext('CODE')} má nenulový sklad nebo povolenou viditelnost")
    return problems

def update_map(manifest, urls):
    path=DOC/"mapa-url.csv"
    data=path.read_bytes()
    encoding="utf-8-sig" if data.startswith(b"\xef\xbb\xbf") else "utf-8"
    ending="\r\n" if b"\r\n" in data else "\n"
    with path.open(encoding=encoding,newline="") as f:
        rows=list(csv.DictReader(f,delimiter=";"))
    index={r["wexbo_id"]:r for r in rows if r["typ"]=="produkt"}
    for g in manifest:
        codes={code for c in g["cards"] for code in c["codes"]}
        for c in g["cards"]:
            for v in c["variants"]:
                row=index[v["code"]]
                if row["puvodni_url"]!=v["sourceUrl"]:
                    raise ValueError(f"Zdrojová URL {v['code']} neodpovídá")
                row["cilova_url"]=urls[g["targetId"]]
                row["shoptet_id"]=g["targetId"]
                row["cilovy_produkt"]=g["name"]
                row["stav"]="zveřejněno"
                row["varianta"]=" / ".join(f"{k}: {val}" for k,val in v["options"].items())
                row["alternativni_k"]=", ".join(k.strip() for k in row["alternativni_k"].split(",") if k.strip() and k.strip() not in codes)
    with path.open("w",encoding=encoding,newline="") as f:
        writer=csv.DictWriter(f,fieldnames=rows[0].keys(),delimiter=";",quoting=csv.QUOTE_ALL,lineterminator=ending)
        writer.writeheader()
        writer.writerows(rows)

if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument("export",type=Path)
    p.add_argument("--original",type=Path,default=ROOT/".wexbo-cache/shoptet-po-skladu.xml")
    p.add_argument("--map",action="store_true",help="Při úplné shodě zapsat ověřené cíle do mapy URL.")
    args=p.parse_args()
    manifest=json.loads((DOC/"rodiny-variant.json").read_text(encoding="utf-8"))
    issues=compare(args.export,args.original,manifest)
    if issues:
        raise SystemExit("\n".join(issues))
    if args.map:
        urls=json.loads((ROOT/".wexbo-cache/rodiny-target-urls.json").read_text(encoding="utf-8-sig"))
        update_map(manifest,urls)
    print("Shoda všech produktů, prodejních kódů a archivů v dávce.")
