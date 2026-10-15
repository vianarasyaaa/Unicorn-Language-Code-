# Containers dan Model Proses

Dokumentasikan base image, user non-root, filesystem read-only jika memungkinkan, signal delivery, resource limits, port, health checks, serta penyimpanan state. Jangan mengasumsikan container otomatis memberi isolasi penuh.

Untuk workload bot/API, pastikan sesi, database, dan queue yang dibutuhkan tidak hilang ketika container diganti. Hindari menyimpan key/session hanya pada writable ephemeral layer jika perlu persistence.
