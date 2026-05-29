import { html } from 'lit';
import { icons } from './icons';

export function renderNodes(layout: any) {

  return Object.values(layout.nodes).map((node: any) => {

    const value =
      node.id === 'solar'
        ? '5.2 kW'
        : node.id === 'battery'
        ? '82%'
        : node.id === 'house'
        ? '2.8 kW'
        : node.id === 'grid'
        ? '0.4 kW'
        : node.id === 'car'
        ? '78%'
        : node.id === 'spa'
        ? '1.1 kW'
        : '';

    const status =
      node.id === 'solar'
        ? 'Producing'
        : node.id === 'battery'
        ? 'Charging'
        : node.id === 'house'
        ? 'Consuming'
        : node.id === 'grid'
        ? 'Importing'
        : node.id === 'car'
        ? 'Charging'
        : node.id === 'spa'
        ? 'Heating'
        : '';

    return html`

      <div
        class="energy-node ${node.id}"

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

          <div class="node-icon">
            ${icons[node.id as keyof typeof icons]}
          </div>

          <div class="node-title">
            ${node.label}
          </div>

          <div class="node-value">
            ${value}
          </div>

          <div class="node-status">
            ${status}
          </div>

        </div>

      </div>
    `;
  });
}