# API Versioning dan Compatibility

Pilih satu strategi yang jelas: path version (`/v1`), header/media type, atau contract/version fields sesuai ekosistem. Jangan memakai versi baru untuk setiap perubahan non-breaking.

Semver untuk packages tidak otomatis menyelesaikan versioning HTTP API. Dokumentasikan breaking changes, deprecation windows, migration guide, dan metrik penggunaan versi.

Semua client perlu toleransi terhadap field response tambahan bila kontrak mengizinkan. Server harus tetap menolak input yang tidak aman meski versi lama masih tersedia.
