# API security checklist

Use the official OWASP API Security Top 10 and organization-specific threat models as a review baseline. This checklist is not a substitute for a security review.

## Authorization
- Verify authorization for each object and operation, not just the route.
- Limit which properties a client may read or modify.
- Enforce function-level privileges and tenant separation.

## Authentication and secrets
- Use a documented authentication scheme.
- Use TLS with certificate verification.
- Keep credentials out of source control, URLs, logs, and client bundles.
- Rotate and revoke credentials; use least privilege.

## Resource consumption
- Limit request body, response body, pagination, nesting, regex work, upload size, and concurrency.
- Apply deadlines and bounded retries.
- Prevent excessive GraphQL query complexity and unbounded file processing.

## SSRF and unsafe URL consumption
- Validate scheme, host, resolved IP, redirect target, and destination port where server-side fetches are allowed.
- Block internal/metadata address ranges unless a specific trusted use case requires them.
- Re-check every redirect; DNS rebinding and redirects can bypass simplistic checks.
- Prefer an allowlist when possible.

## Data validation and error handling
- Validate content type, size, schema, and business rules.
- Do not trust remote API data just because TLS succeeded.
- Return minimal external errors and retain redacted internal telemetry.

## Operational security
- Inventory routes and API versions.
- Patch dependencies and pin critical tool versions.
- Monitor anomalies without storing sensitive payloads unnecessarily.
- Test webhook signatures and replay protection.
- Review CORS and cookie configuration.

Reference: <https://owasp.org/www-project-api-security/> and <https://api-security.owasp.org/editions/2023/en/0x11-t10/>.
