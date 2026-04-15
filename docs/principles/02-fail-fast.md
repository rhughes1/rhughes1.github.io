# 2 · Fail Fast to Succeed Faster

> It is important to fail fast and recover just as quickly. By setting up your framework for iterations and feedback loops, you can quickly identify and address issues before they become larger problems.

---

## The Idea

Failure is not the enemy. Slow, invisible failure is. A system that fails loudly and immediately gives you something to work with. A system that degrades silently for weeks gives you a crisis.

The goal is not to eliminate failure — it is to compress the feedback loop so that failure surfaces early, is understood quickly, and is recovered from before it compounds.

This principle applies at every layer: a unit test that fails in two seconds is more valuable than an integration test that takes twenty minutes to tell you the same thing. A Terraform plan that fails on a policy violation before touching infrastructure is more valuable than a rollback after a broken apply.

---

## What This Looks Like In Practice

### Pipeline Design

- **Fast gates first** — linting, unit tests, and security scans run before anything that provisions or deploys
- **Parallel stages** where possible to reduce total feedback time
- **Short-circuit on failure** — no point running the next stage if the previous one failed
- Every pipeline has a defined rollback path before it is considered complete

### Infrastructure

- Health checks are defined at deploy time, not added later
- Rolling deployments with automatic rollback on failed health checks
- Canary or blue-green patterns for any change that affects a stateful service
- Terraform workspaces and targeted applies for isolating blast radius during changes

### Application Code

- Errors are returned, not swallowed
- Retry logic has explicit limits and backoff — infinite retries are not resilience, they are a queue building up
- Circuit breakers on external service dependencies

---

## The Enforced Standard

!!! tip "Design principle"
    Before any pipeline is considered done, answer: **what happens when it fails, and how does a developer know within five minutes?**

---

## Related Principles

- [Principle 3 — Testing](03-testing.md): Tests are the primary feedback loop
- [Principle 8 — Observability](08-observability.md): You cannot fail fast if you cannot see the failure
