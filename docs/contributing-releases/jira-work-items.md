---
title: Work items
description: Jira work item standards for cross-repository delivery and agent-routed implementation.
---

# Work items

Use Jira as the intake and routing layer for planned work, bugs, implementation slices, and review gates.

This page defines the cross-repository standard. Repository-specific paths, commands, branch defaults, validation tools, and implementation conventions belong in the target repository's `AGENTS.md`, `CONTRIBUTING.md`, or local documentation.

## Work item types

| Type | Use for | Template |
|------|---------|----------|
| Epic | A group of related outcomes or a larger initiative | [Epic template](#epic-template) |
| Feature story | New behavior, platform capabilities, docs improvements, infrastructure changes, and planned work | [Feature story](jira-templates/feature-story.md) |
| Bug | Broken, regressed, insecure, or misleading existing behavior | [Bug](jira-templates/bug.md) |
| Implementation subtask | One implementation slice on one branch | [Implementation subtask](jira-templates/implementation-subtask.md) |
| Review subtask | Read-only review of a PR, branch, OpenSpec change, or documentation change | [Review subtask](jira-templates/review-subtask.md) |

If a Jira key exists, include it in branch names, pull request titles, and related issue links. If no Jira key exists, use the same structure for a GitHub issue, repository-local proposal, or direct request.

## Agent-ready fields

Use these fields when a work item may be implemented or reviewed by Codex, OpenCode, or another coding agent.

### Required for implementation work

| Field | Purpose |
|-------|---------|
| `Goal` | Describes the intended outcome in one clear statement. |
| `Acceptance criteria` | Defines the observable conditions that prove the work is complete. |
| `Scope` | Lists what the work includes. |
| `Out of scope` | Lists what must not be changed. |
| `OpenSpec required` | States whether a behavior contract is needed before implementation. |
| `Implementation slices` | Splits the work into independently owned slices. |
| `Validation` | Names the expected repository-specific checks. |
| `Branch` | Identifies the base branch, working branch, and preferred lane when known. |
| `Do not touch` | Protects files, modules, workflows, packages, or behavior that must stay unchanged. |

These fields prevent each agent session from needing a large custom prompt. The Jira issue should contain enough routing context for an agent to find the right repository, understand the boundaries, choose the correct lane, validate the change, and hand off cleanly.

## Jira as the work router

Jira should answer these questions before implementation starts:

- What outcome is requested?
- What is the acceptance criteria?
- What is in scope?
- What is out of scope?
- Is OpenSpec required?
- Which implementation slices exist?
- Which validation commands or checks are expected?
- Which branch should own the work?
- Which files or behavior must not be touched?

When `Implementation slices` lists more than one slice, route each slice through the [agent lane model](agent-lanes.md). The operating rule is one mutating agent, one branch, one slice.

## Epic template

Use this format for epics:

```markdown
## Overview

## Scope

## Out of Scope

## Success Metrics

## Resources
```

### Epic guidance

- `Overview` should explain the business or technical goal.
- `Scope` should describe what is included.
- `Out of Scope` should describe what is explicitly excluded.
- `Success Metrics` should describe how the epic will be judged complete.
- `Resources` should list references, links, or supporting material.

### Epic example

```markdown
## Overview

We need a standard way to describe and validate work items so documentation, implementation, and review stay aligned.

## Scope

- Jira epics
- Jira stories
- Jira bugs
- Implementation and review subtasks
- Supporting documentation for coding agents and OpenSpec

## Out of Scope

- Repository-specific validation commands
- Release notes
- Pull request templates

## Success Metrics

- New work items use consistent description formats.
- Agents can infer the work item type from headings.
- Implementation slices can be routed without a large custom prompt.

## Resources

- Contributing & Releases
- Agentic delivery
- Agent lanes
```

## Template pages

Use the individual template pages for copy/paste work:

- [Feature story](jira-templates/feature-story.md)
- [Bug](jira-templates/bug.md)
- [Implementation subtask](jira-templates/implementation-subtask.md)
- [Review subtask](jira-templates/review-subtask.md)

## Automation rules

- Use the matching template for the work item type.
- Keep section titles unchanged so people and tools can parse them.
- Default to the bug template only when reproducibility is being requested.
- Use implementation subtasks when one story needs more than one branch or lane.
- Use review subtasks when the work is read-only review or review-gate output.
- Keep repository-specific commands, paths, and branch defaults in the target repository.

## Repository adapters

Put universal standards in this site. Put repo-specific details in the target repository.

| Location | Belongs there |
|----------|---------------|
| This standards site | Work item fields, templates, lane rules, review output, PR expectations |
| Repository adapter | Base branch, exact validation commands, local paths, package commands, tool versions, implementation conventions |
| `AGENTS.md` | The minimum local instructions an agent needs when internet access is unavailable |

## Related pages

- [Contribution workflow](contribution-workflow.md)
- [Agentic delivery](agentic-delivery.md)
- [Agent lanes](agent-lanes.md)
- [Review gates](review-gates.md)
- [Pull request template](pull-request-template.md)
