# Type conversions

Conversions should be explicit whenever truncation, sign changes, encoding loss, precision loss, or allocation can occur. Safe widening conversions may be implicit only if the type rules make them unambiguous.

Examples of conversions that need specified behavior:
- `i64` to `u8`.
- `f64` to `i32`.
- Unicode text to UTF-8 bytes.
- Native pointer to integer address.
- Foreign string to UNICORN string.
- Optional/result unwrapping.

For low-level operations, invalid conversions should produce a typed error or require an explicitly marked unsafe operation.
