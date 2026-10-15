# JavaScript API counterparts

These are runnable JavaScript examples for modern Node.js (or where noted, browser contexts). They are included to show what a concrete HTTP implementation looks like while UNICORN's `http::` API is only a proposal. They require internet access for JSONPlaceholder examples.

```bash
node fetch-get.mjs
node fetch-post.mjs
node fetch-retry.mjs
node local-server.mjs
node rest-api.mjs
```

The local server stays running until interrupted. Public demo APIs should not receive private data or production workloads.
