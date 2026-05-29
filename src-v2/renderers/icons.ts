import { html } from 'lit';

export const icons = {

  solar: html`
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4.5"
        stroke="currentColor"
        stroke-width="1.8"/>
      <path d="M12 1.5v3" stroke="currentColor" stroke-width="1.8"/>
      <path d="M12 19.5v3" stroke="currentColor" stroke-width="1.8"/>
      <path d="M1.5 12h3" stroke="currentColor" stroke-width="1.8"/>
      <path d="M19.5 12h3" stroke="currentColor" stroke-width="1.8"/>
      <path d="M4.2 4.2l2.2 2.2" stroke="currentColor" stroke-width="1.8"/>
      <path d="M17.6 17.6l2.2 2.2" stroke="currentColor" stroke-width="1.8"/>
      <path d="M19.8 4.2l-2.2 2.2" stroke="currentColor" stroke-width="1.8"/>
      <path d="M6.4 17.6l-2.2 2.2" stroke="currentColor" stroke-width="1.8"/>
    </svg>
  `,

  house: html`
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M4 10.5L12 4l8 6.5"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.5 9.5V20h11V9.5"
        stroke="currentColor"
        stroke-width="1.8"
      />
    </svg>
  `,

  battery: html`
    <svg viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="7"
        width="17"
        height="10"
        rx="2"
        stroke="currentColor"
        stroke-width="1.8"
      />
      <rect
        x="20"
        y="10"
        width="2"
        height="4"
        rx="1"
        fill="currentColor"
      />
    </svg>
  `,

  grid: html`
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L18 8H14V22H10V8H6L12 2Z"
        fill="currentColor"
      />
    </svg>
  `,

  car: html`
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M6 16h12"
        stroke="currentColor"
        stroke-width="1.8"
      />
      <path
        d="M8 8h8l2 5H6l2-5Z"
        stroke="currentColor"
        stroke-width="1.8"
      />
      <circle cx="8" cy="18" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="18" r="1.5" fill="currentColor"/>
    </svg>
  `,

  spa: html`
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M5 16c2-1 4-1 6 0s4 1 8 0"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />
      <path
        d="M9 6c0 1-.8 1.6-.8 2.6"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />
      <path
        d="M12 4c0 1-.8 1.6-.8 2.6"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />
      <path
        d="M15 6c0 1-.8 1.6-.8 2.6"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />
    </svg>
  `
};