# HTTP API Cheat Sheet

## Read one resource (proposal syntax)

```unicorn
http::request_buat, :"GET", :url:, :req:
http::header, :req:, :"Accept", :"application/json"
http::timeout, :req:, 5000
http::kirim, :req:, :res:
response::validasi_status, :res:, [200]
json::decode, :res:, :data:
```

## POST JSON (proposal syntax)

```unicorn
http::request_buat, :"POST", :url:, :req:
http::header, :req:, :"Content-Type", :"application/json"
http::body_json, :req:, :payload:
http::kirim, :req:, :res:
response::validasi_status, :res:, [200, 201, 202]
```

## curl

```bash
curl --fail-with-body --connect-timeout 3 --max-time 8 \
  -H 'Accept: application/json' 'https://jsonplaceholder.typicode.com/posts/1'
```

## Before production

Timeout, max body, status/schema validation, auth scope, token redaction, retry policy, rate limit, observability, cancellation, cleanup, and tests.
