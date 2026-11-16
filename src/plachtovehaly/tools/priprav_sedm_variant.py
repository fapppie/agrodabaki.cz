"""Sestaví dílčí XML ze současného exportu Shoptetu a živých detailů WEXBO."""
import argparse
import csv
import re
from copy import deepcopy
from hashlib import sha256
from pathlib import Path
from urllib.parse import urljoin
from urllib.request import urlopen

from lxml import etree as E, html

# Kód, šířka, délka, model a doplňující sloupce srovnávací tabulky.
FAMILIES = {
    "44": [
        ("1000010", "6,1", "9,15", "203012 R", ["bílá · 750 g/m²", "6", "2,2 × 0,8 × 0,8 m", "430 kg"]),
    ],
    "164": [
        ("1000351", "8", "15,25", "265017DP", ["bílá"]),
        ("1000352", "8", "18,3", "266017DP", ["bílá"]),
        ("1000353", "8", "21,35", "267017DP", ["bílá"]),
        ("1000354", "8", "24,4", "268017DP", ["bílá"]),
    ],
    "203": [
        ("1000331", "12,2", "15,25", "405021DP", ["bílá", "6", "naviják", "—"]),
        ("1000228", "12,2", "18,3", "406021DP", ["bílá", "7", "—", "2844 kg"]),
    ],
}
ROW26 = "3f4f620f5a5a4f302ae71f0c862c1e3146ae0f9a5f289c23625b30edcc496919"
REVIEWED_DESCRIPTION = {
    "1000010": "2897fabe9cc8172cbdbd615e70b39f9f10e4c72cd429d060e3d6f3b42d594232",
    "1000331": "80de20ca5b6c3c5d98d6128387104458416e040b3408e32dbc38a0e5f0a427c8",
    "1000228": "b3e180de7ff95fa4342ca3987ce883869392f51e960a4b079e94ff79e2b38266",
    **dict.fromkeys(("1000351", "1000352", "1000353", "1000354"), ROW26),
}


def check(ok, msg):
    if not ok:
        raise ValueError(msg)


def fetch(url):
    with urlopen(url, timeout=30) as response:
        return response.read()


def read_offer(url, code, model, width, length):
    doc = html.fromstring(fetch(url).decode("utf-8-sig"))
    title = doc.xpath("string(//h1)")
    check(doc.xpath("string(//meta[@itemprop='sku']/@content)") == code, code)
    check(all(token in title for token in (model, width, length, "BÍLÁ")), title)
    desc = doc.xpath("//div[@id='section_box' and @data-id='description']")[0]
    digest = sha256(" ".join(desc.text_content().split()).encode()).hexdigest()
    check(digest == REVIEWED_DESCRIPTION[code], "Změna technického popisu: " + code)
    price = doc.xpath("string(//meta[@itemprop='price']/@content)")
    check(bool(re.fullmatch(r"[1-9]\d*(?:\.\d+)?", price)), "Cena " + code)
    stock_url = urljoin(url, "/ajax.php?typ=product_stock&id=" + code + "&set=0&subvariants=")
    stock = html.fromstring(fetch(stock_url).decode("utf-8-sig").split("<>")[0])
    labels = {row[0].text_content().strip(): row[1].text_content().strip() for row in stock.xpath("//tr")}
    availability = labels["Dostupnost:"]
    amount = int(re.fullmatch(r"(\d+)\s*ks", labels["Na skladě:"])[1])
    check((amount > 0 and availability == "skladem") or
          (amount == 0 and re.fullmatch(r"\d{2}\.\d{2}\.\s*\d{4}", availability)), "Dostupnost " + code)
    images = doc.xpath("//a[@class='p_detail_image_container']/@href") + doc.xpath(
        "//*[@id='p_image_list']//link[@itemprop='url']/@href")
    urls = list(dict.fromkeys(urljoin(url, image) for image in images))
    check(urls and urls[0].endswith("/" + code + ".jpg"), "Hlavní fotografie " + code)
    for image in urls:
        with urlopen(image, timeout=30) as response:
            check(response.read(3) == b"\xff\xd8\xff", "Neplatná fotografie: " + image)
    return price, amount, availability, urls


def params(variant):
    return {p.findtext("NAME"): p.findtext("VALUE") for p in variant.findall("PARAMETERS/PARAMETER")}


def generate(export, schema, output):
    with (Path(__file__).resolve().parents[1] / "migrace/mapa-url.csv").open(encoding="utf-8-sig", newline="") as source:
        urls = {r["wexbo_id"]: r["puvodni_url"] for r in csv.DictReader(source, delimiter=";") if r["typ"] == "produkt"}
    doc = E.parse(str(export), parser=E.XMLParser(remove_blank_text=True))
    existing_codes = set(doc.xpath("//CODE/text()"))
    result = E.Element("SHOP")
    for item_id, options in FAMILIES.items():
        source, = doc.xpath("/SHOP/SHOPITEM[@id=$id]", id=item_id)
        item = E.SubElement(result, "SHOPITEM", id=item_id)
        for name in ("NAME", "GUID", "DESCRIPTION", "IMAGES", "INFORMATION_PARAMETERS"):
            item.append(deepcopy(source.find(name)))
        desc = html.fragment_fromstring(item.findtext("DESCRIPTION"), create_parent="div")
        tbody, = desc.xpath("//table[caption='Porovnání konfigurací']/tbody")
        lengths, = item.xpath("INFORMATION_PARAMETERS/INFORMATION_PARAMETER[NAME='Délka']")
        variants = E.SubElement(item, "VARIANTS")
        combos = []
        # Stávající kódy výslovně zachováme. Ceny a sklady u nich neposíláme.
        for orig in source.findall("VARIANTS/VARIANT"):
            orig_params = params(orig)
            check(set(orig_params) == {"Šířka", "Délka", "Provedení plachty"}, "Změna os variant " + item_id)
            combos.append(sorted(orig_params.items()))
            variant = E.SubElement(variants, "VARIANT")
            for name in ("CODE", "PARAMETERS"):
                variant.append(deepcopy(orig.find(name)))
        for code, width, length, model, cells in options:
            check(code not in existing_codes, "Kód již v exportu existuje: " + code)
            price, amount, availability, images = read_offer(urls[code], code, model, width, length)
            length += " m"
            check(length not in [r[0].text_content().strip() for r in tbody], "Nečekaný existující řádek " + code)
            row = E.SubElement(tbody, "tr")
            E.SubElement(row, "th", scope="row").text = length
            for text in [model, *cells]:
                E.SubElement(row, "td").text = text
            check(len(row) == len(tbody[0]), "Počet sloupců " + code)
            if length not in lengths.xpath("VALUE/text()"):
                E.SubElement(lengths, "VALUE").text = length
            for image in images:
                if image not in item.xpath("IMAGES/IMAGE/text()"):
                    E.SubElement(item.find("IMAGES"), "IMAGE").text = image
            variant = E.SubElement(variants, "VARIANT")
            for tag, value in {"CODE": code, "UNIT": "ks", "CURRENCY": "CZK", "PRICE": price,
                               "AVAILABILITY_IN_STOCK": "Skladem", "IMAGE_REF": images[0],
                               "VISIBLE": "1", "NEGATIVE_AMOUNT": "1" if not amount else "0"}.items():
                E.SubElement(variant, tag).text = value
            if not amount:
                E.SubElement(variant, "AVAILABILITY_OUT_OF_STOCK").text = availability
            E.SubElement(E.SubElement(variant, "STOCK"), "AMOUNT").text = str(amount)
            par = E.SubElement(variant, "PARAMETERS")
            for axis, val in {"Provedení plachty": "Bílá", "Délka": length, "Šířka": width + " m"}.items():
                entry = E.SubElement(par, "PARAMETER")
                E.SubElement(entry, "NAME").text = axis
                E.SubElement(entry, "VALUE").text = val
            combo = sorted(params(variant).items())
            check(combo not in combos, "Kolize konfigurace " + code)
            combos.append(combo)
            print(code, price, amount, availability, len(images))
        tbody[:] = sorted(tbody, key=lambda r: float(r[0].text_content().split()[0].replace(",", ".")))
        item.find("DESCRIPTION").text = E.CDATA("".join(html.tostring(child, encoding="unicode") for child in desc))
    E.RelaxNG(E.parse(str(schema))).assertValid(result)
    output.write_bytes(E.tostring(result, pretty_print=True, encoding="UTF-8", xml_declaration=True))


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("export", type=Path, help="Čerstvý úplný XML export Shoptetu")
    parser.add_argument("schema", type=Path, help="products-complete-v10.rng s oběma souvisejícími RNG soubory")
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    generate(args.export, args.schema, args.output)
