import { svg, TemplateResult } from "lit";
import { openMoreInfo } from "../../core/entity-actions";

import {
    LabelDefinition,
    LabelState,
} from "./label-types";

import { renderIcon }
    from "../icons/icon-renderer";

import { getLabelAnimationProfile }
    from "../../core/animation-profile";
import { fitSvgText } from "./label-layout";

export function renderLabel(
    definition: LabelDefinition,
    state: LabelState,
    host: HTMLElement,
    animate = true,
): TemplateResult {

const isMobile = definition.width <= 155;
const scale = isMobile ? 0.6 : 1;
const iconScale = isMobile ? 0.65 : 1;
const iconOffsetX = isMobile ? 22 : 34;
const iconOffsetY = isMobile ? 30 : 49;

const titleSize = 17 * scale;
const valueSize = (isMobile ? 25 : 26) * scale;
const line2Size = (isMobile ? 18 : 19) * scale;
const line3Size = 14 * scale;
const contentBaseX = isMobile ? 50 : 78;
const statusX = definition.width / 2;
const contentX = contentBaseX + (isMobile ? 6 : 10);
const maxValueWidth = Math.max(20, definition.width - contentX - 12);
const maxStatusWidth = Math.max(20, definition.width - 16);
const fit = (value: string | undefined, baseSize: number, maxWidth: number) =>
    value ? fitSvgText(value, baseSize, maxWidth, isMobile ? 7 : 9) : { text: "", fontSize: baseSize };
const titleText = fit(definition.title, titleSize, definition.width - contentX - 12);
const line1Text = fit(state.line1, valueSize, maxValueWidth);
const line2Text = fit(state.line2, line2Size, maxValueWidth);
const line3Text = fit(state.line3, line3Size, maxStatusWidth);

const titleY = 28 * scale;
const valueY = (isMobile ? 56 : 59) * scale;
const line2Y = (isMobile ? 78 : 82) * scale;
const line3Y = (isMobile ? 100 : 105) * scale;

const animation = getLabelAnimationProfile(
    animate ? state.power : 0,
    state.color ?? definition.accentColor ?? "#FFFFFF",
);

const pulseOriginX = definition.width / 2;
const pulseOriginY = definition.height / 2;

    return svg`

        <g
            class="energy-label"
            transform="translate(${definition.x}, ${definition.y})"
            pointer-events="all"
            style="cursor:pointer;"
            @click=${() => {
                if (state.entityId) {
                    openMoreInfo(
                        host,
                        state.entityId,
                    );
                }
            }}
        >

            ${animation.glow.active
                ? svg`
                    <rect
                        class="energy-label-glow"
                        x="-8"
                        y="-8"
                        width="${definition.width + 16}"
                        height="${definition.height + 16}"
                        rx="26"
                        ry="26"
                        fill="${animation.glow.color}"
                        style="
                            filter: blur(${animation.glow.blur}px);
                            --glow-opacity-min: ${animation.glow.opacity * 0.5};
                            --glow-opacity-max: ${animation.glow.opacity};
                        "
                    />
                `
                : ""}

            <g>

                <rect
                    class="energy-label-frame${animation.pulse.active ? ' is-pulsing' : ''}"
                    filter="url(#label-shadow)"
                    width="${definition.width}"
                    height="${definition.height}"

                    rx="22"
                    ry="22"

                    fill="rgba(249,252,255,0.94)"

                    stroke="rgba(255,255,255,0.94)"

                    stroke-width="1.5"

                    style="transform-origin: ${pulseOriginX}px ${pulseOriginY}px;"
                />

                <text
                    class="energy-label-title"
                    x="${contentX}"
                    y="${titleY}"
                    style="font-size:${titleText.fontSize}px"
                    aria-label="${definition.title}"
                    fill="#315474"
                    font-weight="700"
                >
                    ${titleText.text}
                </text>

                <g
                    transform="
                        translate(
                            ${iconOffsetX},
                            ${iconOffsetY}
                        )
                        scale(${iconScale})
                    "
                >
                    ${renderIcon(
                        state.icon ?? definition.icon,
                        0,
                        0,
                        22,
                        animation.glow.color,
                        state.soc,
                    )}
                </g>

                ${state.line1
                    ? svg`
                        ${state.line1Indicator ? svg`
                            <text
                                class="energy-label-indicator energy-label-indicator-line1"
                                x="${contentX - 18 * scale}"
                                y="${valueY}"
                                fill="${state.line1IndicatorColor ?? "#315474"}"
                                aria-label="${state.line1IndicatorLabel ?? state.line1Indicator}"
                                style="font-size:${18 * scale}px"
                                font-weight="700"
                            >${state.line1Indicator}</text>
                        ` : ""}
                        <text
                            class="energy-label-line1"
                            x="${contentX}"
                            y="${valueY}"
                            style="font-size:${line1Text.fontSize}px"
                            aria-label="${state.line1}"
                            fill="#153653"
                            font-weight="700"
                        >
                            ${line1Text.text}
                        </text>
                    `
                    : ""}

                ${state.line2
                    ? svg`
                        ${state.line2Indicator ? svg`
                            <text
                                class="energy-label-indicator energy-label-indicator-line2"
                                x="${contentX - 18 * scale}"
                                y="${line2Y}"
                                fill="${state.line2IndicatorColor ?? "#315474"}"
                                aria-label="${state.line2IndicatorLabel ?? state.line2Indicator}"
                                style="font-size:${16 * scale}px"
                                font-weight="700"
                            >${state.line2Indicator}</text>
                        ` : ""}
                        <text
                            class="energy-label-line2"
                            x="${contentX}"
                            y="${line2Y}"
                            style="font-size:${line2Text.fontSize}px"
                            aria-label="${state.line2}"
                            fill="#345570"
                            opacity="0.96"
                        >
                            ${line2Text.text}
                        </text>
                    `
                    : ""}

                ${state.line3
                    ? svg`
                        <text
                            class="energy-label-line3"
                            x="${statusX}"
                            y="${line3Y}"
                            style="font-size:${line3Text.fontSize}px"
                            aria-label="${state.line3}"
                            text-anchor="middle"
                            fill="#526d87"
                            opacity="0.92"
                        >
                            ${line3Text.text}
                        </text>
                    `
                    : ""}

            </g>

        </g>

    `;
}
