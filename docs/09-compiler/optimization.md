# Optimization strategy

Potential compiler optimizations include constant folding, dead-code elimination, inlining, common-subexpression elimination, loop optimizations, escape analysis, allocation elimination, vectorization, link-time optimization, and profile-guided optimization.

Optimization must be correctness-preserving. The compiler should support clear optimization profiles only when they have defined behavior, for example:
- `DEBUG`: useful diagnostics and limited optimization.
- `RELEASE`: standard optimization.
- `SIZE`: prioritize binary size.
- `LATENCY`: optimize measured request/operation latency where supported.
- `THROUGHPUT`: optimize sustained throughput where supported.
- `CUSTOM`: user-selected passes and target features.

These profile names are proposed. A high-level program may outperform manual code because a compiler can see broader context; low-level code is not inherently faster.
