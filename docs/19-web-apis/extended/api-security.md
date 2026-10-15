# API Security

Gunakan defense-in-depth; jangan menganggap TLS, CORS, atau login tunggal cukup.

## Area wajib

- Identitas dan autentikasi.
- Authorization pada objek dan fungsi.
- Validasi schema dan mass assignment.
- Rate limit dan resource quotas.
- SSRF/URL allowlists untuk fetch server-side.
- TLS certificate verification.
- Secret storage/rotation.
- Batas ukuran/depth/time.
- Error responses yang tidak bocorkan internals.
- Audit logs dengan redaction.
- Dependency inventory dan patch policy.
- Versioning, deprecated endpoint, dan inventory.

Rujukan: [OWASP API Security Project](https://owasp.org/www-project-api-security/) dan [OWASP API Security risks guide](https://devguide.owasp.org/en/07-training-education/07-api-top-ten/).

## Jangan lakukan

- Menonaktifkan TLS verification di produksi.
- Menaruh API keys di source code atau URL query.
- Menerima URL arbitrary di server lalu men-fetch-nya tanpa pengamanan SSRF.
- Mengulang operasi ber-efek samping tanpa idempotency.
- Mencatat Bearer token, cookie, password, private key, atau body sensitif.
- Memercayai `userId` dari body untuk memutuskan ownership.
