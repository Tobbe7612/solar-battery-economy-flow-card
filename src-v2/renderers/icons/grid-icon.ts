import { svg, TemplateResult } from "lit";

export function renderGridIcon(
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

            <!-- Stolpe -->
            <line x1="0" y1="-22" x2="0" y2="24" />

            <!-- Övre tvärbalk -->
            <line x1="-14" y1="-14" x2="14" y2="-14" />

            <!-- Nedre tvärbalk -->
            <line x1="-10" y1="-2" x2="10" y2="-2" />

            <!-- Vänster stag -->
            <line x1="-14" y1="-14" x2="0" y2="0" />

            <!-- Höger stag -->
            <line x1="14" y1="-14" x2="0" y2="0" />

            <!-- Ben -->
            <line x1="0" y1="24" x2="-8" y2="38" />
            <line x1="0" y1="24" x2="8" y2="38" />

        </g>

    `;

}