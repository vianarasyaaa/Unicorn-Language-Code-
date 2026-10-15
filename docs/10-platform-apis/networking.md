# Networking API proposal

Proposed networking APIs cover TCP/UDP sockets, DNS, HTTP client/server, TLS, WebSocket, and stream processing, where implemented.

Define connection lifecycle, timeout policy, retries, cancellation, DNS cache, TLS verification, certificate errors, partial I/O, backpressure, payload limits, and shutdown behavior. Retry policy must not accidentally duplicate non-idempotent operations.

For smooth services, measure connection time, throughput, p50/p95/p99 latency, queue delay, retry counts, and error rates. Reuse connections when it is safe and beneficial, but avoid unbounded pools or queues.


## Expanded Web API documentation

For REST/HTTP clients and servers, JSON, authentication, OAuth/OIDC, retries, cache validators, CORS/CSRF, webhooks, WebSocket, SSE, GraphQL, OpenAPI, rate limits, and API testing, see the [Web APIs index](../19-web-apis/overview.md) and [API recipes](../21-api-recipes/index.md).
