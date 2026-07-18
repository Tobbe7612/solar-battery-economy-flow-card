import { css } from "lit";

import { flowStyles } from "./flow-styles";
import { solarArcStyles } from "./solar-arc-styles";

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

    min-height: auto;

    overflow: visible;

    border-radius: 42px;

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
    height: 1080px;

    overflow: hidden;

    z-index: 4;
}

.scene-inner {
    position: absolute;

    left: 50%;
    top: 0px;

    transform:
    translateX(-50%)
    scale(1.0);

    transform-origin: top center;
}

.energy-node {

    opacity: 0.96;

    isolation: isolate;

    position: absolute;

    border-radius: 999px;

    overflow: visible;

    backdrop-filter:
    blur(36px);

    background:
    linear-gradient(
        180deg,
        rgba(255,255,255,0.07),
        rgba(255,255,255,0.025)
    );

    border:
    1px solid rgba(255,255,255,0.05);

    box-shadow:
    0 12px 40px rgba(0,0,0,0.22),
    inset 0 1px 0 rgba(255,255,255,0.03);

    z-index: 50;

    transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.energy-node.house {

    background:
    linear-gradient(
        180deg,
        rgba(70,130,255,0.24),
        rgba(35,80,180,0.16)
    );

    border:
    1px solid rgba(120,180,255,0.40);

    box-shadow:
    0 0 90px rgba(80,140,255,0.22),
    0 30px 90px rgba(0,0,0,0.40);
}

.energy-node.grid {

    border:
    1px solid rgba(255,120,120,0.32);

    box-shadow:
    0 0 40px rgba(255,80,80,0.14),
    0 20px 60px rgba(0,0,0,0.30);
}

.energy-node.battery {

    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    backdrop-filter: none !important;

    overflow: visible;

    z-index: 40;
}

.energy-node.battery .node-glow,
.energy-node.battery .node-shimmer,
.energy-node.battery .node-header,
.energy-node.battery .node-title,
.energy-node.battery .node-status,
.energy-node.battery .node-value,
.energy-node.battery .node-secondary {

    display: none !important;
}

.energy-node.battery .node-inner {

    inset: 0;
    padding: 0;

    background: none;
}

.energy-node.battery .node-visual {

    position: absolute;

    left: 50%;
    top: 50%;

    width: 190px;
    height: 300px;

    transform:
        translate(-50%, -50%);

    opacity: 1;

    filter: none;

    pointer-events: none;
}

.energy-node.car {

    border:
    1px solid rgba(180,120,255,0.30);

    box-shadow:
    0 0 50px rgba(180,120,255,0.12),
    0 20px 60px rgba(0,0,0,0.30);
}

.energy-node.spa {

    border:
    1px solid rgba(100,220,255,0.26);

    box-shadow:
    0 0 40px rgba(100,220,255,0.10),
    0 20px 60px rgba(0,0,0,0.30);
}

.energy-node.solar {

    border:
    1px solid rgba(255,220,120,0.30);

    box-shadow:
    0 0 60px rgba(255,220,120,0.14),
    0 20px 60px rgba(0,0,0,0.30);
}

.energy-node.secondary {

    opacity: 0.84;

    backdrop-filter:
    blur(22px);

    background:
    linear-gradient(
        180deg,
        rgba(255,255,255,0.035),
        rgba(255,255,255,0.015)
    );

    border:
    1px solid rgba(255,255,255,0.035);

    box-shadow:
    0 10px 30px rgba(0,0,0,0.18);

    transform:
    scale(0.96);
}

.energy-node.secondary .node-title {

    font-size: 15px;

    opacity: 0.88;
}

.energy-node.secondary .node-value {

    font-size: 18px;

    margin-left: 58px;

    opacity: 0.92;
}

.energy-node.secondary .node-status {

    font-size: 9px;

    opacity: 0.70;
}

.energy-node.secondary .node-icon {

    width: 42px;
    height: 42px;

    opacity: 0.75;

    filter:
    drop-shadow(0 0 6px currentColor);
}

.energy-node:hover {

    transform:
    translateY(-1px)
    scale(1.01);

    box-shadow:
    0 16px 50px rgba(0,0,0,0.30),
    0 0 18px rgba(255,255,255,0.04);
}

.node-glow {

    position: absolute;

    inset: -35%;

    background:
    radial-gradient(
        circle at center,
        rgba(255,255,255,0.08),
        transparent 72%
    );

    opacity: 0.35;

    z-index: 0;
}

.node-shimmer {

    position: absolute;

    inset: 0;

    background:
    linear-gradient(
        135deg,
        rgba(255,255,255,0.06),
        transparent 35%
    );

    opacity: 0.22;

    pointer-events: none;

    z-index: 1;
}

.node-inner {

    position: absolute;

    inset: 0;

    display: flex;

    flex-direction: column;

    justify-content: center;

    padding: 22px 26px;

    z-index: 2;
}

.node-header {

    display: flex;

    align-items: center;

    justify-content: flex-start;

    gap: 16px;

    margin-bottom: 12px;
}

.node-text {

    display: flex;

    flex-direction: column;

    align-items: flex-start;

    justify-content: center;

    flex: 1;
}

.node-content {

    display: flex;

    flex-direction: column;

    align-items: flex-start;

    justify-content: center;

    gap: 2px;

    flex: 1;
}

.node-visual {

    width: 72px;

    height: 72px;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

    color: rgba(255,255,255,0.96);

    filter:
    drop-shadow(0 0 12px currentColor);

    opacity: 0.95;
}

.energy-node.house .node-visual {

    color: #4da3ff;
}

.energy-node.battery .node-visual {

    color: #55ff88;
}

.energy-node.grid .node-visual {

    color: #ff6a6a;
}

.energy-node.car .node-visual {

    color: #b066ff;
}

.energy-node.spa .node-visual {

    color: #39cfff;
}

.energy-node.solar .node-visual {

    color: #ffd34d;
}

.node-icon {

    width: 100%;

    height: 100%;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;
}

.node-icon svg {

    width: 100%;
    height: 100%;

    overflow: visible;
}

.node-title {

    color: rgba(255,255,255,0.96);

    font-size: 18px;

    font-weight: 700;

    line-height: 1;

    text-transform: uppercase;

    letter-spacing: 0.05em;
}

.node-value {

    color: white;

    font-size: 24px;

    font-weight: 700;

    line-height: 1;

    letter-spacing: -0.04em;

    text-shadow:
    0 0 10px rgba(255,255,255,0.12);

    margin-left: 68px;

    margin-top: 10px;

    white-space: nowrap;
}

.node-status {

    margin-top: 4px;

    color: rgba(255,255,255,0.58);

    font-size: 10px;

    font-weight: 500;

    text-transform: uppercase;

    letter-spacing: 0.08em;
}

.node-secondary {

    margin-top: 6px;
    color: rgba(255,255,255,0.70);
    font-size: 24px;
    font-weight: 700;
    opacity: 0.92;
}

.side-panel {
    position: absolute;

    top: 40px;

    width: 260px;

    min-height: 430px;

    padding: 32px;

    border-radius: 24px;

    border:
    1px solid rgba(255,255,255,0.06);

    backdrop-filter:
    blur(40px);

    z-index: 20;

    display: flex;
    flex-direction: column;

    transition:
    background 0.8s ease,
    border-color 0.8s ease,
    box-shadow 0.8s ease;

    box-shadow:
    0 20px 60px rgba(0,0,0,0.35);
}

.energy-node.secondary {

    opacity: 0.88;

    backdrop-filter:
    blur(24px);
}

.energy-node.secondary .node-title {

    font-size: 18px;
}

.energy-node.secondary .node-status {

    font-size: 11px;

    opacity: 0.8;
}

.energy-node.secondary .node-value {

    font-size: 22px;

    margin-left: 0;

    margin-top: 8px;
}

.energy-node.secondary .node-secondary {

    font-size: 16px;

    margin-top: 4px;
}

.node-active-solar {
    box-shadow:
    0 0 50px rgba(255,220,80,0.16);
}

.node-active-grid {
    box-shadow:
    0 0 50px rgba(255,120,120,0.16);
}

.node-active-house {
    box-shadow:
    0 0 50px rgba(80,160,255,0.16);
}

.node-active-battery {
    box-shadow:
    0 0 50px rgba(80,255,160,0.16);
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

.side-title {

    display: flex;
    align-items: center;

    gap: 10px;

    color:
    rgba(255,255,255,0.96);

    font-size: 15px;

    font-weight: 800;

    text-transform: uppercase;

    letter-spacing: 0.20em;

    margin-bottom: 24px;

    text-shadow:
    0 0 12px rgba(255,255,255,0.08);
}

.side-stat {
    display: flex;
    flex-direction: column;

    gap: 8px;
}

.side-label {
    color: rgba(255,255,255,0.55);

    font-size: 11px;
    font-weight: 600;

    text-transform: uppercase;

    letter-spacing: 0.08em;
}

.side-value {

    color: white;

    font-size: 20px;

    font-weight: 700;

    line-height: 1.05;

    letter-spacing: -0.03em;

    transition:
    color 0.4s ease,
    text-shadow 0.4s ease;
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

.side-divider {
    height: 1px;

    margin: 16px 0;

    background:
    linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,0.08),
        transparent
    );
}

.footer {

    display: flex;
    align-items: center;
    justify-content: space-around;

    gap: 40px;

    min-height: 140px;

    padding: 28px 40px;

    background:
    rgba(10,18,28,0.92);

    border-top:
    1px solid rgba(255,255,255,0.08);

    backdrop-filter:
    blur(30px);
    
    flex-wrap: wrap;
}

.metric {
    display: flex;
    flex-direction: column;

    gap: 10px;
}

.metric-label {
    color: rgba(255,255,255,0.50);

    font-size: 13px;

    text-transform: uppercase;

    letter-spacing: 0.08em;
}

.metric-value {
    color: white;

    font-size: 36px;

    font-weight: 700;

    letter-spacing: -0.02em;
}

.solar-hub {

    position: absolute;

    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;

    z-index: 30;
}

.solar-hub-icon {

    font-size: 72px;

    line-height: 1;

    color: #FFD54A;

    text-shadow:
    0 0 20px rgba(255,213,74,0.9),
    0 0 60px rgba(255,213,74,0.45);
}

.solar-hub-label {

    margin-top: -2px;

    font-size: 18px;

    font-weight: 700;

    letter-spacing: 0.12em;

    color: white;
}

.solar-hub-value {

    font-size: 28px;

    font-weight: 700;

    color: white;

    text-shadow:
    0 0 10px rgba(255,255,255,0.45);
}

.solar-hub-card {

    box-sizing: border-box;

    width: 100%;

    height: 100%;

    padding: 22px 28px;

    border-radius: 28px;

    background:
    linear-gradient(
        180deg,
        rgba(255,255,255,0.12),
        rgba(255,255,255,0.05)
    );

    border:
    1px solid rgba(255,255,255,0.12);

    backdrop-filter:
    blur(24px);

    box-shadow:
    0 20px 60px rgba(0,0,0,0.30),
    0 0 50px rgba(255,210,80,0.08);
}

.solar-hub-header {

    display: flex;

    align-items: center;

    gap: 16px;
}

.solar-hub-title-group {

    display: flex;

    flex-direction: column;
}

.solar-hub-subtitle {

    margin-top: 4px;

    color:
    rgba(255,255,255,0.55);

    font-size: 12px;

    letter-spacing: 0.06em;

    text-transform: uppercase;
}

.solar-hub-times {

    display: flex;

    justify-content: space-between;

    margin-top: 16px;

    color:
    rgba(255,255,255,0.80);

    font-size: 14px;
}

@media (max-width: 900px) {

    .scene-inner {

    width: 430px;
    height: 1180px;

    top: 0;

    transform:
        translateX(-50%)
        scale(1);
    }

    .scene {
    height: 1180px;
    }

    .side-panel {
    display: none;
    }

    .energy-node {

    border-radius: 999px;

    backdrop-filter: blur(24px);
    }

    .node-inner {

    padding: 14px 16px;
    }

    .node-header {

    gap: 8px;

    margin-bottom: 6px;
    }

    .node-icon {

    width: 24px;
    height: 24px;
    }

    .node-title {

    font-size: 14px;

    letter-spacing: 0.08em;
    }

    .node-status {

    font-size: 9px;
    }

    .node-value {

    font-size: 18px;

    margin-left: 0;

    margin-top: 6px;
    }

    .node-secondary {

    font-size: 14px;

    margin-top: 2px;
    }

    .energy-node.secondary .node-title {

    font-size: 12px;
    }

    .energy-node.secondary .node-status {

    font-size: 8px;
    }

    .energy-node.secondary .node-value {

    font-size: 14px;
    }

    .energy-node.secondary .node-secondary {

    font-size: 11px;
    }

    .solar-hub-card {

    width: 100%;

    padding: 12px 16px;

    border-radius: 28px;
    }

    .solar-hub-icon {

    font-size: 40px;
    }

    .solar-hub-value {

    font-size: 18px;
    }

    .solar-hub-label {

    font-size: 12px;
    }

    .solar-hub-subtitle {

    font-size: 9px;
    }

    .solar-hub-times {

    font-size: 10px;
    }

.energy-node.battery-hidden {
    display: none !important;
}

.energy-node.battery-asset {

    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
}

.energy-node.battery-asset .node-glow,
.energy-node.battery-asset .node-shimmer,
.energy-node.battery-asset .node-header,
.energy-node.battery-asset .node-title,
.energy-node.battery-asset .node-status,
.energy-node.battery-asset .node-value {

    display: none !important;
}

.energy-node.battery-asset .node-secondary {

    position: absolute;

    left: 50%;
    top: 220px;

    transform: translateX(-50%);

    font-size: 34px;

    font-weight: 800;

    color: #55ff88;

    text-shadow:
        0 0 12px rgba(80,255,160,0.8);

    z-index: 20;
}
}
${flowStyles}

${solarArcStyles}

.debug-panel {

    position:absolute;

    left:20px;
    top:20px;

    width:320px;

    padding:12px;

    border-radius:12px;

    background:rgba(0,0,0,.70);

    backdrop-filter:blur(10px);

    color:white;

    font-size:13px;

    font-family:monospace;

    z-index:5000;

}

.debug-title {

    font-size:15px;

    font-weight:700;

    margin-bottom:8px;

}

.debug-row {

    display:flex;

    justify-content:space-between;

    margin:2px 0;

}

`;