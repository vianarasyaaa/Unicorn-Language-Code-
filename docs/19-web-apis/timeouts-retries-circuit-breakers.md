# Timeouts, retries, circuit breakers, and idempotency

Resilience features should prevent a slow or failing dependency from consuming unlimited tasks, connections, memory, or time.

## Timeouts

Define whether a timeout applies to connect, TLS handshake, sending headers/body, first byte, reading body, or the total end-to-end deadline. A single “timeout” without clear semantics is hard to reason about. Propagate a total deadline through nested calls where possible.

## Retry policy

- Retry only transient classes and only within a fixed attempt/deadline budget.
- Use exponential backoff with jitter to avoid synchronized retry storms.
- Respect `Retry-After` when applicable.
- Retry safe/idempotent requests more readily than side-effecting operations.
- For creation/payment/action endpoints, use API-supported idempotency keys and request replay contracts.
- Do not retry invalid input, authentication failures, or authorization failures without a specific reason.

## Circuit breaker

A conceptual breaker has closed, open, and half-open states. When failures cross a defined threshold, stop sending normal traffic for a cooldown interval, then allow limited probes. Choose thresholds from measured service behavior, not arbitrary folklore.

## Proposed policy

```unicorn
resilience::policy, :"posts_api":
    timeout_total_ms: 5000
    attempts_max: 3
    backoff: :"EXPONENTIAL_JITTER"
    retry_statuses: [429, 502, 503, 504]
    retry_methods: ["GET", "HEAD"]
    respect_retry_after: benar
:selesai
```

Object literal syntax above is pseudocode until the grammar is defined.

## Observability

Capture request count, failure category, retries, timeout rate, connection wait, first-byte latency, total latency, and response size. Never use full authorization headers or unredacted personal data as labels.
