# pre-commit

pre-commit manages Git hook scripts that run automatically before each commit. It enforces code quality, catches secrets, and validates formatting before anything reaches the repository.

**Current stable version:** 3.x  
[:octicons-link-external-16: pre-commit.com](https://pre-commit.com){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Option 1 — WinGet**

```powershell
winget install --id Python.Python.3 -e
pip install pre-commit
```

**Option 2 — Chocolatey**

```powershell
choco install python -y
pip install pre-commit
```

</div>

<div class="os-block" data-os="macos">

```bash
brew install pre-commit
```

</div>

<div class="os-block" data-os="ubuntu debian">

```bash
pip install pre-commit
```

!!! note
    Requires Python 3. Install Python first if not already present — see the [Python](python.md) page.

</div>

<div class="os-block" data-os="rhel">

```bash
pip3 install pre-commit
```

</div>

<div class="os-block" data-os="arch">

```bash
sudo pacman -S --needed pre-commit
```

</div>

---

## Verify Installation

```bash
pre-commit --version
```

Expected output: `pre-commit 3.x.x`

---

## Install Hooks in a Repository

Run this once inside each repository you work with:

```bash
pre-commit install
```

This writes the hook scripts into `.git/hooks/` so they fire automatically on `git commit`.

For Terraform module repositories, run `pre-commit run --all-files` before opening a pull request. The standard hook set should include Terraform formatting, validation, linting, secret scanning, and any repository-specific checks defined in the repo-local `.pre-commit-config.yaml`.

If a module repository uses `terraform-docs`, keep the README markers in place so pre-commit can regenerate the documentation block automatically.

---

## Standard `.pre-commit-config.yaml`

This is the standard configuration used across all repositories here. Commit this file to the root of every new repository:

```yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.6.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-json
      - id: check-merge-conflict
      - id: detect-private-key
      - id: mixed-line-ending
        args: ["--fix=lf"]

  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.18.4
    hooks:
      - id: gitleaks

  - repo: https://github.com/antonbabenko/pre-commit-terraform
    rev: v1.92.0
    hooks:
      - id: terraform_fmt
      - id: terraform_validate
      - id: terraform_tflint
      - id: terraform_tfsec
```

---

## Run Manually Against All Files

```bash
pre-commit run --all-files
```

---

## Next Step

[:octicons-arrow-right-24: Install AWS CLI](aws-cli.md)
