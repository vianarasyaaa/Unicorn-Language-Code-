# Recipe: HTTP Data Fetcher

Satu job fetcher perlu: client reuse, timeout/deadline, ukuran response, status check, JSON schema, retry terbatas untuk GET, concurrency limit, dan cache bila aman.

```unicorn
http::klien_buat, :"https://jsonplaceholder.typicode.com", :client:
http::request_buat, :"GET", :"/posts/1", :req:
http::timeout, :req:, 5000
http::kirim, :client:, :req:, :res:
http::status_cek, :res:, 200
json::decode, :res:, :post:
schema::validasi, :post:, :"Post", :ok:
assert::benar, :ok:
```

Uji nyata melalui curl: `curl --fail-with-body 'https://jsonplaceholder.typicode.com/posts/1'`. Public demo tidak cocok untuk SLA, data rahasia, atau beban besar.
