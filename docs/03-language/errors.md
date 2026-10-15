# Errors and failure semantics

Errors should be represented explicitly for operations that may fail. Runtime panics should be reserved for violated invariants or unrecoverable conditions and should not silently leak resources.

Proposed categories:
- Parse errors.
- Name-resolution errors.
- Type errors.
- Compile/backend errors.
- Recoverable runtime errors.
- Resource exhaustion.
- I/O errors.
- Foreign-interface errors.
- Unsafe invariant violations.

Every function should declare whether it returns a result, throws an exception, terminates the process, or invokes an error hook. Cleanup of owned resources must be specified for every exit path.
