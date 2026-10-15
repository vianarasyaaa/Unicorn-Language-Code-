# Plugins and extensions

A plugin system must define package metadata, ABI/API compatibility, loading behavior, permissions, lifecycle hooks, dependency resolution, sandboxing, failure isolation, and update behavior.

Untrusted plugins should not inherit unrestricted file, network, memory, or process capabilities. A plugin signature does not replace sandboxing or code review.
