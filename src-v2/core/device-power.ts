import type { DeviceSlotConfig } from "../config/config";
import {
    getConsumerPowerReading,
    getConsumerPowerEntity,
    type ConsumerRuntimeSnapshot,
} from "./consumer-runtime";

export interface DevicePowerResolution {
    value: number | null;
    quality: DevicePowerQuality;
    entity?: string;
}

export type DevicePowerQuality =
    | "valid"
    | "not_configured"
    | "missing_consumer"
    | "missing"
    | "unavailable"
    | "invalid"
    | "invalid_unit";

/** Resolves consumer power exclusively from the selected SBE runtime row. */
export function resolveDevicePower(
    device: DeviceSlotConfig,
    consumerRuntime?: ConsumerRuntimeSnapshot,
): DevicePowerResolution {
    if (!device.consumerId) {
        return { value: null, quality: "not_configured" };
    }
    const consumer = consumerRuntime?.consumers.get(device.consumerId);
    if (!consumer) {
        return { value: null, quality: "missing_consumer" };
    }
    const power = getConsumerPowerReading(device.consumerId, consumerRuntime);
    const valid = power?.quality === "valid" && power.unit === "W" &&
        typeof power.value === "number" && Number.isFinite(power.value);
    const quality: DevicePowerQuality = valid
        ? "valid"
        : power?.quality === "valid"
            ? power.unit === "W" ? "invalid" : "invalid_unit"
            : power?.quality === "invalid_unit"
                ? "invalid_unit"
            : power?.quality === "missing" || power?.quality === "unavailable"
                ? power.quality
                : "invalid";
    return {
        value: valid ? power.value : null,
        quality,
        entity: getConsumerPowerEntity(device.consumerId, consumerRuntime),
    };
}
