# Multilingual syntax: Indonesian, English, Hybrid

UNICORN Ω proposes multiple surface-language profiles for the same canonical program representation.

## Profiles
```unicorn
#language "ID"
```
```unicorn
#language "EN"
```
```unicorn
#language "HYBRID"
```

## Alias mapping examples
| Canonical operation | Indonesian surface | English surface |
|---|---|---|
| Print | `layar::cetak` | `screen::print` |
| Set value | `nilai::tetapkan` | `value::set` |
| Get value | `nilai::ambil` | `value::get` |
| Conditional | `kondisi::jika` | `condition::if` |
| Loop | `ulang::selama` | `loop::while` |
| Allocate | `memori::alokasi` | `memory::allocate` |
| Free | `memori::bebaskan` | `memory::free` |
| Connect | `whatsapp::hubungkan` | `whatsapp::connect` |
| Reply | `whatsapp::balas` | `whatsapp::reply` |
| End block | `:selesai` | `:end` |
| Finish program | `:akhir` | `:finish` |

## Required resolver behavior
1. Parse source spelling according to enabled profiles.
2. Resolve aliases to a canonical operation ID.
3. Type-check canonical operations, regardless of language spelling.
4. Produce consistent errors, optionally localized according to compiler settings.
5. Reject ambiguous spellings rather than guessing.

Hybrid mode must not allow two aliases to silently mean different operations in the same syntactic position.
