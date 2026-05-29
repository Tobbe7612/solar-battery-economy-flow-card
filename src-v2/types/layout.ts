export interface SceneNode {

  id: string;

  x: number;
  y: number;

  width: number;
  height: number;

  label?: string;
}

export interface SceneLayout {

  sceneWidth: number;
  sceneHeight: number;

  nodes: Record<string, SceneNode>;
}