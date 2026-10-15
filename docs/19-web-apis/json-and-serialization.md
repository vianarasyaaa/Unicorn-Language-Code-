# JSON and serialization

## Data path

Serialization converts typed values into bytes; parsing converts bytes to a value tree; schema validation verifies that the value has the shape required by an operation. Keep these as separate steps so decoding does not silently imply that data is semantically valid.

```text
Typed value -> JSON serializer -> UTF-8 bytes -> HTTP body
HTTP body -> byte limit -> UTF-8 decoder -> JSON parser -> schema validator -> typed result
```

## JSON rules to define

- UTF-8 decoding and malformed input behavior.
- Duplicate object key policy.
- Number range and precision, especially integers larger than exact IEEE-754 integer range.
- `null` vs missing property vs optional type.
- Maximum nesting depth and token count.
- Maximum string, array, object, and total payload lengths.
- Handling of unknown properties (reject, ignore, or preserve according to schema policy).
- Stable output ordering only if the implementation explicitly guarantees it.

## Proposed usage

```unicorn
json::encode, :payload:, :"UTF8", :bytes:
json::decode, :bytes:, :document:
schema::validate, :document:, :"PostResponse", :validated:

jika::gagal, :validated:
    error::laporkan, :validated:
:selesai
```

## Example payload

```json
{
  "id": 1,
  "title": "Halo API",
  "body": "Contoh payload untuk dokumentasi",
  "userId": 7
}
```

## Security and reliability

Do not trust JSON merely because parsing succeeded. Validate type, length, enum values, required properties, numeric range, and business rules. Avoid unsafe deserialization that instantiates arbitrary classes or code. Set request and response size limits before loading entire bodies in memory.
