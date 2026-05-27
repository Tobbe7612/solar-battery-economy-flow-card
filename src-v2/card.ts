import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('solar-battery-economy-flow-card')
export class SolarBatteryEconomyFlowCard extends LitElement {

  @property({ attribute: false })
  public hass: any;

  @property({ attribute: false })
  public config: any;

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .card {
      position: relative;

      width: 100%;
      aspect-ratio: 16 / 9;

      overflow: hidden;

      border-radius: 28px;

      background:
        radial-gradient(circle at top, rgba(255,255,255,0.06), transparent 40%),
        linear-gradient(
          180deg,
          #182230 0%,
          #101820 100%
        );

      box-shadow:
        0 20px 60px rgba(0,0,0,0.45),
        inset 0 1px 0 rgba(255,255,255,0.05);

      backdrop-filter: blur(20px);
    }

    .background-glow {
      position: absolute;

      inset: 0;

      background:
        radial-gradient(circle at 50% 20%, rgba(255,200,50,0.15), transparent 30%),
        radial-gradient(circle at 80% 50%, rgba(80,255,180,0.10), transparent 30%),
        radial-gradient(circle at 20% 50%, rgba(80,160,255,0.10), transparent 30%);
    }

    .title {
      position: absolute;

      top: 32px;
      left: 40px;

      color: white;

      font-size: 32px;
      font-weight: 600;
      letter-spacing: 0.02em;
    }

    .subtitle {
      position: absolute;

      top: 74px;
      left: 40px;

      color: rgba(255,255,255,0.65);

      font-size: 14px;
      letter-spacing: 0.04em;

      text-transform: uppercase;
    }

    .footer {
      position: absolute;

      left: 24px;
      right: 24px;
      bottom: 24px;

      height: 88px;

      border-radius: 22px;

      background: rgba(255,255,255,0.06);

      border: 1px solid rgba(255,255,255,0.08);

      backdrop-filter: blur(24px);

      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .metric {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .metric-label {
      color: rgba(255,255,255,0.55);
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    .metric-value {
      color: white;
      font-size: 22px;
      font-weight: 600;
    }
  `;

  public setConfig(config: any): void {
    this.config = config;
  }

  render() {
    return html`
      <ha-card>
        <div class="card">

          <div class="background-glow"></div>

          <div class="title">
            Solar Battery Economy
          </div>

          <div class="subtitle">
            Premium Energy Dashboard v2
          </div>

          <div class="footer">

            <div class="metric">
              <div class="metric-label">Solar</div>
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