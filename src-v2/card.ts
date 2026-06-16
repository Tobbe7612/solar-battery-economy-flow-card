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
import { renderNodes } from './renderers/node-renderer';
import { renderSolarHub }
  from './renderers/solar-hub';
import { renderSolarArc }
  from './renderers/solar-arc';
import { renderSidePanels }
  from './renderers/side-panels';
import { getCardData }
  from './core/card-data';
import { cardStyles }
  from './styles/card-styles';
import {
  getLayoutMode,
  shouldRenderPanels
} from './core/layout-mode';

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
  private cardWidth = 1920;

  @state()
  private sceneScale = 1;

  private resizeObserver?: ResizeObserver;

  connectedCallback(): void {

    super.connectedCallback();

    this.resizeObserver =
      new ResizeObserver(
        (entries) => {

          const width =
            entries[0].contentRect.width;
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
            getActiveLayout(width);
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
  }

  render() {

    const liveFlows = getLiveFlows(this.hass);
    const layout = this.activeLayout;
    const layoutMode =
      getLayoutMode(
        this.config,
        this.cardWidth
      );
    const timeOfDay =
      getTimeOfDay(this.hass);
    const sunPosition =
      getSunPosition(this.hass);
    const backgroundImage =
      getBackgroundImage(
        this.hass,
        timeOfDay
      );
    
    const cardData =
      getCardData(this.hass);

    const sidePanelData = {

      solarEnergy:
        cardData.solarEnergy,

      batteryToHouse:
        cardData.batteryToHouse,

      solarExportEnergy:
        cardData.solarExportEnergy,

      gridToHouseEnergy:
        cardData.gridToHouseEnergy,

      systemEfficiency:
        cardData.systemEfficiency,

      savingsToday:
        cardData.savingsToday,

      totalSavings:
        cardData.totalSavings,

      gridIndependence:
        cardData.gridIndependence,

      co2Saved:
        cardData.co2Saved,

      selfSufficiency:
        cardData.selfSufficiency
    };

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

              <div class="background-glow"></div>

              ${shouldRenderPanels(layoutMode)
                ? renderSidePanels(
                    sidePanelData,
                    layout
                  )
                : ''
              }

              <div
                class="scene-sun-glow"
                style="
                  left:50%;
                  top:${sunPosition.top}px;
                "
              ></div>

              <div class="scene-vignette"></div>

              ${renderSolarArc(
                sunPosition
              )}

              ${renderSolarHub(
                this.activeLayout,
                this.hass
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
                  liveFlows
                )}
              </div>

              ${renderNodes(
                this.activeLayout,
                this.hass
              )}

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