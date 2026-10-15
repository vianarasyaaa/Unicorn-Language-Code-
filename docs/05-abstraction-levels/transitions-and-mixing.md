# Mixing and transitioning between levels

The intended model is **one language, multiple levels of exposed detail**. A project should be able to expose a small high-level API and implement it with a low-level module. The exact syntax for switching levels is still proposed.

Possible design choices:
- Module-level `#level` directive.
- Function-level annotations that select an implementation strategy.
- High-level wrapper functions that call low-level primitives.
- Conditional compilation for target-specific code.
- Explicit unsafe/native blocks for operations that cannot be verified in the safe subset.

## Invariants across levels
- The same operation must preserve its declared semantic behavior.
- Different aliases must resolve to the same canonical operation.
- Low-level implementations must satisfy the same result/error contract as the high-level API.
- A module must declare target requirements and unsupported platforms.
- Any loss of safety guarantees must be visible at the call boundary.
