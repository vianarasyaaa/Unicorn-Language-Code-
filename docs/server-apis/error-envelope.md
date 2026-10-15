# Format Error API

Pilih satu bentuk error publik yang konsisten, misalnya:

```json
{
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "Request tidak valid",
    "requestId": "req_demo_123",
    "details": [{"field":"title","reason":"required"}]
  }
}
```

`requestId` harus non-secret. `details` tidak boleh menampilkan SQL, stack trace, internal file paths, token, atau data sensitif. Pastikan status HTTP sesuai kategori error dan client dapat membedakan retryable vs permanent error.
