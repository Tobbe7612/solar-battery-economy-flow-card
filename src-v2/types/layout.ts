export interface PanelPosition {
  x: number;
  y: number;
  /**
   * Optional panel width for this layout.
   * If omitted, the renderer will use its default width.
   */
  width?: number;
  /**
   * Enables the compact/mobile variant of the panel.
   */
  compact?: boolean;
}
export interface ScenePanels {
  left: PanelPosition;
  right: PanelPosition;
}
export interface SolarArcLayout {
  centerX: number;
  centerY: number;
  width: number;
  height: number;
  sunRadius: number;
}
export interface SceneLayout {
  sceneWidth: number;
  sceneHeight: number;
  panels: ScenePanels;
  solarArc: SolarArcLayout;
}