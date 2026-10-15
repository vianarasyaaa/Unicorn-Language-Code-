# Abstraction Levels — One Intent, More Control

UNICORN Ω proposes nine different levels of expressing and controlling a computation. Level is not a ranking of code quality, and source-line count is not a performance metric.

## Level profiles

| Mode | Main idea | Programmer explicitly owns | Typical concern |
|---|---|---|---|
| AUTO | Describe outcome | Intent and policy choices | Fast authoring, hidden defaults |
| HIGH | Compose features | Application behavior | Simplicity and maintainability |
| MID | Spell out logic | Functions, validation, error branches | Predictability |
| LOW_MID | Expose resource flow | Buffers, handles, cleanup | I/O and data movement |
| LOW | Expose system contracts | Allocation, bounds, handle/result | Resource control |
| EXTREME_LOW | Show implementation steps | More runtime/ABI boundaries | Auditability and fine tuning |
| BYTE_BIT | Represent exact data | Byte order, bit layout, codec | Binary formats and protocols |
| ASM | Target instruction interface | Architecture-specific assembly contract | Very narrow measured hot paths / ABI |
| HARDWARE | Describe digital design | Signals, clock/reset and hardware behavior | RTL simulation/synthesis |

## Same goal, different contracts

- AUTO can request “fetch and validate post 1” with a feature-level call.
- MID should show timeout, status check, schema and error result.
- LOW should make response limits, buffer lifetime, and transport errors explicit.
- BYTE_BIT should define exact wire bytes.
- ASM concerns a specified architecture's instructions—not a portable general programming layer.
- HARDWARE describes circuits through an HDL subset; ordinary UNICORN memory operations do not become transistor control.

## How to mix levels

Prefer safe module boundaries. Keep most application code HIGH/MID; isolate a LOW parser or native function behind a documented safe API; add ASM only if measurement justifies it. A project can mix modules compiled for different targets only through explicit ABI/FFI contracts.

## Important distinction

“Write more to get more control” is the design intention. “Write more to get more speed” is not guaranteed. Extra code can add branches and allocations; optimized high-level code may outperform manual low-level code. Benchmark the real workload.
