import { svg, nothing } from 'lit';

export function formatPower(
  watts: number
): string {

  const abs = Math.abs(watts);

  if (abs < 1000) {
    return `${Math.round(watts)} W`;
  }

  return `${(watts / 1000).toFixed(1)} kW`;
}

export function pipeManhattan(
  points: Array<{ x: number; y: number }>,
  radius = 40
): string {

  if (points.length < 2) {
    return '';
  }

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length - 1; i++) {

    const prev = points[i - 1];
    const curr = points[i];
    const next = points[i + 1];

    const dx1 = curr.x - prev.x;
    const dy1 = curr.y - prev.y;

    const dx2 = next.x - curr.x;
    const dy2 = next.y - curr.y;

    const enterX =
      curr.x - Math.sign(dx1) * radius;

    const enterY =
      curr.y - Math.sign(dy1) * radius;

    const exitX =
      curr.x + Math.sign(dx2) * radius;

    const exitY =
      curr.y + Math.sign(dy2) * radius;

    path += `
      L ${enterX} ${enterY}
      Q ${curr.x} ${curr.y}
        ${exitX} ${exitY}
    `;
  }

  const last =
    points[points.length - 1];

  path += `
    L ${last.x} ${last.y}
  `;

  return path;
}

export function renderFlow(
  active: boolean,
  path: string,
  color: string,
  particleColor: string,
  width = 6,
  power = 0,
  labelX?: number,
  labelY?: number,
  labelFontSize = 18
) {

  if (!active) {
    return nothing;
  }

  const absPower = Math.abs(power);

  const pathLength =
    Math.max(
      100,
      path.length * 0.9
    );

  const requestedParticles =
    absPower < 50 ? 2 :
    absPower < 300 ? 4 :
    absPower < 1000 ? 6 :
    absPower < 3000 ? 8 :
    12;

  const maxParticlesForLength =
    Math.max(
      2,
      Math.floor(pathLength / 80)
    );

  const particleCount =
    Math.min(
      requestedParticles,
      maxParticlesForLength
    );

  const particleDuration =
    absPower < 50 ? 6.0 :
    absPower < 300 ? 5.0 :
    absPower < 1000 ? 4.0 :
    absPower < 3000 ? 3.2 :
    2.4;

  const particleOffsets =
    Array.from(
      { length: particleCount },
      (_, i) => -(i * (particleDuration / particleCount))
    );

  return svg`
    <g class="flow-group">

      <path
        d="${path}"
        stroke="${color}"
        stroke-width="${width * 2.2}"
        fill="none"
        stroke-linecap="round"
        opacity="0.03"
      />

      <path
        d="${path}"
        stroke="${color}"
        stroke-width="${width * 1.3}"
        fill="none"
        stroke-linecap="round"
        opacity="0.05"
      />

      <path
        d="${path}"
        stroke="${color}"
        stroke-width="${width * 0.25}"
        fill="none"
        stroke-linecap="round"
        opacity="0.10"
        class="animated-flow"
      />

      <path
        d="${path}"
        stroke="#FFFFFF"
        stroke-width="${width * 0.14}"
        fill="none"
        stroke-linecap="round"
        opacity="0.32"
      />

      ${particleOffsets.map(offset => svg`

        <circle
          r="${width * 0.60}"
          fill="${color}"
          opacity="0.20"
        >
          <animateMotion
            begin="${offset}s"
            dur="${particleDuration}s"
            repeatCount="indefinite"
            path="${path}"
          />
        </circle>

        <circle
          r="${width * 0.16}"
          fill="#FFFFFF"
          opacity="1"
        >
          <animateMotion
            begin="${offset}s"
            dur="${particleDuration}s"
            repeatCount="indefinite"
            path="${path}"
          />
        </circle>

      `)}

      ${labelX !== undefined &&
      labelY !== undefined
        ? svg`
            <text
              x="${labelX}"
              y="${labelY}"
              fill="rgba(255,255,255,0.96)"
              text-anchor="middle"
              dominant-baseline="middle"
              font-size="${labelFontSize}"
              font-weight="600"
              paint-order="stroke"
              stroke="rgba(0,0,0,0.55)"
              stroke-width="2"
              stroke-linejoin="round"
              opacity="0.95"
            >
              ${formatPower(power)}
            </text>
          `
        : nothing}

    </g>
  `;
}

export function pipeHorizontal(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  radius = 40
): string {

  const midX = (x1 + x2) / 2;

  return `
    M ${x1} ${y1}

    L ${midX - radius} ${y1}

    Q ${midX} ${y1}
      ${midX} ${y1 + radius}

    L ${midX} ${y2 - radius}

    Q ${midX} ${y2}
      ${midX + radius} ${y2}

    L ${x2} ${y2}
  `;
}

export function pipeVertical(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  radius = 40
): string {

  const midY = (y1 + y2) / 2;

  return `
    M ${x1} ${y1}

    L ${x1} ${midY - radius}

    Q ${x1} ${midY}
      ${x1 + radius} ${midY}

    L ${x2 - radius} ${midY}

    Q ${x2} ${midY}
      ${x2} ${midY + radius}

    L ${x2} ${y2}
  `;
}

export function pipeLine(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): string {

  return `
    M ${x1} ${y1}
    L ${x2} ${y2}
  `;
}