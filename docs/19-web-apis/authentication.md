# API authentication and authorization

Authentication answers “who is calling?” Authorization answers “what may this caller do to this specific resource?” Treat them as separate checks.

## Common credential styles

| Style | Suitable context | Care points |
|---|---|---|
| API key | Service identification or simple partner APIs | Scope, rotate, restrict and never publish privileged keys in browser code |
| Bearer access token | User/service authorization where API supports token auth | Send over HTTPS in `Authorization`; minimize scope and lifetime |
| OAuth 2.0 | Delegated access flows | Use a flow appropriate to the client type; do not invent an auth flow |
| OpenID Connect | Identity layer built around OAuth 2.0 | Validate issuer, audience, signature, expiry, nonce/state as applicable |
| mTLS / signed requests | Higher-assurance service-to-service contexts | Certificate/key lifecycle and canonical signing must be precise |
| Session cookie | Browser-based app sessions | Secure, HttpOnly, SameSite settings; CSRF defense where needed |

## Proposed bearer request

```unicorn
secret::ambil_env, :"UNICON_API_TOKEN", :token:
http::header, :request:, :"Authorization", :gabung(:"Bearer ", :token:)
```

The helper syntax above is conceptual. The token must come from a secret store/environment or credential provider, not be hard-coded into a committed `.un` file.

## Authorization policy

- Authenticate first, then check permissions on every sensitive operation.
- Authorize object access, not just route access: `GET /users/123` must not disclose user 123 to any authenticated caller without permission.
- Validate writable fields to prevent mass assignment.
- Check tenant/owner boundaries in database queries or a trusted policy layer.
- Use least privilege and explicit scopes.
- Return errors that do not reveal whether protected objects exist when that distinction is sensitive.

## Token handling checklist

- Never log tokens or secrets.
- Do not place secrets in query strings.
- Use HTTPS and certificate validation.
- Rotate/revoke credentials.
- Expire short-lived tokens and handle refresh securely.
- Restrict token scopes and audience.
- Use a secret manager in deployments that support one.
- Separate local development secrets from production secrets.
