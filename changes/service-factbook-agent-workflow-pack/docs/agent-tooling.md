# MCP and tool routing

The goal is to remove manual context copying without creating noisy agent behavior.

## MCP routing table

| Tool | Use for | Do not use for |
|---|---|---|
| Atlassian MCP | Jira issue, epic, comments, acceptance criteria, status, links | broad repo search or code inspection |
| GitHub MCP | PRs, branches, commits, CI status, review threads | local code already available in the checkout |
| Serena | symbol search, definitions, references, precise code edits | broad architecture summaries |
| jcodemunch | understanding large unfamiliar repo areas | simple localized changes |
| context7 | current external library docs | stable language syntax or project-local conventions |
| context-mode | reusable project context, standards routing | facts already present in prompt or issue |
| MemPalace | long-lived decisions and project memory | temporary task state or secrets |
| Semgrep | security findings and static-analysis triage | normal formatting or simple UI changes |
| Endor | dependency risk and supply-chain review | ordinary compile/test failures |

## Default context order

1. Repo `AGENTS.md`.
2. Jira issue and parent epic through Atlassian MCP.
3. Active OpenSpec change.
4. Current-state OpenSpec specs.
5. Directly relevant source and tests.
6. Standards from `~/repos/rhughes1.github.io` only when the task category needs them.
7. External docs via context7 only when version-specific behavior matters.

## Anti-patterns

- Reading the whole repo before checking the OpenSpec.
- Reading unrelated Jira issues.
- Using MemPalace for temporary task notes.
- Using GitHub MCP to inspect files that are already local.
- Installing new dependencies without explicit justification.
- Using broad web/context tools instead of source, tests, and specs.
