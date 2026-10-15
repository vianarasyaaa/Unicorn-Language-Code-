# API observability and tracing

Observe API behavior without exposing sensitive payloads.

## Useful fields

- Request/correlation ID.
- Service/route and method (avoid raw path parameters that contain secrets or personal data).
- Duration, status, error category, retry count, timeout/cancel indicator.
- Response bytes and queue wait.
- Dependency name and version.

## Do not log by default

- Authorization or cookie headers.
- API keys, refresh/access tokens, private keys.
- Passwords and reset links.
- Full request bodies containing personal data.
- Webhook signing secrets.

Metrics should use bounded-cardinality labels. Do not label metrics with arbitrary URL strings, user IDs, request IDs, or tokens.
