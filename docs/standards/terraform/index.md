---
title: Terraform Standards
description: Module design, naming, state, testing, and delivery conventions for Terraform.
---

# Terraform Standards

These standards are the reusable Terraform guidance for this site. Use them when you are changing module structure, naming, state handling, or test strategy.

## What lives here

- [Modules](modules.md)
- [Module creation workflow](module-creation-workflow.md)
- [Module naming conventions](module-naming-conventions.md)
- [Taxonomy](taxonomy.md)
- [Declarative and object-oriented design](declarative-oob.md)
- [Remote state](remote-state.md)
- [TDD / BDD](tdd-bdd.md)
- [Testing](testing.md)
- [OpenSpec](openspec.md)

## Recommended order

1. Read [Modules](modules.md) to decide whether the change belongs in a module.
2. Use [Module creation workflow](module-creation-workflow.md) to confirm the boundary.
3. Apply [Module naming conventions](module-naming-conventions.md) and [Taxonomy](taxonomy.md).
4. Use [Remote state](remote-state.md) and [Testing](testing.md) for delivery and validation.
5. If the repository opts into OpenSpec, use [OpenSpec](openspec.md) as the optional proposal workflow overlay.

## Related guidance

- [Contribution workflow](../../contributing-releases/contribution-workflow.md)
- [Versioning](../../contributing-releases/versioning/index.md)

## Delivery model

Terraform module repositories default to mainline development when maintained by one developer. Branch from `main`, validate the change, and merge back to `main` through a pull request.

When multiple developers are contributing to a grouped module release, use the release branch flow from the [contribution workflow](../../contributing-releases/contribution-workflow.md). Create a temporary `release/*` branch from `main`, merge feature branches into that release branch, validate the grouped release, and merge the release branch back to `main`.

## Related tutorials

- [New Terraform Module](../../tutorials/new-terraform-module.md)
- [New Product](../../tutorials/new-product.md)
