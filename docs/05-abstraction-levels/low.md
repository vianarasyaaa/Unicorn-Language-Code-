# LOW mode

**Focus:** Manual resource and I/O control  
**Control model:** Make allocation, buffer operations, bounds, error handling, and system APIs explicit.  
**Source length:** Can range from dozens to hundreds of lines for carefully guarded routines.

## Example (illustrative)

```unicorn
#level "LOW"
konstanta::tetapkan, 13, :UKURAN:
memori::alokasi, :UKURAN:, :buffer:
memori::validasi, :buffer:
buffer::bersihkan, :buffer:, :UKURAN:
byte::tulis, :buffer:, 0, 72
byte::tulis, :buffer:, 1, 97
byte::tulis, :buffer:, 2, 108
byte::tulis, :buffer:, 3, 111
byte::tulis, :buffer:, 4, 44
byte::tulis, :buffer:, 5, 32
byte::tulis, :buffer:, 6, 100
byte::tulis, :buffer:, 7, 117
byte::tulis, :buffer:, 8, 110
byte::tulis, :buffer:, 9, 105
byte::tulis, :buffer:, 10, 97
byte::tulis, :buffer:, 11, 33
byte::tulis, :buffer:, 12, 10
buffer::validasi_panjang, :buffer:, :UKURAN:
sistem::tulis_semua, :stdout:, :buffer:, :UKURAN:, :hasil:
memori::bebaskan, :buffer:
program::keluar, :hasil:
:akhir
```

## Good fit
Native services, protocol implementations, custom allocators and specialized paths.

## Trade-offs
Detailed code increases responsibility for correctness; every API contract must be precise.

## Performance and smoothness
This mode exposes certain choices that can affect performance. In an actual implementation, define measurable goals first: throughput, p50/p95/p99 latency, jitter, allocation count, memory footprint, startup time, power use, or code size. Profile on the target platform, add correctness tests, and compare against the higher-level version.

## Required implementation contract
Before this mode is considered implemented, the compiler/runtime must define valid syntax, canonical semantics, type behavior, ownership, error handling, target limitations, diagnostics, and conformance tests. Examples above are design sketches rather than executable code.
