import { svg, TemplateResult } from "lit";

export function renderApplianceIcon(
    x: number,
    y: number,
    color: string
): TemplateResult {

    return svg`

        <g
            transform="translate(${x},${y}) scale(1.05)"
            fill="none"
            stroke="${color}"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="filter: drop-shadow(0 0 4px ${color}80);"
        >

            <!-- Washing machine -->
            <rect
                x="-17"
                y="-16"
                width="16"
                height="32"
                rx="2.5"
            />

            <!-- Control panel -->
            <line
                x1="-17"
                y1="-8"
                x2="-4"
                y2="-8"
            />

            <circle
                cx="-5"
                cy="-12"
                r="1.5"
            />

            <circle
                cx="-10"
                cy="-12"
                r="0.9"
            />

            <circle
                cx="13"
                cy="-12"
                r="0.9"
            />

            <!-- Door -->
            <circle
                cx="-9"
                cy="4"
                r="6"
            />

            <circle
                cx="-9"
                cy="4"
                r="4.5"
            />

            <!-- Refrigerator -->
            <rect
                x="6"
                y="-16"
                width="16"
                height="32"
                rx="2.5"
            />

            <!-- Door split -->
            <line
                x1="6"
                y1="-2"
                x2="22"
                y2="-2"
            />

            <!-- Handles -->
            <line
                x1="18"
                y1="-10"
                x2="18"
                y2="-5"
            />

            <line
                x1="18"
                y1="2"
                x2="18"
                y2="8"
            />

        </g>

    `;

}
