import { css } from "lit";
import { flowStyles } from "./flow-styles";
import { solarArcStyles } from "./solar-arc-styles";
import { labelStyles } from "./label-styles";
export const cardStyles = css`
:host {
    display: block;
    width: 100%;
    --ha-card-background: transparent;
    --ha-card-border-width: 0;
    --ha-card-box-shadow: none;
}
.card {
    position: relative;
    width: 100%;
    aspect-ratio: 1920 / 1080;
    min-height: auto;
    overflow: hidden;
    border-radius: 32px;
    background:
    linear-gradient(
        180deg,
        #14202c 0%,
        #091018 100%
    );
    box-shadow:
    0 40px 100px rgba(0,0,0,0.50);
    backdrop-filter: blur(20px);
}
.hero-background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    filter:
    saturate(1.05)
    contrast(1.02)
    brightness(0.95);
    z-index: 0;
}
.background-glow {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background:
    radial-gradient(circle at 50% 10%, rgba(255,200,50,0.08), transparent 24%),
    radial-gradient(circle at 82% 40%, rgba(80,255,180,0.05), transparent 32%),
    radial-gradient(circle at 20% 60%, rgba(80,160,255,0.06), transparent 36%),
    radial-gradient(circle at 50% 90%, rgba(120,80,255,0.04), transparent 30%);
    z-index: 1;
}
.scene-vignette {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background:
    radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.52));
    pointer-events: none;
    z-index: 2;
}
.scene {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: visible;
    z-index: 4;
}
.scene-inner {
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: top left;
}
.side-panel {
    position: absolute;
    top: 20px;
    height: auto;

    width: 220px;

    padding: 30px;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    border-radius: 22px;

    border: 1px solid rgba(255,255,255,0.06);

    backdrop-filter: blur(40px);

    z-index: 20;

    transition:
        background 0.8s ease,
        border-color 0.8s ease,
        box-shadow 0.8s ease;

    box-shadow:
        0 20px 60px rgba(0,0,0,0.35);
}

.side-title {

    display: flex;
    align-items: center;

    color: rgba(180,205,230,.82);

    font-size: 15px;
    font-weight: 800;

    text-transform: uppercase;

    letter-spacing: .20em;

    margin-bottom: 32px;

    text-shadow:
        0 0 12px rgba(255,255,255,.08);
}

.panel-section {

    display: flex;
    flex-direction: column;

    gap: 14px;
}

.panel-section-title {

    color: rgba(255,255,255,.60);

    font-size: 12px;

    font-weight: 700;

    text-transform: uppercase;

    letter-spacing: .16em;

    margin-bottom: 8px;
}

.side-stat {

    display: flex;

    flex-direction: column;

    gap: 6px;
}

.side-label {

    color: rgba(255,255,255,.56);

    font-size: 11px;

    font-weight: 600;

    text-transform: uppercase;

    letter-spacing: .08em;
}

.side-value {

    color: white;

    font-size: 21px;

    font-weight: 700;

    line-height: 1.05;

    letter-spacing: -.03em;

    transition:
        color .35s ease,
        text-shadow .35s ease;
}

.side-divider {

    margin: 26px 0;

    height: 1px;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.08),
            transparent
        );
}

.panel-footer {

    margin-top: auto;

    min-height: 28px;

    display: flex;

    align-items: flex-end;
}
.side-panel.compact {
    padding: 18px;
}

.side-panel.compact .side-title {
    font-size: 13px;
    margin-bottom: 20px;
    letter-spacing: .16em;
}

.side-panel.compact .panel-section {
    gap: 10px;
}

.side-panel.compact .panel-section-title {
    font-size: 11px;
    margin-bottom: 6px;
}

.side-panel.compact .side-stat {
    gap: 4px;
}

.side-panel.compact .side-label {
    font-size: 10px;
}

.side-panel.compact .side-value {
    font-size: 18px;
}

.side-panel.compact .side-divider {
    margin: 18px 0;
}

.side-panel.compact .panel-footer {
    min-height: 14px;
}

/* DAG */
.card.day .side-panel,
.card.morning .side-panel {
    background:
    linear-gradient(
        180deg,
        rgba(28,45,65,0.42),
        rgba(16,28,42,0.42)
    );
    border:
    1px solid rgba(255,255,255,0.08);
}
/* KVÄLL */
.card.sunset .side-panel,
.card.evening .side-panel {
    background:
    linear-gradient(
        180deg,
        rgba(24,30,48,0.55),
        rgba(14,20,34,0.55)
    );
    border:
    1px solid rgba(255,200,120,0.08);
    box-shadow:
    0 20px 60px rgba(0,0,0,0.45),
    0 0 30px rgba(255,180,90,0.05);
}
/* NATT */
.card.night .side-panel {
    background:
    linear-gradient(
        180deg,
        rgba(12,20,34,0.68),
        rgba(8,14,24,0.72)
    );
    border:
    1px solid rgba(120,180,255,0.08);
    box-shadow:
    0 20px 70px rgba(0,0,0,0.55),
    0 0 40px rgba(70,120,255,0.06);
}
.value-solar {
    color: rgba(255, 220, 90, 0.95);
    text-shadow:
    0 0 10px rgba(255,220,90,0.12);
}
.value-battery {
    color: rgba(110, 255, 170, 0.95);
    text-shadow:
    0 0 10px rgba(110,255,170,0.10);
}
.value-export {
    color: rgba(120, 190, 255, 0.95);
    text-shadow:
    0 0 10px rgba(120,190,255,0.10);
}
.value-grid {
    color: rgba(255, 185, 110, 0.95);
    text-shadow:
    0 0 10px rgba(255,185,110,0.10);
}
.value-money {
    color: rgba(110,255,170,0.95);
    text-shadow:
    0 0 10px rgba(110,255,170,0.10);
}
.value-total {
    color: rgba(255,255,255,0.95);
}
.value-independence {
    color: rgba(120,220,255,0.95);
    text-shadow:
    0 0 10px rgba(120,220,255,0.10);
}
.value-co2 {
    color: rgba(110,255,170,0.95);
    text-shadow:
    0 0 10px rgba(110,255,170,0.10);
}
.value-solar {
    text-shadow:
    0 0 14px rgba(255,220,90,0.18);
}
.value-battery {
    text-shadow:
    0 0 14px rgba(110,255,170,0.18);
}
.value-export {
    text-shadow:
    0 0 14px rgba(120,190,255,0.18);
}
.value-grid {
    text-shadow:
    0 0 14px rgba(255,185,110,0.18);
}
.value-money {
    text-shadow:
    0 0 14px rgba(110,255,170,0.18);
}
.value-independence {
    text-shadow:
    0 0 14px rgba(120,220,255,0.18);
}
.value-co2 {
    text-shadow:
    0 0 14px rgba(110,255,170,0.18);
}
.card.desktop {
    aspect-ratio: 1920 / 1080;
}
.card.mobile {
    aspect-ratio: 430 / 1000;
}
${flowStyles}
${solarArcStyles}
${labelStyles}
`;