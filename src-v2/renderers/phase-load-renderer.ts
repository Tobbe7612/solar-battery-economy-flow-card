import { html, TemplateResult } from "lit";
import type { PhaseLoadData, PhaseLoadSummary } from "../core/phase-load";

function formatCurrent(value: number | null): string {
    if (value === null) return "—";
    const abs = Math.abs(value);
    return `${abs >= 100 ? value.toFixed(0) : abs >= 10 ? value.toFixed(1) : value.toFixed(2)} A`;
}

function formatPower(value: number | null, signed = false): string {
    if (value === null) return "—";
    const abs = Math.abs(value);
    const number = abs >= 1000
        ? `${(abs / 1000).toFixed(2)} kW`
        : `${abs >= 100 ? abs.toFixed(0) : abs >= 10 ? abs.toFixed(1) : abs.toFixed(2)} W`;
    if (!signed || value === 0) return number;
    return `${value > 0 ? "+" : "−"}${number}`;
}

function renderPhase(phase: PhaseLoadData): TemplateResult {
    const isIncomplete = phase.current === null || phase.power === null;
    const directionLabel = phase.direction === "import"
        ? "IMPORT →"
        : phase.direction === "export"
            ? "← EXPORT"
            : "RIKTNING SAKNAS";
    const loadLabel = phase.loadState === "critical"
        ? "ÖVERLAST"
        : phase.loadState === "warning"
            ? "HÖG BELASTNING"
            : phase.loadState === "normal"
                ? "NORMAL"
                : "BELASTNING SAKNAS";

    return html`
        <div class="phase-load-phase ${phase.loadState} ${phase.direction}" aria-label="${phase.name}">
            <div class="phase-load-heading">
                <strong>${phase.name}</strong>
                ${isIncomplete ? html`<span class="phase-load-missing" role="status">Data saknas</span>` : ""}
            </div>
            <div class="phase-load-details">
                <div class="phase-load-direction ${phase.direction}">${directionLabel}</div>
                <div class="phase-load-values">
                    <span>${formatCurrent(phase.current)}</span>
                    <span>${formatPower(phase.power)}</span>
                </div>
                <div class="phase-load-footer">
                    <span>${phase.percent === null ? "—" : `${phase.percent} %`}</span>
                    <span>${loadLabel}</span>
                </div>
            </div>
            <div class="phase-load-bar" aria-hidden="true">
                ${Array.from({ length: 16 }, (_, index) => html`
                    <span class="phase-load-segment ${phase.activeSegments !== null && (phase.direction === "export" ? index >= 16 - phase.activeSegments : index < phase.activeSegments) ? "active" : ""}"></span>
                `)}
            </div>
        </div>
    `;
}

function renderSummary(summary: PhaseLoadSummary): TemplateResult {
    const complete = summary.powerComplete;
    return html`
        <div class="phase-load-phase phase-load-summary-row" aria-label="SUMMA">
            <div class="phase-load-heading">
                <strong>SUMMA</strong>
                ${complete ? "" : html`<span class="phase-load-missing" role="status">Effektdata ofullständig</span>`}
            </div>
            <div class="phase-load-details">
                <div class="phase-load-direction phase-load-net">NETTO</div>
                <div class="phase-load-values">
                    <span>${complete ? formatPower(summary.netPower, true) : "—"}</span>
                    <span>${complete ? `IMP ${formatPower(summary.importPower)}` : "IMP —"}</span>
                </div>
                <div class="phase-load-footer">
                    <span>${complete ? `EXP ${formatPower(summary.exportPower)}` : "EXP —"}</span>
                    <span>${complete ? "3 FASER" : "OFULLSTÄNDIG"}</span>
                </div>
            </div>
            <div class="phase-load-bar" aria-hidden="true">
                ${Array.from({ length: 16 }, () => html`<span class="phase-load-segment"></span>`)}
            </div>
        </div>
    `;
}

export function renderPhaseLoadPanel(
    phases: PhaseLoadData[],
    summary: PhaseLoadSummary,
): TemplateResult {
    return html`
        <section class="phase-load-panel" aria-label="Fasbelastning och fasöversikt">
            <div class="phase-load-title">FASBELASTNING</div>
            <div class="phase-load-grid">${phases.map(renderPhase)}${renderSummary(summary)}</div>
        </section>
    `;
}
