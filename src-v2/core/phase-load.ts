import type { PhaseLoadConfig } from "../config/config";

export type PhaseLoadState = "normal" | "warning" | "critical" | "missing";
export type PhaseDirection = "import" | "export" | "missing";

export interface PhaseLoadData {
    name: "L1" | "L2" | "L3";
    current: number | null;
    power: number | null;
    percent: number | null;
    activeSegments: number | null;
    direction: PhaseDirection;
    loadState: PhaseLoadState;
}

export interface PhaseLoadSummary {
    powerComplete: boolean;
    netPower: number | null;
    importPower: number | null;
    exportPower: number | null;
    loadComplete: boolean;
    mostLoadedPhase: { name: PhaseLoadData["name"]; percent: number } | null;
}

type MeasurementKind = "current" | "power";

function readMeasurement(hass: any, entityId: string | undefined, kind: MeasurementKind): number | null {
    if (!entityId) return null;
    const entity = hass?.states?.[entityId];
    if (!entity) return null;

    const raw = entity.state;
    const value = typeof raw === "number"
        ? raw
        : typeof raw === "string" && raw.trim() !== ""
            ? Number(raw)
            : NaN;
    if (!Number.isFinite(value)) return null;

    const attributes = entity.attributes ?? {};
    if (attributes.device_class && attributes.device_class !== kind) return null;
    const unit = typeof attributes.unit_of_measurement === "string"
        ? attributes.unit_of_measurement.trim().toLowerCase()
        : "";

    if (kind === "power") {
        if (unit === "w") return value;
        if (unit === "kw") return value * 1000;
        return null;
    }
    if (unit === "a") return value;
    if (unit === "ma") return value / 1000;
    return null;
}

export function buildPhaseLoadData(
    hass: any,
    config: PhaseLoadConfig | undefined,
): PhaseLoadData[] {
    const phases = [
        { name: "L1" as const, current: config?.l1CurrentEntity, power: config?.l1PowerEntity, powerInverted: config?.l1PowerInverted },
        { name: "L2" as const, current: config?.l2CurrentEntity, power: config?.l2PowerEntity, powerInverted: config?.l2PowerInverted },
        { name: "L3" as const, current: config?.l3CurrentEntity, power: config?.l3PowerEntity, powerInverted: config?.l3PowerInverted },
    ];
    const fuse = config?.mainFuse;

    return phases.map((phase) => {
        const current = readMeasurement(hass, phase.current, "current");
        const sensorPower = readMeasurement(hass, phase.power, "power");
        const power = sensorPower === null
            ? null
            : sensorPower * (phase.powerInverted ? -1 : 1);
        const canCalculateLoad = current !== null && Number.isFinite(fuse) && fuse! > 0;
        const percent = canCalculateLoad
            ? Math.min(100, Math.round((Math.abs(current!) / fuse!) * 100))
            : null;
        const activeSegments = canCalculateLoad
            ? Math.max(0, Math.min(16, Math.round((Math.abs(current!) / fuse!) * 16)))
            : null;
        const loadState: PhaseLoadState = percent === null
            ? "missing"
            : percent >= 100
                ? "critical"
                : percent >= 80
                    ? "warning"
                    : "normal";

        let direction: PhaseDirection = "missing";
        if (power !== null) {
            const importing = power >= 0;
            direction = (config?.invertDirection ? !importing : importing)
                ? "import"
                : "export";
        }

        return {
            name: phase.name,
            current,
            power,
            percent,
            activeSegments,
            direction,
            loadState,
        };
    });
}

export function buildPhaseLoadSummary(
    phases: PhaseLoadData[],
    invertDirection = false,
): PhaseLoadSummary {
    const powerComplete = phases.length === 3 && phases.every(phase => phase.power !== null);
    let netPower: number | null = null;
    let importPower: number | null = null;
    let exportPower: number | null = null;

    if (powerComplete) {
        const canonicalPower = phases.map(phase =>
            (phase.power as number) * (invertDirection ? -1 : 1),
        );
        netPower = canonicalPower.reduce((sum, value) => sum + value, 0);
        importPower = canonicalPower.reduce((sum, value) => sum + Math.max(value, 0), 0);
        exportPower = canonicalPower.reduce((sum, value) => sum + Math.max(-value, 0), 0);
    }

    const loadComplete = phases.length === 3 && phases.every(phase => phase.percent !== null);
    const mostLoadedPhase = loadComplete
        ? phases.reduce((mostLoaded, phase) =>
            phase.percent! > mostLoaded.percent
                ? { name: phase.name, percent: phase.percent! }
                : mostLoaded,
        { name: phases[0].name, percent: phases[0].percent! })
        : null;

    return {
        powerComplete,
        netPower,
        importPower,
        exportPower,
        loadComplete,
        mostLoadedPhase,
    };
}

export function hasConfiguredPhaseSensors(config: PhaseLoadConfig | undefined): boolean {
    return Boolean(
        config?.l1CurrentEntity || config?.l1PowerEntity ||
        config?.l2CurrentEntity || config?.l2PowerEntity ||
        config?.l3CurrentEntity || config?.l3PowerEntity,
    );
}
