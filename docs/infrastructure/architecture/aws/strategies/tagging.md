---
title: Corporate Metadata, Naming, and Tagging Standard
description: Cross-tool metadata, naming, and tagging guidance for AWS, Azure, HCP Terraform, GitHub, and related platforms.
---

# Corporate Metadata, Naming, and Tagging Standard

This standard defines the shared metadata model used across infrastructure, repositories, workspaces, services, and cloud resources.

Use it to keep names, tags, topics, and labels consistent across tools such as AWS, Azure, HCP Terraform, and GitHub.

## Why this matters

When the same corporate values are reused everywhere, you can trace ownership, reporting, environment boundaries, and service relationships without re-learning each tool’s naming conventions.

## Corporate metadata

These are the core values that should be reused across systems.

| Field | Meaning | Example |
| --- | --- | --- |
| `environment` | Lifecycle or deployment boundary | `dev`, `staging`, `prod` |
| `account_group` | Team or application boundary | `payments`, `platform` |
| `product` | Product or platform identity | `payments` |
| `business_unit` | Finance or business reporting group | `engineering` |
| `charge_code` | Finance-owned cost allocation code | `CC-1042` |
| `customer` | Customer or tenant identifier | `pr` |
| `service_name` | Service-level identifier under a product | `payments-api` |

## Naming model

Corporate metadata should drive the names you use in tools and infrastructure.

### Common examples

- AWS resource tags
- Azure resource tags
- HCP Terraform workspace names
- HCP Terraform project names
- GitHub repository topics
- Service names
- Release and module identifiers

### Practical naming pattern

Use the product and service identity first, then add environment or boundary detail where the tool needs it.

Examples:

- `payments-prod`
- `payments-api-dev`
- `payments-core-staging`
- `terraform-aws-payments-vpc`
- `terraform-config-payments-mgmt`
- `payments-api`

## Service models

The metadata model should support monoliths, microservices, and hybrids without changing the meaning of the fields.

### Monolithic service model

A monolith is a single deployable unit that owns most or all of the application.

How to use metadata:

- `product` identifies the application
- `service_name` usually matches the product or main runtime
- tags describe the whole application, not individual subservices

Example:

```yaml
environment: prod
account_group: payments
product: payments
business_unit: engineering
charge_code: CC-1042
customer: pr
service_name: payments
```

### Microservice model

A microservice model splits behavior into multiple independently deployable services.

How to use metadata:

- `product` identifies the broader platform
- `service_name` identifies each service
- each service gets its own runtime, deployment, or workspace boundary when needed

Example:

```yaml
environment: prod
account_group: payments
product: payments
business_unit: engineering
charge_code: CC-1042
customer: pr
service_name: payments-api
```

### Hybrid model

A hybrid model combines a shared core or monolith with separate services around it.

How to use metadata:

- keep one product identity
- keep service names distinct where the deployment boundaries differ
- reuse the same corporate tags across the shared and split components

Example:

```yaml
environment: staging
account_group: payments
product: payments
business_unit: engineering
charge_code: CC-1042
customer: pr
service_name: payments-core
```

## Tool mappings

### AWS and Azure

Use the same corporate metadata as tags on cloud resources. Do not invent a separate AWS-only or Azure-only tag vocabulary unless the platform requires it.

### HCP Terraform

Use the same corporate values in:

- workspace names
- workspace tags
- project names
- variable set naming

### GitHub

Use the same corporate values in:

- repository names
- repository topics
- labels where appropriate
- organization-level grouping and discovery

## Terraform example

Use the corporate metadata as the base and merge resource-specific values on top.

```hcl
locals {
  corporate_tags = {
    environment   = "prod"
    account_group = "payments"
    product       = "payments"
    business_unit = "engineering"
    charge_code   = "CC-1042"
    customer      = "pr"
    service_name  = "payments-api"
  }
}

resource "aws_s3_bucket" "logs" {
  bucket = "payments-prod-logs"

  tags = merge(local.corporate_tags, {
    Name = "payments-prod-logs"
  })
}
```

## Governance

- Prefer shared corporate metadata over ad hoc tool-specific labels.
- Do not add a new field unless it has a real ownership, reporting, or operational purpose.
- Keep names short enough to remain readable in consoles and plan output.
- Use the same meaning for the same field across tools.

## Related guidance

- [Terraform taxonomy](../../../../standards/terraform/taxonomy.md)
- [Terraform module standards](../../../../standards/terraform/index.md)
