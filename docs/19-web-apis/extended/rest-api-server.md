# REST API Server

## Elemen dasar server

- Router: method + path ke handler.
- Middleware: request ID, auth, rate limit, logging, CORS sesuai kebutuhan.
- Request parser: batas body, content type, JSON decoding.
- Validator: schema dan aturan bisnis.
- Service/domain layer: keputusan bisnis, bukan parsing HTTP.
- Repository: akses database.
- Error mapper: error domain ke status HTTP.
- Response serializer: JSON konsisten dan header tepat.
- Graceful shutdown: berhenti menerima request, selesaikan kerja sampai deadline, tutup resource.

## Rancangan UNICORN

```unicorn
web::server, :"0.0.0.0", 8080, :server:
web::middleware, :server:, :"request_id"
web::middleware, :server:, :"security_headers"
web::middleware, :server:, :"rate_limit"
web::middleware, :server:, :"authentication"

web::route, :server:, :"GET", :"/health", :health_handler:
web::route, :server:, :"GET", :"/v1/posts/:id", :get_post_handler:
web::route, :server:, :"POST", :"/v1/posts", :create_post_handler:

web::start, :server:
```

`web::` adalah API konseptual. Implementasi nyata memerlukan HTTP server backend.

## Prinsip desain

- Versikan API (`/v1`) atau gunakan strategi versioning yang didokumentasikan.
- Gunakan status code konsisten.
- Terapkan authz pada setiap objek yang diakses, bukan hanya saat login.
- Batasi ukuran body dan kedalaman JSON.
- Jangan menampilkan stack trace ke client produksi.
- Gunakan pagination, batas kueri, idempotency, dan request IDs.
- Jangan memercayai data dari client walau tipe sudah cocok.
