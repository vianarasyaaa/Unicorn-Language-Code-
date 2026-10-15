# Hello World

This example illustrates the proposed high-level surface syntax:

```unicorn
#program "HALO"
#language "ID"
#level "HIGH"

layar::cetak, :"Halo, dunia!"

:akhir
```

English alias proposal:

```unicorn
#program "HELLO"
#language "EN"
#level "HIGH"

screen::print, :"Hello, world!"

:finish
```

## Expected meaning
1. Declare the program name.
2. Select the source-language alias profile.
3. Select the intended abstraction level.
4. Print the string to standard output.
5. End the program.

**Execution note:** this source is illustrative until a compiler and `layar::cetak` / `screen::print` implementation exist.
