import { svg, TemplateResult } from "lit";

import { renderSolarIcon } from "./solar-icon";
import { renderHouseIcon } from "./house-icon";
import { renderGridIcon } from "./grid-icon";
import { renderCarIcon } from "./car-icon";
import { renderSpaIcon } from "./spa-icon";
import { renderHeatpumpIcon } from "./heatpump-icon";
import { renderApplianceIcon } from "./appliance-icon";

export function renderIcon(
    icon: string,
    x: number,
    y: number,
    size: number,
    color: string,
    soc?: number
): TemplateResult {
    switch (icon) {
        case "solar":
            return renderSolarIcon(
                x,
                y,
                color,
            );
        case "house":
            return renderHouseIcon(
                x,
                y,
                color,
            );
        case "grid":
            return renderGridIcon(
                x,
                y,
                color,
            );
        case "battery": {

            // SOC fill bar behind the outline. Body spans local
            // x -30..30 (width 60); inset by 2px on each side so
            // the fill sits cleanly inside the stroke.
            const clampedSoc = Math.max(0, Math.min(100, soc ?? 0));
            const innerWidth = 56;
            const fillWidth = innerWidth * (clampedSoc / 100);

            return svg`
                <g transform="translate(${x}, ${y}) rotate(-90)">

                    <rect
                        x="-28"
                        y="-16"
                        width="${fillWidth}"
                        height="32"
                        rx="2"
                        fill="${color}"
                        opacity="0.85"
                    />

                    <g
                        fill="none"
                        stroke="${color}"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        style="filter: drop-shadow(0 0 4px ${color}80);"
                    >
                        <rect
                            x="-30"
                            y="-18"
                            width="60"
                            height="36"
                            rx="4"
                        />
                        <rect
                            x="30"
                            y="-7"
                            width="4"
                            height="14"
                            rx="2"
                        />
                    </g>

                </g>
            `;
        }
        case "car":
            return renderCarIcon(
                x,
                y,
                color,
            );
        case "spa":
            return renderSpaIcon(
                x,
                y,
                color,
            );
        case "heatpump":
            return renderHeatpumpIcon(
                x,
                y,
                color,
            );
        case "appliance":
            return renderApplianceIcon(
                x,
                y,
                color,
            );
        default:
            return svg`
                <text
                    x="${x}"
                    y="${y}"
                    fill="${color}"
                    font-size="${size}"
                    text-anchor="middle"
                    dominant-baseline="middle"
                >
                    ?
                </text>
            `;
    }
}
