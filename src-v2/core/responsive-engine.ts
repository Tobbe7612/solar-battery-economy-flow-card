import { desktopLayout } from '../layouts/desktop-layout';
import { mobileLayout } from '../layouts/mobile-layout';

export function getActiveLayout() {

  const mobileBreakpoint = 900;

  return window.innerWidth <= mobileBreakpoint
    ? mobileLayout
    : desktopLayout;
}