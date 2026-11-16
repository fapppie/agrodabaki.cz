// Axonometrické schéma. Polokruhové rámy stojí podél podélné osy haly.
const canvas = document.querySelector("#hall");
const ctx = canvas.getContext("2d");
const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
canvas.width = 740 * pixelRatio;
canvas.height = 475 * pixelRatio;
ctx.scale(pixelRatio, pixelRatio);

function project(x, height, depth) {
  return [240 + x * 155 + depth * 247, 343 + x * 30 - depth * 123 - height * 170];
}

function rib(angle, depth, inner = false) {
  const radius = inner ? 0.94 : 1;
  return project(Math.cos(angle) * radius, 0.18 + Math.sin(angle) * radius, depth);
}

function path(points, stroke, width = 1, fill = "") {
  ctx.beginPath();
  points.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
  if (fill) {
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
  }
  if (stroke) {
    ctx.lineWidth = width;
    ctx.strokeStyle = stroke;
    ctx.stroke();
  }
}

function drawRib(depth, color, width) {
  for (const inner of [false, true]) {
    const radius = inner ? 0.94 : 1;
    const arc = Array.from({length: 49}, (_, i) => rib(Math.PI * i / 48, depth, inner));
    path([project(radius, 0, depth), ...arc, project(-radius, 0, depth)], color, width);
  }
  for (let i = 0; i < 16; i++) {
    path([rib(Math.PI * i / 16, depth), rib(Math.PI * (i + 0.5) / 16, depth, true), rib(Math.PI * (i + 1) / 16, depth)], color, width * 0.65);
  }
}

// Kóta základny a orientační půdorys.
ctx.setLineDash([5, 6]);
path([project(-1.24,0,0),project(-1.24,0,1)], "#92a788");
path([project(-1,0,-0.15),project(1,0,-0.15)], "#92a788");
ctx.setLineDash([]);
for (const end of [-1,1]) {
  path([project(end,0,-0.19),project(end,0,-0.08)],"#b4c2a5");
  path([project(end,0,0),project(end,0,1)],"#b6c7ad");
}
for (const depth of [0,1]) path([project(-1.29,0,depth),project(-1.2,0,depth)],"#b4c2a5");

// Zadní část haly má plášť vyplněný podle sklonu jednotlivých pásů.
for (let i = 31; i >= 0; i--) {
  const a = Math.PI * i / 32;
  const b = Math.PI * (i + 1) / 32;
  const tone = Math.round(79 + 35 * Math.sin(a));
  const fill = "rgb(" + [tone, tone + 12, tone + 3].join(",") + ")";
  path([rib(a,1),rib(b,1),rib(b,0.5),rib(a,0.5)], fill, 0.65, fill);
}
path([rib(0,1),project(1,0,1),project(1,0,0.5),rib(0,0.5)],"#798b79",1,"#52675b");
for (const depth of [1,0.875,0.75,0.625,0.5]) {
  const arc = Array.from({length:49}, (_,i) => rib(Math.PI*i/48,depth));
  path(arc,"#c9d5bd",1.1);
  path([rib(0,depth),project(1,0,depth)],"#a9ba9f");
}
for (let i = 0; i <= 6; i++) {
  const angle = Math.PI * i / 6;
  path([rib(angle,0),rib(angle,0.5)],"#bbccae",1.25);
}
for (const depth of [0.5,0.375,0.25,0.125,0]) {
  drawRib(depth, depth === 0 ? "#f7df64" : "#bacbb4", depth === 0 ? 2.1 : 1.1);
}

function callout(label, points, align) {
  path(points,"#c3c9a6",1);
  const [x,y] = points[0];
  ctx.fillStyle = "#e4ce66";
  ctx.fillRect(x-2,y-2,4,4);
  const [endX,endY] = points.at(-1);
  ctx.font = '15px Consolas, "Courier New", monospace';
  ctx.fillStyle = "#dce0c9";
  ctx.textAlign = align;
  ctx.fillText(label,endX,endY-6);
}
callout("Opláštění",[rib(1.43,0.75),[519,44],[619,44]],"right");
callout("Nosný oblouk",[rib(0.46,0),[440,395],[570,395]],"right");
