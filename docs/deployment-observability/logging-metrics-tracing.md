# Logging, Metrics, Tracing

Log terstruktur dengan timestamp, severity, service, environment, request ID, operation, duration, dan outcome. Redaksi token, cookie, password, private key, dan payload sensitif.

Metrik gunakan label ber-cardinality rendah. Trace per request dependency untuk investigasi; sampling dapat diperlukan pada traffic tinggi. Tetapkan retention, akses, dan alert thresholds.
