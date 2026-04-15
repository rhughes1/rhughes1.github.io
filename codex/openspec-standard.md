# OpenSpec standard

This file defines the internal contract Codex and OpenSpec should follow when generating or reviewing work.

## Purpose

OpenSpec work should be:

- narrowly scoped
- predictable to review
- aligned with the repository's standards
- testable with the repository's preferred tooling

## Work item source

Work may originate from:

- Jira
- GitHub issues
- direct user requests
- repository-local proposals
- ad hoc tasks from chat or CLI

If a Jira key exists, include it.
If no Jira key exists, keep the same structure and use the best available identifier for the work item.

## Common proposal shape

An OpenSpec proposal should identify:

- what is being changed
- why the change is needed
- what is included
- what is excluded
- how it will be tested
- how it will be documented
- how it will be versioned, if relevant

## Work item types

### Epic

Use when the change is large enough to need a broad plan.

Epic descriptions should include:

- Overview
- Scope
- Out of Scope
- Success Metrics
- Resources

### Story

Use when the change is small enough to complete as one measurable outcome.

Story descriptions should use:

- `As a [persona], I [want to], [so that]`
- Acceptance Criteria

Story descriptions should be SMART:

- Specific
- Measurable
- Achievable
- Relevant
- Time-bound

### Bug

Use when the change fixes incorrect behavior.

Bug descriptions should include:

- Steps to Reproduce
- Expected Results
- Actual Results
- Tooling Versions

## Acceptance criteria

Acceptance criteria should be:

- specific
- measurable
- achievable
- relevant to the work
- time-bound where possible

Acceptance criteria should be written so another engineer or tool can validate the result without extra interpretation.

## Review expectations

Before implementation, OpenSpec should answer:

- What is being changed?
- Why is the change needed?
- What is included?
- What is excluded?
- How will it be tested?
- How will it be documented?
- How will it be versioned?

## Related artifact standards

Use the artifact-specific standard that matches the work.

Examples:

- Terraform module standards
- Ansible playbook standards
- Chef cookbook standards

