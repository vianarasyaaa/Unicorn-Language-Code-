# Observability untuk API

## Log, metric, trace

- **Logs:** event dan konteks diskrit dengan redaction.
- **Metrics:** request count, error count, latency histogram, in-flight requests, pool saturation, queue depth, retries.
- **Traces:** hubungan antar request dan dependency.

## Metrik API minimal

`http_requests_total`, `http_request_duration_seconds`, `http_in_flight`, `http_client_retries_total`, `http_response_bytes`, `queue_depth`, `dependency_failures_total` adalah contoh nama konseptual; standar nama final bergantung sistem monitoring.

## Rancangan UNICORN

```unicorn
telemetry::counter, :"api_requests_total", :counter:
telemetry::histogram, :"api_latency_ms", :latency:
telemetry::trace_span, :"provider.posts.get", :span:
trace::attribute, :span:, :"http.method", :"GET"
trace::attribute, :span:, :"http.status_code", :status:
trace::finish, :span:
```

Jangan gunakan token, email penuh, nomor telepon, pesan pribadi, atau user ID ber-cardinality tinggi sebagai label metric.
