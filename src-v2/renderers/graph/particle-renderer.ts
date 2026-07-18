import { svg, TemplateResult } from "lit";

import { ParticleProfile } from "./particle-profile";

function renderPacket(
    path: string,
    color: string,
    begin: number,
    duration: number,
    profile: ParticleProfile,
    intensity: number
): TemplateResult {

    return svg`

        <!-- Energy Trail -->

        <ellipse

            rx="7.0"

            ry="0.7"

            fill="${color}"

            opacity="${profile.trailOpacity * 0.04}"

            filter="url(#energy-glow)"

        >

            <animateMotion

                dur="${duration}s"

                begin="${begin}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${path}"

            />

        </ellipse>

        <ellipse

            rx="4.5"

            ry="0.45"

            fill="${color}"

            opacity="${profile.trailOpacity * 0.18}"

        >

            <animateMotion

                dur="${duration}s"

                begin="${begin}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${path}"

            />

        </ellipse>

        <!-- Conduit Flash -->

        <ellipse

            rx="14"

            ry="3.2"

            fill="#FFFFFF"

            opacity="0.08"

            filter="url(#energy-glow)"

        >

            <animateMotion

                dur="${duration}s"

                begin="${begin}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${path}"

            />

            <animate

                attributeName="opacity"

                values="0.02;0.10;0.04;0.10;0.02"

                dur="1.8s"

                repeatCount="indefinite"

            />

        </ellipse>
        
        <!-- Packet Halo -->

        <ellipse

            rx="7.8"

            ry="2.7"

            fill="${color}"

            opacity="${profile.trailOpacity * 0.12 * intensity}"

            filter="url(#energy-glow)"

        >

            <animateMotion

                dur="${duration}s"

                begin="${begin}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${path}"

            />

        <animate

            attributeName="opacity"

            values="0.08;0.13;0.08"

            dur="2.4s"

            repeatCount="indefinite"

        />

        <animate

            attributeName="rx"

            values="7.6;8.1;7.6"

            dur="2.2s"

            repeatCount="indefinite"

        />

        </ellipse>
        

        <!-- Packet Body -->
        <ellipse

            rx="8.8"

            ry="2.3"

            fill="${color}"

            opacity="0.82"

        >

            <animateMotion

                dur="${duration}s"

                begin="${begin}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${path}"

            />
            <animate

                attributeName="opacity"

                values="0.88;1;0.94;1;0.88"

                dur="1.6s"

                repeatCount="indefinite"

            />

        </ellipse>

        <ellipse

            rx="8.6"

            ry="2.15"

            fill="url(#energy-packet-gradient)"

            opacity="${0.92 * intensity}"

        >

            <animateMotion

                dur="${duration}s"

                begin="${begin}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${path}"

            />

        <animate

            attributeName="opacity"

            values="0.90;1;0.92;1;0.90"

            dur="1.8s"

            repeatCount="indefinite"

        />

        </ellipse>

        <!-- Packet Core -->

        <ellipse

            rx="4.8"

            ry="1.05"

            fill="#FFFFFF"

            opacity="1"

        >

            <animateMotion

                dur="${duration}s"

                begin="${begin}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${path}"

            />

            <animate

                attributeName="rx"

                values="4.6;5.0;4.6"

                dur="1.6s"

                repeatCount="indefinite"

            />

            <animate

                attributeName="ry"

                values="0.95;1.10;0.95"

                dur="1.6s"

                repeatCount="indefinite"

            />

        </ellipse>

        <!-- Packet Hotspot -->

        <circle

            r="1.65"

            fill="#FFFFFF"

            opacity="1"

        >

            <animateMotion

                dur="${duration}s"

                begin="${begin}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${path}"

            />

        <animate

            attributeName="r"

            values="1.55;1.85;1.55"

            dur="1.4s"

            repeatCount="indefinite"

        />

        </circle>

    `;
}

export function renderParticles(
    path: string,
    color: string,
    profile: ParticleProfile
): TemplateResult {

    const duration = Math.max(0.35, profile.duration * 0.82);

    return svg`

        ${Array.from({

            length: profile.particleCount

        }).map((_, index) => {

            const spacing = [
                0.00,
                0.18,
                0.41,
                0.63,
                0.84,
                1.00,
                1.19,
                1.43,
                1.66,
                1.88,
            ];

            const begin = -(
                spacing[index % spacing.length] *
                duration
            );

            const intensities = [
                1.00,
                0.93,
                0.98,
                0.88,
                0.96,
                1.00,
                0.91,
                0.97,
            ];

            return svg`

                <g class="energy-particle">

                    ${renderPacket(
                        path,
                        color,
                        begin,
                        duration,
                        profile,
                        intensities[index % intensities.length]
                    )}

                </g>

            `;

        })}

    `;

}