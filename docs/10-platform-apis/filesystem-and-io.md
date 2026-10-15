# Filesystem and I/O API proposal

Operations may include open, read, write, write-all, seek, flush, close, stat, create directory, remove, and stream adapters.

Every I/O API must document:
- Whether calls are blocking or asynchronous.
- Ownership of handles and buffers.
- Partial-read/write behavior.
- EOF semantics.
- Encoding rules.
- Permission and path behavior.
- Cancellation and timeout behavior.
- Error types.

A method called `write_all` must either write the requested bytes or return a clear error; it cannot assume one OS write completes all bytes.
