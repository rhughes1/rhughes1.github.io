---
title: Terraform OpenSpec
description: Optional OpenSpec workflow guidance for Terraform repositories.
---

# Terraform OpenSpec

OpenSpec is an optional workflow for Terraform repositories that want explicit proposal and spec files alongside the code.

Use OpenSpec when a repository benefits from a written proposal phase before implementation. Do not use it as a replacement for the standards in this site. The standards remain the source of truth.

## Canonical references

- [Terraform module standards](modules.md)
- [Module creation workflow](module-creation-workflow.md)
- [Branching and releasing](../../contributing-releases/index.md)
- [Contribution workflow](../../contributing-releases/contribution-workflow.md)
- [pre-commit policy](../../developer-setup/prerequisites/pre-commit.md)
- [Terraform testing](testing.md)
- [Release workflow](../../contributing-releases/release-workflow.md)

## When to use OpenSpec

Use OpenSpec only when a Terraform repository explicitly opts in.

- The repository should contain proposal and spec files.
- Module behavior specs stay in the repository that owns the module.
- Repository proposals must state how the change complies with the canonical Terraform standards before implementation starts.

## What OpenSpec does not change

- Branch names still use the established Jira-aware format.
- Pre-commit still runs before pull requests are opened.
- Merge commits still use conventional commit messages when release automation depends on them.
- Terraform tests still prefer local, mock-based execution and example-driven fixtures where possible.
