import { svg, TemplateResult } from "lit";

export function renderGridIcon(
    x: number,
    y: number,
    color: string
): TemplateResult {

    return svg`

        <g
            transform="translate(${x}, ${y}) scale(0.75, 0.90)"
            fill="none"
            stroke="${color}"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="filter: drop-shadow(0 0 4px ${color}80);"
        >

            <!-- Mast -->
            <line x1="0" y1="-32" x2="-9" y2="30"/>
            <line x1="0" y1="-32" x2="9" y2="30"/>

            <!-- Upper arm -->
            <line x1="-22" y1="-13" x2="22" y2="-13"/>
            <line x1="0" y1="-20" x2="-22" y2="-13"/>
            <line x1="0" y1="-20" x2="22" y2="-13"/>

            <!-- Upper insulators -->
            <line x1="-22" y1="-13" x2="-22" y2="-8"/>
            <line x1="-24" y1="-8" x2="-20" y2="-8"/>
            <line x1="-24" y1="-5" x2="-20" y2="-5"/>

            <line x1="22" y1="-13" x2="22" y2="-8"/>
            <line x1="20" y1="-8" x2="24" y2="-8"/>
            <line x1="20" y1="-5" x2="24" y2="-5"/>

            <!-- Lower arm -->
            <line x1="-30" y1="7" x2="30" y2="7"/>
            <line x1="-9" y1="0" x2="-30" y2="7"/>
            <line x1="9" y1="0" x2="30" y2="7"/>

            <!-- Lower insulators -->
            <line x1="-30" y1="7" x2="-30" y2="12"/>
            <line x1="-32" y1="12" x2="-28" y2="12"/>
            <line x1="-32" y1="15" x2="-28" y2="15"/>

            <line x1="30" y1="7" x2="30" y2="12"/>
            <line x1="28" y1="12" x2="32" y2="12"/>
            <line x1="28" y1="15" x2="32" y2="15"/>

            <!-- Internal bracing -->
            <line x1="-2" y1="-13" x2="7" y2="-1"/>
            <line x1="-7" y1="-1" x2="7" y2="-1"/>

            <line x1="-9" y1="7" x2="7" y2="-1"/>
            <line x1="-9" y1="7" x2="9" y2="20"/>

            <line x1="-9" y1="20" x2="9" y2="20"/>
            <line x1="-9" y1="30" x2="9" y2="20"/>

            <!-- Foundation -->
            <rect
                x="-12"
                y="30"
                width="24"
                height="8"
                rx="0.8"
            />

            <!-- Ground -->
            <line
                x1="-22"
                y1="38"
                x2="22"
                y2="38"
            />

        </g>

    `;

}
