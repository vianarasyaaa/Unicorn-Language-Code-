# Load Testing

Hanya uji terhadap service yang kamu miliki atau yang memberi izin eksplisit. Jangan membanjiri API publik/produksi untuk eksperimen.

Rencana test: baseline, ramp-up bertahap, steady-state, burst, dependency slowdown, rate limit, error injection, graceful shutdown. Rekam request rate, error rate, p50/p95/p99 latency, CPU, memory, queue depth, connection pool, dan warm-up state.

Jangan mereduksi hasil ke “request per second” saja. Throughput tinggi dengan p99/timeout buruk bukan layanan yang smooth.
