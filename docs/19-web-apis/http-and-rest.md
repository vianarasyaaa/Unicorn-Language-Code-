# HTTP and REST

## HTTP message model

An HTTP request is made of a method, target URI, headers, and optionally a body. A response carries a status code, headers, and optionally a body. Do not define application success as “the socket worked”: inspect the status, content type, body limits, and application schema.

| Method | Common purpose | Retry note |
|---|---|---|
| `GET` | Read a resource | Safe to retry within limits when request is repeatable |
| `HEAD` | Read metadata only | Safe/idempotent semantics; server support may vary |
| `POST` | Create resource or perform an operation | Not automatically safe to retry; use idempotency keys where supported |
| `PUT` | Replace resource representation | Designed to be idempotent by HTTP semantics, but client must still follow API contract |
| `PATCH` | Partially modify resource | Retry safety depends on patch semantics/API contract |
| `DELETE` | Request deletion | Idempotent semantics do not guarantee identical response for repeated calls |
| `OPTIONS` | Discover communication options / CORS preflight | Depends on context |

Status groups:
- `1xx`: informational.
- `2xx`: successful response class; still validate content expected by your operation.
- `3xx`: redirect or conditional response; define redirect policy.
- `4xx`: request/client/auth/rate/resource issue.
- `5xx`: server or gateway failure; retry only where safe and within budget.

## REST resource design

REST-style APIs model resources with stable nouns and clear HTTP methods, for example:

```text
GET     /v1/posts
GET     /v1/posts/{postId}
POST    /v1/posts
PATCH   /v1/posts/{postId}
DELETE  /v1/posts/{postId}
GET     /v1/posts/{postId}/comments
```

Prefer predictable plural resource names, stable identifiers, query parameters for filtering/sorting/pagination, and consistent error responses. Keep actions that are not naturally resource updates clearly modeled and documented.

## URI construction

- Use a URL/URI builder instead of string concatenation for untrusted or encoded values.
- Percent-encode query parameter values exactly once.
- Keep credentials out of URLs; URLs commonly land in logs, referrers, histories, and monitoring.
- Require `https` by default for remote APIs.
- On servers, validate destination hosts and resolved IP ranges to reduce SSRF risk.

## Proposed UNICORN request structure

```unicorn
http::request_buat, :"GET", :base_url:, :"/v1/posts", :req:
http::query_tambah, :req:, :"page", 1
http::query_tambah, :req:, :"limit", 20
http::header, :req:, :"Accept", :"application/json"
http::timeout, :req:, 5000
http::kirim, :req:, :resp:
```

The compiler/runtime contract still needs to specify URL normalization, redirects, cancellation, payload limits, and error conversion.

## Source references

- IETF HTTP Semantics, RFC 9110: <https://www.rfc-editor.org/rfc/rfc9110.html>
- JSONPlaceholder routes for experimentation: <https://jsonplaceholder.typicode.com/>
