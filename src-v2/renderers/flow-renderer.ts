import { svg, nothing } from 'lit';

export function renderFlows(
  layout: any,
  liveFlows: any
) {

  const renderFlow = (
    active: boolean,
    path: string,
    color: string,
    particleColor: string,
    width = 6
  ) => {

    if (!active) {
      return nothing;
    }

    return svg`

      <g class="flow-group">

        <!-- SOFT OUTER ATMOSPHERE -->

        <path
          d="${path}"

          stroke="${color}"

          stroke-width="${width * 2.2}"

          fill="none"

          stroke-linecap="round"

          opacity="0.025"
        />

        <!-- MAIN GLOW -->

        <path
          d="${path}"

          stroke="${color}"

          stroke-width="${width * 1.2}"

          fill="none"

          stroke-linecap="round"

          opacity="0.08"
        />

        <!-- LIGHT PIPE -->

        <path
          d="${path}"

          stroke="${color}"

          stroke-width="${width}"

          fill="none"

          stroke-linecap="round"

          opacity="0.92"

          class="animated-flow"
        />

        <!-- CORE LIGHT -->

        <path
          d="${path}"

          stroke="#FFFFFF"

          stroke-width="${width * 0.14}"

          fill="none"

          stroke-linecap="round"

          opacity="0.32"
        />

        <!-- LEAD PARTICLE -->

        <circle
          r="${width * 0.22}"

          fill="#FFFFFF"

          opacity="0.95"
        >

          <animateMotion
            dur="3.4s"

            repeatCount="indefinite"

            path="${path}"
          />

        </circle>

      </g>
    `;
  };

  return svg`

    <svg
      class="flow-svg"

      viewBox="0 0 1920 1080"

      xmlns="http://www.w3.org/2000/svg"
    >

      <!-- SOLAR -> HOUSE -->

      ${renderFlow(
        liveFlows['solar-house']?.active,

        `
          M 950 180

          C
            950 260,
            950 360,
            950 520
        `,

        '#FFD54A',

        '#FFF4B0',

        11
      )}

      <!-- SOLAR -> BATTERY -->

      ${renderFlow(
        liveFlows['solar-battery']?.active,

        `
          M 980 200

          C
            1120 260,
            1320 320,
            1540 470
        `,

        '#FFD54A',

        '#FFF4B0',

        9
      )}

      <!-- SOLAR EXPORT -->

      ${renderFlow(
        liveFlows['solar-export']?.active,

        `
          M 920 200

          C
            760 260,
            540 340,
            240 470
        `,

        '#FFB347',

        '#FFE0B5',

        8
      )}

      <!-- BATTERY -> HOUSE -->

      ${renderFlow(
        liveFlows['battery-house']?.active,

        `
          M 1540 500

          C
            1380 490,
            1200 520,
            960 550
        `,

        '#63FFA2',

        '#D8FFEC',

        10
      )}

      <!-- GRID -> HOUSE -->

      ${renderFlow(
        liveFlows['grid-house']?.active,

        `
          M 240 500

          C
            420 500,
            620 520,
            960 550
        `,

        '#FF7A7A',

        '#FFD6D6',

        10
      )}

      <!-- BATTERY -> GRID -->

      ${renderFlow(
        liveFlows['battery-grid']?.active,

        `
          M 1520 490

          C
            1220 420,
            820 400,
            240 470
        `,

        '#50FFC8',

        '#CFFFF0',

        8
      )}

    </svg>
  `;
}