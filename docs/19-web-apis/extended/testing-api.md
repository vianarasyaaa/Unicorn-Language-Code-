# Testing Web API

Lapisan pengujian:

1. Unit test untuk validasi dan pemetaan error.
2. Contract test untuk schema/request-response.
3. Mock server untuk timeout, 429, 500, malformed JSON, oversized response.
4. Integration test terhadap local server.
5. End-to-end staging test dengan kredensial berizin.
6. Load test terkontrol, bukan terhadap API publik tanpa izin.
7. Failure injection untuk retry, breaker, dan cancellation.

## Mock cases wajib

- 200 JSON valid.
- 204 tanpa body.
- 400 schema error.
- 401/403 auth failures.
- 404 resource absent.
- 409 conflict.
- 429 + Retry-After.
- 500/503.
- Timeout sebelum response dan saat membaca body.
- Invalid content-type, malformed JSON, response terlalu besar.
- TLS failure dan redirect ke host tidak diizinkan.

## Contract test rancangan

```unicorn
test::buat, :"get_post_returns_schema":
    mock_http::response, 200, :"application/json", :fixture_post:
    hasil::panggil, :"get_post", 1, :result:
    assert::sama, :result.id:, 1
    assert::tipe, :result.title:, :"string"
:selesai
```

API testing UNICORN adalah rancangan dan perlu test runner nyata.
