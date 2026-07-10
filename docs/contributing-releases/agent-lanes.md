---
title: Agent lanes
description: Lane model for safely routing Jira implementation slices across agents and branches.
---

# Agent lanes

Use lanes so each tool has a job, each branch has a clear owner, and parallel work stays reviewable.

## Core rule

```text
One mutating agent, one branch, one slice.
```

Read-only review agents may inspect other branches. Mutating agents should not share a branch or file set unless a human explicitly coordinates the handoff.

## Default lane model

| Lane | Primary tools | Good for | Avoid |
|------|---------------|----------|-------|
| Spec lane | ChatGPT, Codex, OpenCode | Jira intake, OpenSpec or proposal authoring, review, decomposition | Application code implementation |
| Backend lane | Codex Cloud, OpenCode | APIs, services, storage, CLI, infrastructure logic, tests | UI polish and screenshot-heavy work |
| UI lane | OpenCode local, Codex local | Frontend implementation, visual refinement, component behavior | Backend storage or policy changes |
| Docs lane | Codex Cloud, OpenCode | Docs, examples, changelog notes, site navigation | Behavior changes without implementation |
| Review lane | Codex `/review`, implementation review gate, human review | PR review, spec review, security review, docs review | Mutating files unless assigned a fix |
| Cleanup lane | OpenCode local, Codex local | Formatting, lint, pre-commit, small targeted fixes | Ambiguous feature expansion |
| Experimental lane | Emerging tools or trial agents | Small isolated fixes, docs cleanup, dependency triage | Primary feature implementation until proven reliable |

## Parallel safety rules

- Never run two mutating agents on the same branch.
- Never let two mutating agents edit the same file set unless one has finished and handed off.
- Split backend and UI only when the contract between them is stable or explicitly specified.
- Keep review lanes read-only unless the Jira issue assigns a fix.
- Use draft pull requests early when CI or review feedback should be visible.
- Stop parallel work if the base branch changes in a way that invalidates an active slice.
- Merge dependent slices in dependency order, not completion order.

## Cross-repository examples

| Repository type | Possible slices |
|-----------------|-----------------|
| Application service | Spec, backend/API, UI, tests, docs, cleanup, review |
| Terraform module | Module logic, examples, tests, generated docs, release notes, review |
| Ansible repository | Roles or playbooks, inventory docs, linting, molecule tests, review |
| Documentation site | Content, navigation, theme or assets, link validation, review |
| Automation repository | Workflow logic, policy checks, docs, test fixtures, release notes |

## Jira fields that support lanes

The Jira issue should include:

- `Implementation slices`
- `Branch`
- `Preferred lane`
- `Do not touch`
- `Validation`

Use [implementation subtasks](jira-templates/implementation-subtask.md) when one story needs more than one mutating lane.

## Related pages

- [Work items](jira-work-items.md)
- [Agentic delivery](agentic-delivery.md)
- [Agent tooling](agent-tooling.md)
