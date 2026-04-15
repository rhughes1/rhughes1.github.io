---
title: Terraform OpenSpec repo conventions
description: Local conventions for Terraform repositories that opt into OpenSpec.
---

# Terraform OpenSpec repo conventions

This page defines the local structure for Terraform repositories that choose to use OpenSpec.

## Suggested layout

```text
proposal.md
spec/
  module-behavior.md
  tests.md
examples/
```

The exact filenames can vary, but the intent should stay the same:

- `proposal.md` describes the change and the rationale
- module behavior specs define the expected behavior of the module
- module behavior specs live in the Terraform repository that owns the module
- `examples/` contains runnable configurations that can also support testing

## Proposal rule

Every proposal should explicitly say whether the change complies with:

- Terraform module standards
- branching and releasing rules
- pre-commit policy
- GitHub Actions standards

If the proposal cannot satisfy one of those standards, the proposal should call that out before implementation begins.

## Keep it local

Do not duplicate the global standards inside each Terraform repo.

The repo-local spec should answer only:

- what this module is supposed to do
- what inputs, outputs, and behaviors matter
- what acceptance criteria prove the change is complete
