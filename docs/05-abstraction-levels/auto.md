# AUTO mode

**Focus:** Minimal ceremony  
**Control model:** Runtime/default library chooses routine behavior.  
**Source length:** Two to four lines for a tiny task is an illustrative goal, not a guaranteed line limit.

## Example (illustrative)

```unicorn
#level "AUTO"
program::buat, :"halo"
:akhir
```

## Good fit
Fast prototyping; small scripts; tasks with standard behavior.

## Trade-offs
Limited tuning visibility; relies on well-defined runtime defaults.

## Performance and smoothness
This mode exposes certain choices that can affect performance. In an actual implementation, define measurable goals first: throughput, p50/p95/p99 latency, jitter, allocation count, memory footprint, startup time, power use, or code size. Profile on the target platform, add correctness tests, and compare against the higher-level version.

## Required implementation contract
Before this mode is considered implemented, the compiler/runtime must define valid syntax, canonical semantics, type behavior, ownership, error handling, target limitations, diagnostics, and conformance tests. Examples above are design sketches rather than executable code.
