import { html } from 'lit';

function getNumber(
  hass: any,
  entityId: string
): number {

  const state =
    hass?.states?.[entityId]?.state;

  const value =
    Number(state);

  return Number.isFinite(value)
    ? value
    : 0;
}

function formatPower(
  watts: number
): string {

  if (watts < 1000) {
    return `${Math.round(watts)} W`;
  }

  return `${(watts / 1000).toFixed(2)} kW`;
}

function formatTime(
  value?: string
): string {

  if (!value) {
    return '--:--';
  }

  const date =
    new Date(value);

  return date.toLocaleTimeString(
    [],
    {
      hour: '2-digit',
      minute: '2-digit'
    }
  );
}

export function renderSolarHub(
  layout: any,
  hass: any
) {

  const solarHouse =
    getNumber(
      hass,
      'sensor.solar_battery_economy_energy_system_power_solar_house'
    );

  const solarBattery =
    getNumber(
      hass,
      'sensor.solar_battery_economy_energy_system_power_solar_battery'
    );

  const solarExport =
    getNumber(
      hass,
      'sensor.solar_battery_economy_energy_system_power_solar_export'
    );

  const total =
    solarHouse +
    solarBattery +
    solarExport;

  const sunrise =
    hass?.states?.['sun.sun']
      ?.attributes?.next_rising;

  const sunset =
    hass?.states?.['sun.sun']
      ?.attributes?.next_setting;

  const aboveHorizon =
    hass?.states?.['sun.sun']
      ?.state === 'above_horizon';

  const solar =
    layout.nodes.solar;
  
  const cardWidth =
    solar.width;

  const cardHeight =
    solar.height;

  return html`

    <div
      class="solar-hub"
      style="
      left:${solar.x + cardWidth / 2}px;
      top:${solar.y}px;
      "
    >
      <div class="solar-hub-card">

        <div class="solar-hub-header">

          <div class="solar-hub-icon">
            ☀
          </div>

          <div class="solar-hub-title-group">

            <div class="solar-hub-label">
              SOL
            </div>

            <div class="solar-hub-subtitle">
              ${aboveHorizon
                ? 'Producerar energi'
                : 'Solen under horisonten'}
            </div>

          </div>

        </div>

        <div class="solar-hub-value">
          ${formatPower(total)}
        </div>

        <div class="solar-hub-times">

          <div class="solar-time">

            <span class="solar-arrow">
              ↑
            </span>

            <span>
              ${formatTime(sunrise)}
            </span>

          </div>

          <div class="solar-time">

            <span class="solar-arrow">
              ↓
            </span>

            <span>
              ${formatTime(sunset)}
            </span>

          </div>

        </div>

      </div>

    </div>

  `;
}