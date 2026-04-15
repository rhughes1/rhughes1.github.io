---
title: New Chef Cookbook Repository
description: Bootstrap a Chef cookbook repository with standard files, linting, and CI workflows.
technologies:
  - Chef
  - GitHub
  - Terraform
  - pre-commit
intent:
  - repository creation
  - configuration management
time_to_complete: 10 min
difficulty: beginner
---

# New Chef Cookbook Repository

This tutorial walks through creating a new Chef cookbook repository via `terraform-chef-cookbook-mgmt`. By the end you will have a bootstrapped repository with the standard Chef cookbook structure, Cookstyle linting, Test Kitchen configuration, and CI/CD workflows.

**Time to complete:** ~10 minutes  
**Prerequisites:** [Developer Setup](../developer-setup/index.md) complete, access to `terraform-chef-cookbook-mgmt`

---

## Before You Start

| Decision | Notes |
|----------|-------|
| **Cookbook name** | Follow the convention `chef-cookbook-<purpose>` e.g. `chef-cookbook-base` |
| **Purpose** | What does this cookbook configure? Single responsibility per cookbook |
| **Platform** | Target OS platforms and versions (used in `metadata.rb` and Kitchen config) |
| **Jira issue** | Open a Jira issue before starting |

!!! tip "Single responsibility"
    Each cookbook does one thing. A `chef-cookbook-base` cookbook configures base OS settings. A `chef-cookbook-ntp` cookbook configures NTP. They are composable — a wrapper cookbook or role combines them. Resist the urge to put everything in one cookbook.

---

## Step 1 — Branch Off the Management Repository

```bash
git clone git@github.com:rhughes1/terraform-chef-cookbook-mgmt.git
cd terraform-chef-cookbook-mgmt

git checkout -b feat/PLAT-300-add-chef-cookbook-base
```

---

## Step 2 — Add the Resource Block

Add a new module block to `main.tf`:

```hcl
module "chef_cookbook_base" {
  source  = "app.terraform.io/rhughes1/repository-files--chef-cookbook/github"
  version = "~> 1.0"

  repository_name        = "chef-cookbook-base"
  repository_description = "Chef cookbook for applying base OS configuration to all managed nodes"
  default_branch         = "main"
  topics                 = ["chef", "cookbook", "base", "configuration-management"]
  cookbook_version       = "0.1.0"
  supported_platforms    = ["redhat", "centos", "ubuntu", "debian"]
}
```

---

## Step 3 — Plan and Review

```bash
terraform init
terraform plan
```

The plan should show creation of the GitHub repository and all standard Chef cookbook files:

- `metadata.rb` — rendered with cookbook name, version, and supported platforms
- `recipes/default.rb` — empty default recipe
- `attributes/default.rb` — default attributes file
- `Berksfile` — dependency management
- `Berksfile.lock` — locked dependencies
- `kitchen.yml` — Test Kitchen configuration with Docker driver
- `.cookstyle` — Cookstyle linting configuration
- `spec/` — ChefSpec unit test scaffold
- `README.md` — rendered with cookbook name and description
- `CHANGELOG.md`
- `.pre-commit-config.yaml` — includes Cookstyle
- `.github/workflows/` — Chef CI workflow (Cookstyle, ChefSpec, Test Kitchen)

---

## Step 4 — Open a Pull Request

```bash
git add main.tf
git commit -m "feat: PLAT-300 add chef-cookbook-base repository"
git push origin feat/PLAT-300-add-chef-cookbook-base
```

PR title:

```
feat: PLAT-300 add chef-cookbook-base repository
```

---

## Step 5 — Merge and Apply

Merge after approval. The CD workflow applies and the repository is created with all standard files.

---

## Step 6 — Begin Cookbook Development

```bash
git clone git@github.com:rhughes1/chef-cookbook-base.git
cd chef-cookbook-base

pre-commit install

# Install cookbook dependencies
berks install
```

Branch for your first change:

```bash
git checkout -b feat/PLAT-301-implement-base-sysctl-settings
```

---

## Step 7 — Testing

The CI workflow runs Cookstyle, ChefSpec, and Test Kitchen on every PR.

Run them locally before pushing:

```bash
# Linting
cookstyle .

# Unit tests
chef exec rspec spec/

# Integration tests (requires Docker)
kitchen test
```

---

## Step 8 — Publishing

Once the cookbook reaches `v1.0.0`, it can be published to a private Chef Supermarket or consumed directly via Berkshelf using the GitHub source:

```ruby
# Berksfile in a consuming cookbook
cookbook 'base', github: 'rhughes1/chef-cookbook-base', tag: 'v1.2.0'
```

---

## Checklist

- [ ] Repository name follows `chef-cookbook-<purpose>` convention
- [ ] Cookbook has a single, well-defined responsibility
- [ ] Jira issue created and referenced
- [ ] Module block added to `terraform-chef-cookbook-mgmt`
- [ ] `terraform plan` reviewed
- [ ] PR merged — repository created via CD
- [ ] Repository cloned, pre-commit hooks installed, `berks install` run
- [ ] First implementation PR opened against new cookbook repo
- [ ] `v0.1.0` tag created after first merge
