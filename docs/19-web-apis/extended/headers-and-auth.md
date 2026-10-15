# Headers, API Keys, Bearer Tokens, dan OAuth

## Header umum

- `Accept`: format respons yang diinginkan.
- `Content-Type`: format body yang dikirim.
- `Authorization`: kredensial bearer atau skema lain.
- `User-Agent`: identitas client bila kebijakan layanan memerlukannya.
- `Idempotency-Key`: kunci deduplikasi bila didukung server.
- `If-None-Match`: conditional request dengan ETag.
- `X-Request-ID`: correlation identifier bila disepakati API.

## Rancangan UNICORN — token melalui environment

```unicorn
secret::ambil_env, :"SERVICE_API_TOKEN", :token:
jika::kosong, :token:
    program::gagal, :"API_TOKEN_NOT_CONFIGURED"
:selesai

http::request_buat, :"GET", :"https://api.example.com/v1/profile", :req:
http::header, :req:, :"Authorization", teks::gabung(:"Bearer ", :token:)
http::header, :req:, :"Accept", :"application/json"
http::kirim, :req:, :res:
secret::bersihkan_referensi, :token:
:akhir
```

Ini syntax proposal; pengelolaan secret harus menjamin bahwa nilai tidak tercetak di log atau crash dump.

## Kebijakan keamanan

- Jangan commit token ke Git, contoh, screenshot, telemetry, atau error message.
- Gunakan scope minimal, expiry, rotasi, dan secret store yang sesuai.
- TLS certificate verification harus aktif.
- Jangan menerima URL API dari user tanpa allowlist/policy; fitur fetch server-side dapat menjadi SSRF.
- OAuth memiliki flow berbeda (authorization code + PKCE, client credentials, dll.). Implementasi harus memilih flow yang sesuai; jangan menyimpan client secret di aplikasi publik.
