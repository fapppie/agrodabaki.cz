"""Připraví skryté karty z místních kopií WEXBO a posouzené mapy produktů."""
import argparse
import csv
import json
import re
from collections import defaultdict
from decimal import Decimal
from html import escape
from pathlib import Path
from urllib.parse import urljoin

from lxml import etree, html


ROOT = Path(__file__).resolve().parents[3]
DOCS = Path(__file__).resolve().parents[1] / "migrace"


def text(element):
    return " ".join(" ".join(element.itertext()).split())


def element_text(page, xpath):
    elements = page.xpath(xpath)
    return text(elements[0]) if elements else ""


def add(parent, tag, value=None):
    node = etree.SubElement(parent, tag)
    if value is not None:
        node.text = str(value)
    return node


def read_item(row, url):
    code = str(row["id"])
    page = html.parse(str(ROOT / ".wexbo-cache" / (code + ".html")))
    assert page.xpath('//meta[@itemprop="sku"]/@content') == [code], code
    assert page.xpath('//meta[@itemprop="priceCurrency"]/@content') == ["CZK"], code
    price = Decimal(page.xpath('//meta[@itemprop="price"]/@content')[0])
    net_text = element_text(page, '//*[contains(@class,"p_detail_price_other")]')
    net = re.search(r"[\d ,.]+", net_text.replace(" ", ""))
    if not net or abs(Decimal(net.group().replace(",", ".")) * Decimal("1.21") - price) > Decimal("0.02") or price <= 0:
        raise ValueError("ověřit základ a sazbu DPH")
    availability = element_text(page, '//div[contains(@class,"p_detail_availability")]')
    if not availability:
        raise ValueError("ověřit dostupnost")
    photos = list(dict.fromkeys(urljoin(url, path) for path in page.xpath('//link[@itemprop="url"]/@href') if path.startswith("/files/eshop/")))
    short = element_text(page, '//div[contains(@class,"product_description")]')
    blocks = page.xpath('//*[@class="product_text"]')
    description = []
    for block in blocks:
        for child in list(block) or [block]:
            line = text(child)
            if line and "Momentálně není k produktu žádný popis" not in line:
                description.append("<p>" + escape(line) + "</p>")
        for a in block.xpath('.//a[@href]'):
            target = urljoin(url, a.get("href"))
            if target.startswith(("https://", "http://")):
                description.append('<p><a href="' + escape(target, quote=True) + '">' + escape(text(a) or target) + "</a></p>")
    specs = {text(tr[0]): text(tr[1]) for tr in page.xpath('//table[@class="specification"]//tr') if len(tr) == 2}
    return dict(row, code=code, price=str(price), availability=availability, photos=photos,
                short=short, description="".join(description), specs=specs)


def sale(node, item):
    add(node, "CODE", item["code"])
    add(node, "VAT", 21)
    add(node, "PRICE_VAT", item["price"])
    add(node, "CURRENCY", "CZK")
    add(node, "AVAILABILITY_IN_STOCK", "Skladem")
    if item["availability"].casefold() != "skladem":
        add(node, "AVAILABILITY_OUT_OF_STOCK", item["availability"])


def make_card(shop, items):
    first = items[0]
    multi = len(items) > 1
    if multi:
        variants = [i["variant"] for i in items]
        if not all(variants) or len(set(variants)) != len(variants):
            raise ValueError("ověřit odlišující parametr variant")
    node = add(shop, "SHOPITEM")
    add(node, "NAME", first["name"])
    if first["short"] and all(i["short"] == first["short"] for i in items):
        add(node, "SHORT_DESCRIPTION", first["short"])
    bodies = []
    for item in items:
        body = item["description"]
        if multi and item["short"] and node.find("SHORT_DESCRIPTION") is None:
            body = "<p>" + escape(item["short"]) + "</p>" + body
        if body:
            bodies.append((item["variant"], body))
    if bodies:
        same = len(set(body for _, body in bodies)) == 1 and len(bodies) == len(items)
        value = bodies[0][1] if same else "".join(("<h3>" + escape(v) + "</h3>" if v else "") + b for v, b in bodies)
        add(node, "DESCRIPTION", value)
    add(node, "VISIBILITY", "hidden")
    add(add(node, "CATEGORIES"), "DEFAULT_CATEGORY", first["category"])
    alternatives = sorted({code for item in items for code in item.get("alternatives", [])})
    if alternatives:
        links = add(node, "ALTERNATIVE_PRODUCTS")
        for code in alternatives:
            add(links, "CODE", code)
    photos = list(dict.fromkeys(p for item in items for p in item["photos"]))
    if photos:
        gallery = add(node, "IMAGES")
        for photo in photos:
            add(gallery, "IMAGE", photo)
    common = {key: val for key, val in first["specs"].items() if val and
              all(i["specs"].get(key) == val for i in items)}
    if not multi and first["variant"]:
        common["Provedení plachty"] = first["variant"]
    if common:
        params = add(node, "INFORMATION_PARAMETERS")
        for key, val in common.items():
            # Zdrojový filtr směšuje centimetry a metry. Rozměry hal počítáme z názvu.
            if first["category"] in {"Obloukové haly", "Sedlové haly"} and key in {"Šířka", "Délka", "Výška"}:
                continue
            param = add(params, "INFORMATION_PARAMETER")
            add(param, "NAME", key)
            add(param, "VALUE", val)
        if first["category"] in {"Obloukové haly", "Sedlové haly"}:
            dims = re.search(r"(\d+(?:,\d+)?) × (\d+(?:,\d+)?) m", first["name"])
            if dims:
                for key, val in zip(("Šířka", "Délka"), dims.groups()):
                    param = add(params, "INFORMATION_PARAMETER")
                    add(param, "NAME", key)
                    add(param, "VALUE", val + " m")
        if not len(params):
            node.remove(params)
    if multi:
        variants = add(node, "VARIANTS")
        for item in items:
            variant = add(variants, "VARIANT")
            sale(variant, item)
            if item["photos"]:
                add(variant, "IMAGE_REF", item["photos"][0])
            param = add(add(variant, "PARAMETERS"), "PARAMETER")
            label = item.get("parameter") or "Provedení"
            if "g/m²" in item["variant"]:
                label = "Provedení plachty"
            elif re.fullmatch(r"(AGF|AGE|FM|ATV) \d+", item["variant"]):
                label = "Model stroje"
            elif "zuby" in item["variant"]:
                label = "Šířka lžíce"
            add(param, "NAME", label)
            add(param, "VALUE", item["variant"])
    else:
        sale(node, first)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("mapping", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    rows = json.loads(args.mapping.read_text(encoding="utf-8-sig"))
    with (DOCS / "mapa-url.csv").open(encoding="utf-8-sig") as handle:
        urls = {r["wexbo_id"]: r["puvodni_url"] for r in csv.DictReader(handle, delimiter=";") if r["typ"] == "produkt"}
    groups = defaultdict(list)
    for row in rows:
        groups[(row["category"], row["name"])].append(row)
    shop = etree.Element("SHOP")
    for (_, name), group in groups.items():
        if any(row.get("hold") for row in group):
            continue
        try:
            items = [read_item(row, urls[str(row["id"])]) for row in group]
            make_card(shop, items)
        except ValueError as exc:
            print(name, str(exc))
    codes = shop.xpath("//SHOPITEM/CODE/text() | //VARIANT/CODE/text()")
    assert len(codes) == len(set(codes))
    schema = etree.RelaxNG(etree.parse(str(ROOT / ".shoptet-cache/schema/products-complete-v10.rng")))
    schema.assertValid(shop)
    args.output.write_bytes(etree.tostring(shop, encoding="UTF-8", xml_declaration=True, pretty_print=True))
    print(f"{len(shop)} karet, {len(codes)} prodejních kódů")


if __name__ == "__main__":
    main()
