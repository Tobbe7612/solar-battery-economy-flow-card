import { svg, TemplateResult } from "lit";

export function renderHouseIcon(
    x: number,
    y: number,
    color: string
): TemplateResult {

    return svg`
        <g
            transform="translate(${x}, ${y}) scale(1.28)"
            fill="none"
            stroke="${color}"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="filter: drop-shadow(0 0 4px ${color}80);"
        >

            <!-- Roof -->
            <path
                d="
                    M -23 -2
                    L -0.8 -21.5
                    L 22.2 -2
                "
            />

            <!-- Left wall -->
            <line
                x1="-15"
                y1="-5"
                x2="-15"
                y2="16"
            />

            <!-- Right wall -->
            <line
                x1="15"
                y1="-5"
                x2="15"
                y2="16"
            />

            <!-- Bottom -->
            <line
                x1="-15"
                y1="16"
                x2="15"
                y2="16"
            />

            <!-- Premium window -->
            <rect
                x="-5.7"
                y="-0.8"
                width="11.4"
                height="11.4"
                rx="2.8"
            />

            <!-- Window vertical -->
            <line
                x1="0"
                y1="-0.8"
                x2="0"
                y2="10.6"
            />

            <!-- Window horizontal -->
            <line
                x1="-5.7"
                y1="4.9"
                x2="5.7"
                y2="4.9"
            />

            <!-- Chimney -->
            <path
                d="
                    M 8.8 -18.5
                    L 8.8 -25.5
                    L 12.3 -25.5
                    L 12.3 -10.5
                "
            />

        </g>
    `;
}