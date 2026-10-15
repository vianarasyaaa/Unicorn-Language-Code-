# BYTE_BIT mode

**Focus:** Exact byte and bit representation  
**Control model:** Operate on bounded byte arrays, masks, fields, endianness, and binary formats.  
**Source length:** Often many lines for validation-heavy codecs.

## Example (illustrative)

```unicorn
#level "BYTE_BIT"
nilai::tetapkan, 0b00001100, :A:
nilai::tetapkan, 0b00001010, :B:
bit::AND, :A:, :B:, :AND_HASIL:
bit::OR, :A:, :B:, :OR_HASIL:
bit::XOR, :A:, :B:, :XOR_HASIL:
bit::geser_kiri, 1, 4, :SHIFT_HASIL:
buffer::baca_byte, :data:, :indeks:, :byte:
bit::mask, :byte:, 0b00001111, :field:
:akhir
```

## Good fit
Binary protocols, serialization, codecs, packet layouts, hardware registers exposed by a safe API.

## Trade-offs
Must define widths, signedness, overflow, byte order, and bounds exactly.

## Performance and smoothness
This mode exposes certain choices that can affect performance. In an actual implementation, define measurable goals first: throughput, p50/p95/p99 latency, jitter, allocation count, memory footprint, startup time, power use, or code size. Profile on the target platform, add correctness tests, and compare against the higher-level version.

## Required implementation contract
Before this mode is considered implemented, the compiler/runtime must define valid syntax, canonical semantics, type behavior, ownership, error handling, target limitations, diagnostics, and conformance tests. Examples above are design sketches rather than executable code.
