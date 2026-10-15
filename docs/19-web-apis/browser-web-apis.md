# Browser Web APIs and environment boundaries

A “Web API” can also mean an API built into a browser or web worker. These APIs are not automatically available to a native CLI, server, or embedded runtime. UNICORN should expose them only under an explicit browser/web target or imported host capability.

## Common browser APIs

| API family | Typical use | Permissions / limitations |
|---|---|---|
| Fetch | HTTP requests | CORS, credentials, CSP, browser policy |
| DOM | Read/update document nodes | Requires a document context |
| Clipboard | Copy/paste | Secure context and user-activation rules can apply |
| Geolocation | Read position | Permission, secure context, privacy disclosure |
| WebSocket | Persistent duplex connection | Origin, network policy, server auth |
| EventSource | SSE client | Browser-specific connection/header behavior |
| Web Crypto | Cryptographic primitives | Use vetted operations; key handling is still security-critical |
| Storage APIs | Browser state | Quotas, same-origin scope, privacy policy |
| Service Worker | Offline/request handling | Lifecycle and scope restrictions |
| Notifications | User notifications | Permission and browser requirements |
| Media Devices | Camera/microphone | Explicit user permission and secure context |

## Capability declaration proposal

```unicorn
#target "BROWSER"
capability::require, :"FETCH"
capability::optional, :"CLIPBOARD"
capability::permission, :"GEOLOCATION", :"USER_CONSENT"
```

The compiler/runtime should report target incompatibilities early instead of silently substituting fake behavior.

## Security design

Do not treat browser APIs as trusted because they are built in. Validate remote data, avoid storing long-lived secrets in browser storage, follow origin permissions, and provide user-visible consent for sensitive capabilities.
