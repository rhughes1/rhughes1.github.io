# 9 · Metrics

> Define baseline metrics. What gets measured gets done.

---

## The Idea

Observability gives systems a voice. Metrics are what you listen for.

An engineering team without defined metrics is operating on instinct and anecdote. Instinct is not reproducible, and anecdote is not defensible. When management asks whether the system is improving, the answer cannot be "we think so." It needs to be a number with a trend.

The same logic applies within the team. Without a baseline, there is no way to know whether a change made things better or worse. Metrics are not bureaucracy — they are the mechanism by which engineering work becomes legible to everyone who depends on it.

---

## What This Looks Like In Practice

### System Metrics

- **Availability** — uptime percentage, measured over a rolling 30-day window
- **Error rate** — percentage of requests resulting in 5xx responses
- **Latency** — p50, p95, p99 response times per service
- **Deployment frequency** — how often changes reach production
- **Mean Time To Recovery (MTTR)** — how long it takes to recover from an incident

### Infrastructure Metrics

- Resource utilization (CPU, memory, disk) with defined thresholds for alerting
- Cost per environment tracked monthly with anomaly alerting
- Drift detection — how often Terraform state diverges from live infrastructure

### Pipeline Metrics

- Build success rate and average build duration per pipeline
- Test coverage percentage tracked over time
- Security finding counts tracked per category (critical, high, medium)

### Reporting

- Key metrics are surfaced in a dashboard accessible to anyone — not just the engineering team
- Alerts are defined for metrics that cross defined thresholds
- Monthly reviews compare current metrics against the established baseline

---

## The Enforced Standard

!!! warning "The question"
    Before any new system goes to production: what are the three most important metrics that indicate this system is healthy? If you cannot answer that, the system is not ready.
