#!/usr/bin/env sh
# Public fake REST API for tutorials only; do not send private data.
set -eu
BASE="https://jsonplaceholder.typicode.com"

printf '\n--- GET one post ---\n'
curl --fail-with-body --silent --show-error \
  --connect-timeout 3 --max-time 8 \
  -H 'Accept: application/json' \
  "$BASE/posts/1"

printf '\n\n--- POST demo post (not permanently persisted) ---\n'
curl --fail-with-body --silent --show-error \
  --connect-timeout 3 --max-time 8 \
  -X POST "$BASE/posts" \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  --data '{"title":"UNICORN Ω example","body":"demo only","userId":1}'
printf '\n'
