# Grammar draft (illustrative EBNF)

This grammar is intentionally incomplete. It is a starting point for a parser prototype, not a final normative grammar.

```ebnf
program        = { directive | statement }, program_end ;
directive      = "#" , identifier , string_literal ;
statement      = call | declaration | conditional | loop | function_decl | block ;
call           = qualified_name , "::" , identifier , "," , argument_list ;
argument_list  = argument , { "," , argument } ;
argument       = literal | label_ref | expression | type_name ;
label_ref      = ":" , identifier , ":" ;
block          = block_open , { statement } , block_close ;
block_open     = ":mulai" | ":start" ;
block_close    = ":selesai" | ":end" ;
program_end    = ":akhir" | ":finish" ;
literal        = string_literal | integer_literal | float_literal | boolean_literal ;
qualified_name = identifier , { "::" , identifier } ;
```

## Open grammar questions
- Is a label declared before use, or can it be inferred from a result position?
- How are expressions grouped and how are commas inside compound expressions represented?
- How does syntax distinguish a label from a keyword alias?
- Are whitespace/newline delimiters significant?
- Are blocks introduced only by control constructs or can declarations own blocks?
- How are generic parameters and type annotations expressed?
- How is inline assembly delimited safely?
- How are source-language directives scoped across imported modules?

These decisions must be resolved before a production parser is built.
