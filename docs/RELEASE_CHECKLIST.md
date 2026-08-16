# Release Checklist

## A. Code
- [ ] Relevant source files reviewed
- [ ] No unintended legacy rendering path active
- [ ] No development-only paths remain
- [ ] Configuration changes documented
- [ ] `npm run build` succeeds

## B. Bundle
- [ ] JS bundle updated when required
- [ ] Source map updated when required
- [ ] Generated bundle contains intended implementation
- [ ] No stale `/local/dev/...` path in production output

## C. Assets
- [ ] Required assets exist
- [ ] Expected `dist/assets/` structure exists
- [ ] HACS production paths are correct
- [ ] Browser requests succeed
- [ ] Background images tested through HACS installation

## D. Home Assistant
- [ ] Existing configuration tested if compatibility is intended
- [ ] New configuration tested
- [ ] No relevant new console errors
- [ ] Desktop checked
- [ ] Mobile checked when affected
- [ ] Flow directions checked
- [ ] Background selection checked
- [ ] Energy panel checked
- [ ] Economy panel checked

## E. Git
Before release:

```powershell
git branch --show-current
git status --short
git log --oneline --decorate -5
```

- [ ] Correct branch
- [ ] Working tree contains only intended changes
- [ ] Changes committed
- [ ] Branch pushed
- [ ] Changes merged into `main`

## F. Versioning
Use semantic versioning:
- MAJOR = breaking change
- MINOR = backwards-compatible feature
- PATCH = bug fix

Example:
- `2.0.0` = major V2 release
- `2.0.1` = HACS asset-path bug fix

## G. GitHub Release
- [ ] Tag is based on `main`
- [ ] Release title matches version
- [ ] Notes describe actual change
- [ ] Latest/Pre-release setting is intentional

## H. HACS
- [ ] Release becomes available
- [ ] Update/install from HACS
- [ ] Restart/reload as appropriate
- [ ] Test installed version
- [ ] Remove obsolete development resources if no longer needed
- [ ] Verify assets without development files

## I. Post-release
- [ ] GitHub `main` checked
- [ ] Tag/release checked
- [ ] HACS version checked
- [ ] Real Home Assistant checked
- [ ] New lessons added to `PROJECT_HANDOFF.md`

## Release principle
A release is not finished when GitHub says "Published". It is finished when the installed artifact has been verified in the target Home Assistant environment.
