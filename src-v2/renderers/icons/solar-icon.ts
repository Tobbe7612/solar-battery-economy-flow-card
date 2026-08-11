import { svg, TemplateResult } from "lit";

export function renderSolarIcon(
    x: number,
    y: number,
    color: string
): TemplateResult {

    return svg`
        <g
            transform="translate(${x}, ${y})"
            fill="none"
            stroke="${color}"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="filter: drop-shadow(0 0 4px ${color}80);"
        >

            <!-- Sun -->
            <circle
                cx="0"
                cy="0"
                r="9"
            />

            <!-- Highlight -->
            <path
                d="M -3.8 -1.2
                A 6 6 0 0 1 1.2 -5"
            />

            <!-- Top -->
            <line x1="-1.2" y1="-15.5" x2="0" y2="-24"/>
            <line x1="1.2" y1="-15.5" x2="0" y2="-24"/>

            <!-- Top Right -->
            <line x1="8.8" y1="-12.8" x2="16.5" y2="-20"/>
            <line x1="10.8" y1="-11.0" x2="16.5" y2="-20"/>

            <!-- Right -->
            <line x1="15.5" y1="-1.2" x2="24" y2="0"/>
            <line x1="15.5" y1="1.2" x2="24" y2="0"/>

            <!-- Bottom Right -->
            <line x1="10.8" y1="11.0" x2="16.5" y2="20"/>
            <line x1="8.8" y1="12.8" x2="16.5" y2="20"/>

            <!-- Bottom -->
            <line x1="-1.2" y1="15.5" x2="0" y2="24"/>
            <line x1="1.2" y1="15.5" x2="0" y2="24"/>

            <!-- Bottom Left -->
            <line x1="-8.8" y1="12.8" x2="-16.5" y2="20"/>
            <line x1="-10.8" y1="11.0" x2="-16.5" y2="20"/>

            <!-- Left -->
            <line x1="-15.5" y1="-1.2" x2="-24" y2="0"/>
            <line x1="-15.5" y1="1.2" x2="-24" y2="0"/>

            <!-- Top Left -->
            <line x1="-10.8" y1="-11.0" x2="-16.5" y2="-20"/>
            <line x1="-8.8" y1="-12.8" x2="-16.5" y2="-20"/>

        </g>
    `;
}