# Complete Example: REST API Service

Tujuan: `GET /v1/health` dan `GET /v1/items/:id`.

```unicorn
#program "ITEMS_API"
web::server, :"127.0.0.1", 8080, :app:
web::route, :app:, :"GET", :"/v1/health", :health:
web::route, :app:, :"GET", :"/v1/items/:id", :get_item:

fungsi::buat, :"health"
    api::json, 200, {"status": "ok"}
:selesai

fungsi::buat, :"get_item"
    request::path_param, :request:, :"id", :id:
    schema::integer, :id:, :min(1):
    repository::item_get, :id:, :item:
    jika::kosong, :item:
        api::error, 404, :"NOT_FOUND"
    :selesai
    api::json, 200, :item:
:selesai

web::start, :app:
:akhir
```

Ini ilustrasi arsitektur, bukan server runnable. Sebelum rilis, tambahkan authz, logging, bounded request body, error tests, readiness, graceful shutdown, dan konfigurasi TLS/reverse proxy.
