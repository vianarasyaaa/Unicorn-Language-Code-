# Explicit performance mode: control without superstition

UNICORN Ω's vision includes using more explicit source code when a developer wants to tune performance and resource use. Document this as a choice of controls—not as a rule that longer code is intrinsically faster.

## Conceptual profile

```unicorn
#profile "PERFORMANCE"
#level "LOW_MID"
#optimize "RELEASE"
#bounds "CHECKED_AT_BOUNDARIES"
#allocation "REUSE_WHERE_MEASURED"
#concurrency "BOUNDED"
```

These profile directives are proposals. Their meaning must be measurable, documented, and reproducible. A compiler must never silently remove required safety checks solely because a profile is named `PERFORMANCE`.

## When explicit code can help

- Reusing a buffer instead of repeated large allocations.
- Batching small network/database operations when semantics allow.
- Bounding queues to avoid memory growth and latency spikes.
- Choosing a suitable data layout for a measured hot path.
- Avoiding unnecessary copies with well-defined ownership/lifetimes.
- Using async/concurrency to overlap I/O while limiting the number of in-flight tasks.
- Using specialized intrinsics/Assembly only where profiles prove a benefit.

## When it can hurt

- Manual pooling can increase retained memory or fragmentation.
- Overly complex batching can increase latency for single requests.
- Too much concurrency can overload downstream APIs.
- Unsafe pointer work can cause memory corruption.
- Handwritten Assembly can inhibit compiler optimization or violate ABI rules.
- Microbenchmarks may not represent real production workloads.

## Required benchmark report

Include hardware/OS, compiler/runtime revision, workload, input size, warm-up, repetitions, baseline, p50/p95/p99 latency, throughput, allocations/bytes, peak memory, CPU utilization, error rate, and correctness tests. Publish source and command lines so the result can be reproduced.
