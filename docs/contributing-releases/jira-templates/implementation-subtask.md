---
title: Jira implementation subtask template
description: Copy-ready Jira implementation subtask template for one branch and one implementation slice.
---

# Jira implementation subtask template

Use this template when a parent story is split into independent implementation slices.

Each implementation subtask should map to one mutating agent, one branch, and one slice.

## Template

```markdown
## Parent story

- Jira story:
- Repository:
- OpenSpec change, if any:

## Slice boundary

This task implements only:

- 

This task must not touch:

- 

## Acceptance criteria for this slice

- [ ] 
- [ ] 

## Implementation lane

- Preferred lane:
- Assigned tool or agent:
- Read-only or mutating:

## Branch

- Base branch:
- Working branch:

## Inputs for agent

- Read the repository instructions first.
- Read the parent story and this subtask.
- Read the active OpenSpec change if one exists.
- Implement only this slice.

## Validation

- Required final command:
- Targeted checks:
- Manual verification:

## Do not touch

- Files, modules, packages, workflows, or behavior that must stay unchanged:

## Handoff notes

- Files changed:
- Validation result:
- Blockers or follow-up work:
```

## Field guidance

- `Slice boundary` is the most important section. It should be narrow enough for one branch.
- `Implementation lane` should match the [agent lanes](../agent-lanes.md) page.
- `Branch` should be unique to this slice.
- `Do not touch` should prevent overlap with other active slices.
- `Validation` should use repository-specific commands from the target repo, not this standards site.

## Related pages

- [Work items](../jira-work-items.md)
- [Agentic delivery](../agentic-delivery.md)
- [Agent lanes](../agent-lanes.md)
