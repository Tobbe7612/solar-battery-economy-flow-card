import { svg, TemplateResult } from "lit";

export function renderHeatpumpIcon(
    x: number,
    y: number,
    color: string
): TemplateResult {

    return svg`

        <g
            transform="translate(${x}, ${y}) scale(1.0)"
            fill="none"
            stroke="${color}"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="filter: drop-shadow(0 0 4px ${color}80);"
        >

            <!-- Cabinet -->
            <rect
                x="-14"
                y="-28"
                width="28"
                height="48"
                rx="5.5"
            />

            <!-- Inner front -->
            <rect
                x="-11"
                y="-25"
                width="22"
                height="42"
                rx="3.5"
            />

            <!-- Display -->
            <rect
                x="-5.5"
                y="-18.5"
                width="11"
                height="6"
                rx="1.2"
            />

            <!-- Status line -->
            <line
                x1="-3"
                y1="-8"
                x2="3"
                y2="-8"
            />

            <!-- Front split -->
            <line
                x1="0"
                y1="-2"
                x2="0"
                y2="15"
            />

            <!-- Feet -->
            <line
                x1="-7"
                y1="20"
                x2="-7"
                y2="23"
            />

            <line
                x1="7"
                y1="20"
                x2="7"
                y2="23"
            />

            <!-- Feet pads -->
            <line
                x1="-9"
                y1="23"
                x2="-5"
                y2="23"
            />

            <line
                x1="5"
                y1="23"
                x2="9"
                y2="23"
            />

        </g>

    `;

}
