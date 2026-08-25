# Context

Glossary for the **8-й клас Інформатика ОРТ** website. Terms only — no implementation
detail, no plans, no decisions. Decisions live in `docs/adr/`.

## Курс

A division of the subject — one of the three **блоки** the semester is split into.

This is the term most likely to mislead. In ordinary usage a "курс" is something a
school offers across grades — "the Python course", open to 10th and 11th. Here the
entire site is one subject in one grade, so a курс is a division inside it, and the
divisions are exactly the semester plan's блоки:

| Курс | Блок | Тижні |
|---|---|---|
| Кодування даних і кібербезпека | 1 | 1–3 |
| Працюємо із числами | 2 | 4–9 |
| Програмування | 3 | 10–16 |

A Курс has a title, a short description, an accent colour, a glyph, a **span** (the
weeks it occupies) and a **load** (how many lessons it contains). It is addressable at
`/courses/<slug>/`.

A Курс may hold no Теми at all — that is a block whose material has not been written
yet, not an error.

> This mapping is new. Until the real curriculum arrived, the site carried four
> placeholder курси taken from the design prototype (Excel, Python, Figma, веб), and
> this glossary recorded that a Блок was *not* a Курс. That is no longer true: a Курс
> **is** a Блок.

## Тема

One addressable piece of material inside a Курс — in practice, one **урок**. The leaf
of the hierarchy: nothing nests inside a Тема.

A Тема has a position (its number in the Курс), a title, a short meta line, and
exactly one **Kind**. It is addressable at
`/courses/<course-slug>/<theme-slug>/`.

Themes within a Курс are ordered, and that order is what «Попередня тема» /
«Наступна тема» step through. Stepping crosses Kinds freely — a Конспект's «Наступна
тема» may land on a PDF — but it does **not** wrap: the first Тема has no previous and
the last has no next. A Курс is a sequence with two ends, not a loop.

A Тема may be **pending**: it exists, is numbered, and is reachable, but its material
has not been made yet. A pending Тема shows no Kind badge, because the answer to "what
kind of material is this" is not yet decided.

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
  Each slide is a kicker, a title, and a short list of bullets. Presentable full-screen.

## Supporting material

What a Тема carries **in addition to** its Kind. A real lesson has one primary artifact
plus things around it, so the Kind is what the Тема *is*, and supporting material is
what comes with it.

Two forms:

- **Prose** — authored text shown below the viewer: a glossary, a пам’ятка, homework,
  what to know after the lesson. Available to every Kind, not just Конспект.
- **Attachment** — a file a student can open or print, listed under «Матеріали до
  теми». Each has a label, a file, and an optional note describing what it is.

Supporting material is **not** a second Kind. A Презентація with a handout attached is
still one Тема of Kind Презентація; the handout does not get its own number on the
timeline and does not have its own address.

## Пара

A paired lesson in the planning material — 90 minutes, theory then practice, producing
one artefact. Sixteen of them make the semester.

Recorded here only because блоки 2 and 3 are planned in пари rather than in уроки, so
their Теми will not map one-to-one onto lesson numbers the way блок 1's do. When that
material is written, this glossary needs to say which unit its Теми represent.

## Non-terms

Vocabulary from the original design that this project has deliberately retired:

- **«Мої курси»** — there are no accounts, so nothing is anyone's.
- **Клас** as a header chip (`10-А клас`) — no accounts, no class context.
- **Level** (`10 клас`, `10–11 клас`) — a single-grade site has no level axis. The card
  slot that held it now holds the Курс's **span** (`тижні 1–3`).
- **Hours** (`12 годин`) — replaced by **load** (`6 уроків`), which is what the
  semester plan actually counts in.
- **Матеріали**, **Розклад** — nav destinations that do not exist.
