# Serialization dan ABI

Bedakan serialization wire format dari in-memory struct layout. Dokumentasikan endianness, alignment, padding, versioning, string encoding, nullable fields, calling convention, symbol mangling, and error/ownership crossing FFI.

Jangan serialize raw struct memory sebagai protokol lintas mesin kecuali format itu sengaja distandardisasi.
