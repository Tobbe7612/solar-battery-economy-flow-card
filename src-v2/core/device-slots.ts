export const DEVICE_SLOT_COUNT = 8;
export const VEHICLE_SLOT_INDICES = [0, 7] as const;
export const CONSUMER_SLOT_INDICES = [1, 2, 3, 4, 5, 6] as const;

const LEGACY_DEVICE_FLOW_IDS: Record<number, string> = {
  0: "house-car",
  1: "house-spa",
  2: "house-heatpump",
  3: "house-appliance",
};

export function isVehicleSlot(index: number): boolean {
  return VEHICLE_SLOT_INDICES.includes(index as typeof VEHICLE_SLOT_INDICES[number]);
}

export function getDeviceFlowId(index: number): string {
  return LEGACY_DEVICE_FLOW_IDS[index]
    ?? (index === 7 ? "house-car-2" : `house-consumer-slot-${index + 1}`);
}

export function getDeviceLabelId(index: number): string {
  const legacy = ["car", "spa", "heatpump", "appliance"][index];
  return legacy ?? (index === 7 ? "car-2" : `consumer-${index + 1}`);
}

export function getLegacyDeviceMetricId(index: number): string | undefined {
  return ["car", "spa", "heatpump", "appliance"][index];
}
