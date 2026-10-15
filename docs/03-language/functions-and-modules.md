# Functions and modules

Functions define reusable logic and explicit contracts. Each function specification should include parameter types, result type, effects, error results, ownership/borrowing, and calling convention when relevant.

```unicorn
fungsi::buat, :"tambah"
    parameter::terima, :kiri:, :i64:
    parameter::terima, :kanan:, :i64:
    nilai::tambah, :kiri:, :kanan:, :hasil:
    kembalikan::nilai, :hasil:
:selesai
```

Module rules must define imports, exports, visibility, cyclic dependencies, symbol mangling, build order, and version compatibility. Cross-language calls require a declared ABI and FFI contract.
