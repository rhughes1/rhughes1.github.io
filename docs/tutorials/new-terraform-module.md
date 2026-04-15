---
title: New Terraform Module
description: Scaffold a Terraform module repository with CI, testing, and registry registration.
technologies:
  - Terraform
  - GitHub
  - HCP Terraform
  - pre-commit
intent:
  - repository creation
  - infrastructure
time_to_complete: 15 min
difficulty: beginner
---

# New Terraform Module

This tutorial walks through creating a new Terraform module repository. By the end, you will have a fully scaffolded repository with all standard files, CI/CD workflows, pre-commit hooks, and the module registered in the HCP Terraform private module registry — all through a single `terraform apply`.

**Time to complete:** ~15 minutes  
**Prerequisites:** [Developer Setup](../developer-setup/index.md) complete, access to the relevant management repository

---

## Before You Start

Decide the following before touching any code:

| Decision | Notes |
|----------|-------|
| **Provider** | Which provider does this module target? (`aws`, `azure`, `vault`, `github`, etc.) |
| **Module name** | Follow the convention `terraform-<provider>-<resource>` e.g. `terraform-aws-s3-bucket` |
| **Management repo** | Which mgmt repo owns this? e.g. `terraform-aws-module-mgmt` for AWS modules |
| **Jira issue** | Open a Jira issue for the new module before starting — you will reference it in your branch and PR |

!!! tip "Naming convention matters"
    The HCP Terraform private module registry derives the module name from the repository name using the pattern `terraform-<provider>-<name>`. A repo named `terraform-aws-s3-bucket` is registered as module `s3-bucket` under provider `aws`. Get the name right before creation — renaming a repository later requires updating every reference.

---

## Step 1 — Branch Off the Management Repository

Clone and branch the appropriate management repository. For an AWS module:

```bash
git clone git@github.com:rhughes1/terraform-aws-module-mgmt.git
cd terraform-aws-module-mgmt

git checkout -b feat/PLAT-123-add-terraform-aws-s3-bucket
```

---

## Step 2 — Add the Module Resource Block

Open `main.tf` in the management repository. Add a new module block calling the Terraform module submodule from `terraform-github-repository-files`:

```hcl
module "terraform_aws_s3_bucket" {
  source = "app.terraform.io/rhughes1/repository-files--terraform-module/github"
  version = "~> 1.0"

  repository_name        = "terraform-aws-s3-bucket"
  repository_description = "Terraform module for managing AWS S3 buckets with standard security defaults"
  default_branch         = "main"
  topics                 = ["terraform", "aws", "s3", "infrastructure"]
}
```

!!! note "Source path"
    The `source` references the `terraform-module` submodule from `terraform-github-repository-files` via the HCP Terraform private registry. The exact source string follows your HCP Terraform organisation and registry naming.

---

## Step 3 — Add Variables if Required

If the new module needs values not already covered by the management repo's existing variables, add them to `variables.tf`:

```hcl
# Only needed if this module requires unique inputs not already declared
```

Most of the time the management repository already declares the variables that apply to all modules it manages (e.g. GitHub org name, default branch protection settings). Check existing variables before adding new ones.

---

## Step 4 — Plan and Review

```bash
# Authenticate to HCP Terraform if not already
terraform login

# Initialise — downloads the registry module
terraform init

# Plan — review what will be created
terraform plan
```

The plan output should show the creation of:

- The GitHub repository `rhughes1/terraform-aws-s3-bucket`
- All standard files committed to the repository via `github_repository_file` resources:
    - `main.tf`, `variables.tf`, `outputs.tf`, `versions.tf`
    - `README.md` (rendered with the module name and description)
    - `CHANGELOG.md` (initialised with `## [Unreleased]`)
    - `.gitignore`, `.editorconfig`, `.pre-commit-config.yaml`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.github/workflows/` (Terraform module CI workflow set)
- `examples/` with runnable examples and example READMEs that include `terraform-docs` markers
- `tests/` with local module tests that use mock data where possible
- Branch protection rules on `main`
- Repository topics

Review the plan carefully. Every resource shown will exist in GitHub after apply.

---

## Step 5 — Open a Pull Request

Do not apply locally. Push the branch and open a pull request against `main` in the management repository:

```bash
git add main.tf
git commit -m "feat: PLAT-123 add terraform-aws-s3-bucket module repository"
git push origin feat/PLAT-123-add-terraform-aws-s3-bucket
```

Open the PR with title:

```
feat: PLAT-123 add terraform-aws-s3-bucket module repository
```

The CI workflow will run `terraform plan` as part of the PR checks. The plan output is posted as a PR comment for review.

---

## Step 6 — Merge and Apply

After the PR is approved and all checks pass, merge to `main`. The CD workflow runs automatically and executes `terraform apply` in the HCP Terraform workspace.

Once apply completes:

- The repository `rhughes1/terraform-aws-s3-bucket` exists on GitHub
- All standard files are committed and the repository is ready to work in
- The module is available in the HCP Terraform private registry under the module name `aws/s3-bucket`

---

## Step 7 — Begin Module Development

Clone the new module repository and install the pre-commit hooks:

```bash
git clone git@github.com:rhughes1/terraform-aws-s3-bucket.git
cd terraform-aws-s3-bucket

pre-commit install
```

Branch for your first feature:

```bash
git checkout -b feat/PLAT-124-implement-s3-bucket-resource
```

The scaffolded `main.tf`, `variables.tf`, `outputs.tf`, and `versions.tf` are starting points — replace the placeholder content with the actual module implementation.

Before opening a pull request against the new module repository, run `pre-commit run --all-files` so formatting, validation, and documentation hooks are applied consistently.

---

## Step 8 — First Release

Once the initial implementation is merged to `main` via a PR, the release workflow runs and tags the repository at `v0.1.0`. The module becomes consumable at that version from the private registry:

```hcl
module "s3_bucket" {
  source  = "app.terraform.io/rhughes1/s3-bucket/aws"
  version = "~> 0.1"

  # module inputs
}
```

---

## Checklist

- [ ] Module name follows `terraform-<provider>-<resource>` convention
- [ ] Jira issue created and referenced in branch name and PR title
- [ ] Module block added to the correct management repository
- [ ] `terraform plan` reviewed before opening PR
- [ ] PR opened against management repo — not applied locally
- [ ] PR merged and `terraform apply` completed via CD
- [ ] New module repository cloned and pre-commit hooks installed
- [ ] First implementation PR opened against the new module repository
- [ ] `v0.1.0` tag created by release workflow after first merge
