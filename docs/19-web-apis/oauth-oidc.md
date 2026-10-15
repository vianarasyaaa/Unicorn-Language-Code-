# OAuth 2.0 and OpenID Connect

This page is an implementation guide, not a complete protocol specification. Use the official protocol specifications and provider documentation for exact requirements.

## Conceptual distinction

- **OAuth 2.0** defines delegated authorization: a client obtains authorization to access a resource under defined conditions.
- **OpenID Connect (OIDC)** adds an identity layer on top of OAuth 2.0 and defines ID-token semantics.
- An access token is not necessarily an identity token. Do not use an access token as an ID token unless the relevant protocol/provider contract explicitly defines it.

## Flow selection

Choose the flow based on the client type and threat model. Modern interactive user-facing applications commonly use Authorization Code with PKCE. Never put a client secret into a public browser or mobile application. Use provider-supported machine-to-machine flows for service accounts.

## Required checks (as applicable)

- `state` validation to bind response to the started authorization transaction.
- PKCE verifier/challenge.
- Exact redirect URI matching.
- Token issuer, audience, signature, expiry and intended usage.
- Nonce validation for OIDC flows that use it.
- Secure token storage and refresh-token rotation/revocation policy.
- Least-privilege scopes.

## UNICORN surface proposal

```unicorn
auth::oauth_client, :"provider_config", :oauth:
auth::start_authorization, :oauth:, :"PKCE", :url:
auth::exchange_code, :oauth:, :callback:, :token_result:
auth::validate_token, :token_result:, :claims:
```

This is illustrative. Protocol correctness must come from a tested library/provider integration rather than handwritten token parsing.

References: OAuth specifications are maintained by the IETF OAuth working group; OIDC documentation is published by the OpenID Foundation and the specific identity provider.
