/**
 * Deterministic pseudo-random helpers, shared by every renderer
 * that needs per-instance "randomness" (jittered particle paths,
 * spark timing, etc.) without ever using Math.random().
 *
 * Why: these renderers live in a tree that's rewritten on every
 * hass update. A value that changes between renders changes the
 * SMIL attributes on the same DOM nodes, which makes the running
 * animation visibly restart/jump. Seeding by a stable identity
 * (particle index, edge id, ...) keeps the same "random" value
 * across renders, while still differing between instances.
 */

export function pseudoRandom(seed: number): number {
    const x = Math.sin(seed * 12.9898) * 43758.5453;
    return x - Math.floor(x);
}

export function hashString(value: string): number {
    let h = 0;
    for (let i = 0; i < value.length; i++) {
        h = (h * 31 + value.charCodeAt(i)) % 100000;
    }
    return h;
}
