# ✅ Laporan validasi repositori

**Tanggal pemeriksaan:** 2026-10-14  
**Lingkup:** integritas dokumentasi dan aset; bukan pengujian compiler/runtime.

## Hasil pemeriksaan final

| Pemeriksaan | Hasil |
|---|---:|
| Unit test dokumentasi (`unittest`) | **5 lulus / 5 total** |
| Tautan lokal Markdown | **561 diperiksa, 0 rusak** |
| File SVG | **24 valid XML**, termasuk 23 ikon lokal dan banner |
| SHA-256 | **330 checksum cocok, 0 mismatch** |
| File repo yang diindeks | **331 file**, termasuk inventaris dan daftar checksum |

Perintah unit test yang dijalankan dari root repo:

```bash
python -m unittest discover -s tests -v
```

Kelima test lulus. Tes tersebut mengecek dokumentasi/pola teks yang diajarkan, bukan mengeksekusi bahasa. Tautan lokal, SVG, dan SHA-256 diperiksa pada paket akhir setelah konten selesai. Daftar checksum mengecualikan file `SHA256SUMS.txt` itu sendiri karena file tidak dapat memuat hash dirinya sendiri secara konsisten.

## Yang tidak diuji

- Parsing atau eksekusi `.unml`, `.uncs`, `.untext`, dan `.unt`.
- Implementasi formal `persamaan`, `pencocokan`, `objek`, `kenyataan`, alias `:a:`, atau kombinasi logika.
- Library resmi atau perilaku instalasi aplikasi.
- Performa, keamanan runtime, kompatibilitas, atau kesiapan produksi.

Alasannya: arsip tidak menyertakan compiler/runtime resmi dan beberapa aturan masih menunggu pengajaran atau persetujuan pencipta.

## Makna angka 50%

Angka 50% mengacu pada matriks validasi dokumentasi berisi 10 butir: lima memiliki pemeriksaan/artefak awal dan lima menunggu spesifikasi/implementasi. Angka ini **bukan test coverage bahasa** atau persentase kematangan.

Jangan memperbarui jumlah/hasil menjadi lebih tinggi tanpa menjalankan kembali pemeriksaan terkait.
