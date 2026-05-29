import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { getActiveLayout } from './core/responsive-engine';
import { getLiveFlows } from './core/energy-model';
import { getTimeOfDay } from './core/time-of-day';
import { getSunPosition } from './core/sun-position';
import { getBackgroundImage } from './core/background-manager';

import { renderFlows } from './renderers/flow-renderer';
import { renderNodes } from './renderers/node-renderer';

@customElement('solar-battery-economy-flow-card')
export class SolarBatteryEconomyFlowCard extends LitElement {

  @property({ attribute: false })
  public hass: any;

  @property({ attribute: false })
  public config: any;

  @state()
  private activeLayout = getActiveLayout();

  connectedCallback(): void {

    super.connectedCallback();

    window.addEventListener(
      'resize',
      this.handleResize
    );
  }

  disconnectedCallback(): void {

    window.removeEventListener(
      'resize',
      this.handleResize
    );

    super.disconnectedCallback();
  }

  private handleResize = () => {

    this.activeLayout = getActiveLayout();
  };

  static styles = css`

    :host {
      display: block;

      width: 100%;

      --ha-card-background: transparent;
      --ha-card-border-width: 0;
      --ha-card-box-shadow: none;
    }

    .ha-wrapper {
      background: transparent;
      border: none;
      box-shadow: none;
      overflow: visible;
    }

    .card {
      position: relative;

      width: 100%;

      min-height: 1200px;

      overflow: hidden;

      border-radius: 42px;

      background:
        linear-gradient(
          180deg,
          #14202c 0%,
          #091018 100%
        );

      box-shadow:
        0 40px 100px rgba(0,0,0,0.50);

      backdrop-filter: blur(20px);
    }

    .hero-background {

      position: absolute;

      inset: 0;

      background-size: cover;
      background-position: center center;

      transform: scale(1.02);

      filter:
        saturate(1.05)
        contrast(1.02)
        brightness(0.95);

      z-index: 0;
    }

    .background-glow {
      position: absolute;

      inset: 0;

      background:
        radial-gradient(circle at 50% 10%, rgba(255,200,50,0.20), transparent 24%),
        radial-gradient(circle at 82% 40%, rgba(80,255,180,0.14), transparent 32%),
        radial-gradient(circle at 20% 60%, rgba(80,160,255,0.16), transparent 36%),
        radial-gradient(circle at 50% 90%, rgba(120,80,255,0.10), transparent 30%);

      z-index: 1;
    }

    .scene-sun-glow {

      position: absolute;

      left: 50%;
      top: -220px;

      transition:
        left 2s ease,
        top 2s ease;

      transform: translateX(-50%);

      width: 1100px;
      height: 900px;

      background:
        radial-gradient(
          circle,
          rgba(255,220,120,0.26),
          rgba(255,220,120,0.10),
          transparent 72%
        );

      filter: blur(30px);

      pointer-events: none;

      z-index: 1;
    }

    .scene-sun-disc {

      position: absolute;

      width: 64px;
      height: 64px;

      border-radius: 50%;

      transform: translateX(-50%);

      background:
        radial-gradient(
          circle,
          rgba(255,230,120,1) 0%,
          rgba(255,210,80,1) 60%,
          rgba(255,180,50,0.95) 100%
        );

      box-shadow:
        0 0 20px rgba(255,210,80,0.8),
        0 0 50px rgba(255,210,80,0.5),
        0 0 70px rgba(255,210,80,0.25);

      z-index: 999;

      transition:
        left 2s ease,
        top 2s ease;
    }

    .scene-vignette {
      position: absolute;

      inset: 0;

      background:
        radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.52));

      pointer-events: none;

      z-index: 2;
    }

    .scene {
      position: relative;

      width: 100%;
      height: 1200px;

      overflow: hidden;

      z-index: 4;
    }

    .scene-inner {
      position: absolute;

      left: 50%;
      top: -80px;

      width: 1920px;
      height: 1080px;

      transform:
        translateX(-50%)
        scale(1.0);

      transform-origin: top center;
    }

    .flow-layer {

      position: absolute;

      left: 0;
      top: 0;

      width: 1920px;
      height: 1080px;

      pointer-events: none;

      z-index: 999;
    }

    .flow-svg {

      position: absolute;

      left: 0;
      top: 0;

      width: 1920px;
      height: 1080px;

      overflow: visible;

      pointer-events: none;
    }

    .animated-flow {

      filter:
        drop-shadow(0 0 14px currentColor)
        drop-shadow(0 0 28px currentColor)
        drop-shadow(0 0 56px currentColor)
        drop-shadow(0 0 96px currentColor);

      stroke-dasharray: 44;

      animation:
        flowMove 0.7s linear infinite;
    }

    @keyframes flowMove {

      from {
        stroke-dashoffset: 88;
      }

      to {
        stroke-dashoffset: 0;
      }
    }

    .energy-node {

      opacity: 0.96;
      isolation: isolate;
      position: absolute;

      border-radius: 34px;

      overflow: hidden;

      backdrop-filter: blur(30px);

      background:
        linear-gradient(
          180deg,
          rgba(255,255,255,0.10),
          rgba(255,255,255,0.04)
        );

      border:
        1px solid rgba(255,255,255,0.10);

      box-shadow:
        0 20px 80px rgba(0,0,0,0.35),
        inset 0 1px 0 rgba(255,255,255,0.06);

      z-index: 50;

      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
    }
    
    .energy-node.house {

      background:
        linear-gradient(
          180deg,
          rgba(80,140,255,0.20),
          rgba(40,90,180,0.14)
        );

      border:
        1px solid rgba(120,180,255,0.35);

      box-shadow:
        0 0 60px rgba(80,140,255,0.18),
        0 30px 80px rgba(0,0,0,0.38);
    }

    .energy-node.grid {

      border:
        1px solid rgba(255,120,120,0.32);

      box-shadow:
        0 0 40px rgba(255,80,80,0.14),
        0 20px 60px rgba(0,0,0,0.30);
    }

    .energy-node.battery {

      border:
        1px solid rgba(120,255,180,0.30);

      box-shadow:
        0 0 50px rgba(80,255,160,0.14),
        0 20px 60px rgba(0,0,0,0.30);
    }

    .energy-node.car {

      border:
        1px solid rgba(180,120,255,0.30);

      box-shadow:
        0 0 50px rgba(180,120,255,0.12),
        0 20px 60px rgba(0,0,0,0.30);
    }

    .energy-node.spa {

      border:
        1px solid rgba(100,220,255,0.26);

      box-shadow:
        0 0 40px rgba(100,220,255,0.10),
        0 20px 60px rgba(0,0,0,0.30);
    }

    .energy-node.solar {

      border:
        1px solid rgba(255,220,120,0.30);

      box-shadow:
        0 0 60px rgba(255,220,120,0.14),
        0 20px 60px rgba(0,0,0,0.30);
    }

    .energy-node:hover {

      transform:
        translateY(-2px)
        scale(1.015);

      box-shadow:
        0 30px 90px rgba(0,0,0,0.45),
        0 0 40px rgba(255,255,255,0.06);
    }

    .node-glow {

      position: absolute;

      inset: -20%;

      background:
        radial-gradient(
          circle at center,
          rgba(255,255,255,0.12),
          transparent 70%
        );

      opacity: 0.5;

      z-index: 0;
    }

    .node-shimmer {

      position: absolute;

      inset: 0;

      background:
        linear-gradient(
          135deg,
          rgba(255,255,255,0.10),
          transparent 40%
        );

      opacity: 0.35;

      pointer-events: none;

      z-index: 1;
    }

    .node-inner {

      position: absolute;

      inset: 0;

      display: flex;

      flex-direction: column;

      align-items: center;

      justify-content: center;

      gap: 10px;

      padding: 24px;

      z-index: 2;
    }

    .node-icon {

      width: 54px;
      height: 54px;

      display: flex;

      align-items: center;
      justify-content: center;

      color: rgba(255,255,255,0.95);

      filter:
        drop-shadow(0 0 8px currentColor);

      margin-bottom: 8px;
    }

    .node-icon svg {

      width: 100%;
      height: 100%;

      overflow: visible;
    }

    .node-title {

      color: white;

      font-size: 30px;

      font-weight: 700;

      letter-spacing: -0.03em;
    }

    .node-value {

      color: rgba(255,255,255,0.95);

      font-size: 32px;

      font-weight: 600;

      letter-spacing: -0.04em;
    }

    .node-status {

      color: rgba(255,255,255,0.55);

      font-size: 16px;

      letter-spacing: 0.02em;
    }

    .footer {
      position: absolute;

      left: 34px;
      right: 34px;
      bottom: 34px;

      height: 130px;

      border-radius: 32px;

      background: rgba(10,18,28,0.58);

      border: 1px solid rgba(255,255,255,0.08);

      backdrop-filter: blur(30px);

      display: flex;
      align-items: center;
      justify-content: space-around;

      z-index: 100;
    }

    .metric {
      display: flex;
      flex-direction: column;

      gap: 10px;
    }

    .metric-label {
      color: rgba(255,255,255,0.50);

      font-size: 12px;

      text-transform: uppercase;

      letter-spacing: 0.08em;
    }

    .metric-value {
      color: white;

      font-size: 32px;

      font-weight: 600;

      letter-spacing: -0.02em;
    }

    @media (max-width: 1400px) {

      .scene-inner {

        transform:
          translateX(-50%)
          scale(0.72);
      }

      .card {
        min-height: 1000px;
      }

      .scene {
        height: 1000px;
      }
    }

    @media (max-width: 900px) {

      .scene-inner {

        width: 430px;
        height: 1200px;

        top: 0;

        transform:
          translateX(-50%)
          scale(1);
      }

      .card {
        min-height: 1200px;
      }

      .card.morning {

        filter:
          saturate(1.08)
          brightness(1.05);
      }

      .card.day {

        filter:
          saturate(1.15)
          brightness(1.12);
      }

      .card.sunset {

        filter:
          saturate(1.20)
          brightness(1.02)
          hue-rotate(-10deg);
      }

      .card.night {

        filter:
          saturate(0.92)
          brightness(0.90);
      }

      .scene {
        height: 1200px;
      }

      .footer {
        left: 20px;
        right: 20px;
        bottom: 20px;

        height: auto;

        padding: 24px;

        flex-wrap: wrap;

        gap: 24px;

        justify-content: flex-start;
      }

      .metric-value {
        font-size: 24px;
      }
    }
  `;

  public setConfig(config: any): void {
    this.config = config;
  }

  render() {

    const liveFlows = getLiveFlows(this.hass);
    const timeOfDay =
      getTimeOfDay(this.hass);
    const sunPosition =
      getSunPosition(this.hass);
    const backgroundImage =
      getBackgroundImage(
        this.hass,
        timeOfDay
      );

    return html`
      <ha-card class="ha-wrapper">

        <div class="card ${timeOfDay}">

          <div
            class="hero-background"
            style="
              background-image:
                linear-gradient(
                  to bottom,
                  rgba(5,10,20,0.20),
                  rgba(5,10,20,0.72)
                ),
                url('${backgroundImage}');
            "
          ></div>

          <div class="background-glow"></div>

          <div
            class="scene-sun-glow"
            style="
              left:${sunPosition.left}%;
              top:${sunPosition.top}px;
            "
          ></div>

          <div
            class="scene-sun-disc"
            style="
              left:${sunPosition.left}%;
              top:${sunPosition.top}px;
            "
          ></div>

          <div class="scene-vignette"></div>

          <div class="scene">

            <div class="scene-inner">

              <div class="flow-layer">
                ${renderFlows(
                  this.activeLayout,
                  liveFlows
                )}
              </div>

              ${renderNodes(this.activeLayout)}

            </div>

          </div>

          <div class="footer">

            <div class="metric">
              <div class="metric-label">Solar Production</div>
              <div class="metric-value">5.2 kW</div>
            </div>

            <div class="metric">
              <div class="metric-label">Battery</div>
              <div class="metric-value">82%</div>
            </div>

            <div class="metric">
              <div class="metric-label">Saved Today</div>
              <div class="metric-value">43 kr</div>
            </div>

            <div class="metric">
              <div class="metric-label">Self Consumption</div>
              <div class="metric-value">91%</div>
            </div>

          </div>

        </div>

      </ha-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'solar-battery-economy-flow-card': SolarBatteryEconomyFlowCard;
  }
}