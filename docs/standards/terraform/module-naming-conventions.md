---
title: Module Naming Convention Standards
description: Guidelines for naming Terraform modules to ensure clarity and consistency.
---

## Root Modules

There should be a suffix for all root modules that end with `-mgmt` to allow an easy identification of a root module.

Will be in the following format:

- `terraform-<provider>-<function>-mgmt`	
- `terraform-<provider>-<long>-<function>-<name>-mgmt`
- `terraform-config-<long>-<function>-<name>-mgmt`
- `terraform-deploy-<long>-<function>-<name>-mgmt`

### Config

Will be in the following format:

- `terraform-config-<account_group>-mgmt`

### Deploy

Will be in the following format:

- `terraform-deploy-<account_group>-mgmt`

### Examples

- `terraform-aws-vpc-network-mgmt`	
- `terraform-vault-cluster-mgmt`	
- `terraform-deploy-vault-mgmt`	
- `terraform-aws-account-creation-mgmt`	
- `terraform-aws-account-bootstrap-mgmt`	
- `terraform-config-enterprise-datalake-mgmt`	
- `terraform-aws-build-agents-mgmt`	

## Modules

The layout should use the following format, as terraform cloud will ingest and use the values as metadata to categorize and associate

Will be in the following format:

- `terraform-<provider>-<technology>`	
- `terraform-<provider>-<function>`	
- `terraform-<provider>-<function>-<technology>`	

The modules will be loaded through the [Terraform Cloud registry](https://app.terraform.io/app/rhughes1/registry/private/modules){:target="_blank"}, so they should be named to reflect their purpose and the technology they manage.

### Examples

- `terraform-aws-vpc`
- `terraform-vault-auth-oidc`	
- `terraform-vault-auth-aws`	
- `terraform-vault-secrets-aws`	

## Provider-Neutral Scaffolds

When a repository is serving as a generic module scaffold or management layer, keep the template naming provider-neutral even if the rendered repositories will be provider-specific.

### Examples

- `terraform-module`
- `terraform-module-mgmt`
- `terraform-config-example-mgmt`

## Intermediate Modules

Intermediate modules should follow the same naming conventions as [Modules](#modules). They should be named to reflect their purpose and the technology they manage.

Will be in the following format:

- `terraform-<provider>-<function>`

### Examples

- `terraform-aws-terraform-remote-state`

The modules will be loaded through the [Terraform Cloud registry](https://app.terraform.io/app/rhughes1/registry/private/modules){:target="_blank"}, so they should be named to reflect their purpose and the technology they manage.
