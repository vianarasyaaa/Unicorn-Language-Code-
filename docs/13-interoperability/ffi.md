# Foreign-function interface (FFI)

FFI connects UNICORN to other runtimes or languages. A safe FFI wrapper must declare ABI, argument/return layout, calling convention, string encoding, ownership, error translation, thread-safety, and library lifetime.

Raw pointers and foreign objects should be isolated behind minimal unsafe wrappers. Include tests for nulls, alignment, ownership transfer, callback lifetime, and failures. FFI cannot safely assume that a Rust, C++, JavaScript, Python, or Lua value has the same layout as a UNICORN value.
