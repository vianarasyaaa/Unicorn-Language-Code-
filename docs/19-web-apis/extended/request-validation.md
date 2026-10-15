# Validasi Request dan Schema

Validasi mempunyai setidaknya tiga lapisan:

1. **Structural:** tipe JSON, field wajib, ukuran, format.
2. **Semantic:** rentang numerik, panjang string, enum yang diizinkan.
3. **Business authorization:** apakah aktor boleh melakukan operasi itu pada resource ini.

## Contoh rancangan schema

```unicorn
schema::definisi, :"CreatePostV1":
    field::wajib, :"title", :"string", :panjang_max(160):
    field::wajib, :"body", :"string", :panjang_max(20000):
    field::wajib, :"userId", :"u64", :rentang(1, 1000000):
    field::tolak_unknown, benar
:selesai

api::request_json, :request:, :payload:
schema::validasi, :payload:, :"CreatePostV1", :validation:
jika::gagal, :validation:
    api::response_error, 422, :"VALIDATION_FAILED", :validation:
:selesai
```

## Aturan

- Tetapkan batas kedalaman/nilai untuk JSON bersarang.
- Validasi content type.
- Tolak path traversal, karakter kontrol, tipe file palsu, dan numeric overflow.
- Normalisasi input hanya ketika semantik mengizinkan; jangan diam-diam mengubah identitas.
- Gunakan allowlist field untuk menulis database (hindari mass assignment).
- Jangan mengandalkan validasi client-side saja.
