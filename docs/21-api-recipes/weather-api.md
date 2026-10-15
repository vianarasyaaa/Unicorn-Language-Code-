# Recipe: weather API adapter

A weather API adapter typically sends a location query or coordinates, authenticates according to its provider, and maps the provider's response into a stable internal model. This example uses a placeholder endpoint because each provider has its own URL, key policy, fields, quota, attribution requirement, and commercial terms.

## Proposed UNICORN example

```unicorn
config::env_required, :"WEATHER_API_BASE_URL", :base_url:
config::env_required, :"WEATHER_API_KEY", :api_key:

http::request_buat, :"GET", :base_url:, :"/v1/current", :request:
http::query_tambah, :request:, :"q", :city:
http::header, :request:, :"Authorization", :bearer(:api_key:)
http::timeout, :request:, 4000
http::max_response_bytes, :request:, 262144
http::kirim, :request:, :response:
api::status_check, :response:, :expected_2xx:
json::parse_response, :response:, :weather_json:
schema::validate, :weather_json:, :"WeatherResponse", :weather:
```

The authorization format is provider-specific; do not assume every weather API accepts Bearer tokens. Some providers expect a key parameter/header according to their own docs.

## Stable internal model

Prefer mapping provider data to your own domain fields such as `temperature_value`, `temperature_unit`, `condition_code`, `observed_at`, and `location_label`. Keep source attribution and licensing obligations attached to the result if required by the provider.

## Robustness

Cache responses only for a duration consistent with the provider's terms and forecast/current-data freshness. Respect quotas, use bounded retries, distinguish invalid location from quota exhaustion, and never log API keys.
