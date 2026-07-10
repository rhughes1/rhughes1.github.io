---
title: Agent tooling
description: MCP and tool routing standards for cross-repository agentic delivery.
---

# Agent tooling

Use the narrowest tool that can answer the question or complete the task. The goal is to remove manual context copying without creating noisy or unfocused agent behavior.

## Tool routing

| Tool | Use for | Do not use for |
|------|---------|----------------|
| Atlassian MCP | Jira issues, epics, comments, acceptance criteria, status, links | Broad repo search or code inspection |
| GitHub MCP | Pull requests, branches, commits, CI status, review threads | Local code already available in the checkout |
| Serena | Symbol search, definitions, references, precise code edits | Broad architecture summaries |
| jcodemunch | Understanding large unfamiliar repo areas and blast radius | Simple localized changes |
| context7 | Current external library, framework, SDK, CLI, or API docs | Stable language syntax or project-local conventions |
| context-mode | Reusable project context and compact standards routing | Facts already present in the issue or repository |
| MemPalace | Long-lived decisions and project memory | Temporary task state or secrets |
| Semgrep | Static-analysis findings and security triage | Normal formatting or simple UI changes |
| Endor | Dependency risk and supply-chain review | Ordinary compile or test failures |

## Default context order

Agents should gather context in this order unless the task says otherwise:

1. Repository `AGENTS.md` or local instructions.
2. Jira issue and parent epic through Atlassian MCP.
3. Active OpenSpec change or repository-local proposal, if one exists.
4. Current-state specs or design docs.
5. Directly relevant source and tests.
6. Shared standards from this site when the task category needs them.
7. External docs through context7 only when current external behavior matters.

## Anti-patterns

- Reading the whole repo before checking Jira and the active proposal.
- Reading unrelated Jira issues.
- Using long-lived memory tools for temporary task notes.
- Using GitHub MCP to inspect files that are already local.
- Installing new dependencies without explicit justification.
- Using broad web or context tools instead of source, tests, specs, and repository instructions.
- Treating this standards site as a substitute for repo-local validation commands.

## Repository adapters

Repo-local docs should identify any required tools, commands, MCP usage, and offline constraints for that repository.

The adapter should stay short. It should point to these shared standards rather than duplicating them.

## Related pages

- [Agentic delivery](agentic-delivery.md)
- [Agent lanes](agent-lanes.md)
- [Work items](jira-work-items.md)
