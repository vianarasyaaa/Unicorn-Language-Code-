# Memory safety

Security-critical guarantees must be precise and testable. Safe code should prevent out-of-bounds access, use-after-free, double-free, invalid type punning, data races under the defined memory model, and uncontrolled resource use.

Unsafe primitives should be explicit and documented. Compiler checks, fuzzing, sanitizers, static analysis, and code review should be part of the implementation plan. A “safe” label is not proof; the language needs formalized invariants and conformance tests.
