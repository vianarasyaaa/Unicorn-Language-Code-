# Async and concurrency

A future design may include async tasks, threads, channels, locks, atomics, and structured concurrency. The specification needs to define memory ordering, cancellation, panic propagation, task lifetime, fairness, starvation, and cleanup.

Example surface sketch:
```unicorn
task::buat, :"ambil_data", :task:
task::jalankan, :task:
task::tunggu, :task:, :hasil:
```

This sketch is not an implemented scheduler. A runtime must provide an event loop or executor and specify its scheduling guarantees.
