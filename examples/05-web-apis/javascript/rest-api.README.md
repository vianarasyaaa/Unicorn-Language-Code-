# Local REST API Example

Requires a modern Node.js runtime. This is a real JavaScript companion, not UNICORN.

Start it:

```bash
node rest-api.mjs
```

In another terminal:

```bash
curl --fail-with-body http://127.0.0.1:8080/health
curl --fail-with-body http://127.0.0.1:8080/v1/items
curl --fail-with-body -X POST http://127.0.0.1:8080/v1/items -H 'content-type: application/json' -d '{"name":"Viana Studio"}'
curl --fail-with-body -X PATCH http://127.0.0.1:8080/v1/items/1 -H 'content-type: application/json' -d '{"name":"Updated sample"}'
curl --fail-with-body -X DELETE http://127.0.0.1:8080/v1/items/1
```

This example intentionally uses in-memory storage and binds to loopback. It has basic body limits and validation, but **is not production-ready**: it has no authentication, database, rate limiter, request logging, reverse-proxy hardening, or automated tests.
