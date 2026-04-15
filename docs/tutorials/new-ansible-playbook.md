---
title: New Ansible Playbook Repository
description: Bootstrap an Ansible playbook repository with standard files, CI, and linting.
technologies:
  - Ansible
  - GitHub
  - Terraform
  - pre-commit
intent:
  - repository creation
  - configuration management
time_to_complete: 10 min
difficulty: beginner
---

# New Ansible Playbook Repository

This tutorial walks through creating a new Ansible playbook repository. By the end you will have a bootstrapped repository with the standard Ansible file structure, pre-commit hooks, and CI/CD workflows — created through `terraform apply` against `terraform-ansible-playbook-mgmt`.

**Time to complete:** ~10 minutes  
**Prerequisites:** [Developer Setup](../developer-setup/index.md) complete, access to `terraform-ansible-playbook-mgmt`

---

## Before You Start

| Decision | Notes |
|----------|-------|
| **Playbook name** | Follow the convention `ansible-playbook-<purpose>` e.g. `ansible-playbook-hardening` |
| **Purpose** | What does this playbook configure or deploy? |
| **Target OS** | RHEL, Ubuntu, Debian, or multi-platform? |
| **Jira issue** | Open a Jira issue before starting |

---

## Step 1 — Branch Off the Management Repository

```bash
git clone git@github.com:rhughes1/terraform-ansible-playbook-mgmt.git
cd terraform-ansible-playbook-mgmt

git checkout -b feat/PLAT-200-add-ansible-playbook-hardening
```

---

## Step 2 — Add the Resource Block

Add a new module block to `main.tf`:

```hcl
module "ansible_playbook_hardening" {
  source  = "app.terraform.io/rhughes1/repository-files--ansible-playbook/github"
  version = "~> 1.0"

  repository_name        = "ansible-playbook-hardening"
  repository_description = "Ansible playbook for applying CIS hardening standards to Linux hosts"
  default_branch         = "main"
  topics                 = ["ansible", "hardening", "security", "linux"]
}
```

---

## Step 3 — Plan and Review

```bash
terraform init
terraform plan
```

The plan should show creation of the GitHub repository and all standard Ansible playbook files, including:

- `site.yml` — top-level playbook entrypoint
- `inventory/` — inventory directory structure
- `roles/` — roles directory
- `requirements.yml` — Ansible Galaxy dependencies
- `ansible.cfg` — standard Ansible configuration
- `README.md` — rendered with the playbook name and description
- `CHANGELOG.md`
- `.pre-commit-config.yaml` — includes `ansible-lint`
- `.github/workflows/` — Ansible CI workflow (lint, syntax check, molecule test trigger)

---

## Step 4 — Open a Pull Request

```bash
git add main.tf
git commit -m "feat: PLAT-200 add ansible-playbook-hardening repository"
git push origin feat/PLAT-200-add-ansible-playbook-hardening
```

PR title:

```
feat: PLAT-200 add ansible-playbook-hardening repository
```

CI runs `terraform plan` and posts the output as a PR comment.

---

## Step 5 — Merge and Apply

Merge after approval. The CD workflow applies the configuration and the repository is created on GitHub with all standard files.

---

## Step 6 — Begin Playbook Development

```bash
git clone git@github.com:rhughes1/ansible-playbook-hardening.git
cd ansible-playbook-hardening

pre-commit install
```

Branch for your first change:

```bash
git checkout -b feat/PLAT-201-implement-sshd-hardening
```

The scaffolded structure is ready — add roles, tasks, and handlers following the [Ansible Standards](../standards/ansible.md).

---

## Step 7 — Testing

The CI workflow runs `ansible-lint` and syntax checks on every PR. For functional testing, Molecule is the standard framework. Add a Molecule scenario to the role being developed:

```bash
cd roles/<your-role>
molecule init scenario default
```

---

## Checklist

- [ ] Repository name follows `ansible-playbook-<purpose>` convention
- [ ] Jira issue created and referenced
- [ ] Module block added to `terraform-ansible-playbook-mgmt`
- [ ] `terraform plan` reviewed
- [ ] PR opened and merged — repository created via CD
- [ ] Repository cloned and pre-commit hooks installed
- [ ] First implementation PR opened against new playbook repo
- [ ] `v0.1.0` tag created after first merge
