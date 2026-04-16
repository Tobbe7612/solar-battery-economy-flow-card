import{LitElement as W,html as p,css as I}from"https://unpkg.com/lit@3/index.js?module";console.log("\u{1F525} VERSION FIX LIT IMPORT \u{1F525}");var N=class extends W{constructor(){super(...arguments);this.flowStates={};this.appliances=[]}static{this.properties={hass:{}}}static getConfigElement(){return document.createElement("solar-battery-economy-flow-card-editor")}static getStubConfig(){return{type:"custom:solar-battery-economy-flow-card",title:"Solar Battery Economy"}}set hass(t){this._hass=t,this.requestUpdate()}static{this.styles=I`
    :host {
      --y-offset: 5px;
    }

    ha-card {
      overflow: hidden;
    }
    
    @keyframes glow {
      0%   { opacity: 0.85; }
      50%  { opacity: 1; }
      100% { opacity: 0.85; }
    }

    @keyframes pulse {
      0%   { transform: scale(0.9); opacity: 0.7; }
      50%  { transform: scale(1.1); opacity: 1; }
      100% { transform: scale(0.9); opacity: 0.7; }
    }

    .container {
      position: relative;
      width: 100%;
      max-width: 500px;

      aspect-ratio: 5 / 5.5; /* keeps proportions */

      padding: 0px 0 10px 0;
      margin: 0 auto;
    }

    .node {
      position: absolute;
      width: 70px;
      height: 70px;
      border-radius: 12px;
      background: rgba(255,255,255,0.04);
      backdrop-filter: blur(6px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 2;
      border: 1px solid rgba(0,0,0,0.20);
      box-shadow: 0 1px 4px rgba(0,0,0,0.10);
    }

    .appliance {
      position: absolute;
      width: 55px;
      height: 55px;

      border-radius: 10px;
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(6px);

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      font-size: 10px;
      z-index: 2;

      border: 1px solid rgba(255,255,255,0.08);
    }

    .appliance .name {
      font-size: 9px;
      opacity: 0.8;
    }

    .appliance .icon {
      width: 18px;
      height: 18px;
      transform: translateX(-2px);
    }

    .appliance .value {
      font-size: 10px;
      font-weight: 400;
    }

    .solar { top: calc(6% + var(--y-offset)); left: 50%; transform: translateX(-50%); }
    .battery { top: calc(32% + var(--y-offset)); left: 8%; }
    .grid    { top: calc(32% + var(--y-offset)); right: 8%; }
    .home    { top: calc(58% + var(--y-offset)); left: 50%; transform: translateX(-50%); }

    canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .price-box {
      position: absolute;
      top: calc(14% + var(--y-offset));
      transform: translateY(-50%);

      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 4px 10px;
      border-radius: 10px;

      background: rgba(255,255,255,0.06);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(255,255,255,0.08);

      font-size: 12px;
      font-weight: 600;

      color: black;

      box-shadow: 0 0 8px currentColor;
    }

    .price-left {
      left: 8%;
    }

    .price-right {
      right: 8%;
    }

    .icon {
      width: 26px;
      height: 26px;
      margin-bottom: 4px;
    }

    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0 12px;
      box-sizing: border-box;
    }

    .value {
      font-size: clamp(10px, 2.2vw, 13px);
      text-align: center;
      font-weight: 700;
    }

    .labels {
      position: absolute;
      inset: 0;
      z-index: 3;
      pointer-events: none;
    }

    .label {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 6px;

      padding: 4px 8px;
      border-radius: 10px;

      background: rgba(255,255,255,0.06);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(255,255,255,0.08);

      font-size: 12px;
      font-weight: 600;

      color: black;
      text-shadow: none;

      box-shadow: 0 0 8px currentColor;
      white-space: nowrap;
    }

    .arrow-svg {
      width: 14px;
      height: 14px;
      display: inline-block;
    }
  `}setConfig(t){this.config=t,this.appliances=t.appliances||[]}get(t){return Number(this._hass?.states[t]?.state||0)}getSocColor(t){return t<=20?"#ef4444":t<=70?"#eab308":"#22c55e"}getCarColor(t){return t>0?"#22c55e":"#9ca3af"}firstUpdated(){this.canvas=this.renderRoot.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),setTimeout(()=>this.animate(),100)}getFlows(){return{solarHouse:this.get("sensor.solar_battery_economy_energy_system_power_solar_house"),solarBattery:this.get("sensor.solar_battery_economy_energy_system_power_solar_battery"),solarExport:this.get("sensor.solar_battery_economy_energy_system_power_solar_export"),batteryHouse:this.get("sensor.solar_battery_economy_energy_system_power_battery_house"),batteryGrid:this.get("sensor.solar_battery_economy_energy_system_power_battery_grid"),gridHouse:this.get("sensor.solar_battery_economy_energy_system_power_grid_house"),gridBattery:this.get("sensor.solar_battery_economy_energy_system_power_grid_battery"),houseGrid:this.get("sensor.solar_battery_economy_energy_system_power_house_grid"),importPrice:this.get("sensor.solar_battery_economy_financial_07_import_electricity_price"),exportPrice:this.get("sensor.solar_battery_economy_financial_08_export_electricity_price"),batterySoc:this.config?.battery_soc_entity?this.get(this.config.battery_soc_entity):NaN,carPower:this.config?.car_power_entity?this.get(this.config.car_power_entity):NaN,carSoc:this.config?.car_soc_entity?this.get(this.config.car_soc_entity):NaN}}getEdgePoint(t,n){let l=this.renderRoot.querySelector(".inner");if(!l)return{start:{x:0,y:0},end:{x:0,y:0}};let r=l.getBoundingClientRect(),o=t.getBoundingClientRect(),e=n.getBoundingClientRect(),a=o.left-r.left+o.width/2,s=o.top-r.top+o.height/2,i=e.left-r.left+e.width/2,c=e.top-r.top+e.height/2,d=i-a,y=c-s,b=Math.hypot(d,y)||1,f=d/b,x=y/b;return{start:{x:a+f*(o.width/2),y:s+x*(o.height/2)},end:{x:i-f*(e.width/2),y:c-x*(e.height/2)}}}getAppliancePosition(t,n){let l=this.renderRoot.querySelector(".inner"),r=l?.clientWidth||400,o=l?.clientHeight||400,e=55,a=10,s=o*.58,i=Math.min(s+o*.36,o-e),c=r/2;return t<2?{top:`${i}px`,left:`${c-70-(1-t)*(e+a)}px`}:{top:`${i}px`,left:`${c+70+(t-2)*(e+a)}px`}}getLabelPosition(t,n){let l=this.renderRoot.querySelector(".inner");if(!l||!t)return{top:"0px",left:"0px",transform:"translate(0,0)"};let r=l.getBoundingClientRect(),o=t.getBoundingClientRect(),e=o.left-r.left+o.width/2,a=o.top-r.top+o.height/2,s=10;switch(n){case"left":return{top:`${a}px`,left:`${e-o.width/2-s}px`,transform:"translate(-100%, -50%)"};case"right":return{top:`${a}px`,left:`${e+o.width/2+s}px`,transform:"translate(0%, -50%)"};case"top":return{top:`${a-o.height/2-s}px`,left:`${e}px`,transform:"translate(-50%, -100%)"};case"bottom":return{top:`${a+o.height/2+s}px`,left:`${e}px`,transform:"translate(-50%, 0%)"}}}renderArrow(t,n,l){return p`
      <svg
        class="arrow-svg"
        viewBox="0 0 24 24"
        style="
          animation: pulse ${l}s infinite;
          color: ${n};
        "
      >
        <!-- ROTATION MOVED HERE (SAFE) -->
        <g transform="rotate(${t} 12 12)">
          <path
            d="M4 12H18M18 12L13 7M18 12L13 17"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
        </g>
      </svg>
    `}animate(){let t=this.ctx,n=this.renderRoot.querySelector(".solar"),l=this.renderRoot.querySelector(".battery"),r=this.renderRoot.querySelector(".grid"),o=this.renderRoot.querySelector(".home");if(!n||!l||!r||!o)return;let e=this.getFlows(),a=this.renderRoot.querySelector(".inner");this.canvas.width=a.clientWidth,this.canvas.height=a.clientHeight,t.clearRect(0,0,this.canvas.width,this.canvas.height);let s=(h,g)=>{let m=Math.min(h/12e3,1),_=Math.pow(m,.7),u=g/(6*60),w=g/(1.2*60);return u+(w-u)*_},i=(h,g,$,m,_,u,w)=>{if(u<=0)return;this.flowStates[h]||(this.flowStates[h]={t:0,p:0});let E=this.flowStates[h];E.p+=(u-E.p)*.05;let P=m-g,R=_-$,M=Math.hypot(P,R),q=s(E.p,M);E.t+=q/M;let z=E.t%1,A=Math.atan2(R,P),L=6+Math.floor(E.p/1500);for(let B=0;B<L;B++){let k=(z+B/L)%1,F=g+P*k,G=$+R*k;t.save(),t.translate(F,G),t.rotate(A),t.beginPath(),t.moveTo(-5,-3),t.lineTo(5,0),t.lineTo(-5,3),t.closePath(),t.fillStyle=w,t.globalAlpha=.4+B/L*.6,t.shadowColor=w,t.shadowBlur=8,t.fill(),t.restore()}},d=e.batteryHouse+e.batteryGrid-(e.solarBattery+e.gridBattery)<0?"#3b82f6":"#22c55e",y=this.getEdgePoint(n,l);i("s_b",y.start.x,y.start.y,y.end.x,y.end.y,e.solarBattery,"#f59e0b");let b=this.getEdgePoint(n,r);i("s_g",b.start.x,b.start.y,b.end.x,b.end.y,e.solarExport,"#f59e0b");let f=this.getEdgePoint(n,o);i("s_h",f.start.x,f.start.y,f.end.x,f.end.y,e.solarHouse,"#f59e0b");let x=this.getEdgePoint(l,o);i("b_h",x.start.x,x.start.y,x.end.x,x.end.y,e.batteryHouse,d);let H=this.getEdgePoint(l,r);i("b_g",H.start.x,H.start.y,H.end.x,H.end.y,e.batteryGrid,d);let v=this.getEdgePoint(r,o);i("g_h",v.start.x,v.start.y,v.end.x,v.end.y,e.gridHouse,"#ef4444");let S=this.getEdgePoint(r,l);i("g_b",S.start.x,S.start.y,S.end.x,S.end.y,e.gridBattery,"#a855f7");let T=this.renderRoot.querySelectorAll(".appliance"),C=0;if(this.appliances.filter(h=>this.get(h.entity)>0).slice(0,6).forEach((h,g)=>{let $=this.get(h.entity);if($<=0)return;let m=T[C];if(C++,!m)return;let _=o.getBoundingClientRect(),u=m.getBoundingClientRect(),w=this.renderRoot.querySelector(".inner").getBoundingClientRect(),E=_.left-w.left+_.width/2,P=_.top-w.top+_.height*.6,R=u.left-w.left+u.width/2,M=u.top-w.top;i(`app_${g}`,E,P,R,M,$,"#3b82f6")}),!isNaN(e.carPower)&&e.carPower>0){let h=this.renderRoot.querySelector(".car");if(h){let g=o.getBoundingClientRect(),$=h.getBoundingClientRect(),m=this.renderRoot.querySelector(".inner").getBoundingClientRect(),_=g.left-m.left+g.width/2,u=g.top-m.top+g.height*.6,w=$.left-m.left+$.width/2,E=$.top-m.top;i("car",_,u,w,E,e.carPower,"#3b82f6")}}requestAnimationFrame(()=>this.animate())}renderLabels(t){let n=v=>v>=1e3?(v/1e3).toFixed(1)+" kW":v.toFixed(0)+" W",r=t.batteryHouse+t.batteryGrid-(t.solarBattery+t.gridBattery)<0?"#3b82f6":"#22c55e",o=v=>{let C=Math.min(v/5e3,1);return .6+(1.6-.6)*C},e=this.renderRoot.querySelector(".solar"),a=this.renderRoot.querySelector(".battery"),s=this.renderRoot.querySelector(".grid"),i=this.renderRoot.querySelector(".home");if(!e||!a||!s||!i)return"";let c=this.getLabelPosition(a,"top"),d=this.getLabelPosition(s,"top"),y=this.getLabelPosition(e,"bottom"),b=this.getLabelPosition(a,"right"),f=this.getLabelPosition(s,"left"),x=this.getLabelPosition(i,"left"),H=this.getLabelPosition(i,"right");return p`
      ${t.solarBattery>0?p`
        <div class="label"
          style="top:${c.top}; left:${c.left}; transform:${c.transform}; box-shadow: 0 0 8px #f59e0b;">
          ${n(t.solarBattery)}
          ${this.renderArrow(135,"#f59e0b",o(t.solarBattery))}
        </div>`:""}

      ${t.solarExport>0?p`
        <div class="label"
          style="top:${d.top}; left:${d.left}; transform:${d.transform}; box-shadow: 0 0 8px #f59e0b;">
          ${this.renderArrow(45,"#f59e0b",o(t.solarExport))}
          ${n(t.solarExport)}
        </div>`:""}

      ${t.solarHouse>0?p`
        <div class="label"
          style="top:${y.top}; left:${y.left}; transform:${y.transform}; box-shadow: 0 0 8px #f59e0b;">
          ${this.renderArrow(90,"#f59e0b",o(t.solarHouse))}
          ${n(t.solarHouse)}
        </div>`:""}

      ${t.batteryGrid>0?p`
        <div class="label"
          style="top:${b.top}; left:${b.left}; transform:${b.transform}; box-shadow: 0 0 8px ${r};">
          ${n(t.batteryGrid)}
          ${this.renderArrow(0,r,o(t.batteryGrid))}
        </div>`:""}

      ${t.gridBattery>0?p`
        <div class="label"
          style="top:${f.top}; left:${f.left}; transform:${f.transform}; box-shadow: 0 0 8px #a855f7;">
          ${this.renderArrow(180,"#a855f7",o(t.gridBattery))}
          ${n(t.gridBattery)}
        </div>`:""}

      ${t.batteryHouse>0?p`
        <div class="label"
          style="top:${x.top}; left:${x.left}; transform:${x.transform}; box-shadow: 0 0 8px ${r};">
          ${n(t.batteryHouse)}
          ${this.renderArrow(45,r,o(t.batteryHouse))}
        </div>`:""}

      ${t.gridHouse>0?p`
        <div class="label"
          style="top:${H.top}; left:${H.left}; transform:${H.transform}; box-shadow: 0 0 8px #ef4444;">
          ${this.renderArrow(135,"#ef4444",o(t.gridHouse))}
          ${n(t.gridHouse)}
        </div>`:""}
    `}render(){let t=this.getFlows(),n=this.appliances.filter(s=>this.get(s.entity)>0).slice(0,4),l=s=>s.toFixed(2)+" kr/kWh",r=s=>s>=1e3?(s/1e3).toFixed(1)+" kW":s.toFixed(0)+" W",o=(s,i,c=0)=>r(s+i+c),e=t.batteryHouse+t.batteryGrid-(t.solarBattery+t.gridBattery),a=t.gridHouse+t.gridBattery-(t.solarExport+t.batteryGrid+t.houseGrid);return p`
      <ha-card .header=${this.config?.title||""}>
        <div class="container">
          <div class="inner">
            
            <div class="price-box price-left" style="box-shadow: 0 0 8px #22c55e;">
              <div style="font-size:10px; opacity:0.7;">Export</div>
              <div>${l(t.exportPrice)}</div>
            </div>

            <div class="price-box price-right" style="box-shadow: 0 0 8px #ef4444;">
              <div style="font-size:10px; opacity:0.7;">Import</div>
              <div>${l(t.importPrice)}</div>
            </div>

            <div class="node solar"
              style="${t.solarHouse+t.solarBattery+t.solarExport>0?"animation: glow 2s infinite; box-shadow: 0 0 6px orange, 0 2px 10px rgba(0,0,0,0.3);":""}">
              <span class="icon" style="animation: glow 2s infinite; color: orange;">
                <ha-icon icon="mdi:solar-power"></ha-icon>
              </span>
              <span class="value">${o(t.solarHouse,t.solarBattery,t.solarExport)}</span>
            </div>

            <div class="node home"
              style="${t.solarHouse+t.batteryHouse+t.gridHouse>0?"animation: glow 2s infinite; box-shadow: 0 0 6px #3b82f6, 0 2px 10px rgba(0,0,0,0.3);":""}">
              <span class="icon" style="animation: glow 2s infinite; color:#3b82f6;">
                <ha-icon icon="mdi:home"></ha-icon>
              </span>
              <span class="value">${o(t.solarHouse,t.batteryHouse,t.gridHouse)}</span>
            </div>

            <div class="node battery"
              style="${Math.abs(e)>0?`animation: glow 2s infinite; box-shadow: 0 0 6px ${e<0?"#3b82f6":"#22c55e"}, 0 2px 10px rgba(0,0,0,0.3);`:""}">
              <span class="icon" style="animation: glow 2s infinite; color:${e<0?"#3b82f6":"#22c55e"};">
                <ha-icon icon="mdi:home-battery"></ha-icon>
              </span>
              <span class="value">
                ${r(Math.abs(e))}
                ${isNaN(t.batterySoc)?"":p`
                  <div style="font-size:10px; opacity:0.7;">
                    ${t.batterySoc}%
                  </div>
                `}
              </span>

              ${isNaN(t.batterySoc)?"":p`
                <div style="
                  position:absolute;
                  left:4px; /* 🔥 LEFT side */
                  top:4px;
                  bottom:4px;
                  width:6px;
                  background: rgba(255,255,255,0.1);
                  border-radius:3px;
                  overflow:hidden;
                ">
                  <div style="
                    position:absolute;
                    bottom:0;
                    width:100%;
                    height:${Math.min(t.batterySoc,100)}%;
                    background:${this.getSocColor(t.batterySoc)};
                    transition: height 0.4s ease;
                    animation:${e<0?"pulse 1.5s infinite":"none"};
                  "></div>
                </div>
              `}
            </div>

            <div class="node grid"
              style="${Math.abs(a)>0?`animation: glow 2s infinite; box-shadow: 0 0 6px ${a>0?"#ef4444":"#22c55e"}, 0 2px 10px rgba(0,0,0,0.3);`:""}">
              <span class="icon" style="animation: glow 2s infinite; color:${a>0?"#ef4444":"#22c55e"};">
                <ha-icon icon="mdi:transmission-tower"></ha-icon>
              </span>
              <span class="value">${r(Math.abs(a))}</span>
            </div>

            ${n.map((s,i)=>{let c=this.getAppliancePosition(i,n.length);if(!c)return"";let d=this.get(s.entity);return!d||d<=0?"":p`
                <div class="appliance"
                  style="
                    top:${c.top};
                    left:${c.left};
                    transform: translate(-50%, -50%);
                    ${d>0?"animation: glow 2s infinite; box-shadow: 0 0 6px #3b82f6, 0 2px 10px rgba(0,0,0,0.2);":""}
                  ">

                  <div class="name">${s.name}</div>

                  <ha-icon class="icon" style="color:#3b82f6;" icon="${s.icon}"></ha-icon>

                  <div class="value">
                    ${d>=1e3?(d/1e3).toFixed(1)+" kW":d+" W"}
                  </div>

                </div>
              `})}

            ${!isNaN(t.carPower)||!isNaN(t.carSoc)?p`
              <div class="appliance car"
                style="
                  top:${this.getAppliancePosition(2,4).top};
                  left:50%;
                  transform: translate(-50%, -50%);
                  width:65px;
                  height:65px;
                  animation: glow 2s infinite;
                  box-shadow: 0 0 6px #3b82f6;
                ">

                <div class="name">Car</div>

                <ha-icon
                  class="icon"
                  style="color:${this.getCarColor(t.carPower)};"
                  icon="mdi:car-electric">
                </ha-icon>

                <div class="value" style="color:${this.getCarColor(t.carPower)};">
                  ${t.carPower>=1e3?(t.carPower/1e3).toFixed(1)+" kW":t.carPower+" W"}
                </div>

                ${isNaN(t.carSoc)?"":p`
                  <div style="font-size:10px; opacity:0.7;">
                    ${t.carSoc.toFixed(0)}%
                  </div>
                `}
                ${isNaN(t.carSoc)?"":p`
                  <div style="
                    position:absolute;
                    left:4px;
                    top:4px;
                    bottom:4px;
                    width:6px;
                    background: rgba(255,255,255,0.1);
                    border-radius:3px;
                    overflow:hidden;
                  ">
                    <div style="
                      position:absolute;
                      bottom:0;
                      width:100%;
                      height:${Math.min(t.carSoc,100)}%;
                      background:${this.getSocColor(t.carSoc)};
                      transition: height 0.4s ease;
                      animation:${t.carPower>0?"pulse 1.5s infinite":"none"};
                    "></div>
                  </div>
                `}
              </div>
            `:""}

            <canvas></canvas>

            <div class="labels">
              ${this.renderLabels(t)}
            </div>

          </div> <!-- inner -->
        </div> <!-- container -->
      </ha-card>
    `}};customElements.get("solar-battery-economy-flow-card")||customElements.define("solar-battery-economy-flow-card",N);window.customCards=window.customCards||[];window.customCards.push({type:"solar-battery-economy-flow-card",name:"Solar Battery Economy Flow Card",description:"Visual energy flow for Solar Battery Economy integration"});export{N as SolarBatteryEconomyFlowCard};
