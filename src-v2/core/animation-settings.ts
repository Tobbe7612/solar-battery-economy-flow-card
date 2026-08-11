/**
 * ============================================================
 * Animation Settings
 * ============================================================
 * Single central switch for how much motion the card shows.
 *
 * Renderers never check this directly — they always go through
 * getAnimationProfile() / getLabelAnimationProfile(), which
 * apply the level internally. This means a future UI toggle (or
 * a real "reduced" implementation) never requires changing any
 * renderer's call site.
 *
 * Only "full" is implemented today. "reduced" exists in the type
 * so the label animation profile can already branch on it, but
 * getAnimationLevel() always returns "full" until a real setting
 * is wired up.
 */

export type AnimationLevel = "full" | "reduced";

export function getAnimationLevel(): AnimationLevel {
    return "full";
}
