export interface NodePort {
  x: number;
  y: number;
}
export interface NodePorts {
  left?: NodePort;
  right?: NodePort;
  top?: NodePort;
  bottom?: NodePort;
}
export interface SceneNode {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  label?: string;
  ports?: NodePorts;
}
export interface PanelPosition {
  x: number;
  y: number;
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
  nodes: Record<string, SceneNode>;
  solarArc: SolarArcLayout;
}