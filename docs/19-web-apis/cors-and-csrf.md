# CORS and CSRF

CORS and CSRF solve different problems. CORS is a browser-enforced cross-origin access protocol; it is not authentication and does not replace server-side authorization. CSRF concerns unwanted requests made with ambient credentials (such as session cookies) in a browser context.

## CORS guidance

- Allow only origins that need browser access.
- Do not reflect arbitrary `Origin` values into `Access-Control-Allow-Origin`.
- Credentialed requests require a narrow origin policy; wildcard origin is not a substitute.
- Handle preflight `OPTIONS` requests correctly for allowed methods and headers.
- CORS does not protect a non-browser API client from accessing an endpoint.

## CSRF guidance

- Use `SameSite` cookie settings appropriately.
- Use anti-CSRF tokens or another defensible strategy for state-changing requests using ambient cookies.
- Check origin/referer signals when suitable for the threat model, but do not treat them as the only control.
- Avoid state-changing `GET` endpoints.
- Require authorization checks regardless of CSRF protection.

## UNICORN server configuration proposal

```unicorn
cors::allow_origin, :app:, :"https://app.example.com"
cors::allow_methods, :app:, ["GET", "POST", "PATCH"]
cors::allow_headers, :app:, ["Content-Type", "Authorization"]
cors::allow_credentials, :app:, benar
csrf::aktifkan, :app:, :"SESSION_COOKIE"
```

These calls describe intent; exact semantics and browser test coverage are required before implementation.
