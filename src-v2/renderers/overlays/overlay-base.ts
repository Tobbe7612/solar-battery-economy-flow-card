import { html, TemplateResult } from "lit";

export interface OverlayConfig {

    x: number;
    y: number;

    width: number;
    height: number;

    title: string;
    value: string;
    subtitle?: string;

    color?: string;
    opacity?: number;
}

export function renderOverlay(
    config: OverlayConfig
): TemplateResult {

    return html`

        <div
            style="
                position:absolute;

                left:${config.x}px;
                top:${config.y}px;

                width:${config.width}px;
                height:${config.height}px;

                border-radius:18px;

                backdrop-filter:blur(12px);
                background:rgba(20,24,30,0.45);

                border:1px solid rgba(255,255,255,0.10);

                color:white;

                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;

                pointer-events:none;

                opacity:${config.opacity ?? 1};
            "
        >

            <div
                style="
                    font-size:11px;
                    opacity:.75;
                    text-transform:uppercase;
                    letter-spacing:1px;
                "
            >
                ${config.title}
            </div>

            <div
                style="
                    margin-top:6px;

                    font-size:34px;
                    font-weight:700;

                    color:${config.color ?? "#ffffff"};
                "
            >
                ${config.value}
            </div>

            ${config.subtitle
                ? html`
                    <div
                        style="
                            margin-top:4px;
                            font-size:14px;
                            opacity:.8;
                        "
                    >
                        ${config.subtitle}
                    </div>
                `
                : html``}

        </div>

    `;
}