# Canonical AST dan Aliases

Resolver menerjemahkan spelling Indonesia/Inggris/hybrid menjadi canonical token/AST node. Diagnostik mempertahankan source span dan spelling asli supaya error menunjuk kode yang ditulis pengembang.

Persyaratan:
- Mapping versi bisa diuji.
- Konflik alias dianggap error kecuali aturan precedence formal ditetapkan.
- AST tidak tergantung bahasa tampilan.
- Format AST/IR serial tidak menjadi public API tanpa versi.
