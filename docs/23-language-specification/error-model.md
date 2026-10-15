# Error Model

Rancang typed errors/result untuk operasi yang dapat gagal. Bedakan error recoverable, cancellation, panic/fatal, and compile-time diagnostics. Error harus membawa code stabil dan metadata terbatas tanpa secret.

Tentukan apakah error dipropagasi secara eksplisit, menggunakan operator khusus, atau exception. Jangan menggabungkan model berbeda tanpa aturan interop.
