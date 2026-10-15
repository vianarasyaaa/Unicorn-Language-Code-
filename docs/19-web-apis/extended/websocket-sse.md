# WebSocket dan Server-Sent Events

Gunakan HTTP request biasa untuk operasi request/response. Gunakan WebSocket untuk komunikasi dua arah real-time; SSE cocok untuk stream event satu arah dari server ke client.

## WebSocket checklist

- Auth saat handshake atau protokol token yang aman.
- Validasi `Origin` untuk browser clients.
- Heartbeat ping/pong dan idle timeout.
- Ukuran frame maksimum.
- Backpressure pada pengiriman.
- Batas koneksi per pengguna/IP sesuai kebijakan.
- Reconnect dengan exponential backoff + jitter.
- Deduplikasi/urutan event bila dibutuhkan.
- Graceful shutdown dan cleanup listener.

## SSE checklist

- `Content-Type: text/event-stream`.
- Heartbeat agar perantara tidak memutus idle connection.
- `Last-Event-ID` jika resume didukung.
- Proxy buffering/compression diatur sesuai platform.
- Batasi jumlah koneksi dan durasi.

## API proposal

```unicorn
realtime::websocket_connect, :url:, :socket:
realtime::on_message, :socket:, :message_handler:
realtime::on_close, :socket:, :cleanup:
realtime::send_bounded, :socket:, :event:, :max_queue(1000):
```
