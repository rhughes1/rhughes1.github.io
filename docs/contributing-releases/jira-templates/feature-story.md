---
title: Jira feature story template
description: Copy-ready Jira feature story template for agent-routed implementation work.
---

# Jira feature story template

Use this template for new behavior, user-facing changes, infrastructure capabilities, documentation improvements, and other planned work that should be routed through Jira.

Keep the headings unchanged so people, Codex, OpenCode, OpenHands, and other agents can parse the work item consistently.

## Template

```markdown
## Goal

As a <user or persona>, I want <capability>, so that <outcome>.

## Background

- Repository:
- Product or platform area:
- Parent epic:
- Related standards or docs:
- Current behavior:
- Desired behavior:

## Acceptance criteria

- [ ] Given <context>, when <action>, then <observable result>.
- [ ] Given <context>, when <edge case>, then <safe or clear result>.
- [ ] Given <constraint>, when <action>, then <expected guardrail or response>.

## Scope

In scope:

- 

## Out of scope

- 

## OpenSpec required

- Yes / No / Unsure:
- Reason:
- Proposed change ID, if known:

## Implementation slices

- Spec:
- Backend or infrastructure:
- UI:
- Tests:
- Docs:
- Cleanup:

## Validation

- Required final command:
- Targeted checks:
- Manual verification:

## Branch

- Base branch:
- Working branch:
- Preferred lane:

## Do not touch

- Files, modules, packages, workflows, or behavior that must stay unchanged:

## Agent notes

- MCP or tool guidance:
- Reviewer focus:
- Open questions:
```

## Field guidance

- `Goal` should describe one outcome and one primary persona.
- `Acceptance criteria` should be measurable and testable.
- `Scope` should say what the implementation includes.
- `Out of scope` should protect unrelated behavior from scope creep.
- `OpenSpec required` should be `Yes`, `No`, or `Unsure` with a short reason.
- `Implementation slices` should identify separable work that can map to lanes and branches.
- `Validation` should name the repository-specific checks expected before handoff.
- `Branch` should identify the base branch and intended working branch when known.
- `Do not touch` should be explicit when shared files, public contracts, or sensitive behavior are off limits.

## Related pages

- [Work items](../jira-work-items.md)
- [Agentic delivery](../agentic-delivery.md)
- [Agent lanes](../agent-lanes.md)
