---
title: Review gates
description: Standard review gate format for pull requests, specs, security-sensitive changes, and agent output.
---

# Review gates

Use review gates to decide whether a branch, pull request, OpenSpec change, or documentation change is ready to merge or hand off.

Review gates prioritize correctness, security, scope control, validation, and reviewability.

## Required output format

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

Return `Ready: No` when there are must-fix items, unresolved security concerns, or required validation could not be verified for security-sensitive, persistence-sensitive, or public contract-sensitive behavior.

## Blocking checks

Reviewers should check:

- Does the implementation match the Jira acceptance criteria?
- Does the implementation match the active OpenSpec change or repository proposal, if one exists?
- Did the implementation avoid unrelated refactors and scope creep?
- Did required repository validation pass?
- Are public API response shapes, errors, status codes, and validation behavior tested when relevant?
- Are authentication, authorization, and policy checks enforced in the right layer?
- Are secrets, passwords, tokens, session IDs, and sensitive values protected from logs, responses, persistence, and audit metadata?
- Are storage migrations or persistence changes backward-compatible or explicitly documented?
- Are user-facing states covered, including loading, empty, error, permission-denied, populated, and destructive confirmation states when relevant?
- Are docs updated for user-facing behavior changes?
- Are new dependencies justified and reflected in lockfiles or dependency manifests?

## Finding levels

| Level | Meaning |
|-------|---------|
| Must-fix | Blocks merge or handoff. Correctness, security, data safety, validation, or scope issue. |
| Should-fix | Important improvement that should be fixed unless explicitly deferred. |
| Nice-to-have | Optional improvement that does not block the current work. |
| Security concerns | Security-specific findings or residual risks. |

## Review subtasks

Use a [review subtask](jira-templates/review-subtask.md) when review work needs its own Jira item, owner, or validation notes.

Review subtasks are read-only unless explicitly assigned a fix.

## Related pages

- [Work items](jira-work-items.md)
- [Agentic delivery](agentic-delivery.md)
- [Pull request template](pull-request-template.md)
