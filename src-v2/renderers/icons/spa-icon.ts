import { svg, TemplateResult } from "lit";

export function renderSpaIcon(
    x: number,
    y: number,
    color: string
): TemplateResult {

    return svg`

        <g
            transform="translate(${x}, ${y}) scale(1.10)"
            fill="none"
            stroke="${color}"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="filter: drop-shadow(0 0 4px ${color}80);"
        >

            <!-- Top ellipse -->
            <ellipse
                cx="0"
                cy="0"
                rx="18"
                ry="7"
            />

            <!-- Inner water -->
            <path
                d="
                    M -13 0
                    A 13 4.5 0 0 0 13 0
                "
            />

            <!-- Left side -->
            <line
                x1="-18"
                y1="0"
                x2="-18"
                y2="16"
            />

            <!-- Right side -->
            <line
                x1="18"
                y1="0"
                x2="18"
                y2="16"
            />

            <!-- Bottom ellipse -->
            <path
                d="
                    M -18 16
                    A 18 7 0 0 0 18 16
                "
            />

            <!-- Ladder -->
            <path
                d="
                    M 4 -7
                    V 5
                    M 12 -7
                    V 5
                    M 4 -2
                    H 12
                    M 4 3
                    H 12
                "
            />

            <!-- Steam -->
            <path
                d="
                    M -8 -4
                    C -12 -8 -4 -12 -8 -17
                "
            />

            <path
                d="
                    M -2 -5
                    C -6 -9 2 -13 -2 -18
                "
            />

        </g>

    `;

}
