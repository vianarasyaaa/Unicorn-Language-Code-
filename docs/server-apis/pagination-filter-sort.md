# Pagination, Filtering, Sorting

API list wajib membatasi ukuran hasil. Tetapkan parameter yang diizinkan—jangan mengubah parameter query user langsung menjadi nama kolom SQL.

Contoh request: `GET /v1/posts?limit=20&cursor=opaque&sort=-createdAt&status=published`.

Kriteria:
- default limit dan max limit;
- validasi filter/enum;
- sort field allowlist;
- cursor bertanda tangan atau opaque jika sensitif;
- stable ordering untuk menghindari item hilang/duplikat;
- query plan/index dievaluasi;
- respons metadata pagination konsisten.
