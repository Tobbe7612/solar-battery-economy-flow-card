import { svg, TemplateResult } from "lit";

export function renderParticleDefs(): TemplateResult {

    return svg`

        <defs>

            <radialGradient
                id="energy-core"
                cx="50%"
                cy="50%"
                r="50%">

                <stop
                    offset="0%"
                    stop-color="#FFFFFF"
                    stop-opacity="1"/>

                <stop
                    offset="35%"
                    stop-color="#FFFFFF"
                    stop-opacity="0.95"/>

                <stop
                    offset="100%"
                    stop-color="#FFFFFF"
                    stop-opacity="0"/>

            </radialGradient>

            <filter
                id="energy-glow"
                x="-350%"
                y="-350%"
                width="800%"
                height="800%"
                color-interpolation-filters="sRGB">

                <!-- Mjuk yttre halo -->
                <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="7"
                    result="outerGlow"/>

                <!-- Mellanglow -->
                <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="3"
                    result="innerGlow"/>

                <feMerge>

                    <feMergeNode in="outerGlow"/>

                    <feMergeNode in="innerGlow"/>

                    <feMergeNode in="SourceGraphic"/>

                </feMerge>

            </filter>

            <linearGradient
                id="energy-packet-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%">

                <stop
                    offset="0%"
                    stop-color="#FFFFFF"
                    stop-opacity="0.08"/>

                <stop
                    offset="20%"
                    stop-color="#FFFFFF"
                    stop-opacity="0.30"/>

                <stop
                    offset="55%"
                    stop-color="#FFFFFF"
                    stop-opacity="0.78"/>

                <stop
                    offset="82%"
                    stop-color="#FFFFFF"
                    stop-opacity="1"/>

                <stop
                    offset="100%"
                    stop-color="#FFFFFF"
                    stop-opacity="0.82"/>

            </linearGradient>

        </defs>

    `;

}