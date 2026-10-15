# ABI and target reference

Each native target must identify architecture, operating system, object format, pointer width, endianness, calling convention, stack alignment, symbol naming, unwind behavior, and supported instruction extensions.

Never assume that x86-64 Linux, x86-64 Windows, ARM64 macOS, and WebAssembly share one ABI. Inline assembly should be unavailable unless the backend can validate its constraints.
