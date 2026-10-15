# Rate limits, quotas, and backpressure

Rate limiting protects services and other tenants from excessive use. Clients must cooperate with published limits instead of blindly launching parallel requests.

## Client behavior

- Read documented rate-limit headers when provided.
- Honor `Retry-After` when applicable.
- Add jitter to retries.
- Bound concurrency, response size, and total elapsed time.
- Do not create unbounded retry queues.
- Use a cache or batch endpoint when supported.
- Surface quota exhaustion separately from network failure.

## Server behavior

- Define limit dimensions: user, token, organization, IP, route, or resource.
- Use a store/algorithm appropriate to horizontal scaling.
- Avoid allowing user-controlled identifiers to bypass identity-level limits.
- Return a documented error and retry guidance.
- Test distributed behavior and burst handling.

## Queue policy

For event-driven applications, define maximum queue depth and overload behavior: reject, shed low-priority work, pause consumption, or apply producer backpressure. The choice must be observable and documented.
