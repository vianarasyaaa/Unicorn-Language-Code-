# Hardware boundary: software vs HDL

Hardware design is not simply a lower optimization setting for ordinary software. A CPU program describes operations executed by an existing processor; HDL describes digital circuits, registers, clocks, and signal relationships that a simulator or synthesis tool interprets.

A UNICORN hardware mode would require a separate HDL-oriented subset or a generator for Verilog/SystemVerilog/VHDL. It must define combinational versus sequential semantics, clock domains, reset behavior, bit widths, timing constraints, simulation behavior, synthesis restrictions, and verification methodology.

Do not promise transistor-level control through normal `layar::cetak` or Assembly syntax. Hardware implementation depends on synthesis, placement/routing, device libraries, and physical design tools.
