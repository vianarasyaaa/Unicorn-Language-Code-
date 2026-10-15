# LOW_MID mode

**Focus:** Controlled implementation  
**Control model:** Expose buffer sizing, validation, resource lifetime, queues, and I/O boundaries.  
**Source length:** Often tens of lines for one operation.

## Example (illustrative)

```unicorn
#level "LOW_MID"
teks::enkode, :"Halo, dunia!", :"UTF8", :data:
buffer::ukur, :data:, :panjang:
memori::alokasi, :panjang:, :buffer:
memori::validasi, :buffer:
buffer::salin, :data:, :buffer:, :panjang:
sistem::tulis, :stdout:, :buffer:, :panjang:, :tertulis:
memori::bebaskan, :buffer:
:akhir
```

## Good fit
Performance-aware services, binary-processing helpers, controlled resource paths.

## Trade-offs
The programmer must understand ownership, error paths, and contracts.

## Performance and smoothness
This mode exposes certain choices that can affect performance. In an actual implementation, define measurable goals first: throughput, p50/p95/p99 latency, jitter, allocation count, memory footprint, startup time, power use, or code size. Profile on the target platform, add correctness tests, and compare against the higher-level version.

## Required implementation contract
Before this mode is considered implemented, the compiler/runtime must define valid syntax, canonical semantics, type behavior, ownership, error handling, target limitations, diagnostics, and conformance tests. Examples above are design sketches rather than executable code.
