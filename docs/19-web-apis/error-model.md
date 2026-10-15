# API errors and status mapping

An API error should be machine-readable, stable, and safe to expose. Do not return raw stack traces, source snippets, internal hostnames, SQL errors, tokens, or secrets.

## Suggested envelope

```json
{
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "One or more fields are invalid.",
    "requestId": "req_example_123",
    "details": [
      { "field": "title", "reason": "required" }
    ]
  }
}
```

Treat this as a house-style example, not a universal response standard.

## Mapping

- Use HTTP status codes consistently with the documented API contract.
- Distinguish authentication failure, authorization failure, validation failure, not-found, conflict, rate limit, and server failure.
- Avoid exposing protected object existence if the security model requires hiding it.
- Return a request/correlation ID without exposing private trace internals.
- Preserve the original error as internal diagnostic metadata with secrets redacted.

## UNICORN result type proposal

```unicorn
hasil::berhasil, :data:, :result:
hasil::gagal, :"HTTP_STATUS", :"VALIDATION_FAILED", :error:
```

The eventual type system should define how success/error results are matched and how unhandled errors are reported.
