import { html, type TemplateResult } from "lit";
import type { RuntimePhase } from "../core/live-runtime";

function formatPower(value: number | null): string {
  if (value === null) return "— W";
  return `${value > 0 ? "+" : ""}${Math.round(value)} W`;
}

function formatCurrent(value: number | null): string {
  return value === null ? "— A" : `${value.toFixed(1)} A`;
}

function directionLabel(direction: RuntimePhase["direction"]): string {
  return direction === "import" ? "Import" : direction === "export" ? "Export" : "Riktning saknas";
}

export function phaseMeterFill(percent: number | null): number | null {
  if (percent === null || !Number.isFinite(percent)) return null;
  return Math.min(100, Math.max(0, percent));
}

export function renderPhaseNetworkDetail(args: {
  phases: RuntimePhase[];
  liveGridValue: number | null;
  liveGridStatus: string;
  onBack: () => void;
}): TemplateResult {
  const phases = ["L1", "L2", "L3"].map((name) => args.phases.find((phase) => phase.name === name));
  const gridDirection = args.liveGridValue === null
    ? "missing"
    : args.liveGridValue > 1 ? "import" : args.liveGridValue < -1 ? "export" : "balance";
  return html`<section class="phase-network-detail" aria-label="Fas- och nätanalys">
    <header class="detail-header">
      <div><span class="detail-eyebrow">LIVE · NÄT OCH FASER</span><h2>Fas- och nätanalys</h2></div>
      <button class="detail-back" @click=${args.onBack}>← Tillbaka</button>
    </header>
    <article class="detail-grid-card ${gridDirection}">
      <div class="detail-card-title"><span class="detail-eyebrow">ELNÄT</span><span class="detail-grid-status"><b aria-hidden="true">${gridDirection === "import" ? "↓" : gridDirection === "export" ? "↑" : gridDirection === "balance" ? "↔" : "·"}</b> ${args.liveGridStatus}</span></div>
      <strong>${args.liveGridValue === null ? "— W" : formatPower(args.liveGridValue)}</strong>
      <small>Aktuell nettoeffekt från Solar Battery Economy</small>
    </article>
    <div class="detail-phase-grid">${phases.map((phase, index) => html`<article class="detail-phase-card phase-${index + 1}">
      <header><span class="detail-eyebrow">${phase?.name ?? `L${index + 1}`}</span><span class="detail-phase-direction ${phase?.direction ?? "missing"}">${phase ? directionLabel(phase.direction) : "Data saknas"}</span></header>
      <div class="detail-phase-values"><div><small>Effekt</small><strong>${formatPower(phase?.power ?? null)}</strong></div><div><small>Ström</small><strong>${formatCurrent(phase?.current ?? null)}</strong></div></div>
      <div class="detail-phase-meter-label"><span>Belastning</span><strong>${phase?.percent === null || phase?.percent === undefined ? "Saknas" : `${phase.percent}%`}</strong></div>
      <div class="detail-phase-meter ${phase?.loadState ?? "missing"} ${phase?.direction ?? "missing"}" role="img" aria-label=${phase?.percent === null || phase?.percent === undefined ? `Belastning ${phase?.name ?? `L${index + 1}`} saknas` : `${phase?.name ?? `L${index + 1}`}: ${phase.percent} procent av huvudsäkringen konfigurerad i SBE`} title="SBE:s procentvärde visar ström som andel av huvudsäkringen konfigurerad i SBE">
        <span style=${`width:${phaseMeterFill(phase?.percent ?? null) ?? 0}%`}></span>
      </div>
      <small class="detail-meter-caption">Andel av huvudsäkring · enligt SBE</small>
    </article>`)}</div>
  </section>`;
}
