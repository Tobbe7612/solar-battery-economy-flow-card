import { html, TemplateResult } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { CardData } from "../../core/card-data";
import { openMoreInfo } from "../../core/entity-actions";
import type { PanelPosition } from "../../types/layout";
export interface PanelRenderContext {
    x: number;
    y: number;
    panel: PanelPosition;
    host: HTMLElement;
    cardData: CardData;
}
function renderStat(
    host: HTMLElement,
    label: string,
    value: string | number,
    valueClass: string,
    entity?: string,
): TemplateResult {
    return html`
        <div
            class="side-stat"
            style=${entity ? "cursor:pointer;" : ""}
            @click=${entity
                ? () => openMoreInfo(host, entity)
                : undefined}
        >
            <div class="side-label">
                ${label}
            </div>
            <div class=${`side-value ${valueClass}`}>
                ${value}
            </div>
        </div>
    `;
}
export function renderLeftPanel(
    context: PanelRenderContext,
): TemplateResult {
    const {
        x,
        y,
        panel,
        host,
        cardData,
    } = context;
    const independence =
        cardData.gridIndependence;
    const independenceEntity =
        cardData.gridIndependenceEntity;
    const solarSelfConsumptionRate =
        cardData.solarSelfConsumptionRate;
    const solarSelfConsumptionRateEntity =
        cardData.solarSelfConsumptionRateEntity;
    const batteryUtilization =
        cardData.batteryUtilization;
    const batteryUtilizationEntity =
        cardData.batteryUtilizationEntity;
    const co2Saved =
        cardData.co2Saved;
    const co2SavedEntity =
        cardData.co2SavedEntity;
    return html`
        <div
            class=${`side-panel side-panel-left${panel.compact ? " compact" : ""}`}
            style=${styleMap({
                left: `${x}px`,
                top: `${y}px`,
                width: panel.width ? `${panel.width}px` : undefined,
            })}
        >
            <div class="side-title">
                Energy
            </div>
            <div class="panel-section">
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${() =>
                        openMoreInfo(
                            host,
                            cardData.importTodayEntity,
                        )}
                >
                    <div class="side-label">
                        Import today
                    </div>
                    <div class="side-value value-grid">
                        ${cardData.importToday} kWh
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${() =>
                        openMoreInfo(
                            host,
                            cardData.exportTodayEntity,
                        )}
                >
                    <div class="side-label">
                        Export today
                    </div>
                    <div class="side-value value-export">
                        ${cardData.exportToday} kWh
                    </div>
                </div>
                <div class="side-divider"></div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${() =>
                        openMoreInfo(
                            host,
                            independenceEntity,
                        )}
                >
                    <div class="side-label">
                        Grid Independance
                    </div>
                    <div class="side-value value-independence">
                        ${independence} %
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${() =>
                        openMoreInfo(
                            host,
                            solarSelfConsumptionRateEntity,
                        )}
                >
                    <div class="side-label">
                        Solar self consumption
                    </div>
                    <div class="side-value value-solar">
                        ${solarSelfConsumptionRate} %
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${() =>
                        openMoreInfo(
                            host,
                            batteryUtilizationEntity,
                        )}
                >
                    <div class="side-label">
                        Battery utilization
                    </div>
                    <div class="side-value value-battery">
                        ${batteryUtilization} %
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${() =>
                        openMoreInfo(
                            host,
                            co2SavedEntity,
                        )}
                >
                    <div class="side-label">
                        CO₂ saved
                    </div>
                    <div class="side-value value-co2">
                        ${co2Saved} kg
                    </div>
                </div>
            </div>
        </div>
    `;
}
export function renderRightPanel(
    context: PanelRenderContext,
): TemplateResult {
    const {
        x,
        y,
        panel,
        host,
        cardData,
    } = context;
    const savingsToday = cardData.savingsToday;
    const savingsTodayEntity =
        cardData.savingsTodayEntity;
    const totalSavings = cardData.totalSavings;
    const totalSavingsEntity =
        cardData.totalSavingsEntity;
    const roi = cardData.roi;
    const roiEntity =
        cardData.roiEntity;
    return html`
        <div
            class=${`side-panel side-panel-right${panel.compact ? " compact" : ""}`}
            style=${styleMap({
                left: `${x}px`,
                top: `${y}px`,
                width: panel.width ? `${panel.width}px` : undefined,
            })}
        >
            <div class="side-title">
                Economy
            </div>
            <div class="panel-section">
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${() =>
                        openMoreInfo(
                            host,
                            savingsTodayEntity,
                        )}
                >
                    <div class="side-label">
                        Savings today
                    </div>
                    <div class="side-value value-money">
                        ${savingsToday} kr
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${() =>
                        openMoreInfo(
                            host,
                            cardData.savingsThisMonthEntity,
                        )}
                >
                    <div class="side-label">
                        Savings this month
                    </div>
                    <div class="side-value value-money">
                        ${cardData.savingsThisMonth} kr
                    </div>
                </div>
                <div class="side-divider"></div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${() =>
                        openMoreInfo(
                            host,
                            cardData.paybackTimeEntity,
                        )}
                >
                    <div class="side-label">
                        Payback time
                    </div>
                    <div class="side-value value-money">
                        ${cardData.paybackTime} år
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${() =>
                        openMoreInfo(
                            host,
                            cardData.savingsThisYearEntity,
                        )}
                >
                    <div class="side-label">
                        Savings this year
                    </div>
                    <div class="side-value value-money">
                        ${cardData.savingsThisYear} kr
                    </div>
                </div>
            <div class="panel-section">
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${() =>
                        openMoreInfo(
                            host,
                            cardData.estimatedAnnualSavingsEntity,
                        )}
                >
                    <div class="side-label">
                        Estimated annual saving
                    </div>
                    <div class="side-value value-money">
                        ${cardData.estimatedAnnualSavings} kr
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${() =>
                        openMoreInfo(
                            host,
                            roiEntity,
                        )}
                >
                    <div class="side-label">
                        Estimated ROI
                    </div>
                    <div class="side-value value-money">
                        ${roi} %
                    </div>
                </div>
            </div>
        </div>
    `;
}