import { svg, TemplateResult } from "lit";

import { FlowAnimationProfile } from "../../core/animation-profile";
import { EnergyEdge, EnergyPoint } from "./edge-types";
import { getEdgeWaypoints } from "./edge-geometry";
import { pseudoRandom, hashString } from "../deterministic-random";

/**
 * Loose, dust-like flow particles — same principle as
 * renderers/solar-particles.ts: every particle gets its own
 * deterministically jittered path between the SAME anchors the
 * flow already uses (via getEdgeWaypoints), instead of every
 * particle riding the identical shared path. That's what removes
 * the "pipe" look while leaving routing/anchors untouched.
 *
 * Deterministic (never Math.random()) for the same reason as
 * solar particles: this tree is rewritten on every hass update,
 * and a value that changes between renders would make the SMIL
 * animation visibly restart.
 */

function buildParticlePath(
    waypoints: EnergyPoint[],
    seedBase: number
): string {

    let path = `M ${waypoints[0].x} ${waypoints[0].y}`;

    for (let i = 0; i < waypoints.length - 1; i++) {

        const a = waypoints[i];
        const b = waypoints[i + 1];

        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const perpX = -dy;
        const perpY = dx;
        const perpLength = Math.max(1, Math.hypot(perpX, perpY));

        // Small, deterministic per-particle-per-segment offset —
        // just enough that particles don't all overlap on the
        // exact same line, without the earlier full "bow" curve.
        const jitter =
            pseudoRandom(seedBase + i * 31.7) - 0.5;

        const offset = jitter * 14;

        const midX =
            (a.x + b.x) / 2 + (perpX / perpLength) * offset;
        const midY =
            (a.y + b.y) / 2 + (perpY / perpLength) * offset;

        path += ` Q ${midX} ${midY} ${b.x} ${b.y}`;

    }

    return path;
}

function renderDustParticle(
    index: number,
    edgeSeed: number,
    waypoints: EnergyPoint[],
    color: string,
    duration: number
): TemplateResult {

    const seed = edgeSeed + index * 53.1;

    const beginOffset =
        pseudoRandom(seed + 4.3) * duration;

    const durationFactor =
        0.85 + pseudoRandom(seed + 8.9) * 0.3;

    const sizeFactor =
        0.8 + pseudoRandom(seed + 13.1) * 0.5;

    const path = buildParticlePath(waypoints, seed);
    const particleDuration = duration * durationFactor;

    const glowRadius = 4.5 * sizeFactor;
    const coreRadius = 2.0 * sizeFactor;

    return svg`
        <g class="energy-particle">

            <circle
                r="${glowRadius}"
                fill="${color}"
                opacity="0"
                filter="url(#energy-glow)"
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
                    values="0;0.30;0.30;0"
                    keyTimes="0;0.10;0.85;1"
                    dur="${particleDuration}s"
                    begin="-${beginOffset}s"
                    repeatCount="indefinite"
                />
            </circle>

            <circle
                r="${coreRadius}"
                fill="#FFFFFF"
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
                    values="0;0.9;0.9;0"
                    keyTimes="0;0.10;0.85;1"
                    dur="${particleDuration}s"
                    begin="-${beginOffset}s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="r"
                    values="${coreRadius * 0.85};${coreRadius * 1.15};${coreRadius * 0.85}"
                    dur="1.6s"
                    repeatCount="indefinite"
                />
            </circle>

        </g>
    `;
}

export function renderParticles(
    edge: EnergyEdge,
    profile: FlowAnimationProfile
): TemplateResult {

    const waypoints = getEdgeWaypoints(edge);
    const edgeSeed = hashString(edge.id);

    return svg`
        ${Array.from({ length: profile.particleCount }).map((_, i) =>
            renderDustParticle(
                i,
                edgeSeed,
                waypoints,
                edge.color,
                profile.duration,
            )
        )}
    `;
}
