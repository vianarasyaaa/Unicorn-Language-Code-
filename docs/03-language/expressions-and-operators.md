# Expressions and operators

A complete specification should define precedence, associativity, short-circuit behavior, overflow, divide-by-zero, NaN behavior, integer promotions, and conversion rules.

Proposed conceptual families:
- Arithmetic: add, subtract, multiply, divide, remainder.
- Comparison: equal, not equal, less/greater, inclusive comparisons.
- Boolean: and, or, not.
- Bitwise: AND, OR, XOR, NOT, shifts, masks.
- Assignment and compound assignment.
- Address and dereference operators in low-level profiles.
- Range and pattern operators for control flow.

Example syntax sketch:
```unicorn
nilai::tambah, :a:, :b:, :hasil:
bit::AND, 12, 10, :mask:
```

Do not assume these calls define overflow or type conversion; those details must be part of the language semantics.
