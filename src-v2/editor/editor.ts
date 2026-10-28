import { LitElement, html, css, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { FlowCardConfig } from "../config/config";
import { DEFAULT_CONFIG } from "../config/defaults";
import { mergeConfig } from "../config/merge-config";
import { detectSolarBatteryEconomy } from "../config/autodiscovery";
import { isVehicleSlot } from "../core/device-slots";

/**
 * ============================================================
 * Config Editor — General + Battery / Info + Devices + Phase Load
 * ============================================================
 *
 * Current sections:
 * - General
 * - Battery / Info
 * - Phase Load
 * - Devices
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
    @state()
    private _consumerOptions: { value: string; label: string }[] = [
        { value: "", label: "Select an SBE consumer" },
    ];
    private _consumerLookupStarted = false;

    public setConfig(config: Partial<FlowCardConfig>): void {
        this._consumerLookupStarted = false;
        this._deviceDrafts = {};
        this._config = mergeConfig(config);
    }

    protected updated(): void {
        if (
            this._consumerLookupStarted ||
            !this.hass ||
            typeof this.hass.callWS !== "function"
        ) {
            return;
        }
        this._consumerLookupStarted = true;
        void this._loadConsumerOptions(this.hass);
    }

    private async _loadConsumerOptions(hass: any): Promise<void> {
        try {
            const entries = await hass.callWS({
                type: "config_entries/get",
                domain: "solar_battery_economy",
            });
            if (
                !Array.isArray(entries) ||
                entries.length !== 1 ||
                entries[0]?.state !== "loaded" ||
                typeof entries[0]?.entry_id !== "string"
            ) {
                return;
            }
            const payload = await hass.callWS({
                type: "solar_battery_economy/get_live_runtime",
                config_entry_id: entries[0].entry_id,
            });
            const runtime = payload?.consumers;
            if (
                payload?.contract_version !== 1 ||
                runtime?.contract_version !== 1 ||
                !Array.isArray(runtime.consumers)
            ) {
                return;
            }
            const options = runtime.consumers
                .filter((consumer: any) =>
                    typeof consumer?.consumer_id === "string" &&
                    consumer.consumer_id &&
                    typeof consumer?.name === "string" &&
                    typeof consumer?.power_entity === "string"
                )
                .map((consumer: any) => ({
                    value: consumer.consumer_id as string,
                    label: consumer.name as string,
                }));
            this._consumerOptions = [
                { value: "", label: "Select an SBE consumer" },
                ...options,
            ];
        } catch {
            // The slot stays unconfigured until an SBE consumer is selected.
        }
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
     * Device schema
     *
     * All device icons use the built-in SVG icon set.
     */
    private getDeviceSchema(device: FlowCardConfig["devices"][number], index?: number) {
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
                name: "consumerId",
                label: "SBE consumer",
                selector: {
                    select: {
                        mode: "dropdown",
                        options: this._getConsumerOptions(device.consumerId),
                    },
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
                        ].filter((option) => {
                            if (index === undefined) return true;
                            const allowed = isVehicleSlot(index)
                                ? ["car"]
                                : ["spa", "heatpump", "appliance"];
                            return allowed.includes(option.value) || option.value === device.icon;
                        }),
                    },
                },
            },
        ];

        // SOC and temperature are selected from the SBE runtime row.

        // Status thresholds are configured centrally in SBE; only labels stay local.

        schema.push(...[1, 2, 3].map((level) => ({
            name: `statusLabel${level}`,
            label: `SBE status level ${level} label`,
            selector: { text: {} },
        })));

        schema.push({
            name: "icon",
            label: "Icon",
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

        return schema;
    }

    private _getConsumerOptions(currentConsumerId?: string): {
        value: string;
        label: string;
    }[] {
        if (
            currentConsumerId &&
            !this._consumerOptions.some(
                (option) => option.value === currentConsumerId,
            )
        ) {
            return [
                ...this._consumerOptions,
                {
                    value: currentConsumerId,
                    label: `Unavailable SBE consumer (${currentConsumerId})`,
                },
            ];
        }
        return this._consumerOptions;
    }

    private _valueChanged(ev: CustomEvent): void {
        this._config = {
            ...this._config,
            ...ev.detail.value,
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

        if (!this._deviceDrafts[index]) {
            device.statusLabels?.forEach((label, labelIndex) => {
                formData[`statusLabel${labelIndex + 1}`] = label;
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
    private _deviceValueChanged(
        index: number,
        ev: CustomEvent,
    ): void {
        const deviceValues = ev.detail.value;

        // Keep the editor values alive while the user is typing.
        this._updateDeviceDraft(index, deviceValues);

        const { statusLabel1, statusLabel2, statusLabel3, ...configValues } = deviceValues;

        const devices = [...this._config.devices] as FlowCardConfig["devices"];

        devices[index] = {
            ...devices[index],
            ...configValues,
            statusLabels: [statusLabel1, statusLabel2, statusLabel3]
                .map((label) => {
                    const normalized = String(label ?? "").trim();
                    return normalized || undefined;
                }) as [string?, string?, string?],
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
    private _isSolarBatteryEconomyDetected(): boolean {
        return !!this.hass && detectSolarBatteryEconomy(this.hass);
    }

    private _renderDeviceEditor(index: number, title: string): TemplateResult {
        const device = this._config.devices[index];
        return html`<section class="device-editor-item">
            <h4>${title}</h4>
            <ha-form
                .hass=${this.hass}
                .data=${this._getDeviceFormData(index, device)}
                .schema=${this.getDeviceSchema(device, index)}
                .computeLabel=${(schema: any) => schema.label}
                @value-changed=${(event: CustomEvent) => this._deviceValueChanged(index, event)}
            ></ha-form>
        </section>`;
    }

    protected render(): TemplateResult {
        const integrationDetected =
            this._isSolarBatteryEconomyDetected();

        return html`
            <div class="integration-status">
                <div class="integration-status-title">
                    Solar Battery Economy
                </div>

                <div
                    class="integration-status-value
                        ${integrationDetected ? "detected" : "not-detected"}"
                >
                    ${integrationDetected
                        ? "✓ Detected"
                        : "⚠ Not detected"}
                </div>
            </div>

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
                <summary>Vehicles and chargers</summary>
                <div class="editor-content">
                    ${this._renderDeviceEditor(0, "HALO 1")}
                    ${this._renderDeviceEditor(7, "HALO 2 · reserved")}
                </div>
            </details>

            <details class="editor-section">
                <summary>Ordinary consumers</summary>
                <div class="editor-content">
                    ${[1, 2, 3, 4, 5, 6].map((index) => this._renderDeviceEditor(index, `Consumer ${index}`))}
                </div>
            </details>
        `;
    }
    static styles = css`
        .integration-status {
            margin: 0 0 8px 0;
            padding: 12px 16px;
            border: 1px solid var(--divider-color);
            border-radius: 8px;
            background: var(--card-background-color);
        }

        .integration-status-title {
            font-size: 14px;
            font-weight: 600;
            color: var(--primary-text-color);
        }

        .integration-status-value {
            margin-top: 4px;
            font-size: 13px;
        }

        .integration-status-value.detected {
            color: var(--success-color);
        }

        .integration-status-value.not-detected {
            color: var(--warning-color);
        }
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
