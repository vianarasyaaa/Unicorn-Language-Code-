# Database API proposal

Database adapters may support SQL databases, key-value stores, and document databases through separate drivers.

The API must specify transactions, isolation level, prepared statements, connection pooling, parameter binding, cancellation, timeouts, migrations, serialization, and errors. Never interpolate untrusted values into SQL strings; use parameterized queries.

For high-volume conversation logs, define retention, indexes, pagination, deduplication, backpressure, backup/restore, encryption, and access control. “500,000 conversations” is a capacity target, not a promise that any schema or machine will meet it without load testing.
