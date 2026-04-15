---
title: Versioning
description: Semantic versioning rules for repositories and release automation.
---

# Versioning

This page defines the versioning rules used across repositories.

Versioning here follows [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`.

## Core rule

Use semantic versioning unless a repository explicitly documents a different rule.

## Version bumps

- `MAJOR` for breaking changes
- `MINOR` for backward-compatible new features
- `PATCH` for backward-compatible fixes

## Repository behavior

Different repository types may use the same versioning model with different release mechanics.

- Infrastructure and documentation repositories typically release from `main`
- Application repositories may use additional branch management
- Some repositories use GitHub Actions or similar automation to determine release output

## What to keep consistent

- Keep release signals visible in PR titles and merge commits where automation depends on them.
- Do not change version metadata in a way that breaks traceability.
- Document breaking changes clearly.

## Related guidance

- [Contribution workflow](../contribution-workflow.md)
- [Release workflow](../release-workflow.md)
