# Upload dan Download Berkas

## Download

- Gunakan streaming jika file besar.
- Batasi ukuran, durasi, redirect, dan content type.
- Tulis ke temporary file, validasi, lalu rename atomik bila sesuai.
- Periksa checksum/signature jika integritas wajib.
- Jangan menganggap extension file menunjukkan tipe aktual.

## Upload

- Gunakan multipart/form-data bila API mensyaratkannya.
- Batasi total dan per-file size.
- Validasi MIME/content signature sesuai threat model.
- Hindari path dari pengguna saat menulis file.
- Jangan log isi file atau secret form.

## Rancangan syntax

```unicorn
http::request_buat, :"POST", :upload_url:, :req:
http::multipart_field, :req:, :"description", :description:
http::multipart_file, :req:, :"file", :source_file:
http::body_limit, :req:, 10485760
http::kirim_streaming, :req:, :response:
```

Syntax ini menguraikan desain API; implementasi harus mengendalikan buffering dan aliran file secara eksplisit.
