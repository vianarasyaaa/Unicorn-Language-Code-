# Conformance Levels

Usulan kelas kesesuaian compiler/runtime:

- `CORE`: lexer/parser/type/semantics minimum.
- `SAFE`: memory-safe APIs dan error model.
- `ASYNC`: task/event runtime.
- `NATIVE`: backend native untuk target bernama.
- `WASM`: backend WASM/WASI target tertentu.
- `ASM-<target>`: integrasi assembly architecture-specific.
- `HDL-<toolchain>`: subset hardware dengan simulator/synthesis toolchain.

Label hanya boleh diberikan setelah suite conformance versi tertentu lolos. Nama target dan feature flags wajib dicantumkan.
