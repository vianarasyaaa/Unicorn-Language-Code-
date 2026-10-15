# API versioning and compatibility

Versioning communicates how an API can evolve without surprising its users. Choose a policy and document compatibility expectations before shipping the first public contract.

## Strategies

- URL prefix, such as `/v1/resource`.
- Versioned media type or headers.
- Additive evolution within a stable version.

There is no universal strategy that fits every system. Prefer changes that are backward compatible where possible: add optional fields, avoid changing the meaning of existing fields, and do not remove enum values without a migration plan.

## Compatibility checklist

- Define deprecation notices and retirement dates.
- Version schemas and generated clients.
- Test old clients against new server builds where compatibility is promised.
- Keep semantic behavior stable, not just JSON field names.
- Document idempotency and error changes.
- Provide migration notes and telemetry for old versions.

## UNICORN package contract

API contracts used by generated clients should pin the OpenAPI/schema version and generated-client version. Avoid silently regenerating production clients from a changed remote schema during a release build.
