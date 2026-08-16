# AI Project Handoff Template

> Generic template for starting a new project or a new AI/chat session.

# [PROJECT NAME]

## 1. Project purpose
- What does it do?
- Who/what uses it?
- What problem does it solve?
- What is the desired end result?

## 2. Current status
- Version:
- Production branch:
- Development branch:
- Build status:
- Runtime status:
- Last verified environment:
- Known blockers:

## 3. Technology
- Language:
- Framework:
- Build system:
- Runtime:
- Target platform:
- Important dependencies:

## 4. Repository structure

```text
project/
├── ...
└── ...
```

Explain important directories.

## 5. Architecture

```text
input
 ↓
data
 ↓
model
 ↓
business logic
 ↓
rendering/output
```

Describe each layer.

## 6. Important files

| File | Responsibility |
|---|---|
| `...` | ... |

## 7. Design decisions
Record decisions future developers should not accidentally undo.

## 8. Visual/UX decisions
Record:
- Style
- Layout rules
- Colors
- Animation rules
- Responsive behavior
- Explicitly rejected approaches

## 9. Configuration
Document:
- Required configuration
- Optional configuration
- Defaults
- Backwards compatibility
- Breaking changes

## 10. Development workflow

```text
change
→ build
→ runtime test
→ visual test
→ commit
```

Baseline rules:
- Read actual files before modifying them.
- Never guess missing code.
- Ask for missing context.
- Prefer focused changes.
- Do not mix unrelated refactors with bug fixes.

## 11. Environment/deployment
Document development and production paths separately.

```text
development:
...

production:
...
```

## 12. Known bugs

| Problem | Status | Notes |
|---|---|---|
| ... | Open | ... |

## 13. Known technical debt
- ...
- ...

## 14. Lessons learned
Record general lessons, not just individual bugs.

Example:

> A local development installation can hide production asset-path problems, so assets must be verified through the actual production deployment path.

## 15. Testing checklist
- [ ] Build
- [ ] Unit/integration tests if applicable
- [ ] Runtime test
- [ ] Browser console
- [ ] Network/assets
- [ ] Desktop
- [ ] Mobile
- [ ] Existing configuration
- [ ] New configuration

## 16. Release procedure

```text
development
→ review
→ build
→ merge
→ tag
→ release
→ deployment
→ real-world verification
```

## 17. Git rules
Before branch operations:

```powershell
git branch --show-current
git status --short
git log --oneline --decorate -5
```

Document the project's branching strategy.

## 18. AI working instructions

Recommended baseline:

> Read the actual project files before proposing code changes. Do not guess file contents, APIs, imports or architecture. If relevant information is missing, ask for it.
>
> Work incrementally. Prefer one logical change at a time, then build and verify before continuing.
>
> Distinguish data, model, business-logic, layout, rendering, build and deployment problems before changing code.
>
> Do not introduce a new abstraction merely to hide a bug in an existing abstraction.
>
> Preserve established architecture and design decisions unless there is a documented reason to change them.
>
> For visual work, use actual screenshots or runtime results rather than assuming the result from source code alone.
>
> For releases, verify the artifact in the actual target environment.

## 19. Change log

| Date | Version | Milestone |
|---|---|---|
| YYYY-MM-DD | 0.1.0 | Initial implementation |

## 20. Current next steps
1. ...
2. ...
3. ...

## Handoff rule
Update this document whenever a major architectural decision, deployment lesson, release lesson, or recurring debugging pattern is discovered.
