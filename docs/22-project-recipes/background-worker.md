# Recipe: Background Worker

Worker yang andal membutuhkan bounded queue, visibility timeout/lease, retry cap, dead-letter strategy, idempotent handler, graceful shutdown, heartbeat, dan metric untuk queue depth/age. Jangan retry poison message selamanya.
