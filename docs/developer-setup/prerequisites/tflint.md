# tflint

tflint is a Terraform linter that catches errors, enforces best practices, and surfaces provider-specific issues that `terraform validate` does not catch.

**Current stable version:** 0.5x  
[:octicons-link-external-16: github.com/terraform-linters/tflint](https://github.com/terraform-linters/tflint){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Option 1 — Chocolatey**

```powershell
choco install tflint -y
```

**Option 2 — WinGet (if available)**

```powershell
winget install --id TerraformLinters.tflint -e
```

</div>

<div class="os-block" data-os="macos">

```bash
brew install tflint
```

</div>

<div class="os-block" data-os="ubuntu debian rhel">

```bash
curl -s https://raw.githubusercontent.com/terraform-linters/tflint/master/install_linux.sh | bash
```

This installs the latest stable release to `/usr/local/bin/tflint`.

</div>

<div class="os-block" data-os="arch">

```bash
sudo pacman -S --needed tflint
```

</div>

---

## Verify Installation

```bash
tflint --version
```

---

## Standard Configuration

Commit a `.tflint.hcl` file to the root of every Terraform repository:

```hcl
plugin "aws" {
  enabled = true
  version = "0.32.0"
  source  = "github.com/terraform-linters/tflint-ruleset-aws"
}

rule "terraform_naming_convention" {
  enabled = true
}

rule "terraform_documented_variables" {
  enabled = true
}

rule "terraform_documented_outputs" {
  enabled = true
}
```

Install the configured plugins:

```bash
tflint --init
```

---

## Next Step

[:octicons-arrow-right-24: Install tfsec](tfsec.md)
