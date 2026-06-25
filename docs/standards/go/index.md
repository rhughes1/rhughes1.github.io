---
title: Go standards
description: Practical Go coding, testing, and documentation standards.
---

# Go standards

Use these standards when writing, generating, reviewing, or maintaining Go services, libraries, CLIs, tests, and supporting documentation.

The goal is simple Go: small packages, explicit errors, deterministic tests, useful comments, and code that stays readable under incident pressure.

## What lives here

- [Coding practices](coding-practices.md)
- [Testing](testing.md)
- [Comments](comments.md)
- [Checklist](checklist.md)

When building Go services or REST APIs, also follow the language-agnostic [Application standards](../applications/index.md).

## Recommended order

1. Read [Coding practices](coding-practices.md) before designing a package, API, or error model.
2. Use [Testing](testing.md) when adding or changing behavior.
3. Use [Comments](comments.md) during review to decide whether code needs a comment or clearer structure.

## How to apply this standard

This standard is for developers, engineers, managers, and automated coding tools. It defines the default expectations for Go work, but repository-local conventions still matter. Managers can use it to understand review expectations, delivery risk, testing expectations, and maintainability tradeoffs.

Before creating or changing Go code:

- inspect the existing package layout, dependency choices, logging style, and test patterns
- check `go.mod` before using newer language features or standard-library APIs
- preserve established project conventions unless the change intentionally updates them
- avoid introducing new libraries, frameworks, generators, or abstractions without a clear need
- prefer the smallest change that satisfies the behavior and keeps the code reviewable
- document operational or product tradeoffs in the pull request when they affect maintainability, reliability, or support

Approval means one of the following is true:

- the repository already uses the pattern or dependency
- the user explicitly requested it
- a project maintainer accepted it in review or design discussion
- a Jira work item or design note records the decision

## Do not introduce without approval

- new runtime dependencies
- new testing frameworks or assertion libraries
- new code generators
- new background goroutines or worker pools
- new global mutable state
- broad interfaces that are not tied to an immediate consumer
- new logging, configuration, or dependency injection frameworks
- language or standard-library features newer than the repository's `go.mod` version

## Review lens

Review Go changes through two perspectives.

### Senior Go developer

- Is the package boundary small and useful?
- Are errors explicit, wrapped with context, and actionable away from their origin?
- Are interfaces defined by consumers and kept narrow?
- Are goroutines, channels, and cancellation paths bounded and testable?
- Are tests deterministic, isolated, and focused on externally visible behavior?

### Senior technical writer

- Can a new maintainer understand the intent without reading every implementation detail?
- Are headings and examples skimmable?
- Do comments explain why, constraints, or surprising behavior rather than restating code?
- Are names precise enough to reduce the need for comments?
- Does the documentation describe supported behavior rather than implementation trivia?

## Baseline expectations

- Format with `gofmt` and organize imports with `goimports`.
- Prefer ordinary Go over clever abstractions.
- Keep functions and packages focused.
- Pass `context.Context` through request, job, and I/O boundaries.
- Return errors as the final return value and handle them explicitly.
- Prefer table-driven tests where they make cases easier to compare.
- Use comments sparingly, but document exported identifiers and non-obvious behavior.
