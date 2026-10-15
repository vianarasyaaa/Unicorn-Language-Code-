# Checklist Production API

## Request lifecycle
- [ ] Timeout koneksi dan total deadline ditetapkan.
- [ ] Maksimum body, redirect, dan concurrency ditetapkan.
- [ ] HTTP status, content type, dan schema diperiksa.
- [ ] Cancellation dan cleanup berfungsi.
- [ ] Pagination dibatasi.

## Security
- [ ] TLS verification aktif.
- [ ] Token dipasok dari secret store/env; tidak commit.
- [ ] AuthN dan authZ dibedakan.
- [ ] CORS bukan satu-satunya kontrol keamanan.
- [ ] SSRF, injection, path traversal, dan mass assignment ditinjau.
- [ ] Logs meredaksi secret dan data pribadi.

## Reliability
- [ ] Retry hanya untuk operasi yang aman dan status yang dipilih.
- [ ] Exponential backoff, jitter, dan retry cap ada.
- [ ] 429/Retry-After ditangani.
- [ ] Queue/backpressure dan circuit breaker (jika perlu) diuji.
- [ ] Shutdown graceful menutup koneksi dan queue.

## Performance
- [ ] Benchmark representatif tersedia.
- [ ] p50/p95/p99, throughput, RAM, CPU direkam.
- [ ] Pooling dan cache dievaluasi berdasarkan profiling.
- [ ] Beban tidak melewati terms/rate limit provider.

## Operations
- [ ] Request IDs, metrics, traces, dashboards, alerts.
- [ ] API versioning/deprecation policy.
- [ ] Runbook untuk credential expiry, provider outage, dan quota.
- [ ] Backups/retention sesuai regulasi dan kebutuhan.
