---
title: Agentic delivery
description: Cross-repository workflow for routing Jira work through specs, implementation slices, validation, and review gates.
---

# Agentic delivery

Agentic delivery is the operating model for using Jira, OpenSpec, coding agents, branches, validation, pull requests, and review gates without turning each task into a large custom prompt.

This page is repository-neutral. Exact commands, paths, base branches, and local implementation rules belong in the target repository.

## Default flow

```text
Jira issue
→ OpenSpec if required
→ OpenSpec review and fix
→ implementation slices
→ one branch per mutating agent and slice
→ targeted validation
→ pull request
→ review gate
→ merge
→ archive, release notes, or follow-up work
```

## Jira as intake

Jira is the work router. Before implementation starts, the issue should identify:

- Goal or problem
- Acceptance criteria
- Scope
- Out of scope
- OpenSpec requirement
- Implementation slices
- Validation expectations
- Branch guidance
- Do-not-touch boundaries

Use [Work items](jira-work-items.md) and the [Jira template pages](jira-templates/feature-story.md) for the canonical formats.

## OpenSpec as behavior contract

Use OpenSpec or a repository-local proposal process when the change affects behavior, public contracts, security boundaries, persistence, APIs, workflows, or user-visible outcomes.

OpenSpec is not required for every small fix. A repository adapter should define when OpenSpec is mandatory for that repo.

## Slice planning

Split work into slices only when it makes the work safer or easier to review.

Common slices include:

- Spec or proposal
- Backend, API, storage, or infrastructure
- UI or user experience
- Tests or fixtures
- Documentation or examples
- Cleanup or validation fixes
- Review-only work

Each mutating slice should have one branch and one owner.

## One branch per agent and slice

The lane rule is mandatory for parallel work:

```text
One mutating agent, one branch, one slice.
```

This prevents two agents from editing the same files, invalidating each other's assumptions, or mixing unrelated review feedback into one branch.

Use [Agent lanes](agent-lanes.md) when a story has more than one implementation slice or more than one tool may be involved.

## Validation before handoff

Every implementation slice should define validation before work starts.

Validation may include:

- Repository final verification command
- Targeted tests for changed files
- Format or lint checks
- Security or dependency scans
- Documentation build
- Manual verification notes

Do not hard-code validation from this site into every repository. The target repo should define the exact command set.

## Pull request expectations

Pull requests should link the Jira work item and describe:

- What changed
- Why it changed
- What validation ran
- What documentation changed
- Any breaking behavior
- Any deferred follow-up work

Use [Pull request template](pull-request-template.md) for the standard PR description format.

## Review gates

Run a review gate before merge when the change affects behavior, public contracts, security, persistence, workflows, or release quality.

Review gate output should classify findings as:

- Must-fix
- Should-fix
- Nice-to-have
- Security concerns
- Validation
- Ready

Use [Review gates](review-gates.md) for the required review format.

## Merge and archive

Merge only after required validation passes or accepted exceptions are documented.

If the repository uses OpenSpec, archive or sync the completed behavior only after implementation is merged or explicitly accepted. Archive work should be its own task when it can be separated safely.

## Repository adapters

Each repository should keep a small adapter for local details.

Examples of adapter content include:

- Base branch
- Required validation command
- Proposal or OpenSpec path
- Test commands
- Build commands
- Release commands
- Branch examples
- Repo-specific review checks
- Sensitive files or modules to avoid

Agents should read the repository adapter before applying these shared standards.

## Related pages

- [Work items](jira-work-items.md)
- [Agent lanes](agent-lanes.md)
- [Agent tooling](agent-tooling.md)
- [Review gates](review-gates.md)
- [Agent prompt library](agent-prompt-library.md)
