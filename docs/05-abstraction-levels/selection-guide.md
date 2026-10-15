# Choosing a level

- Pick `AUTO` / `HIGH` when clarity and delivery speed matter more than manual implementation detail.
- Pick `MID` when you want explicit control flow, error handling, and module boundaries.
- Pick `LOW_MID` when you need visibility into buffers, queueing, resource lifetime, and I/O contracts.
- Pick `LOW` / `EXTREME_LOW` for measured bottlenecks, embedded/native code, specialized allocation, or ABI glue.
- Pick `BYTE_BIT` for binary protocols, codecs, and packed fields.
- Pick `ASM` only when target-specific instruction control is necessary and benchmarks justify it.
- Pick `HARDWARE` only for an HDL/synthesis workflow.

Prefer the highest level that meets measurable requirements, then lower only the identified bottleneck. This usually balances readability, safety, and speed best.
