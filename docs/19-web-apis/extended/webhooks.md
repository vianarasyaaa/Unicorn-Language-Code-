# Webhooks

Webhook adalah request dari sistem eksternal ke endpoint aplikasi ketika suatu peristiwa terjadi.

## Siklus aman

1. Baca raw body dengan batas ukuran.
2. Verifikasi signature atas bytes asli sebelum percaya isi payload.
3. Terapkan timestamp/replay window jika protokol mendukung.
4. Simpan event ID untuk deduplikasi.
5. Masukkan kerja ke durable queue bila proses lanjut berpotensi lama.
6. Balas cepat dengan status yang disyaratkan provider.
7. Proses secara idempotent dan observasi retry.

## Rancangan UNICORN

```unicorn
web::route, :server:, :"POST", :"/hooks/provider", :webhook_handler:

fungsi::buat, :"webhook_handler"
    request::batas_body, :request:, 1048576
    request::ambil_raw_body, :request:, :raw:
    request::header, :request:, :"X-Signature", :signature:
    secret::ambil_env, :"WEBHOOK_SECRET", :secret:
    crypto::hmac_verifikasi, :secret:, :raw:, :signature:, :valid:
    jika::tidak, :valid:
        api::response, 401, :"INVALID_SIGNATURE"
    :selesai
    json::decode, :raw:, :event:
    event::deduplikasi, :event.id:, :is_new:
    jika::valid, :is_new:
        queue::push_durable, :event:
    :selesai
    api::response, 202, :"ACCEPTED"
:selesai
```

Nama header dan format signature berbeda antar provider. Jangan mengasumsikan algoritma tanpa dokumentasi provider. Bandingkan signature secara constant-time jika implementasi kriptografi mensyaratkannya.
