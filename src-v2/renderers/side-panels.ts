import { html } from 'lit';

import { EnergyData }
  from '../types/energy-data';

import { SceneLayout }
  from '../types/layout';

export function renderSidePanels(
  data: EnergyData,
  layout: SceneLayout
)
{
  return html`

    <div
      class="side-panel side-left"
      style="
        left:${layout.panels.left.x}px;
        top:${layout.panels.left.y}px;
      "
    >

      <div class="side-title">
        ☀ ENERGY
      </div>

      <div class="side-metric">
        <div class="side-label">
          SOLENERGI
        </div>

        <div class="side-value value-solar">
          ${data.solarEnergy.toFixed(0)} kWh
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          BATTERI → HUS
        </div>

        <div class="side-value value-battery">
          ${data.batteryToHouse.toFixed(0)} kWh
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          SOLEXPORT
        </div>

        <div class="side-value value-export">
          ${data.solarExportEnergy.toFixed(0)} kWh
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          NÄT → HUS
        </div>

        <div class="side-value value-grid">
          ${data.gridToHouseEnergy.toFixed(0)} kWh
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          SYSTEMVERKNINGSGRAD
        </div>

        <div class="side-value value-battery">
          ${data.systemEfficiency.toFixed(0)} %
        </div>
      </div>

    </div>

    <div
      class="side-panel side-right"
      style="
        left:${layout.panels.right.x}px;
        top:${layout.panels.right.y}px;
      "
    >

      <div class="side-title">
        💰 FINANCE
      </div>

      <div class="side-metric">
        <div class="side-label">
          BESPARING IDAG
        </div>

        <div class="side-value value-money">
          ${data.savingsToday.toFixed(2)} kr
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          TOTAL BESPARING
        </div>

        <div class="side-value value-total">
          ${data.totalSavings.toFixed(0)} kr
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          NÄTOBEROENDE
        </div>

        <div class="side-value value-independence">
          ${data.gridIndependence.toFixed(0)} %
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          CO₂ SPARAT
        </div>

        <div class="side-value value-co2">
          ${data.co2Saved.toFixed(0)} kg
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          SJÄLVFÖRSÖRJNING
        </div>

        <div class="side-value value-independence">
          ${data.selfSufficiency.toFixed(0)} %
        </div>
      </div>

    </div>

  `;
}