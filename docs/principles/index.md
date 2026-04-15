# Engineering Principles

These ten principles are the foundation of every decision made here — from how a Terraform module is structured to how a CI/CD pipeline is designed. They are not a checklist. They are the lens through which every architectural tradeoff gets evaluated.

They exist because good engineering is rarely about knowing the right answer. It is about having a consistent framework for finding it.

---

| # | Principle | In One Line |
|---|-----------|-------------|
| 1 | [Prioritize Security](01-security.md) | Security is built in, not bolted on |
| 2 | [Fail Fast](02-fail-fast.md) | Fail early, recover faster |
| 3 | [Testing](03-testing.md) | Build the test first |
| 4 | [Repeatability & Portability](04-repeatability.md) | If you do it twice, it belongs in code |
| 5 | [No Object Left Unmanaged](05-no-object-unmanaged.md) | Everything has a lifecycle |
| 6 | [Readable Code](06-readable-code.md) | Write for the next person |
| 7 | [Agnostic](07-agnostic.md) | Best tool for the job, even if it changes |
| 8 | [Observability](08-observability.md) | Give everything a voice |
| 9 | [Metrics](09-metrics.md) | What gets measured gets done |
| 10 | [Teamwork](10-teamwork.md) | Consume what others built, better |

---

!!! quote "The underlying idea"
    A codebase without principles is a codebase that reflects whoever touched it last. These principles ensure that regardless of who writes it, the output is consistent, secure, and built to last.
