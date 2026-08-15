import { svg, TemplateResult } from "lit";
import { LabelDefinition } from "./label-types";
import { DESKTOP_LABELS } from "./desktop-labels";
import { renderLabel } from "./label-renderer";
import { LabelState } from "./label-types";
import { createBatteryLabel } from "./label-factory";
import { createHouseLabel } from "./label-factory";
import { createGridLabel } from "./label-factory";
import { createSolarLabel } from "./label-factory";
import { createDeviceLabel } from "./label-factory";
import { CardData } from "../../core/card-data";
export function renderLabels(
    labels: LabelDefinition[],
    cardData: CardData,
    host: HTMLElement,
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
                let definition = label;
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
                    case "car": {
                        const device = cardData.devices[0];

                        if (!device || !device.enabled) {
                            return "";
                        }

                        state = createDeviceLabel(device);
                        definition = {
                            ...label,
                            title: device.title,
                        };
                        break;
                    }

                    case "spa": {
                        const device = cardData.devices[1];

                        if (!device || !device.enabled) {
                            return "";
                        }

                        state = createDeviceLabel(device);
                        definition = {
                            ...label,
                            title: device.title,
                        };
                        break;
                    }

                    case "heatpump": {
                        const device = cardData.devices[2];

                        if (!device || !device.enabled) {
                            return "";
                        }

                        state = createDeviceLabel(device);
                        definition = {
                            ...label,
                            title: device.title,
                        };
                        break;
                    }

                    case "appliance": {
                        const device = cardData.devices[3];

                        if (!device || !device.enabled) {
                            return "";
                        }

                        state = createDeviceLabel(device);
                        definition = {
                            ...label,
                            title: device.title,
                        };
                        break;
                    }
                    default:
                        state = {
                            line1: "1234 W",
                            line2: "",
                            line3: "",
                            power: 0,
                        };
                        break;
                }
                return renderLabel(
                    definition,
                    state,
                    host,
                );
            })}
        </g>
    `;
}