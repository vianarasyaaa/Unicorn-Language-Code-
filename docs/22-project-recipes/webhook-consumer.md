# Recipe: Webhook Consumer

Rancangan pipeline: verify signature → parse minimal fields → dedupe event ID → push durable queue → respond quickly → background worker executes idempotently → record outcome. Kontrak signature harus diambil dari provider spesifik.
