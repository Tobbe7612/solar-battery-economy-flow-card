import { html, TemplateResult } from 'lit';

export function renderHouseObject(): TemplateResult {

  return html`

    <svg
      viewBox="0 0 120 120"
      width="100%"
      height="100%"
    >

      <!-- Tak -->

      <polygon
        points="60,20 20,52 100,52"
        fill="currentColor"
        opacity="0.22"
      />

      <!-- Huskropp -->

      <rect
        x="28"
        y="52"
        width="64"
        height="44"
        rx="4"
        fill="currentColor"
        opacity="0.14"
      />

      <!-- Dörr -->

      <rect
        x="54"
        y="68"
        width="12"
        height="28"
        rx="2"
        fill="currentColor"
        opacity="0.55"
      />

      <!-- Fönster vänster -->

      <rect
        x="36"
        y="62"
        width="10"
        height="10"
        rx="2"
        fill="currentColor"
        opacity="0.45"
      />

      <!-- Fönster höger -->

      <rect
        x="74"
        y="62"
        width="10"
        height="10"
        rx="2"
        fill="currentColor"
        opacity="0.45"
      />

      <!-- Kontur -->

      <polygon
        points="60,20 20,52 20,96 100,96 100,52"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
      />

    </svg>

  `;
}