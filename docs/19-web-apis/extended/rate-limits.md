# Rate Limits dan Throttling

## Bedakan pola kontrol

- **Rate limit:** jumlah operasi dalam periode (misalnya 100 per menit).
- **Concurrency limit:** jumlah request aktif pada saat yang sama.
- **Queue limit:** jumlah operasi yang boleh menunggu.
- **Backpressure:** produsen melambat atau menolak kerja ketika konsumen tidak sanggup.
- **Quota:** batas berdasarkan akun, hari, bulan, atau produk.

## Rancangan konfigurasi

```unicorn
api::client, :"provider", :client:
api::limit, :client:
    limit::request_per_second, 5
    limit::burst, 10
    limit::concurrency, 4
    limit::queue_maximum, 100
    limit::on_full, :"REJECT_WITH_BACKPRESSURE"
:selesai
```

Angka di atas hanya contoh konfigurasi, bukan rekomendasi umum. Ikuti batas layanan yang nyata.

## HTTP 429

Baca header rate-limit/`Retry-After` sesuai kontrak provider, turunkan laju, tambah jitter, dan batasi retry. Jangan melewati batas dengan berganti identitas atau membuat pool akun; itu bukan strategi ketahanan yang aman.
