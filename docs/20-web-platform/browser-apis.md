# Web platform capabilities

This page is a deeper companion to [browser Web APIs](../19-web-apis/browser-web-apis.md). A UNICORN implementation may target a browser, worker, Node.js host, or native operating system, and each has a different capability set.

## Environment matrix

| Capability | Browser window | Worker | Node-like host | Native host |
|---|---|---|---|---|
| HTTP request | Fetch (subject to CORS) | Fetch (subject to host rules) | Host fetch/HTTP library | Runtime HTTP module |
| DOM | Usually yes | No ordinary page DOM | No by default | No by default |
| File access | Permission/user-mediated APIs | Limited | Host filesystem APIs | Runtime filesystem API |
| Environment variables | No general OS env access | No | Common in host runtime | Runtime/OS API |
| Geolocation | Permission-based | Context-dependent | External provider needed | Platform API if available |
| Process spawning | No general shell spawning | No | Host-dependent | Permissioned OS API |

## Capability model

Rather than pretending every API exists everywhere, the language design should let packages declare required capabilities and let the runtime deny, emulate, or reject unsupported ones explicitly. A capability request must not automatically grant access to a user's filesystem, camera, location, or secrets.

## Browser safety

CORS, CSP, secure-context requirements, permissions, same-origin policy, and user activation are browser/runtime controls. UNICORN cannot bypass those controls merely by adding a keyword to the source language.
