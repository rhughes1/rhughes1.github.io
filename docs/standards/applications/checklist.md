---
title: Service checklist
description: Compact review and generation checklist for application services, REST APIs, and OpenAPI contracts.
---

# Service checklist

Use this checklist before coding, before review, and before merging application service changes.

## Before coding

- Inspect the existing repository layout, framework choices, configuration style, logging fields, test patterns, API routes, and OpenAPI documents.
- Follow the branch model in the repository's `CONTRIBUTING.md`; otherwise use the shared [contribution workflow](../../contributing-releases/contribution-workflow.md).
- Confirm the supported language and runtime versions.
- Confirm whether the repository already uses OpenAPI validation, code generation, request validation, structured logging, tracing, metrics, health checks, or task runners.
- Prefer the smallest change that fits the existing design.
- Do not introduce new dependencies, frameworks, generators, databases, queues, caches, runtime services, global state, or background workers without approval.

## Twelve-factor checklist

- Configuration is externalized and documented.
- Required configuration fails fast during startup.
- Dependencies are declared in the repository's standard manifest.
- Build, release, and run concerns are separate.
- Runtime behavior does not depend on local durable disk state.
- Logs are structured and written to stdout or stderr.
- Health, readiness, or equivalent operational checks exist for network services.
- Shutdown, cancellation, and timeout behavior are explicit.
- Admin tasks are repeatable one-off commands or jobs.

## REST API checklist

- Paths are resource-oriented and use plural nouns for collections.
- HTTP methods match behavior.
- Path parameters identify resources.
- Query parameters handle filtering, sorting, pagination, and field selection.
- Request bodies use stable field names and exclude server-managed fields unless explicitly supported.
- Response bodies are documented, predictable, and safe to expose.
- Error responses use the standard `error.code`, `error.message`, `error.details`, and `error.request_id` shape where applicable.
- Validation failures identify all client-fixable fields.
- Status codes are consistent and documented.
- Authentication and authorization behavior is explicit.
- Idempotency is documented for retryable unsafe operations.

## OpenAPI checklist

- Every REST API has an OpenAPI document.
- API behavior changes update OpenAPI in the same pull request.
- Every operation has an `operationId`, `summary`, parameters, responses, and security requirements when applicable.
- Request and response bodies use reusable schemas.
- Common errors use reusable response and schema components.
- Examples cover successful requests, successful responses, validation failures, and common authorization or not found failures.
- Examples contain no secrets, production data, stack traces, SQL errors, package names, hostnames, or internal file paths.
- OpenAPI validation runs in CI when practical.

## Testing checklist

- Successful API paths are tested.
- Malformed JSON and invalid request bodies are tested.
- Invalid query parameters are tested.
- Missing authentication is tested when authentication is required.
- Forbidden access is tested when authorization applies.
- Not found behavior is tested for resource-specific operations.
- Conflict behavior is tested when uniqueness or state transitions apply.
- Status codes and response body shapes are asserted.
- Configuration startup failure is tested where practical.
- Shutdown, cancellation, timeout, retry, or idempotency behavior is tested when changed.

## Before review

- Run the repository's normal formatter, linter, test, and contract validation commands when they exist.
- Confirm OpenAPI and implementation behavior match.
- Confirm examples are realistic, safe, and schema-valid.
- Confirm logs and errors do not expose secrets or internal implementation details.
- Confirm new dependencies or runtime services have approval.
- Confirm operational changes are documented in the pull request.

## For automated coding tools

- Inspect the repository before generating code.
- Preserve local conventions over generic examples.
- Do not add dependencies, frameworks, generators, runtime services, global state, or background workers without approval.
- Do not generate action-oriented REST paths when resource-oriented paths and HTTP methods can express the behavior.
- Update tests and OpenAPI when API behavior changes.
- Include good request, response, and error examples in the contract or documentation.
- Show which validation commands were run.
- Call out validation that could not be run.
