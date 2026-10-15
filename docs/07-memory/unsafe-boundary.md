# Unsafe boundary

Unsafe mode is for operations that cannot be proven safe by the type system, such as raw pointer arithmetic, inline assembly, or direct access to a foreign ABI.

Every unsafe block should state:
- Preconditions.
- Memory ranges touched.
- Alignment requirements.
- Lifetime assumptions.
- Alias rules.
- CPU/OS assumptions.
- Error paths and cleanup.
- How tests validate the invariants.

A language design should minimize unsafe surface area, encapsulate it behind safe APIs, and provide sanitizer/fuzz testing where available.
