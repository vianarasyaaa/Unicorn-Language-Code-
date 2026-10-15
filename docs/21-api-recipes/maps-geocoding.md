# Recipe: maps, geocoding, and nearby places

Map/geocoding APIs can transform an address into coordinates (geocoding), coordinates into an address (reverse geocoding), and search for nearby businesses or points of interest. APIs vary substantially in authentication, geographic coverage, result licensing, caching, map display, and attribution requirements.

## Safe flow

1. Clarify whether the operation needs an address, coordinate, route, or place search.
2. Validate and normalize input without assuming the first result is correct.
3. Call only a chosen provider endpoint over HTTPS.
4. Bound response size and result count.
5. Validate coordinate ranges and result schemas.
6. Return source/precision metadata and let callers handle ambiguous results.
7. Apply provider terms, attribution and storage/cache requirements.

## Proposed call

```unicorn
maps::provider, :"CONFIGURED_PROVIDER", :maps:
maps::geocode, :maps:, :address:, :results:
results::limit, :results:, 5
schema::validate, :results:, :"GeocodeResults", :valid_results:
```

The provider is intentionally configurable; this is not a claim that a single universal maps endpoint exists. Never claim a location is exact when the provider returned an approximate match. For nearby-business searches, inspect provider-specific permission, usage, and licensing conditions.
