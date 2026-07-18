import { css } from "lit";

export const batteryStyles = css`

.battery-overlay {

    position: absolute;

    left: 1120px;
    top: 585px;

    width: 90px;

    text-align: center;

    pointer-events: none;

    user-select: none;
}

.battery-soc {

    color: #61ff8b;

    font-size: 36px;
    font-weight: 700;

    line-height: 1;

    text-shadow:
        0 0 8px rgba(0,0,0,.70),
        0 0 18px rgba(97,255,139,.20);
}

.battery-power {

    margin-top: 6px;

    color: rgba(255,255,255,.92);

    font-size: 15px;
    font-weight: 500;

    text-shadow:
        0 0 6px rgba(0,0,0,.70);
}

`;