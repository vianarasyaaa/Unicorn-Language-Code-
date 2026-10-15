# Events and scheduling

For interactive programs and bots, event throughput and latency may matter. The design may provide queues, event handlers, cancellation, backpressure, and structured task ownership.

The specification must define:
- Queue capacity and overflow behavior.
- Ordering guarantees.
- Whether handlers may run concurrently.
- Cancellation semantics.
- Task failure propagation.
- Shutdown and draining behavior.
- Backpressure and overload strategy.
- Fairness and starvation guarantees.

A larger queue can absorb bursts but increases memory use and may raise tail latency. A smaller queue reduces memory but may apply backpressure earlier; choose based on measurements.
