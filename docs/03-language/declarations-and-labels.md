# Declarations and labels

## Proposed declaration pattern
```unicorn
nilai::tetapkan, 42, :jawaban:
nilai::ambil, :jawaban:
```

A canonical declaration should specify the name, value, inferred/declared type, scope, mutability, and lifetime. A label should have exactly one well-defined interpretation at each use site.

## Questions that must be formalized
- Whether duplicate declarations shadow or produce errors.
- Whether labels are mutable by default.
- How labels cross function/module boundaries.
- Whether a resource label carries ownership.
- Whether a label may refer to stack, heap, constant, or register-allocated values.

For low-level code, resource labels should make ownership explicit and prevent use-after-free in safe code.
