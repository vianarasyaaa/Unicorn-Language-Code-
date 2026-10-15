# HIGH mode

**Focus:** Intent-first abstraction  
**Control model:** Use high-level standard library calls to express what should happen.  
**Source length:** A few lines to about twenty lines for compact features is an illustrative range.

## Example (illustrative)

```unicorn
#level "HIGH"
layar::cetak, :"Halo, dunia!"
:akhir
```

## Good fit
Application logic, readable business rules, rapid feature development.

## Trade-offs
Behavior depends on library contracts; lower-level costs may be less visible.

## Performance and smoothness
This mode exposes certain choices that can affect performance. In an actual implementation, define measurable goals first: throughput, p50/p95/p99 latency, jitter, allocation count, memory footprint, startup time, power use, or code size. Profile on the target platform, add correctness tests, and compare against the higher-level version.

## Required implementation contract
Before this mode is considered implemented, the compiler/runtime must define valid syntax, canonical semantics, type behavior, ownership, error handling, target limitations, diagnostics, and conformance tests. Examples above are design sketches rather than executable code.
