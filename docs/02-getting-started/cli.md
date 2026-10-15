# Proposed CLI

The following commands are design sketches, not implemented commands:

```sh
unicorn --version
unicorn new halo
unicorn check src/main.un
unicorn run src/main.un
unicorn build src/main.un --target native
unicorn fmt src/main.un
unicorn test
unicorn doc
```

A real CLI specification must define exit statuses, diagnostic format, environment variables, target selection, source encoding, reproducible builds, and behavior when the compiler/runtime is missing.
