export interface FlowData {
solarHouse:number
solarBattery:number
solarExport:number
batteryHouse:number
batteryGrid:number
gridHouse:number
gridBattery:number
houseGrid:number
}

export function readFlows(hass:any):FlowData{

const get=(e:string)=>Number(hass.states[e]?.state || 0)

return {

```
solarHouse:get("sensor.power_solar_house"),
solarBattery:get("sensor.power_solar_battery"),
solarExport:get("sensor.power_solar_export"),

batteryHouse:get("sensor.power_battery_house"),
batteryGrid:get("sensor.power_battery_grid"),

gridHouse:get("sensor.power_grid_house"),
gridBattery:get("sensor.power_grid_battery"),

houseGrid:get("sensor.power_house_grid")
```

}

}
