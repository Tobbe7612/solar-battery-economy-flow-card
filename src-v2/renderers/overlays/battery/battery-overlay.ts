import { html, TemplateResult } from "lit";

import { CardData }
  from "../../../core/card-data";

import { batteryStyles }
  from "./battery-styles";

function formatPower(
    power: number
): string {

    const abs = Math.abs(power);

    if (abs >= 1000) {

        return `${(power / 1000).toFixed(2)} kW`;

    }

    return `${Math.round(power)} W`;
}

function batteryColor(
    power: number
): string {

    if (power > 25) {

        return "#61ff8b";

    }

    if (power < -25) {

        return "#ffb347";

    }

    return "#ffffff";
}

export function renderBatteryOverlay(
    cardData: CardData
): TemplateResult {

    return html`

        <style>
            ${batteryStyles}
        </style>

        <div class="battery-overlay">

            <div
                class="battery-soc"
                style="color:${batteryColor(cardData.batteryPower)};"
            >
                ${Math.round(cardData.batterySoc)}%
            </div>

            <div class="battery-power">
                ${formatPower(cardData.batteryPower)}
            </div>

        </div>

    `;

}