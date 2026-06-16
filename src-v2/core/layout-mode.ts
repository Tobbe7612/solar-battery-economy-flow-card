export type LayoutMode =
  | 'auto'
  | 'hero'
  | 'standard'
  | 'compact';

export function getLayoutMode(
  config: any,
  cardWidth: number
): LayoutMode {

  const configuredMode =
    config?.layout_mode;

  if (
    configuredMode === 'hero' ||
    configuredMode === 'standard' ||
    configuredMode === 'compact'
  ) {
    return configuredMode;
  }

  // AUTO

  if (cardWidth <= 900) {
    return 'compact';
  }

  if (cardWidth <= 1600) {
    return 'standard';
  }

  return 'hero';
}

export function shouldRenderPanels(
  mode: LayoutMode
): boolean {

  return mode !== 'compact';
}