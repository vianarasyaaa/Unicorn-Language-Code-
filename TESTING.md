# 🧪 Rencana dan status pengujian

## Ringkasan jujur

**Matriks validasi dokumentasi: 5 dari 10 butir memiliki pemeriksaan/artefak awal (50%).** Ini adalah kemajuan pada checklist repository, bukan test coverage compiler, bukan 50% bahasa selesai, dan bukan penilaian bahwa bahasa sudah matang.

Compiler/runtime resmi tidak disertakan di arsip. Karena itu, kode UNICORN Ω tidak bisa diklaim lulus parse, runtime, atau integrasi.

## Lima pemeriksaan dokumentasi yang tersedia

Jalankan:

```bash
python -m unittest discover -s tests -v
```

Pemeriksaan otomatis memastikan bahwa:

1. halaman aturan pencipta dan halaman empat ekstensi tersedia;
2. operator/pola yang sudah diajarkan tercatat;
3. contoh inti memuat deklarasi/penghubung yang diharapkan;
4. semua empat ekstensi dan batas sintaksnya didokumentasikan;
5. README menyatakan dengan jelas bahwa bahasa/compiler belum matang/tersedia.

Pemeriksaan ini memvalidasi **file dan dokumentasi**, bukan menjalankan bahasa.

## Lima butir yang belum dapat diuji

| Butir | Status | Mengapa |
|---|---|---|
| Parsing `.unml`, `.uncs`, `.untext`, `.unt` | Menunggu implementasi | Belum ada parser/compiler |
| Evaluasi `persamaan` dan `pencocokan` | Menunggu spesifikasi + runtime | Perilaku formal lengkap belum ditetapkan |
| Ikatan `objek` dan alias `:a:` | Menunggu spesifikasi + runtime | Aturan lingkup/alias belum lengkap |
| Pemanggilan fungsi/event dan integrasi empat ekstensi | Menunggu implementasi | Belum ada runtime website |
| Library, error path, dan integrasi end-to-end | Menunggu arahan + implementasi | API resmi belum diajarkan/diimplementasikan |

## Cara membaca hasil

- **Lulus:** pemeriksaan dokumentasi tersebut berhasil; tidak berarti syntax dapat dieksekusi.
- **Gagal:** file, aturan, atau pengakuan status di repositori tidak konsisten.
- **Belum bisa diuji:** memerlukan spesifikasi atau implementasi yang belum tersedia.

Persentase hanya diperbarui ketika matriks dan metode perhitungan berubah dengan alasan yang tercatat. Jangan mengiklankan UNICORN Ω sebagai matang, stabil, aman, cepat, atau siap produksi tanpa bukti implementasi dan pengujian yang relevan.
