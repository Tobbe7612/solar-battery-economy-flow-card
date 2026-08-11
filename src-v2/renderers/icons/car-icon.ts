import { svg, TemplateResult } from "lit";

export function renderCarIcon(
    x: number,
    y: number,
    color: string
): TemplateResult {

    return svg`

        <g
            transform="translate(${x}, ${y}) scale(1.02)"
            fill="none"
            stroke="${color}"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="filter: drop-shadow(0 0 4px ${color}80);"
        >

            <!-- Outer body -->
            <path d="
                M -22 18
                L -22 4
                Q -22 -4 -15 -11
                L -11 -18
                Q 0 -22 11 -18
                L 15 -11
                Q 22 -4 22 4
                L 22 18
            "/>

            <!-- Windshield -->
            <path d="
                M -15 -10
                L -11 -16
                Q 0 -18 11 -16
                L 15 -10
            "/>

            <!-- Roof -->
            <path d="
                M -11 -18
                Q 0 -21 11 -18
            "/>

            <!-- Mirrors -->
            <rect
                x="-25"
                y="-7"
                width="5"
                height="6"
                rx="1.5"
            />

            <rect
                x="20"
                y="-7"
                width="5"
                height="6"
                rx="1.5"
            />

            <!-- Headlights -->
            <path d="
                M -17 2
                Q -13 0 -10 3
                Q -13 5 -17 3
            "/>

            <path d="
                M 17 2
                Q 13 0 10 3
                Q 13 5 17 3
            "/>

            <!-- Center light bar -->
            <line
                x1="-8"
                y1="0"
                x2="8"
                y2="0"
            />

            <circle
                cx="0"
                cy="0"
                r="1"
            />

            <!-- Lower grille -->
            <rect
                x="-8"
                y="8"
                width="16"
                height="5"
                rx="2.5"
            />

            <!-- Lower side intakes -->
            <rect
                x="-18"
                y="8"
                width="5"
                height="3"
                rx="1"
            />

            <rect
                x="13"
                y="8"
                width="5"
                height="3"
                rx="1"
            />

            <!-- Lower bumper -->
            <line
                x1="-18"
                y1="17"
                x2="18"
                y2="17"
            />

            <!-- Wheels -->
            <rect
                x="-18"
                y="18"
                width="6"
                height="7"
                rx="1"
            />

            <rect
                x="12"
                y="18"
                width="6"
                height="7"
                rx="1"
            />

        </g>

    `;

}
