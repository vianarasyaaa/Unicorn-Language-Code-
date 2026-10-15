# Normative Keyword Registry

Sebelum grammar stabil, keyword disimpan pada satu registry: canonical operation ID, alias EN, alias ID, minimum feature version, type signature, error set, and semantics. Alias tidak boleh memiliki semantik berbeda secara tidak sengaja.

Contoh baris registry (konseptual):

| Canonical ID | ID alias | EN alias | Hasil | Status |
|---|---|---|---|---|
| `core.print` | `layar::cetak` | `screen::print` | I/O result | Proposed |
| `value.set` | `nilai::tetapkan` | `value::set` | Unit/result | Proposed |
| `memory.allocate` | `memori::alokasi` | `memory::allocate` | Result<OwnedBuffer, Error> | Proposed |

Nama di tabel adalah proposal. Tim bahasa harus memutuskan escaping, grammar formal, duplicate alias, keyword versioning, dan backward compatibility.
