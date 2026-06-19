import { html, TemplateResult } from 'lit';

export function renderGridObject(): TemplateResult {

  return html`

    <svg
      viewBox="0 0 100 140"
      width="100%"
      height="100%"
    >

      <!-- Mast -->

      <line
        x1="50"
        y1="18"
        x2="50"
        y2="122"
        stroke="currentColor"
        stroke-width="4"
        opacity="0.95"
      />

      <!-- Övre tvärarm -->

      <line
        x1="26"
        y1="36"
        x2="74"
        y2="36"
        stroke="currentColor"
        stroke-width="3"
        opacity="0.9"
      />

      <!-- Nedre tvärarm -->

      <line
        x1="32"
        y1="64"
        x2="68"
        y2="64"
        stroke="currentColor"
        stroke-width="3"
        opacity="0.9"
      />

      <!-- Stag vänster -->

      <line
        x1="50"
        y1="18"
        x2="26"
        y2="36"
        stroke="currentColor"
        stroke-width="2"
        opacity="0.8"
      />

      <line
        x1="50"
        y1="18"
        x2="74"
        y2="36"
        stroke="currentColor"
        stroke-width="2"
        opacity="0.8"
      />

      <!-- Stag mitten -->

      <line
        x1="26"
        y1="36"
        x2="40"
        y2="64"
        stroke="currentColor"
        stroke-width="2"
        opacity="0.8"
      />

      <line
        x1="74"
        y1="36"
        x2="60"
        y2="64"
        stroke="currentColor"
        stroke-width="2"
        opacity="0.8"
      />

      <!-- Ben -->

      <line
        x1="50"
        y1="122"
        x2="34"
        y2="136"
        stroke="currentColor"
        stroke-width="3"
      />

      <line
        x1="50"
        y1="122"
        x2="66"
        y2="136"
        stroke="currentColor"
        stroke-width="3"
      />

      <!-- Energinod -->

      <circle
        cx="50"
        cy="50"
        r="6"
        fill="currentColor"
        opacity="0.9"
      />

    </svg>

  `;
}