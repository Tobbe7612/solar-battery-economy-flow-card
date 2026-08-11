import { LitElement, html, css, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { FlowCardConfig } from "../config/config";
import { DEFAULT_CONFIG } from "../config/defaults";

/**
 * ============================================================
 * Config Editor — General + Battery / Info + Side Panels
 * ============================================================
 *
 * Current sections:
 * - General
 * - Battery / Info
 * - Energy Panel
 * - Economy Panel
 *
 * Uses Home Assistant's ha-form for all configuration fields.
 */
@customElement("solar-battery-economy-flow-card-editor")
export class SolarBatteryEconomyFlowCardEditor extends LitElement {
    @property({ attribute: false })
    public hass: any;

    @state()
    private _config: FlowCardConfig = DEFAULT_CONFIG;
    @state()
    private _deviceDrafts: Record<number, Record<string, any>> = {};

    public setConfig(config: Partial<FlowCardConfig>): void {
        this._config = {
            ...DEFAULT_CONFIG,
            ...config,
        };
    }

    /**
     * General
     */
    private generalSchema = [
        {
            name: "layout",
            label: "Layout",
            selector: {
                select: {
                    mode: "dropdown",
                    options: [
                        {
                            value: "desktop",
                            label: "Desktop",
                        },
                        {
                            value: "mobile",
                            label: "Mobile",
                        },
                    ],
                },
            },
        },
    ];

    /**
     * Battery / Info
     */
    private batteryInfoSchema = [
        {
            name: "batterySocEntity",
            label: "Battery SOC",
            selector: {
                entity: {
                    domain: "sensor",
                },
            },
        },
        {
            name: "solarInfoEntity",
            label: "Solar info",
            selector: {
                entity: {},
            },
        },
        {
            name: "gridInfoEntity",
            label: "Grid info",
            selector: {
                entity: {},
            },
        },
        {
            name: "houseInfoEntity",
            label: "House info",
            selector: {
                entity: {},
            },
        },
        {
            name: "batteryInfoEntity",
            label: "Battery info",
            selector: {
                entity: {},
            },
        },
    ];

    /**
     * Energy Panel
     */
    private energyPanelSchema = [
        {
            name: "show",
            label: "Show Energy Panel",
            selector: {
                boolean: {},
            },
        },
        {
            name: "importTodayEntity",
            label: "Import Today",
            selector: {
                entity: {
                    domain: "sensor",
                },
            },
        },
        {
            name: "exportTodayEntity",
            label: "Export Today",
            selector: {
                entity: {
                    domain: "sensor",
                },
            },
        },
        {
            name: "gridIndependenceEntity",
            label: "Grid Independence",
            selector: {
                entity: {
                    domain: "sensor",
                },
            },
        },
        {
            name: "solarSelfConsumptionEntity",
            label: "Solar Self Consumption",
            selector: {
                entity: {
                    domain: "sensor",
                },
            },
        },
        {
            name: "batteryUtilizationEntity",
            label: "Battery Utilization",
            selector: {
                entity: {
                    domain: "sensor",
                },
            },
        },
        {
            name: "co2SavedEntity",
            label: "CO₂ Saved",
            selector: {
                entity: {
                    domain: "sensor",
                },
            },
        },
    ];

    /**
     * Economy Panel
     */
    private economyPanelSchema = [
        {
            name: "show",
            label: "Show Economy Panel",
            selector: {
                boolean: {},
            },
        },
        {
            name: "savingsTodayEntity",
            label: "Savings Today",
            selector: {
                entity: {
                    domain: "sensor",
                },
            },
        },
        {
            name: "totalSavingsEntity",
            label: "Total Savings",
            selector: {
                entity: {
                    domain: "sensor",
                },
            },
        },
        {
            name: "savingsThisMonthEntity",
            label: "Savings This Month",
            selector: {
                entity: {
                    domain: "sensor",
                },
            },
        },
        {
            name: "savingsThisYearEntity",
            label: "Savings This Year",
            selector: {
                entity: {
                    domain: "sensor",
                },
            },
        },
        {
            name: "estimatedAnnualSavingsEntity",
            label: "Estimated Annual Savings",
            selector: {
                entity: {
                    domain: "sensor",
                },
            },
        },
        {
            name: "paybackTimeEntity",
            label: "Payback Time",
            selector: {
                entity: {
                    domain: "sensor",
                },
            },
        },
        {
            name: "roiEntity",
            label: "ROI",
            selector: {
                entity: {
                    domain: "sensor",
                },
            },
        },
    ];
    /**
     * Device schema
     *
     * The icon fields are conditional:
     * - Premium SVG -> show Premium icon
     * - MDI -> show MDI icon
     */
    private getDeviceSchema(device: FlowCardConfig["devices"][number]) {
        const schema: any[] = [
            {
                name: "enabled",
                label: "Enabled",
                selector: {
                    boolean: {},
                },
            },
            {
                name: "title",
                label: "Title",
                selector: {
                    text: {},
                },
            },
            {
                name: "powerEntity",
                label: "Power",
                selector: {
                    entity: {},
                },
            },
            {
                name: "optionalType",
                label: "Optional",
                selector: {
                    select: {
                        mode: "dropdown",
                        options: [
                            {
                                value: "",
                                label: "None",
                            },
                            {
                                value: "soc",
                                label: "SOC",
                            },
                            {
                                value: "temperature",
                                label: "Temperature",
                            },
                        ],
                    },
                },
            },
        ];

        // Optional entity belongs directly to Optional.
        if (
            device.optionalType === "soc" ||
            device.optionalType === "temperature"
        ) {
            schema.push({
                name: "optionalEntity",
                label: "Optional entity",
                selector: {
                    entity: {},
                },
            });
        }

        // Status entity always comes next.
        schema.push({
            name: "statusEntity",
            label: "Status",
            selector: {
                entity: {},
            },
        });

        // If there is no status entity, show power-based status rules.
        if (!device.statusEntity) {
            schema.push(
                {
                    name: "statusThreshold1",
                    label: "Status threshold 1 (W)",
                    selector: {
                        number: {
                            mode: "box",
                            step: 1,
                        },
                    },
                },
                {
                    name: "statusLabel1",
                    label: "Status 1",
                    selector: {
                        text: {},
                    },
                },
                {
                    name: "statusThreshold2",
                    label: "Status threshold 2 (W)",
                    selector: {
                        number: {
                            mode: "box",
                            step: 1,
                        },
                    },
                },
                {
                    name: "statusLabel2",
                    label: "Status 2",
                    selector: {
                        text: {},
                    },
                },
                {
                    name: "statusThreshold3",
                    label: "Status threshold 3 (W)",
                    selector: {
                        number: {
                            mode: "box",
                            step: 1,
                        },
                    },
                },
                {
                    name: "statusLabel3",
                    label: "Status 3",
                    selector: {
                        text: {},
                    },
                },
            );
        }

        // Icon configuration is kept together at the end.
        schema.push({
            name: "iconType",
            label: "Icon type",
            selector: {
                select: {
                    mode: "dropdown",
                    options: [
                        {
                            value: "premium",
                            label: "Premium SVG",
                        },
                        {
                            value: "mdi",
                            label: "Material Design Icon",
                        },
                    ],
                },
            },
        });

        if (device.iconType === "premium") {
            schema.push({
                name: "premiumIcon",
                label: "Premium icon",
                selector: {
                    select: {
                        mode: "dropdown",
                        options: [
                            {
                                value: "car",
                                label: "Car",
                            },
                            {
                                value: "spa",
                                label: "Spa",
                            },
                            {
                                value: "heatpump",
                                label: "Heat Pump",
                            },
                            {
                                value: "appliance",
                                label: "Appliance",
                            },
                        ],
                    },
                },
            });
        }

        if (device.iconType === "mdi") {
            schema.push({
                name: "mdiIcon",
                label: "MDI icon",
                selector: {
                    text: {},
                },
            });
        }

        return schema;
    }

    private _valueChanged(ev: CustomEvent): void {
        this._config = {
            ...this._config,
            ...ev.detail.value,
        };

        this._fireConfigChanged();
    }

    private _energyPanelValueChanged(ev: CustomEvent): void {
        const energyValues = ev.detail.value;

        this._config = {
            ...this._config,
            sidePanels: {
                ...this._config.sidePanels,
                energy: {
                    ...this._config.sidePanels.energy,
                    ...energyValues,
                },
            },
        };

        this._fireConfigChanged();
    }

    private _economyPanelValueChanged(ev: CustomEvent): void {
        const economyValues = ev.detail.value;

        this._config = {
            ...this._config,
            sidePanels: {
                ...this._config.sidePanels,
                economy: {
                    ...this._config.sidePanels.economy,
                    ...economyValues,
                },
            },
        };

        this._fireConfigChanged();
    }
    private _getDeviceFormData(
        index: number,
        device: FlowCardConfig["devices"][number],
    ): Record<string, any> {
        const draft = this._deviceDrafts[index] ?? {};

        const formData: Record<string, any> = {
            ...device,
            ...draft,
        };

        // Reconstruct the editor-only status fields from saved statusRules
        // when no draft exists yet.
        if (!this._deviceDrafts[index]) {
            const rules = device.statusRules ?? [];

            rules.forEach((rule, ruleIndex) => {
                const number = ruleIndex + 1;

                if (number <= 3) {
                    formData[`statusThreshold${number}`] = rule.threshold;
                    formData[`statusLabel${number}`] = rule.label;
                }
            });
        }

        return formData;
    }

    private _updateDeviceDraft(
        index: number,
        values: Record<string, any>,
    ): Record<string, any> {
        const draft = {
            ...(this._deviceDrafts[index] ?? {}),
            ...values,
        };

        this._deviceDrafts = {
            ...this._deviceDrafts,
            [index]: draft,
        };

        return draft;
    }
    private _buildStatusRules(values: any): {
        threshold: number;
        label: string;
    }[] {
        const rules: {
            threshold: number;
            label: string;
        }[] = [];

        for (let i = 1; i <= 3; i++) {
            const threshold = Number(values[`statusThreshold${i}`]);
            const label = String(values[`statusLabel${i}`] ?? "").trim();

            if (Number.isFinite(threshold) && label) {
                rules.push({
                    threshold,
                    label,
                });
            }
        }

        return rules.sort((a, b) => a.threshold - b.threshold);
    }
    private _deviceValueChanged(
        index: number,
        ev: CustomEvent,
    ): void {
        const deviceValues = ev.detail.value;

        // Keep the editor values alive while the user is typing.
        this._updateDeviceDraft(index, deviceValues);

        const {
            statusThreshold1,
            statusLabel1,
            statusThreshold2,
            statusLabel2,
            statusThreshold3,
            statusLabel3,
            ...configValues
        } = deviceValues;

        const draft = this._deviceDrafts[index] ?? {};

        const devices = [...this._config.devices] as FlowCardConfig["devices"];

        devices[index] = {
            ...devices[index],
            ...configValues,
            statusRules: this._buildStatusRules(draft),
        };

        this._config = {
            ...this._config,
            devices,
        };

        this._fireConfigChanged();
    }

    private _device1ValueChanged(ev: CustomEvent): void {
        this._deviceValueChanged(0, ev);
    }

    private _device2ValueChanged(ev: CustomEvent): void {
        this._deviceValueChanged(1, ev);
    }

    private _device3ValueChanged(ev: CustomEvent): void {
        this._deviceValueChanged(2, ev);
    }

    private _device4ValueChanged(ev: CustomEvent): void {
        this._deviceValueChanged(3, ev);
    }

    private _fireConfigChanged(): void {
        this.dispatchEvent(
            new CustomEvent("config-changed", {
                detail: {
                    config: this._config,
                },
                bubbles: true,
                composed: true,
            }),
        );
    }
    

    protected render(): TemplateResult {
        return html`
            <details class="editor-section" open>
                <summary>General</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config}
                        .schema=${this.generalSchema}
                        .computeLabel=${(schema: any) => schema.label}
                        @value-changed=${this._valueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Battery & Info</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config}
                        .schema=${this.batteryInfoSchema}
                        .computeLabel=${(schema: any) => schema.label}
                        @value-changed=${this._valueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Energy Panel</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config.sidePanels.energy}
                        .schema=${this.energyPanelSchema}
                        .computeLabel=${(schema: any) => schema.label}
                        @value-changed=${this._energyPanelValueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Economy Panel</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config.sidePanels.economy}
                        .schema=${this.economyPanelSchema}
                        .computeLabel=${(schema: any) => schema.label}
                        @value-changed=${this._economyPanelValueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Device 1</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._getDeviceFormData(
                            0,
                            this._config.devices[0],
                        )}
                        .schema=${this.getDeviceSchema(this._config.devices[0])}
                        .computeLabel=${(schema: any) => schema.label}
                        @value-changed=${this._device1ValueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Device 2</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._getDeviceFormData(
                            1,
                            this._config.devices[1],
                        )}
                        .schema=${this.getDeviceSchema(this._config.devices[1])}
                        .computeLabel=${(schema: any) => schema.label}
                        @value-changed=${this._device2ValueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Device 3</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._getDeviceFormData(
                            2,
                            this._config.devices[2],
                        )}
                        .schema=${this.getDeviceSchema(this._config.devices[2])}
                        .computeLabel=${(schema: any) => schema.label}
                        @value-changed=${this._device3ValueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Device 4</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._getDeviceFormData(
                            3,
                            this._config.devices[3],
                        )}
                        .schema=${this.getDeviceSchema(this._config.devices[3])}
                        .computeLabel=${(schema: any) => schema.label}
                        @value-changed=${this._device4ValueChanged}
                    ></ha-form>
                </div>
            </details>
        `;
    }
    static styles = css`
        .editor-section {
            margin: 0 0 8px 0;
            border: 1px solid var(--divider-color);
            border-radius: 8px;
            overflow: hidden;
            background: var(--card-background-color);
        }

        .editor-section summary {
            display: flex;
            align-items: center;
            min-height: 48px;
            padding: 0 16px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            color: var(--primary-text-color);
            user-select: none;
        }

        .editor-section summary:hover {
            background: var(--secondary-background-color);
        }

        .editor-section summary::marker {
            color: var(--secondary-text-color);
        }

        .editor-content {
            padding: 0 16px 16px 16px;
        }

        .editor-section[open] summary {
            border-bottom: 1px solid var(--divider-color);
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        "solar-battery-economy-flow-card-editor":
            SolarBatteryEconomyFlowCardEditor;
    }
}