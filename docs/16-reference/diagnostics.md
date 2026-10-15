# Diagnostic code policy

Use stable machine-readable codes with localized human-readable messages. Example proposed codes:
- `U001` parse error.
- `U002` unknown identifier.
- `U003` ambiguous alias.
- `U010` type mismatch.
- `U020` ownership/lifetime violation.
- `U030` unsupported target operation.
- `U040` alignment or bounds violation.
- `U050` FFI contract mismatch.
- `U060` unsupported language-level feature.

These codes are placeholders. The official registry must define severity, source spans, explanation, fix suggestions, and stability guarantees.
