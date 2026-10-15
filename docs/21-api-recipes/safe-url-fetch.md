# Recipe: safe server-side URL fetch

Fetching URLs supplied by users or remote payloads creates a server-side request forgery (SSRF) risk. A string prefix check such as “URL starts with https” is not enough.

## Safer strategy

- Prefer a domain allowlist.
- Parse URLs with a standards-based parser.
- Allow only needed schemes and ports.
- Resolve DNS and reject blocked/private/reserved IP ranges as appropriate.
- Revalidate each redirect target.
- Consider DNS rebinding and differences between validation and connection resolution.
- Reject credentials in URLs and malformed host encodings.
- Apply strict connect/response deadlines and body-size limits.
- Do not forward internal authentication headers to arbitrary destinations.
- Use network-layer egress controls for defense in depth.

## Proposed boundary

```unicorn
url::parse, :user_url:, :parsed:
url::scheme_allowlist, :parsed:, ["https"]
url::host_policy, :parsed:, :"ALLOWLIST_ONLY"
url::resolve_validate, :parsed:, :dns_result:
http::safe_fetch, :parsed:, :policy:, :response:
```

The safe-fetch routine should be a security-reviewed runtime boundary, not a convenience wrapper around unrestricted network access.
