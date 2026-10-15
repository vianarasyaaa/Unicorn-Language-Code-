# Cryptography and secrets

Use well-reviewed cryptographic libraries for hashes, signatures, AEAD, key derivation, and random numbers. Do not invent algorithms for production security.

The standard library should define secure random sources, key lifetimes, zeroization limitations, constant-time guarantees where relevant, and error behavior. Secrets must not be written to logs, source control, command history, or crash dumps without deliberate handling.
