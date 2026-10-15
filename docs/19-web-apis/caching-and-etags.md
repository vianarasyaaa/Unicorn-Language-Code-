# HTTP caching and entity tags

HTTP cache behavior should follow protocol semantics plus the API's stated freshness contract. Caching can reduce latency and network usage, but can also leak personalized data if cache keys and directives are wrong.

## Concepts

- `Cache-Control` describes cache behavior and freshness restrictions.
- `ETag` is a validator for a representation.
- `If-None-Match` allows a client to ask whether a representation changed.
- A `304 Not Modified` response can let the client reuse a cached representation.
- `Last-Modified` / `If-Modified-Since` may be available as a validator pair.

## Client flow

1. Store response body and its cache metadata only when the policy permits.
2. On revalidation, send the appropriate validator.
3. On `304`, reuse the cached body and update metadata according to HTTP cache rules.
4. On a new `200`, validate and replace the cached representation.
5. Evict by bounded capacity, expiration, and explicit invalidation policy.

## Proposed sketch

```unicorn
cache::cari, :cache_key:, :cached:
http::header_dari_cache, :cached:, :"ETag", :etag:
jika::ada, :etag:
    http::header, :request:, :"If-None-Match", :etag:
:selesai
http::kirim, :request:, :response:
cache::proses_response, :response:, :cached:, :hasil:
```

## Privacy rules

- Do not share-cache personalized responses without explicit cache directives and correct partitioning.
- Avoid caching authorization tokens or secret-bearing responses.
- Include relevant `Vary` dimensions in cache behavior.
- Bound entry size and count.
- Define consistency expectations and invalidation behavior.
