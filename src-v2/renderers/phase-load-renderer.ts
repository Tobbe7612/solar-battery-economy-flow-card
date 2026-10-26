import { html, TemplateResult } from "lit";
import type { RuntimePhase as PhaseLoadData, RuntimePhaseSummary as PhaseLoadSummary } from "../core/live-runtime";

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

interface PhaseRowView {
    name: string;
    currentValue: string;
    powerValue: string;
    percentValue: string;
    status: string;
    incomplete: boolean;
    activeSegments: number | null;
    direction: "import" | "export" | "missing";
    loadState: "normal" | "warning" | "critical" | "missing";
    directionText?: string;
    footerText?: string;
    percentText?: string;
}

function renderPhaseRow(row: PhaseRowView): TemplateResult {
    const directionLabel = row.directionText ?? (row.direction === "import"
        ? "IMPORT →"
        : row.direction === "export"
            ? "← EXPORT"
            : "RIKTNING SAKNAS");

    return html`
        <div class="phase-load-phase ${row.loadState} ${row.direction}" aria-label="${row.name}">
            <div class="phase-load-heading">
                <strong>${row.name}</strong>
                ${row.incomplete ? html`<span class="phase-load-missing" role="status">Data saknas</span>` : ""}
            </div>
            <div class="phase-load-details">
                <div class="phase-load-direction ${row.direction}">${directionLabel}</div>
                <div class="phase-load-values">
                    <span>${row.currentValue}</span>
                    <span>${row.powerValue}</span>
                </div>
                <div class="phase-load-footer">
                    <span>${row.percentText ?? row.percentValue}</span>
                    <span>${row.footerText ?? row.status}</span>
                </div>
            </div>
            <div class="phase-load-bar" aria-hidden="true">
                ${Array.from({ length: 16 }, (_, index) => html`
                    <span class="phase-load-segment ${row.activeSegments !== null && (row.direction === "export" ? index >= 16 - row.activeSegments : index < row.activeSegments) ? "active" : ""}"></span>
                `)}
            </div>
        </div>
    `;
}

function renderPhase(phase: PhaseLoadData): TemplateResult {
    const status = phase.loadState === "critical"
        ? "ÖVERLAST"
        : phase.loadState === "warning"
            ? "HÖG BELASTNING"
            : phase.loadState === "normal"
                ? "NORMAL"
                : "BELASTNING SAKNAS";
    return renderPhaseRow({
        name: phase.name,
        currentValue: formatCurrent(phase.current),
        powerValue: formatPower(phase.power),
        percentValue: phase.percent === null ? "—" : `${phase.percent} %`,
        status,
        incomplete: phase.current === null || phase.power === null,
        activeSegments: phase.activeSegments,
        direction: phase.direction,
        loadState: phase.loadState,
    });
}

function renderSummary(summary: PhaseLoadSummary): TemplateResult {
    const complete = summary.powerComplete;
    const stateLabel = summary.loadState === "critical"
        ? "ÖVERLAST"
        : summary.loadState === "warning"
            ? "HÖG BELASTNING"
            : summary.loadState === "normal"
                ? "NORMAL"
                : "BELASTNING SAKNAS";
    const maxPhase = summary.mostLoadedPhase;
    return renderPhaseRow({
        name: "SUMMA",
        currentValue: "—",
        powerValue: complete ? formatPower(summary.netPower, true) : "—",
        percentValue: maxPhase ? `${maxPhase.percent} %` : "—",
        status: stateLabel,
        footerText: complete ? `IMP ${formatPower(summary.importPower)} · EXP ${formatPower(summary.exportPower)}` : "IMP — · EXP —",
        percentText: maxPhase ? `${maxPhase.percent} % · MAX ${maxPhase.name}` : "—",
        incomplete: !complete || !summary.loadComplete,
        activeSegments: summary.activeSegments,
        direction: summary.direction,
        loadState: summary.loadState,
        directionText: `NETTO ${summary.direction === "import" ? "IMPORT →" : summary.direction === "export" ? "← EXPORT" : "SAKNAS"}`,
    });
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
