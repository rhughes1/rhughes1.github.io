---
title: Jira bug template
description: Copy-ready Jira bug template for reproducible fixes and regression coverage.
---

# Jira bug template

Use this template when existing behavior is broken, regressed, insecure, misleading, or inconsistent with documented expectations.

Keep the headings unchanged so people and agents can distinguish evidence, expected behavior, scope, and validation.

## Template

```markdown
## Problem

What is wrong?

## Expected behavior

What should happen instead?

## Actual behavior

What happens now?

## Reproduction steps

1. 
2. 
3. 

## Evidence

- Screenshot, log, or error:
- Affected route, module, command, workflow, or page:
- First known bad version, commit, or date, if known:

## Scope

In scope:

- Fix the observed bug.
- Add or update regression coverage.

## Out of scope

- Unrelated refactors.
- New behavior unless explicitly approved.

## OpenSpec required

- Yes / No / Unsure:
- Reason:

## Implementation slices

- Fix:
- Regression tests:
- Docs or release notes:
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

- Files likely involved:
- Reviewer focus:
- Open questions:
```

## Field guidance

- `Problem` should name the failure without guessing at the root cause.
- `Reproduction steps` should be numbered and repeatable.
- `Evidence` should include enough detail to confirm the bug and validate the fix.
- `Scope` should stay focused on the observed bug and regression coverage.
- `OpenSpec required` should be `Yes` when the fix changes intended behavior or a public contract.
- `Validation` should include the checks needed to prove the regression is fixed.

## Related pages

- [Work items](../jira-work-items.md)
- [Review gates](../review-gates.md)
