#!/usr/bin/env sh
set -eu
curl --fail-with-body --silent --show-error \
  --connect-timeout 3 --max-time 8 \
  -H 'Accept: application/json' \
  'https://jsonplaceholder.typicode.com/posts/1'
