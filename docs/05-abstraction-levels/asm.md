# ASM mode

**Focus:** Target-specific instruction interface  
**Control model:** Embed or call assembly through a compiler-supported constraint model.  
**Source length:** Length depends on the algorithm and target ISA.

## Example (illustrative)

```unicorn
#level "ASM"
assembly::blok, :"X86_64"
    MOV RAX, 100
    MOV RBX, 50
    ADD RAX, RBX
assembly::hasil, :RAX:, :hasil:
:akhir
```

## Good fit
Small specialized hot paths, ABI glue, intrinsics when compiler output is insufficient.

## Trade-offs
Architecture-specific, difficult to maintain, register/stack/ABI rules are strict; benchmarks required.

## Performance and smoothness
This mode exposes certain choices that can affect performance. In an actual implementation, define measurable goals first: throughput, p50/p95/p99 latency, jitter, allocation count, memory footprint, startup time, power use, or code size. Profile on the target platform, add correctness tests, and compare against the higher-level version.

## Required implementation contract
Before this mode is considered implemented, the compiler/runtime must define valid syntax, canonical semantics, type behavior, ownership, error handling, target limitations, diagnostics, and conformance tests. Examples above are design sketches rather than executable code.
