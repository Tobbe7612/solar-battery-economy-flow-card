import { html, TemplateResult } from 'lit';

export function renderBatteryObject(): TemplateResult {

  return html`

    <svg
      viewBox="0 0 100 140"
      width="100%"
      height="100%"
    >

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

      <!-- Ytterhölje -->

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

      <!-- Övre sektion -->

      <rect
        x="26"
        y="22"
        width="48"
        height="34"
        rx="4"
        fill="currentColor"
        opacity="0.12"
      />

      <!-- Mittsektion -->

      <rect
        x="26"
        y="62"
        width="48"
        height="24"
        rx="4"
        fill="currentColor"
        opacity="0.18"
      />

      <!-- Nedre sektion -->

      <rect
        x="26"
        y="92"
        width="48"
        height="24"
        rx="4"
        fill="currentColor"
        opacity="0.12"
      />

    </svg>
  `;
}