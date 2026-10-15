# Transaksi dan Konsistensi

- Gunakan transaksi saat beberapa perubahan harus atomik.
- Tentukan isolation level berdasarkan kebutuhan konsistensi.
- Jaga transaksi pendek; hindari request jaringan jauh di dalam transaction lock tanpa desain khusus.
- Tangani deadlock/retry hanya untuk operasi yang aman.
- Gunakan idempotency record untuk operasi eksternal yang dapat berulang.
- Untuk publish event setelah commit, pertimbangkan transactional outbox.

## Rancangan

```unicorn
database::transaksi, :db:, :tx:
    repository::account_debit, :tx:, :account_id:, :amount:
    repository::account_credit, :tx:, :destination_id:, :amount:
    repository::ledger_insert, :tx:, :transfer_id:
:selesai
```

Syntax tersebut tidak menetapkan isolation/rollback sampai spec transaksi dibuat secara formal.
