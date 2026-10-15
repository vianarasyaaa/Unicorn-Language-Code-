# 🧠 Aturan UNICORN Ω yang sudah diajarkan

**Status:** dicatat dari contoh dan koreksi pencipta; belum diuji oleh compiler.

Halaman ini sengaja membatasi diri pada aturan yang telah muncul secara eksplisit. Jangan menyimpulkan aturan tambahan hanya dari kemiripan dengan bahasa lain.

## 1. Deklarasi point untuk pembahasan

Pencipta memberi contoh bahwa satu proyek pembahasan dapat memiliki point berbeda, misalnya point aplikasi, pencarian, dan instalasi:

```unicorn
persamaan= "aplikasi",
objek::(aplikasi):,

pencocokan= "pencarian",
objek::(pencarian):,
instalasi=blabalabala
```

`instalasi=blabalabala` pada contoh itu adalah placeholder/contoh pembahasan dari pencipta, bukan spesifikasi nilai atau API instalasi.

## 2. `#sama#` sebagai logika tunggal

Bentuk yang dicontohkan pencipta:

```unicorn
#bahasa "ID"
#level "HIGH"

program "PERSAMAAN_APLIKASI":

    persamaan= "WhatsApp",
    objek::(WhatsApp):,

    kenyataan::a:,
        maka#sama#dengan::WeChat,

    :hasil:"WhatsApp dan WeChat sama-sama aplikasi komunikasi."

:selesai
:akhir
```

Aturan yang diketahui dari contoh ini: untuk pola `#sama#` yang berdiri sendiri, deklarasi yang dicontohkan menggunakan `persamaan`, diikuti `objek::(...)` dan `kenyataan::a:` sebelum logika.

## 3. `#hampir#` sebagai pencocokan tunggal

Pencipta mengoreksi bahwa `#hampir#` merupakan pencocokan. Contoh yang diberikan:

```unicorn
#bahasa "ID"
#level "HIGH"

program "PERSAMAAN_APLIKASI":

    pencocokan= "WhatsApp",
    objek::(WhatsApp):,

    kenyataan::a:,
        maka#hampir#dengan::WeChat,

    :hasil:"WhatsApp dan WeChat memiliki fungsi yang hampir serupa dalam komunikasi."

:selesai
:akhir
```

Aturan yang diketahui: pola `#hampir#` tunggal menggunakan deklarasi `pencocokan` dalam contoh pencipta. Jangan menggantinya dengan `persamaan`.

## 4. Gabungan `#sama#` dan `#persis#`

Untuk contoh gabungan dua logika tersebut, pencipta menjelaskan bahwa deklarasi `persamaan` dihapus dan bentuk pengganti point dihapus; `objek` menjadi point utama dengan alias `a`, lalu `kenyataan::a:` mengaitkan logika-logika itu.

```unicorn
#bahasa "ID"
#level "HIGH"

program "PERSAMAAN_APLIKASI":

    objek= "WhatsApp*:a",

    kenyataan::a:,
        maka#sama#dengan::WeChat,
        maka#persis#dengan::WeChat,

    :hasil:"WhatsApp dan WeChat sama-sama aplikasi komunikasi, tetapi tidak persis identik dalam fitur dan sistemnya."

:selesai
:akhir
```

**Batas penting:** ini merekam pola gabungan yang dicontohkan. Belum ada spesifikasi formal tentang bagaimana dua hasil logika digabungkan, prioritas evaluasi, atau bagaimana konflik hasil ditangani. Jangan menambahkan aturan tersebut sendiri.

## 5. Peran `objek` dan `kenyataan`

Dari contoh pencipta:

- `objek::(WhatsApp):,` muncul pada pola logika tunggal.
- `objek= "WhatsApp*:a",` muncul pada contoh gabungan yang menggunakan alias `a`.
- `kenyataan::a:,` muncul sebelum satu atau lebih logika yang dikaitkan.

Dokumen ini tidak menyimpulkan semua kemungkinan penggunaan `objek`, `:a:`, atau `kenyataan`; contoh baru harus datang dari pencipta.

## 6. Ringkasan keputusan saat ini

| Kasus | Point/deklarasi dalam contoh pencipta | Status |
|---|---|---|
| `#sama#` sendiri | `persamaan= ...` lalu `objek::(...)` dan `kenyataan::a:` | Diajarkan melalui contoh |
| `#hampir#` sendiri | `pencocokan= ...` lalu `objek::(...)` dan `kenyataan::a:` | Diajarkan melalui contoh |
| `#sama#` + `#persis#` | `objek= "...*:a"` lalu `kenyataan::a:` | Diajarkan sebagai pola gabungan |
| `#persis#` sendiri | Belum ada pola mandiri yang disahkan di dokumen ini | Menunggu pencipta |
| Lebih dari dua logika | Belum ditetapkan secara formal | Menunggu pencipta |
| Logika yang kontradiktif | Belum ditetapkan secara formal | Menunggu pencipta |

## 7. Prinsip pencatatan

Jangan mengubah contoh hanya agar terlihat seperti bahasa pemrograman lain. Jika terdapat tanda baca yang tampak berbeda-beda antarcontoh, simpan bentuk yang diajarkan dan tandai pertanyaannya di [pertanyaan terbuka](open-questions.md), bukan menebak perbaikannya.
