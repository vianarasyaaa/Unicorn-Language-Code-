#!/usr/bin/env sh
set -eu
curl --fail-with-body --silent --show-error \
  --connect-timeout 3 --max-time 8 \
  'https://jsonplaceholder.typicode.com/posts?userId=1&_limit=10'
