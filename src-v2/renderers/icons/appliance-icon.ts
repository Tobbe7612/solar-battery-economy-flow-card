import { svg, TemplateResult } from "lit";

export function renderApplianceIcon(
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

            <!-- Tvättmaskin -->

            <rect
                x="-18"
                y="-16"
                width="16"
                height="32"
                rx="2"
            />

            <circle
                cx="-10"
                cy="0"
                r="5"
            />

            <!-- Kyl/Frys -->

            <rect
                x="4"
                y="-16"
                width="16"
                height="32"
                rx="2"
            />

            <line
                x1="4"
                y1="0"
                x2="20"
                y2="0"
            />

            <line
                x1="16"
                y1="-8"
                x2="16"
                y2="-3"
            />

            <line
                x1="16"
                y1="5"
                x2="16"
                y2="10"
            />

        </g>

    `;

}