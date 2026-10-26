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
  solarArc: SolarArcLayout;
}
