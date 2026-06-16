import { css } from 'lit';

export const cardStyles = css`
:host {
    display: block;

    width: 100%;

    --ha-card-background: transparent;
    --ha-card-border-width: 0;
    --ha-card-box-shadow: none;
}

.ha-wrapper {
    background: transparent;
    border: none;
    box-shadow: none;
    overflow: visible;
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

.scene-sun-glow {

    position: absolute;

    left: 50%;
    top: -220px;

    transition:
    left 2s ease,
    top 2s ease;

    transform: translateX(-50%);

    width: 1100px;
    height: 900px;

    background:
    radial-gradient(
        circle,
        rgba(255,220,120,0.26),
        rgba(255,220,120,0.10),
        transparent 72%
    );

    filter: blur(30px);

    pointer-events: none;

    z-index: 1;
}

.scene-sun-disc {

    position: absolute;

    width: 64px;
    height: 64px;

    border-radius: 50%;

    transform: translateX(-50%);

    background:
    radial-gradient(
        circle,
        rgba(255,230,120,1) 0%,
        rgba(255,210,80,1) 60%,
        rgba(255,180,50,0.95) 100%
    );

    box-shadow:
    0 0 20px rgba(255,210,80,0.8),
    0 0 50px rgba(255,210,80,0.5),
    0 0 70px rgba(255,210,80,0.25);

    z-index: 999;

    transition:
    left 2s ease,
    top 2s ease;
}

.solar-production-label {
    position: absolute;

    transform: translateX(-50%);

    color: white;

    font-size: 22px;
    font-weight: 700;

    text-shadow:
    0 0 8px rgba(255,220,100,0.8),
    0 0 18px rgba(255,220,100,0.4);

    z-index: 30;

    pointer-events: none;
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

.flow-layer {

    position: absolute;

    left: 0;
    top: 0;

    pointer-events: none;

    z-index: 999;
}

.flow-svg {

    position: absolute;

    left: 0;
    top: 0;

    width: 1920px;
    height: 1080px;

    overflow: visible;

    pointer-events: none;
}

.animated-flow {

    filter:
    drop-shadow(0 0 14px currentColor)
    drop-shadow(0 0 28px currentColor)
    drop-shadow(0 0 56px currentColor)
    drop-shadow(0 0 96px currentColor);

    stroke-dasharray: 44;

    animation:
    flowMove 0.7s linear infinite;
}

@keyframes flowMove {

    from {
    stroke-dashoffset: 88;
    }

    to {
    stroke-dashoffset: 0;
    }
}

.energy-node {

    opacity: 0.96;
    isolation: isolate;
    position: absolute;

    border-radius: 34px;

    overflow: hidden;

    backdrop-filter: blur(30px);

    background:
    linear-gradient(
        180deg,
        rgba(255,255,255,0.10),
        rgba(255,255,255,0.04)
    );

    border:
    1px solid rgba(255,255,255,0.10);

    box-shadow:
    0 20px 80px rgba(0,0,0,0.35),
    inset 0 1px 0 rgba(255,255,255,0.06);

    z-index: 50;

    transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
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

    border:
    1px solid rgba(120,255,180,0.30);

    box-shadow:
    0 0 50px rgba(80,255,160,0.14),
    0 20px 60px rgba(0,0,0,0.30);
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

.energy-node:hover {

    transform:
    translateY(-2px)
    scale(1.015);

    box-shadow:
    0 30px 90px rgba(0,0,0,0.45),
    0 0 40px rgba(255,255,255,0.06);
}

.node-glow {

    position: absolute;

    inset: -20%;

    background:
    radial-gradient(
        circle at center,
        rgba(255,255,255,0.12),
        transparent 70%
    );

    opacity: 0.5;

    z-index: 0;
}

.node-shimmer {

    position: absolute;

    inset: 0;

    background:
    linear-gradient(
        135deg,
        rgba(255,255,255,0.10),
        transparent 40%
    );

    opacity: 0.35;

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

.node-icon {

    width: 54px;
    height: 54px;

    display: flex;

    align-items: center;
    justify-content: center;

    color: rgba(255,255,255,0.96);

    filter:
    drop-shadow(0 0 12px currentColor);

    opacity: 0.95;

    flex-shrink: 0;
}

.energy-node.house .node-icon {

    color: #4da3ff;
}

.energy-node.battery .node-icon {

    color: #55ff88;
}

.energy-node.grid .node-icon {

    color: #ff6a6a;
}

.energy-node.car .node-icon {

    color: #b066ff;
}

.energy-node.spa .node-icon {

    color: #39cfff;
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

.solar-arc-svg {

    position: absolute;

    inset: 0;

    width: 1920px;
    height: 1080px;

    overflow: visible;

    pointer-events: none;

    z-index: 20;
}

.solar-arc-path {

    fill: none;

    stroke:
    rgba(255,220,120,0.45);

    stroke-width: 3;

    stroke-linecap: round;

    filter:
    drop-shadow(
        0 0 10px
        rgba(255,255,255,0.12)
    );
}

.solar-arc-sun {

    fill: #FFD54A;

    filter:
    drop-shadow(
        0 0 12px
        rgba(255,213,74,0.9)
    )
    drop-shadow(
        0 0 24px
        rgba(255,213,74,0.45)
    );
}

.solar-arc-time {

    fill:
    rgba(255,255,255,0.75);

    font-size: 18px;

    font-weight: 600;

    letter-spacing: 0.04em;
}

.solar-time {

    display: flex;

    align-items: center;

    gap: 8px;
}

.solar-arrow {

    color: #FFD54A;

    font-weight: 700;
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
}
`;