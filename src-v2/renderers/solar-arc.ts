import { svg } from 'lit';

export function renderSolarArc(
  sunPosition: {
    left: number;
    top: number;
  }
) {

  const arcWidth = 1300;
  const arcHeight = 220;

  const centerX = 960;
  const centerY = -20;

  const sunX =
    centerX +
    arcWidth / 2 -
    (arcWidth * sunPosition.left) / 100;

  const radius =
    arcWidth / 2;

  const normalized =
    (sunX - (centerX - radius)) /
    (radius * 2);

  const sunY =
    centerY +
    arcHeight -
    Math.sin(
      normalized * Math.PI
    ) *
    arcHeight +
    60;

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

      <circle
        cx="${sunX}"
        cy="${sunY}"
        r="16"
        class="solar-arc-sun"
      />

      ${[
          { hour: '21:00', pos: 0 },
          { hour: '18:00', pos: 0.1 },
          { hour: '15:00', pos: 0.3 },
          { hour: '12:00', pos: 0.5 },
          { hour: '09:00', pos: 0.8 },
          { hour: '06:00', pos: 1.0 }
        ].map(
        (marker) => svg`

            <text
            x="${
                centerX -
                arcWidth / 2 +
                arcWidth * marker.pos
            }"
            y="${centerY + arcHeight + 20}"
            text-anchor="middle"
            class="solar-arc-time"
            >
            ${marker.hour}
            </text>

        `
        )}

    </svg>

  `;
}