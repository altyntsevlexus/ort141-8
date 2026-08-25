# Context

Glossary for the **8-й клас Інформатика ОРТ** website. Terms only — no implementation
detail, no plans, no decisions. Decisions live in `docs/adr/`.

## Курс

A unit of study **within** one grade's subject. Not a school-wide offering.

This is the term most likely to mislead. In ordinary usage a "курс" is something a
school offers to students across grades — "the Python course", open to 10th and 11th.
Here the entire site *is* one subject in one grade (8th grade Informatics), so a курс
is a division inside it: a coherent stretch of material with its own accent colour,
its own list of Теми, and its own card on the home grid.

A курс has a title, a short description, an accent colour, a glyph, a theme count and
an approximate duration. It is addressable at `/courses/<slug>/`.

Consequence to keep in mind: because every курс belongs to the same grade, per-курс
grade labels carry no information. They exist on the cards only as a holdover from the
original design.

## Тема

One addressable piece of material inside a Курс. The leaf of the hierarchy — nothing
nests inside a Тема.

A Тема has a position (its number in the Курс), a title, a short meta line, and
exactly one **Kind**. It is addressable at `/courses/<course-slug>/<theme-slug>/`.

Themes within a Курс are ordered, and that order is what «Попередня тема» /
«Наступна тема» step through. Stepping crosses Kinds freely — a Конспект's «Наступна
тема» may land on a PDF — but it does **not** wrap: the first Тема has no previous and
the last has no next. A Курс is a sequence with two ends, not a loop.

## Kind

Which of three ways a Тема presents itself. Every Тема has exactly one, and it is
fixed — a Тема does not offer its content in more than one Kind.

Kind is **not** part of the URL. All three are renderings of the same address, so a
Тема's link is stable regardless of how it happens to present itself.

- **Конспект** — an authored page: prose with rich elements (tables, images,
  interactive pieces, callouts, step lists). Carries a «Зміст теми» outline of its own
  sections. The flexible Kind; anything that isn't a file or a deck is a Конспект.
- **PDF** — a single document, read in place. Reference sheets and handouts.
- **Презентація** — an ordered sequence of slides, stepped through one at a time.
  Each slide is a kicker, a title, and a short list of bullets.

## Блок

A division of the semester's *teaching plan* — there are three, split 3–6–7 across
sixteen weeks. **A Блок is not a Курс.**

Recorded here only to keep the two apart. Блоки belong to the curriculum planning
material, which lives outside this repository (see `docs/adr/0002`). The site's Курси
do not currently correspond to Блоки; if they ever do, that is a change to this
glossary and needs to be written down here.

## Пара

A paired lesson — 90 minutes, structured as theory then practice, producing one
artefact. Sixteen of them make the semester. Like Блок, this is a *planning* term, not
a site term. The planning document describes a Пара as "one block of materials on the
future site", which anticipates a mapping onto Тема that does not yet exist.

## Non-terms

Vocabulary from the original design that this project has deliberately retired:

- **«Мої курси»** — there are no accounts, so nothing is anyone's.
- **Клас** as a header chip (`10-А клас`) — no accounts, no class context.
- **Level** (`10 клас`, `10–11 клас`) — a single-grade site has no level axis.
- **Матеріали**, **Розклад** — nav destinations that do not exist.
