import { svg, TemplateResult } from "lit";

export function renderHeatpumpIcon(
    x: number,
    y: number
): TemplateResult {

    return svg`

        <g
            transform="translate(${x},${y})"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >

            <!-- Pump -->

            <rect
                x="-12"
                y="-18"
                width="24"
                height="36"
                rx="5"
            />

            <!-- Display -->

            <circle
                cx="0"
                cy="-8"
                r="2"
                fill="white"
            />

            <!-- Coil -->

            <path d="
                M -6 4
                q 3 -3 6 0
                q 3 3 6 0
            "/>

            <!-- Bottom -->

            <line
                x1="-6"
                y1="14"
                x2="6"
                y2="14"
            />

        </g>

    `;

}