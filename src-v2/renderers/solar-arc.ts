import { svg } from 'lit';
import { SceneLayout } from "../types/layout";
function getQuadraticBezierPoint(
    t: number,
    p0: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number }
) {
    const mt = 1 - t;

    return {
        x:
            mt * mt * p0.x +
            2 * mt * t * p1.x +
            t * t * p2.x,

        y:
            mt * mt * p0.y +
            2 * mt * t * p1.y +
            t * t * p2.y,
    };
}
export function renderSolarArc(
  sunPosition: {
    progress: number;
    aboveHorizon: boolean;
    left: number;
    top: number;
    sunrise: string;
    sunset: string;
  },
  layout: SceneLayout
) {
  const {
      centerX,
      centerY,
      width: arcWidth,
      height: arcHeight,
      sunRadius,
  } = layout.solarArc;
  const start = {
      x: centerX - arcWidth / 2,
      y: centerY + arcHeight,
  };
  const control = {
      x: centerX,
      y: centerY - 20,
  };
  const end = {
      x: centerX + arcWidth / 2,
      y: centerY + arcHeight,
  };
  const sun = getQuadraticBezierPoint(
      sunPosition.progress,
      start,
      control,
      end
  );
  return svg`
    <svg
      class="solar-arc-svg"
      viewBox="0 0 1920 1080"
    >
      <path
        d="
          M ${centerX - arcWidth / 2}
            ${centerY + arcHeight}

          Q ${centerX}
            ${centerY - 20}

            ${centerX + arcWidth / 2}
            ${centerY + arcHeight}
        "
        class="solar-arc-path"
      />
      ${sunPosition.aboveHorizon
          ? svg`
              <circle
                  cx="${sun.x}"
                  cy="${sun.y}"
                  r="${sunRadius}"
                  class="solar-arc-sun"
              />
          `
          : svg``}
      <text
          x="${centerX - arcWidth / 2}"
          y="${centerY + arcHeight + 28}"
          text-anchor="start"
          class="solar-arc-time"
      >
          ${sunPosition.sunrise}
      </text>
      <text
          x="${centerX + arcWidth / 2}"
          y="${centerY + arcHeight + 28}"
          text-anchor="end"
          class="solar-arc-time"
      >
          ${sunPosition.sunset}
      </text>
    </svg>
  `;
}