# AGENTS.md

Personal notes / playground repo, not an application. There is no build, test suite, or CI.
The only automated verification is `markdownlint`:

```sh
npx markdownlint-cli2 "**/*.md"
```

- `.markdownlint.jsonc` is auto-picked up. It deliberately relaxes opinionated rules
  (line length, duplicate headings, fence languages, etc.) — do not "fix" those.
  It enforces: no inline HTML (MD033), no bare URLs (MD034), no reversed links (MD011),
  descriptive link text (MD059).
- The lint glob covers `*.md` only; `.mdx` files (e.g. `sql/sql-notes.mdx`) are not linted.

## Conventions (from README.md)

- New files/folders: lowercase kebab-case, no spaces, no ALL-CAPS. Sequential notes use
  zero-padded prefixes (`01-`, `02-`, ...).
- **Do not bulk-rename existing files** that predate these conventions (e.g.
  `mongodb/MongoDB 01.md`, `c/01_hello_world.c`) — leave them as-is.
- Assets referenced by notes live in an `assets/` subfolder next to those notes.
- One top-level folder per topic; cross-cutting topics go in `notes/`.

## Gotchas

- `.gitignore` ignores everything in `c/` except `!c/*.c` and `!c/README.md` — only C
  sources and that README can be committed there; don't add other file types.
- `c/*.out` and compiled binaries are gitignored; don't commit build artifacts,
  `node_modules/`, or `dist/`.
- Per-project lockfiles only (pnpm preferred). Sub-projects (`rust/*` cargo crates,
  `js/`, `ts/`, `docker/docker-demo-project/myblog/`) are independent — run their
  commands from inside their own folder.
- Never commit secrets; `.env*` is gitignored.
- Never rename files inside cloned third-party repos.
