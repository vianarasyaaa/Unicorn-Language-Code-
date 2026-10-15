# GET, Path, dan Query Parameters

GET digunakan untuk membaca resource. Path biasanya memilih resource; query biasanya memfilter, mengurutkan, atau membatasi hasil.

## UNICORN — syntax proposal

```unicorn
http::request_buat, :"GET", :"https://jsonplaceholder.typicode.com/posts", :req:
http::query, :req:, :"userId", :"1"
http::query, :req:, :"_limit", :"10"
http::header, :req:, :"Accept", :"application/json"
http::timeout, :req:, 5000
http::kirim, :req:, :res:
http::status_cek, :res:, 200
json::decode, :res:, :posts:
collection::ukur, :posts:, :count:
```

Query harus diserialisasi dengan URL encoding. Jangan merangkai input pengguna langsung ke URL tanpa encoding.

## Uji nyata dengan curl

```bash
curl --fail-with-body \
  'https://jsonplaceholder.typicode.com/posts?userId=1&_limit=10'
```

## Hasil yang harus divalidasi

- status sesuai kontrak;
- content type JSON sesuai ekspektasi;
- response tidak lebih besar dari batas;
- schema item tervalidasi;
- jumlah item tidak melewati limit;
- data kosong adalah hasil valid bila API mengizinkan.
