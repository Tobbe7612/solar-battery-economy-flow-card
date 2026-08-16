# Architecture Notes

## Core design

```text
Home Assistant
     │
     ▼
State / Entity Discovery
     │
     ▼
Card Data
     │
     ▼
Energy Model
     │
     ▼
Flow Graph / Layout
     │
     ▼
Renderers
     │
     ▼
SVG Scene
```

Each layer should have a clear responsibility.

## Data layer
Responsible for:
- Finding supported entities
- Reading Home Assistant state
- Converting state into card data
- Keeping HA-specific details away from rendering

Relevant areas:

```text
src-v2/config/
src-v2/core/card-data.ts
src-v2/core/energy-model.ts
```

## Layout layer
Responsible for:
- Node positions
- Scene dimensions
- Desktop/mobile composition
- Solar arc geometry
- Side-panel positions

Relevant areas:

```text
src-v2/layouts/
src-v2/core/responsive-engine.ts
```

Desktop basis:

```text
1920 × 1080
```

## Graph layer
Responsible for semantic relationships between energy objects.

Concepts:
- Node
- Port
- Anchor
- Edge
- Flow definition
- Waypoint
- Direction

Relevant area:

```text
src-v2/renderers/graph/
```

The graph describes what flows between objects; rendering decides how those flows look.

## Renderer layer
Responsible for turning graph/layout information into SVG.

Major areas:

```text
graph/
icons/
labels/
panels/
solar-arc.ts
solar-particles.ts
flow-renderer.ts
flow-primitives.ts
```

Avoid putting business logic into visual renderers.

## Flow direction
Flow direction is semantic. Do not determine it solely from screen coordinates.

## Particle rendering
Established visual rules:
- Power controls animation intensity/speed
- Particle packets remain discrete
- Large streaks are avoided
- Glow emphasizes particles
- Spacing should not look perfectly mechanical
- Low/no power should not imply activity

## Nodes
Nodes should remain visually integrated with the background.

Visual hierarchy:

```text
scene
  ↓
energy flows
  ↓
nodes
  ↓
text/details
```

## Background system
Background selection is based on:

```text
weather
+
time of day
+
layout/device
```

Production base path:

```text
/hacsfiles/solar-battery-economy-flow-card/assets/backgrounds
```

Development URLs must not leak into production.

## Side panels
Energy and Economy panels are secondary information surfaces.

Energy:
- Import today
- Export today
- Grid independence
- Solar self consumption
- Battery utilization
- CO₂ saved

Economy:
- Savings today
- Savings this month
- Payback time
- Savings this year
- Estimated annual saving
- ROI

## Adding a new device
1. Determine semantic data.
2. Extend configuration if required.
3. Add layout information.
4. Add graph/flow definitions.
5. Add anchors/ports if required.
6. Add icon.
7. Add labels/status.
8. Add rendering only where necessary.
9. Test desktop.
10. Test mobile if affected.
11. Build.
12. Test in Home Assistant.

Do not start by drawing a node directly in `card.ts`.

## Anti-patterns
Avoid:
- Direct arbitrary SVG drawing from feature code
- Duplicate rendering pipelines
- Hidden magic configuration
- Environment-specific production URLs
- Large refactors during bug fixes

## Future direction
Continue toward:
- One canonical flow engine
- Clear data/model boundaries
- Minimal legacy rendering
- Explicit asset handling
- Reusable render primitives
- Predictable responsive layouts
- Easy extension with additional devices
