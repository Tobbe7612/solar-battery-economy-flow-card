import { desktopLayout } from '../layouts/desktop-layout';
import { mobileLayout } from '../layouts/mobile-layout';
import { tabletLayout } from '../layouts/tablet-layout';

export function getActiveLayout(
  containerWidth: number
) {

  if (containerWidth <= 900) {
    return mobileLayout;
  }

  if (containerWidth <= 1400) {
    return tabletLayout;
  }

  return desktopLayout;
}