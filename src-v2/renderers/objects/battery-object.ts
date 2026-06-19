import { html, TemplateResult } from 'lit';

export function renderBatteryObject(): TemplateResult {

  // Tillfälligt hårdkodat.
  // Senare hämtas från battery SOC.

  const soc = 87;

  const fillHeight = (soc / 100) * 96;
  const fillY = 124 - fillHeight;

  return html`

    <svg
      viewBox="0 0 100 140"
      width="100%"
      height="100%"
    >

      <!-- Glow -->

      <defs>

        <linearGradient
          id="batteryFill"
          x1="0"
          y1="1"
          x2="0"
          y2="0"
        >

          <stop
            offset="0%"
            stop-color="#39ff88"
          />

          <stop
            offset="100%"
            stop-color="#86ffbc"
          />

        </linearGradient>

      </defs>

      <!-- Batteritopp -->

      <rect
        x="40"
        y="4"
        width="20"
        height="8"
        rx="3"
        fill="currentColor"
        opacity="0.9"
      />

      <!-- SOC Fill -->

      <rect
        x="22"
        y="${fillY}"
        width="56"
        height="${fillHeight}"
        rx="8"
        fill="url(#batteryFill)"
        opacity="0.85"
      />

      <!-- Batterihölje -->

      <rect
        x="18"
        y="12"
        width="64"
        height="116"
        rx="10"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
      />

      <!-- SOC Text -->

      <text
        x="50"
        y="78"
        text-anchor="middle"
        fill="white"
        font-size="16"
        font-weight="700"
      >
        ${soc}%
      </text>

    </svg>

  `;
}