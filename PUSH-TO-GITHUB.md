# 🚀 Siapkan dan push repositori ke GitHub

Panduan ini menyiapkan folder lokal untuk di-push oleh pemiliknya. Dokumen ini **tidak melakukan push otomatis** dan tidak memerlukan token di dalam file.

## 1. Periksa ZIP hasil ekspor

Ekstrak `UNICORN-OMEGA-DOCUMENTATION.zip`, lalu masuk ke folder `UNICORN-OMEGA-DOCUMENTATION`.

## 2. Jalankan QA dokumentasi

Python 3 diperlukan. Tidak ada dependensi Python eksternal.

```bash
python -m unittest discover -s tests -v
```

Periksa juga `git status` dan baca `TESTING.md` agar hasilnya tidak disalahartikan sebagai uji compiler.

## 3. Buat repositori lokal

Jika folder belum menjadi repositori Git:

```bash
git init
git add .
git commit -m "docs: prepare UNICORN Omega documentation"
```

## 4. Buat repositori kosong di GitHub

Di GitHub, buat repository baru bernama misalnya `UNICORN-OMEGA-DOCUMENTATION`. Untuk menghindari konflik, jangan membuat README atau LICENSE kedua jika semuanya sudah ada secara lokal.

## 5. Sambungkan remote dan push

Ganti placeholder URL di bawah dengan URL repositori milikmu sendiri:

```bash
git branch -M main
git remote add origin https://github.com/USERNAME/UNICORN-OMEGA-DOCUMENTATION.git
git push -u origin main
```

Jika `origin` sudah ada, periksa dengan `git remote -v` sebelum menambahkannya lagi.

## 6. Setelah push

- Buka `README.md` di halaman utama repo dan periksa banner/ikon.
- Pastikan halaman [status](STATUS.md) dan [pengujian](TESTING.md) jelas.
- Pertahankan lisensi sebagai belum final sampai keputusan lisensi dibuat.
- Jangan menambahkan sintaks atau library baru sebelum diajarkan/disetujui pencipta.
- Jalankan pemeriksaan kembali pada setiap pull request.

> **Keamanan:** jangan menaruh token GitHub, password, secret, `.env` nyata, kredensial, maupun session file di repo. Gunakan autentikasi GitHub lokal yang resmi.
