# 3. Revision material is a курс, not a section inside one

Date: 2026-09-02

## Status

Accepted.

## Context

The semester plan assumes material the course does not teach. Блок 1 spends all six
lessons on new material and sends four earlier topics home as self-study: складові
комп'ютера, комп'ютерна мережа, операційні системи, браузери. Decks for all four
already exist from previous years, and the knowledge check draws about a fifth of its
questions from them.

The decks are also longer than the revision needs. «Операційні системи» spends five of
its seventeen slides on Windows version history and Linux distributions — material that
nothing later in the course rests on. So the site has to carry the whole deck while
telling a reader which parts of it actually matter.

Two shapes were considered for where revision lives:

- **A section above «Теми курсу» on each курс page.** Closest to how the material is
  used — revision for блок 1 sits with блок 1. But a Тема's number is its lesson
  number, and revision items would either take numbers 1–4 and push уроки to 5–10, or
  need a second numbering scheme. They would also join the «Наступна тема» chain and
  break `load: "6 уроків"` against ten cards. Every one of those is a change to a
  concept that currently has one clean meaning.
- **Its own курс.** A Курс already holds an ordered list of Теми, already renders a
  PDF with prose under it, and is already addressable. Nothing in the schema changes.

Shortening the decks themselves was rejected separately: we hold only exported PDFs, a
cut version is a second artefact to maintain, and the full decks are still taught as
lessons in other classes.

## Decision

Revision is a fourth **Курс**, `povtorennia`, sorted first with `order: 0`. Its four
Теми are of Kind PDF — the decks unchanged — and each carries supporting material under
the viewer:

- a **Callout** naming the must-have slides, and a second naming what can be skipped;
- «Що треба знати після повторення»;
- a **SelfCheck** — four questions whose answers stay hidden until clicked.

`CONTEXT.md` no longer claims a Курс is a Блок. Every Блок is a Курс; Повторення is the
курс that is not a Блок, and its `span` and `load` say how it is worked through rather
than when.

## Consequences

The must-have signal lives beside the file rather than inside it, which means the decks
stay untouched and reusable, and the signal can be corrected without re-exporting a
PDF. It also gives somewhere to put material the decks lack: the textbook's облікові
записи and автозавантаження (с. 21, 23), and HTTPS and cookies, are written into the
prose under «Операційні системи» and «Браузери» instead of becoming new slides.

The cost is that revision is no longer adjacent to the блок that assumes it. A reader
on блок 1 is not told that «Комп'ютерна мережа» should be read before урок 2. Ordering
the four Теми in the sequence the lessons need them is a partial answer; a cross-link
from a блок's Тема to its revision is the real one, and is not built.

Kind PDF now covers two different things: lesson decks presented in class, and revision
decks read alone. They render identically, which is currently fine — if revision needs
its own presentation later, the split is between курси, not inside a Kind.
