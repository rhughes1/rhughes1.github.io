# Terraform

Terraform is the primary infrastructure-as-code tool used across all cloud environments. All infrastructure is defined, versioned, and applied through Terraform.

**Current stable version:** 1.x  
[:octicons-link-external-16: developer.hashicorp.com/terraform](https://developer.hashicorp.com/terraform){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Option 1 — WinGet (preferred)**

```powershell
winget install --id Hashicorp.Terraform -e
```

**Option 2 — Chocolatey**

```powershell
choco install terraform -y
```

</div>

<div class="os-block" data-os="macos">

```bash
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
```

</div>

<div class="os-block" data-os="ubuntu debian">

```bash
sudo apt update
sudo apt install -y gnupg software-properties-common

wget -O- https://apt.releases.hashicorp.com/gpg | \
  gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg > /dev/null

echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \
  https://apt.releases.hashicorp.com $(lsb_release -cs) main" | \
  sudo tee /etc/apt/sources.list.d/hashicorp.list

sudo apt update
sudo apt install -y terraform
```

</div>

<div class="os-block" data-os="rhel">

```bash
sudo dnf install -y dnf-plugins-core
sudo dnf config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo
sudo dnf install -y terraform
```

</div>

<div class="os-block" data-os="arch">

```bash
sudo pacman -S --needed terraform
```

</div>

---

## Verify Installation

```bash
terraform version
```

---

## Shell Completion (Optional)

```bash
terraform -install-autocomplete
```

---

## Next Step

[:octicons-arrow-right-24: Install tflint](tflint.md)
