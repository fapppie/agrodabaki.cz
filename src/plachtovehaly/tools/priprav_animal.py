"""Připraví nebo ověří druhé sloučení přístřešků Animal po první etapě."""
import argparse
import csv
from copy import deepcopy
from pathlib import Path
from lxml import etree as E

from over_rodiny import compare, update_map
from seskup_varianty import CACHE, DOC, archives, codes, copy_sales, read_json, set_param

TITLE = "Přístřešek pro zvířata Animal"
SIZES = {
    "1000251": (4, 4), "1000379": (4, 6),
    "1000252": (6, 6), "1000332": (6, 8), "1000333": (6, 10),
    "1000295": (8, 8), "1000400": (8, 10), "1000401": (8, 12),
    "1000334": (10, 10), "1000360": (12, 12),
}
DESCRIPTION = """<p>Přístřešek Animal kryje prostor pro zvířata plachtou ve vojenské zelené barvě. Podle místa na pastvině si můžete zvolit půdorys od 4 × 4 do 12 × 12 m.</p>
<h3>Rozměry a konstrukce</h3>
<table><caption>Provedení podle šířky přístřešku</caption><thead><tr><th scope="col">Šířka</th><th scope="col">Délky na výběr</th><th scope="col">Výška</th><th scope="col">Gramáž plachty</th><th scope="col">Rozteč oblouků</th><th scope="col">Vstup (šířka × výška)</th></tr></thead><tbody>
<tr><th scope="row">4 m</th><td>4 nebo 6 m</td><td>3,15 m</td><td>750 g/m²</td><td>2 m</td><td>—</td></tr>
<tr><th scope="row">6 m</th><td>6, 8 nebo 10 m</td><td>3,7 m</td><td>750 g/m²</td><td>2 m</td><td>2 × 2 m</td></tr>
<tr><th scope="row">8 m</th><td>8, 10 nebo 12 m</td><td>4 m</td><td>900 g/m²</td><td>2 m</td><td>—</td></tr>
<tr><th scope="row">10 m</th><td>10 m</td><td>4,5 m</td><td>900 g/m²</td><td>2,44 m</td><td>2,44 × 2 m</td></tr>
<tr><th scope="row">12 m</th><td>12 m</td><td>5 m</td><td>—</td><td>—</td><td>—</td></tr>
</tbody></table><p>Pomlčka označuje údaj, který výrobce v dostupných podkladech neuvádí.</p>
<p>U provedení o šířce 4, 6, 8 a 10 m mají nosné oblouky oválný profil 60 × 1,8 mm, spoje oblouků 40 × 1,5 mm a hrazení 40 × 1,2 mm.</p>
<h3>Rozměry a hmotnost balení</h3>
<p>Obě čtyřmetrová provedení se dodávají v balení 2,2 × 1,1 × 0,55 m. Varianta 4 × 4 m váží v balení 450 kg a varianta 4 × 6 m váží 550 kg. U varianty 6 × 6 m má balení rozměry 3 × 1 × 1,15 m a hmotnost 750 kg.</p>"""


def generate():
    items = {int(i.get("id")): i for i in E.parse(str(CACHE / "shoptet-po-rodinach.xml")).findall("SHOPITEM")}
    original = items[659]
    shop = E.Element("SHOP")
    item = E.SubElement(shop, "SHOPITEM")
    E.SubElement(item, "NAME").text = TITLE
    short = original.findtext("SHORT_DESCRIPTION").split("</style>", 1)[0] + "</style>"
    E.SubElement(item, "SHORT_DESCRIPTION").text = E.CDATA(short + '<p class="dabaki-volba-varianty">Vyberte šířku a délku přístřešku. U zvoleného rozměru najdete cenu a dostupnost.</p>')
    E.SubElement(item, "DESCRIPTION").text = E.CDATA('<div style="max-width:100%;overflow-x:auto">' + DESCRIPTION + "</div>")
    item.append(deepcopy(original.find("CATEGORIES")))
    images = E.SubElement(item, "IMAGES")
    info = E.SubElement(item, "INFORMATION_PARAMETERS")
    info.append(deepcopy(original.xpath('INFORMATION_PARAMETERS/INFORMATION_PARAMETER[NAME="Barva plachty"]')[0]))
    E.SubElement(item, "VISIBILITY").text = "visible"
    variants = E.SubElement(item, "VARIANTS")
    variant_tags = {t.tag for row in codes(original) for t in row}
    gallery = set()
    seen = set()
    cards = []
    for card_id in [659, 665, 668, 671]:
        card = items[card_id]
        for image in card.findall("IMAGES/IMAGE"):
            if image.text not in gallery:
                images.append(deepcopy(image))
                gallery.add(image.text)
        cards.append({"id": str(card_id), "name": card.findtext("NAME"), "single": card.find("CODE") is not None})
        for source in codes(card):
            sku = source.findtext("CODE")
            width, length = SIZES[sku]
            assert sku not in seen
            seen.add(sku)
            variant = copy_sales(source, variant_tags)
            if variant.find("IMAGE_REF") is None:
                E.SubElement(variant, "IMAGE_REF").text = card.findtext("IMAGES/IMAGE")
            assert variant.findtext("IMAGE_REF") in gallery
            set_param(variant, {"Šířka": f"{width} m", "Délka": f"{length} m"})
            variants.append(variant)
    assert seen == set(SIZES)
    urls = read_json(CACHE / "rodiny-target-urls.json")
    archive = archives([{"name": TITLE, "targetId": "659", "cards": cards}], items, urls)
    schema = E.RelaxNG(E.parse(str(CACHE / "schema/products-complete-v10.rng")))
    for root, filename in [(shop, "animal-varianty.xml"), (archive, "animal-archiv.xml")]:
        schema.assertValid(root)
        E.ElementTree(root).write(str(DOC / filename), encoding="UTF-8", xml_declaration=True, pretty_print=True)


def verify(export, write_map):
    baseline = CACHE / "shoptet-po-rodinach.xml"
    original = E.parse(str(baseline))
    with (DOC / "mapa-url.csv").open(encoding="utf-8-sig", newline="") as stream:
        urls = {r["wexbo_id"]: r["puvodni_url"] for r in csv.DictReader(stream, delimiter=";") if r["typ"] == "produkt"}
    cards = []
    for card_id in [659, 665, 668, 671]:
        rows = codes(original.find(f"SHOPITEM[@id='{card_id}']"))
        skus = [row.findtext("CODE") for row in rows]
        selections = []
        for sku in skus:
            width, length = SIZES[sku]
            options = {"Šířka": f"{width} m", "Délka": f"{length} m"}
            selections.append({"code": sku, "sourceUrl": urls[sku], "options": options})
        cards.append({"id": str(card_id), "codes": skus, "variants": selections})
    manifest = [{"name": TITLE, "targetId": "659", "cards": cards}]
    errors = compare(export, baseline, manifest)
    target = E.parse(str(export)).find("SHOPITEM[@id='659']")
    params = {p.findtext("NAME"): p.findtext("VALUE") for p in target.findall("INFORMATION_PARAMETERS/INFORMATION_PARAMETER")}
    if params != {"Barva plachty": "Vojenská zelená"}:
        errors.append(f"ID 659 má jiné informační parametry: {params}")
    expected = E.parse(str(DOC / "animal-varianty.xml")).find("SHOPITEM")
    expected_images = expected.xpath("IMAGES/IMAGE/text()")
    actual_images = target.xpath("IMAGES/IMAGE/text()")
    if len(actual_images) != len(expected_images):
        errors.append("Počet fotografií galerie se liší od importu.")
    refs = {v.findtext("CODE"): v.findtext("IMAGE_REF") for v in codes(expected)}
    for variant in codes(target):
        code = variant.findtext("CODE")
        image = variant.findtext("IMAGE_REF")
        if image not in actual_images or code not in refs or actual_images.index(image) != expected_images.index(refs[code]):
            errors.append(f"Fotografie varianty {code} má jinou pozici v galerii.")
    if errors:
        raise SystemExit("\n".join(errors))
    if write_map:
        update_map(manifest, read_json(CACHE / "rodiny-target-urls.json"))
    print("Ověřeno deset konfigurací Animal a tři archivované karty.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--verify", type=Path, help="Nový úplný export po importu a archivaci.")
    parser.add_argument("--map", action="store_true", help="Po ověření zapsat nové cíle do mapy URL.")
    args = parser.parse_args()
    if args.verify:
        verify(args.verify, args.map)
    elif args.map:
        parser.error("--map vyžaduje --verify")
    else:
        generate()
