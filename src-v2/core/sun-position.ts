export function getSunPosition(hass: any) {
    const sun =
        hass?.states?.["sun.sun"];
    if (!sun) {
        return {
            progress: 0,
            aboveHorizon: false,
            left: 0,
            top: 0,
            sunrise: "--:--",
            sunset: "--:--",
        };
    }
    const elevation =
        Number(
            sun.attributes?.elevation ?? 0
        );
    const azimuth =
        Number(
            sun.attributes?.azimuth ?? 180
        );
    const aboveHorizon =
        sun.state === "above_horizon";

    // Progress längs bågen.
    // 90° = Soluppgång
    // 270° = Solnedgång
    const progress =
        Math.max(
            0,
            Math.min(
                1,
                (azimuth - 90) / 180
            )
        );

    // Behåll gamla värden tills vi byggt om
    // renderSolarArc().
    const left =
        progress * 100;
    const top =
        Math.max(
            40,
            280 - elevation * 6
        );

    // Sunrise / Sunset
    const sunrise =
        new Date(
            sun.attributes.next_rising
        )
        .toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit",
            }
        );
    const sunset =
        new Date(
            sun.attributes.next_setting
        )
        .toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit",
            }
        );
        
    return {
        progress,
        aboveHorizon,
        left,
        top,
        sunrise,
        sunset,
    };
}