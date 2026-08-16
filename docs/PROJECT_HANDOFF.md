# Solar Battery Economy Flow Card — Project Handoff

> Long-term technical memory for the project. Read this before architectural, rendering, deployment, or release changes.

## Project
- Repository: `Tobbe7612/solar-battery-economy-flow-card`
- Type: Home Assistant custom Lovelace card
- Primary integration: Solar Battery Economy
- Language: TypeScript
- Build: Rollup
- Architecture: V2
- Production branch: `main`
- Development branch historically used: `v2-dev`
- V2 target during development: Home Assistant 2026.6.x

## Product goal
The card visualizes a complete home energy system as one coherent animated scene.

Core concepts:
- Solar
- Battery and SOC
- House consumption
- Grid import/export
- EV/car and SOC
- Heat pump
- Spa
- Appliances
- Energy statistics
- Economy/financial statistics

The visual language is dark, atmospheric, premium, and integrated with the background scene.

## V2 philosophy
V2 is a complete rebuild, not a minor V1 update.

Conceptual data flow:

```text
Home Assistant state
        ↓
card-data / energy model
        ↓
semantic energy objects
        ↓
graph / flow definitions
        ↓
renderers
        ↓
SVG scene
```

Do not bypass these layers without a clear reason.

## Important V2 areas

```text
src-v2/
├── card.ts
├── config/
├── core/
├── editor/
├── layouts/
├── renderers/
├── styles/
└── types/
```

Important files/concepts include:
- `core/card-data.ts`
- `core/energy-model.ts`
- `core/background-manager.ts`
- `core/responsive-engine.ts`
- `core/sun-position.ts`
- `core/time-of-day.ts`
- `config/autodiscovery.ts`
- `config/config.ts`
- `editor/editor.ts`
- `layouts/desktop-layout.ts`
- `layouts/mobile-layout.ts`
- `renderers/anchors.ts`
- `renderers/flow-primitives.ts`
- `renderers/flow-renderer.ts`
- `renderers/solar-arc.ts`
- `renderers/solar-particles.ts`
- `renderers/graph/flow-graph.ts`
- `renderers/graph/flow-definitions.ts`
- `renderers/graph/flow-ports.ts`
- `renderers/graph/graph-anchors.ts`
- `renderers/graph/graph-renderer.ts`
- `renderers/graph/render-edge-v2.ts`
- `renderers/graph/edge-geometry.ts`
- `renderers/graph/path-builder.ts`
- `renderers/labels/`
- `renderers/panels/`
- `renderers/icons/`

## Scene coordinate system
Desktop V2 is based around a common scene of approximately `1920 × 1080`.

Background, solar arc, panels, nodes, labels, and flows should conceptually share the same coordinate system.

Avoid independent coordinate systems unless there is a strong architectural reason.

## Flow engine
V2 uses a graph-oriented model with:
- Nodes
- Anchors
- Ports
- Flow definitions
- Edges
- Waypoints
- Edge geometry
- Particle rendering

A flow must have a clear semantic direction.

## Legacy rendering warning
During V2 development, legacy V1 rendering and the new graph renderer existed in parallel and some flows could be drawn twice.

Before adding another renderer:
1. Find every existing rendering path.
2. Check whether legacy rendering is still active.
3. Check imports and call sites.
4. Remove obsolete paths where appropriate.
5. Only then add new rendering logic.

Do not solve duplicate rendering by adding another rendering layer.

## Visual design decisions
Established direction:
- Dark atmospheric background scenes
- Nodes that melt into the scene
- Subtle transparent/dark panels
- Glowing energy particles
- Discrete packets rather than large streaks
- Glow around particles rather than excessive conduit glow
- Dynamic flow speed based on power
- Dynamic flow color
- Irregular packet spacing
- Local conduit highlights
- Subtle light pulses
- Clear restrained labels
- Solar arc and sun position

The flow visualization is a primary visual element.

## Node information
### Grid
- Current power
- Import/export state

### House
- Current consumption

### Solar
- Current power
- Above/below horizon state

### Battery
- Current power
- Charging/discharging state
- SOC

### Car
- Current power
- Charging/connected/idle/not-connected state
- SOC

### Heat pump
- Current power
- Status

### Spa
- Current power
- Status

### Appliances
- Current power
- Status

## Energy and Economy panels
Energy examples:
- Import today
- Export today
- Grid independence
- Solar self consumption
- Battery utilization
- CO₂ saved

Economy examples:
- Savings today
- Savings this month
- Payback time
- Savings this year
- Estimated annual saving
- Estimated ROI

These are intended to be supplied by Solar Battery Economy.

## Automatic discovery
V2 includes automatic discovery of supported Solar Battery Economy data.

Relevant area:
`src-v2/config/autodiscovery.ts`

## Device configuration
The developed V2 design supports configurable device slots, including up to four configurable slots.

## Icons
V2 uses built-in SVG icons rather than MDI icon support.

## Responsive layouts
Desktop and mobile layouts are supported. Mobile is a dedicated compact composition rather than simply a scaled desktop.

## Dynamic backgrounds
Background selection depends on:
- Layout/device
- Time of day
- Weather

Production base path:

```text
/hacsfiles/solar-battery-economy-flow-card/assets/backgrounds/
```

Never publish the development-only path:

```text
/local/dev/solar-battery-economy-flow-card/
```

This caused a real HACS bug and was fixed in v2.0.1.

## Asset deployment lesson
Verify the full chain:

```text
src-v2/assets/
        ↓
dist/assets/
        ↓
HACS-installed asset location
        ↓
browser request
        ↓
HTTP 200
```

A local development installation can hide production asset-path problems.

## Release history
### v2.0.0
Major V2 release containing the complete V2 rendering architecture, refined flows, automatic Solar Battery Economy detection/discovery, simplified configuration, configurable device slots, SVG icons, Energy/Economy panels, responsive layouts, improved labels/animations/glow, and removal of legacy V1 configuration and MDI support.

### v2.0.1
Bug-fix release changing production background URLs from the development path to:

```text
/hacsfiles/solar-battery-economy-flow-card/assets/backgrounds/
```

Verified in Home Assistant after removing the development asset directory.

## Screenshots
Current README screenshots:
- `images/desktop-v2.png`
- `images/mobile-v2.png`

The old V1 screenshot `images/desktop.png` was removed.

## Build
Generated production files:

```text
dist/
├── solar-battery-economy-flow-card.js
└── solar-battery-economy-flow-card.js.map
```

Normal build:

```powershell
npm run build
```

A green build is a prerequisite for continuing after relevant code changes.

## Development rules
1. Read real files first.
2. Never guess file contents, APIs, imports, or architecture.
3. Ask for missing information.
4. Prefer complete files for substantial edits.
5. Make one logical change at a time.
6. Build and verify before the next logical change.
7. Do not mix unrelated refactors with bug fixes.
8. Verify runtime, not just compilation.
9. Inspect both source and generated bundle when debugging deployment.

## Git workflow
Preferred flow:

```text
development
    ↓
development branch
    ↓
build + local verification
    ↓
push
    ↓
Pull Request
    ↓
merge into main
    ↓
tag
    ↓
GitHub Release
    ↓
HACS
    ↓
real Home Assistant verification
```

A branch, tag, and GitHub Release are different things.

Before branch operations or releases:

```powershell
git branch --show-current
git status --short
git log --oneline --decorate -5
```

## Known technical debt
- Review TypeScript `moduleResolution` when upgrading TypeScript.
- Continue removing obsolete V1/legacy rendering paths where safe.
- Keep asset deployment paths explicitly tested.
- Avoid unnecessary architectural complexity.
- Keep the V2 graph engine as the canonical flow-rendering system.

## Definition of done
A meaningful change is complete when:
- Source is correct
- Build is green
- No relevant new console errors exist
- Home Assistant runtime is tested when applicable
- Desktop visual result is acceptable
- Mobile is checked when affected
- Assets resolve through the intended production path
- Git history clearly describes the change
- Release/tag/main state is intentional

## Living-document rule
When a future bug reveals a general lesson, add that lesson here instead of relying on chat history.
