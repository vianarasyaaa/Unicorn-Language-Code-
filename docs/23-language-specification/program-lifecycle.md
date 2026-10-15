# Program Lifecycle

Spesifikasi harus mendefinisikan init order, entry point, static initialization, async runtime startup, signal handling, exit code, destructor/cleanup order, panic behavior, dan shutdown timeout.

Resource teardown harus terdefinisi untuk return normal, error, cancellation, dan abnormal termination semampu target. Jangan menjanjikan cleanup saat power loss atau force kill.
