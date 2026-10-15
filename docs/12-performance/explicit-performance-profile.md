# Explicit Performance Profile — “Lebih Banyak Kendali”

Nama profil yang diusulkan: `UNICORN_EXPLICIT_PERFORMANCE`. Profil ini memprioritaskan kontrol atas alokasi, ukuran buffer, konkurensi, backpressure, batching, error, dan lifecycle. Ia bukan janji performa otomatis.

## Tujuan dan non-tujuan

**Tujuan:** perilaku lebih dapat diprediksi, bottleneck bisa diamati, resource terbatas, latency tail dapat dikendalikan, dan jalur hot-path mudah diprofilkan.

**Bukan tujuan:** menganggap jumlah baris kode sebagai ukuran performa, menghapus semua abstraction, mematikan safety checks, atau menggunakan Assembly tanpa bukti.

## Profil contoh

```unicorn
#profile "UNICORN_EXPLICIT_PERFORMANCE"

runtime::konfigurasi:
    memori::allocator, :"POOL_FOR_SMALL_OBJECTS"
    memori::max_heap_bytes, 268435456
    runtime::worker_threads, 4
    runtime::event_loop, 1
    queue::capacity, 2048
    queue::on_full, :"BACKPRESSURE"
    io::buffer_size, 65536
    network::connection_pool, 32
    network::request_timeout_ms, 5000
    network::max_concurrent_requests, 16
    logging::mode, :"STRUCTURED_ASYNC"
    logging::redaction, benar
:selesai
```

Semua API konfigurasi di atas konseptual. Nilai contoh harus ditentukan ulang dari resource server, pola kerja, dan hasil benchmark.

## Apa yang harus diukur

- Latency p50, p90, p95, p99 dan maksimum.
- Throughput pada beban steady-state dan burst.
- CPU time / request, heap/RSS, allocations/request.
- Jumlah context switches, GC pause jika ada, queue depth, socket pool saturation.
- Error rate dan timeout rate.
- Warm/cold start bila startup penting.

## Workflow yang benar

1. Buat baseline dan workload realistis.
2. Profilkan untuk menemukan hot path.
3. Pilih optimasi kecil dengan hipotesis yang jelas.
4. Jalankan correctness + stress + regression tests.
5. Benchmark dengan warmup, beberapa run, dan variasi beban.
6. Bandingkan p95/p99 dan resource, bukan hanya rata-rata.
7. Simpan config, hardware, OS, compiler version, commit, dan input.

## Kapan kode verbose berguna?

Kode lebih panjang berguna ketika setiap langkah menambah kontrol bermakna: batas ukuran, kebijakan retry, budget waktu, ownership, batch size, cancellation, dan error mapping. Jika panjang kode hanya mengulang apa yang sudah dijamin type checker/runtime, itu bisa menambah maintenance cost tanpa manfaat.

## Guardrail

- Jangan mematikan bounds checking kecuali benar-benar diperlukan dan boundary diuji.
- Jangan menulis Assembly sebelum profiler menunjukkan bottleneck.
- Jangan memilih buffer raksasa hanya agar mengurangi jumlah syscall; memory footprint dan concurrency ikut meningkat.
- Jangan retry lebih agresif saat dependency overload.
- Jangan cache data privat tanpa cache key yang mencakup scope authorization.
