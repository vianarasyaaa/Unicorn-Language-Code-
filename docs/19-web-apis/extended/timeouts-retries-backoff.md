# Timeout, Retry, Backoff, dan Circuit Breaker

## Timeout bukan satu angka saja

- DNS/connection timeout.
- TLS handshake timeout.
- Time to first byte.
- Read/write timeout.
- Total request deadline.
- Deadline aplikasi yang mencakup beberapa panggilan.

## Backoff eksponensial dengan jitter

Konsep: `delay = min(cap, base * 2^attempt) + random_jitter`. Batasi jumlah percobaan dan total waktu. Hormati `Retry-After` bila valid dan relevan.

## Rancangan UNICORN

```unicorn
retry::policy, :"read_api":
    retry::maks_percobaan, 4
    retry::base_delay_ms, 200
    retry::max_delay_ms, 3000
    retry::jitter, :"FULL"
    retry::status, [408, 429, 500, 502, 503, 504]
    retry::metode_aman, ["GET", "HEAD"]
:selesai

http::request_buat, :"GET", :url:, :req:
http::deadline, :req:, 8000
http::kirim_dengan_policy, :req:, :"read_api", :res:
```

Syntax tersebut belum implemented. Kebijakan yang benar bergantung pada API.

## Circuit breaker

Status konseptual: `CLOSED` (request jalan), `OPEN` (ditahan sementara setelah kegagalan), `HALF_OPEN` (uji terbatas). Jangan membuka ulang traffic besar setelah cooldown sekaligus; gunakan probe terbatas.

## Larangan retry

Jangan retry tanpa idempotency strategy untuk pembayaran, pembuatan order, pengiriman pesan, atau efek samping lain. Timeout tidak membuktikan bahwa server gagal melakukan operasi.
