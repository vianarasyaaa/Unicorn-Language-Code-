# Why design UNICORN Ω this way?

The language is designed around a spectrum of control. A developer making a simple utility should not need to write an allocator, parser, scheduler, and system-call wrapper. A developer building a latency-sensitive service may need to inspect allocation behavior, tune queues, choose buffer ownership, and isolate platform-specific code.

The proposed solution is to provide a small, consistent surface syntax with explicit abstraction boundaries. Higher-level APIs are wrappers over lower-level contracts; they are not magic. The compiler/runtime must implement those contracts and document which costs and guarantees they carry.

## Non-goals for the first prototype
- Claiming all features from Rust, JavaScript, C++, Zig, Python, Lua, Assembly, or WebAssembly are automatically compatible.
- Exposing real CPU registers through ordinary portable source code.
- Guaranteeing that longer source code is faster.
- Treating hardware synthesis as the same thing as compiling a desktop application.
- Promising a working WhatsApp or AI integration before bindings exist.
