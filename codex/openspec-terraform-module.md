# OpenSpec standard: Terraform modules

This file defines the Terraform-specific OpenSpec contract. It builds on `codex/openspec-standard.md` and the repository's Terraform standards.

## Purpose

Terraform module work should be:

- narrowly scoped
- predictable to review
- aligned with the repository's standards
- testable with native Terraform testing first

## Work item source

Work may originate from Jira, GitHub issues, direct requests, or repository-local proposals.

If a Jira key exists, include it.
If no Jira key exists, keep the proposal self-contained and use the best available work item identifier.

## Required artifact shape

An OpenSpec Terraform module proposal should identify:

- module name
- module purpose
- owning provider or platform
- inputs and outputs
- examples
- tests
- versioning expectations
- release or registry expectations, if relevant

## Naming rules

Follow the repository Terraform naming standard:

- `terraform-<provider>-<function>`
- `terraform-<provider>-<function>-<technology>`
- `terraform-<provider>-<technology>`

Management repositories should continue to use the `-mgmt` suffix where applicable.

## Structure expectations

Terraform module work should account for the standard module layout:

- `main.tf`
- `variables.tf`
- `outputs.tf`
- `versions.tf`
- `README.md`
- `examples/`
- `tests/`

If the module needs additional files, justify them explicitly in the proposal.

## Testing expectations

Use Terraform native testing by default.

- Prefer `terraform test`
- Use example-driven tests when possible
- Use provider mocks and overrides to keep tests deterministic
- Use Terratest only for deeper integration cases

## Documentation expectations

The proposal should state how the module will be documented.

Minimum expectations:

- module purpose
- usage example
- input and output documentation
- version constraints
- testing guidance

## Versioning expectations

The proposal should define how versioning will be handled.

Use explicit version constraints and avoid loose selection. Document any breaking change expectations up front.

## Acceptance criteria expectations

If the module change is tied to a story or other work item, the acceptance criteria should be SMART and measurable.

Minimum expectations:

- specific module boundary
- measurable validation steps
- achievable scope
- relevant to the repository or product
- time-bound delivery expectation

## Review expectations

Before implementation, OpenSpec should answer:

- What module is being changed?
- Why is the change needed?
- What is included?
- What is excluded?
- How will it be tested?
- How will it be documented?
- How will it be versioned?

## Related standards

- `codex/openspec-standard.md`
- `codex/tutorial-standard.md`
- `docs/standards/terraform/index.md`
- `docs/standards/terraform/testing.md`
- `docs/standards/terraform/module-creation-workflow.md`
- `docs/standards/terraform/module-naming-conventions.md`
