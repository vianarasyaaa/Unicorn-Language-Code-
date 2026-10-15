#!/usr/bin/env sh
set -eu
curl --fail-with-body --silent --show-error \
  --connect-timeout 3 --max-time 8 \
  -X POST 'https://jsonplaceholder.typicode.com/posts' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{"title":"UNICORN API sample","body":"Test payload only","userId":1}'
