# HTTP Client

## Lifecycle yang disarankan

1. Buat client dengan konfigurasi TLS, proxy, koneksi, timeout, dan pool.
2. Validasi endpoint dan metode.
3. Bentuk query/header/body.
4. Kirim request dalam deadline.
5. Periksa status dan `Content-Type`.
6. Batasi bytes yang diterima.
7. Decode dan validasi schema.
8. Petakan ke tipe aplikasi.
9. Tutup stream atau batalkan request ketika tidak lagi diperlukan.
10. Rekam metrik, bukan kredensial.

## Rancangan UNICORN (belum executable)

```unicorn
http::klien_buat, :"jsonplaceholder", :client:
http::konfigurasi, :client:
    koneksi::maksimum, 32
    koneksi::idle_timeout, 15000
    request::timeout, 5000
    response::maksimum_byte, 1048576
    tls::verifikasi_sertifikat, benar
:selesai

http::request_buat, :"GET", :"https://jsonplaceholder.typicode.com/posts/1", :req:
http::header, :req:, :"Accept", :"application/json"
http::deadline, :req:, 5000
http::kirim, :client:, :req:, :res:
http::status_cek, :res:, :status:
json::decode, :res:, :post:
schema::validasi, :post:, :"PostV1", :valid:

jika::valid, :valid:
    layar::cetak, :post.title:
jika_tidak
    error::laporkan, :"Response tidak sesuai schema"
:selesai

http::response_tutup, :res:
http::request_tutup, :req:
http::klien_tutup, :client:
:akhir
```

## Contoh nyata dengan curl

```bash
curl --fail-with-body --silent --show-error \
  --connect-timeout 3 --max-time 8 \
  -H 'Accept: application/json' \
  'https://jsonplaceholder.typicode.com/posts/1'
```

`curl` adalah contoh yang dapat dijalankan jika curl tersedia dan jaringan mengizinkan akses; contoh `.un` di atas tetap rancangan syntax.

## Pola penting

- Gunakan client/pool yang dipakai ulang; hindari membuat koneksi baru per request tanpa alasan.
- Atur batas body, redirect, dan waktu.
- Batasi concurrency agar layanan tidak overload.
- Pisahkan error transport dari status HTTP dan error decoding.
- Jangan menerima sertifikat TLS invalid hanya demi “mengatasi error”.
