import type { FlowCardConfig } from "../config/config";
import type { LivePowerSnapshot } from "./live-power";
import type { ConsumerRuntimeSnapshot } from "./consumer-runtime";
import { resolveDevicePower, type DevicePowerResolution } from "./device-power";

export interface LiveFlow {
  id: string;
  active: boolean;
  power: number;
  intensity: number;
  quality: DevicePowerResolution["quality"] | "valid";
}

export function getLiveFlows(
    config: FlowCardConfig,
    livePowerSnapshot?: LivePowerSnapshot,
    consumerRuntime?: ConsumerRuntimeSnapshot,
): Record<string, LiveFlow> {

  const livePower = livePowerSnapshot?.flows;

  const flows: Record<string, LiveFlow> = {
    'solar-house': createFlow(
      'solar-house',
      livePower?.solar_house ?? 0
    ),
    'solar-battery': createFlow(
      'solar-battery',
      livePower?.solar_battery ?? 0
    ),
    'solar-export': createFlow(
      'solar-export',
      livePower?.solar_export ?? 0
    ),
    'battery-house': createFlow(
      'battery-house',
      livePower?.battery_house ?? 0
    ),
    'battery-grid': createFlow(
      'battery-grid',
      livePower?.battery_grid ?? 0
    ),
    'grid-house': createFlow(
      'grid-house',
      livePower?.grid_house ?? 0
    ),
    'grid-battery': createFlow(
      'grid-battery',
      livePower?.grid_battery ?? 0
    ),
    'house-spa': createFlow(
          'house-spa',
          resolveDevicePower(config.devices[1], consumerRuntime)
      ),

      'house-car': createFlow(
          'house-car',
          resolveDevicePower(config.devices[0], consumerRuntime)
      ),

      'house-heatpump': createFlow(
          'house-heatpump',
          resolveDevicePower(config.devices[2], consumerRuntime)
      ),

      'house-appliance': createFlow(
          'house-appliance',
          resolveDevicePower(config.devices[3], consumerRuntime)
      ),
  };
  return flows;
}

function createFlow(
  id: string,
  power: number | DevicePowerResolution
): LiveFlow {
  const quality = typeof power === "number" ? "valid" : power.quality;
  const watts = typeof power === "number" ? power : power.value ?? 0;
  const active = quality === "valid" && watts > 1;
  const intensity = Math.min(
    1,
    watts / 5000
  );

  return {
    id,
    power: watts,
    active,
    intensity,
    quality,
  };
}
