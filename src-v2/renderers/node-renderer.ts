import { html, nothing } from 'lit';
import { icons } from './icons';

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

  const abs = Math.abs(watts);

  if (abs < 1000) {
    return `${Math.round(watts)} W`;
  }

  return `${(watts / 1000).toFixed(2)} kW`;
}

function formatPercent(
  value: number
): string {

  return `${Math.round(value)}%`;
}

export function renderNodes(
  layout: any,
  hass: any
) {

  return Object.values(layout.nodes).map(
    (node: any) => {

      if (node.id === 'solar') {
        return nothing;
      }

      let status = '';
      let primary = '';
      let secondary = '';
      let nodeClass = '';

      //
      // HOUSE
      //

      if (node.id === 'house') {

        const solarHouse =
          getNumber(
            hass,
            'sensor.solar_battery_economy_energy_system_power_solar_house'
          );

        const batteryHouse =
          getNumber(
            hass,
            'sensor.solar_battery_economy_energy_system_power_battery_house'
          );

        const gridHouse =
          getNumber(
            hass,
            'sensor.solar_battery_economy_energy_system_power_grid_house'
          );

        const total =
          solarHouse +
          batteryHouse +
          gridHouse;

        status = 'Förbrukning';

        primary =
          formatPower(total);
      }

      //
      // BATTERY
      //

      else if (node.id === 'battery') {

        const soc =
          getNumber(
            hass,
            'sensor.saj_battery_energy_percent'
          );

        const solarBattery =
          getNumber(
            hass,
            'sensor.solar_battery_economy_energy_system_power_solar_battery'
          );

        const gridBattery =
          getNumber(
            hass,
            'sensor.solar_battery_economy_energy_system_power_grid_battery'
          );

        const batteryHouse =
          getNumber(
            hass,
            'sensor.solar_battery_economy_energy_system_power_battery_house'
          );

        const batteryGrid =
          getNumber(
            hass,
            'sensor.solar_battery_economy_energy_system_power_battery_grid'
          );

        const chargePower =
          solarBattery +
          gridBattery;

        const dischargePower =
          batteryHouse +
          batteryGrid;

        if (chargePower > 1) {

          status = 'Laddar';

          primary =
            formatPower(chargePower);

          secondary =
            formatPercent(soc);
        }
        else if (dischargePower > 1) {

          status = 'Urladdar';

          primary =
            formatPower(dischargePower);

          secondary =
            formatPercent(soc);
        }
        else {

          status = 'Viloläge';

          primary = '0 W';

          secondary =
            formatPercent(soc);
        }
      }

      //
      // GRID
      //

      else if (node.id === 'grid') {

        const gridImport =
          getNumber(
            hass,
            'sensor.solar_battery_economy_energy_system_power_grid_house'
          ) +
          getNumber(
            hass,
            'sensor.solar_battery_economy_energy_system_power_grid_battery'
          );

        const gridExport =
          getNumber(
            hass,
            'sensor.solar_battery_economy_energy_system_power_solar_export'
          ) +
          getNumber(
            hass,
            'sensor.solar_battery_economy_energy_system_power_battery_grid'
          );

        if (gridImport > 1) {

          status = '→ Import';

          primary =
            formatPower(gridImport);

          secondary = '';
        }
        else if (gridExport > 1) {

          status = '← Export';

          primary =
            formatPower(gridExport);

          secondary = '';
        }
        else {

          status = 'Balans';

          primary = '0 W';

          secondary = '';
        }
      }

      //
      // CAR
      //

      else if (node.id === 'car') {

        nodeClass = 'secondary';

        const soc =
          getNumber(
            hass,
            'sensor.volvo_ec40_batteri'
          );

        const power =
          getNumber(
            hass,
            'sensor.charger_lindv_26_2006011626m_1_power'
          );

        primary =
          formatPower(power);

        secondary =
          formatPercent(soc);

        status =
          power > 1
            ? 'Laddar'
            : 'Ansluten';
      }

      //
      // SPA
      //

      else if (node.id === 'spa') {

        nodeClass = 'secondary';

        const power =
          getNumber(
            hass,
            'sensor.plugg_spabad_power'
          );

        if (power > 1) {

          status = 'Aktiv';

          primary =
            formatPower(power);
        }
        else {

          status = 'Ej aktiv';

          primary = '--';
        }
      }

      //
      // HEATPUMP
      //

      else if (node.id === 'heatpump') {

        nodeClass = 'secondary';

        const power =
          getNumber(
            hass,
            'sensor.thermia_power_estimator_total_effekt'
          );

        primary =
          formatPower(power);

        status =
          power > 1
            ? 'Aktiv'
            : 'Vilande';
      }

      //
      // APPLIANCE
      //

      else if (node.id === 'appliance') {

        nodeClass = 'secondary';

        const power =
          getNumber(
            hass,
            'sensor.plugg_spabad_power'
          );

        if (power > 1) {

          status = 'Aktiv';

          primary =
            formatPower(power);
        }
        else {

          status = 'Ej aktiv';

          primary = '--';
        }
      }

      return html`

        <div
          class="energy-node ${node.id} ${nodeClass}"

          style="
            left:${node.x}px;
            top:${node.y}px;
            width:${node.width}px;
            height:${node.height}px;
          "
        >

          <div class="node-shimmer"></div>

          <div class="node-glow"></div>

          <div class="node-inner">

            <div class="node-header">

              <div class="node-icon">
                ${icons[node.id as keyof typeof icons]}
              </div>

              <div class="node-text">

                <div class="node-title">
                  ${node.label}
                </div>

                <div class="node-status">
                  ${status}
                </div>

              </div>

            </div>

            <div class="node-value">
              ${primary}
            </div>

            ${secondary
              ? html`
                  <div class="node-secondary">
                    ${secondary}
                  </div>
                `
              : nothing}

          </div>

        </div>
      `;
    }
  );
}