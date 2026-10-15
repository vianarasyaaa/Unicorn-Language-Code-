# Environment Configuration

Pisahkan konfigurasi dari source. Bedakan konfigurasi publik (port, log level) dengan secret (tokens, private keys, database passwords). Validasi konfigurasi saat startup dan gagal lebih awal jika nilai wajib hilang.

Checklist: tipe/format, min/max, default yang aman, redaction, secret rotation, konfigurasi per environment, dan tidak mencetak seluruh environment saat error.

Contoh nama environment: `UNICORN_LOG_LEVEL`, `API_BASE_URL`, `DATABASE_URL`, `SERVICE_API_TOKEN`. Nama ini ilustratif; jangan memasukkan secret nyata ke file contoh.
