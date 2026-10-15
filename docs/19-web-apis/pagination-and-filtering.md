# Pagination, filtering, and sorting

Pagination limits response size and allows clients to continue through large collections. API contracts must make ordering and continuation rules explicit.

## Common styles

### Offset pagination

`GET /v1/posts?limit=50&offset=100`

Easy to understand, but large offsets can be expensive and concurrent insertions/deletions can shift page boundaries.

### Cursor pagination

`GET /v1/posts?limit=50&cursor=opaque-token`

Often better for large or changing datasets. Cursors should be opaque to clients, bound to the query/sort order, and validated server-side.

### Link pagination

Responses expose `next`/`previous` links. Clients should treat links as untrusted URLs and still apply allowlisted host/scheme rules before following them, especially on a server.

## Proposed loop

```unicorn
nilai::tetapkan, :"", :cursor:
ulang::selama, :ada_halaman:
    api::list_posts, :cursor:, 50, :page:
    koleksi::gabung, :all_posts:, :page.items:
    nilai::salin, :page.next_cursor:, :cursor:
    kondisi::jika, :cursor: == :""
        nilai::tetapkan, salah, :ada_halaman:
    :selesai
:selesai
```

The snippet is conceptual; its empty-cursor and boolean semantics need formal definitions.

## Client requirements

- Use a maximum page count or overall deadline.
- Bound total accumulated bytes/items.
- Handle duplicate or repeated cursor values to avoid infinite loops.
- Preserve server ordering; do not assume records are stable across pages unless documented.
- Apply retry only according to method and API semantics.
- Treat filtering and sorting as API contract, not arbitrary client-side expression injection.
