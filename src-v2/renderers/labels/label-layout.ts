/** Shrinks text that exceeds its SVG label width without enlarging short values. */
export function fitTextFontSize(
  text: string | undefined,
  baseSize: number,
  maxWidth: number,
  minimumSize = 9,
): number {
  if (!text) return baseSize;
  return Math.min(baseSize, Math.max(minimumSize, maxWidth / (text.length * 0.56)));
}

export function fitSvgText(
  text: string,
  baseSize: number,
  maxWidth: number,
  minimumSize = 9,
): { text: string; fontSize: number } {
  const fontSize = fitTextFontSize(text, baseSize, maxWidth, minimumSize);
  if (text.length * fontSize * 0.56 <= maxWidth) return { text, fontSize };
  const visibleCharacters = Math.max(1, Math.floor(maxWidth / (minimumSize * 0.56)) - 1);
  return { text: `${text.slice(0, visibleCharacters)}…`, fontSize: minimumSize };
}
