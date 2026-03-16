(()=>{var t=class extends HTMLElement{constructor(){super(...arguments);this.ctx=null;this.canvas=null}setConfig(){}set hass(e){""`
this.hass = hass;

if (!this.shadowRoot) {

  const root = this.attachShadow({ mode: "open" });

  const container = document.createElement("div");
  container.style.position = "relative";
  container.style.height = "320px";
  container.style.fontFamily = "sans-serif";

  const solar = document.createElement("div");
  solar.innerHTML = "☀<div id='solar'></div>";
  solar.style.position = "absolute";
  solar.style.top = "10px";
  solar.style.left = "45%";
  solar.style.textAlign = "center";

  const battery = document.createElement("div");
  battery.innerHTML = "🔋<div id='battery'></div>";
  battery.style.position = "absolute";
  battery.style.top = "200px";
  battery.style.left = "10%";
  battery.style.textAlign = "center";

  const home = document.createElement("div");
  home.innerHTML = "🏠<div id='home'></div>";
  home.style.position = "absolute";
  home.style.top = "200px";
  home.style.left = "45%";
  home.style.textAlign = "center";

  const grid = document.createElement("div");
  grid.innerHTML = "⚡<div id='grid'></div>";
  grid.style.position = "absolute";
  grid.style.top = "200px";
  grid.style.left = "80%";
  grid.style.textAlign = "center";

  const canvas = document.createElement("canvas");
  canvas.style.position = "absolute";
  canvas.style.width = "100%";
  canvas.style.height = "100%";

  container.appendChild(solar);
  container.appendChild(battery);
  container.appendChild(home);
  container.appendChild(grid);
  container.appendChild(canvas);

  root.appendChild(container);

  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
}

const flows = readFlows(hass);

const solar =
  flows.solarHouse +
  flows.solarBattery +
  flows.solarExport;

const battery =
  flows.batteryHouse +
  flows.batteryGrid;

const grid =
  flows.gridHouse +
  flows.gridBattery;

const home =
  flows.solarHouse +
  flows.batteryHouse +
  flows.gridHouse;

const root = this.shadowRoot as ShadowRoot;

(root.getElementById("solar") as HTMLElement).innerText = solar.toFixed(0) + " W";
(root.getElementById("battery") as HTMLElement).innerText = battery.toFixed(0) + " W";
(root.getElementById("grid") as HTMLElement).innerText = grid.toFixed(0) + " W";
(root.getElementById("home") as HTMLElement).innerText = home.toFixed(0) + " W";

this.animate(flows);
```}animate(e){""`
if (!this.ctx || !this.canvas) return;

const ctx = this.ctx;

ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

const t = (Date.now() / 500) % 1;

const flow = (x1:number, y1:number, x2:number, y2:number, p:number) => {

  if (p <= 0) return;

  ctx.strokeStyle = "orange";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  drawParticle(ctx, x1, y1, x2, y2, t);
};

flow(200, 40, 200, 200, flows.solarHouse);
flow(200, 40, 100, 200, flows.solarBattery);
flow(200, 40, 300, 200, flows.solarExport);

flow(100, 200, 200, 200, flows.batteryHouse);
flow(100, 200, 300, 200, flows.batteryGrid);

flow(300, 200, 200, 200, flows.gridHouse);
flow(300, 200, 100, 200, flows.gridBattery);

flow(200, 200, 300, 200, flows.houseGrid);

requestAnimationFrame(() => this.animate(flows));
```}};customElements.define("solar-battery-economy-flow-card",t);})();
