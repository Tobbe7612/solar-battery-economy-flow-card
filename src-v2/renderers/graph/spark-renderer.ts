import { svg, TemplateResult } from "lit";
import { EnergyEdge } from "./edge-types";
import { FlowAnimationProfile } from "../../core/animation-profile";
import { getEdgeWaypoints } from "./edge-geometry";
import { pseudoRandom, hashString } from "../deterministic-random";

export function renderSpark(
    x: number,
    y: number,
    angle: number,
    color: string
): TemplateResult {

    return svg`
        <g
            class="energy-spark"
            transform="translate(${x} ${y}) rotate(${angle})"
        >

            <!-- Main discharge -->
            <path
                d="
                    M -7 0
                    L -3 -1.5
                    L -1 -7
                    L 1 -2
                    L 4 -3
                    L 2 0
                    L 6 2
                    L 2 3
                    L 0 8
                    L -2 2
                    L -6 1
                "
                fill="none"
                stroke="${color}"
                stroke-width="1.05"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.95"
                filter="url(#energy-glow)"
            />

            <!-- Upper branch -->
            <path
                d="
                    M -1 -4
                    L 2 -6
                "
                fill="none"
                stroke="${color}"
                stroke-width="0.7"
                stroke-linecap="round"
                opacity="0.75"
                filter="url(#energy-glow)"
            />

            <!-- Lower branch -->
            <path
                d="
                    M 2 2
                    L 5 5
                "
                fill="none"
                stroke="${color}"
                stroke-width="0.7"
                stroke-linecap="round"
                opacity="0.65"
                filter="url(#energy-glow)"
            />

            <!-- Plasma core -->
            <path
                d="
                    M -5 0
                    L -2 -1
                    L 0 -5
                    L 2 -1
                    L 4 0
                    L 1 2
                    L 0 5
                    L -2 1
                "
                fill="none"
                stroke="#FFFFFF"
                stroke-width="0.45"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.95"
            />

        </g>
    `;
}
const SPARK_SLOTS_PER_EDGE = 2;

/**
 * A few rare, brief flashes along the flow — not moving elements.
 * Each "slot" gets its own deterministic position and timing
 * (seeded by edge id + slot index), so across slots the spark
 * appears at different points along the route over time, instead
 * of always the same fixed spot. Two independent slots also
 * roughly doubles how often a flash is visible, without touching
 * FlowAnimationProfile.sparkInterval itself.
 */
export function renderEdgeSparks(
    edge: EnergyEdge,
    profile: FlowAnimationProfile
): TemplateResult {

    return svg`
        ${Array.from({ length: SPARK_SLOTS_PER_EDGE }).map((_, i) =>
            renderSingleEdgeSpark(edge, profile, i)
        )}
    `;
}

function renderSingleEdgeSpark(
    edge: EnergyEdge,
    profile: FlowAnimationProfile,
    slotIndex: number
): TemplateResult {

    const waypoints = getEdgeWaypoints(edge);

    // Bucket real time into sparkInterval-sized windows so each
    // new cycle gets a genuinely different position — not
    // Math.random() (which would change every render and restart
    // the SMIL mid-flash), but a value that only changes once per
    // cycle, staying identical across every re-render within that
    // cycle.
    const cycleIndex = Math.floor(
        Date.now() / (profile.sparkInterval * 1000)
    );

    const seed =
        hashString(edge.id) +
        slotIndex * 41.7 +
        cycleIndex * 97.3;

    const segmentCount = waypoints.length - 1;
    const segmentIndex = Math.min(
        segmentCount - 1,
        Math.floor(pseudoRandom(seed) * segmentCount)
    );

    const a = waypoints[segmentIndex];
    const b = waypoints[segmentIndex + 1];

    // Keep the spark away from the very ends of the segment, so
    // it doesn't appear to spawn on top of a label.
    const t = 0.2 + pseudoRandom(seed + 3.7) * 0.6;

    const x = a.x + (b.x - a.x) * t;
    const y = a.y + (b.y - a.y) * t;

    const angle =
        (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;

    const beginOffset =
        pseudoRandom(seed + 9.1) * profile.sparkInterval;

    return svg`
        <g transform="translate(${x}, ${y})" opacity="0">
            <animate
                attributeName="opacity"
                values="0;0;1;0.5;0;0"
                keyTimes="0;0.70;0.75;0.82;0.90;1"
                dur="${profile.sparkInterval}s"
                begin="-${beginOffset}s"
                repeatCount="indefinite"
            />
            ${renderSpark(0, 0, angle, edge.color)}
        </g>
    `;
}
