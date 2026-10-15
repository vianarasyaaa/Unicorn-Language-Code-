# Design principles

1. **One semantic core, many surface forms.** Indonesian and English aliases should map to a shared canonical representation.
2. **Abstraction is selectable.** Programmers can use built-ins for convenience or spell out lower-level mechanics.
3. **Explicit control is not a speed guarantee.** A detailed implementation can enable tuning, but must be benchmarked.
4. **Safety by default.** Checked memory and typed errors are the default; unsafe capabilities require explicit markers and contracts.
5. **Portability is declared.** Native instructions, ABI assumptions, and hardware targets are explicitly target-specific.
6. **Interop through contracts.** Foreign functions must declare ABI, ownership, string encoding, and error translation.
7. **Compiler and runtime responsibilities are distinct.** Syntax sugar does not implement itself; runtime services need defined APIs.
8. **Diagnostics are part of the language.** Errors should include source locations, probable causes, and remediation.
9. **Reproducible performance.** Optimization claims need reproducible benchmarks, settings, and correctness tests.
10. **No accidental hardware claims.** CPU assembly and HDL describe different targets.
