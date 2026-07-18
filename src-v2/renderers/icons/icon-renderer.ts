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
    size: number
): TemplateResult {
    switch (icon) {
        case "solar":
            return renderSolarIcon(
                x,
                y,
            );
        case "house":
            return renderHouseIcon(
                x,
                y
            );
        case "grid":
            return renderGridIcon(
                x,
                y
            );
        case "battery":
            return svg`
                <g
                    transform="translate(${x}, ${y}) rotate(-90)"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
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
                    <line
                        x1="-20"
                        y1="0"
                        x2="20"
                        y2="0"
                    />
                </g>
            `;
        case "car":
            return renderCarIcon(
                x,
                y
            );
        case "spa":
            return renderSpaIcon(
                x,
                y
            );
        case "heatpump":
            return renderHeatpumpIcon(
                x,
                y
            );
        case "appliance":
            return renderApplianceIcon(
                x,
                y
            );
        default:
            return svg`
                <text
                    x="${x}"
                    y="${y}"
                    fill="white"
                    font-size="${size}"
                    text-anchor="middle"
                    dominant-baseline="middle"
                >
                    ?
                </text>
            `;
    }
}