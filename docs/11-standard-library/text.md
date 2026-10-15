# `text` module

**Scope:** UTF-8 strings, Unicode operations, parsing, formatting, byte conversion, and normalization.

## Proposed surface
The exact API names and type signatures remain to be standardized. APIs should fit the canonical operation model and expose equivalent Indonesian/English aliases only when useful.

## Design concerns
Character count differs from byte count; define normalization and invalid UTF-8 policy.

## Required documentation for each function
- Signature and type constraints.
- Ownership and lifetime.
- Blocking/async behavior.
- Error conditions.
- Allocation behavior.
- Thread-safety and reentrancy.
- Platform availability.
- Complexity/performance notes when meaningful.
- Valid and invalid examples.
