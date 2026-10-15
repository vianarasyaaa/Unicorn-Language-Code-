# Recipe: REST API backed by a database

A REST route should not expose a raw database row without authorization, field filtering, validation, and transaction boundaries.

## Example flow for `GET /v1/posts/{id}`

1. Parse and validate the identifier.
2. Authenticate the caller.
3. Load the record scoped to the caller's tenant/permissions.
4. Map the database record to an explicit response DTO.
5. Return a stable JSON response or a documented not-found/error response.
6. Log a request ID and timing metadata without private payloads.

## Example for `POST /v1/posts`

- Validate only allowed writable fields.
- Validate title/body lengths and business invariants.
- Use a transaction for related writes.
- Apply idempotency if client retries could create duplicates.
- Return the correct status and representation.
- Do not trust caller-supplied `ownerId`, role, tenant, or internal status fields.

This design advice applies whether the backend is written in UNICORN, Node.js, Rust, Go, Java, or another language.
