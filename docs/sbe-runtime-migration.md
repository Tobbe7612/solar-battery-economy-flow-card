# SBE runtime migration

Flow Card V2 subscribes to `solar_battery_economy/subscribe_live_runtime` (contract version 1). Slot `consumerId` maps presentation slots to SBE stable consumer IDs. SBE supplies normalized W power, consumer status level/value, optional SOC and temperature, battery SOC, and phase load.

Card-local layout, slot order, titles, icons, labels, colors, More Info targets, and status labels remain presentation settings. Numeric status thresholds and configured functional entity sources belong in SBE.

Configure each physical consumer in SBE, then select its stable consumer ID in the corresponding Flow Card slot. The slot has no local entity fallback. A slot with no selected or available consumer shows an explicit unavailable/configuration status and does not draw a valid zero-watt flow.

SBE supplies consumer power, status level/value, SOC and temperature, battery SOC, and phase load through `subscribe_live_runtime`. Flow Card keeps slot mapping and presentation choices, including optional reading selection and status labels, but all sensor sources and numeric thresholds are configured in SBE. Old local consumer sensor, status-source, status-threshold, battery SOC and phase configuration fields are discarded when card configuration is normalized. Phase-load rendering and the existing live-flow calculations remain in place.
