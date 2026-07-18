import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { getActiveLayout } from './core/responsive-engine';
import { getLiveFlows } from './core/energy-model';
import { getTimeOfDay } from './core/time-of-day';
import { getSunPosition } from './core/sun-position';
import { getBackgroundImage } from './core/background-manager';
import { desktopLayout }
  from './layouts/desktop-layout';

import { renderFlows } from './renderers/flow-renderer';

import { renderSolarArc }
  from './renderers/solar-arc';
import { cardStyles }
  from './styles/card-styles';
import { renderScene }
  from "./renderers/scene/scene-renderer";
import { getCardData }
  from "./core/card-data";
import { renderDebugPanel }
from "./renderers/debug/debug-panel";

@customElement('solar-battery-economy-flow-card')
export class SolarBatteryEconomyFlowCard extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false })
  public hass: any;

  @property({ attribute: false })
  public config: any;

  @state()
  private activeLayout = desktopLayout;

  @state()
  private forcedLayoutMode: 'auto' | 'panel' | 'sidebar' | 'masonry' | 'sections' = 'auto';

  @state()
  private cardWidth = 1920;

  @state()
  private sceneScale = 1;

  @state()
  private layoutReady = false;

  private resizeObserver?: ResizeObserver;

  connectedCallback(): void {

    super.connectedCallback();

    this.resizeObserver =
      new ResizeObserver(
        (entries) => {

          const width =
            entries[0].contentRect.width;
          const height =
            entries[0].contentRect.height;

          const aspectRatio =
            width / Math.max(height, 1);
          console.log(
            'CARD WIDTH:',
            width
          );

          console.log(
            'ACTIVE LAYOUT:',
            width <= 900
              ? 'mobile'
              : width <= 1400
                ? 'tablet'
                : 'desktop'
          );

          this.cardWidth = width;

          this.sceneScale = 1;

          this.activeLayout =
            getActiveLayout({
              width,
              height,
              aspectRatio,
              layoutMode: this.forcedLayoutMode,
            });
          this.layoutReady = true;
        }
      );
  }

  disconnectedCallback(): void {

    this.resizeObserver?.disconnect();

    super.disconnectedCallback();
  }

  

  protected firstUpdated(): void {

    this.resizeObserver?.observe(
      this.renderRoot.querySelector(
        '.card'
      ) as Element
    );
  }

  public setConfig(config: any): void {

    this.config = config;

    this.forcedLayoutMode =
      config?.layout_mode ?? 'auto';
  }

  render() {
    if (!this.layoutReady) {
      return html`
        <ha-card class="ha-wrapper">
          <div class="card"></div>
        </ha-card>
      `;
    }
    const liveFlows = getLiveFlows(this.hass);
    const cardData =
      getCardData(this.hass);
    const layout = this.activeLayout;
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

          <div class="scene">

            <div
              class="scene-inner"
              style="
                width:${layout.sceneWidth}px;
                height:${layout.sceneHeight}px;

                transform:
                  translateX(-50%)
                  scale(${this.sceneScale});
              "
            >
              ${false && renderDebugPanel(liveFlows)}
              <div
                class="hero-background"
                style="
                  background-image:
                    linear-gradient(
                      to bottom,
                      rgba(5,10,20,0.08),
                      rgba(5,10,20,0.25)
                    ),
                    url('${backgroundImage}');
                "
              ></div>

              ${renderScene(cardData)}

              <div class="background-glow"></div>

              <div
                class="scene-sun-glow"
                style="
                  left:50%;
                  top:${sunPosition.top}px;
                "
              ></div>

              <div class="scene-vignette"></div>

              ${renderSolarArc(
                sunPosition,
                layout,
              )}

              <div
                class="flow-layer"
                style="
                  width:${layout.sceneWidth}px;
                  height:${layout.sceneHeight}px;
                "
              >
                ${renderFlows(
                    this.activeLayout,
                    liveFlows,
                    cardData
                )}
              </div>

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