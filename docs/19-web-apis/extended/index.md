# Web API & HTTP — Indeks Lengkap

Bagian ini mendokumentasikan rancangan API UNICORN untuk membuat HTTP client, REST API server, webhook, integrasi layanan eksternal, dan sistem API yang dapat diamati serta diuji.

> **Status:** semua panggilan `http::`, `api::`, `web::`, dan anotasi `.un` adalah sintaks proposal. Gunakan contoh `curl` atau JavaScript berlabel untuk uji nyata. Jangan menganggap syntax UNICORN dapat mengakses internet sampai modul dan runtime diimplementasikan.

## Jalur belajar

1. [Dasar HTTP/API](http-fundamentals.md)
2. [HTTP client](http-client.md)
3. [GET / query params](get-and-query.md)
4. [POST / JSON body](post-json.md)
5. [Headers, tokens, dan auth](headers-and-auth.md)
6. [Status, error, dan decoding](responses-and-errors.md)
7. [Timeout, retry, backoff](timeouts-retries-backoff.md)
8. [Pagination](pagination.md)
9. [Rate limits dan throttling](rate-limits.md)
10. [Caching dan ETags](caching-etags.md)
11. [REST API server](rest-api-server.md)
12. [Validasi request](request-validation.md)
13. [Middleware dan CORS](middleware-cors.md)
14. [Webhook](webhooks.md)
15. [GraphQL](graphql.md)
16. [WebSocket dan SSE](websocket-sse.md)
17. [Upload/download berkas](file-transfer.md)
18. [OpenAPI](openapi.md)
19. [Keamanan API](api-security.md)
20. [Observability](observability.md)
21. [Pengujian dan mock](testing-api.md)
22. [Checklist production](production-checklist.md)

## Kontrak API yang dianjurkan

Setiap abstraksi API idealnya mendefinisikan:

- request: method, URL, query, headers, body, auth, deadline;
- batas: ukuran request/response, jumlah redirect, concurrency, dan timeout;
- response: status, headers, content type, decoded data, dan metadata;
- kesalahan: DNS, TLS, koneksi, timeout, pembatalan, status HTTP, decoding, schema, dan rate limit;
- retry: hanya untuk operasi yang aman atau memiliki idempotency key;
- observability: request ID, latency, status code, retry count, dan correlation ID tanpa merekam rahasia;
- lifecycle: cancel, close, dan pelepasan resource.

## Contoh API demo

`https://jsonplaceholder.typicode.com/posts/1` umum dipakai untuk latihan GET. JSONPlaceholder merupakan fake REST API; mutasi biasanya menyimulasikan response, bukan menyimpan data produksi permanen. Lihat [panduan resmi JSONPlaceholder](https://jsonplaceholder.typicode.com/guide/).

Untuk pola `fetch`, periksa `response.ok`/status sebelum membaca body: response HTTP `404` atau `500` bukan selalu network exception. Lihat [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
