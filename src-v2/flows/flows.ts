import { EnergyFlow } from '../types/flow';

export const energyFlows: EnergyFlow[] = [

  {
    id: 'solar-house',
    from: 'solar',
    to: 'house',
    color: '#FFD54A',
    width: 10,
    animated: true
  },

  {
    id: 'solar-battery',
    from: 'solar',
    to: 'battery',
    color: '#FFE066',
    width: 8,
    animated: true
  },

  {
    id: 'solar-export',
    from: 'solar',
    to: 'grid',
    color: '#FFB347',
    width: 8,
    animated: true
  },

  {
    id: 'battery-house',
    from: 'battery',
    to: 'house',
    color: '#63FFA2',
    width: 10,
    animated: true
  },

  {
    id: 'battery-grid',
    from: 'battery',
    to: 'grid',
    color: '#50FFC8',
    width: 8,
    animated: true
  },

  {
    id: 'grid-house',
    from: 'grid',
    to: 'house',
    color: '#FF6B6B',
    width: 8,
    animated: true
  },

  {
    id: 'grid-battery',
    from: 'grid',
    to: 'battery',
    color: '#FF8A8A',
    width: 8,
    animated: true
  },

  {
    id: 'house-car',
    from: 'house',
    to: 'car',
    color: '#C084FF',
    width: 8,
    animated: true
  },

  {
    id: 'house-spa',
    from: 'house',
    to: 'spa',
    color: '#59D8FF',
    width: 8,
    animated: true
  }
];