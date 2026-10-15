# Recipe: integrate a third-party webhook

1. Register a HTTPS endpoint with the provider.
2. Follow its signature-verification guide exactly.
3. Store the signing secret in a secret store.
4. Validate timestamp and replay constraints where supported.
5. Validate event type and schema.
6. Persist a unique event ID before acknowledging if the provider may redeliver.
7. Queue slow work and return a quick accepted response.
8. Monitor failed processing and create a controlled replay procedure.

```unicorn
webhook::route, :"/hooks/provider", :handler:
webhook::verify_provider_signature, :handler:, :secret_ref:, :verified:
condition::if, :verified: == false
    response::status, 401
:else
    webhook::accept_idempotently, :event:, :accepted:
    queue::persist, :event:
    response::status, 202
:end
```

This is a proposed surface. Signature bytes, header names, canonicalization, and status expectations must come from the provider's official documentation.
