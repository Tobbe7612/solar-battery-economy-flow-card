import { css } from "lit";

export const flowStyles = css`
.flow-layer {

    position: absolute;

    left: 0;
    top: 0;

    pointer-events: none;

    z-index: 999;
}

.flow-svg {

    position: absolute;

    left: 0;
    top: 0;

    width: 1920px;
    height: 1080px;

    overflow: visible;

    pointer-events: none;
}

/*
 * The thin background line behind each flow's dust/sparks.
 * CSS-driven (not SMIL) for the same reason as label glow/pulse:
 * this tree is rewritten on every hass update, and a running SMIL
 * animation there is prone to visibly restarting. Same 3.2s /
 * easing as the label pulse (styles/label-styles.ts) so the whole
 * card breathes at one shared pace.
 */
@keyframes energyEdgeLinePulse {
    0%, 100% {
        opacity: var(--line-opacity-min, 0);
    }
    50% {
        opacity: var(--line-opacity-max, 0);
    }
}

.energy-edge-line {
    animation:
        energyEdgeLinePulse 3.2s
        cubic-bezier(0.45, 0.05, 0.55, 0.95)
        infinite;
}

`;