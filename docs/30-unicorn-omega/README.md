# 🦄 UNICORN Ω — pusat aturan pencipta

> **Status: aturan yang diajarkan + draft dokumentasi. Belum menjadi grammar compiler.**

Bagian ini adalah titik masuk utama untuk aturan yang telah diajarkan pencipta UNICORN Ω. Jika catatan lama di `docs/00` sampai `docs/29` bertentangan dengan halaman ini, jangan otomatis menganggap salah satu sebagai sintaks final: tandai konflik dan minta keputusan pencipta. Jangan menambahkan aturan baru sendiri.

## Mulai dari sini

| Topik | Isi |
|---|---|
| [Aturan yang sudah diajarkan](creator-taught-rules.md) | `persamaan`, `pencocokan`, `objek`, `kenyataan`, `#sama#`, `#persis#`, dan `#hampir#` |
| [Empat ekstensi](extensions.md) | Peran `.unml`, `.uncs`, `.untext`, `.unt` serta batas sintaks yang diketahui |
| [Daftar library](library-registry.md) | Cara mendokumentasikan library tanpa mengarang API |
| [Pertanyaan terbuka](open-questions.md) | Hal-hal yang belum boleh diputuskan tanpa pencipta |
| [Contoh aturan](../../examples/06-creator-taught-syntax/README.md) | Contoh yang mengikuti pola yang diberikan pencipta |
| [Proyek Play Store](../../examples/07-play-store-project/README.md) | Rancangan aplikasi untuk membantu mengembangkan dan menguji dokumentasi |
| [Status pengujian](../../TESTING.md) | Hasil QA dokumen dan batas pengujian bahasa |

## Batas keabsahan

- Contoh di sini didasarkan pada bentuk sintaks yang telah diberikan atau dikoreksi pencipta dalam diskusi.
- Belum ada compiler/runtime resmi di ZIP ini untuk memvalidasi parsing atau eksekusinya.
- Kode yang tampil rapi belum tentu dapat dieksekusi.
- Istilah seperti *point* dan *alias* digunakan sesuai penjelasan pencipta yang tersedia; aturan formal yang belum dijelaskan tetap ditandai terbuka.
- Nama library, API, operator, keyword, dan tanda baca baru tidak boleh ditambahkan sebagai aturan resmi tanpa pengajaran atau persetujuan pencipta.
