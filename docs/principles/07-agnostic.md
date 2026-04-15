# 7 · Agnostic

> Every tool should be implemented and designed around the problem it is solving, not the technology it is built on. You should be able to switch out technologies or tools without having to rewrite your entire codebase.

---

## The Idea

Technology changes. The problem it solves usually does not.

A codebase that is deeply entangled with a specific vendor, framework, or tool accumulates a hidden cost that only becomes visible when that tool becomes expensive, unsupported, or simply the wrong fit. The cost of switching compounds the longer you wait.

Agnosticism is not about avoiding commitment — it is about making commitments at the right layer. Commit to outcomes, to interfaces, to the problem being solved. Stay flexible on the specific implementation.

This does not mean using the lowest common denominator. It means designing systems where the seams between components are clean enough that swapping one component does not require rebuilding everything around it.

---

## What This Looks Like In Practice

### Infrastructure

- Terraform abstracts the cloud provider. Modules are designed around the resource type and behavior, not around AWS-specific or Azure-specific naming conventions
- Where possible, interfaces between services use standard protocols (HTTP, gRPC, AMQP) rather than proprietary SDKs
- Vault abstracts secret storage. Applications ask Vault for a credential — they do not care whether Vault is backed by AWS Secrets Manager, a database, or a PKI

### Applications

- Configuration is externalized — applications read from environment, config files, or a secrets manager. They do not have opinions about where the config lives
- Logging outputs structured JSON to stdout. The log aggregator (Cloudwatch, Datadog, Splunk) is the concern of the platform, not the application

### Pipelines

- Pipeline logic lives in reusable scripts, not in the CI platform's DSL. A pipeline should be portable to a different CI tool with minimal rework

---

## The Enforced Standard

!!! info "The question to ask"
    If the team decided tomorrow to switch from AWS to Azure, or from Jenkins to GitHub Actions, what would break? The answer to that question is your lock-in inventory. Minimize it.
