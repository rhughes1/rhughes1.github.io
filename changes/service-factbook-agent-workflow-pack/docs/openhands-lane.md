# OpenHands lane

OpenHands can help, but it should be introduced as a narrow third lane rather than replacing Codex/OpenCode.

## Use OpenHands for

- isolated bug fixes with clear reproduction steps
- dependency/security cleanup tasks
- docs cleanup
- PR review experiments
- Jira/GitHub issue decomposition experiments
- tasks where you want an agent to run locally or in Docker without consuming your primary Codex attention

## Avoid OpenHands for initially

- broad service-factbook feature implementation
- auth/session/policy/audit changes
- large UI redesigns
- changes touching backend and UI at the same time
- anything without an approved OpenSpec

## Trial plan

Run three low-risk OpenHands tasks and compare against Codex/OpenCode:

1. Docs-only cleanup.
2. Small test coverage improvement.
3. Dependency/security finding triage with no behavior change.

For each PR, score:

- Did it follow `AGENTS.md`?
- Did it keep scope small?
- Did it run `make verify`?
- Did it avoid unnecessary dependencies?
- Was the PR reviewable?

Only expand OpenHands usage after two of three trial tasks are clean.

## Prompt template

```text
You are working in rhughes1/service-factbook.
Read AGENTS.md first.
Use Jira issue <KEY> as the only work source.
Create branch <branch> from develop.
Implement only this isolated slice: <slice>.
Do not modify OpenSpec unless explicitly required.
Run targeted checks, then run make verify before completion.
Open a draft PR or produce a final diff summary.
If make verify fails, fix only in-scope failures and report anything outside scope.
```
