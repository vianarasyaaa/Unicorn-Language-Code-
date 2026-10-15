# POST, PUT, PATCH, dan JSON

## POST JSON — rancangan UNICORN

```unicorn
http::request_buat, :"POST", :"https://jsonplaceholder.typicode.com/posts", :req:
http::header, :req:, :"Accept", :"application/json"
http::header, :req:, :"Content-Type", :"application/json"
json::objek_buat, :payload:
json::set, :payload:, :"title", :"Belajar UNICORN"
json::set, :payload:, :"body", :"Contoh payload API"
json::set, :payload:, :"userId", 1
json::encode, :payload:, :body_bytes:
http::body, :req:, :body_bytes:
http::timeout, :req:, 5000
http::kirim, :req:, :res:
http::status_dalam, :res:, [200, 201], :status_ok:
json::decode, :res:, :created:
```

## Uji nyata dengan curl

```bash
curl --fail-with-body --silent --show-error \
  -X POST 'https://jsonplaceholder.typicode.com/posts' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{"title":"Belajar UNICORN","body":"Contoh payload API","userId":1}'
```

Endpoint contoh ini berguna untuk belajar. Jangan gunakan API demo untuk menyimpan data penting.

## Retry mutasi

Jangan mengulang POST otomatis hanya karena response timeout: server mungkin sudah memproses operasi tetapi client belum menerima jawaban. Gunakan idempotency key bila server mendukung, atau desain operasi bisnis yang aman terhadap duplikasi.
