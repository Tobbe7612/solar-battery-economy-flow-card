import { svg, TemplateResult } from "lit";
import { LabelDefinition } from "./label-types";
import { renderLabel } from "./label-renderer";
import { LabelState } from "./label-types";
import { createBatteryLabel } from "./label-factory";
import { createHouseLabel } from "./label-factory";
import { createGridLabel } from "./label-factory";
import { createSolarLabel } from "./label-factory";
import { createDeviceLabel } from "./label-factory";
import { CardData } from "../../core/card-data";
import type { LabelMetric } from "./label-factory";
export type CardViewMode = "overview" | "consumers";
const DESKTOP_SCENE_WIDTH = 1920;
const MOBILE_SCENE_WIDTH = 430;
const HALO_RIGHT_INSET_RATIO = 90 / DESKTOP_SCENE_WIDTH;
const DESKTOP_CONSUMER_ROW_TOP = 255;
const DESKTOP_CONSUMER_ROW_BOTTOM = 675;
const DESKTOP_CONSUMER_COLUMNS = [450, 860, 1270] as const;
const MOBILE_CONSUMER_COLUMNS = [15, 156, 297] as const;
const MOBILE_CONSUMER_ROW_TOP = 220;
const MOBILE_CONSUMER_ROW_BOTTOM = 650;
const MOBILE_CONSUMER_HOUSE_X = 156;
const MOBILE_CONSUMER_HOUSE_Y = 435;

export function positionLabels(labels: LabelDefinition[], viewMode: CardViewMode): LabelDefinition[] {
    const desktop = labels.some((label) => label.x > 1000);
    const sceneWidth = desktop ? DESKTOP_SCENE_WIDTH : MOBILE_SCENE_WIDTH;
    return labels.map((label) => {
        const index = label.deviceIndex;
        if (index === 0 || index === 7) {
            const rightInset = sceneWidth * HALO_RIGHT_INSET_RATIO;
            const rightX = Math.max(0, Math.min(sceneWidth - label.width, sceneWidth - label.width - rightInset));
            if (!desktop && index === 7) {
                const house = labels.find((item) => item.id === "house")!;
                const houseX = viewMode === "consumers" ? MOBILE_CONSUMER_HOUSE_X : house.x;
                const houseY = viewMode === "consumers" ? MOBILE_CONSUMER_HOUSE_Y : house.y;
                const houseCenter = houseX + house.width / 2;
                const haloCenter = rightX + label.width / 2;
                const testX = Math.max(0, Math.min(sceneWidth - label.width, houseCenter - (haloCenter - houseCenter) - label.width / 2));
                const y = viewMode === "consumers" ? houseY : labels.find((item) => item.deviceIndex === 0)!.y;
                return withPosition(label, testX, y);
            }
            const x = rightX;
            const y = index === 0 ? (desktop || viewMode !== "consumers" ? label.y : MOBILE_CONSUMER_HOUSE_Y) : desktop ? 888 : 566;
            return withPosition(label, x, y);
        }
        if (viewMode !== "consumers") return label;
        if (label.id === "house") {
            if (!desktop) return withPosition(label, MOBILE_CONSUMER_HOUSE_X, MOBILE_CONSUMER_HOUSE_Y);
            const rowCenter = (indices: number[], rowTop: number) => {
                const heights = labels
                    .filter((item) => item.deviceIndex !== undefined && indices.includes(item.deviceIndex))
                    .map((item) => rowTop + item.height);
                return heights.reduce((sum, center) => sum + center, 0) / heights.length;
            };
            const upperCenter = rowCenter([1, 2, 3], DESKTOP_CONSUMER_ROW_TOP);
            const lowerCenter = rowCenter([4, 5, 6], DESKTOP_CONSUMER_ROW_BOTTOM);
            const centerY = (upperCenter + lowerCenter) / 2;
            return withPosition(label, 860 - label.width / 2, centerY - label.height / 2);
        }
        if (index === undefined) return label;
        if (desktop) {
            const consumerOrder = index - 1;
            const x = DESKTOP_CONSUMER_COLUMNS[consumerOrder % 3] - label.width / 2;
            const rowTop = consumerOrder < 3 ? DESKTOP_CONSUMER_ROW_TOP : DESKTOP_CONSUMER_ROW_BOTTOM;
            return withPosition(label, x, rowTop + label.height / 2);
        }
        const consumerOrder = index - 1;
        const x = MOBILE_CONSUMER_COLUMNS[consumerOrder % 3];
        const y = consumerOrder < 3 ? MOBILE_CONSUMER_ROW_TOP : MOBILE_CONSUMER_ROW_BOTTOM;
        return withPosition(label, x, y);
    });
}

function withPosition(label: LabelDefinition, x: number, y: number): LabelDefinition {
    return { ...label, x, y, anchorBounds: { x, y, width: label.width, height: label.height } };
}
export function renderLabels(
    labels: LabelDefinition[],
    cardData: CardData,
    host: HTMLElement,
    viewMode: CardViewMode = "overview",
    metrics: Record<string, LabelMetric> = {},
    animate = true,
): TemplateResult {
    const positionedLabels = positionLabels(labels, viewMode);
    const desktop = labels.some((label) => label.x > 1000);
    const sceneLabels = positionedLabels.filter((label) => viewMode === "consumers"
        ? label.id === "house" || label.deviceIndex !== undefined
        : ["solar", "grid", "house", "battery"].includes(label.id) || label.deviceIndex === 0 || label.deviceIndex === 7);
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
            ${sceneLabels.map(label => {
                let state: LabelState;
                let definition = label;
                if (label.deviceIndex !== undefined) {
                    const device = cardData.devices[label.deviceIndex];
                    if (!device?.enabled) return "";
                    state = createDeviceLabel(device, metrics[`device_${label.deviceIndex}`] ?? metrics[label.id]);
                    definition = { ...label, title: device.title };
                } else switch (label.id) {
                    case "battery":
                        state = createBatteryLabel(cardData, metrics.battery);
                        break;
                    case "house":
                        state = createHouseLabel(cardData, metrics.house);
                        break;
                    case "grid":
                        state = createGridLabel(cardData, metrics.grid);
                        break;
                    case "solar":
                        state = createSolarLabel(cardData, metrics.solar);
                        break;
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
                    animate,
                );
            })}
        </g>
    `;
}
