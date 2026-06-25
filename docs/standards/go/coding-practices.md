---
title: Go coding practices
description: Package, naming, error handling, interface, and concurrency standards for Go.
---

# Go coding practices

Write Go that is simple, explicit, and easy to operate.

## Formatting and style

- Use `gofmt` and `goimports`; do not hand-format imports or alignment.
- Use `MixedCaps` or `mixedCaps`, not underscores, for multiword names.
- Keep common initialisms consistent, such as `URL`, `HTTP`, `ID`, and `JSON`.
- Prefer clear names over short names outside of tight local scopes.
- Keep long expressions readable by extracting named values rather than adding explanatory comments.

```go
// Prefer this.
requestURL := baseURL.ResolveReference(path)

// Avoid this.
requestUrl := baseUrl.ResolveReference(path)
```

## Package design

- Keep package names short, lowercase, and singular when possible.
- Avoid package names that repeat the repository or directory name without adding meaning.
- Keep public APIs intentionally small.
- Put tests in an external `_test` package when you want the test to act as the first consumer of the package API.
- Avoid global mutable state. If state is required, pass dependencies explicitly.
- Use `cmd/` for binaries when a repository contains command-line tools or service entry points.
- Use `internal/` for code that must not become a public package contract.
- Keep package-level behavior cohesive. A package should have one clear reason to exist.
- Avoid generic dumping grounds such as `pkg/common` or `pkg/utils` unless the repository already has that convention.

Good packages make their supported behavior obvious from the exported surface. If the package needs a long explanation to describe what belongs in it, split the boundary or rename it.

In monorepos, follow the existing module and workspace boundaries. Do not move shared business logic into `cmd/`; keep `cmd/` focused on process wiring and entry points.

## Functions and methods

- Keep functions small and focused on one behavior.
- Prefer early returns over deeply nested control flow.
- Put the common path near the left edge of the screen.
- Return concrete types unless callers need abstraction.
- Accept interfaces when the caller benefits from substitutability.
- Return interfaces only when the implementation must be hidden.

Consumer packages should own small interfaces when they need substitutability.

```go
type accountLoader interface {
    LoadAccount(ctx context.Context, id string) (Account, error)
}
```

Do not create broad provider interfaces before a real consumer needs them.

## Errors

- Always handle returned errors.
- Return errors as the final return value.
- Include operation and relevant identifiers in error messages.
- Wrap errors with `%w` when callers may need to inspect the cause.
- Design custom error types so callers can use `errors.Is` and `errors.As` when they need branching behavior.
- Do not make callers match error strings.
- Avoid wrapping errors at boundaries where the caller should not depend on the underlying cause.
- Use `panic` only for programming errors or impossible states, not ordinary control flow.

```go
data, err := os.ReadFile(path)
if err != nil {
    return nil, fmt.Errorf("read config %q: %w", path, err)
}
```

Error messages should still be useful when logged far from the failure. `failed` is not enough; include what failed and the value that identifies the failing operation.

### Error contracts

- Use sentinel errors when callers need a stable condition they can check with `errors.Is`.
- Use typed errors when callers need structured fields or category-specific behavior.
- Wrap errors across package boundaries only when exposing the underlying cause is part of the package contract.
- Avoid testing exact error strings unless the string is a user-facing contract.
- Keep internal implementation details out of public error contracts.
- Avoid logging and returning the same error unless the log adds distinct operational context.
- Use `errors.Join` only when callers need to inspect multiple failures.

```go
var ErrMissingName = errors.New("missing name")

func ParseConfig(data []byte) (*Config, error) {
    var cfg Config
    if err := json.Unmarshal(data, &cfg); err != nil {
        return nil, fmt.Errorf("parse config: %w", err)
    }
    if cfg.Name == "" {
        return nil, fmt.Errorf("parse config: %w", ErrMissingName)
    }
    return &cfg, nil
}
```

Check stable error contracts with `errors.Is`.

```go
if errors.Is(err, ErrMissingName) {
    // handle missing name
}
```

## Context and cancellation

- Pass `context.Context` as the first parameter for request-scoped, job-scoped, or I/O-bound work.
- Do not pass a `nil` context.
- Do not store contexts in structs except for well-justified lifecycle objects.
- Do not use context values as optional parameters.
- Do not commit `context.TODO()` unless there is a documented reason the real context is not available yet.
- Respect cancellation before starting expensive or blocking work.
- Do not use `context.Background()` deep inside request handling code; accept a context from the caller.
- Use deadlines and timeouts at boundaries where work can hang.
- In loops and goroutines, select on `ctx.Done()` or check `ctx.Err()` so cancellation returns promptly.

```go
for {
    select {
    case <-ctx.Done():
        return ctx.Err()
    case item, ok := <-items:
        if !ok {
            return nil
        }
        if err := process(item); err != nil {
            return err
        }
    }
}
```

## Interfaces and composition

- Define interfaces in the package that consumes them.
- Keep interfaces small; one or two methods is often enough.
- Prefer composition over inheritance-like embedding when behavior needs to remain explicit.
- Implement standard library interfaces such as `io.Reader`, `io.Writer`, and `fmt.Stringer` when they make the type easier to use.
- Avoid interface pollution for a single implementation unless a test, boundary, or public contract needs it.

## Concurrency

- Prefer clear ownership of goroutines and shared state.
- Use channels to communicate ownership or completion, not as a default replacement for simple function calls.
- Use `sync.Mutex` when it is the clearest way to protect shared memory.
- Tie goroutine lifetime to a context, wait group, or explicit shutdown path.
- Close channels from the sender side when closure is part of the protocol.
- Avoid unbounded goroutine creation. Use worker pools, semaphores, or bounded queues when fan-out can grow.
- Do not start goroutines without a clear owner, cancellation path, and error handling strategy.
- Use `errgroup` only when the repository already depends on it or the dependency is explicitly approved.
- Stop timers and tickers when they are no longer needed.
- Prefer `time.NewTicker` with `defer ticker.Stop()` over loops that sleep forever.

Concurrency should have an exit story. A reviewer should be able to answer what stops the goroutine, what happens on cancellation, and who owns each channel.

## Data and initialization

- Make zero values useful where practical.
- Use composite literals for structured initialization.
- Avoid `init()` unless package-level registration or unavoidable setup is the clearest option.
- Prefer explicit constructors when a type has required dependencies or validation.
- Profile before optimizing allocation, pooling, or low-level performance details.

## Logging and observability

- Follow the repository's existing logging library and field naming conventions.
- Prefer structured logs for services and background jobs.
- Do not log secrets, tokens, credentials, or sensitive payloads.
- Include stable identifiers that help operators diagnose the failure.
- Do not use `fmt.Println` for library logging.
- Preserve error context so logs remain useful without re-running the code.
- Libraries should usually return errors instead of logging them.
- Services should log at process, request, job, or integration boundaries where action can be taken.
- If a service logs and returns an error, the log should add information that will not be available to the caller.

## Configuration

- Parse configuration at process or package boundaries.
- Validate configuration before starting long-running work.
- Pass typed configuration structs instead of reading environment variables deep in business logic.
- Keep defaults explicit and documented.
- Avoid hidden configuration through context values or package globals.
- Load secrets from approved secret or configuration providers.
- Avoid logging config structs that may contain secrets.

## Security

- Do not hardcode secrets, tokens, credentials, or private endpoints.
- Do not log sensitive values or full request and response payloads by default.
- Validate file paths before reading, writing, or deleting data controlled by a caller.
- Be careful with outbound HTTP clients that accept caller-controlled URLs.
- Use constant-time comparison for secrets and tokens when timing differences matter.
- Avoid `unsafe` unless the performance or interoperability requirement is documented and reviewed.
- Limit the size of untrusted request bodies, files, archives, and parser inputs.
- Validate JSON, YAML, archive, and file inputs before using them.
- Avoid unbounded reads from network, file, or archive sources.

## Generics

- Use generics when they remove duplication across real, repeated type use cases.
- Prefer concrete code for a single type or speculative future reuse.
- Keep type constraints small and readable.
- Do not use generics to hide simple control flow or ordinary data structures.

## Generated code

- Do not edit generated files directly.
- Update the source definition or generator configuration instead.
- Keep regeneration commands documented in the repository.
- Keep `go:generate` commands close to the source definition when that is the repository convention.
- Separate generated code from hand-written code during review when practical.

## Main packages

- Keep `main` packages thin.
- Parse flags, environment, and configuration at the process boundary.
- Wire dependencies in `main`, then hand off behavior to testable packages.
- Avoid putting business logic in `main` unless it is trivial process orchestration.
- Return errors from command logic and call `os.Exit` only at the process boundary.
- Keep user-facing output separate from business logic.

## HTTP clients

- Propagate request contexts into outbound HTTP calls.
- Set timeouts at client construction or call boundaries.
- Avoid production integrations that rely on `http.DefaultClient` unless the repository standard allows it.
- Validate or constrain caller-controlled URLs before making outbound requests.
- Use `http.NewRequestWithContext` for outbound requests that are tied to caller or job cancellation.
- Prefer allowlists or explicit scheme and host validation for caller-controlled URLs.

## Database transactions

- Pass context into database calls.
- Keep transaction ownership clear in the function that begins the transaction.
- Roll back on error and commit only after all required work succeeds.
- Avoid long-running transactions across network calls or user interaction.

## JSON and YAML

- Validate required fields after parsing.
- Reject unknown fields when strict compatibility is required.
- Limit input size before decoding untrusted payloads.
- Keep serialization behavior covered by tests when it is part of an API contract.

## Build constraints

Use build constraints for platform-specific code and keep platform behavior isolated.

```go
//go:build linux
```

Do not hide major product behavior behind build tags without documenting the supported platforms and test coverage.

## Compatibility

Use `any`, `slices`, `maps`, `cmp`, and other newer language or standard-library features only when the repository's `go.mod` version supports them.
