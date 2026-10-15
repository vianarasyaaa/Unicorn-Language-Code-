# File uploads and downloads

Binary transfers need explicit size, content type, filename, lifetime, and integrity policies. A filename extension is not proof that a file is safe.

## Upload checklist

- Enforce body and file size limits before fully buffering.
- Use streaming for large files.
- Validate media type and file signature where relevant.
- Generate server-side storage names instead of trusting user filenames.
- Store uploads outside executable/public paths unless intentionally served.
- Scan/process files in a constrained environment when needed.
- Prevent path traversal and archive extraction bombs.
- Authenticate and authorize upload destinations.
- Use short-lived signed URLs only with narrowly scoped permissions.

## Download checklist

- Authorize access to the exact object.
- Set safe `Content-Type` and `Content-Disposition` headers.
- Avoid reflecting untrusted header values without correct encoding.
- Use streaming and range support where required.
- Define cache rules for private files.

## Proposed multipart client

```unicorn
multipart::buat, :form:
multipart::field_text, :form:, :"description", :"demo"
multipart::field_file, :form:, :"file", :path:
http::body_multipart, :request:, :form:
http::kirim, :request:, :response:
```

The API must define streaming and cleanup semantics. Do not read arbitrarily large files entirely into RAM by default.
