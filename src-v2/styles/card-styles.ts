import { css } from "lit";
import { flowStyles } from "./flow-styles";
import { solarArcStyles } from "./solar-arc-styles";
import { labelStyles } from "./label-styles";
export const cardStyles = css`
:host {
    display: block;
    width: 100%;
    --ha-card-background: transparent;
    --ha-card-border-width: 0;
    --ha-card-box-shadow: none;
    --info-card-bg: rgba(249, 252, 255, 0.93);
    --info-card-bg-soft: rgba(241, 247, 252, 0.88);
    --info-card-border: rgba(255, 255, 255, 0.88);
    --info-card-text: #173652;
    --info-card-muted: #526d87;
    --info-card-shadow: 0 12px 30px rgba(8, 24, 42, 0.22);
}
.card {
    position: relative;
    width: 100%;
    aspect-ratio: 1920 / 1080;
    min-height: auto;
    overflow: hidden;
    border-radius: 32px;
    background:
    linear-gradient(
        180deg,
        #14202c 0%,
        #091018 100%
    );
    box-shadow:
    0 40px 100px rgba(0,0,0,0.50);
    backdrop-filter: blur(20px);
}
.hero-background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    filter:
    saturate(1.05)
    contrast(1.02)
    brightness(0.95);
    z-index: 0;
}
.background-glow {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background:
    radial-gradient(circle at 50% 10%, rgba(255,200,50,0.08), transparent 24%),
    radial-gradient(circle at 82% 40%, rgba(80,255,180,0.05), transparent 32%),
    radial-gradient(circle at 20% 60%, rgba(80,160,255,0.06), transparent 36%),
    radial-gradient(circle at 50% 90%, rgba(120,80,255,0.04), transparent 30%);
    z-index: 1;
}
.scene-vignette {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background:
    radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.52));
    pointer-events: none;
    z-index: 2;
}
.scene {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: visible;
    z-index: 4;
}
.scene-inner {
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: top left;
}
.live-power-status {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 30;
    padding: 4px 9px;
    border-radius: 10px;
    background: rgba(9, 16, 24, 0.72);
    color: rgba(220, 230, 240, 0.78);
    font-size: 12px;
    line-height: 1.2;
    pointer-events: none;
}
.phase-load-panel {
    position: absolute;
    z-index: 18;
    top: 300px;
    right: 20px;
    width: 410px;
    padding: 10px 12px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 16px;
    background: linear-gradient(145deg, var(--info-card-bg), var(--info-card-bg-soft));
    box-shadow: var(--info-card-shadow);
    backdrop-filter: blur(16px) saturate(1.18);
    color: var(--info-card-text);
    pointer-events: none;
}
.phase-load-title {
    margin-bottom: 6px;
    color: #315474;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
}
.phase-load-title::before {
    content: "ϟ";
    display: inline-block;
    margin-right: 6px;
    color: #1684b8;
    font-size: 14px;
    line-height: 0.8;
    vertical-align: -1px;
}
.phase-load-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
}
.phase-load-phase {
    min-width: 0;
    padding: 5px 8px;
    border: 1px solid rgba(72, 108, 143, 0.14);
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.58);
}
.phase-load-heading,
.phase-load-details,
.phase-load-values,
.phase-load-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
}
.phase-load-heading { margin-bottom: 3px; }
.phase-load-heading strong { color: #173652; font-size: 14px; }
.phase-load-missing { color: #a35b16; font-size: 10px; }
.phase-load-direction { font-size: 10px; font-weight: 700; letter-spacing: 0.04em; white-space: nowrap; }
.phase-load-direction.import { color: #ff6b6b; }
.phase-load-direction.export { color: #57e889; }
.phase-load-direction.missing { color: #9a671c; }
.phase-load-values { font-size: 12px; font-variant-numeric: tabular-nums; color: #173652; }
.phase-load-values { white-space: nowrap; }
.phase-load-values span:last-child { color: var(--info-card-muted); }
.phase-load-bar { display: grid; grid-template-columns: repeat(16, 1fr); gap: 2px; margin-top: 4px; }
.phase-load-segment { height: 4px; border-radius: 2px; background: #d9e2eb; }
.phase-load-phase.import .phase-load-segment.active { background: #ff6b6b; }
.phase-load-phase.export .phase-load-segment.active { background: #57e889; }
.phase-load-phase.missing .phase-load-segment.active { background: #9aa8b8; }
.phase-load-footer { font-size: 10px; font-variant-numeric: tabular-nums; color: #173652; }
.phase-load-footer span:last-child { color: var(--info-card-muted); }
.phase-load-phase.warning .phase-load-footer span:last-child { color: #b87813; }
.phase-load-phase.critical .phase-load-footer span:last-child { color: #bd3842; }
.phase-load-phase.normal .phase-load-footer span:last-child { color: #278a49; }
.phase-load-direction.phase-load-net { color: #315474; }
.phase-load-summary-row .phase-load-values span { white-space: nowrap; }
.phase-load-summary-row .phase-load-bar { visibility: hidden; }
.card.mobile .phase-load-panel { top: 735px; right: auto; left: 3%; bottom: auto; width: 94%; padding: 7px 8px; }
.card.mobile .phase-load-title { margin-bottom: 4px; }
.card.mobile .phase-load-grid { gap: 3px; }
.card.mobile .phase-load-phase { padding: 4px 6px; }
.card.mobile .phase-load-heading { margin-bottom: 2px; }
.card.mobile .phase-load-heading strong { font-size: 11px; }
.card.mobile .phase-load-details { gap: 5px; }
.card.mobile .phase-load-values { font-size: 10px; gap: 4px; }
.card.mobile .phase-load-missing { font-size: 8px; }
.card.mobile .phase-load-direction { font-size: 8px; }
.card.mobile .phase-load-footer { font-size: 9px; }
.card.mobile .phase-load-direction { letter-spacing: 0; }
.side-panel {
    position: absolute;
    top: 20px;
    height: auto;

    width: 220px;

    padding: 14px;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    border-radius: 18px;

    border: 1px solid var(--info-card-border);

    backdrop-filter: blur(18px) saturate(1.16);

    z-index: 20;

    transition:
        background 0.8s ease,
        border-color 0.8s ease,
        box-shadow 0.8s ease;

    box-shadow: var(--info-card-shadow);
}

.side-title {

    display: flex;
    align-items: center;

    color: #173c5d;

    font-size: 13px;
    font-weight: 800;

    text-transform: uppercase;

    letter-spacing: .11em;

    margin-bottom: 10px;

    text-shadow: none;
}

.panel-section {

    display: flex;
    flex-direction: column;

    gap: 6px;
}

.panel-section-title {

    color: rgba(255,255,255,.60);

    font-size: 12px;

    font-weight: 700;

    text-transform: uppercase;

    letter-spacing: .16em;

    margin-bottom: 8px;
}

.side-stat {

    position: relative;
    display: flex;

    flex-direction: column;

    gap: 2px;
    min-height: 42px;
    justify-content: center;
    padding: 6px 8px 6px 25px;
    border: 1px solid rgba(211, 225, 238, 0.9);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.76);
    box-shadow: 0 3px 9px rgba(28, 58, 86, 0.06);
    transition: background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.side-stat:hover {
    background: rgba(255, 255, 255, 0.96);
    border-color: rgba(123, 166, 202, 0.72);
    box-shadow: 0 5px 13px rgba(28, 58, 86, 0.1);
}

.side-stat::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 50%;
    width: 7px;
    height: 7px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: #278bc4;
    box-shadow: 0 0 0 4px rgba(39, 139, 196, 0.11);
}

.side-label {

    color: #526d87;

    font-size: 9px;

    font-weight: 600;

    text-transform: none;

    letter-spacing: .01em;
}

.side-value {

    color: #173652;

    font-size: 16px;

    font-weight: 700;

    line-height: 1.05;

    letter-spacing: -.015em;

    transition:
        color .35s ease;
}

.side-stat:has(.value-grid)::before { background: #e25d69; box-shadow: 0 0 0 4px rgba(226, 93, 105, 0.12); }
.side-stat:has(.value-export)::before { background: #18a873; box-shadow: 0 0 0 4px rgba(24, 168, 115, 0.12); }
.side-stat:has(.value-independence)::before { background: #288fc8; box-shadow: 0 0 0 4px rgba(40, 143, 200, 0.12); }
.side-stat:has(.value-solar)::before { background: #e5a91b; box-shadow: 0 0 0 4px rgba(229, 169, 27, 0.14); }
.side-stat:has(.value-battery)::before { background: #1aa873; box-shadow: 0 0 0 4px rgba(26, 168, 115, 0.12); }
.side-stat:has(.value-co2)::before { background: #1aa873; box-shadow: 0 0 0 4px rgba(26, 168, 115, 0.12); }
.side-stat:has(.value-money)::before { background: #1aa873; box-shadow: 0 0 0 4px rgba(26, 168, 115, 0.12); }

.side-divider {

    margin: 2px 0;

    height: 1px;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(82,109,135,.18),
            transparent
        );
}

.panel-footer {

    margin-top: auto;

    min-height: 28px;

    display: flex;

    align-items: flex-end;
}
.side-panel.compact {
    padding: 8px;
}

.side-panel.compact .side-title {
    font-size: 12px;
    margin-bottom: 6px;
    letter-spacing: .08em;
}

.side-panel.compact .panel-section {
    gap: 4px;
}

.side-panel.compact .panel-section-title {
    font-size: 11px;
    margin-bottom: 6px;
}

.side-panel.compact .side-stat {
    gap: 2px;
    min-height: 35px;
    padding: 4px 5px 4px 20px;
}

.card.mobile .side-panel-left .panel-section {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
.card.mobile .side-panel-left .side-divider { grid-column: 1 / -1; }
.card.mobile .side-panel-left .side-stat {
    min-height: 26px;
    padding-top: 2px;
    padding-bottom: 2px;
    gap: 1px;
}

.side-panel.compact .side-label {
    font-size: 9px;
}

.side-panel.compact .side-value {
    font-size: 14px;
}

.side-panel.compact .side-stat::before { left: 7px; width: 6px; height: 6px; }

.side-panel.compact .side-divider {
    margin: 3px 0;
}

.side-panel.compact .panel-footer {
    min-height: 14px;
}

/* DAG */
.card.day .side-panel,
.card.morning .side-panel {
    background: linear-gradient(145deg, var(--info-card-bg), var(--info-card-bg-soft));
}
/* KVÄLL */
.card.sunset .side-panel,
.card.evening .side-panel {
    background: linear-gradient(145deg, var(--info-card-bg), var(--info-card-bg-soft));
}
/* NATT */
.card.night .side-panel {
    background: linear-gradient(145deg, var(--info-card-bg), var(--info-card-bg-soft));
}
.value-solar {
    color: #8b6500;
    text-shadow: none;
}
.value-battery {
    color: #14734e;
    text-shadow: none;
}
.value-export {
    color: #147f59;
    text-shadow: none;
}
.value-grid {
    color: #b64b43;
    text-shadow: none;
}
.value-money {
    color: #14734e;
    text-shadow: none;
}
.value-total {
    color: #173652;
}
.value-independence {
    color: #176f9e;
    text-shadow: none;
}
.value-co2 {
    color: #14734e;
    text-shadow: none;
}
.value-solar {
    text-shadow: none;
}
.value-battery {
    text-shadow: none;
}
.value-export {
    text-shadow: none;
}
.value-grid {
    text-shadow: none;
}
.value-money {
    text-shadow: none;
}
.value-independence {
    text-shadow: none;
}
.value-co2 {
    text-shadow: none;
}
.card.desktop {
    aspect-ratio: 1920 / 1080;
}
.card.mobile {
    aspect-ratio: 430 / 1000;
}
${flowStyles}
${solarArcStyles}
${labelStyles}
`;
