# Project layout proposal

```text
my-project/
├── unicorn.toml       # Proposed project and target metadata
├── src/
│   └── main.un
├── tests/
├── examples/
├── assets/
└── README.md
```

A future package manager should define the exact manifest schema, module discovery rules, import resolution, lockfile format, and build reproducibility. Until then, this tree is a convention rather than a required layout.
