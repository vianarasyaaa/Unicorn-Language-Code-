# Health, Readiness, dan Liveness

- **Liveness:** proses masih dapat berjalan; jangan membuat restart storm saat dependency luar sedang outage.
- **Readiness:** instance siap menerima traffic berdasarkan kondisi lokal dan dependencies wajib.
- **Startup probe:** memberi waktu startup yang wajar.

Endpoint health tidak boleh membocorkan versi sensitif, secret, atau konfigurasi penuh. Jangan menguji dependency mahal pada setiap liveness probe.
