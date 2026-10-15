# Responses, Status Codes, dan Error Mapping

Pisahkan setidaknya lima kelas error:

1. **Transport:** DNS, socket, handshake TLS, koneksi reset.
2. **Deadline:** connect timeout, response timeout, total deadline terlampaui.
3. **HTTP:** status 4xx/5xx dengan response body yang mungkin berguna.
4. **Decode:** JSON malformed atau content type tidak sesuai.
5. **Contract:** JSON valid tetapi schema/type tidak cocok.

## Rancangan UNICORN

```unicorn
http::kirim, :req:, :res:
response::ambil_status, :res:, :status:
response::ambil_header, :res:, :"Content-Type", :content_type:

jika::di_dalam, :status:, 200, 299
    jika::mengandung, :content_type:, :"application/json"
        json::decode, :res:, :data:
        schema::validasi, :data:, :"ExpectedResponse", :valid:
    jika_tidak
        error::buat, :"UNEXPECTED_CONTENT_TYPE", :err:
    :selesai
jika_tidak
    error::http_dari_response, :status:, :res:, :err:
:selesai
```

## Hindari

- Mengasumsikan setiap koneksi sukses berarti HTTP sukses.
- Mengasumsikan semua status 2xx memiliki body (misalnya 204 biasanya no content).
- Memparse HTML error sebagai JSON tanpa memeriksa content type.
- Menampilkan seluruh body error ke log tanpa batas dan redaksi.
- Menyamakan 401, 403, 404, 409, 429, dan 500.

Untuk `fetch`, dokumentasi MDN menjelaskan bahwa status HTTP seperti 404 tidak selalu menolak Promise; periksa status/`ok` secara eksplisit: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch.
