import { css } from "lit";

export const flowStyles = css`
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
`;