# Buffers and allocators

Low-level work often benefits from explicit buffer lifecycle and allocation policy. Proposed allocator choices include system allocator, arena, pool, slab, fixed-capacity buffer, and caller-provided allocation.

Performance considerations:
- Avoid repeated allocations in hot loops when safe to reuse a buffer.
- Bound queue and buffer sizes to prevent unbounded growth.
- Track peak usage and allocation count.
- Define behavior under exhaustion.
- Align data only when required by the target/API and benchmark the effect.
- Prefer ownership-safe APIs instead of raw pointers where possible.

More manual allocation code can improve predictability when used well, but it can also create leaks, fragmentation, contention, and latency spikes.
