# Recipe: API aggregation and fan-out

An aggregator calls multiple services to produce one response. It can improve application ergonomics but can also amplify latency and load.

## Design principles

- Use bounded concurrency rather than unbounded fan-out.
- Give each dependency a timeout and the full operation an overall deadline.
- Decide whether a failed dependency fails the entire request or produces partial output.
- Use per-provider circuit breakers if appropriate.
- Avoid retrying all branches at once after a timeout.
- Cache appropriate stable results.
- Propagate correlation IDs and produce a per-dependency latency breakdown.
- Avoid returning sensitive raw provider errors to end users.

## Proposed example

```unicorn
aggregate::task, :"weather", :weather_call:, :weather_task:
aggregate::task, :"places", :places_call:, :places_task:
aggregate::limit_concurrency, 2
aggregate::deadline_ms, 4500
aggregate::wait_all, [:weather_task:, :places_task:], :combined:
aggregate::map_partial_errors, :combined:, :client_result:
```

The exact tuple/array syntax, cancellation propagation, and partial-result types remain design decisions.
