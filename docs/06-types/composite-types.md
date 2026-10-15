# Composite types

Proposed composite types include arrays, slices, vectors, tuples, records/structs, enums, tagged unions, maps, sets, option/result types, and generic containers.

The specification must define field layout, visibility, alignment, padding, initialization, move/copy behavior, equality, serialization rules, and whether a type has a stable ABI. Do not assume that an in-memory struct layout is automatically safe to serialize or send across a network.
