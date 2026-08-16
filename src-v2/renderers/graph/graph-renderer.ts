import { svg, TemplateResult } from "lit";
import { createFlowGraph } from "./flow-graph";
import { renderEdgeV2 } from "./render-edge-v2";
import { renderParticleDefs } from "./particle-defs";
import { LiveFlow } from "../../core/energy-model";


import { FlowDefinition } from "./flow-types";

export function renderGraph(
    ports: any,
    liveFlows: Record<string, LiveFlow>,
    flowDefinitions: FlowDefinition[],
): TemplateResult {
    const graph = createFlowGraph(
        ports,
        liveFlows,
        flowDefinitions,
    );
    return svg`

        ${renderParticleDefs()}
        <g class="graph-engine">
            ${graph.map(edge => renderEdgeV2(edge))}
        </g>
    `;
}