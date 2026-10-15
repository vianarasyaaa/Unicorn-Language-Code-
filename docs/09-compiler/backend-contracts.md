# Backend contracts

A backend must declare target architecture, operating system, object format, ABI, pointer width, endianness, supported IR operations, calling convention, instruction set extensions, and limitations.

Assembly output and inline assembly require explicit constraints for registers, stack alignment, clobbered state, memory effects, exceptions, and unwind behavior. A backend must reject unsupported instructions instead of silently emitting invalid code.

For a hardware backend, define a separate synthesizable subset and output HDL rather than treating circuit descriptions as ordinary software instructions.
