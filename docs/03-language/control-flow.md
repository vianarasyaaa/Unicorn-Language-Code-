# Control flow

Proposed forms include conditionals, pattern selection, iteration, early return, break, and continue.

```unicorn
kondisi::jika, :nilai: > 0
    layar::cetak, :"positif"
jika_tidak
    layar::cetak, :"nol atau negatif"
:selesai
```

Equivalent English aliases may be defined, but both spellings must create the same canonical control-flow node. The language specification must define whether conditions require a strict boolean, how unreachable code is diagnosed, and how cleanup runs when a block exits early.
