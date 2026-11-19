/* Srovnávací tabulky v dlouhém popisu. Rozměry a barvy pocházejí z téže karty. */
(() => {
  const description = document.querySelector('.type-detail .basic-description');
  if (!description) return;
  const parameters = new Map();
  for (const row of document.querySelectorAll('.extended-description .detail-parameters tr')) {
    const name = row.querySelector('th')?.textContent.trim().replace(/\s*:\s*$/, '');
    if (name) parameters.set(name, row.querySelector('td')?.textContent.trim());
  }
  const categories = ['Sedlové haly', 'Obloukové haly', 'Plachtové garáže', 'Zastřešení lodních kontejnerů', 'Přístřešky pro zvířata'];
  if (!categories.includes(parameters.get('Kategorie'))) return;

  const variants = Array.from(document.querySelectorAll('#simple-variants .parameter-value'), label => {
    const fields = {};
    for (const part of label.textContent.trim().split(/,\s+(?=[^,:]+:)/)) {
      const i = part.indexOf(':');
      if (i >= 0) fields[part.slice(0, i).trim()] = part.slice(i + 1).trim();
    }
    const footprint = fields['Půdorys']?.match(/^(\d+(?:,\d+)?) × (\d+(?:,\d+)?) m$/);
    return {
      'Šířka': fields['Šířka'] || (footprint && footprint[1] + ' m'),
      'Délka': fields['Délka'] || fields['Délka haly'] || fields['Hloubka'] || (footprint && footprint[2] + ' m'),
      'Výška': fields['Výška'],
      'Barva': fields['Barva'] || fields['Barva plachty'] || fields['Provedení plachty'] || parameters.get('Barva plachty')
    };
  });
  for (const table of description.querySelectorAll('table')) {
    const header = table.tHead?.rows[0];
    const rows = Array.from(table.tBodies).flatMap(body => Array.from(body.rows));
    if (!header || !rows.length) continue;
    const headings = () => Array.from(header.cells, cell => cell.textContent.trim());
    const original = headings();
    const matches = rows.map(row => variants.filter(v => ['Šířka', 'Délka', 'Výška'].every(key => {
      const index = original.indexOf(key);
      return index < 0 || !v[key] || row.cells[index]?.textContent.trim() === v[key];
    })));
    function column(name, index, values) {
      if (headings().includes(name) || values.some(value => !value)) return;
      const th = document.createElement('th');
      th.scope = 'col';
      th.textContent = name;
      header.insertBefore(th, header.cells[index] || null);
      rows.forEach((row, i) => { row.insertCell(index).textContent = values[i]; });
    }
    for (const [index, key] of ['Šířka', 'Délka'].entries()) {
      if (key === 'Délka' && original.includes('Délky na výběr')) continue;
      column(key, index, matches.map(group => {
        const values = [...new Set(group.map(v => v[key]).filter(Boolean))];
        if (values.length === 1) return values[0];
        const fixed = parameters.get(key);
        return !values.length && /^\d+(?:,\d+)? m$/.test(fixed) ? fixed : '';
      }));
    }
    const model = document.querySelector('h1')?.textContent.match(/\(([A-Z0-9-]*\d[A-Z0-9-]*)\)\s*$/)?.[1];
    if (model) column('Model', 2, rows.map(() => model));
    const fabric = headings().findIndex(name => ['Plachta', 'Barva plachty'].includes(name));
    if (fabric >= 0) {
      header.cells[fabric].textContent = rows.some(row => /g\s*\/\s*m/i.test(row.cells[fabric].textContent))
        ? 'Barva a gramáž plachty' : 'Barva';
    } else {
      const modelIndex = headings().indexOf('Model');
      const index = modelIndex < 0 ? header.cells.length : modelIndex + 1;
      column('Barva', index, matches.map(group => {
        if (!group.length || group.some(v => !v['Barva'])) return '';
        return [...new Set(group.map(v => v['Barva']))].sort((a,b) => a.localeCompare(b,'cs')).join(', ');
      }));
    }
  }
})();
