# Keyword and built-in reference (initial inventory)

This is an initial proposal inventory, not a finalized list of reserved words. Names and semantics must be reviewed before implementation.

| Category | Indonesian proposal | English proposal | Contract to define |
|---|---|---|---|
| Output | `layar::cetak` | `screen::print` | output stream, encoding, error behavior |
| Value set | `nilai::tetapkan` | `value::set` | mutability, type inference, scope |
| Value read | `nilai::ambil` | `value::get` | name resolution and result type |
| Condition | `kondisi::jika` | `condition::if` | boolean semantics and scope |
| Loop | `ulang::selama` | `loop::while` | exit conditions and cleanup |
| Function | `fungsi::buat` | `function::create` | signature, return, effects |
| Allocation | `memori::alokasi` | `memory::allocate` | size, alignment, ownership, failure |
| Free | `memori::bebaskan` | `memory::free` | ownership and double-free prevention |
| Encode | `teks::enkode` | `text::encode` | encoding errors and output allocation |
| Connect | `whatsapp::hubungkan` | `whatsapp::connect` | actual binding and authentication contract |
| Reply | `whatsapp::balas` | `whatsapp::reply` | message target, rate limits, errors |

## Required entry template
Each final keyword page should include syntax, canonical ID, arguments, types, return/error type, ownership, effects, platform availability, examples, invalid cases, aliases, and conformance tests.
