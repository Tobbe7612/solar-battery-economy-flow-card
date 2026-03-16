import {readFlows} from "./flow"
import {drawParticle} from "./particles"

class SolarBatteryEconomyFlowCard extends HTMLElement{

hass:any
ctx:any
canvas:any

setConfig(){}

set hass(hass:any){

```
this.hass=hass

if(!this.shadowRoot){

  const root=this.attachShadow({mode:"open"})

  root.innerHTML=`

  <style>

  .container{
    position:relative;
    height:320px;
    font-family:sans-serif;
  }

  .node{
    position:absolute;
    text-align:center;
    font-size:20px;
  }

  .solar{top:10px;left:45%}
  .battery{top:200px;left:10%}
  .home{top:200px;left:45%}
  .grid{top:200px;left:80%}

  canvas{
    position:absolute;
    width:100%;
    height:100%;
  }

  </style>

  <div class="container">

  <div class="node solar">☀<div id="solar"></div></div>
  <div class="node battery">🔋<div id="battery"></div></div>
  <div class="node home">🏠<div id="home"></div></div>
  <div class="node grid">⚡<div id="grid"></div></div>

  <canvas></canvas>

  </div>
  `

  this.canvas=root.querySelector("canvas")
  this.ctx=this.canvas.getContext("2d")

}

const flows=readFlows(hass)

const solar=
  flows.solarHouse+
  flows.solarBattery+
  flows.solarExport

const battery=
  flows.batteryHouse+
  flows.batteryGrid

const grid=
  flows.gridHouse+
  flows.gridBattery

const home=
  flows.solarHouse+
  flows.batteryHouse+
  flows.gridHouse

this.shadowRoot.getElementById("solar").innerText=solar.toFixed(0)+" W"
this.shadowRoot.getElementById("battery").innerText=battery.toFixed(0)+" W"
this.shadowRoot.getElementById("grid").innerText=grid.toFixed(0)+" W"
this.shadowRoot.getElementById("home").innerText=home.toFixed(0)+" W"

this.animate(flows)
```

}

animate(flows){

```
const ctx=this.ctx
ctx.clearRect(0,0,this.canvas.width,this.canvas.height)

const t=(Date.now()/500)%1

const flow=(x1,y1,x2,y2,p)=>{

  if(p<=0)return

  ctx.strokeStyle="orange"
  ctx.lineWidth=2

  ctx.beginPath()
  ctx.moveTo(x1,y1)
  ctx.lineTo(x2,y2)
  ctx.stroke()

  drawParticle(ctx,x1,y1,x2,y2,t)

}

flow(200,40,200,200,flows.solarHouse)
flow(200,40,100,200,flows.solarBattery)
flow(200,40,300,200,flows.solarExport)

flow(100,200,200,200,flows.batteryHouse)
flow(100,200,300,200,flows.batteryGrid)

flow(300,200,200,200,flows.gridHouse)
flow(300,200,100,200,flows.gridBattery)

flow(200,200,300,200,flows.houseGrid)

requestAnimationFrame(()=>this.animate(flows))
```

}

}

customElements.define(
"solar-battery-economy-flow-card",
SolarBatteryEconomyFlowCard
)
