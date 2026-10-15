# WebSocket

WebSocket provides a persistent, bidirectional channel after an HTTP-based handshake. It suits real-time updates and two-way messaging; it is not a replacement for ordinary request/response APIs when a simpler transport fits.

## Required behavior

- Validate the intended origin and authenticate the connection according to the service model.
- Use `wss://` for encrypted connections.
- Define message envelope, version, event names, and schema.
- Limit frame/message size and buffered bytes.
- Implement ping/pong or application heartbeats where needed.
- Bound outgoing queues and apply backpressure.
- Define reconnect policy with jitter and a maximum retry budget.
- Handle duplicate/out-of-order messages if the application needs delivery guarantees.
- Close connections cleanly and release resources on cancellation.

## Proposed client

```unicorn
ws::hubungkan, :"wss://api.example.com/events", :socket:
ws::header, :socket:, :"Authorization", :token_header:
ws::max_message_bytes, :socket:, 1048576
ws::saat_pesan, :socket:, :on_ws_message:
ws::saat_putus, :socket:, :on_ws_close:
ws::kirim_json, :socket:, :subscribe_message:
ws::jalankan, :socket:
```

All names are proposed. The handshake/auth ordering and supported header rules must be defined by the selected platform and server.

## Backpressure

Never allow a peer to send unlimited messages into an unbounded queue. Define queue capacity, overflow policy, maximum in-flight work, and whether the application drops, rejects, pauses reads, or closes a slow peer.
