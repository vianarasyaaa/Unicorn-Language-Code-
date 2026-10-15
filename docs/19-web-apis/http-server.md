# HTTP server API

This page describes a possible server API surface. An actual implementation would need a real network runtime, TLS configuration, request parser, limits, route matching, observability, and shutdown behavior.

## Responsibilities of a server

- Bind only to intended interfaces and ports.
- Parse request line/headers under strict size limits.
- Reject malformed or ambiguous framing.
- Enforce method and content-type rules.
- Authenticate the caller when required.
- Authorize every requested object and operation.
- Validate and normalize user input.
- Apply request body and concurrency limits.
- Return consistent status, headers, and response schema.
- Avoid leaking stack traces, secrets, internal hosts, or database errors.
- Support graceful shutdown, deadlines, and connection cleanup.

## Proposed route example

```unicorn
#level "MID"

server::buat, :"0.0.0.0", 8080, :app:
server::max_body_bytes, :app:, 1048576
server::timeout, :app:, 10000

route::daftarkan, :app:, :"GET", :"/health", :health_handler:
route::daftarkan, :app:, :"GET", :"/v1/posts/{id}", :get_post_handler:
route::daftarkan, :app:, :"POST", :"/v1/posts", :create_post_handler:

server::jalankan, :app:
:akhir
```

Proposed handler contracts:

```unicorn
fungsi::buat, :"health_handler"
    response::status, 200
    response::json, { :"status": :"ok" }
    kembalikan::nilai, :response:
:selesai
```

The map-like literal above is illustrative; the language grammar for object/map literals must be standardized before it can be parsed.

## Middleware sequence

A recommended order is: request ID → connection/body limits → request parsing → CORS (only when browser access is intended) → authentication → authorization → input/schema validation → handler → response encoding → structured log. Exact ordering depends on framework semantics and must be documented.

## Production checklist

- TLS termination and trusted-proxy configuration.
- Correct forwarded-header trust; do not blindly trust client-supplied forwarding headers.
- Per-route authentication and authorization.
- Rate and concurrency limits.
- Centralized error mapping.
- Request ID and trace propagation.
- Health/readiness endpoints.
- Graceful termination on deployment.
- Audit logs that exclude secrets.
- Negative security tests and load tests.
