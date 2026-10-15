# Resource lifecycle

Resources include memory buffers, file handles, sockets, database connections, tasks, locks, and foreign objects. Each resource needs an explicit lifecycle contract.

Recommended lifecycle states: created → initialized → in use → closing → released. Illegal transitions should produce diagnosable errors in safe modes.

Cleanup rules must cover normal returns, early returns, errors, cancellation, task panic, and process shutdown. Low-level code must not free a resource while another task can still access it.
