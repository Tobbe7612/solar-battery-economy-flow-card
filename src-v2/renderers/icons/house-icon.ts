import { svg, TemplateResult } from "lit";

export function renderHouseIcon(
    x: number,
    y: number
): TemplateResult {

    return svg`

        <g
            transform="translate(${x}, ${y})"
            fill="none"
            stroke="white"
            stroke-width="2.2"
            stroke-linejoin="round"
            stroke-linecap="round"
        >

            <!-- Tak -->
            <path d="M -22 -6 L 0 -26 L 22 -6" />

            <!-- Hus -->
            <rect
                x="-17"
                y="-6"
                width="34"
                height="34"
                rx="2"
            />

            <!-- Dörr -->
            <rect
                x="-4"
                y="10"
                width="8"
                height="18"
                rx="1"
            />

        </g>

    `;

}