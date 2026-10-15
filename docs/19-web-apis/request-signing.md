# Signed API requests

Some providers require requests to be cryptographically signed. Request-signing details differ: canonicalization, hash algorithm, header set, timestamp, nonce, and key derivation must come from the provider's official protocol.

## Implementation rules

- Prefer the provider's official SDK or verified reference implementation.
- Never invent a canonical request format.
- Keep private keys out of source and log output.
- Bind signatures to the exact method, path, query, relevant headers, body digest, and timestamp defined by the protocol.
- Avoid signing one representation then sending a semantically different request.
- Use bounded clock-skew/replay protection where applicable.
- Test known vectors and negative cases.

## UNICORN design proposal

```unicorn
signing::provider_profile, :"PROVIDER_DEFINED_PROFILE", :profile:
signing::credential_ref, :"API_SIGNING_KEY", :key_ref:
signing::apply, :request:, :profile:, :key_ref:
```

The profile name must refer to a pinned, documented implementation. This API is conceptual only.
