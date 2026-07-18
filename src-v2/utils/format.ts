export function formatPower(
    watts: number
): string {

    const abs =
        Math.abs(watts);

    if (abs < 1000) {
        return `${Math.round(watts)} W`;
    }

    return `${(watts / 1000).toFixed(1)} kW`;
}

export function formatPercent(
    value: number
): string {

    return `${Math.round(value)}%`;
}

export function formatEnergy(
    kWh: number
): string {

    if (kWh < 10) {
        return `${kWh.toFixed(1)} kWh`;
    }

    return `${kWh.toFixed(1)} kWh`;
}

export function formatMoney(
    sek: number
): string {

    return `${sek.toFixed(0)} kr`;
}