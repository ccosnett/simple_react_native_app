# How to Write a Good CLAUDE.md File

CLAUDE.md files give Claude persistent, project-aware instructions that load automatically at the start of every session.

---

## Where to Put It

| Location | Scope |
|---|---|
| `./CLAUDE.md` or `./.claude/CLAUDE.md` | Current project |
| `~/.claude/CLAUDE.md` | All your projects (user-level) |
| OS managed policy path | Organization-wide |

Claude walks up the directory tree from your working directory and loads every CLAUDE.md it finds.

---

## What to Put In It

**High-value content:**
- Build, test, and lint commands (`npm test`, `make build`, etc.)
- Code style rules (indentation, naming conventions, formatting)
- Project architecture overview and key file locations
- Which patterns or libraries to prefer or avoid
- Gotchas and non-obvious constraints

**Low-value content (skip it):**
- Things obvious from reading the code
- Vague instructions like "write clean code" — be specific
- Contradictory rules (Claude gets confused, just like people do)

---

## Writing Good Instructions

Be **concrete and verifiable**:
- ✅ "Use 2-space indentation"
- ❌ "Format code nicely"

Be **actionable**:
- ✅ "Run `npm run typecheck` before committing"
- ❌ "Make sure types are correct"

---

## Size and Structure

- **Target under 200 lines** — CLAUDE.md consumes context window on every session
- Use markdown headers and bullets for scannability
- Put the most important rules at the top

---

## Advanced: Splitting Rules Across Files

**Import other files** using `@path/to/file`:
```
See @README for project overview.
@.claude/rules/api-conventions.md
```

**Organize by topic** in `.claude/rules/`:
```
.claude/rules/
  typescript.md
  api-conventions.md
  testing.md
```

**Scope rules to specific paths** using YAML frontmatter in a rules file:
```yaml
---
paths:
  - "src/api/**/*.ts"
---
Always validate request bodies with Zod schemas.
```

---

## Verify It's Working

Run `/memory` in Claude Code to see which CLAUDE.md files are loaded in the current session.

---

## Quick Checklist

- [ ] Under 200 lines total
- [ ] Includes build/test/lint commands
- [ ] Rules are specific, not vague
- [ ] No contradicting rules across files
- [ ] Most critical instructions are near the top
