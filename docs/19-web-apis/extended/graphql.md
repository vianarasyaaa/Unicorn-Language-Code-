# GraphQL

GraphQL menyediakan satu endpoint yang biasanya menerima query/mutation terstruktur. Kompleksitas bukan hanya jumlah bytes; query dapat menimbulkan biaya resolver besar.

## Client proposal

```unicorn
graphql::klien, :"https://api.example.com/graphql", :client:
graphql::query, :client:, :"query User($id: ID!) { user(id: $id) { id name } }", :query:
graphql::variable, :query:, :"id", :"user_123"
graphql::kirim, :client:, :result:
graphql::periksa_errors, :result:, :errors:
```

## Server guardrails

- Auth/authz pada resolver dan object.
- Query depth/complexity limit.
- Batasi pagination dan jumlah alias.
- Pertimbangkan persisted queries untuk aplikasi terkontrol.
- Batching/data-loader harus menghindari N+1 tetapi tetap batasi resource.
- GraphQL response dapat berisi `data` sekaligus `errors`; jangan hanya memeriksa HTTP status.
