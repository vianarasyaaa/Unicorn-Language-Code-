# Unsafe Boundary

`unsafe` harus menjadi batas eksplisit dengan alasan, invariant, owner, tests, dan API wrapper safe bila memungkinkan. Unsafe tidak boleh berarti “matikan semua pemeriksaan compiler”. Auditor harus bisa menemukan seluruh penggunaan unsafe secara statis.
