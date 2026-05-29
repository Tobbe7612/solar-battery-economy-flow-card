export interface EnergyFlow {

  id: string;

  from: string;
  to: string;

  color: string;

  width?: number;

  animated?: boolean;
}