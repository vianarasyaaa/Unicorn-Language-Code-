# Ownership and lifetimes

A safe language needs a clear answer to: who owns this allocation, how long can a reference be used, and who releases the resource?

The design may borrow concepts from Rust but must define its own rules. It must specify moves, copies, borrows, mutable aliases, lifetimes across async suspension, object destruction, and FFI ownership transfer.

For each resource API, document:
- Who creates it.
- Who owns it after creation.
- Whether it can be shared or mutated.
- When it becomes invalid.
- How it is released.
- What happens if release fails or is called twice.
