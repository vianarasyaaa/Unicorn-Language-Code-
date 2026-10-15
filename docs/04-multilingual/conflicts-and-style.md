# Alias collisions and style

A language that supports multiple natural-language aliases needs a collision policy.

Recommended rules:
- Every built-in operation has one stable canonical identifier.
- Alias tables are versioned and tested.
- Local variables should not shadow reserved syntax in ways that make code ambiguous.
- A project may enforce one preferred spelling through a formatter or linter even when hybrid mode is allowed.
- Diagnostic messages may be localized, but source symbols and machine-readable error codes should remain stable.
- Libraries should document their preferred naming style and provide canonical API IDs.

The compiler must never rely on fuzzy translation or an AI guess to decide the meaning of source code.
