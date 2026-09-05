# 4. A table on a phone is a table, a scroller, or a stack

Date: 2026-09-05

## Status

Accepted.

## Context

Half the class reads this site on a phone. At 390 px the supporting material's tables
were the worst thing on it: three columns divided 350 px into 116 px each, and the
glossary came out two words to a line with «централізова / ним» split between them. A
domain in a two-column table broke as «privatban / k.ua». The слайд tables had the same
problem inside the deck.

There is no single fix, because the tables are not one kind of thing:

- The **glossary** — термін, англійською, визначення — is a list of entries that happen
  to share a shape. Nothing is compared across rows.
- The **positional grid** — «Цифри | 1 | 3 | 1» over «Розряд | 10² = 100 | …» — is a
  number written across columns. The columns *are* the meaning.
- The **two-column pairs** — address and answer, бітів and станів — fit as they are, if
  the column that holds the long token gets more than half the width.

Three treatments, then, and something has to decide which table gets which. CSS can
count columns with `:has(th:nth-child(3))`, but column count does not separate the
glossary from the positional grid: both have four.

## Decision

Markdown tables render through `ProseTable`, mapped onto `table` in `mdx-components`,
so authors keep writing plain markdown. The component reads its own slot as a string —
the only way to see the content it wraps — and from the header row decides:

- **Stack** (below 560 px): three or four columns whose headers after the first are all
  words. One block per row; the first cell is the row's name and every other value is
  captioned with its header, passed to CSS as `--label-N` custom properties and printed
  by `td::before`. The glossary reads without a single sideways swipe.
- **Scroll**: everything wider, and any table whose headers are digits. A caption saying
  «1» above a value says nothing, so the positional grid keeps its columns and scrolls
  inside its frame, first column pinned.

The frame — border, radius, background — moved from the table to the wrapper, so the
table inside is free to be wider than the column it sits in.

Slide tables stay in the deck's own rules: four columns and up scroll with the first
column pinned, an exercise table gives 62% of the width to the question because the
answers beside it are covered until clicked.

## Consequences

Authors write markdown; the shape on a phone follows from the header row, which is
already what the table says about itself. A table that wants the other treatment has to
be phrased differently — a numeric grid gets digit headers, a list of entries gets named
ones — which is a real constraint, and the reason it is written down here.

`Astro.slots.render()` plus a regex over the rendered HTML is the mechanism. It is
tolerant: a table whose header row the regex cannot read simply gets no labels and no
stacking, and renders as it did before.
