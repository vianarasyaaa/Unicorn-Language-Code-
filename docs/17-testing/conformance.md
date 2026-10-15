# Conformance testing plan

Conformance tests should define expected parser, type checker, runtime, and backend behavior independent of implementation internals.

Test groups:
1. Lexical and grammar tests.
2. Alias resolution tests: Indonesian, English, hybrid.
3. Type and conversion tests.
4. Scope and label resolution tests.
5. Ownership and lifetime safety tests.
6. Error propagation and cleanup tests.
7. Buffer bounds and integer overflow tests.
8. Async ordering, cancellation, and backpressure tests.
9. FFI ABI and resource ownership tests.
10. Interpreter/backend differential tests.
11. Reproducible build tests.
12. Performance regression tests with non-flaky tolerances.
13. Security fuzz tests.

Each test should state expected behavior, not merely that the compiler does not crash.
