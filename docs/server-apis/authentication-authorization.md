# Authentication dan Authorization

- **Authentication (AuthN):** siapa subjeknya?
- **Authorization (AuthZ):** tindakan apa yang boleh dilakukan subjek pada resource tertentu?

## Pola

- Session cookies untuk aplikasi browser dengan kontrol CSRF yang sesuai.
- OAuth/OIDC untuk delegated identity dan login federasi bila dibutuhkan.
- API keys untuk integrasi mesin dengan scope, expiry, rotation, dan audit.
- Service-to-service identity yang sesuai dengan platform.

## Authorization object-level

Setiap endpoint yang menerima `resource_id` perlu memastikan principal berhak pada objek tersebut. Jangan hanya mengecek role global atau memercayai `userId` dari body.

## Checklist

- Least privilege.
- Expiry dan rotasi kredensial.
- Rate limit auth failures.
- Response error tidak membocorkan apakah secret valid secara berlebihan.
- Audit akses sensitif tanpa menulis credential.
- Test akses silang antar pengguna.
