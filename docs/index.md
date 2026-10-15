> [!IMPORTANT]
> Aturan yang telah diajarkan pencipta berada di [pusat aturan UNICORN Ω](30-unicorn-omega/README.md). Dokumen bernomor di bawah adalah proposal/riset awal dan tidak otomatis menjadi sintaks resmi. Jangan menambahkan aturan baru tanpa ajaran atau persetujuan pencipta.

# UNICORN Ω Documentation Hub

Selamat datang di dokumentasi master UNICORN Ω. Ini adalah **rancangan bahasa** dengan sintaks Indonesia/Inggris/hybrid dan rentang abstraksi dari high-level sampai byte/bit, Assembly, serta hardware-description backend.

> [!WARNING] Tidak ada compiler atau runtime yang disediakan oleh arsip dokumentasi ini. Kode `.un` bersifat contoh/konseptual sampai implementasi dan conformance test tersedia.

## Navigation

### 00–04 · Foundation
- [`00-project/`](00-project/) — principles, status, versioning, glossary.
- [`01-introduction/`](01-introduction/) — language overview and philosophy.
- [`02-getting-started/`](02-getting-started/) — project layout, CLI proposal, Hello World.
- [`03-language/`](03-language/) — syntax, grammar, types of statements, functions, operators, errors, async.
- [`04-multilingual/`](04-multilingual/) — aliases, hybrid style, conflict rules.

### 05–09 · Language and engine
- [`05-abstraction-levels/`](05-abstraction-levels/) — AUTO, HIGH, MID, LOW_MID, LOW, EXTREME_LOW, BYTE_BIT, ASM, HARDWARE.
- [`06-types/`](06-types/) — primitive/composite types and conversions.
- [`07-memory/`](07-memory/) — memory model, ownership, buffers, unsafe boundary.
- [`08-runtime/`](08-runtime/) — runtime lifecycle, events, scheduling.
- [`09-compiler/`](09-compiler/) — architecture, IR, backends, optimization.

### 10–18 · APIs and engineering
- [`10-platform-apis/`](10-platform-apis/) — files, networking, DB, processes.
- [`11-standard-library/`](11-standard-library/) — standard library API proposal.
- [`12-performance/`](12-performance/) — measurements, profiling, backpressure, explicit-performance profile.
- [`13-interoperability/`](13-interoperability/) — C/C++, Rust, JS/Node, FFI.
- [`14-security/`](14-security/) — memory safety, secrets, dependencies.
- [`15-guides/`](15-guides/) — backend, library, plugins, WhatsApp.
- [`16-reference/`](16-reference/) — keyword, diagnostics, ABI and targets.
- [`17-testing/`](17-testing/) — conformance and testing strategy.
- [`18-hardware/`](18-hardware/) — HDL boundary, simulation, synthesis.

### 19+ · APIs, recipes, operations, and language specification
- [`19-web-apis/`](19-web-apis/overview.md) — HTTP client/server, REST, JSON, auth, OAuth/OIDC, CORS/CSRF, GraphQL, WebSocket/SSE, OpenAPI, security, tests.
- [`19-web-apis/extended/`](19-web-apis/extended/index.md) — expanded HTTP request/response reference and practical examples.
- [`20-web-platform/`](20-web-platform/browser-apis.md) — browser/host APIs, DOM/events, clipboard/geolocation, storage and service workers.
- [`21-api-recipes/`](21-api-recipes/index.md) — weather, geocoding/maps, search, webhook, aggregation, safe URL fetch, provider adapters.
- [`server-apis/`](server-apis/index.md) — REST server architecture, routes, services, auth, transactions, graceful shutdown.
- [`deployment-observability/`](deployment-observability/index.md) — deployment, probes, telemetry, load tests, incident response.
- [`22-project-recipes/`](22-project-recipes/index.md) — CLI, fetcher, server, worker, stream, WhatsApp adapter, binary parser, WASM.
- [`23-language-specification/`](23-language-specification/index.md) — canonical AST, semantics, alias registry, ABI, error and concurrency rules.
- [`24-complete-examples/`](24-complete-examples/index.md) — end-to-end architecture examples.
- [`25-glossary/`](25-glossary/index.md) — terminology.
- [`26-checklists/`](26-checklists/) — release and code review checklists.
- [`27-api-reference/`](27-api-reference/index.md) — namespace catalog.
- [`28-compatibility-and-migration/`](28-compatibility-and-migration/index.md) — editions, deprecation and migration policy.
- [`29-cheat-sheets/`](29-cheat-sheets/http-api-cheatsheet.md) — compact API and HTTP reference cards.

## Extra API references

- [Web API overview](19-web-apis/overview.md)
- [Extended HTTP/API reference](19-web-apis/extended/index.md)
- [API server index](server-apis/index.md)
- [API recipes](21-api-recipes/index.md)
- [End-to-end API example](19-web-apis/end-to-end-example.md)
- [API reference namespaces](27-api-reference/index.md)

## Examples

- [`examples/01-hello/`](../examples/01-hello/)
- [`examples/02-multilingual/`](../examples/02-multilingual/)
- [`examples/03-performance/`](../examples/03-performance/)
- [`examples/04-whatsapp/`](../examples/04-whatsapp/)
- [`examples/05-web-apis/`](../examples/05-web-apis/)

## Rekomendasi membaca

- Pemula: Introduction → hello-world → core syntax → abstraction levels.
- API developer: `19-web-apis/overview.md` → extended HTTP/API reference → security → testing → production checklist.
- Performance: explicit profile → profiling → bounded queues → benchmark worksheet.
- Language implementation: grammar → canonical AST → evaluation order → IR → backend contracts → conformance.
- Low-level: types → memory model → byte/bit → ASM target → hardware boundary.


## 🦄 Aturan dari pencipta

- [Pusat aturan UNICORN Ω](30-unicorn-omega/README.md)
- [Pola logika yang sudah diajarkan](30-unicorn-omega/creator-taught-rules.md)
- [Empat ekstensi](30-unicorn-omega/extensions.md)
- [Registry library](30-unicorn-omega/library-registry.md)
- [Pertanyaan terbuka](30-unicorn-omega/open-questions.md)

Dokumentasi lama tetap berstatus proposal sampai disahkan pencipta.

- [Folder library](../libraries/README.md) — registry menunggu nama/API yang diajarkan pencipta.
