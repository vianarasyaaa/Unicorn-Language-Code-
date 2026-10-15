# GraphQL APIs

GraphQL commonly exposes a typed schema with query, mutation, and optionally subscription operations. It changes how clients select data but does not remove the need for authentication, authorization, rate limits, validation, or transport security.

## Client checklist

- Send operation and variables separately where supported.
- Prefer named operations and persisted-query support where appropriate.
- Validate HTTP status and GraphQL `errors` separately: a response can contain partial `data` and errors.
- Limit query depth, complexity, aliases, and page sizes on the server.
- Avoid embedding secrets in query text.
- Use generated types only from a trusted, versioned schema and validate runtime input.

## Proposed client

```unicorn
graphql::client, :"https://api.example.com/graphql", :client:
graphql::query, :client:, :"query User($id: ID!) { user(id: $id) { id name } }", :variables:, :result:
graphql::validasi_result, :result:, :validated:
```

This is illustrative. A real API should serialize variables with a JSON serializer, not string concatenation.

## Server concerns

- Apply authorization at resolver/object access, not just top-level operation.
- Limit depth and complexity.
- Set timeouts and cancellation.
- Avoid N+1 fetch patterns with batching/caching where appropriate.
- Redact sensitive resolver failures from public error payloads.
