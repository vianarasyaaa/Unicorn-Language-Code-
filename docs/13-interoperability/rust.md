# Rust interoperability

Rust integration should normally use a declared C ABI or an explicitly supported binding generator. Rust ownership types, traits, enums, and async futures do not automatically map to UNICORN types.

Document unsafe boundaries, lifetime conversion, panic containment, thread-safety (`Send`/`Sync`-like guarantees if applicable), error translation, and allocator ownership.
