export interface FlowPort {
    x: number;
    y: number;
}

export interface FlowPorts {

    solar: FlowPort;

    grid: FlowPort;

    battery: FlowPort;

    house: FlowPort;

    spa: FlowPort;

    heatpump: FlowPort;

    appliance: FlowPort;

    car: FlowPort;

    hub: FlowPort;

}

export const DESKTOP_FLOW_PORTS: FlowPorts = {

    solar: {
        x: 850,
        y: 165,
    },

    grid: {
        x: 200,
        y: 450,
    },

    battery: {
        x: 1120,
        y: 550,
    },

    house: {
        x: 850,
        y: 550,
    },

    spa: {
        x: 760,
        y: 650,
    },

    heatpump: {
        x: 1045,
        y: 650,
    },

    appliance: {
        x: 885,
        y: 650,
    },

    car: {
        x: 1780,
        y: 650,
    },

    hub: {
        x: 850,
        y: 450,
    },

};