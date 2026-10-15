#!/usr/bin/env sh
set -eu
curl --fail-with-body --silent --show-error \
  --connect-timeout 3 --max-time 8 \
  -X PATCH 'https://jsonplaceholder.typicode.com/posts/1' \
  -H 'Content-Type: application/json' \
  -d '{"title":"Updated title"}'
