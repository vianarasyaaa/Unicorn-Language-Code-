# 🔎 Bacaan beranotasi — banyak sudut pandang, aturan tetap sama

Halaman ini menambah contoh penjelasan tanpa menciptakan operator, fungsi, atau grammar baru. Potongan kode yang diulang tetap berasal dari pola yang sudah diberikan pencipta.

## Kasus 1 — `#sama#` berdiri sendiri

```unicorn
persamaan= "WhatsApp",
objek::(WhatsApp):,

kenyataan::a:,
    maka#sama#dengan::WeChat,
```

**Yang diketahui:** pola `#sama#` tunggal memakai `persamaan`; objek dan `kenyataan::a:` tetap hadir sesuai contoh pencipta.

**Yang tidak disimpulkan:** contoh tersebut tidak mendefinisikan secara formal semua kemungkinan nilai atau semua objek yang boleh dibandingkan.

## Kasus 2 — `#hampir#` berdiri sendiri

```unicorn
pencocokan= "WhatsApp",
objek::(WhatsApp):,

kenyataan::a:,
    maka#hampir#dengan::WeChat,
```

**Yang diketahui:** `#hampir#` dipahami sebagai pencocokan dan menggunakan `pencocokan` dalam contoh mandiri.

**Yang tidak disimpulkan:** metode pencocokan, ukuran kemiripan, atau nilai ambang belum dijelaskan.

## Kasus 3 — `#sama#` dan `#persis#` digabung

```unicorn
objek= "WhatsApp*:a",

kenyataan::a:,
    maka#sama#dengan::WeChat,
    maka#persis#dengan::WeChat,
```

**Yang diketahui:** deklarasi `persamaan` dan pengganti point dihapus dalam contoh gabungan; `objek` menjadi point utama dengan alias `a`.

**Yang tidak disimpulkan:** urutan evaluasi, prioritas, dan cara menggabungkan dua hasil belum ditetapkan.

## Kasus 4 — Satu proyek pembahasan, beberapa point

```unicorn
persamaan= "aplikasi",
objek::(aplikasi):,

pencocokan= "pencarian",
objek::(pencarian):,
instalasi=blabalabala
```

**Yang diketahui:** pencipta menunjukkan contoh proyek dengan point pembahasan yang berbeda.

**Yang tidak disimpulkan:** placeholder `blabalabala` bukan nama library, fungsi instalasi, maupun spesifikasi nilai.

## Kasus 5 — Mengapa point tidak disamakan sembarangan?

Pada contoh yang diajarkan, `persamaan` dan `pencocokan` dipakai untuk konteks berbeda. Karena itu, dokumentasi ini tidak menukar keduanya hanya untuk membuat contoh tampak seragam.

## Kasus 6 — Mengapa `kenyataan::a:` tidak dibuang pada contoh logika tunggal?

Contoh pencipta untuk `#sama#` sendiri dan `#hampir#` sendiri tetap menaruh `kenyataan::a:` sebelum logika. Maka contoh yang direkam di repo mempertahankannya.

## Kasus 7 — Mengapa `kenyataan::a:` dipertahankan pada contoh gabungan?

Contoh gabungan memakai `objek= "WhatsApp*:a"`, lalu `kenyataan::a:` menjadi titik awal pengaitan dua logika. Penggunaan lain belum disimpulkan.

## Kasus 8 — Apakah `#persis#` sendiri sudah didokumentasikan?

Belum ada pola mandiri yang disahkan di halaman ini. Jangan menyalin pola `persamaan` atau `pencocokan` secara otomatis. Tunggu contoh khusus dari pencipta.

## Kasus 9 — Apakah penamaan file empat ekstensi sudah membuat proyek siap dijalankan?

Tidak. Ekstensi menunjukkan peran konseptual: struktur halaman, gaya/tampilan, logika/interaksi, dan data. Keempat grammar lengkap serta toolchain belum tersedia di arsip.

## Kasus 10 — Apakah sebuah library boleh ditambahkan karena namanya umum?

Tidak. Nama dan API library harus diajarkan atau disetujui pencipta terlebih dahulu. Registry saat ini sengaja belum memiliki entri resmi.

## Ringkasan keputusan

| Kasus | Jawaban yang tercatat |
|---|---|
| `#sama#` tunggal | Gunakan pola contoh dengan `persamaan` |
| `#hampir#` tunggal | Gunakan pola contoh dengan `pencocokan` |
| `#sama#` + `#persis#` | Gunakan pola gabungan yang diajarkan |
| Beberapa point pembahasan | Simpan sesuai contoh pencipta |
| `#persis#` tunggal | Belum ditetapkan |
| API library baru | Jangan ditambahkan tanpa ajaran/persetujuan |
| Compiler / runtime | Belum tersedia dalam arsip |
