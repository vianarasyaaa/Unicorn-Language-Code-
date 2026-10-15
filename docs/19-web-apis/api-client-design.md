# Design a reusable API client

A reusable client hides repetitive HTTP plumbing behind stable functions while exposing policy knobs that affect correctness, safety, and performance.

## Recommended layers

1. **Generated/typed endpoint layer:** operations and request/response models.
2. **Client policy layer:** authentication, timeout, retry, cache, tracing, limits.
3. **HTTP transport:** connection reuse, TLS, HTTP version, streaming, cancellation.
4. **Serialization:** JSON and other content types.
5. **Observability:** request IDs, metrics, redaction, diagnostic events.

## Avoid

- A giant global client with mutable headers shared unsafely between users.
- Hard-coded credentials.
- Infinite retry loops.
- Automatically retrying every method.
- Converting every failure to an empty object.
- Logging entire request/response bodies by default.
- Repeatedly serializing large data structures unnecessarily.

## Example proposed factory

```unicorn
api::client_buat, :"https://jsonplaceholder.typicode.com", :client:
api::timeout, :client:, 5000
api::response_limit, :client:, 1048576
api::default_header, :client:, :"Accept", :"application/json"
api::retry_policy, :client:, :"SAFE_METHODS_ONLY"
api::get, :client:, :"/posts/1", :post:
```

A production client should inject transport/auth policy for tests. `base_url` joining and redirects must be specified so a path such as `//evil.example` cannot accidentally escape the intended origin.
