# API Reference — Proposed Namespaces

Referensi ringkas ini adalah katalog proposal, bukan bukti bahwa fungsi tersedia.

| Namespace | Domain | Page |
|---|---|---|
| `core::` | Nilai, print, lifecycle | [Core](../11-standard-library/core.md) |
| `memory::` / `memori::` | Alokasi, buffer, ownership | [Memory](../11-standard-library/memory.md) |
| `text::` / `teks::` | UTF-8 dan string | [Text](../11-standard-library/text.md) |
| `http::` | HTTP request/client | [Web API index](../19-web-apis/extended/index.md) |
| `web::` | HTTP server/routing | [API server](../server-apis/index.md) |
| `database::` | Storage/transaction | [Database](../10-platform-apis/database.md) |
| `async::` / `task::` | Tasks/scheduler | [Async](../11-standard-library/async.md) |
| `crypto::` | Cryptographic primitives / wrappers | [Crypto](../11-standard-library/crypto.md) |
| `system::` / `sistem::` | OS handles, process, I/O | [Filesystem & I/O](../10-platform-apis/filesystem-and-io.md) |
| `hardware::` / `mesin::` | Backend-specific machine/HDL | [Hardware boundary](../18-hardware/hdl-boundary.md) |

Each public symbol needs a normative signature, error set, memory/ownership contract, thread-safety contract, and availability target before release.
