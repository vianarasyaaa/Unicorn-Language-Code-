# Memory model

This page proposes a memory model; it is not a formal guarantee until implemented and proven with conformance tests.

## Goals
- Safe code should prevent use-after-free, double-free, buffer overrun, and invalid dereference.
- Low-level code may expose manual allocation but still gets bounds and lifetime contracts where possible.
- Unsafe operations are explicitly marked and document preconditions.
- Resource cleanup should run on normal return and recoverable failure paths.

## Required concepts
- Stack and heap allocation.
- Ownership, borrowing, and lifetime rules—or a fully specified alternative model.
- Mutable aliasing rules.
- Alignment and object layout.
- Allocator failure behavior.
- Pointer provenance and nullability.
- Foreign-memory ownership.
- Memory ordering for concurrent access.

## Example sketch
```unicorn
memori::alokasi, 1024, :buffer:
memori::validasi, :buffer:
buffer::validasi_panjang, :buffer:, 1024
memori::bebaskan, :buffer:
```

The runtime must define whether allocation returns a nullable pointer, result object, owned handle, or another explicit type.
