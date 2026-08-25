# 1. The site lives in the curriculum repo

Date: 2026-08-25

## Status

Accepted.

## Context

The site is built from a design prototype titled «Курси ORT 141» — a school-wide course
catalogue, with four courses spanning 10th and 11th grade. The obvious reading was that
this is a portal for the whole school, which argued for its own repository, separate
from `ort141-8` (at the time a planning repo holding one grade's semester plan).

That reading was wrong, and the thing that disproved it was the page heading. Once the
heading was settled as «8-й клас Інформатика ОРТ», the prototype's own vocabulary
collapsed: a site scoped to one subject in one grade cannot host a catalogue of courses
across grades. See `CONTEXT.md` on Курс.

The planning document had also already anticipated the site — «Одна пара = один
закінчений цикл «теорія → артефакт» = один блок матеріалів на майбутньому сайті» — so
the plan and the site were two views of one project: the plan says what a lesson
contains, the site publishes it.

Three options were on the table:

1. A new repository for the site, planning left where it was.
2. The site inside `ort141-8`, alongside the planning material.
3. The site inside `web/`, the existing project that already had a working Pages deploy.

## Decision

The site lives in `ort141-8`, now at `2026-2027/ort141-8`.

## Consequences

A single repository, a single deploy, and content changes that touch both the material
and the site are one commit rather than two coordinated ones.

`web/` was rejected for a reason worth recording: it is *teaching material for a
web-development course*, code that students read. Mixing the school's own portal into
the subject being studied confuses two audiences with different needs.

The repository name now understates its contents — `ort141-8` reads as "8th grade" and
holds a website. Accepted as cheaper than the alternative.

This decision is hard to reverse once a Pages URL has been given to students, which is
the reason it is written down rather than simply done.

The reversal itself is the part worth remembering: the argument for a separate
repository was built on an assumption about scope taken from the prototype's title, and
it survived until the heading forced the question. If the site's scope widens later —
several grades, several subjects — this decision should be revisited rather than
inherited, because the reasoning above depends entirely on the scope being narrow.
