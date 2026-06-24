---
title: Twelve-factor application practices
description: Practical service design guidance informed by the Twelve-Factor App methodology.
---

# Twelve-factor application practices

These practices are informed by the [Twelve-Factor App](https://12factor.net/) methodology, but this page translates those ideas into the way services should be built, reviewed, and operated here.

The goal is not to quote the original methodology. The goal is to make service behavior predictable across Go, Python, Java, TypeScript, and any other language used to build APIs, jobs, or background processes.

## Intent

A service is not production-ready because it runs on a developer laptop. It is production-ready when it can be configured without code changes, deployed repeatably, observed under failure, stopped safely, and consumed through a documented contract.

## Required practices

- Keep one deployable service tied to one clear codebase and release path.
- Declare dependencies explicitly in the language-native manifest.
- Read environment-specific configuration from the environment or approved secret/configuration systems.
- Treat databases, queues, caches, storage buckets, and third-party APIs as attached resources.
- Separate build, release, and run concerns.
- Keep runtime processes stateless unless state is stored in an approved backing service.
- Bind network services to a port and let the platform route traffic.
- Scale through process replicas, workers, or platform primitives instead of hidden local state.
- Start quickly, shut down gracefully, and handle termination signals.
- Keep local, test, staging, and production behavior as similar as practical.
- Write logs as structured event streams to stdout or stderr.
- Run administrative tasks as explicit, repeatable one-off processes.

## Factor-by-factor standard

| Factor | Standard | Codex behavior |
|--------|----------|----------------|
| Codebase | A deployable service has one source-controlled codebase and one clear release path. | Inspect repository layout before adding packages, binaries, or service entry points. |
| Dependencies | Dependencies are declared in the language-native manifest and locked when the ecosystem supports it. | Do not add dependencies without approval. Update manifests and lockfiles together. |
| Config | Environment-specific values come from environment variables or approved configuration and secret systems. | Do not hard-code environment names, credentials, hosts, ports, feature flags, or API keys. |
| Backing services | Databases, queues, caches, object stores, and external APIs are attached resources. | Read resource addresses from config and keep clients replaceable in tests. |
| Build, release, run | Build artifacts, release configuration, and running processes are separate concerns. | Avoid build-time coupling to production configuration. |
| Processes | Application processes are stateless unless state is stored in an approved backing service. | Do not rely on local disk, in-memory globals, or process affinity for durable behavior. |
| Port binding | HTTP services bind to a configured port and serve requests directly. | Use configured bind addresses and ports instead of hard-coded values. |
| Concurrency | Scale with explicit process, worker, or platform models. | Avoid hidden singleton workers and unbounded background work. |
| Disposability | Processes start fast, stop safely, and drain in-flight work when possible. | Add cancellation, shutdown, and timeout behavior at service boundaries. |
| Dev/prod parity | Environments stay similar enough that failures reproduce without special knowledge. | Avoid dev-only code paths unless they are isolated and documented. |
| Logs | Logs are structured event streams emitted to stdout or stderr. | Do not write application logs to local files unless the repository standard requires it. |
| Admin processes | Migrations, repairs, imports, and backfills run as explicit one-off commands. | Keep admin tasks repeatable, parameterized, and safe to run from automation. |

## Configuration standard

- Configuration keys must be documented near the service or in the repository README.
- Required configuration should fail fast during startup with a clear error.
- Optional configuration should have safe defaults.
- Secrets must never be committed, logged, printed in errors, or included in examples.
- Environment variable names should be stable and predictable.
- Configuration should be read at process startup unless runtime reload is explicitly supported.

Good:

```text
SERVICE_PORT=8080
DATABASE_URL=postgres://...
LOG_LEVEL=info
```

Bad:

```text
prodDatabasePassword=secret
dev_mode=true
host=prod-db-01.internal
```

Why this is bad:

- The names mix casing and conventions.
- The password value is a secret.
- The host value couples the application to one environment.
- `dev_mode` invites behavior that may not match production.

## Dependency standard

- Use the repository's existing dependency manager and lockfile strategy.
- Prefer standard-library functionality when it is clear and sufficient.
- Do not add a framework when a small package-level change is enough.
- Do not add a dependency only to simplify one call site.
- Remove unused dependencies when behavior changes make them unnecessary.
- Explain new runtime dependencies in the pull request.

## Runtime standard

- Services must expose a health endpoint when they handle network traffic.
- Services should expose metrics when they run continuously.
- Request-scoped work should support cancellation and timeouts.
- Background jobs should have clear ownership, retry, and failure behavior.
- Shutdown should stop accepting new work and finish or cancel in-flight work intentionally.

## Logging and observability

- Emit structured logs to stdout or stderr.
- Include stable fields such as `timestamp`, `level`, `service`, `message`, and `request_id` or `trace_id` when available.
- Do not log credentials, tokens, secrets, full request payloads, or sensitive personal data.
- Use metrics to show request rate, error rate, duration, queue depth, retry count, and other service-specific signals.
- Use traces when work crosses service, database, queue, or external API boundaries.

## Validation checklist

- Configuration is externalized and documented.
- Required configuration fails fast during startup.
- Dependencies are declared and justified.
- The service does not depend on local durable disk state.
- The service writes structured logs to stdout or stderr.
- The service has health, readiness, or equivalent operational checks.
- The service handles shutdown and cancellation.
- Administrative tasks are explicit commands or jobs.
- Tests cover configuration, startup failure, shutdown, and external resource boundaries where practical.
