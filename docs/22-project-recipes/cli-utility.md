# Recipe: CLI Utility

Tujuan: CLI kecil dengan argument parsing, exit code, stderr, dan file output yang ditulis secara aman.

```unicorn
#program "REPORT"
cli::argumen, :"--input", :input_path:
cli::argumen, :"--output", :output_path:
filesystem::buka_baca, :input_path:, :input:
parse::report, :input:, :data:
report::validasi, :data:
filesystem::tulis_atomik, :output_path:, :data:
program::keluar, 0
:akhir
```

API `cli::` dan `filesystem::tulis_atomik` adalah rancangan. Implementasi perlu menolak path berbahaya, menutup file, dan menulis ke temp lalu rename jika filesystem mendukung.
