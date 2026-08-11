import { svg, TemplateResult } from "lit";
import { SolarAnimationProfile } from "../core/animation-profile";
import { pseudoRandom } from "./deterministic-random";

interface Point {
    x: number;
    y: number;
}

function renderParticle(
    index: number,
    from: Point,
    to: Point,
    duration: number
): TemplateResult {

    const jitterX = pseudoRandom(index * 7.31) - 0.5;
    const jitterY = pseudoRandom(index * 13.7 + 3) - 0.5;
    const curveJitter = pseudoRandom(index * 19.1 + 11) - 0.5;
    const beginOffset = pseudoRandom(index * 5.13 + 9) * duration;
    const sizeFactor = 0.7 + pseudoRandom(index * 2.9 + 17) * 0.6;
    const durationFactor = 0.85 + pseudoRandom(index * 3.7 + 23) * 0.3;

    const dx = to.x - from.x;
    const dy = to.y - from.y;

    const perpX = -dy;
    const perpY = dx;
    const perpLength = Math.max(1, Math.hypot(perpX, perpY));
    const curveAmount = curveJitter * 26;

    const controlX =
        (from.x + to.x) / 2 + (perpX / perpLength) * curveAmount;
    const controlY =
        (from.y + to.y) / 2 + (perpY / perpLength) * curveAmount;

    const startX = from.x + jitterX * 14;
    const startY = from.y + jitterY * 14;

    const path = `M ${startX} ${startY} Q ${controlX} ${controlY} ${to.x} ${to.y}`;

    const particleDuration = duration * durationFactor;
    const radius = 1.4 * sizeFactor;

    return svg`
        <circle
            r="${radius}"
            fill="#FFE9A8"
            opacity="0"
        >
            <animateMotion
                dur="${particleDuration}s"
                begin="-${beginOffset}s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.3 0 0.7 1"
                path="${path}"
            />
            <animate
                attributeName="opacity"
                values="0;0.55;0.55;0"
                keyTimes="0;0.15;0.7;1"
                dur="${particleDuration}s"
                begin="-${beginOffset}s"
                repeatCount="indefinite"
            />
        </circle>
    `;
}

export function renderSolarParticles(
    from: Point,
    to: Point,
    profile: SolarAnimationProfile
): TemplateResult {

    if (profile.particleCount <= 0) {
        return svg``;
    }

    return svg`
        ${Array.from({ length: profile.particleCount }).map((_, i) =>
            renderParticle(i, from, to, profile.duration)
        )}
    `;
}

/**
 * Short, quick-fading particles radiating outward from the sun
 * itself in all directions — a separate effect from the dust
 * stream toward the SOL label above. Reuses the same particle
 * count (no new tuning table needed), but with its own much
 * shorter travel distance and faster duration.
 */
function renderSunRay(
    index: number,
    sun: Point
): TemplateResult {

    const angle =
        pseudoRandom(index * 17.3 + 31) * Math.PI * 2;

    const distance =
        14 + pseudoRandom(index * 23.9 + 5) * 10;

    const beginOffset =
        pseudoRandom(index * 8.1 + 11) * 2.2;

    const duration =
        1.6 + pseudoRandom(index * 4.4 + 19) * 0.8;

    const sizeFactor =
        0.7 + pseudoRandom(index * 6.7 + 41) * 0.6;

    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    const path =
        `M ${sun.x} ${sun.y} L ${sun.x + dx} ${sun.y + dy}`;

    return svg`
        <circle
            r="${1.3 * sizeFactor}"
            fill="#FFE9A8"
            opacity="0"
        >
            <animateMotion
                dur="${duration}s"
                begin="-${beginOffset}s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.2 0 0.6 1"
                path="${path}"
            />
            <animate
                attributeName="opacity"
                values="0;0.70;0"
                keyTimes="0;0.25;1"
                dur="${duration}s"
                begin="-${beginOffset}s"
                repeatCount="indefinite"
            />
        </circle>
    `;
}

export function renderSunRays(
    sun: Point,
    particleCount: number
): TemplateResult {

    if (particleCount <= 0) {
        return svg``;
    }

    return svg`
        ${Array.from({ length: particleCount }).map((_, i) =>
            renderSunRay(i, sun)
        )}
    `;
}
