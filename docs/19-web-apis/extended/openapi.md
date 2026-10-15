# OpenAPI dan API Contract

OpenAPI mendeskripsikan API HTTP dalam format mesin-baca, termasuk path, operation, parameter, request/response schema, security scheme, dan contoh. Gunakan spesifikasi yang tervalidasi untuk menghasilkan docs/client/server stubs, tetapi tinjau generator output.

Sumber: [OpenAPI Specification](https://spec.openapis.org/oas/latest.html).

## Contoh kecil OpenAPI 3.1 (YAML)

```yaml
openapi: 3.1.0
info:
  title: Demo Posts API
  version: 1.0.0
paths:
  /posts/{id}:
    get:
      operationId: getPost
      parameters:
        - name: id
          in: path
          required: true
          schema: { type: integer, minimum: 1 }
      responses:
        '200':
          description: Post ditemukan
          content:
            application/json:
              schema:
                type: object
                required: [id, title, body, userId]
                properties:
                  id: { type: integer }
                  title: { type: string }
                  body: { type: string }
                  userId: { type: integer }
        '404':
          description: Tidak ditemukan
```

## Rancangan generator UNICORN

```unicorn
api::openapi_baca, :"openapi.yaml", :spec:
api::openapi_validasi, :spec:, :diagnostics:
api::client_generate, :spec:, :"UNICORN_CLIENT", :out_dir:
api::contract_tests_generate, :spec:, :"tests/api_contract":
```

Ini bukan command CLI yang sudah tersedia. Generator perlu memetakan schema OpenAPI ke type system UNICORN dan melaporkan konstruksi yang tidak didukung.
