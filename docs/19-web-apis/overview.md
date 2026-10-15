# Web APIs and network integrations

> Status: design proposal. The `.un` calls below define an intended public surface, not an implemented HTTP client or server.

This section explains how UNICORN Ω should work with APIs exposed over HTTP, JSON/REST, GraphQL, webhooks, WebSocket, Server-Sent Events (SSE), and browser-native Web APIs. “Web API” can mean either a remote service endpoint or a browser API; this documentation separates both meanings.

## Scope map

| Topic | Documentation |
|---|---|
| HTTP semantics and REST resource design | [HTTP and REST](http-and-rest.md) |
| Making requests as a client | [HTTP client](http-client.md) |
| Exposing endpoints | [HTTP server](http-server.md) |
| JSON encoding and schema checks | [JSON and serialization](json-and-serialization.md) |
| API keys, bearer tokens, OAuth/OIDC | [Authentication](authentication.md), [OAuth/OIDC](oauth-oidc.md) |
| Pagination, filters, sorting | [Pagination](pagination-and-filtering.md) |
| Timeout, retries, circuit breakers | [Timeouts and retries](timeouts-retries-circuit-breakers.md) |
| Cache and validators | [HTTP caching](caching-and-etags.md) |
| Browser cross-origin rules | [CORS and CSRF](cors-and-csrf.md) |
| Inbound event delivery | [Webhooks](webhooks.md) |
| Persistent bidirectional connection | [WebSocket](websocket.md) |
| One-way event stream | [SSE](server-sent-events.md) |
| Graph query service | [GraphQL](graphql.md) |
| Machine-readable API contract | [OpenAPI](openapi.md) |
| Upload / download | [Binary transfer](file-upload-download.md) |
| Status and error payload | [API errors](error-model.md) |
| Limits and backpressure | [Rate limits](rate-limits.md) |
| Testing | [API testing](api-testing.md) |
| Observability | [API observability](api-observability.md) |
| Media type / Accept | [Content negotiation](content-negotiation.md) |
| Signing | [Signed API requests](request-signing.md) |
| Complete flow | [End-to-end workflow](end-to-end-example.md) |
| References | [Official protocol links](references.md) |
| Threat model | [API security](api-security.md) |
| Browser APIs such as Fetch, DOM, Clipboard | [Browser APIs](../20-web-platform/browser-apis.md) |
| Runnable reference examples | [`examples/05-web-apis`](../../examples/05-web-apis/README.md) |

## Expanded reference

The [extended HTTP/API guide](extended/index.md) adds detailed request/response contracts, GET/query, JSON writes, API keys, status/error mapping, retries, pagination, rate limiting, ETags, server validation/middleware, webhook verification, production checklist, and companion `curl`/JavaScript examples.

## Extended reference

See [extended HTTP/API guide](extended/index.md) for detailed request/response design, examples and production checklists.

## Core flow

A conventional HTTP request/response flow has the client create a request, the transport establish or reuse a connection, the server respond with a status and headers, and the client decide how to decode or handle the response. HTTP semantics are independent from any one programming language; use the RFC 9110 reference for protocol semantics.

```text
UNICORN SOURCE
    -> HTTP CLIENT API
    -> TIMEOUT / CANCELLATION / TLS POLICY
    -> HTTP TRANSPORT
    -> NETWORK
    -> REMOTE API
    <- STATUS + HEADERS + BODY
    -> LIMIT CHECK + DECODE + SCHEMA VALIDATION
    -> RESULT<T, ApiError>
```

## Design contracts required before implementation

1. Every request has explicit method, URL, headers, body policy, timeout, and cancellation behavior.
2. TLS certificate validation is enabled by default. “Ignore TLS errors” must not be a normal production shortcut.
3. Responses have size limits and decoding limits.
4. A timeout is distinct from a server HTTP error and from a decoding error.
5. The HTTP client does not silently retry non-idempotent operations unless an idempotency design makes that safe.
6. Credentials are secrets and must not be included in source files, logs, stack traces, or crash reports.
7. URL validation and redirect policy are part of the security boundary, particularly on a server.
8. Async calls need cancellation and bounded concurrency; otherwise hung or excessive calls can exhaust resources.
9. The same operation must have consistent results across Indonesian, English, and hybrid aliases.

## Example: conceptual GET

```unicorn
#language "ID"

http::permintaan, :"GET", :"https://jsonplaceholder.typicode.com/posts/1", :request:
http::header, :request:, :"Accept", :"application/json"
http::timeout, :request:, 5000
http::kirim, :request:, :response:
http::status, :response:, :status:
http::json_baca, :response:, :post:

:akhir
```

This syntax is a proposal. See [the JavaScript reference client](../../examples/05-web-apis/jsonplaceholder-client.mjs) for a real example using a currently available language and Fetch API.

## References

- HTTP semantics: <https://www.rfc-editor.org/rfc/rfc9110.html>
- Fetch API: <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API>
- OpenAPI: <https://spec.openapis.org/oas/>
- JSONPlaceholder testing API: <https://jsonplaceholder.typicode.com/>
- OWASP API Security: <https://owasp.org/www-project-api-security/>
