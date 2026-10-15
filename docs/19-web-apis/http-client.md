# HTTP client API

The proposed `http` module is a client-side API for services that expose HTTP endpoints. It must be designed around explicit lifecycle and result semantics rather than returning untyped text for every response.

## Proposed conceptual API surface

| Operation | Intent |
|---|---|
| `http::request_buat` | Create request with method and URL |
| `http::header` | Add or replace a request header under a defined policy |
| `http::query_tambah` | Append a query parameter using URI-safe encoding |
| `http::body_json` | Serialize a typed value to JSON |
| `http::timeout` | Set total deadline or connect/read timeouts as specified |
| `http::kirim` | Send request asynchronously or synchronously according to signature |
| `http::status` | Read response status |
| `http::header_ambil` | Read response metadata |
| `http::body_baca` | Read response with byte cap |
| `http::json_baca` | Decode JSON and return a decoding result |
| `http::batal` | Cancel in-flight request if supported |

These names are design suggestions, not committed standard-library APIs.

## High-level example

```unicorn
#level "HIGH"

api::get_json, :"https://jsonplaceholder.typicode.com/posts/1", :post:
layar::cetak, :post:
:akhir
```

A high-level helper should still have documented defaults for timeout, max response size, TLS verification, and error handling. Hidden convenience must not mean hidden insecurity.

## Mid-level example

```unicorn
#level "MID"

http::request_buat, :"GET", :"https://jsonplaceholder.typicode.com/posts/1", :req:
http::header, :req:, :"Accept", :"application/json"
http::timeout, :req:, 5000
http::max_response_bytes, :req:, 1048576
http::redirect_policy, :req:, :"HTTPS_ONLY_SAME_POLICY"
http::kirim, :req:, :res:

http::status, :res:, :status:
jika::rentang, :status:, 200, 299
    http::json_baca, :res:, :post:
jika_tidak
    http::error_buat, :res:, :err:
    error::laporkan, :err:
:selesai
:akhir
```

## Low-level example

```unicorn
#level "LOW"

uri::parse, :"https://jsonplaceholder.typicode.com/posts/1", :uri:
uri::validasi_skema, :uri:, :"HTTPS"
uri::validasi_host, :uri:, :"jsonplaceholder.typicode.com"
http::request_init, :"GET", :uri:, :request:
http::header, :request:, :"Accept", :"application/json"
http::header, :request:, :"User-Agent", :"UNICORN-OMEGA-EXAMPLE"
http::deadline, :request:, 5000
http::response_limit, :request:, 1048576
http::transport_tls_validate, :request:, benar
http::send, :request:, :response:, :transport_error:
http::response_status, :response:, :status:
http::response_body_bounded, :response:, 1048576, :body:
json::parse, :body:, :document:, :json_error:
resource::close, :response:
:akhir
```

A low-level API should state precisely which buffer it owns, whether response bodies stream or materialize, and which resources require explicit cleanup.

## Error taxonomy

Use a typed result with separate cases, such as:
- URL or request construction failure.
- DNS / connection failure.
- TLS validation failure.
- Timeout / cancellation.
- HTTP response status outside expected set.
- Response too large.
- Unexpected content type.
- JSON decode failure.
- Schema validation failure.

Never discard error details silently, but avoid logging authorization headers or private response data.
