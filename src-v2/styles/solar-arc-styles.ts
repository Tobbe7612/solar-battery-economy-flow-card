import { css } from "lit";

export const solarArcStyles = css`

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
`;