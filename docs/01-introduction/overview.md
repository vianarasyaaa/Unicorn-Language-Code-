# Overview

UNICORN Ω is proposed as a multi-level programming language. It aims to let a programmer move between intent-oriented code and detailed implementation control without changing the language's central model.

## What it aims to combine
- Modern high-level syntax and library abstractions.
- Explicit low-level data, memory, and FFI controls.
- Concurrency and event-driven application patterns.
- Native backend / assembly integration where supported.
- Portable targets such as WebAssembly where implemented.
- Optional hardware-description output through a separate HDL-oriented subset.
- Indonesian, English, and hybrid keyword spellings.

These are design goals, not a statement that every backend or feature already exists.

## Example: same intent at different levels

High-level concept:
```unicorn
#level "HIGH"
layar::cetak, :"Halo, dunia!"
:akhir
```

More explicit concept:
```unicorn
#level "LOW"
teks::enkode, :"Halo, dunia!", :"UTF8", :data:
buffer::validasi, :data:
sistem::tulis, :stdout:, :data:, :jumlah:
:akhir
```

The low-level example assumes runtime-defined `stdout` and write contracts. It is not executable until those APIs are specified and implemented.
