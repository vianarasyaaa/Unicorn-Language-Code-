# Guide proposal: build a backend

A backend implementer needs target triple handling, data layout, ABI rules, instruction selection, register allocation or a backend framework, object emission, relocations, debug info, and linker integration.

Start with a small IR subset and a reference interpreter. Add differential tests comparing interpreter and backend results. Reject unsupported operations and targets clearly. Validate generated binaries with external toolchains and sanitizers where available.
