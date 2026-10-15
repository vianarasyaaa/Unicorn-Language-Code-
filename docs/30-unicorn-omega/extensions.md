# 🗂️ Empat ekstensi utama

**Status: peran ekstensi telah dijelaskan pencipta; tata bahasa lengkap belum diajarkan.**

## Peta ekstensi

| Ekstensi | Peran yang dijelaskan | Yang belum boleh diasumsikan |
|---|---|---|
| `.unml` | Struktur halaman website | Nama komponen, nesting, atribut, event, include/import, terminator |
| `.uncs` | Desain/tampilan website | Selektor, unit, cascade, warna bertema, media query, animasi |
| `.untext` | Logika dan interaksi website | Grammar lengkap fungsi, seluruh event, nilai balik, library, exception/error semantics |
| `.unt` | Data website | Skema, tipe, collection syntax, serialisasi, validasi, import/export |

## Kesepakatan kerja

1. Keempat ekstensi merupakan bagian dari rancangan proyek website UNICORN Ω.
2. Contoh `.untext` boleh memakai logika/point yang sudah diajarkan dan ditulis di [aturan pencipta](creator-taught-rules.md).
3. Sintaks `.unml`, `.uncs`, dan `.unt` tidak akan diciptakan berdasarkan tebakan. Sampai pencipta mengajarkannya, contoh file untuk ketiganya hanya boleh berupa header/kosong atau spesifikasi kebutuhan yang ditulis dalam Markdown.
4. Nama file yang berakhiran ekstensi bukan bukti bahwa compiler atau parsernya tersedia.
5. Semua contoh diberi label: **aturan yang diajarkan**, **rancangan non-eksekusi**, atau **belum disahkan**.

## Status kemajuan

- **Peran ekstensi:** diketahui secara konseptual.
- **Grammar per ekstensi:** belum ditetapkan lengkap di dokumentasi ini.
- **Compiler/parser:** tidak ada dalam arsip.
- **Pengujian integrasi:** belum dapat dilakukan tanpa implementasi.

## Bentuk dokumentasi saat sintaks belum tersedia

Untuk menghindari sintaks karangan, gunakan dokumen Markdown biasa untuk menjelaskan kebutuhan halaman, desain, dan struktur data. Contoh rancangan ada di [proyek Play Store](../../examples/07-play-store-project/README.md). Dokumen tersebut bukan sintaks UNICORN Ω.
