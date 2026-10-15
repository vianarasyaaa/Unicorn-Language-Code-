# Capability matrix (proposed)

| Capability | AUTO/HIGH | MID | LOW_MID | LOW/EXTREME_LOW | BYTE_BIT | ASM | HARDWARE |
|---|---|---|---|---|---|---|---|
| Inferred defaults | High | Optional | Limited | Minimal | Minimal | No | No |
| Standard-library abstractions | Primary | Primary | Selective | Selective/manual | Rare | No | Separate HDL libraries |
| Explicit error paths | Optional/configurable | Recommended | Explicit | Explicit | Explicit | Backend-dependent | Assertion/protocol-specific |
| Manual allocation | Hidden/optional | Optional | Common | Central | Common | ABI-sensitive | Not software heap semantics |
| Exact byte layout | Library-based | Optional | Available | Available | Central | Available via instructions | Bit-width/signal-based |
| CPU register/instruction control | No | No | Usually no | Through intrinsics/APIs | Not inherently | Central | Not equivalent |
| Synthesis to physical hardware | No | No | No | No | No | No | Only if HDL backend/toolchain exists |

This is a design direction, not a feature checklist for an existing compiler.
