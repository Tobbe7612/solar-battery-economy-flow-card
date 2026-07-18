import { html, TemplateResult } from "lit";

function formatPower(power: number): string {

    const abs = Math.abs(power);

    if (abs >= 1000) {
        return `${(power / 1000).toFixed(2)} kW`;
    }

    return `${Math.round(power)} W`;
}

export function renderDebugPanel(
    liveFlows: any
): TemplateResult {

    const rows = Object.entries(liveFlows)

        .filter(([, flow]: any) =>
            flow.active ||
            Math.abs(flow.power ?? 0) > 1
        )

        .sort((a: any, b: any) =>
            Math.abs((b[1].power ?? 0)) -
            Math.abs((a[1].power ?? 0))
        );

    return html`

        <div class="debug-panel">

            <div class="debug-title">
                Flow Debug
            </div>

            ${rows.map(([id, flow]: any) => html`

                <div class="debug-row">

                    <span>

                        ${flow.active ? "🟢" : "⚫"}

                        ${id}

                    </span>

                    <span>

                        ${formatPower(flow.power ?? 0)}

                    </span>

                </div>

            `)}

        </div>

    `;

}