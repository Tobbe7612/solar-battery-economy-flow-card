import { desktopLayout } from '../layouts/desktop-layout';
import { mobileLayout } from '../layouts/mobile-layout';
import type { LayoutType } from './layout-type';
import type { SceneLayout } from '../types/layout';
export interface ResponsiveContext {
  layout: LayoutType;
  width: number;
  height: number;
}
export interface ResponsiveLayout {
  layout: SceneLayout;
  scale: number;
  offsetX: number;
  offsetY: number;
}
export function getActiveLayout(
  context: ResponsiveContext
): ResponsiveLayout {
  const layout =
    context.layout === 'mobile'
      ? mobileLayout
      : desktopLayout;
  const sceneWidth = layout.sceneWidth;
  const sceneHeight = layout.sceneHeight;
  const scaleX = context.width / sceneWidth;
  const scaleY = context.height / sceneHeight;
  const scale = Math.min(scaleX, scaleY);
  return {
    layout,
    scale,
    offsetX: 0,
    offsetY: 0,
  };
}