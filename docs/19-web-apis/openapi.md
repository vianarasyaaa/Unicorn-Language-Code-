# OpenAPI: contracts, documentation, and generated clients

OpenAPI is a language-agnostic description format for HTTP APIs. A contract can describe endpoints, parameters, request bodies, responses, authentication schemes, and data schemas. Tools can use the description to render docs, generate clients/servers, and validate requests, but generated output still requires review and tests.

Official reference: <https://spec.openapis.org/oas/>.

## Recommended workflow

1. Write an API description with a pinned OpenAPI version.
2. Define request/response schemas and error responses.
3. Specify authentication and security requirements.
4. Lint the contract in CI.
5. Generate docs/client stubs using a pinned, reviewed toolchain.
6. Test the implementation against the description.
7. Version and publish the contract alongside the API release.

## Small OpenAPI example

See [`examples/05-web-apis/openapi.yaml`](../../examples/05-web-apis/openapi.yaml). It describes a hypothetical posts API; `api.example.com` is a placeholder, not a live service.

## Proposed UNICORN generation interface

```unicorn
openapi::load, :"openapi.yaml", :contract:
openapi::validate, :contract:, :diagnostics:
openapi::client_generate, :contract:, :"UNICORN_HTTP", :output_dir:
```

This API is not implemented. Generated clients should expose typed request/response models, authentication hooks, and errors while keeping network/runtime policies explicit.

## Contract tests

Test required properties, enum values, status codes, response content type, pagination, auth failures, and error payloads. Avoid assuming a schema alone proves object-level authorization or business rules.
