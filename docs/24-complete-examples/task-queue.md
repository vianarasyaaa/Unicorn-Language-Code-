# Complete Example: Bounded Task Queue

Queue harus bounded supaya producer cepat tidak membuat memori tumbuh tanpa batas. Tentukan overflow policy, cancellation, fairness, retry, and shutdown drain policy.

```unicorn
queue::buat, 1000, :jobs:
worker::pool, 4, :pool:
worker::handler, :pool:, :process_job:
queue::hubungkan, :jobs:, :pool:
queue::on_full, :jobs:, :"BACKPRESSURE"
worker::start, :pool:
```

API names are proposals; test overload, worker failure, duplicate jobs, and graceful shutdown.
