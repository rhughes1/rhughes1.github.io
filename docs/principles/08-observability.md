# 8 · Observability

> What use is creating a system or an application if it cannot speak back to you? Give whatever you build a voice.

---

## The Idea

A system that cannot tell you what it is doing is a system you cannot trust. Observability is not a feature added after a system is in production — it is designed in from the start, for every persona who needs to understand the system's behavior.

The three pillars — logs, metrics, and traces — serve different questions. Logs tell you what happened. Metrics tell you how things are trending. Traces tell you where time was spent across a distributed operation. A well-instrumented system answers all three.

The persona-driven framing matters here. A developer needs different signals than an on-call engineer, who needs different signals than a product manager or an executive. Observability is not about generating data — it is about surfacing the right signal to the right audience.

---

## What This Looks Like In Practice

### Logging

- All applications emit structured JSON logs to stdout
- Log levels are meaningful and consistent: `DEBUG` for development noise, `INFO` for state transitions, `WARN` for recoverable issues, `ERROR` for failures requiring attention
- Logs include a consistent set of fields: `timestamp`, `level`, `service`, `trace_id`, `message`
- No sensitive data (credentials, PII) in logs

### Metrics (Prometheus)

- Every service exposes a `/metrics` endpoint in Prometheus format
- Standard process metrics (CPU, memory, open file descriptors) are collected automatically
- Business-relevant metrics are instrumented explicitly: request rate, error rate, latency (the RED method)
- Dashboards are committed to the repository alongside the service they observe

### Health Checks

- Every service exposes a `/health` endpoint that returns `200 OK` when healthy
- Health checks are registered with Consul for service discovery
- Liveness and readiness are separated where the platform supports it

---

## The Enforced Standard

!!! tip "The standard"
    A service is not production-ready until it has: structured logging, a `/health` endpoint, Prometheus metrics, and at least one dashboard. These are not optional.
