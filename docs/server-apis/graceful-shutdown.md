# Graceful Shutdown

Saat menerima sinyal penghentian:

1. Berhenti menerima request baru.
2. Tandai readiness sebagai tidak siap.
3. Hentikan scheduler untuk job baru.
4. Beri request aktif waktu selesai sampai batas deadline.
5. Batalkan kerja yang melewati budget secara terkontrol.
6. Flush log/telemetry yang dapat diandalkan.
7. Tutup database pools, HTTP clients, sockets, queues.
8. Keluar dengan status yang konsisten.

Jangan mengandalkan `defer`/cleanup yang belum didokumentasikan. Tes shutdown saat ada request panjang dan dependency gagal.
