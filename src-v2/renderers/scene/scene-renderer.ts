import { html, TemplateResult } from "lit";

import { CardData } from "../../core/card-data";

import { renderBatteryOverlay }
  from "../overlays/battery/battery-overlay";

export function renderScene(
    cardData: CardData
): TemplateResult {

    return html`
        ${renderBatteryOverlay(cardData)}
    `;

}