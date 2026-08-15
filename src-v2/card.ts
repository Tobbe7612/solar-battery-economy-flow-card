import { LitElement, html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { getActiveLayout } from './core/responsive-engine';
import type { LayoutType } from './core/layout-type';
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
import {
    renderLeftPanel,
    renderRightPanel,
} from "./renderers/panels/panel-renderer";
import { getCardData }
  from "./core/card-data";
import { autofillFromIntegration }
  from "./config/autodiscovery";
import { mergeConfig }
  from "./config/merge-config";
import { DEFAULT_CONFIG }
  from "./config/defaults";
import "./editor/editor";

@customElement('solar-battery-economy-flow-card')
export class SolarBatteryEconomyFlowCard extends LitElement {
  static styles = cardStyles;

  static getConfigElement(): HTMLElement {
    return document.createElement(
      'solar-battery-economy-flow-card-editor'
    );
  }

  static getStubConfig(): typeof DEFAULT_CONFIG {
    return DEFAULT_CONFIG;
  }

  @property({ attribute: false })
  public hass: any;
  @property({ attribute: false })
  public config: any;
  @state()
  private activeLayout = desktopLayout;
  @state()
  private layoutType: LayoutType = 'desktop';
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

          // Ignorera transienta/ogiltiga mätningar (t.ex. under
          // dashboard-relayout när andra kort registreras)
          if (width < 10 || height < 10) {
            return;
          }

          const aspectRatio =
            width / Math.max(height, 1);
          this.sceneScale = 1;
          const responsive = getActiveLayout({
            layout: this.layoutType,
            width,
            height,
          });
          this.activeLayout = responsive.layout;
          this.sceneScale = responsive.scale;
          this.layoutReady = true;
        }
      );
  }
  disconnectedCallback(): void {
    this.resizeObserver?.disconnect();
    super.disconnectedCallback();
  }
  protected firstUpdated(): void {
    const element =
        this.renderRoot.querySelector(".card") as HTMLElement;
    this.resizeObserver?.observe(element);
  }
  public setConfig(config: any): void {
    this.config = config;
    const layout = config?.layout;
    this.layoutType =
      layout === 'mobile'
        ? 'mobile'
        : 'desktop';
  }
  render() {
    if (!this.layoutReady) {
      return html`
        <ha-card class="ha-wrapper">
          <div class="card ${this.layoutType}"></div>
        </ha-card>
      `;
    }
    const effectiveConfig = mergeConfig(
        autofillFromIntegration(this.hass),
        this.config,
    );

    const liveFlows = getLiveFlows(
        this.hass,
        effectiveConfig,
    );
    const cardData =
      getCardData(this.hass, effectiveConfig);
    const layout = this.activeLayout;
    const timeOfDay =
      getTimeOfDay(this.hass);
    const sunPosition =
      getSunPosition(this.hass);
    const backgroundImage =
      getBackgroundImage(
        this.hass,
        timeOfDay,
        this.layoutType
      );
    return html`
      <ha-card class="ha-wrapper">
        <div class="card ${this.layoutType} ${timeOfDay}">
          <div class="scene">
            <div
              class="scene-inner"
              style="
                width:${layout.sceneWidth}px;
                height:${layout.sceneHeight}px;
                transform:
                  translate(0px, 0px)
                  scale(${this.sceneScale});
              "
            >
              ${effectiveConfig.sidePanels.energy.show
                ? renderLeftPanel({
                    x: layout.panels.left.x,
                    y: layout.panels.left.y,
                    panel: layout.panels.left,
                    host: this,
                    cardData,
                })
                : ""}

              ${effectiveConfig.sidePanels.economy.show
                ? renderRightPanel({
                    x: layout.panels.right.x,
                    y: layout.panels.right.y,
                    panel: layout.panels.right,
                    host: this,
                    cardData,
                })
                : ""}
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
                cardData.solarPower,
              )}
              <div
                class="flow-layer"
                style="
                  width:${layout.sceneWidth}px;
                  height:${layout.sceneHeight}px;
                "
              >
                ${renderFlows(
                    layout,
                    liveFlows,
                    cardData,
                    this,
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
