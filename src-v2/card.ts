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
import { DashboardSubscription } from "./core/dashboard-subscription";
import { adaptDashboardCardData, consumerSubtotalDevices, summarizeConsumerEnergy, summarizeConsumerPower, type DashboardCardData } from "./core/dashboard-data";
import { renderPhaseNetworkDetail } from "./renderers/phase-network-detail";
import { getViewModel } from "./core/view-model";
import { buildEnergyTodayLabelMetrics } from "./renderers/labels/energy-today";

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
  private readonly dashboardSubscription = new DashboardSubscription();
  private dashboardSubscriptionStarted = false;
  @state() private dashboardData?: DashboardCardData;
  @state() private dashboardIssue?: string;
  @state() private displayMode: "overview" | "consumers" = "overview";
  @state() private valueMode: "live" | "energy_today" = "live";
  @state() private detailView = false;
  private previousView: { displayMode: "overview" | "consumers"; valueMode: "live" | "energy_today" } = { displayMode: "overview", valueMode: "live" };
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
    this.dashboardSubscriptionStarted = false;
    this.dashboardSubscription.unsubscribeNow();
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
    if (this.valueMode === "energy_today") this.startDashboardSubscription(hass, this.livePowerEntryId!, lifecycle);
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

  private startDashboardSubscription(hass: any, entryId: string, lifecycle: number): void {
    if (this.dashboardSubscriptionStarted || typeof hass.connection?.subscribeMessage !== "function") return;
    this.dashboardSubscriptionStarted = true;
    void this.dashboardSubscription.subscribe(hass.connection, entryId, (payload) => {
      if (lifecycle !== this.livePowerLifecycle || !this.isConnected) return;
      this.dashboardData = adaptDashboardCardData(payload);
      this.dashboardIssue = this.dashboardData ? undefined : "SBE:s dagsdata saknas eller har ett format som kortet inte stöder";
      this.requestUpdate();
    }, () => {
      if (lifecycle !== this.livePowerLifecycle || !this.isConnected) return;
      this.dashboardIssue = "Kunde inte hämta SBE:s dagsdata";
      this.requestUpdate();
    });
  }

  private ensureDashboardSubscription(): void {
    if (!this.livePowerEntryId || !this.hass?.connection) return;
    this.startDashboardSubscription(this.hass, this.livePowerEntryId, this.livePowerLifecycle);
  }

  private setDetailView(active: boolean): void {
    if (active) {
      this.previousView = { displayMode: this.displayMode, valueMode: this.valueMode };
      this.detailView = true;
      return;
    }
    this.detailView = false;
    this.displayMode = this.previousView.displayMode;
    this.valueMode = this.previousView.valueMode;
  }

  private renderViewControls() {
    if (this.detailView) return "";
    return html`<nav class="view-toolbar" aria-label="Kortvy">
      <div class="view-choice" aria-label="Visningsläge">
        <button class=${this.displayMode === "overview" ? "selected" : ""} aria-pressed=${this.displayMode === "overview"} @click=${() => { this.displayMode = "overview"; }}>Översikt</button>
        <button class=${this.displayMode === "consumers" ? "selected" : ""} aria-pressed=${this.displayMode === "consumers"} @click=${() => { this.displayMode = "consumers"; }}>Förbrukare</button>
      </div>
      <div class="view-choice" aria-label="Värdeläge">
        <button class=${this.valueMode === "live" ? "selected" : ""} aria-pressed=${this.valueMode === "live"} @click=${() => { this.valueMode = "live"; }}>Live</button>
        <button class=${this.valueMode === "energy_today" ? "selected" : ""} aria-pressed=${this.valueMode === "energy_today"} @click=${() => { this.valueMode = "energy_today"; this.ensureDashboardSubscription(); }}>Energi idag</button>
      </div>
    </nav>`;
  }

  private renderConsumerSummary(power: ReturnType<typeof summarizeConsumerPower>, energy: ReturnType<typeof summarizeConsumerEnergy>) {
    const energyMode = this.valueMode === "energy_today";
    const summaryValue = energyMode ? energy.metric.value === null ? "— kWh" : `${energy.metric.value.toFixed(2)} kWh` : power.validCount === 0 ? "— W" : `${Math.round(power.value)} W`;
    const incomplete = energyMode ? energy.metric.quality !== "valid" : power.missingCount > 0 || power.validCount === 0;
    const missing = energyMode ? energy.missingCount : power.missingCount;
    const label = energyMode ? "VALDA FÖRBRUKARE · IDAG" : "VALDA FÖRBRUKARE · LIVE";
    return html`<aside class="consumer-summary" aria-label=${energyMode ? "Summerad energi för valda förbrukare" : "Summerad effekt för valda förbrukare"}>
      <span>${label}</span><strong>${summaryValue}</strong>
      <small>${energyMode ? `${energy.validCount} förbrukare · dagens kWh · HALO visas separat` : power.enabledCount === 0 ? "Inga inkluderade förbrukare är aktiverade · HALO visas separat" : power.validCount === 0 ? "Inga inkluderade förbrukare har giltiga värden · HALO visas separat" : incomplete ? missing ? `Ofullständig summa · ${missing} saknas` : "Ofullständig summa · datatäckning ej rapporterad" : `${power.validCount} förbrukare · HALO visas separat`}</small>
    </aside>`;
  }

  private renderCompactPhases(phases: RuntimePhase[], summary?: LiveRuntimeSnapshot["phaseLoad"]["summary"]) {
    const formatPower = (value: number | null) => value === null ? "— W" : `${Math.round(value)} W`;
    return html`<aside class="compact-phase-panel" aria-label="Kompakt fasöversikt">
      <header><strong>FASER</strong><small class="compact-phase-live">LIVE</small><span>${summary?.direction === "import" ? "Import" : summary?.direction === "export" ? "Export" : summary ? "Nät" : "Data saknas"}</span></header>
      <div>${phases.length ? phases.map((phase) => html`<section><b>${phase.name}</b><span>${formatPower(phase.power)}</span><small>${phase.direction === "import" ? "Import" : phase.direction === "export" ? "Export" : "Riktning saknas"}</small></section>`) : html`<section class="phase-data-empty">L1–L3 saknas</section>`}</div>
      <button @click=${() => this.setDetailView(true)}>Fas- och nätanalys ↗</button>
    </aside>`;
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

    const cardData =
      getCardData(
        this.hass,
        effectiveConfig,
        this.liveRuntimeSnapshot?.livePower,
        this.liveRuntimeSnapshot?.consumers,
        this.liveRuntimeSnapshot?.batterySoc.value ?? null,
      );
    const phaseLoadData: RuntimePhase[] = this.liveRuntimeSnapshot?.phaseLoad.phases ?? [];
    const phaseLoadSummary = this.liveRuntimeSnapshot?.phaseLoad.summary;
    const summaryDevices = consumerSubtotalDevices(cardData.devices);
    const powerSummary = summarizeConsumerPower(summaryDevices);
    const liveFlows = getLiveFlows(
        effectiveConfig,
        this.liveRuntimeSnapshot?.livePower,
        this.liveRuntimeSnapshot?.consumers,
        powerSummary,
    );
    const energySummary = summarizeConsumerEnergy(summaryDevices, this.dashboardData?.consumers);
    // Energy-today values never show live status lines, regardless of the active view.
    const energyMetrics = buildEnergyTodayLabelMetrics(cardData.devices, this.dashboardData, true);
    const labelMetrics = this.valueMode === "energy_today" ? energyMetrics : {};
    const detailGridPower = this.livePowerIssue ? null : cardData.gridPower;
    const detailGridStatus = detailGridPower === null ? "Data saknas" : cardData.gridStatus;
    const viewModel = getViewModel(this.displayMode, this.valueMode, this.detailView);
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
              ${!this.detailView ? renderSolarArc(
                sunPosition,
                layout,
                cardData.solarPower,
                this.displayMode === 'overview' && this.valueMode === 'live',
              ) : ''}
              <div
                class="flow-layer"
                style="
                  width:${layout.sceneWidth}px;
                  height:${layout.sceneHeight}px;
                "
              >
              ${viewModel.showFlowGraph ? renderFlows(
                    layout,
                    liveFlows,
                    cardData,
                    this,
                    this.displayMode,
                    labelMetrics,
                    this.valueMode,
                ) : ''}
              </div>
              ${viewModel.showCompactPhases
                ? this.renderCompactPhases(phaseLoadData, phaseLoadSummary)
                : ''}
              ${viewModel.showConsumerSummary
                ? this.renderConsumerSummary(powerSummary, energySummary)
                : ''}
              ${this.renderViewControls()}
              ${viewModel.showDetail ? renderPhaseNetworkDetail({
                phases: phaseLoadData,
                liveGridValue: detailGridPower,
                liveGridStatus: detailGridStatus,
                onBack: () => this.setDetailView(false),
              }) : ''}
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
