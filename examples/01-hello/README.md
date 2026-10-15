# Hello World across UNICORN Ω abstraction levels

The `.un` files here express the same intent—print a greeting—at increasing levels of explicit control.

| File | Mode | What becomes explicit |
|---|---|---|
| `01-auto.un` | AUTO | Minimal intent |
| `02-high.un` | HIGH | Application-level output |
| `03-mid.un` | MID | Function/control structure |
| `04-low-mid.un` | LOW_MID | Intermediate data handling |
| `05-low.un` | LOW | Memory and output policy |
| `06-extreme-low.un` | EXTREME_LOW | Detailed operation sequence |
| `07-byte-bit.un` | BYTE_BIT | Data representation |
| `08-asm.un` | ASM | Target-specific assembly boundary |

All `.un` files are **conceptual design examples**. There is no compiler in this archive that can execute them. The number of lines illustrates a possible style, not a benchmark or a guarantee that the lower-level variant is faster.
