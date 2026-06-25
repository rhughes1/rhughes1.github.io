---
title: Go checklist
description: Compact review and generation checklist for Go changes.
---

# Go checklist

Use this checklist before coding, before review, and before merging Go changes.

## Before coding

- Check `go.mod` for the supported Go version.
- Inspect existing package layout, test style, logging library, and dependency patterns.
- Confirm whether the repository already uses `github.com/go-openapi/testify`, `errgroup`, `testcontainers`, code generators, or task runners.
- Prefer the smallest change that fits the existing design.
- Do not introduce new dependencies, generators, frameworks, global state, or background workers without approval.
- Use the approval definition from the Go standards overview before adding dependencies or changing patterns.

## For automated coding tools

- Inspect the repository before generating code.
- Preserve local conventions over generic examples.
- Do not add dependencies unless they are approved.
- Show which validation commands were run.
- Call out any validation that could not be run.

## While coding

- Keep package boundaries small and cohesive.
- Use `cmd/` for binaries and `internal/` for private implementation.
- Return concrete types unless callers need abstraction.
- Define small interfaces in the consuming package.
- Wrap errors only when the underlying cause is useful to callers.
- Do not make callers or tests match error strings unless the string is a contract.
- Pass `context.Context` first for request-scoped, job-scoped, or I/O-bound work.
- Make goroutine ownership, cancellation, and error handling explicit.
- Return errors from libraries instead of logging them.
- Avoid logging secrets or sensitive payloads.

## While testing

- Prefer standard-library tests unless the repository already uses approved helpers.
- Keep tests deterministic and isolated.
- Use `t.TempDir()`, `t.Setenv()`, and `t.Cleanup()` for scoped resources.
- Avoid sleeps; use readiness checks, fake clocks, contexts, or deadlines.
- Use `t.Parallel()` only for isolated tests.
- Separate integration tests with build tags, naming, or CI jobs.

## Before review

- Run the repository's normal validation command when one exists.
- Use the repository formatter command when present; otherwise run `gofmt` and `goimports` before tests.
- If no repository validation command exists, run `go test ./...`.
- Run `go test -race ./...` for concurrency, cancellation, or shared-state changes.
- Run `go vet ./...` when it is part of repository validation.
- Confirm comments explain intent, constraints, or exported contracts.
- Confirm TODOs include a Jira work item ID, or an owner or removal condition plus enough context to fix safely without one.

## Manager and reviewer summary

Ask for extra context when a Go change includes:

- new dependencies or generated code
- new goroutines, worker pools, or shared state
- public API or error contract changes
- integration test requirements
- operational logging or observability changes
- security-sensitive input, credentials, paths, or outbound HTTP calls
