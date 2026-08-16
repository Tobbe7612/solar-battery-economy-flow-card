import { svg, TemplateResult } from "lit";

import { EnergyEdge } from "./edge-types";
import { buildPath } from "./path-builder";
import { getAnimationProfile } from "../../core/animation-profile";
import { renderParticles } from "./particle-renderer";
import { renderEdgeSparks } from "./spark-renderer";

export function renderEdgeV2(
    edge: EnergyEdge
): TemplateResult {

    if (!edge.active || Math.abs(edge.power) < 1) {
        return svg``;
    }

    const path = buildPath(edge);

    const profile =
        getAnimationProfile(edge.power).flow;

    return svg`

        <g class="energy-edge">

            <path
                class="energy-edge-line"
                d="${path}"
                fill="none"
                stroke="${edge.color}"
                stroke-width="${profile.lineWidth}"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="
                    --line-opacity-min: ${profile.lineOpacity * 0.6};
                    --line-opacity-max: ${profile.lineOpacity};
                "
            />

            ${renderParticles(edge, profile)}

            ${renderEdgeSparks(edge, profile)}

        </g>

    `;

}
