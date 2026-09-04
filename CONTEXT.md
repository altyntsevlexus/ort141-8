# Context

Glossary for the **8-й клас Інформатика ОРТ** website. Terms only — no implementation
detail, no plans, no decisions. Decisions live in `docs/adr/`.

## Курс

A division of the subject — in most cases one of the three **блоки** the semester is
split into.

This is the term most likely to mislead. In ordinary usage a "курс" is something a
school offers across grades — "the Python course", open to 10th and 11th. Here the
entire site is one subject in one grade, so a курс is a division inside it, and the
teaching divisions are exactly the semester plan's блоки:

| Курс | Блок | Тижні |
|---|---|---|
| Повторення з попередніх класів | — | — |
| Кодування даних і кібербезпека | 1 | 1–3 |
| Працюємо із числами | 2 | 4–9 |
| Програмування | 3 | 10–16 |

Most курси are блоки, but not all: **Повторення з попередніх класів** is a курс
that is not a блок. It holds the material the semester assumes but does not
teach — last year's decks, worked through at home — so it occupies no weeks and
carries no lesson count. Its **span** says how it is worked through
(`самостійно`) rather than when, and its **load** does the same. It sorts first
(`order: 0`) because it comes before the teaching, not inside it.

A Курс has a title, a short description, an accent colour, a glyph, a **span** and a
**load**. For a блок those two are the weeks it occupies and the lessons it contains;
for Повторення they say how it is worked through instead. It is addressable at
`/courses/<slug>/`.

A Курс may hold no Теми at all — that is a block whose material has not been written
yet, not an error.

> This mapping is new. Until the real curriculum arrived, the site carried four
> placeholder курси taken from the design prototype (Excel, Python, Figma, веб), and
> this glossary recorded that a Блок was *not* a Курс. Every Блок is now a Курс —
> but the reverse does not hold, because Повторення is a курс with no блок.

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

A Тема may also be **current**: it is what the class is working on right now. The
marker says «Зараз вивчаємо» and appears wherever the Тема does — on its card in the
Курс's timeline, on the Курс's card on the home page, and on the Тема's own page. A
Курс is never marked current in its own right: it carries the marker when at least one
of its Теми does, so the state lives in the material and the course only reflects it.

Current and pending are mutually exclusive — there is nothing to work on in a Тема
whose material does not exist — and the content schema rejects a Тема that claims both.
Several Теми may be current at once, across more than one Курс: the four Теми of
Повторення are worked through at home while the first уроки of блок 1 run in class.
Being current says nothing about order and does not move a Тема on the timeline.

## Kind

Which of three ways a Тема presents itself. Every Тема has exactly one, and it is
fixed — a Тема does not offer its content in more than one Kind.

Kind is **not** part of the URL. All three are renderings of the same address, so a
Тема's link is stable regardless of how it happens to present itself.

- **Конспект** — an authored page: prose with rich elements (tables, images,
  interactive pieces, callouts, step lists). Carries a «Зміст теми» outline of its own
  sections. The flexible Kind; anything that isn't a file or a deck is a Конспект.
- **PDF** — a single document, read in place. Reference sheets and handouts.
- **Презентація** — an ordered sequence of slides, stepped through one at a time,
  presentable full-screen.

  A Презентація is **not a document paginated into 16:9**. The content of the lesson is
  what the teacher says; the slide exists to *support* that — so a slide is primarily a
  **visual**, carrying a headline and at most a couple of short text anchors the class
  can glance at. Full-sentence bullet lists are the failure mode: they make the room
  read instead of listen, and they duplicate the teacher instead of helping them.

  A table counts as a visual when the table *is* the point (a comparison, a
  classification). Teacher narration, and the answers to class-facing questions, are
  not part of a Презентація — they live in the planning material outside this
  repository.

  A slide therefore has these named parts, and no others:

  - **Kicker** — where in the lesson we are («Шкідливе ПЗ · класифікація 2»).
  - **Title** — what the slide is. Usually the one claim it makes, as a sentence;
    on a deck that names its slides by topic, the topic name, with the claim
    moved into the Subtitle below it.
  - **Subtitle** — the claim, on the slides whose Title is a topic name rather
    than a sentence. Optional, and it exists so the two readings of a Title can
    coexist in one deck: a slide is never *both* a topic name and nothing else.
    Capped at 120 characters — the head is allowed two lines, not a paragraph.
    When a Title is already the claim (a title slide, a summary), there is no
    Subtitle to add.
  - **Visual** — the diagram, table, code fragment or image that carries it. Optional:
    some slides are a title and nothing else, and that is a legitimate slide.
  - **Idea** — one sentence at the foot of the slide, saying what the visual *means*.
    Optional, and most slides do not have one. An Idea explains the picture; it never
    restates the Title, and it is never a list — there is at most one per slide.
  - **Links** — where to read more, on the few slides that are about real events.
    Shown at the foot in place of an Idea.

  > Because the Title can be either a topic name or a claim, a deck should pick
  > one and hold it. Урок 2 names its slides by topic, so nearly every slide
  > there carries a Subtitle; урок 3 states the claim in the Title and carries
  > none. Mixed within one deck, the head changes shape from slide to slide.

  > A Kicker says where we are and a Title says what this is, so they must not
  > say the same thing. Moving the topic into the Title made «Шкідливе ПЗ ·
  > Класифікація 1» / «Шкідливе ПЗ за метою» repeat itself, and left the summary
  > slide reading «Підсумок» twice. Where that happens, the Kicker keeps the
  > section and the Title takes the specific.

  > An earlier model allowed up to three **anchors** per slide: short glanceable
  > phrases with bullets. They failed in both directions — three fragments read as a
  > summary the class could read *instead of* listening, and they took the height the
  > visual needed. One sentence, or nothing, replaced them.

  **Джерела** are where a Тема's material came from — a textbook section, an earlier
  deck, an external page. They belong to the Тема, not to any one slide, and are shown
  under the viewer.

## Supporting material

Authored text a Тема carries **in addition to** its Kind, shown below the viewer: a
glossary, a пам’ятка, homework, what to know after the lesson. The Kind is what the
Тема *is*; supporting material is what comes with it.

Available to every Kind, not just Конспект — a Презентація or a PDF can carry prose
under it.

Supporting material is **not** a second Kind, and it is not separately addressable: it
lives at the Тема's own URL and gets no number on the timeline.

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
