# 1 · Prioritize Security

> Security will be incorporated into the pipeline as it is being built. The earlier it is introduced, the less likely it will be forgotten.

---

## The Idea

Security is not a phase at the end of a project. It is not a ticket assigned to a separate team after the code is written. It is a constraint that shapes every decision from the moment a repository is created.

The cost of fixing a security issue grows exponentially the later it is found. A misconfigured IAM policy caught in a pre-commit hook costs nothing. The same misconfiguration caught after a production incident costs significantly more — in time, trust, and sometimes compliance standing.

This is the core argument for [Shift Left Security](https://orca.security/resources/blog/what-is-shift-left-security/){:target="_blank"} — move security checks as early in the development lifecycle as possible.

---

## What This Looks Like In Practice

### In Infrastructure (Terraform)

- Static analysis with **Checkov** or **tfsec** runs in CI before any `plan` is applied
- No hardcoded credentials — ever. All secrets flow through Vault
- IAM policies follow least privilege by default; permissive policies require explicit justification in code comments
- Every module has a `security_considerations` section in its README

### In CI/CD Pipelines

- Secret scanning (e.g., **Gitleaks**, **Trufflehog**) runs on every pull request
- Dependency vulnerability scanning runs on every build
- Policy-as-code via **Hashicorp Sentinel** enforces compliance rules before infrastructure changes are applied
- Pipeline credentials are short-lived and scoped to the specific job

### In Application Code

- No credentials in environment variables that aren't sourced from a secrets manager
- Vault dynamic secrets are preferred over static credentials wherever a database or service supports it
- Container images are scanned before pushing to any registry

---

## The Enforced Standard

!!! danger "Non-negotiable"
    A pipeline that does not include security scanning is an incomplete pipeline. Security checks are not optional stages — they are gates. A failing security check blocks the pipeline.

---

## Related Principles

- [Principle 4 — Repeatability & Portability](04-repeatability.md): Security checks are codified, not manual
- [Principle 9 — Metrics](09-metrics.md): Security findings are tracked and trended over time, not just fixed and forgotten
