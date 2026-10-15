# Recipe: search APIs and result parsing

Search services return ranked candidate resources; a result should be treated as untrusted external data, not as proof that a page is true or safe.

## Rules

- Use provider-authorized APIs and comply with usage terms.
- Prefer a provider's documented API over scraping private endpoints or bypassing access controls.
- Bound query length, returned result count, and total response bytes.
- Validate result URLs and normalize hostnames.
- Do not automatically visit result URLs from a server without SSRF controls.
- Store source URL and retrieval time when provenance matters.
- Respect rate limits and cache rules.

## Proposed interface

```unicorn
search::client, :"CONFIGURED_PROVIDER", :client:
search::query, :client:, :query:, 10, :result_page:
search::validate_results, :result_page:, :safe_results:
search::redact, :safe_results:, :display_results:
```

Do not expose provider secrets to browser bundles; use a server-side adapter when a key must remain private.
