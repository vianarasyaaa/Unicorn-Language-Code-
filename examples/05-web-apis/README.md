# 🌐 Web API Examples

Semua `.un` adalah syntax proposal UNICORN Ω, belum executable. Contoh `curl`/JavaScript adalah contoh dari ekosistem yang memang menyediakan tool/runtime masing-masing.

## File examples

| File | Kegunaan |
|---|---|
| `01-get-post.un` | GET satu resource |
| `02-get-query.un` | Query/filter |
| `03-post-json.un` | POST JSON |
| `04-patch-delete.un` | PATCH/DELETE |
| `05-auth-header.un` | Bearer token melalui environment |
| `06-timeout-retry.un` | Bounded retry policy |
| `07-pagination.un` | Pagination pattern |
| `08-webhook.un` | Verifikasi webhook |
| `09-server-routes.un` | REST API server routes |
| `10-graphql.un` | GraphQL query |
| `11-websocket.un` | WebSocket lifecycle |
| `12-file-upload.un` | Upload constraints |
| `13-cache-etag.un` | Conditional cache |
| `14-rate-limit.un` | Throttle/concurrency |
| `15-concurrent-fetch.un` | Concurrent requests with bounds |
| `16-circuit-breaker.un` | Circuit breaker contract |
| `curl/` | Requests yang dapat diuji dengan curl |
| `javascript/` | Fetch/Node.js counterpart yang nyata |

## Contoh tambahan dalam paket ini

File yang sudah tersedia dari versi dokumentasi awal juga mencakup:

- `01-get-json-high.un`: fetch ringkas level tinggi.
- `02-rest-crud-mid.un`: alur CRUD level menengah.
- `03-client-policy-low.un`: policy client pada level rendah.
- `04-low-byte-response.un`: contoh data response/byte lebih eksplisit.
- `05-auth-bearer.un`, `06-retry-policy.un`, `08-webhook-receiver.un`: auth, retry, webhook.
- `09-websocket.un`, `10-sse.un`, `12-openapi-client.un`: streaming dan API contract.
- `jsonplaceholder-client.mjs`, `openapi.yaml`, `requests.http`, `curl-examples.sh`, `.env.example`.

## API demo

- GET single post: `https://jsonplaceholder.typicode.com/posts/1`
- Filter posts: `https://jsonplaceholder.typicode.com/posts?userId=1`
- POST demo: `https://jsonplaceholder.typicode.com/posts`

Baca guide dari provider sebelum pemakaian dan jangan mengandalkan data demo sebagai storage permanen. Jangan mengirim informasi sensitif ke endpoint publik.
