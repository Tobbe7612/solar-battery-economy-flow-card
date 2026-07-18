export interface ParticleProfile {

    particleCount: number;

    duration: number;

    flowWidth: number;

    trailOpacity: number;

    glowOpacity: number;

    coreOpacity: number;

}

export function getParticleProfile(
    power: number
): ParticleProfile {

    const p = Math.abs(power);

    if (p < 300) {

        return {

            particleCount: 2,

            duration: 6.0,

            flowWidth: 5,

            trailOpacity: 0.18,

            glowOpacity: 0.35,

            coreOpacity: 1.0,

        };

    }

    if (p < 800) {

        return {

            particleCount: 3,

            duration: 5.2,

            flowWidth: 6,

            trailOpacity: 0.20,

            glowOpacity: 0.42,

            coreOpacity: 1.0,

        };

    }

    if (p < 1500) {

        return {

            particleCount: 4,

            duration: 4.4,

            flowWidth: 7,

            trailOpacity: 0.22,

            glowOpacity: 0.48,

            coreOpacity: 1.0,

        };

    }

    if (p < 3000) {

        return {

            particleCount: 6,

            duration: 3.7,

            flowWidth: 8,

            trailOpacity: 0.25,

            glowOpacity: 0.55,

            coreOpacity: 1.0,

        };

    }

    if (p < 5000) {

        return {

            particleCount: 8,

            duration: 3.0,

            flowWidth: 9,

            trailOpacity: 0.28,

            glowOpacity: 0.62,

            coreOpacity: 1.0,

        };

    }

    return {

        particleCount: 10,

        duration: 2.2,

        flowWidth: 10,

        trailOpacity: 0.30,

        glowOpacity: 0.70,

        coreOpacity: 1.0,

    };

}