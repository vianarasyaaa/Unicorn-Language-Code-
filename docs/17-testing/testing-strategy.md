# Testing strategy

Use unit tests for small semantics, integration tests for module boundaries, end-to-end tests for whole programs, property-based tests for invariants, fuzz tests for parsers/decoders, and differential tests across backends.

For performance regression tests, keep hardware and workload stable where possible, report variance, and avoid brittle thresholds on shared CI runners. Correctness and security tests must not be disabled to gain a benchmark improvement.
