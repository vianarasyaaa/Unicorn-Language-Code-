# API compatibility, deprecation, and client generation

This supplemental page defines release discipline for generated clients and API integrations.

- Pin the API schema version used to generate a client.
- Record generator version and configuration.
- Review generated diffs instead of automatically accepting them.
- Version public models and document breaking changes.
- Keep server and client compatibility claims backed by tests.
- Expose deprecation and sunset information according to the service contract.
- Never regenerate a production client from an untrusted remote schema during deployment.

See [OpenAPI](openapi.md) and [API versioning](api-versioning.md).
