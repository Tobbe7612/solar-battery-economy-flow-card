import type { CardData } from "../../core/card-data";
import type { DashboardCardData } from "../../core/dashboard-data";
import type { LabelMetric } from "./label-factory";
import { getDeviceLabelId, getLegacyDeviceMetricId } from "../../core/device-slots";

const format = (value: number | null | undefined): string =>
  value === null || value === undefined ? "— kWh" : `${value.toFixed(2)} kWh`;

export function buildEnergyTodayLabelMetrics(
  devices: CardData["devices"],
  dashboard?: DashboardCardData,
  hideDeviceStatus = false,
): Record<string, LabelMetric> {
  const metrics: Record<string, LabelMetric> = {
    solar: { line1: format(dashboard?.solar.value), line3: "Produktion idag" },
    house: { line1: format(dashboard?.house.value), line3: "Förbrukning idag" },
    grid: {
      line1: format(dashboard?.gridImport.value),
      line2: format(dashboard?.gridExport.value),
      line3: "Nätenergi idag",
      line1Indicator: "↓",
      line2Indicator: "↑",
      line1IndicatorLabel: "Import från nät",
      line2IndicatorLabel: "Export till nät",
      line1IndicatorColor: "#FF6B6B",
      line2IndicatorColor: "#35B86B",
    },
    battery: {
      line1: format(dashboard?.batteryCharged.value),
      line2: format(dashboard?.batteryDischarged.value),
      line3: "Batteri idag",
      line1Indicator: "↓",
      line2Indicator: "↑",
      line1IndicatorLabel: "Laddat i batteriet",
      line2IndicatorLabel: "Urladdat från batteriet",
      line1IndicatorColor: "#35B86B",
      line2IndicatorColor: "#E3A43B",
    },
  };
  devices.forEach((device, index) => {
    const energy = device.consumerId ? dashboard?.consumers.get(device.consumerId) : undefined;
    const metric = {
      line1: format(energy?.value),
      line2: "Energi idag",
      line3: hideDeviceStatus ? "" : device.status,
    };
    metrics[`device_${index}`] = metric;
    const legacyId = getLegacyDeviceMetricId(index);
    if (legacyId) metrics[legacyId] = metric;
    metrics[getDeviceLabelId(index)] = metric;
  });
  return metrics;
}

export function getEnergyTodayCoverageNote(
  dashboard?: DashboardCardData,
  visibleConsumerIds?: readonly string[],
): string | undefined {
  if (!dashboard) return undefined;
  const metrics = [dashboard.solar, dashboard.gridImport, dashboard.gridExport,
    dashboard.batteryCharged, dashboard.batteryDischarged, dashboard.house,
    ...(visibleConsumerIds
      ? [...new Set(visibleConsumerIds)].map((id) => dashboard.consumers.get(id)).filter((metric) => metric !== undefined)
      : dashboard.consumers.values())];
  const missingVisibleConsumer = visibleConsumerIds?.some((id) => !dashboard.consumers.has(id)) ?? false;
  const missing = missingVisibleConsumer || metrics.some((metric) => metric.quality === "missing");
  const partial = metrics.some((metric) => metric.quality === "partial");
  if (missing && partial) return "Vissa dagsvärden saknas eller har ofullständig täckningsstatus";
  if (missing) return "Vissa dagsvärden saknas";
  if (partial) return "Täckningsstatus saknas för vissa dagsvärden";
  return undefined;
}
