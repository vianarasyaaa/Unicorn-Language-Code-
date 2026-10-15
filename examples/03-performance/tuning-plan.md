# Example: tuning plan, not benchmark result

Potential steps for an event-driven service:
1. Start with high-level message handling.
2. Measure end-to-end p95/p99 latency and memory under representative load.
3. Inspect queue delay, allocations, and database/network latency.
4. Add bounded queues and buffer reuse only where measurements show a bottleneck.
5. Tune concurrency and retry policies to avoid contention/reconnect storms.
6. Rewrite a hot parsing routine at `LOW` or `BYTE_BIT` only if profiling justifies it.
7. Re-run correctness, fuzzing, load, and regression tests.

This document contains no benchmark results and makes no speed claim.
