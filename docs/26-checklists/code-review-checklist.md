# Code Review Checklist

## Correctness
- [ ] Types, ownership, and error paths jelas.
- [ ] Boundary indices, integer overflow, and malformed inputs ditangani.
- [ ] Retry aman dan bounded.
- [ ] Semua resource ditutup di success/error/cancel.

## Performance
- [ ] Optimasi punya hipotesis dan data benchmark.
- [ ] Hot-path allocations dikurangi hanya bila profil mendukung.
- [ ] Queue/response/cache mempunyai batas.

## Security
- [ ] No secrets in logs/source.
- [ ] Authorization diuji pada setiap resource.
- [ ] Network URLs, redirects, uploads, and parser inputs dibatasi.

## Docs
- [ ] API contract, examples, status, and compatibility updated.
