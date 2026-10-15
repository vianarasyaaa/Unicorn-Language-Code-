# Intermediate representation and semantic contracts

UNICORN should define a canonical IR so surface-language profiles and abstraction modes can converge before backend code generation.

Candidate IR concepts:
- Constants and typed values.
- Basic blocks and control-flow edges.
- Function calls and returns.
- Memory allocation/load/store.
- Explicit error/result propagation.
- Resource acquisition/release.
- Async/task operations.
- Foreign calls and target intrinsics.

Every operation needs input/output types, side effects, trapping behavior, memory effects, aliasing assumptions, and target restrictions. Optimizers may only transform operations when those contracts prove the transformation preserves program semantics.
