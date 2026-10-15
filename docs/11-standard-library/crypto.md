# `crypto` module

**Scope:** Safe wrappers for cryptographic operations through established implementations.

## Proposed surface
The exact API names and type signatures remain to be standardized. APIs should fit the canonical operation model and expose equivalent Indonesian/English aliases only when useful.

## Design concerns
No unreviewed homemade crypto; secret zeroization and constant-time guarantees need explicit analysis.

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
