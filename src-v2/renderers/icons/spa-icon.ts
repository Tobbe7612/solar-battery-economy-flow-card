import { svg, TemplateResult } from "lit";

export function renderSpaIcon(
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

            <!-- Badtunna -->
            <ellipse
                cx="0"
                cy="8"
                rx="16"
                ry="6"
            />

            <line x1="-16" y1="8" x2="-16" y2="20" />
            <line x1="16" y1="8" x2="16" y2="20" />
            <line x1="-16" y1="20" x2="16" y2="20" />

            <!-- Ånga -->
            <path d="M -8 -8 C -12 -12 -4 -16 -8 -20" />
            <path d="M 0 -6 C -4 -10 4 -14 0 -18" />
            <path d="M 8 -8 C 4 -12 12 -16 8 -20" />

        </g>

    `;

}