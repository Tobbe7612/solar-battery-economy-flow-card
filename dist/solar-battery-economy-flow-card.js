class SolarBatteryEconomyFlowCard extends HTMLElement {

setConfig(config) {
this.config = config;
}

set hass(hass) {

```
const get = (e)=>Number(hass.states[e]?.state || 0);

const solarHouse = get("sensor.power_solar_house");
const solarBattery = get("sensor.power_solar_battery");
const solarExport = get("sensor.power_solar_export");

const batteryHouse = get("sensor.power_battery_house");
const batteryGrid = get("sensor.power_battery_grid");

const gridHouse = get("sensor.power_grid_house");
const gridBattery = get("sensor.power_grid_battery");

const houseGrid = get("sensor.power_house_grid");

if (!this.content) {

  const card = document.createElement("ha-card");

  card.innerHTML = `
    <div class="container">

      <div class="node solar">
        ☀
        <div id="solar"></div>
      </div>

      <div class="node battery">
        🔋
        <div id="battery"></div>
      </div>

      <div class="node house">
        🏠
        <div id="house"></div>
      </div>

      <div class="node grid">
        ⚡
        <div id="grid"></div>
      </div>

      <canvas id="canvas"></canvas>

    </div>
  `;

  this.appendChild(card);

  this.canvas = card.querySelector("#canvas");
  this.ctx = this.canvas.getContext("2d");

  const style = document.createElement("style");

  style.textContent = `
    .container {
      position: relative;
      height: 320px;
    }

    .node {
      position:absolute;
      text-align:center;
      font-size:22px;
    }

    .solar { top:10px; left:45%; }
    .battery { top:180px; left:10%; }
    .house { top:180px; left:45%; }
    .grid { top:180px; left:80%; }

    canvas{
      position:absolute;
      width:100%;
      height:100%;
    }
  `;

  card.appendChild(style);

  this.content = card;
}

const solarPower =
  solarHouse + solarBattery + solarExport;

const batteryPower =
  batteryHouse + batteryGrid - solarBattery - gridBattery;

const gridPower =
  gridHouse + gridBattery - solarExport - batteryGrid - houseGrid;

const housePower =
  solarHouse + batteryHouse + gridHouse;

this.content.querySelector("#solar").innerText =
  solarPower.toFixed(0) + " W";

this.content.querySelector("#battery").innerText =
  batteryPower.toFixed(0) + " W";

this.content.querySelector("#grid").innerText =
  gridPower.toFixed(0) + " W";

this.content.querySelector("#house").innerText =
  housePower.toFixed(0) + " W";

this.animate({
  solarHouse,
  solarBattery,
  solarExport,
  batteryHouse,
  batteryGrid,
  gridHouse,
  gridBattery,
  houseGrid
});
```

}

animate(flows){

```
const ctx = this.ctx;

const draw=(x1,y1,x2,y2,p)=>{

  if(p<=0)return;

  ctx.strokeStyle="orange";
  ctx.lineWidth=2;

  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();

  const t = Date.now()/400;

  const px=x1+(x2-x1)*(t%1);
  const py=y1+(y2-y1)*(t%1);

  ctx.beginPath();
  ctx.arc(px,py,4,0,Math.PI*2);
  ctx.fillStyle="orange";
  ctx.fill();
};

ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

draw(200,40,200,200,flows.solarHouse);
draw(200,40,100,200,flows.solarBattery);
draw(200,40,300,200,flows.solarExport);

draw(100,200,200,200,flows.batteryHouse);
draw(100,200,300,200,flows.batteryGrid);

draw(300,200,200,200,flows.gridHouse);
draw(300,200,100,200,flows.gridBattery);

draw(200,200,300,200,flows.houseGrid);

requestAnimationFrame(()=>this.animate(flows));
```

}

}

customElements.define(
"solar-battery-economy-flow-card",
SolarBatteryEconomyFlowCard
);

