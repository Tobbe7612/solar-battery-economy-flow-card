import { svg, TemplateResult } from "lit";

import { EnergyEdge } from "./edge-types";
import { buildPath } from "./path-builder";
import { getParticleProfile } from "./particle-profile";
import { renderParticles } from "./particle-renderer";

export function renderEdgeV2(
    edge: EnergyEdge
): TemplateResult {

    if (!edge.active || Math.abs(edge.power) < 1) {
        return svg``;
    }

    const path = buildPath(edge);

    const profile =
        getParticleProfile(edge.power);

    const flowWidth = profile.flowWidth * 0.64;

    const haloWidth =
        flowWidth + 7.5;

    const outerGlowWidth =
        flowWidth + 4.5;

    const innerGlowWidth =
        flowWidth + 2.2;

    const conduitWidth = flowWidth * 0.88;

    const coreWidth =
        Math.max(0.9, flowWidth * 0.22);

    const highlightWidth =
        Math.max(1.2, flowWidth * 0.38);

    return svg`

        <g class="energy-edge">

            <!-- Ambient Halo -->

            <path
                d="${path}"
                fill="none"
                stroke="${edge.color}"
                stroke-width="${haloWidth}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.035"
                filter="url(#energy-glow)"
            />

            <!-- Outer Glow -->

            <path
                d="${path}"
                fill="none"
                stroke="${edge.color}"
                stroke-width="${outerGlowWidth}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.10"
                filter="url(#energy-glow)"
            />

            <!-- Inner Glow -->

            <path
                d="${path}"
                fill="none"
                stroke="${edge.color}"
                stroke-width="${innerGlowWidth}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.26"
            />

            <!-- Energy Conduit -->

            <path
                d="${path}"
                fill="none"
                stroke="${edge.color}"
                stroke-width="${conduitWidth}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.76"
            />

            <!-- White Core -->

            <path
                d="${path}"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="${coreWidth}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.92"
            />

            <!-- Conduit Highlight -->

            <path
                d="${path}"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="${highlightWidth}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.06"
            />

            ${renderParticles(

                path,

                edge.color,

                profile

            )}

        </g>

    `;

}