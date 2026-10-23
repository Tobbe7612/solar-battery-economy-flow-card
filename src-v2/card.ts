import { LitElement, html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { getActiveLayout } from './core/responsive-engine';
import type { LayoutType } from './core/layout-type';
import { getLiveFlows } from './core/energy-model';
import {
  buildPhaseLoadData,
  buildPhaseLoadSummary,
  hasConfiguredPhaseSensors,
} from './core/phase-load';
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
} from "./renderers/panels/panel-renderer";
import { renderPhaseLoadPanel } from "./renderers/phase-load-renderer";
import { getCardData }
  from "./core/card-data";
import { adaptLivePowerSnapshot }
  from "./core/live-power";
import type { LivePowerSnapshot }
  from "./core/live-power";
import type { LivePowerValueIssue }
  from "./core/live-power";
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
  private livePowerEntryId?: string;
  private livePowerSubscription?: () => Promise<void>;
  private livePowerSnapshot?: LivePowerSnapshot;
  @state()
  private livePowerIssue: LivePowerValueIssue | 'unavailable' | undefined = 'unavailable';
  private livePowerLookupStarted = false;
  private livePowerSubscriptionStarted = false;
  private livePowerLifecycle = 0;
  connectedCallback(): void {
    super.connectedCallback();
    this.requestUpdate();
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
    this.livePowerLifecycle += 1;
    this.livePowerLookupStarted = false;
    this.livePowerSubscriptionStarted = false;
    const unsubscribe = this.livePowerSubscription;
    this.livePowerSubscription = undefined;
    if (unsubscribe) {
      void unsubscribe().catch(() => undefined);
    }
    this.resizeObserver?.disconnect();
    super.disconnectedCallback();
  }
  protected updated(): void {
    if (
      this.livePowerLookupStarted ||
      !this.isConnected ||
      typeof this.hass?.callWS !== 'function'
    ) {
      return;
    }

    this.livePowerLookupStarted = true;
    void this.initializeLivePowerSubscription(
      this.hass,
      this.livePowerLifecycle,
    );
  }

  private async initializeLivePowerSubscription(
    hass: any,
    lifecycle: number,
  ): Promise<void> {
    let entries: any;
    try {
      entries = await hass.callWS({
        type: 'config_entries/get',
        domain: 'solar_battery_economy',
      });
    } catch {
      this.livePowerIssue = 'unavailable';
      this.requestUpdate();
      return;
    }

    if (
      lifecycle !== this.livePowerLifecycle ||
      !this.isConnected ||
      !Array.isArray(entries) ||
      entries.length !== 1 ||
      entries[0]?.state !== 'loaded' ||
      typeof entries[0]?.entry_id !== 'string' ||
      !entries[0].entry_id
    ) {
      this.livePowerIssue = 'unavailable';
      this.requestUpdate();
      return;
    }

    this.livePowerEntryId = entries[0].entry_id;
    if (
      this.livePowerSubscriptionStarted ||
      typeof hass.connection?.subscribeMessage !== 'function'
    ) {
      return;
    }

    this.livePowerSubscriptionStarted = true;
    try {
      const unsubscribe = await hass.connection.subscribeMessage(
        (snapshot: unknown) => {
          const result = adaptLivePowerSnapshot(snapshot);
          if (!result.snapshot) {
            this.livePowerSnapshot = undefined;
            this.livePowerIssue = result.issue;
            this.requestUpdate();
            return;
          }

          this.livePowerSnapshot = result.snapshot;
          this.livePowerIssue = undefined;
          this.requestUpdate();
        },
        {
          type: 'solar_battery_economy/subscribe_live_power',
          config_entry_id: this.livePowerEntryId,
        },
      );

      if (
        lifecycle !== this.livePowerLifecycle ||
        !this.isConnected
      ) {
        await unsubscribe();
        return;
      }

      this.livePowerSubscription = unsubscribe;
    } catch {
      // Keep the card operational when Live Power is unavailable.
      this.livePowerSnapshot = undefined;
      this.livePowerIssue = 'unavailable';
      this.requestUpdate();
    }
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
        this.livePowerSnapshot,
    );
    const cardData =
      getCardData(
        this.hass,
        effectiveConfig,
        this.livePowerSnapshot,
      );
    const phaseLoadVisible = hasConfiguredPhaseSensors(effectiveConfig.phaseLoad);
    const phaseLoadData = phaseLoadVisible
      ? buildPhaseLoadData(this.hass, effectiveConfig.phaseLoad)
      : [];
    const phaseLoadSummary = buildPhaseLoadSummary(
      phaseLoadData,
      effectiveConfig.phaseLoad?.invertDirection,
    );
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
          ${this.livePowerIssue
            ? html`<div class="live-power-status" role="status">Effektdata saknas</div>`
            : ''}
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
              ${phaseLoadVisible ? renderPhaseLoadPanel(phaseLoadData, phaseLoadSummary) : ''}
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
