export type DisplayMode = "overview" | "consumers";
export type ValueMode = "live" | "energy_today";
export interface ViewModel {
  showSolar: boolean; showGrid: boolean; showBattery: boolean; showHouse: boolean;
  showIndividualConsumers: boolean; showHalo: boolean; showConsumerSummary: boolean;
  showFlowGraph: boolean; showCompactPhases: boolean; showDetail: boolean;
}

export function getViewModel(display: DisplayMode, value: ValueMode, detail: boolean): ViewModel {
  if (detail) return {
    showSolar: false, showGrid: false, showBattery: false, showHouse: false,
    showIndividualConsumers: false, showHalo: false, showConsumerSummary: false,
    showFlowGraph: false, showCompactPhases: false, showDetail: true,
  };
  const overview = display === "overview";
  return {
    showSolar: overview, showGrid: overview, showBattery: overview, showHouse: true,
    showIndividualConsumers: !overview, showHalo: true, showConsumerSummary: overview,
    showFlowGraph: true, showCompactPhases: overview, showDetail: false,
  };
}
