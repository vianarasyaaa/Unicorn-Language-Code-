# Dasar HTTP dan API

## Istilah

- **API:** kontrak pertukaran operasi/data antar komponen.
- **Endpoint:** method + URL + aturan request/response.
- **HTTP method:** `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, `OPTIONS`.
- **Header:** metadata request/response, misalnya `Content-Type`, `Accept`, `Authorization`.
- **Body:** representasi payload seperti JSON, form, atau biner.
- **Status code:** kategori hasil; jangan menilai sukses hanya dari koneksi yang berhasil.
- **Idempotency:** pengulangan operasi dengan request yang sama memiliki efek bisnis yang sama.
- **Deadline:** batas waktu total untuk seluruh operasi, bukan hanya satu tahap koneksi.

## Method umum

| Method | Tujuan lazim | Retry otomatis? |
|---|---|---|
| GET | Membaca | Biasanya aman dengan backoff dan batas |
| HEAD | Metadata tanpa body | Biasanya aman |
| POST | Membuat/menjalankan operasi | Jangan retry membabi buta; gunakan idempotency key bila didukung |
| PUT | Mengganti resource | Idempotent secara semantik HTTP, kontrak server tetap perlu diverifikasi |
| PATCH | Memperbarui sebagian | Bergantung operasi dan implementasi |
| DELETE | Menghapus | Umumnya idempotent secara semantik, tetapi error/authorization tetap harus ditangani |
| OPTIONS | Menanyakan kemampuan/CORS | Sesuai konteks |

## Status code yang perlu ditangani

`200 OK`, `201 Created`, `202 Accepted`, `204 No Content`, `301/302 Redirect`, `304 Not Modified`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `409 Conflict`, `413 Content Too Large`, `415 Unsupported Media Type`, `422 Unprocessable Content`, `429 Too Many Requests`, dan `5xx` server error.

Jangan masukkan body yang berpotensi rahasia ke log error. Batasi ukuran error body sebelum ditampilkan.

## Sintaks proposal UNICORN

```unicorn
http::klien, :"https://jsonplaceholder.typicode.com", :client:
http::request, :client:
    request::method, :"GET"
    request::path, :"/posts/1"
    request::accept, :"application/json"
    request::timeout, 5000
:selesai
http::kirim, :client:, :response:
http::periksa_status, :response:, :result:
:akhir
```

API tersebut belum diimplementasikan. Parameter timeout di atas bersifat contoh kontrak dalam milidetik dan harus disahkan oleh spesifikasi runtime.
