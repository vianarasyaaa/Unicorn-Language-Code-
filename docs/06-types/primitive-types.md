# Primitive types

Proposed types include fixed-width unsigned and signed integers (`u8`, `u16`, `u32`, `u64`, `i8`, `i16`, `i32`, `i64`), floating-point types (`f32`, `f64`), booleans, Unicode scalar values, byte arrays, strings, addresses, and platform-sized integers.

A normative type reference must specify:
- Width and alignment.
- Representation and valid range.
- Overflow and underflow behavior.
- Conversion and promotion rules.
- Whether uninitialized values are possible.
- How values cross FFI/ABI boundaries.
- Exact semantics for floats, NaN, infinities, and signed zero.

The names shown here are proposals, not implemented compiler types.
