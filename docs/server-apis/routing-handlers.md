# Routing dan Handlers

## Prinsip route

- Gunakan path noun untuk resource dan method untuk operasi.
- Pisahkan versi API jika perubahan kompatibilitas diperlukan.
- Parameter path/query/body harus divalidasi sebelum service dipanggil.
- Handler harus menghormati cancellation/deadline.
- Hindari kerja blocking panjang pada event loop.

## Rancangan UNICORN

```unicorn
web::route, :app:, :"GET", :"/v1/posts/:id", :get_post:
web::route, :app:, :"POST", :"/v1/posts", :create_post:

fungsi::buat, :"get_post"
    request::path_param, :request:, :"id", :post_id:
    schema::integer, :post_id:, :range(1, 2147483647):
    authz::check, :principal:, :"post:read", :post_id:, :allowed:
    jika::tidak, :allowed:
        api::error, 403, :"FORBIDDEN"
    :selesai
    service::post_get, :post_id:, :post:
    api::json, 200, :post:
:selesai
```

Belum executable; syntax `web::` dan `authz::` perlu API contract resmi.
