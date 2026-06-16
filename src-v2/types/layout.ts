export interface SceneNode {

  id: string;

  x: number;
  y: number;

  width: number;
  height: number;

  label?: string;
}

export interface PanelPosition {

  x: number;
  y: number;
}

export interface ScenePanels {

  left: PanelPosition;
  right: PanelPosition;
}

export interface SceneLayout {

  sceneWidth: number;
  sceneHeight: number;

  panels: ScenePanels;

  nodes: Record<string, SceneNode>;
}