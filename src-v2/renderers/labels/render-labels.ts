import { svg, TemplateResult } from "lit";
import { LabelDefinition } from "./label-types";
import { DESKTOP_LABELS } from "./desktop-labels";
import { renderLabel } from "./label-renderer";
import { LabelState } from "./label-types";
import { createBatteryLabel } from "./label-factory";
import { createHouseLabel } from "./label-factory";
import { createGridLabel } from "./label-factory";
import { createSolarLabel } from "./label-factory";
import { createCarLabel } from "./label-factory";
import { createSpaLabel } from "./label-factory";
import { createHeatpumpLabel } from "./label-factory";
import { createApplianceLabel } from "./label-factory";
import { CardData } from "../../core/card-data";
export function renderLabels(
    labels: LabelDefinition[],
    cardData: CardData
): TemplateResult {
    return svg`
        <defs>
            <filter
                id="label-shadow"
                x="-40%"
                y="-40%"
                width="180%"
                height="180%"
            >
                <feDropShadow
                    dx="0"
                    dy="8"
                    stdDeviation="12"
                    flood-opacity="0.35"
                />
            </filter>
        </defs>
        <g class="energy-label-layer">
            ${labels.map(label => {
                let state: LabelState;
                switch (label.id) {
                    case "battery":
                        state = createBatteryLabel(cardData);
                        break;
                    case "house":
                        state = createHouseLabel(cardData);
                        break;
                    case "grid":
                        state = createGridLabel(cardData);
                        break;
                    case "solar":
                        state = createSolarLabel(cardData);
                        break;
                    case "car":
                        state = createCarLabel(cardData);
                        break;
                    case "spa":
                        state = createSpaLabel(cardData);
                        break;
                    case "heatpump":
                        state = createHeatpumpLabel(cardData);
                        break;
                    case "appliance":
                        state = createApplianceLabel(cardData);
                        break;
                    default:
                        state = {
                            line1: "1234 W",
                            line2: "",
                            line3: "",
                        };
                        break;
                }
                return renderLabel(
                    label,
                    state
                );
            })}
        </g>
    `;
}