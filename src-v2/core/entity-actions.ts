export function openMoreInfo(
    element: HTMLElement,
    entityId: string,
): void {

    element.dispatchEvent(
        new CustomEvent("hass-more-info", {
            bubbles: true,
            composed: true,
            detail: {
                entityId,
            },
        }),
    );
}