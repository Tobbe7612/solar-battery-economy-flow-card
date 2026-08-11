import { svg } from 'lit';
import { SceneLayout } from "../types/layout";
import { DESKTOP_LABELS } from "./labels/desktop-labels";
import { MOBILE_LABELS } from "./labels/mobile-labels";
import { getSolarAnimationProfile } from "../core/animation-profile";
import { renderSolarParticles, renderSunRays } from "./solar-particles";
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
  layout: SceneLayout,
  solarPower: number
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

  const labels =
      layout.sceneWidth < 1000
          ? MOBILE_LABELS
          : DESKTOP_LABELS;

  const solarLabel = labels.find(l => l.id === "solar")!;

  const solarLabelAnchor = {
      x: solarLabel.x + solarLabel.width / 2,
      y: solarLabel.y,
  };

  const solarParticleProfile = getSolarAnimationProfile(solarPower);

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
      ${renderSolarParticles(
          sun,
          solarLabelAnchor,
          solarParticleProfile,
      )}
      ${renderSunRays(
          sun,
          solarParticleProfile.particleCount,
      )}
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