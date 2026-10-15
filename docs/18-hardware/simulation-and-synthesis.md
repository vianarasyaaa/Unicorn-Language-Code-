# Simulation and synthesis workflow

A future hardware backend workflow would generally include:
1. Parse and type-check the hardware subset.
2. Elaborate parameters and modules.
3. Generate HDL or an intermediate circuit representation.
4. Run lint and simulation tests.
5. Check assertions and protocol properties.
6. Run synthesis with a target device/toolchain.
7. Inspect timing/resource reports.
8. Run place-and-route if required.
9. Validate on simulation or physical hardware.

The exact tools and output formats must be specified. Hardware testbenches and clocked circuits are separate from ordinary software unit tests.
