export function pipeManhattan(
  points: Array<{ x: number; y: number }>,
  radius = 20
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
