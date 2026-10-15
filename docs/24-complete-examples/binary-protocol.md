# Complete Example: Binary Protocol Parser

Sebelum membaca field, validasi input memiliki header minimum dan ukuran payload berada dalam batas. Gunakan explicit endian conversion, jangan cast arbitrary bytes ke struct tanpa memastikan alignment, layout, and lifetime.

```unicorn
binary::reader, :input:, :reader:
binary::read_bytes, :reader:, 4, :magic:
assert::sama, :magic:, :"UNCR"
binary::read_u16, :reader:, :"LITTLE_ENDIAN", :version:
binary::read_u32, :reader:, :"LITTLE_ENDIAN", :length:
assert::dalam_rentang, :length:, 0, 1048576
binary::read_exact, :reader:, :length:, :payload:
checksum::verify, :payload:, :expected:, :valid:
```

Rancangan parser harus mendefinisikan behavior ketika EOF/truncation/invalid magic/wrong version/checksum mismatch.
