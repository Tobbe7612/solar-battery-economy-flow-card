import { LitElement, html, css } from "lit";

export class SolarBatteryEconomyFlowCard extends LitElement {
  private flowStates: Record<string, { t: number; p: number }> = {};
  private appliances: any[] = [];
  config: any;

  static properties = {
    hass: {},
  };

  static getConfigElement() {
    return document.createElement("solar-battery-economy-flow-card-editor");
  }

  static getStubConfig() {
    return {
      type: "custom:solar-battery-economy-flow-card",
      title: "Solar Battery Economy"
    };
  }

  _hass: any;
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  set hass(hass: any) {
    this._hass = hass;
    this.requestUpdate();
  }

  static styles = css`
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
  `;

  setConfig(config: any) {
    this.config = config;
    this.appliances = config.appliances || [];
  }

  get(entity: string) {
    return Number(this._hass?.states[entity]?.state || 0);
  }

  getSocColor(soc: number) {
    if (soc <= 20) return "#ef4444";   // red
    if (soc <= 70) return "#eab308";   // yellow
    return "#22c55e";                 // green
  }

  getCarColor(power: number) {
    if (power > 0) return "#22c55e"; // charging = green
    return "#9ca3af"; // idle = grey
  }

  firstUpdated() {
    this.canvas = this.renderRoot.querySelector("canvas")!;
    this.ctx = this.canvas.getContext("2d")!;
    setTimeout(() => this.animate(), 100);
  }

  getFlows() {
    return {
      solarHouse: this.get("sensor.power_solar_house"),
      solarBattery: this.get("sensor.power_solar_battery"),
      solarExport: this.get("sensor.power_solar_export"),
      batteryHouse: this.get("sensor.power_battery_house"),
      batteryGrid: this.get("sensor.power_battery_grid"),
      gridHouse: this.get("sensor.power_grid_house"),
      gridBattery: this.get("sensor.power_grid_battery"),
      houseGrid: this.get("sensor.power_house_grid"),
      importPrice: this.get("sensor.07_import_electricity_price"),
      exportPrice: this.get("sensor.08_export_electricity_price"),
      batterySoc: this.config?.battery_soc_entity
        ? this.get(this.config.battery_soc_entity)
        : NaN,
      carPower: this.config?.car_power_entity
        ? this.get(this.config.car_power_entity)
        : NaN,

      carSoc: this.config?.car_soc_entity
        ? this.get(this.config.car_soc_entity)
        : NaN,
    };
  }

  getEdgePoint(from: HTMLElement, to: HTMLElement) {
    const container = this.renderRoot.querySelector(".inner") as HTMLElement;
    if (!container) {
      return {
        start: { x: 0, y: 0 },
        end: { x: 0, y: 0 }
      };
    }
    const c = container.getBoundingClientRect();

    const r1 = from.getBoundingClientRect();
    const r2 = to.getBoundingClientRect();

    const x1 = r1.left - c.left + r1.width / 2;
    const y1 = r1.top - c.top + r1.height / 2;

    const x2 = r2.left - c.left + r2.width / 2;
    const y2 = r2.top - c.top + r2.height / 2;

    const dx = x2 - x1;
    const dy = y2 - y1;
    const dist = Math.hypot(dx, dy) || 1;

    const nx = dx / dist;
    const ny = dy / dist;

    return {
      start: {
        x: x1 + nx * (r1.width / 2),
        y: y1 + ny * (r1.height / 2)
      },
      end: {
        x: x2 - nx * (r2.width / 2),
        y: y2 - ny * (r2.height / 2)
      }
    };
  }

  getAppliancePosition(index: number, total: number) {
    const container = this.renderRoot.querySelector(".inner") as HTMLElement;
    const width = container?.clientWidth || 400;
    const height = container?.clientHeight || 400;

    const boxSize = 55;
    const gap = 10;

    const houseY = height * 0.58;
    const rowY = Math.min(houseY + height * 0.36, height - boxSize);

    const centerX = width / 2;

    // LEFT side (2 max)
    if (index < 2) {
      return {
        top: `${rowY}px`,
        left: `${centerX - 70 - (1 - index) * (boxSize + gap)}px`
      };
    }

    // RIGHT side (2 max)
    return {
      top: `${rowY}px`,
      left: `${centerX + 70 + (index - 2) * (boxSize + gap)}px`
    };
  }

  getLabelPosition(el: HTMLElement, position: "left" | "right" | "top" | "bottom") {
    const container = this.renderRoot.querySelector(".inner") as HTMLElement;
    if (!container || !el) {
      return { top: "0px", left: "0px", transform: "translate(0,0)" };
    }

    const c = container.getBoundingClientRect();
    const r = el.getBoundingClientRect();

    const x = r.left - c.left + r.width / 2;
    const y = r.top - c.top + r.height / 2;

    const offset = 10;

    switch (position) {
      case "left":
        return {
          top: `${y}px`,
          left: `${x - r.width / 2 - offset}px`,
          transform: "translate(-100%, -50%)"
        };
      case "right":
        return {
          top: `${y}px`,
          left: `${x + r.width / 2 + offset}px`,
          transform: "translate(0%, -50%)"
        };
      case "top":
        return {
          top: `${y - r.height / 2 - offset}px`,
          left: `${x}px`,
          transform: "translate(-50%, -100%)"
        };
      case "bottom":
        return {
          top: `${y + r.height / 2 + offset}px`,
          left: `${x}px`,
          transform: "translate(-50%, 0%)"
        };
    }
  }

  renderArrow(angle: number, color: string, speed: number) {
    return html`
      <svg
        class="arrow-svg"
        viewBox="0 0 24 24"
        style="
          animation: pulse ${speed}s infinite;
          color: ${color};
        "
      >
        <!-- ROTATION MOVED HERE (SAFE) -->
        <g transform="rotate(${angle} 12 12)">
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
    `;
  }

  animate() {
    const ctx = this.ctx;

    const solarEl = this.renderRoot.querySelector(".solar") as HTMLElement;
    const batteryEl = this.renderRoot.querySelector(".battery") as HTMLElement;
    const gridEl = this.renderRoot.querySelector(".grid") as HTMLElement;
    const homeEl = this.renderRoot.querySelector(".home") as HTMLElement;

    if (!solarEl || !batteryEl || !gridEl || !homeEl) return;

    const flows = this.getFlows();

    const container = this.renderRoot.querySelector(".inner") as HTMLElement;
    this.canvas.width = container.clientWidth;
    this.canvas.height = container.clientHeight;

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const getSpeed = (p: number, dist: number) => {
      const maxPower = 12000;
      const normalized = Math.min(p / maxPower, 1);
      const eased = Math.pow(normalized, 0.7);
      const minSpeed = dist / (6 * 60);
      const maxSpeed = dist / (1.2 * 60);
      return minSpeed + (maxSpeed - minSpeed) * eased;
    };

    const drawFlow = (key, x1, y1, x2, y2, p, color) => {
      if (p <= 0) return;

      if (!this.flowStates[key]) {
        this.flowStates[key] = { t: 0, p: 0 };
      }

      const state = this.flowStates[key];
      state.p += (p - state.p) * 0.05;

      const dx = x2 - x1;
      const dy = y2 - y1;
      const dist = Math.hypot(dx, dy);

      const speed = getSpeed(state.p, dist);

      state.t += speed / dist;
      const t = state.t % 1;

      const angle = Math.atan2(dy, dx);

      const count = 6 + Math.floor(state.p / 1500);

      for (let i = 0; i < count; i++) {
        const o = (t + i / count) % 1;

        const x = x1 + dx * o;
        const y = y1 + dy * o;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.moveTo(-5, -3);
        ctx.lineTo(5, 0);
        ctx.lineTo(-5, 3);
        ctx.closePath();

        ctx.fillStyle = color;
        ctx.globalAlpha = 0.4 + (i / count) * 0.6;

        ctx.shadowColor = color;
        ctx.shadowBlur = 8;

        ctx.fill();
        ctx.restore();
      }
    };

    const batteryNet = (flows.batteryHouse + flows.batteryGrid) - (flows.solarBattery + flows.gridBattery);
    const batteryColor = batteryNet < 0 ? "#3b82f6" : "#22c55e";

    const sb = this.getEdgePoint(solarEl, batteryEl);
    drawFlow("s_b", sb.start.x, sb.start.y, sb.end.x, sb.end.y, flows.solarBattery, "#f59e0b");
    const sg = this.getEdgePoint(solarEl, gridEl);
    drawFlow("s_g", sg.start.x, sg.start.y, sg.end.x, sg.end.y, flows.solarExport, "#f59e0b");
    const sh = this.getEdgePoint(solarEl, homeEl);
    drawFlow("s_h", sh.start.x, sh.start.y, sh.end.x, sh.end.y, flows.solarHouse, "#f59e0b");

    const bh = this.getEdgePoint(batteryEl, homeEl);
    drawFlow("b_h", bh.start.x, bh.start.y, bh.end.x, bh.end.y, flows.batteryHouse, batteryColor);
    const bg = this.getEdgePoint(batteryEl, gridEl);
    drawFlow("b_g", bg.start.x, bg.start.y, bg.end.x, bg.end.y, flows.batteryGrid, batteryColor);

    const gh = this.getEdgePoint(gridEl, homeEl);
    drawFlow("g_h", gh.start.x, gh.start.y, gh.end.x, gh.end.y, flows.gridHouse, "#ef4444");
    const gb = this.getEdgePoint(gridEl, batteryEl);
    drawFlow("g_b", gb.start.x, gb.start.y, gb.end.x, gb.end.y, flows.gridBattery, "#a855f7");

    const elements = this.renderRoot.querySelectorAll(".appliance");

    let visibleIndex = 0;

    const visible = this.appliances
      .filter(a => this.get(a.entity) > 0)
      .slice(0, 6);

    visible.forEach((a, i) => {
      const val = this.get(a.entity);
      if (val <= 0) return;

      const el = elements[visibleIndex] as HTMLElement;
      visibleIndex++;

      if (!el) return;

      const homeRect = homeEl.getBoundingClientRect();
      const appRect = el.getBoundingClientRect();
      const containerRect = this.renderRoot.querySelector(".inner")!.getBoundingClientRect();

      // Home center
      const x1 = homeRect.left - containerRect.left + homeRect.width / 2;
      const y1 = homeRect.top - containerRect.top + homeRect.height * 0.6;

      // Appliance TOP CENTER
      const x2 = appRect.left - containerRect.left + appRect.width / 2;
      const y2 = appRect.top - containerRect.top;

      drawFlow(
        `app_${i}`,
        x1,
        y1,
        x2,
        y2,
        val,
        "#3b82f6"
      );

    });

    // 🚗 CAR FLOW (outside loop!)
    if (!isNaN(flows.carPower) && flows.carPower > 0) {
      const carEl = this.renderRoot.querySelector(".car") as HTMLElement;

      if (carEl) {
        const homeRect = homeEl.getBoundingClientRect();
        const carRect = carEl.getBoundingClientRect();
        const containerRect = this.renderRoot.querySelector(".inner")!.getBoundingClientRect();

        const x1 = homeRect.left - containerRect.left + homeRect.width / 2;
        const y1 = homeRect.top - containerRect.top + homeRect.height * 0.6;

        const x2 = carRect.left - containerRect.left + carRect.width / 2;
        const y2 = carRect.top - containerRect.top;

        drawFlow(
          "car",
          x1,
          y1,
          x2,
          y2,
          flows.carPower,
          "#3b82f6"
        );
      }
    }

    requestAnimationFrame(() => this.animate());
  }

  renderLabels(f) {
    const format = (v) =>
      v >= 1000 ? (v / 1000).toFixed(1) + " kW" : v.toFixed(0) + " W";

    const batteryNet =
      (f.batteryHouse + f.batteryGrid) -
      (f.solarBattery + f.gridBattery);

    const batteryColor =
      batteryNet < 0 ? "#3b82f6" : "#22c55e";

    const getPulse = (v) => {
      const min = 0.6;
      const max = 1.6;
      const n = Math.min(v / 5000, 1);
      return min + (max - min) * n;
    };

    const solarEl = this.renderRoot.querySelector(".solar") as HTMLElement;
    const batteryEl = this.renderRoot.querySelector(".battery") as HTMLElement;
    const gridEl = this.renderRoot.querySelector(".grid") as HTMLElement;
    const homeEl = this.renderRoot.querySelector(".home") as HTMLElement;

    if (!solarEl || !batteryEl || !gridEl || !homeEl) return "";

    const solarBatteryPos = this.getLabelPosition(batteryEl, "top");
    const solarGridPos = this.getLabelPosition(gridEl, "top");
    const solarBottom = this.getLabelPosition(solarEl, "bottom");

    const batteryRight = this.getLabelPosition(batteryEl, "right");
    const gridLeft = this.getLabelPosition(gridEl, "left");

    const houseLeft = this.getLabelPosition(homeEl, "left");
    const houseRight = this.getLabelPosition(homeEl, "right");

    return html`
      ${f.solarBattery > 0 ? html`
        <div class="label"
          style="top:${solarBatteryPos.top}; left:${solarBatteryPos.left}; transform:${solarBatteryPos.transform}; box-shadow: 0 0 8px #f59e0b;">
          ${format(f.solarBattery)}
          ${this.renderArrow(135, "#f59e0b", getPulse(f.solarBattery))}
        </div>` : ""}

      ${f.solarExport > 0 ? html`
        <div class="label"
          style="top:${solarGridPos.top}; left:${solarGridPos.left}; transform:${solarGridPos.transform}; box-shadow: 0 0 8px #f59e0b;">
          ${this.renderArrow(45, "#f59e0b", getPulse(f.solarExport))}
          ${format(f.solarExport)}
        </div>` : ""}

      ${f.solarHouse > 0 ? html`
        <div class="label"
          style="top:${solarBottom.top}; left:${solarBottom.left}; transform:${solarBottom.transform}; box-shadow: 0 0 8px #f59e0b;">
          ${this.renderArrow(90, "#f59e0b", getPulse(f.solarHouse))}
          ${format(f.solarHouse)}
        </div>` : ""}

      ${f.batteryGrid > 0 ? html`
        <div class="label"
          style="top:${batteryRight.top}; left:${batteryRight.left}; transform:${batteryRight.transform}; box-shadow: 0 0 8px ${batteryColor};">
          ${format(f.batteryGrid)}
          ${this.renderArrow(0, batteryColor, getPulse(f.batteryGrid))}
        </div>` : ""}

      ${f.gridBattery > 0 ? html`
        <div class="label"
          style="top:${gridLeft.top}; left:${gridLeft.left}; transform:${gridLeft.transform}; box-shadow: 0 0 8px #a855f7;">
          ${this.renderArrow(180, "#a855f7", getPulse(f.gridBattery))}
          ${format(f.gridBattery)}
        </div>` : ""}

      ${f.batteryHouse > 0 ? html`
        <div class="label"
          style="top:${houseLeft.top}; left:${houseLeft.left}; transform:${houseLeft.transform}; box-shadow: 0 0 8px ${batteryColor};">
          ${format(f.batteryHouse)}
          ${this.renderArrow(45, batteryColor, getPulse(f.batteryHouse))}
        </div>` : ""}

      ${f.gridHouse > 0 ? html`
        <div class="label"
          style="top:${houseRight.top}; left:${houseRight.left}; transform:${houseRight.transform}; box-shadow: 0 0 8px #ef4444;">
          ${this.renderArrow(135, "#ef4444", getPulse(f.gridHouse))}
          ${format(f.gridHouse)}
        </div>` : ""}
    `;
  }

  render() {
    const f = this.getFlows();

    const visible = this.appliances
      .filter(a => this.get(a.entity) > 0)
      .slice(0, 4); // ✅ MAX 4

    const formatPrice = (v) => v.toFixed(2) + " kr/kWh";

    const format = (v) => v >= 1000 ? (v / 1000).toFixed(1) + " kW" : v.toFixed(0) + " W";
    const sum = (a, b, c = 0) => format(a + b + c);

    const batteryNet = (f.batteryHouse + f.batteryGrid) - (f.solarBattery + f.gridBattery);
    const gridNet = (f.gridHouse + f.gridBattery) - (f.solarExport + f.batteryGrid + f.houseGrid);

    return html`
      <ha-card .header=${this.config?.title || ""}>
        <div class="container">
          <div class="inner">
            
            <div class="price-box price-left" style="box-shadow: 0 0 8px #22c55e;">
              <div style="font-size:10px; opacity:0.7;">Export</div>
              <div>${formatPrice(f.exportPrice)}</div>
            </div>

            <div class="price-box price-right" style="box-shadow: 0 0 8px #ef4444;">
              <div style="font-size:10px; opacity:0.7;">Import</div>
              <div>${formatPrice(f.importPrice)}</div>
            </div>

            <div class="node solar"
              style="${(f.solarHouse + f.solarBattery + f.solarExport) > 0
                ? 'animation: glow 2s infinite; box-shadow: 0 0 6px orange, 0 2px 10px rgba(0,0,0,0.3);'
                : ''}">
              <span class="icon" style="animation: glow 2s infinite; color: orange;">
                <ha-icon icon="mdi:solar-power"></ha-icon>
              </span>
              <span class="value">${sum(f.solarHouse, f.solarBattery, f.solarExport)}</span>
            </div>

            <div class="node home"
              style="${(f.solarHouse + f.batteryHouse + f.gridHouse) > 0
                ? 'animation: glow 2s infinite; box-shadow: 0 0 6px #3b82f6, 0 2px 10px rgba(0,0,0,0.3);'
                : ''}">
              <span class="icon" style="animation: glow 2s infinite; color:#3b82f6;">
                <ha-icon icon="mdi:home"></ha-icon>
              </span>
              <span class="value">${sum(f.solarHouse, f.batteryHouse, f.gridHouse)}</span>
            </div>

            <div class="node battery"
              style="${Math.abs(batteryNet) > 0
                ? `animation: glow 2s infinite; box-shadow: 0 0 6px ${batteryNet < 0 ? "#3b82f6" : "#22c55e"}, 0 2px 10px rgba(0,0,0,0.3);`
                : ''}">
              <span class="icon" style="animation: glow 2s infinite; color:${batteryNet < 0 ? "#3b82f6" : "#22c55e"};">
                <ha-icon icon="mdi:home-battery"></ha-icon>
              </span>
              <span class="value">
                ${format(Math.abs(batteryNet))}
                ${!isNaN(f.batterySoc) ? html`
                  <div style="font-size:10px; opacity:0.7;">
                    ${f.batterySoc}%
                  </div>
                ` : ""}
              </span>

              ${!isNaN(f.batterySoc) ? html`
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
                    height:${Math.min(f.batterySoc, 100)}%;
                    background:${this.getSocColor(f.batterySoc)};
                    transition: height 0.4s ease;
                    animation:${batteryNet < 0 ? "pulse 1.5s infinite" : "none"};
                  "></div>
                </div>
              ` : ""}
            </div>

            <div class="node grid"
              style="${Math.abs(gridNet) > 0
                ? `animation: glow 2s infinite; box-shadow: 0 0 6px ${gridNet > 0 ? "#ef4444" : "#22c55e"}, 0 2px 10px rgba(0,0,0,0.3);`
                : ''}">
              <span class="icon" style="animation: glow 2s infinite; color:${gridNet > 0 ? "#ef4444" : "#22c55e"};">
                <ha-icon icon="mdi:transmission-tower"></ha-icon>
              </span>
              <span class="value">${format(Math.abs(gridNet))}</span>
            </div>

            ${visible.map((a, i) => {
              const pos = this.getAppliancePosition(i, visible.length);
              if (!pos) return "";
              const value = this.get(a.entity);

              if (!value || value <= 0) return "";

              return html`
                <div class="appliance"
                  style="
                    top:${pos.top};
                    left:${pos.left};
                    transform: translate(-50%, -50%);
                    ${value > 0
                      ? 'animation: glow 2s infinite; box-shadow: 0 0 6px #3b82f6, 0 2px 10px rgba(0,0,0,0.2);'
                      : ''}
                  ">

                  <div class="name">${a.name}</div>

                  <ha-icon class="icon" style="color:#3b82f6;" icon="${a.icon}"></ha-icon>

                  <div class="value">
                    ${value >= 1000 ? (value/1000).toFixed(1)+' kW' : value+' W'}
                  </div>

                </div>
              `;
            })}

            ${!isNaN(f.carPower) || !isNaN(f.carSoc) ? html`
              <div class="appliance car"
                style="
                  top:${this.getAppliancePosition(2, 4).top};
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
                  style="color:${this.getCarColor(f.carPower)};"
                  icon="mdi:car-electric">
                </ha-icon>

                <div class="value" style="color:${this.getCarColor(f.carPower)};">
                  ${f.carPower >= 1000 ? (f.carPower/1000).toFixed(1)+' kW' : f.carPower+' W'}
                </div>

                ${!isNaN(f.carSoc) ? html`
                  <div style="font-size:10px; opacity:0.7;">
                    ${f.carSoc.toFixed(0)}%
                  </div>
                ` : ""}
                ${!isNaN(f.carSoc) ? html`
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
                      height:${Math.min(f.carSoc, 100)}%;
                      background:${this.getSocColor(f.carSoc)};
                      transition: height 0.4s ease;
                      animation:${f.carPower > 0 ? "pulse 1.5s infinite" : "none"};
                    "></div>
                  </div>
                ` : ""}
              </div>
            ` : ""}

            <canvas></canvas>

            <div class="labels">
              ${this.renderLabels(f)}
            </div>

          </div> <!-- inner -->
        </div> <!-- container -->
      </ha-card>
    `;
  }
}

if (!customElements.get("solar-battery-economy-flow-card")) {
  customElements.define("solar-battery-economy-flow-card", SolarBatteryEconomyFlowCard);
}
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: "solar-battery-economy-flow-card",
  name: "Solar Battery Economy Flow Card",
  description: "Visual energy flow for Solar Battery Economy integration"
});