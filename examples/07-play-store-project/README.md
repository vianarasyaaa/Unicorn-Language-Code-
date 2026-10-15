# 🛍️ UNICORN PLAY — rancangan proyek katalog aplikasi

**Tujuan:** contoh proyek website bertema katalog aplikasi yang dipakai untuk mengembangkan dokumentasi empat ekstensi UNICORN Ω.

> [!WARNING]
> File `.unml`, `.uncs`, dan `.unt` di folder ini hanya berisi header karena grammar resminya belum diajarkan. Sengaja tidak diisi sintaks rekaan. `utama.untext` mengarsipkan pola logika yang telah diberikan, namun belum diuji compiler. Proyek ini tidak siap dijalankan sebagai website.

## 🗂️ File proyek

| File | Tujuan | Status |
|---|---|---|
| [`utama.unml`](utama.unml) | Slot sumber untuk struktur halaman | Header saja; grammar menunggu pencipta |
| [`utama.uncs`](utama.uncs) | Slot sumber untuk tampilan | Header saja; grammar menunggu pencipta |
| [`utama.untext`](utama.untext) | Point pembahasan dan rancangan interaksi | Pola dari contoh pencipta; belum dapat dieksekusi |
| [`aplikasi.unt`](aplikasi.unt) | Slot data katalog aplikasi | Header saja; grammar menunggu pencipta |
| [`blueprints/page-plan.md`](blueprints/page-plan.md) | Rencana halaman secara deskriptif | Markdown biasa, bukan sintaks UNICORN Ω |
| [`blueprints/style-guide.md`](blueprints/style-guide.md) | Arahan visual yang dapat direview | Markdown biasa, bukan sintaks UNICORN Ω |
| [`blueprints/data-model.md`](blueprints/data-model.md) | Field data yang diinginkan | Markdown biasa, belum merupakan skema formal |

## 🧭 Halaman yang direncanakan

1. **Beranda:** judul, ringkasan, kolom pencarian, dan kategori.
2. **Daftar aplikasi:** kartu aplikasi yang berasal dari data katalog.
3. **Detail aplikasi:** nama, kategori, deskripsi, sumber resmi, dan tautan yang sesuai.
4. **Pencarian:** pencocokan berdasarkan teks yang dimasukkan pengguna.
5. **Navigasi:** tautan antarbagiannya.

Daftar ini adalah requirement produk, bukan sintaks baru.

## 🧠 Point pembahasan yang telah diajarkan

```unicorn
persamaan= "aplikasi",
objek::(aplikasi):,

pencocokan= "pencarian",
objek::(pencarian):,
instalasi=blabalabala
```

Contoh ini mencatat point pembahasan yang diberikan pencipta. Placeholder instalasi tidak berarti sudah tersedia sistem instalasi, unduh, pembayaran, atau integrasi ke toko aplikasi.

## 📦 Library

Belum ada library resmi terdaftar. Nama library, cara impor, signature, dan perilakunya hanya akan ditambahkan setelah pencipta mengajarkannya atau menyetujuinya. Lihat [registry library](../../docs/30-unicorn-omega/library-registry.md).

## ✅ Kriteria penerimaan dokumentasi

- Setiap ekstensi mempunyai file slot yang jelas.
- Tidak ada grammar yang dikarang untuk ekstensi yang belum diajarkan.
- Contoh `.untext` menandai statusnya sebagai belum teruji compiler.
- Data katalog, tampilan, dan fungsi instalasi tidak diklaim berjalan.
