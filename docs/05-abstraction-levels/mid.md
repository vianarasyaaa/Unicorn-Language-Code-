# MID mode

**Focus:** Explicit application flow  
**Control model:** Functions, validation, explicit results, configuration, and recoverable errors.  
**Source length:** Often 5–30 lines for a small example, depending on formatting.

## Example (illustrative)

```unicorn
#level "MID"
fungsi::buat, :"buat_pesan"
    nilai::tetapkan, :"Halo, dunia!", :pesan:
    teks::validasi, :pesan:
    kembalikan::nilai, :pesan:
:selesai
fungsi::panggil, :"buat_pesan", :hasil:
layar::cetak, :hasil:
:akhir
```

## Good fit
Services, feature modules, code that needs clear error behavior.

## Trade-offs
Still uses libraries to handle memory, I/O, and platform-specific details.

## Performance and smoothness
This mode exposes certain choices that can affect performance. In an actual implementation, define measurable goals first: throughput, p50/p95/p99 latency, jitter, allocation count, memory footprint, startup time, power use, or code size. Profile on the target platform, add correctness tests, and compare against the higher-level version.

## Required implementation contract
Before this mode is considered implemented, the compiler/runtime must define valid syntax, canonical semantics, type behavior, ownership, error handling, target limitations, diagnostics, and conformance tests. Examples above are design sketches rather than executable code.
