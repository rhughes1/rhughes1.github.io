---
title: Go comments
description: Commenting and godoc standards for Go code.
---

# Go comments

Comments should preserve intent that names and structure cannot express. Prefer clearer code over a comment that explains confusing code.

## General philosophy

- Comment why the code exists, why an unusual choice is safe, or what constraint must be preserved.
- Do not comment obvious operations, repeated variable names, or standard language constructs.
- Keep comments brief and current.
- Update or delete comments when behavior changes.
- Use complete sentences for exported godoc.

## Exported identifiers

Document exported packages, types, functions, methods, constants, and variables.

Godoc comments should start with the exported identifier name and describe the contract that callers can rely on.

Use `doc.go` for package comments when the package needs more than a short package declaration comment. Add `ExampleXxx` tests when an executable example is the clearest documentation. Examples should compile and run as tests.

```go
// Store persists and retrieves account records.
type Store interface {
    SaveAccount(ctx context.Context, account Account) error
}

// ParseConfig decodes a JSON configuration document and validates required fields.
func ParseConfig(data []byte) (*Config, error) {
    // ...
}
```

## Comment when it helps

Add comments for:

- non-obvious business rules
- security-sensitive decisions
- compatibility constraints
- concurrency ownership and shutdown behavior
- error handling that intentionally masks, joins, or rewrites errors
- performance tradeoffs confirmed by profiling
- temporary workarounds with an owner or removal condition

```go
// Keep this timeout below the load balancer idle timeout so callers receive
// a service error instead of a dropped connection.
ctx, cancel := context.WithTimeout(ctx, 25*time.Second)
defer cancel()
```

## Do not comment noise

Avoid comments that restate the code.

```go
// Bad: get the user ID.
userID := request.UserID

// Bad: loop over accounts.
for _, account := range accounts {
    process(account)
}
```

If a reader needs a comment to understand what a block does, first try to improve the code:

- extract a named function
- rename a variable
- split a compound condition
- reduce nesting with early returns
- introduce a small type for a repeated concept

## TODO comments

Use `TODO` only for intentional follow-up work.

A TODO should include a Jira work item ID. If no Jira work item exists, the TODO should include an owner or removal condition plus enough context to fix safely.

Every TODO should explain:

- what needs to change
- why it cannot be done now
- the Jira work item ID, owner, or removal condition

```go
// TODO(PROJ-123): Remove legacy token parsing after all clients send scoped tokens.
```

If no Jira work item exists, make the TODO actionable without external context.

```go
// TODO: Replace the temporary retry limit with the value from service config
// after config loading is available in this package.
```

Do not leave stale TODOs as historical notes. Delete them, link them to Jira, or convert them into proper documentation.

## Review checklist

- Does each exported identifier have useful godoc?
- Does the comment explain intent, constraints, or surprising behavior?
- Could clearer naming or structure remove the need for the comment?
- Is every TODO actionable and current?
- Would the comment still be true after the surrounding code changes?
