# Performance Strategy

UNICORN Ω should expose performance controls, not promise results from syntax. Optimization is a measured loop.

## Four objectives

1. **Latency:** response time; examine p50/p95/p99.
2. **Throughput:** useful completed work per second.
3. **Resource efficiency:** CPU, memory, allocations, file descriptors, network connections.
4. **Smoothness/reliability:** bounded queues, predictable tail latency, no event-loop blocking, deadline propagation, and graceful overload behavior.

## Practical order

1. Define user-visible SLO or target.
2. Build representative test data and load pattern.
3. Capture baseline and resource metrics.
4. Profile CPU, allocation, lock contention, I/O, and network waits.
5. Fix algorithmic issues before micro-optimizing.
6. Evaluate buffering, pooling, batching, concurrency, cache, and serialization costs.
7. Add low-level/native implementation only for confirmed hot paths.
8. Re-run correctness, fuzz, failure and performance tests.

## Frequent optimizations to evaluate

- Reuse HTTP/database clients and connection pools.
- Bound request/response/body/queue sizes.
- Reuse buffers only with safe ownership and clear lifecycle.
- Batch compatible operations to reduce overhead.
- Stream large files rather than retaining all bytes.
- Avoid unbounded async task creation.
- Use indexes and efficient queries.
- Apply cache only with valid authorization-aware keys and invalidation.
- Avoid logging huge payloads on the critical path.
- Keep retry bounded and prevent retry storms.

## Avoid premature optimization

Do not manually manage every byte or write Assembly just to make source longer. Low-level control is costly to maintain and can introduce memory unsafety. Record the hypothesis and benchmark result before keeping the optimization.
