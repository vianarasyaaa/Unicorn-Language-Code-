# Webhooks

A webhook is an HTTP request sent by one service to notify another service that an event occurred. The receiver should acknowledge quickly and process the event safely, often by placing it into a bounded durable queue.

## Recommended receiver sequence

1. Enforce method, content type, request body size, and timeout limits.
2. Read the exact raw body bytes required for signature verification.
3. Verify provider signature using the documented algorithm and secret.
4. Validate the signature timestamp and enforce a replay window where supported.
5. Validate event schema and event type.
6. Enforce idempotency using the provider event ID or a durable deduplication key.
7. Persist the accepted event before acknowledging where delivery guarantees require it.
8. Return the provider-required response quickly; process long work asynchronously.
9. Monitor failed deliveries and implement a controlled replay procedure.

## Proposed endpoint

```unicorn
server::route, :"POST", :"/webhooks/provider", :webhook_handler:

fungsi::buat, :"webhook_handler"
    request::limit_body_bytes, 1048576
    request::raw_body, :body:
    webhook::verify_signature, :body:, :headers:, :signature_ok:
    kondisi::jika, :signature_ok: == salah
        response::status, 401
        kembalikan::nilai, :response:
    :selesai
    webhook::parse_event, :body:, :event:
    webhook::deduplicate, :event.id:, :already_seen:
    kondisi::jika, :already_seen:
        response::status, 200
        kembalikan::nilai, :response:
    :selesai
    queue::persist, :event:, :queued:
    response::status, 202
    kembalikan::nilai, :response:
:selesai
```

## Critical details

- Do not invent signature algorithms. Use provider documentation and official SDKs where available.
- Verify the exact raw bytes if the signature scheme requires them; parsing and reserializing JSON may change bytes.
- Treat `2xx` acknowledgments and retry behavior according to the provider contract.
- Make handlers idempotent because duplicate delivery is common in distributed systems.
- Avoid SSRF by never blindly fetch URLs supplied in webhook payloads.
