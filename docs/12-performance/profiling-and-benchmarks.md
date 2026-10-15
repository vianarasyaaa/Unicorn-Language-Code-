# Profiling and benchmarks

A benchmark should isolate a meaningful task, use realistic input, avoid measurement artifacts, and report variance. Compare variants under the same conditions.

Recommended reporting fields:
- CPU / device and OS.
- Compiler/runtime/backend versions.
- Optimization profile and feature flags.
- Data set and input distribution.
- Warm-up and repetition count.
- p50, p95, p99 latency where relevant.
- Throughput and error rate.
- Peak and average memory.
- Allocation count and GC time if applicable.
- Energy/power when relevant.

Use a profiler before rewriting code in `EXTREME_LOW`. Always compare against the simpler version.
