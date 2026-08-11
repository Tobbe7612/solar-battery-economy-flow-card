import { css } from "lit";
 
export const labelStyles = css`
 
/*
 * Label frame pulse + glow pulse.
 *
 * Deliberately CSS (not SMIL): the label tree is rewritten on
 * every hass update (live wattage in the text), and SMIL
 * animations sharing that document can visibly restart/jump
 * when unrelated siblings are re-rendered. CSS transform/opacity
 * animations run on the compositor, independent of the SVG
 * document's own update cycle, and don't have this problem.
 *
 * Duration/scale are intentionally power-independent constants
 * (see LABEL_PULSE_SCALE / LABEL_PULSE_DURATION in
 * core/animation-profile.ts) — every active node breathes at
 * the same slow pace. Keep these two literals in sync with that
 * file if either ever changes.
 */
 
@keyframes energyLabelPulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.015);
    }
}
 
.energy-label-frame.is-pulsing {
    animation:
        energyLabelPulse 3.2s
        cubic-bezier(0.45, 0.05, 0.55, 0.95)
        infinite;
}
 
@keyframes energyLabelGlowPulse {
    0%, 100% {
        opacity: var(--glow-opacity-min, 0);
    }
    50% {
        opacity: var(--glow-opacity-max, 0);
    }
}
 
.energy-label-glow {
    animation:
        energyLabelGlowPulse 3.2s
        cubic-bezier(0.45, 0.05, 0.55, 0.95)
        infinite;
}
 
`;
 