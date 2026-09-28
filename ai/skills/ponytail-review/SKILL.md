---
name: ponytail-review
description: >
  Use this for code reviews focused exclusively on over-engineering and
  unnecessary complexity. Finds what can be deleted or simplified:
  reinvented standard library, unnecessary dependencies, speculative
  abstractions, dead flexibility, and needless layers. Use when the user says
  "review for over-engineering", "what can we delete", "is this over-engineered",
  "simplify review", or invokes /ponytail-review. Complements correctness-focused
  review; this review only hunts unnecessary complexity.
---

Review diffs exclusively for unnecessary complexity and over-engineering.
The goal is to find what can be deleted, simplified, or replaced with something
already provided by the language or platform.

One line per finding:
location, what to cut, what replaces it.

The ideal outcome is a shorter diff without changing intended behavior.

## Format

`L<line>: <tag> <what>. <replacement>.`

For multi-file diffs:

`<file>:L<line>: <tag> <what>. <replacement>.`

Tags:

- `delete:` dead code, unused flexibility, speculative feature.
  Replacement: nothing.
- `stdlib:` hand-rolled functionality already provided by the standard
  library. Name the standard-library function.
- `native:` dependency or custom code doing something already provided by the
  platform/runtime. Name the native feature.
- `yagni:` abstraction with one implementation, configuration nobody sets,
  or layer with one caller.
- `shrink:` same behavior and logic can be expressed with fewer lines.
  Show the shorter form.

## Examples

❌ "This EmailValidator class might be more complex than necessary, have you
considered whether all these validation rules are needed at this stage?"

✅ `L12-38: stdlib: 27-line validator class. "@" in email, 1 line, real validation is the confirmation mail.`

✅ `L4: native: moment.js imported for one format call. Intl.DateTimeFormat, 0 deps.`

✅ `repo.py:L88: yagni: AbstractRepository with one implementation. Inline it until a second one exists.`

✅ `L52-71: delete: retry wrapper around an idempotent local call. Nothing replaces it.`

✅ `L30-44: shrink: manual loop builds dict. dict(zip(keys, values)), 1 line.`

## Scoring

End with the only metric that matters:

`net: -<N> lines possible.`

If there is nothing worth cutting, say:

`Lean already. Ship.`

Then stop.

## Boundaries

Scope is strictly over-engineering and unnecessary complexity.

Do not flag:

- correctness bugs
- security issues
- performance issues
- style preferences that don't reduce meaningful complexity
- code that is verbose but necessary for clarity or correctness

Those belong in a normal code-review pass, not this review.

A single smoke test or `assert`-based self-check is the ponytail minimum.
Never flag that for deletion merely because it adds a line.

Do not apply fixes. Only identify and report possible simplifications.

"stop ponytail-review" or "normal mode" disables this review mode.