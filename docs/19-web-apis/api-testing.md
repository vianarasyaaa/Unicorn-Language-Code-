# API testing and observability

A reliable API client/server needs tests beyond the happy path.

## Test layers

- **Unit:** URL/query encoding, JSON models, status mapping, retry decisions.
- **Contract:** expected request and response shape against OpenAPI/schema.
- **Integration:** actual local service and database behavior.
- **End-to-end:** authentication, authorization, business flow, and persistence.
- **Fault injection:** timeouts, connection resets, malformed JSON, oversized responses, 429/5xx, slow server, TLS failure.
- **Load/soak:** throughput, latency distribution, resource growth, backpressure.
- **Security:** object-level authorization, input limits, SSRF boundaries, secret exposure, CORS and webhook replay cases.

## Test hygiene

- Use fake/mocked API responses for deterministic unit tests.
- Mark public mock API tests as network-dependent and optional.
- Do not make production CI depend on a third-party demo API's uptime.
- Avoid tests that mutate real user resources.
- Use isolated fixtures and unique IDs.
- Never store real tokens in test fixtures.

## Example test matrix

| Case | Expected behavior |
|---|---|
| Valid `200` JSON | Decode then validate schema |
| `204 No Content` | Return empty success when endpoint contract permits it |
| `401` | Authentication error, no blind retry |
| `403` | Authorization error, no blind retry |
| `404` | Not-found mapping according to contract |
| `429` with `Retry-After` | Wait within deadline or return rate-limit error |
| `500` | Retry only if configured and request semantics permit |
| Invalid JSON | Decode error; no panic |
| Huge body | Stop at configured size limit |
| Cancelled request | Release resources and report cancellation |
