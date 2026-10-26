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
    top: auto;
    right: auto;
    bottom: 20px;
    left: 20px;
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
    margin-bottom: 7px;
    color: #315474;
    font-size: 12px;
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
.phase-load-heading { margin-bottom: 4px; }
.phase-load-heading strong { color: #173652; font-size: 16px; }
.phase-load-missing { color: #a35b16; font-size: 12px; }
.phase-load-direction { font-size: 12px; font-weight: 800; letter-spacing: 0.04em; white-space: nowrap; }
.phase-load-direction.import { color: #ff6b6b; }
.phase-load-direction.export { color: #57e889; }
.phase-load-direction.missing { color: #9a671c; }
.phase-load-values { font-size: 14px; font-weight: 700; font-variant-numeric: tabular-nums; color: #173652; }
.phase-load-values { white-space: nowrap; }
.phase-load-values span:last-child { color: var(--info-card-muted); }
.phase-load-bar { display: grid; grid-template-columns: repeat(16, 1fr); gap: 2px; margin-top: 4px; }
.phase-load-segment { height: 6px; border-radius: 3px; background: #d9e2eb; }
.phase-load-phase.import .phase-load-segment.active { background: #ff6b6b; }
.phase-load-phase.export .phase-load-segment.active { background: #57e889; }
.phase-load-phase.missing .phase-load-segment.active { background: #9aa8b8; }
.phase-load-footer { font-size: 12px; font-weight: 600; font-variant-numeric: tabular-nums; color: #173652; }
.phase-load-footer span:last-child { color: var(--info-card-muted); }
.phase-load-phase.warning .phase-load-footer span:last-child { color: #b87813; }
.phase-load-phase.critical .phase-load-footer span:last-child { color: #bd3842; }
.phase-load-phase.normal .phase-load-footer span:last-child { color: #278a49; }
.card.mobile .phase-load-panel { top: auto; right: auto; bottom: 16px; left: 3%; width: 94%; padding: 7px 8px; }
.card.mobile .phase-load-title { margin-bottom: 4px; }
.card.mobile .phase-load-grid { gap: 3px; }
.card.mobile .phase-load-phase { padding: 4px 6px; }
.card.mobile .phase-load-heading { margin-bottom: 2px; }
.card.mobile .phase-load-heading strong { font-size: 14px; }
.card.mobile .phase-load-details { gap: 5px; }
.card.mobile .phase-load-values { font-size: 12px; gap: 4px; }
.card.mobile .phase-load-missing { font-size: 10px; }
.card.mobile .phase-load-direction { font-size: 10px; }
.card.mobile .phase-load-footer { font-size: 10px; }
.card.mobile .phase-load-direction { letter-spacing: 0; }
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
