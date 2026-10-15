# Third-party API adapter template

Use this template before implementing any provider adapter.

```text
Provider:
Official documentation URL:
API base URL(s):
Supported API/schema version:
Credential source and rotation plan:
Allowed host(s) and redirect policy:
Data classification:
Timeout/deadline:
Maximum request and response bytes:
Rate limits and Retry-After behavior:
Retryable methods/statuses:
Idempotency behavior:
Cache/freshness policy:
Error mapping:
Logging/redaction plan:
Metrics and alerts:
Unit/contract/integration tests:
Terms, attribution, and retention obligations:
Owner and maintenance review date:
```

Do not ship a provider adapter with unknown authentication, unbounded retries, no timeout, or undocumented data retention.
