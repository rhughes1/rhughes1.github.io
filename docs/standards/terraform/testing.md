---
title: Terraform testing
description: Testing guidance for Terraform modules and deeper integration cases.
---

# Terraform testing

Use Terraform's native testing framework for module validation by default.

Prefer `terraform test` with example-driven tests, provider mocks, and overrides for fast, deterministic coverage. Use Terratest only when you need deeper integration or system-level validation that native Terraform tests do not express cleanly.

## Testing model

Use the following order of preference:

1. Native Terraform tests for module validation
2. Mocked providers and overrides for deterministic behavior
3. Terratest for deeper integration and system-level scenarios

## Native Terraform testing

Terraform's native testing framework is the default choice for module testing.

Use it to validate:

- module inputs and outputs
- resource and data source behavior
- plan shape and expected changes
- example configurations
- common module scenarios

### Why this is preferred

- Fast to run
- Declarative and easy to read
- Native to the Terraform CLI
- Easier to keep close to the module code
- Better aligned with module-focused testing than external harnesses

### Good fit for native tests

- A module should render the expected resources
- A module should expose the expected outputs
- A module should handle common input combinations correctly
- A module should validate default behavior and key edge cases

### Less suitable for native tests

- Long-running cross-system workflows
- Tests that require orchestration outside Terraform
- End-to-end environment bootstrapping
- Complex behavior that depends on external services or event timing

## Test layout

Keep Terraform tests close to the module they validate.

A common pattern is:

```text
module/
├── main.tf
├── variables.tf
├── outputs.tf
├── versions.tf
├── examples/
│   ├── default/
│   └── complete/
└── tests/
    ├── default.tftest.hcl
    └── complete.tftest.hcl
```

Use examples to show supported module usage, and use tests to validate those examples.

## Example-driven tests

Prefer tests that exercise module examples when the example matches the scenario being validated.

Example test:

```hcl
run "default" {
  command = plan

  module {
    source = "./examples/default"
  }
}
```

Example module usage:

```hcl
module "metadata" {
  source  = "app.terraform.io/org/metadata/generic"
  version = "~> 1.1"

  environment     = local.tags.environment
  account_group   = local.tags.account_group
  product         = local.tags.product
  business_unit   = local.tags.business_unit
  charge_code     = local.tags.charge_code
  customer        = local.tags.customer
  service_name    = local.tags.service_name
  additional_tags = local.tags
}

module "resource_group" {
  source = "../../"

  tags = module.metadata.tags
}
```

## Mocking and overrides

Use mocks and overrides to keep tests local, fast, and deterministic.

### Use mocks when

- the test only needs structure or shape
- the provider would otherwise require live credentials
- the scenario depends on static data
- the module test should not create real cloud resources

### Prefer these native testing features

- mocked providers
- overridden resources
- overridden data sources
- overridden modules
- example-based inputs

### Avoid

- hardcoded cloud credentials in test files
- tests that depend on mutable live infrastructure
- unit-style module tests that require a real cloud account
- Terratest when native Terraform tests are sufficient

### Good test characteristics

- deterministic
- isolated
- repeatable
- focused on one behavior
- easy to understand from the test file alone

### Bad test characteristics

- requires live infrastructure for ordinary module validation
- depends on manual setup
- produces different results on repeated runs
- tests too many unrelated behaviors at once

## Version pinning

Use explicit version constraints for providers and modules.

Avoid loose or unbounded version selection in tests and module examples. Keep version requirements aligned with the repository's supported Terraform release and module lifecycle.

### Guidance

- Pin provider versions intentionally
- Use compatibility ranges rather than floating everything
- Keep the test framework aligned with the Terraform version supported by the repository
- Update constraints through normal review and release processes

## Terratest

Use Terratest only for deeper validation cases.

Terratest is appropriate when you need:

- cross-system orchestration
- deeper integration validation
- behavior that native Terraform tests do not express well
- verification that depends on external systems beyond Terraform's test framework

Do not use Terratest as the default module test framework when native Terraform testing can validate the behavior.

### Terratest guidance

- keep Terratest suites narrow and intentional
- isolate them from ordinary module tests
- use them only for scenarios that genuinely need a Go-based harness
- document why native Terraform tests were not sufficient

## CI guidance

Run native Terraform tests in CI for module validation.

Recommended CI behavior:

- run `terraform test` as part of module validation
- keep tests local and deterministic where possible
- use secrets only when a test truly needs them
- separate deeper Terratest jobs from ordinary module validation
- make CI failures easy to trace back to a single test case

## Authentication

If a test needs live provider access, handle authentication outside the test file and keep the test itself focused on assertions.

### General rules

- Do not hardcode secrets in test files
- Prefer environment variables or CI-injected credentials
- Keep auth setup separate from the validation logic
- Use the smallest credential scope possible

## Recommended workflow

1. Write or update the example configuration
2. Add a native Terraform test for the scenario
3. Use mocks or overrides to keep the test deterministic
4. Run `terraform test` locally
5. Add Terratest only if the scenario truly needs it
6. Validate in CI

