# Performance Review Worksheet

## Hipotesis
Apa yang diperkirakan bottleneck? Contoh: setiap request membuat client baru, JSON decode di hot loop, queue tak terbatas, atau terlalu banyak allocation.

## Baseline
Catat commit, compiler/runtime version, machine/OS, dataset, warm-up, request rate, concurrency, duration, p50/p95/p99, errors, CPU, RSS, allocation count, queue depth.

## Perubahan
Jelaskan satu perubahan; hindari mengubah banyak faktor sekaligus.

## Validasi
- Correctness tests lulus.
- Failure tests lulus.
- Metrik p95/p99 tidak memburuk di luar guardrail.
- RAM/CPU tidak pindah ke masalah yang lebih besar.
- Ada reproduksi dan catatan hasil.
