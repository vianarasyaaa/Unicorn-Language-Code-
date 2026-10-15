# 🤝 Kontribusi untuk UNICORN Ω

Terima kasih telah membantu dokumentasi. Bahasa ini masih dirancang dan belum mempunyai compiler/runtime resmi di repositori ini.

## Aturan paling penting

**Jangan menambahkan sintaks, operator, keyword, fungsi, library, atau semantik baru sebelum pencipta mengajarkannya atau menyetujuinya.** Kode yang terlihat masuk akal bukan bukti bahwa sintaks tersebut resmi.

## Status konten

Gunakan pemisahan yang jelas:

- **Diajarkan pencipta:** contoh atau aturan yang diberikan/dikoreksi langsung oleh pencipta.
- **Draf dokumen:** penjelasan yang belum menjadi aturan formal.
- **Rancangan produk:** kebutuhan yang ditulis dalam Markdown biasa, bukan sintaks UNICORN Ω.
- **Teruji dokumentasi:** pemeriksaan file/tautan/pola teks berhasil.
- **Teruji bahasa:** hanya setelah compiler/runtime nyata menerima contoh dan hasilnya dicatat.

## Alur kontribusi

1. Identifikasi aturan yang sudah diajarkan atau minta keputusan pencipta sebelum menulis aturan baru.
2. Simpan contoh pencipta dalam bentuk sedekat mungkin dengan sumbernya.
3. Jika ada hal yang belum jelas, catat di `docs/30-unicorn-omega/open-questions.md`; jangan menebak.
4. Perbarui dokumentasi terkait dan `CHANGELOG.md`.
5. Jalankan pemeriksaan: `python -m unittest discover -s tests -v`.
6. Pastikan klaim status akurat. Pengujian dokumentasi bukan pengujian compiler.

## Gaya repositori

- Gunakan Markdown yang mudah dibaca, heading ringkas, tabel bila membantu, dan tautan relatif.
- Gunakan ikon SVG lokal dari `assets/icons/` secara konsisten; jangan menambahkan gambar berhak cipta tanpa izin.
- Jangan menambahkan secret, token, password, session file, atau data pengguna.
- Jangan memberi label `stable`, `production-ready`, `fast`, `secure`, atau `compatible` tanpa bukti dan ruang lingkup versi/target.

## Checklist pull request

- [ ] Tidak ada aturan baru yang diasumsikan resmi.
- [ ] Status setiap contoh jelas.
- [ ] Contoh asli pencipta tetap terjaga.
- [ ] Pertanyaan yang belum terselesaikan ditambahkan ke daftar pertanyaan terbuka.
- [ ] QA dokumentasi dijalankan.
- [ ] Perubahan tercatat pada changelog.
