import { svg, TemplateResult } from "lit";

export function renderSolarIcon(
    x: number,
    y: number
): TemplateResult {

    return svg`

        <g
            transform="
                translate(${x}, ${y})
            fill="none"
            stroke="white"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >

            <!-- Sol -->
            <circle
                cx="0"
                cy="0"
                r="10"
            />

            <!-- Strålar -->

            <line x1="0" y1="-20" x2="0" y2="-28"/>

            <line x1="14" y1="-14" x2="20" y2="-20"/>

            <line x1="20" y1="0" x2="28" y2="0"/>

            <line x1="14" y1="14" x2="20" y2="20"/>

            <line x1="0" y1="20" x2="0" y2="28"/>

            <line x1="-14" y1="14" x2="-20" y2="20"/>

            <line x1="-20" y1="0" x2="-28" y2="0"/>

            <line x1="-14" y1="-14" x2="-20" y2="-20"/>

        </g>

    `;

}