# Service dan Repository

Service mengekspresikan aturan bisnis tanpa bergantung pada HTTP status code. Repository membungkus database/query. Ini membantu test dan memindahkan transport bila dibutuhkan.

## Aturan

- Hindari membangun SQL dari concatenation input.
- Gunakan prepared/parameterized queries.
- Tetapkan timeout query dan pool size.
- Buat transaction boundaries eksplisit.
- Batasi query fanout dan jumlah row.
- Hindari entity internal langsung menjadi public JSON tanpa DTO/schema.

## Syntax proposal

```unicorn
fungsi::buat, :"create_post"
    schema::validasi, :input:, :"CreatePostV1", :valid:
    jika::tidak, :valid:
        hasil::gagal, :"INVALID_INPUT", :result:
        kembalikan::nilai, :result:
    :selesai
    database::transaksi, :db:, :tx:
        repository::post_insert, :tx:, :input:, :post:
        event::outbox_insert, :tx:, :"post.created", :post.id:
    :selesai
    hasil::berhasil, :post:, :result:
    kembalikan::nilai, :result:
:selesai
```

Contoh transactional outbox hanya konseptual dan perlu implementasi transaksi serta worker yang tahan duplikasi.
