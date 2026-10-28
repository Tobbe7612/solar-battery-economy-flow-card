# ⚡ Solar Battery Economy Flow Card

![HACS](https://img.shields.io/badge/HACS-Custom-orange.svg)
![Version](https://img.shields.io/github/v/release/Tobbe7612/solar-battery-economy-flow-card)
![Downloads](https://img.shields.io/github/downloads/Tobbe7612/solar-battery-economy-flow-card/total)
![License](https://img.shields.io/github/license/Tobbe7612/solar-battery-economy-flow-card)

A modern, animated energy-flow dashboard card for Home Assistant,
designed around the **Solar Battery Economy** integration.

> ## 🚨 Version 2 --- Completely Rebuilt and Refined
>
> **Version 2 is not a small update of the original card. The card has
> been totally rebuilt and extensively refined from the ground up.**
>
> The rendering architecture, energy-flow handling, labels, device
> system, configuration model, responsive layouts, animations and Solar
> Battery Economy integration handling have all been redesigned for a
> cleaner, more consistent and significantly more polished experience.
>
> **This README describes Version 2 only.**
>
> The configuration syntax from Version 1 is **not compatible with
> Version 2**.

------------------------------------------------------------------------

## ✨ Features

-   ☀️ **Solar production visualization**
-   🔋 **Battery power and SOC visualization**
-   🏠 **House consumption**
-   ⚡ **Grid import/export**
-   🔄 **Animated energy flows**
-   📈 **Flow visualization that follows the actual power values**
-   🎨 **Dynamic colors, glow and animation effects**
-   🔎 **Automatic Solar Battery Economy sensor discovery**
-   🚗 **Configurable device visualization**
-   🧖 **Built-in SVG device icons**
-   📱 **Responsive desktop and mobile layouts**
-   🖱️ **More-info targets for the main energy labels**
-   ⚙️ **Configurable status rules for devices**

------------------------------------------------------------------------

## 🔄 A Completely New Version

Version 2 was developed as a **total rebuild**, rather than an
incremental modification of Version 1.

The goal was to create a card where the visual presentation and the
underlying data model work together consistently.

Among the major changes are:

-   A completely rebuilt rendering architecture
-   A new flow-rendering system
-   Power-responsive energy-flow animation
-   Refined particle and glow effects
-   Reworked labels and device visualization
-   A new four-device configuration model
-   Automatic discovery of Solar Battery Economy sensors
-   Simplified configuration
-   Built-in SVG icons instead of MDI icon configuration
-   Refined desktop and mobile layouts
-   Cleaner separation between automatically discovered data and
    user-configurable data

The result is intended to feel less like a collection of individual UI
elements and more like a single, coherent energy visualization.

------------------------------------------------------------------------

## 📸 Screenshots

### Desktop

![Solar Battery Economy Flow Card — Desktop](images/desktop-v2.png)

### Mobile

![Solar Battery Economy Flow Card — Mobile](images/mobile-v2.png)

------------------------------------------------------------------------

## 📦 Installation

### 🧩 HACS --- Recommended

1.  Open **HACS → Frontend**.
2.  Add the repository as a custom repository if it is not already
    available in HACS.
3.  Select **Dashboard** as the category.
4.  Install **Solar Battery Economy Flow Card**.
5.  Restart Home Assistant if required.

Repository:

`https://github.com/Tobbe7612/solar-battery-economy-flow-card`

### 📁 Manual Installation

1.  Build or download:

``` text
dist/solar-battery-economy-flow-card.js
```

2.  Copy the file to:

``` text
/config/www/
```

3.  Add it as a Lovelace resource:

``` yaml
url: /local/solar-battery-economy-flow-card.js
type: module
```

------------------------------------------------------------------------

# ⚙️ Configuration

Version 2 uses a substantially simplified configuration model.

The main energy flow is automatically discovered from the **Solar
Battery Economy** integration. Solar, battery, house and grid power are
therefore **not individually configured as sensor entities**.

A minimal card configuration can be as simple as:

``` yaml
type: custom:solar-battery-economy-flow-card
title: Energy Flow
```

------------------------------------------------------------------------

## 🧩 Main Configuration

### `title`

Optional title displayed by the card.

``` yaml
title: Energy Flow
```

### `layout`

Controls the main layout.

``` yaml
layout: desktop
```

Available values:

-   `desktop`
-   `mobile`

Battery SOC is supplied by the SBE live-runtime subscription.

------------------------------------------------------------------------

## 🔎 More-info Entities

The main Solar Battery Economy power values are calculated internally
and therefore do not have a single entity ID of their own.

The following optional settings define which entity should be opened
when the user requests more information from the corresponding main-flow
label:

``` yaml
solarInfoEntity: sensor.solar_power
gridInfoEntity: sensor.grid_power
houseInfoEntity: sensor.house_power
batteryInfoEntity: sensor.battery_power
```

These are **not used to calculate the displayed power values**. They are
only targets for the Home Assistant more-info action.

If they are not configured, the card uses its built-in fallback targets.

------------------------------------------------------------------------

# 🔌 Solar Battery Economy Integration

Version 2 consumes the **Solar Battery Economy** live-runtime contract.
The editor lists consumers with configured power entities and stores the
selected stable consumer ID for each visual slot.

### Automatic discovery

The card identifies the integration by looking for the expected entity
**suffixes**, rather than relying on a fixed entity-name prefix.

This means installations where Home Assistant adds an additional device
or installation prefix can still be discovered correctly.

### Main energy flow

The integration publishes the following energy-flow values in its live
runtime contract:

``` text
energy_system_power_solar_house
energy_system_power_solar_battery
energy_system_power_solar_export

energy_system_power_battery_house
energy_system_power_battery_grid

energy_system_power_grid_house
energy_system_power_grid_battery

energy_system_power_house_grid
```

These values are used to calculate the displayed:

-   Solar power
-   Battery power
-   House consumption
-   Grid power
-   Flow directions

The main flow sensors are therefore **not user-configurable**.

# 🚗🧖 Devices — six consumers and two vehicles

Version 2 provides **eight fixed device slots**: six ordinary SBE consumers
and two vehicle/charger positions. The first four indexes retain their
existing meanings, so older four-slot card configurations continue working
without reconfiguration.

Slots 1–4 preserve their existing car, spa, heat-pump and appliance mappings.
Slots 5–7 add ordinary consumers, and slot 8 is the second vehicle position.
The editor groups the two vehicle slots separately from the six consumers.
Desktop consumer view places the six consumers in a three-by-two group to
the left of the vertically stacked vehicle positions. Disabled empty slots
remain hidden until configured.

Each slot can be independently enabled and configured.

``` yaml
devices:
  - enabled: true
    title: Car
    consumerId: <stable SBE consumer ID>
    optionalType: soc
    icon: car

  - enabled: true
    title: Spa
    consumerId: <stable SBE consumer ID>
    icon: spa

  - enabled: true
    title: Heat Pump
    consumerId: <stable SBE consumer ID>
    icon: heatpump

  - enabled: true
    title: Dishwasher
    consumerId: <stable SBE consumer ID>
    icon: appliance

  - enabled: false
    icon: appliance

  - enabled: false
    icon: appliance

  - enabled: false
    icon: appliance

  - enabled: false
    icon: car
    # Slot 8 is reserved for the second vehicle; no SBE ID is preselected.
```

------------------------------------------------------------------------

## Device properties

### `enabled`

Enables or disables the device.

``` yaml
enabled: true
```

### `title`

The title shown in the device label.

``` yaml
title: Heat Pump
```

### `consumerId`

Select the stable consumer ID configured in Solar Battery Economy. SBE
provides normalized power, status, SOC and temperature readings. There is
no local sensor fallback; missing or invalid runtime data is shown as
unavailable rather than as zero.

### `optionalType`

Optional secondary value.

Available values:

``` text
soc
temperature
```

Example:

``` yaml
optionalType: soc
```

or:

``` yaml
optionalType: temperature
```

The selected SOC or temperature value comes from the selected SBE
consumer. SBE owns sensor sources and numeric status thresholds;
`statusLabels` optionally supplies card-local labels for SBE status levels.

### `icon`

Version 2 uses the card's built-in SVG icon set.

Available icons:

``` text
car
spa
heatpump
appliance
```

There is **no MDI icon configuration in Version 2**.

------------------------------------------------------------------------

# 🔄 Energy Flow Visualization

The energy flows are not static decorative lines.

Their rendering follows the actual power values supplied by the energy
system.

This affects:

-   Whether a flow is present
-   Flow direction
-   Animation
-   Particle movement
-   Visual intensity
-   Glow

The card therefore reacts to changes in the underlying energy system
rather than showing the same animation regardless of the current load.

------------------------------------------------------------------------

# 🔋 Battery Visualization

The house battery is represented using its calculated power flow and
manually selected SOC entity.

Battery operating state is derived from battery power:

-   Positive power → Charging
-   Negative power → Discharging
-   Around zero → Standby

The battery visualization also uses dynamic color and glow effects to
reflect its current operating state.

------------------------------------------------------------------------

# 🏠 House, Solar and Grid

The main energy values are calculated internally from the automatically
discovered Solar Battery Economy flow sensors.

### Solar

Solar power is derived from the solar-to-house, solar-to-battery and
solar-to-grid flows.

### House

House consumption is derived from the active solar, battery and grid
contributions.

### Grid

Grid power is calculated from the detected grid import/export flows.

The displayed status follows the calculated direction, for example:

-   Importing
-   Exporting
-   Balance

------------------------------------------------------------------------

# 📱 Responsive Layout

Version 2 has been rebuilt with responsive presentation in mind.

The card supports:

-   Desktop
-   Mobile

The visual layout, labels and energy-flow rendering are designed to
remain coherent as the available card space changes.

------------------------------------------------------------------------

# 🛠️ Requirements

-   Home Assistant
-   **Solar Battery Economy** integration for the automatic main
    energy-flow data

For the complete V2 experience, the Solar Battery Economy integration is
strongly recommended because the main energy flow is built around its
energy-system sensors.

Configure consumer sensors, status sources and thresholds in SBE, then
select the relevant consumer ID in each enabled Flow Card slot. The card
retains only slot and presentation settings.

In **Energi idag**, values are accumulated kWh from SBE. Connector lines are
omitted because daily energy does not encode instantaneous flow direction or
intensity. The detail view's phase meter uses the phase
percentage reported by SBE, calculated against the main fuse configured in
the integration; it does not impose a card-local fuse threshold.

The card's overview/consumer and live/today-energy controls are local view
state. The overview power subtotal includes enabled ordinary consumer slots,
counts each stable SBE consumer ID once, and excludes both vehicle slots,
which are shown separately in the consumer view. The original first vehicle
slot remains the only car box in overview; the second reserved vehicle box
appears with the consumer group when configured.
Missing live readings are excluded and marked as
an incomplete subtotal. Today's energy is read from SBE's dashboard contract;
values without an explicit coverage flag are marked as partial. The phase and
grid detail view shows current SBE live values only; it does not request
history. **Grid info** remains the More Info click target.

------------------------------------------------------------------------

# 🐛 Troubleshooting

### The main energy flows are not visible

Check that the **Solar Battery Economy** integration is installed and
that its energy-system sensors are available in Home Assistant.

The card discovers the integration by entity suffix, so the exact entity
prefix does not need to match a particular installation.

### A device does not show a flow

Check that:

``` yaml
enabled: true
```

and that a valid SBE consumer ID is selected. Check the SBE live-runtime
subscription and that the consumer reports power quality `valid` in W.

### Legacy panel settings

Older saved Lovelace configurations may still contain `sidePanels`,
`importTodayEntity` or `exportTodayEntity`. These retired settings are
ignored; editing and saving the card removes them from its configuration.

### Consumer data is unavailable

Confirm the selected consumer still exists in SBE and that its runtime
power, status, SOC or temperature quality is valid. The card does not
substitute local entities.

------------------------------------------------------------------------

# 🤝 Contributing

Issues, suggestions and pull requests are welcome.

When reporting an issue, please include:

-   Home Assistant version
-   Card version
-   Relevant configuration
-   Browser/device
-   Any errors shown in the Home Assistant browser console

------------------------------------------------------------------------

# 📄 License

MIT License

------------------------------------------------------------------------

# ⭐ Support

If you like the card, consider giving the repository a ⭐ on GitHub.

------------------------------------------------------------------------

## Version 2

**Solar Battery Economy Flow Card V2 is a complete rebuild and
refinement of the original card.**

The V2 architecture, rendering system, configuration model and
integration handling have been redesigned with the goal of providing a
cleaner, more responsive and more polished Home Assistant energy
visualization.

This README intentionally documents **V2 only** and does not describe
the legacy Version 1 configuration.
