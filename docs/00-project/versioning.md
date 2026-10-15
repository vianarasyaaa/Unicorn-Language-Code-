# Versioning policy proposal

Use semantic versioning for a future stable language specification, with clear pre-1.0 rules.

- `0.x` drafts may change grammar and semantics.
- A language specification version should be distinct from compiler and runtime versions.
- Standard-library modules should declare stability level: experimental, preview, stable, deprecated.
- A syntax alias can be added without changing canonical semantics; removing an alias may still be a source-compatibility break.
- Compiler releases should report language version, target triple, backend version, and optimization settings.
- A stable release must pass conformance tests for grammar, types, alias resolution, memory semantics, and supported targets.
