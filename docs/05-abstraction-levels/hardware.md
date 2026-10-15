# HARDWARE mode

**Focus:** Digital hardware description  
**Control model:** Use a distinct HDL/synthesis backend to describe circuits and sequential logic.  
**Source length:** Source length depends on the circuit and verification requirements.

## Example (illustrative)

```unicorn
#level "HARDWARE"
hdl::module, :"hello_counter"
hdl::clock, :clk:
hdl::register, :counter:, :u8:
hdl::on_rising_edge, :clk:
    counter::next, :counter: + 1
:selesai
hdl::output, :counter:
:akhir
```

## Good fit
FPGA/ASIC design or digital simulation through a supported HDL toolchain.

## Trade-offs
Not a normal software runtime mode. Requires HDL semantics, simulator/synthesis tools, clocks and timing rules.

## Performance and smoothness
This mode exposes certain choices that can affect performance. In an actual implementation, define measurable goals first: throughput, p50/p95/p99 latency, jitter, allocation count, memory footprint, startup time, power use, or code size. Profile on the target platform, add correctness tests, and compare against the higher-level version.

## Required implementation contract
Before this mode is considered implemented, the compiler/runtime must define valid syntax, canonical semantics, type behavior, ownership, error handling, target limitations, diagnostics, and conformance tests. Examples above are design sketches rather than executable code.
