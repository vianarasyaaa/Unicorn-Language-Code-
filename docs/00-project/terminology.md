# Terminology

- **Surface syntax:** the spellings a programmer types, such as `layar::cetak` or `screen::print`.
- **Canonical operation:** the internal meaning after alias resolution.
- **Abstraction level:** how many implementation details are handled by the language/runtime versus the programmer.
- **Label/reference:** syntax such as `:buffer:` that names a value or resource according to the language's scope rules.
- **Compiler:** translates source to an executable format or another target.
- **Runtime:** provides execution services such as allocation, I/O, scheduling, and managed resources.
- **IR:** intermediate representation between parsing/semantic analysis and backend code generation.
- **ABI:** binary contract for calling functions, passing values, and representing symbols across compiled modules.
- **FFI:** foreign-function interface for calling code from another language.
- **Unsafe operation:** operation whose correctness depends on programmer-maintained invariants.
- **Native backend:** target-specific compiler backend for an operating system and CPU architecture.
- **HDL:** hardware description language used to describe digital hardware for simulation or synthesis.
- **Smoothness:** an application-specific quality such as stable frame time, low jitter, or responsive message handling; define the metric before optimizing.
- **Efficiency:** measured resource use or throughput/latency, not code length.
