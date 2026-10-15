# Server-Sent Events (SSE)

SSE is a one-way stream of events from a server to a client over HTTP, commonly with `Content-Type: text/event-stream`. It is often simpler than WebSocket when clients only need to receive server updates.

## Message model

SSE events may include `event`, `data`, `id`, and `retry` fields. Event framing is textual; data containing newlines must be handled according to the protocol. The client should treat all incoming values as untrusted.

## Client requirements

- Handle network interruption and reconnection policy.
- Use `Last-Event-ID` semantics only when the server supports resumability.
- Bound line, event, and total buffered sizes.
- Define whether events are durable, replayable, or best-effort.
- Authenticate using an approach suitable for the target client; browser EventSource constraints may affect custom headers.
- Parse JSON event data with size and schema limits.

## Proposed surface

```unicorn
sse::buka, :"https://api.example.com/stream", :stream:
sse::max_event_bytes, :stream:, 262144
sse::saat_event, :stream:, :on_event:
sse::saat_error, :stream:, :on_stream_error:
sse::mulai, :stream:
```

Treat these as a proposed design only. Use WebSocket if genuine two-way communication is needed.
