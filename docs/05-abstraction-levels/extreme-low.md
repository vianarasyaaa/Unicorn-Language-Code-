# EXTREME_LOW mode

**Focus:** Maximum explicit software control  
**Control model:** Expose layout, alignment, ownership, byte order, partial I/O, error paths, ABI rules, and backend boundaries.  
**Source length:** Many lines by design when the goal is auditability and fine-grained control.

## Example (illustrative)

```unicorn
#level "EXTREME_LOW"
konstanta::tetapkan, 13, :N:
memori::alokasi_alignment, :N:, 8, :buffer:
memori::validasi, :buffer:
memori::validasi_alignment, :buffer:, 8
buffer::bersihkan, :buffer:, :N:
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
buffer::validasi_panjang, :buffer:, :N:
sistem::stdout_resolve, :stdout:
sistem::tulis_semua, :stdout:, :buffer:, :N:, :jumlah:
jika::tidak_sama, :jumlah:, :N:
    error::kembalikan, :"PARTIAL_OR_FAILED_WRITE"
:selesai
memori::bebaskan, :buffer:
:akhir
```

## Good fit
Auditable native/runtime boundary code; latency-sensitive components after profiling.

## Trade-offs
Complexity, portability burden, security risk, and maintenance costs are high; explicit control is not automatically faster.

## Performance and smoothness
This mode exposes certain choices that can affect performance. In an actual implementation, define measurable goals first: throughput, p50/p95/p99 latency, jitter, allocation count, memory footprint, startup time, power use, or code size. Profile on the target platform, add correctness tests, and compare against the higher-level version.

## Required implementation contract
Before this mode is considered implemented, the compiler/runtime must define valid syntax, canonical semantics, type behavior, ownership, error handling, target limitations, diagnostics, and conformance tests. Examples above are design sketches rather than executable code.
