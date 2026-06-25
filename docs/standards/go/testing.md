---
title: Go testing
description: Unit, integration, black-box, and deterministic testing standards for Go.
---

# Go testing

Tests are executable documentation. They should explain the supported behavior, fail for one clear reason, and be reliable enough to trust in CI.

## Default approach

- Write tests with Go's standard `testing` package.
- Use standard-library assertions by default.
- Prefer table-driven tests when the behavior has several comparable inputs and outcomes.

## When testify is approved

Use `github.com/go-openapi/testify/assert` and `github.com/go-openapi/testify/require` only when the repository already uses them or the dependency is explicitly approved. This is the preferred assertion helper family when assertion helpers are approved, but the exact helper methods should be copied from existing repository tests.

- Use `require` for setup and preconditions that must stop the test.
- Use `assert` when collecting multiple independent failures in one case improves feedback.

## Test structure

- Name tests after behavior, not implementation details.
- Keep each test focused on one reason to fail.
- Put setup close to the assertion unless a helper makes repeated intent clearer.
- Use `t.Run` for named scenarios in table-driven tests.
- Call `t.Helper()` in reusable test helpers.
- Use `t.Cleanup()` for cleanup that belongs to the test lifecycle.
- Use `t.TempDir()` for file-system tests.

```go
func TestParseConfigRejectsMissingName(t *testing.T) {
    _, err := ParseConfig([]byte(`{"enabled":true}`))

    if !errors.Is(err, ErrMissingName) {
        t.Fatalf("expected ErrMissingName, got %v", err)
    }
}
```

When `github.com/go-openapi/testify` is approved, use the repository's existing `require` or `assert` helpers for equivalent assertions. Avoid checking error strings unless the string is a user-facing contract.

## Parallel tests

Use `t.Parallel()` only when the test and all of its subtests are isolated.

Do not use `t.Parallel()` when the test changes package-level state, environment variables, shared fixtures, current working directory, global clocks, network ports, or mock expectations. `t.Setenv()` must not be used in parallel tests or tests with parallel ancestors. In table-driven tests, copy the loop variable before starting a parallel subtest.

Go 1.22 changed loop variable semantics, but copying the loop variable remains acceptable for compatibility and clarity when repositories support older Go versions.

```go
for _, tc := range tests {
    tc := tc
    t.Run(tc.name, func(t *testing.T) {
        t.Parallel()

        got := Normalize(tc.input)
        if got != tc.want {
            t.Fatalf("Normalize() = %q, want %q", got, tc.want)
        }
    })
}
```

## Black-box tests

Prefer black-box tests for package APIs.

Use a separate package, such as `feature_test`, when the test should behave like an external consumer. This prevents tests from depending on unexported details and helps keep the package contract honest.

Use same-package tests when you are intentionally validating internal behavior that should not become public API.

## Isolation

- Do not share mutable state between tests.
- Do not make tests depend on execution order.
- Avoid package-level fixtures that tests mutate.
- Clean up resources after each test.
- Keep environment variable changes scoped with `t.Setenv()`.
- Keep test data small and local to the package unless it is reused deliberately.

## Stability

- Do not use sleeps as synchronization.
- Prefer channels, contexts, fake clocks, polling with deadlines, or explicit readiness checks.
- Avoid assertions that depend on map iteration order, wall-clock timing, or external service timing.
- Run race-sensitive code with `go test -race` when changing concurrency.
- Treat flaky tests as production defects in the test suite.

## Mocks and fakes

Prefer real implementations, small fakes, or in-memory substitutes over broad mocks.

Use mocks only when they make the boundary clearer or avoid a slow or unsafe dependency. If a mock has expectations, assert those expectations so the test verifies the interaction it depends on.

Use this preference order:

1. real implementation
2. in-memory fake
3. focused stub
4. small interface seam
5. mock with asserted expectations

## Integration tests

Use integration tests when behavior depends on external systems or cross-package wiring.

- Keep integration tests separate from fast unit tests.
- Use `//go:build integration`, naming, or CI job separation so slow tests are intentional.
- Put build constraints near the top of the file before the `package` declaration.
- Use `testcontainers` for dependencies such as PostgreSQL or Redis only when the repository already uses it or the dependency is explicitly approved.
- Avoid relying on shared developer or CI infrastructure for ordinary test runs.
- Document required credentials or services in the test package or repository docs.

## Coverage expectations

Coverage is a signal, not the goal.

Prioritize coverage for:

- error handling paths
- input validation
- concurrency and cancellation behavior
- public package contracts
- security-sensitive decisions
- serialization, parsing, and compatibility boundaries

Do not add brittle tests only to increase a percentage. A valuable test catches realistic regressions and explains expected behavior.

## Review checklist

- Does the test fail for one clear reason?
- Is the test deterministic without sleeps?
- Does the test clean up files, environment variables, goroutines, and external resources?
- Does the assertion describe behavior a caller cares about?
- Would a new maintainer understand the feature by reading the test?

## Validation commands

Use the repository's Makefile, task runner, or CI validation command when one exists. Otherwise, use the narrowest useful command while iterating, then run the repository's normal validation before review.

- Use the repository formatter command when present; otherwise run `gofmt` and `goimports` before review.
- Use `go test ./...` for normal package validation.
- Use `go test -race ./...` when changing concurrency, shared state, or cancellation behavior.
- Use `go test ./... -run TestName` for focused local iteration.
- Use `go vet ./...` when the repository includes it in normal validation.
