# Compiler architecture proposal

```text
Source (.un)
   ↓
Lexer / source-profile resolver
   ↓
Parser
   ↓
AST
   ↓
Alias canonicalization + name resolution
   ↓
Type and effect checking
   ↓
Safety / ownership analysis
   ↓
UNICORN IR
   ↓
Optimization passes
   ↓
Target backend
   ├─ Interpreter / VM (prototype option)
   ├─ WebAssembly (when implemented)
   ├─ Native target (when implemented)
   ├─ Assembly emission (target-specific)
   └─ HDL generator (separate hardware subset)
```

## Required compiler properties
- Stable and machine-readable diagnostics.
- Source locations preserved through transformations.
- Deterministic alias resolution.
- Type and ownership checks before unsafe backend lowering.
- Optimization passes validated against semantics.
- Target capability checks and clear unsupported-feature errors.
- Reproducible builds where toolchain inputs are pinned.

This is an architecture proposal, not an existing compiler implementation.
