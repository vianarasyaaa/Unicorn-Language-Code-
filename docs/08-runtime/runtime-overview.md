# Runtime overview

The runtime is the component that implements operations beyond pure compiler translation: memory services, standard I/O, scheduling, event queues, library loading, error reporting, and platform bindings.

A runtime specification should define initialization, shutdown, panic behavior, thread model, task scheduler, resource cleanup, environment access, process handles, timers, and signal handling. If a feature is compile-time only, document that instead.

The runtime must not make a source operation “work” solely because a keyword exists; every built-in needs a registered implementation and tests.
