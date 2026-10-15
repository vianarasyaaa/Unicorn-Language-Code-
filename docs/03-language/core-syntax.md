> [!WARNING]
> **Proposal awal, bukan sumber sintaks resmi.** Halaman ini berasal dari materi rancangan terdahulu dan berisi pola yang belum disahkan pencipta. Untuk aturan point dan logika yang telah diajarkan, gunakan [aturan pencipta UNICORN Ω](../30-unicorn-omega/creator-taught-rules.md). Jangan menggunakan contoh di bawah untuk menambahkan sintaks baru tanpa persetujuan pencipta.

# Core syntax draft

Preferred call form:

```unicorn
namespace::operation, argument_1, argument_2, :result:
```

Examples:
```unicorn
nilai::tetapkan, 100, :angka:
nilai::ambil, :angka:
layar::cetak, :"Halo!"
```

## Labels
A label like `:angka:` is proposed as a symbolic reference to a value/resource in scope. It is not inherently a memory address, numeric ID, or string. The type and lifetime of the referenced value are determined by declarations and semantic rules.

## Blocks and program termination
- `:selesai` closes an open block in the Indonesian profile.
- `:end` is a proposed English alias.
- `:akhir` ends a program in Indonesian examples.
- `:finish` is a proposed English alias.

The parser must reject mismatched, missing, or extra terminators.

## Calls and return values
Calls may use a final result label when an operation returns a value. Operations that return no value should not fabricate one. Each API must document parameter count, type constraints, effects, ownership, and errors.

This syntax is a proposal and needs a formal grammar plus conformance tests before it can be treated as a standard.
