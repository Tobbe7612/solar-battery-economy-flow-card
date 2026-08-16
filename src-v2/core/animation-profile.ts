/**
 * ============================================================
 * Animation Profile
 * ============================================================
 * Central entry point for the card's animation system.
 *
 * The "flow" domain now drives a thin, gently-pulsing background
 * line plus loose dust-like particles and occasional sparks
 * (redesigned from the original 7-layer ellipse cascade to bring
 * flows visually and technically in line with the dust principle
 * used for solar particles, and to reduce animated element count).
 *
 * "labels" and "solar" are separate dedicated functions below
 * rather than keys on AnimationProfile, since each domain needs
 * different inputs (flow: power; labels: power + color; solar:
 * power) that don't fit one shared call shape. This module is
 * still the single place all animation logic lives.
 */

import { getAnimationLevel } from "./animation-settings";

export interface FlowAnimationProfile {

    particleCount: number;

    duration: number;

    lineOpacity: number;

    lineWidth: number;

    sparkInterval: number;

}

export interface AnimationProfile {

    flow: FlowAnimationProfile;

}

function getFlowAnimationProfile(
    power: number
): FlowAnimationProfile {

    const p = Math.abs(power);

    if (p < 300) {

        return {

            particleCount: 4,

            duration: 6.0,

            lineOpacity: 0.10,

            lineWidth: 2.0,

            sparkInterval: 9,

        };

    }

    if (p < 800) {

        return {

            particleCount: 6,

            duration: 5.2,

            lineOpacity: 0.14,

            lineWidth: 2.3,

            sparkInterval: 7,

        };

    }

    if (p < 1500) {

        return {

            particleCount: 8,

            duration: 4.4,

            lineOpacity: 0.18,

            lineWidth: 2.6,

            sparkInterval: 6,

        };

    }

    if (p < 3000) {

        return {

            particleCount: 10,

            duration: 3.7,

            lineOpacity: 0.22,

            lineWidth: 2.9,

            sparkInterval: 5,

        };

    }

    if (p < 5000) {

        return {

            particleCount: 12,

            duration: 3.0,

            lineOpacity: 0.26,

            lineWidth: 3.2,

            sparkInterval: 4,

        };

    }

    return {

        particleCount: 14,

        duration: 2.2,

        lineOpacity: 0.30,

        lineWidth: 3.5,

        sparkInterval: 3,

    };

}

export function getAnimationProfile(
    power: number
): AnimationProfile {

    return {
        flow: getFlowAnimationProfile(power),
    };

}

/**
 * ============================================================
 * Label animation (glow + pulse)
 * ============================================================
 * Both glow and pulse are power-independent, gentle "breathing"
 * effects driven by CSS (see styles/label-styles.ts) — not SMIL,
 * since the label tree is rewritten on every hass update and
 * SMIL animations there are prone to visibly restarting.
 *
 * Glow's target opacity/blur still scale with how much power the
 * node currently carries; pulse's scale/duration are fixed
 * constants shared by every active node.
 */

export interface LabelAnimationProfile {

    glow: {
        active: boolean;
        color: string;
        opacity: number;
        blur: number;
    };

    pulse: {
        active: boolean;
        scale: number;
        duration: number;
    };

}

const LABEL_PULSE_SCALE = 1.015;
const LABEL_PULSE_DURATION = 3.2;

function getLabelGlow(
    power: number,
    color: string
): LabelAnimationProfile["glow"] {

    const p = Math.abs(power);

    if (p <= 1) {
        return { active: false, color, opacity: 0, blur: 0 };
    }

    if (p < 300) {
        return { active: true, color, opacity: 0.03, blur: 8 };
    }

    if (p < 800) {
        return { active: true, color, opacity: 0.045, blur: 10 };
    }

    if (p < 1500) {
        return { active: true, color, opacity: 0.06, blur: 12 };
    }

    if (p < 3000) {
        return { active: true, color, opacity: 0.08, blur: 14 };
    }

    if (p < 5000) {
        return { active: true, color, opacity: 0.10, blur: 16 };
    }

    return { active: true, color, opacity: 0.12, blur: 18 };

}

export function getLabelAnimationProfile(
    power: number,
    color: string
): LabelAnimationProfile {

    if (getAnimationLevel() === "reduced") {
        return {
            glow: { active: false, color, opacity: 0, blur: 0 },
            pulse: { active: false, scale: 1, duration: LABEL_PULSE_DURATION },
        };
    }

    return {
        glow: getLabelGlow(power, color),
        pulse: {
            active: Math.abs(power) > 1,
            scale: LABEL_PULSE_SCALE,
            duration: LABEL_PULSE_DURATION,
        },
    };

}

/**
 * ============================================================
 * Solar particles
 * ============================================================
 * Loose, dust-like particles drifting from the sun (on the arc)
 * toward the SOL label. Count scales with current solar power;
 * duration is a fixed, power-independent drift time. Each
 * particle's own jittered path/timing is generated deterministically
 * from its index in renderers/solar-particles.ts — never from
 * Math.random() — for the same reason pulse/glow moved off SMIL
 * for labels: a value that changes on every re-render would make
 * the animation visibly restart.
 */

export interface SolarAnimationProfile {
    particleCount: number;
    duration: number;
}

const SOLAR_PARTICLE_DURATION = 3.5;

export function getSolarAnimationProfile(
    power: number
): SolarAnimationProfile {

    if (getAnimationLevel() === "reduced") {
        return { particleCount: 0, duration: SOLAR_PARTICLE_DURATION };
    }

    const p = Math.max(0, power);

    if (p <= 0) {
        return { particleCount: 0, duration: SOLAR_PARTICLE_DURATION };
    }

    if (p < 500) {
        return { particleCount: 4, duration: SOLAR_PARTICLE_DURATION };
    }

    if (p < 1500) {
        return { particleCount: 8, duration: SOLAR_PARTICLE_DURATION };
    }

    if (p < 3000) {
        return { particleCount: 12, duration: SOLAR_PARTICLE_DURATION };
    }

    return { particleCount: 15, duration: SOLAR_PARTICLE_DURATION };

}
