import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { getActiveLayout } from './core/responsive-engine';
import type { LayoutType } from './core/layout-type';
import { getLiveFlows } from './core/energy-model';
import type { RuntimePhase, LiveRuntimeSnapshot } from './core/live-runtime';
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
import { renderPhaseLoadPanel } from "./renderers/phase-load-renderer";
import { getCardData }
  from "./core/card-data";
import type { LivePowerValueIssue }
  from "./core/live-power";
import { adaptLiveRuntimeSnapshot } from "./core/live-runtime";
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
  private liveRuntimeSubscription?: () => Promise<void>;
  private liveRuntimeSnapshot?: LiveRuntimeSnapshot;
  @state()
  private livePowerIssue: LivePowerValueIssue | 'unavailable' | undefined = 'unavailable';
  private livePowerLookupStarted = false;
  private liveRuntimeSubscriptionStarted = false;
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
    this.liveRuntimeSubscriptionStarted = false;
    const unsubscribe = this.liveRuntimeSubscription;
    this.liveRuntimeSubscription = undefined;
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
      this.liveRuntimeSubscriptionStarted ||
      typeof hass.connection?.subscribeMessage !== 'function'
    ) {
      return;
    }

    try {
      this.liveRuntimeSubscriptionStarted = true;
      const unsubscribe = await hass.connection.subscribeMessage(
        (payload: unknown) => {
          this.liveRuntimeSnapshot = adaptLiveRuntimeSnapshot(payload);
          this.livePowerIssue = this.liveRuntimeSnapshot ? undefined : 'unavailable';
          this.requestUpdate();
        },
        { type: 'solar_battery_economy/subscribe_live_runtime', config_entry_id: this.livePowerEntryId },
      );

      if (
        lifecycle !== this.livePowerLifecycle ||
        !this.isConnected
      ) {
        await unsubscribe();
        return;
      }

      this.liveRuntimeSubscription = unsubscribe;
    } catch {
      // Keep the card operational when SBE live runtime is unavailable.
      this.liveRuntimeSnapshot = undefined;
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
    const effectiveConfig = mergeConfig(this.config);

    const liveFlows = getLiveFlows(
        effectiveConfig,
        this.liveRuntimeSnapshot?.livePower,
        this.liveRuntimeSnapshot?.consumers,
    );
    const cardData =
      getCardData(
        this.hass,
        effectiveConfig,
        this.liveRuntimeSnapshot?.livePower,
        this.liveRuntimeSnapshot?.consumers,
        this.liveRuntimeSnapshot?.batterySoc.value ?? null,
      );
    const phaseLoadData: RuntimePhase[] = this.liveRuntimeSnapshot?.phaseLoad.phases ?? [];
    const phaseLoadVisible = phaseLoadData.some((phase) => phase.current !== null || phase.power !== null);
    const phaseLoadSummary = this.liveRuntimeSnapshot?.phaseLoad.summary;
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
              ${phaseLoadVisible && phaseLoadSummary ? renderPhaseLoadPanel(phaseLoadData, phaseLoadSummary) : ''}
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
