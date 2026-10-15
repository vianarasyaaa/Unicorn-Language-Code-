# End-to-end API workflow

This page connects configuration, HTTP request construction, response validation, error mapping, and performance policy.

## 1. Configuration

Store base URL and secret references outside source control. Validate the base URL at startup, and ensure a configured host is expected for that integration.

## 2. Build request

Use a URL builder, typed query parameters, documented headers, a deadline, cancellation, and a body serializer. Do not concatenate untrusted strings into a URL or JSON body.

## 3. Send with bounded resources

The transport should reuse safe connections, validate TLS, cap concurrent requests, and bound body bytes. Connection pooling should have an upper bound and a well-defined shutdown path.

## 4. Inspect response

Check response status, content type, size, and schema. `fetch()`-style APIs commonly return a response object even for HTTP error statuses; a client must inspect the status rather than treating promise resolution as business success.

## 5. Map errors

Map network, timeout, cancellation, HTTP, decoding, and validation failures separately. Do not discard context; redact private data before logging.

## 6. Observe and test

Track latency percentiles and failure counts. Test malformed response bodies, `401`, `403`, `404`, `429`, server errors, slow responses, redirect behavior, huge body, and cancellation.

## Proposed code shape

```unicorn
api::client_buat, :base_url:, :client:
api::policy_apply, :client:, :"SAFE_DEFAULTS"
api::request_build, :client:, :"GET", :"/v1/items", :request:
api::execute, :request:, :response:
api::validate_response, :response:, :"ItemPage", :result:
api::observe, :request:, :response:, :result:
```

This is a public-surface sketch, not a complete implementation.
