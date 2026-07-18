import { svg, TemplateResult } from "lit";

import {
    LabelDefinition,
    LabelState,
} from "./label-types";

import { renderIcon }
    from "../icons/icon-renderer";

export function renderLabel(
    definition: LabelDefinition,
    state: LabelState
): TemplateResult {

const isMobile = definition.width <= 155;
const scale = isMobile ? 0.6 : 1;
const iconScale = isMobile ? 0.65 : 1;
const iconOffsetX = isMobile ? 25 : 32;
const iconOffsetY = isMobile ? 30 : 55;

const titleSize = 16 * scale;
const valueSize = 24 * scale;
const line2Size = 18 * scale;
const line3Size = 13 * scale;
const iconSize = 22 * scale;

const leftPadding = 18 * scale;

const titleY = 28 * scale;
const valueY = 56 * scale;
const line2Y = 78 * scale;
const line3Y = 100 * scale;

    return svg`

        <g
            class="energy-label"
            transform="translate(${definition.x}, ${definition.y})"
            pointer-events="none"
        >

            <rect
                filter="url(#label-shadow)"
                width="${definition.width}"
                height="${definition.height}"

                rx="22"
                ry="22"

                fill="rgba(18,24,34,0.72)"

                stroke="rgba(255,255,255,0.10)"

                stroke-width="1.5"
            />

            <text
                class="energy-label-title"
                x="${leftPadding}"
                y="${titleY}"
                font-size="${titleSize}"
                fill="white"
                font-weight="700"
            >
                ${definition.title}
            </text>

            <g
                transform="
                    translate(
                        ${definition.width - iconOffsetX},
                        ${iconOffsetY}
                    )
                    scale(${iconScale})
                "
            >
                ${renderIcon(
                    definition.icon,
                    0,
                    0,
                    22
                )}
            </g>

            ${state.line1
                ? svg`
                    <text
                        class="energy-label-line1"
                        x="${leftPadding}"
                        y="${valueY}"
                        font-size="${valueSize}"
                        fill="white"
                        font-weight="700"
                    >
                        ${state.line1}
                    </text>
                `
                : ""}

            ${state.line2
                ? svg`
                    <text
                        class="energy-label-line2"
                        x="${leftPadding}"
                        y="${line2Y}"
                        font-size="${line2Size}"
                        fill="white"
                        opacity="0.92"
                    >
                        ${state.line2}
                    </text>
                `
                : ""}

            ${state.line3
                ? svg`
                    <text
                        class="energy-label-line3"
                        x="${leftPadding}"
                        y="${line3Y}"
                        font-size="${line3Size}"
                        fill="white"
                        opacity="0.70"
                    >
                        ${state.line3}
                    </text>
                `
                : ""}

        </g>

    `;
}