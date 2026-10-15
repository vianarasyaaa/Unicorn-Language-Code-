# Storage and service workers

Browser storage APIs have different lifetimes and guarantees. A proposal for UNICORN must not blur in-memory state, persistent key/value storage, indexed data, cookie-based session credentials, and file handles into one universal store.

## Design distinctions

- **Memory only:** disappears when context exits.
- **Local/session storage:** origin-scoped key/value data with quota and serialization constraints.
- **Indexed storage:** structured browser-local data for larger datasets.
- **Cookies:** automatically participate in some HTTP requests and therefore have security implications.
- **Service workers:** event-driven lifecycle and caching/interception model controlled by browser rules.

## Safety

Do not store privileged long-lived server secrets in client-side storage. Scope data by user/account, handle logout and data deletion, assume local browser storage may be read by same-origin script, and avoid treating browser-local data as authoritative server state.
