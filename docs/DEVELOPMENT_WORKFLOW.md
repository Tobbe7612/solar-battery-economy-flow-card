# Development Workflow

## Purpose
Use this workflow for development and maintenance of the card.

## Before changing code
Determine:
1. What is the actual user-visible problem?
2. Which file owns the behavior?
3. Is it V2 or legacy rendering?
4. Is the issue data, model, layout, rendering, assets, build, or deployment?

Do not start by changing code.

## Inspect the real implementation
Trace:

```text
entry point
→ import
→ data
→ renderer
→ output
```

For rendering issues, find all call sites before introducing a new renderer.

For asset issues, inspect both source and `dist`.

## Make one logical change
Prefer:

```text
one logical change
→ build
→ test
→ inspect
```

Do not stack unrelated fixes.

## Build

```powershell
npm run build
```

If it fails, stop and fix the build.

## Runtime verification
For Home Assistant changes:
- Reload/reinstall as appropriate.
- Check browser console.
- Check network requests.
- Test actual behavior.

For assets, a successful browser request is stronger evidence than merely seeing the file in GitHub.

## Visual verification
When changing visuals, use actual screenshots.

Check:
- positions
- overlaps
- flow direction
- particle density
- glow
- labels
- panels
- desktop
- mobile when affected

## Commit
Prefer focused messages, e.g.:

```text
Fix HACS background asset paths
Refine battery flow rendering
Adjust mobile node layout
Fix solar arc positioning
```

Avoid vague messages.

## Pull request
For meaningful changes:

```text
development branch
→ Pull Request
→ main
```

Describe what changed, why, how it was tested, and compatibility impact.

## Release
Only release after the intended change exists on `main`:

```text
merge
→ verify main
→ tag
→ GitHub Release
→ HACS update
→ real Home Assistant verification
```

## Debugging classification
### Data problem
Wrong Home Assistant state/entity.

### Model problem
Correct HA data transformed incorrectly.

### Graph problem
Wrong node/edge/direction/waypoint.

### Renderer problem
Correct graph data drawn incorrectly.

### Layout problem
Correct rendering positioned incorrectly.

### Asset problem
Correct asset exists but cannot be fetched.

### Build problem
Source is correct but generated bundle is stale/wrong.

### Deployment problem
GitHub/HACS/HA is not serving the expected artifact.

Classify first; then change code.

## Asset debugging
Search source:

```powershell
Select-String -Path src-v2\**\*.ts -Pattern "local/dev|hacsfiles|assets/"
```

Search bundle:

```powershell
Select-String -Path dist\solar-battery-economy-flow-card.js -Pattern "local/dev|hacsfiles|assets/"
```

Then test the actual browser URL.

## Environment rule
Development:

```text
/local/dev/...
```

Production/HACS:

```text
/hacsfiles/...
```

Never ship development-only URLs in production output.

## Repository rule
The repository should contain durable technical truth. Chat history should not be the only place where architecture decisions or lessons live.
