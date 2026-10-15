# Caching, ETag, dan Conditional Requests

Caching dapat menurunkan latency dan traffic, tetapi hanya aman bila cache key, freshness, otorisasi, dan invalidation ditentukan dengan benar.

Istilah: `Cache-Control`, `ETag`, `If-None-Match`, `Last-Modified`, `If-Modified-Since`, TTL, stale data, cache stampede.

## Rancangan UNICORN

```unicorn
cache::buat, :"api_cache", :cache:
cache::konfigurasi, :cache:
    cache::kapasitas, 10000
    cache::ttl_ms, 30000
    cache::key, :"method+normalized_url+auth_scope"
:selesai

cache::ambil, :cache:, :cache_key:, :entry:
jika::hit, :entry:
    hasil::kembalikan, :entry:
jika_tidak
    http::kirim, :req:, :res:
    cache::simpan_jika_diizinkan, :cache:, :cache_key:, :res:
:selesai
```

Jangan pernah share cached private response antar pengguna hanya berdasarkan URL. Jangan cache response yang berisi rahasia kecuali kebijakannya sengaja dan aman.
