# Middleware, CORS, dan Security Headers

Middleware menjalankan kebijakan bersama di sekitar handler. Urutan penting: request ID → logging metadata → body limits → CORS → authentication/authorization → rate limit (sesuai threat model) → handler → error mapping.

## CORS bukan autentikasi

CORS merupakan kebijakan browser untuk membatasi pembacaan lintas origin; CORS tidak melindungi endpoint dari curl, server lain, atau klien non-browser. Auth dan authorization tetap diperlukan.

## Checklist CORS

- Daftar origin spesifik, bukan wildcard, ketika memakai credentials.
- Batasi metode/header yang diperlukan.
- Tangani preflight `OPTIONS`.
- Jangan menganggap header `Origin` sebagai bukti identitas.
- Bedakan public API dengan API yang membawa cookie/session.

## Rancangan UNICORN

```unicorn
web::middleware, :server:, :"request_id"
web::middleware, :server:, :"body_size_limit", :bytes(1048576):
web::middleware, :server:, :"cors":
    cors::origin_allowlist, ["https://app.example.com"]
    cors::methods, ["GET", "POST", "PATCH", "DELETE"]
    cors::credentials, salah
:selesai
```

Ini rancangan deklaratif. Nilai produksi harus sesuai dengan aplikasi, bukan disalin tanpa penilaian.
