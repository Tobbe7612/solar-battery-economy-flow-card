import { desktopLayout } from '../layouts/desktop-layout';
import { mobileLayout } from '../layouts/mobile-layout';
import { tabletLayout } from '../layouts/tablet-layout';

export interface ResponsiveContext {
  width: number;
  height: number;
  aspectRatio: number;
  layoutMode: 'auto' | 'panel' | 'sidebar' | 'masonry' | 'sections';
}

export function getActiveLayout(
  context: ResponsiveContext
) {

  const {
      width,
      height,
      aspectRatio,
      layoutMode,
  } = context;

  if (layoutMode === 'panel') {
    return desktopLayout;
  }

  if (
    layoutMode === 'sidebar' ||
    layoutMode === 'masonry' ||
    layoutMode === 'sections'
  ) {
    return mobileLayout;
  }

  if (width <= 900) {
    return mobileLayout;
  }

  if (width <= 1400) {
    return tabletLayout;
  }
  console.log(
      "[Responsive]",
      {
          width,
          height,
          aspectRatio,
          layoutMode,
      }
  );
  return desktopLayout;
}