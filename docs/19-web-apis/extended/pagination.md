# Pagination

API menggunakan beberapa gaya pagination. Implementasi wajib mematuhi kontrak API dan memberi batas total.

- **Offset/limit:** `?offset=20&limit=10`; bisa mahal atau tidak konsisten pada data yang berubah.
- **Page/page_size:** `?page=2&page_size=25`.
- **Cursor:** `?cursor=<opaque>`; jangan menginterpretasikan cursor jika provider mendefinisikannya opaque.
- **Link header:** server mengirim link relasi halaman berikutnya.

## Rancangan UNICORN — page/size

```unicorn
nilai::tetapkan, 1, :page:
nilai::tetapkan, 25, :page_size:
nilai::tetapkan, 100, :max_pages:

ulang::selama, :page: <= :max_pages:
    http::request_buat, :"GET", :base_url:, :req:
    http::query, :req:, :"page", teks::dari_angka(:page:)
    http::query, :req:, :"page_size", teks::dari_angka(:page_size:)
    http::kirim, :req:, :res:
    api::hasil_decode_validasi, :res:, :items:
    collection::tambah_semua, :all_items:, :items:
    jika::kosong, :items:
        ulang::hentikan
    :selesai
    nilai::tambah, :page:, 1, :page:
:selesai
```

Rancangan ini membutuhkan aturan loop/assignment yang formal; contoh tidak dapat langsung dieksekusi sekarang.

## Praktik baik

- `max_pages`, max items, deadline, dan batas response harus jelas.
- Jangan mengumpulkan jutaan item ke RAM jika streaming/processing per halaman cukup.
- Simpan checkpoint dengan aman jika job panjang.
- Deduplicate berdasarkan key bisnis bila provider dapat mengembalikan overlap.
- Periksa link/cursor untuk mencegah pagination loop.
