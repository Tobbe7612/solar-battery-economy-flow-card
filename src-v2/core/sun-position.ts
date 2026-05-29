export function getSunPosition(hass: any) {

  const sun =
    hass?.states?.['sun.sun'];

  const elevation =
    Number(
      sun?.attributes?.elevation ?? 0
    );

  const azimuth =
    Number(
      sun?.attributes?.azimuth ?? 180
    );

  const left =
    Math.max(
      8,
      Math.min(
        92,
        (azimuth / 360) * 100
      )
    );

  const top =
    Math.max(
      40,
      280 - elevation * 6
    );

  return {
    left,
    top
  };
}