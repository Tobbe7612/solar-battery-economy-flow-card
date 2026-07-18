export function getNumber(
    hass: any,
    entityId: string,
    defaultValue = 0
): number {

    const state =
        hass?.states?.[entityId]?.state;

    const value =
        Number(state);

    return Number.isFinite(value)
        ? value
        : defaultValue;
}

export function getString(
    hass: any,
    entityId: string,
    defaultValue = ''
): string {

    const state =
        hass?.states?.[entityId]?.state;

    return state ?? defaultValue;
}

export function getBoolean(
    hass: any,
    entityId: string
): boolean {

    const state =
        hass?.states?.[entityId]?.state;

    return state === 'on';
}

export function getAttribute<T>(
    hass: any,
    entityId: string,
    attribute: string,
    defaultValue: T
): T {

    return hass?.states?.[entityId]?.attributes?.[attribute]
        ?? defaultValue;
}