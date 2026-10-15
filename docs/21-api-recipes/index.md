# API recipes and integration patterns

These recipes show how the proposed language might organize common remote-service workflows. They are not vendor-specific guarantees. Always read the API provider's current official docs, terms, rate limits, authentication requirements, and data licensing rules.

## Recipes

- [Weather API adapter](weather-api.md)
- [Maps and geocoding](maps-geocoding.md)
- [Search API and safe result parsing](search-api.md)
- [Webhook integration](webhook-integration.md)
- [REST-to-database application](rest-database.md)
- [Third-party API adapter template](third-party-adapter-template.md)
- [API aggregation and fan-out](api-aggregation.md)
- [Server-side URL fetch and SSRF defense](safe-url-fetch.md)

## Common adapter contract

Every adapter should define: provider/base URL, credential source, allowed hosts, timeout budget, response-size cap, rate-limit policy, API schema/version, error mapping, retry/idempotency policy, observability fields, and tests using deterministic fixtures.
