# Standard library map

The standard library is a proposed collection of modules layered over language primitives and runtime services.

| Module | Scope |
|---|---|
| `core` | Result, option, basic traits/interfaces, panic/error primitives |
| `text` | String, UTF-8, Unicode, parsing/formatting |
| `memory` | Owned buffers, allocation APIs, slices |
| `collections` | Array, vector, map, set, queue, deque |
| `math` | Integer and floating-point math |
| `io` | Standard streams and byte streams |
| `filesystem` | Paths, files, directories |
| `network` | Sockets, HTTP, TLS wrappers |
| `async` | Tasks, channels, synchronization |
| `crypto` | Cryptographic primitives through vetted implementations |
| `database` | Driver abstractions and transaction helpers |
| `process` | Environment, processes, exit status |
| `native` | FFI and target-specific APIs |
| `wasm` | WebAssembly / WASI bindings |

Each API must specify stability, performance expectations, effects, errors, portability, and safe-use rules. Cryptographic implementations should prefer audited libraries instead of handwritten primitives.
