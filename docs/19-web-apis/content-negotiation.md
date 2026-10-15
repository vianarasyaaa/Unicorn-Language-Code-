# Content negotiation and media types

Use `Content-Type` to describe a message body and `Accept` to express acceptable response representations. Do not assume a successful endpoint always returns JSON; a `204` response has no response body, and APIs may return text, problem documents, binary data, or an HTML error page from a proxy.

## Client rules

- Set `Accept` to the formats actually understood.
- Set `Content-Type` when sending a body.
- Check response content type before JSON decoding.
- Treat a JSON parse failure as a distinct error, not as an empty object.
- Use provider documentation to determine vendor media types.

## Example

```unicorn
http::header, :request:, :"Accept", :"application/json"
http::body_json, :request:, :payload:
http::kirim, :request:, :response:
http::header_ambil, :response:, :"Content-Type", :content_type:
http::media_type_check, :content_type:, :"application/json", :is_json:
```
