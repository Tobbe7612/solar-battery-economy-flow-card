import { svg, TemplateResult } from "lit";

export function renderCarIcon(
    x: number,
    y: number
): TemplateResult {

    return svg`

        <g
            transform="translate(${x}, ${y})"
            fill="none"
            stroke="white"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >

            <!-- Tak -->
            <path
                d="M -14 6
                   L -8 -6
                   L 8 -6
                   L 14 6"
            />

            <!-- Kaross -->
            <rect
                x="-20"
                y="6"
                width="40"
                height="12"
                rx="4"
            />

            <!-- Hjul -->
            <circle
                cx="-12"
                cy="20"
                r="3"
            />

            <circle
                cx="12"
                cy="20"
                r="3"
            />

        </g>

    `;

}