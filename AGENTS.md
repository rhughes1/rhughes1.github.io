# Codex Constitution

This repository is the canonical source of truth for how Codex should work in this site and in any repository that inherits the same operating style.

## Preamble

Treat this file as a stable policy layer, not a scratchpad.

- Prefer exact, repo-local facts over memory.
- Prefer the smallest useful context over broad scans.
- Prefer editing source docs over duplicating policy in multiple places.
- Prefer validation over assumption.

If a more specific `AGENTS.md` exists in a subdirectory, that file overrides this one for its subtree.

## Article I. Source Of Truth

- Use the repository content before external guesses.
- When the task depends on current library or framework behavior, use `context7` or official docs before answering from memory.
- When the task depends on repository structure, use `jcodemunch` first.
- Do not use generated output under `site/` as a primary source unless the task is explicitly about build artifacts.

## Article II. Context Budget

- Start with repo outline, file tree, or targeted symbol search.
- Read the narrowest file that can answer the question.
- Batch related lookups instead of repeating single-file reads.
- Reindex changed files before relying on them.
- Avoid loading large markdown pages unless the task truly needs them.

Token-saving rules:

- Prefer file paths, headings, and short summaries over full file dumps.
- Prefer canonical docs over repeated paraphrases.
- Prefer one source of truth per policy topic.
- Avoid reading generated CSS, JS, or search index files unless debugging the build.

## Article III. Work Flow

- Before editing, identify the exact files and the smallest change set.
- Keep changes local and aligned with the existing site structure.
- If a doc change affects navigation, update `mkdocs.yml` in the same change.
- If a doc change affects links or filenames, update all references together.
- If a file is edited, reindex that file or folder before asking Codex to reason about it again.

## Article IV. Accuracy

- Answer with concrete file paths and specific behavior.
- If evidence is incomplete, say so.
- Distinguish between facts from the repo and inferences from patterns.
- Do not invent conventions that are not present in the repository.

## Article V. Repository Rules

This repo is a MkDocs Material site.

- Keep prose skimmable.
- Use sentence case for headings.
- Keep blog posts dated, for example `docs/blog/posts/2026-03-28-new-post.md`.
- Keep CSS and JavaScript in `docs/overrides/`.
- Do not commit secrets, analytics keys, or build artifacts.
- Leave `GOOGLE_ANALYTICS_KEY` as an injected placeholder in `mkdocs.yml`.

## Article VI. Validation

- Run `mkdocs build` for any content, navigation, or template change.
- Use `mkdocs serve` when visual or navigation behavior matters.
- For blog posts, confirm the slug and date map to the intended URL.
- For CSS or JS edits, verify the rendered page behavior, not just the file diff.

## Article VII. Commit And PR Discipline

- Use conventional commits such as `feat:`, `fix:`, or `chore:`.
- Keep branch names descriptive.
- Include testing notes in PRs.
- Update docs when a change alters how the site or repo should be used.

## Article VIII. Inheritance Strategy

For downstream repositories, keep the local policy short and add only the deltas that are unique to that repo.

- Put universal rules in the top-level `AGENTS.md`.
- Put repo-specific exceptions in the nearest nested `AGENTS.md`.
- Put long-form human guidance in the site docs only when it helps people, not just the agent.

