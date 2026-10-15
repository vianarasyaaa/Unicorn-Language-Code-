# C and C++ interoperability

A C ABI is usually the simplest stable interface boundary. C++ APIs may require extern-C wrappers because templates, exceptions, name mangling, and object layout are compiler-specific.

Define symbol visibility, calling convention, struct layout, string ownership, exceptions crossing the boundary, and allocator compatibility. Do not allocate in one runtime and free in another unless the contract explicitly requires that allocator pair.
