---
title: Jira review subtask template
description: Copy-ready Jira review subtask template for implementation, security, documentation, and spec reviews.
---

# Jira review subtask template

Use this template when a branch, pull request, OpenSpec change, or documentation update needs a structured review gate.

Review subtasks are read-only unless the issue explicitly assigns a fix.

## Template

````markdown
## Review target

- Repository:
- Pull request:
- Branch:
- Base branch:
- Jira story:
- OpenSpec change, if any:

## Review mode

- [ ] OpenSpec readiness review
- [ ] Implementation review gate
- [ ] Security-focused review
- [ ] UI-focused review
- [ ] Docs-focused review
- [ ] Release or archive review

## Required review guidance

- Repository instructions:
- Jira story acceptance criteria:
- Active OpenSpec change, if any:
- Review gate standard:
- Files or areas to focus on:

## Output required

```text
Must-fix:
- ...

Should-fix:
- ...

Nice-to-have:
- ...

Security concerns:
- ...

Validation:
- Commands run:
- Result:

Ready:
- Yes/No
- Rationale:
```

## Do not touch

- Files, modules, packages, workflows, or behavior that must stay unchanged:
````

## Field guidance

- `Review target` should identify exactly what is being reviewed.
- `Review mode` should identify the risk lens for the review.
- `Required review guidance` should include the source of truth for acceptance criteria and repository rules.
- `Output required` should match the [review gates](../review-gates.md) format.
- `Do not touch` reinforces that review lanes are read-only unless explicitly assigned a fix.

## Related pages

- [Work items](../jira-work-items.md)
- [Review gates](../review-gates.md)
- [Agent lanes](../agent-lanes.md)
