# 2. Teaching material lives outside the repo; website material lives inside it

Date: 2026-08-25

## Status

Accepted. Supersedes an earlier framing of the same question.

## Context

Publishing from a public repository means everything in that repository is public. The
question first arose as a privacy problem: should the curriculum plan, the assessment
structure and the "what's still undecided" notes be hidden from view?

Examined directly, the privacy framing did not hold. The semester plan contains a
curriculum framework, an hours breakdown, and reasoning about where a holiday week
falls. There is nothing there a student or parent should not see. It had also already
been pushed to a public repository, so treating it as secret would have required
rewriting history — and doing anything less while believing it private would have been
the genuinely bad outcome: the option that looks like it worked and did not.

The real distinction turned out not to be public versus private, but **subject matter**:
material about *teaching the course* is a different concern from material about
*building the website*.

Alternatives considered: a gitignored `docs/` folder in the repo (privacy theatre,
given the history); a private second repository for planning (privacy plus version
history, but solving a problem that did not exist); making the whole repository private
(loses free Pages).

## Decision

- **Teaching material** — curriculum plans, the textbook, topic spreadsheets — lives in
  `2026-2027/`, outside this repository.
- **Website material** — design decisions, glossary, plans, tickets — lives inside this
  repository, in `CONTEXT.md` and `docs/`.

`PLAN-informatyka-8-klas-1-semestr.md` was untracked with `git rm --cached` and moved
out. Its history was deliberately left intact: privacy was never the motive, so there
is nothing to scrub.

## Consequences

The repository holds the site and the thinking behind the site, nothing else. A reader
landing here is not asked to work out which documents are about the website and which
are about the classroom.

The teaching material now sits outside version control, so changes to it are not
recorded. This is a real loss — the planning repo's history was nine commits of
reasoning about why the curriculum is shaped as it is (why 3–6–7 and not 3–5–8, why the
toolchain changed, why the knowledge check became the only graded work), and this
year's equivalent reasoning will not be captured. A private `ort141-8-docs` repository
would recover it at the cost of one command, and remains available if the loss starts
to bite.

Anything genuinely sensitive — individual assessment records, marks, personal data —
must not live in this repository regardless of this decision, public or private.
