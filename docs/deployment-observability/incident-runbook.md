# Incident Runbook

Setiap runbook menyertakan: gejala, dampak, dashboard, langkah diagnosis, langkah mitigasi, rollback, verifikasi pemulihan, dan postmortem.

Contoh incident: provider API 429/503, token expired, DB pool exhausted, queue growth, memory growth, TLS certificate failure, webhook redelivery storm. Mitigasi tidak boleh melonggarkan auth atau mematikan TLS validation.
