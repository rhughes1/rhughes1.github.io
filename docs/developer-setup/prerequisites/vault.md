# HashiCorp Vault

Vault is the secrets management platform used across all environments. The CLI is required for local development, rotating credentials, and interacting with Vault directly.

**Current stable version:** 1.x  
[:octicons-link-external-16: developer.hashicorp.com/vault](https://developer.hashicorp.com/vault){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Option 1 — WinGet**

```powershell
winget install --id Hashicorp.Vault -e
```

**Option 2 — Chocolatey**

```powershell
choco install vault -y
```

</div>

<div class="os-block" data-os="macos">

```bash
brew tap hashicorp/tap
brew install hashicorp/tap/vault
```

</div>

<div class="os-block" data-os="ubuntu debian">

```bash
# HashiCorp repo is already configured if Terraform was installed first
# If not, add it:
sudo apt update
sudo apt install -y gnupg software-properties-common

wget -O- https://apt.releases.hashicorp.com/gpg | \
  gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg > /dev/null

echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] \
  https://apt.releases.hashicorp.com $(lsb_release -cs) main" | \
  sudo tee /etc/apt/sources.list.d/hashicorp.list

sudo apt update
sudo apt install -y vault
```

</div>

<div class="os-block" data-os="rhel">

```bash
sudo dnf install -y vault
```

!!! note
    Assumes the HashiCorp repo was already added during Terraform installation. If not, add it first — see the [Terraform](terraform.md) page.

</div>

<div class="os-block" data-os="arch">

```bash
sudo pacman -S --needed vault
```

</div>

---

## Verify Installation

```bash
vault version
```

---

## Environment Setup

Add the following to your shell profile (`~/.bashrc`, `~/.zshrc`, or PowerShell profile):

<div class="os-block" data-os="windows">

```powershell
$env:VAULT_ADDR = "https://vault.example.com"
# $env:VAULT_TOKEN is set at login time — do not persist it
```

</div>

<div class="os-block" data-os="macos ubuntu debian rhel">

```bash
export VAULT_ADDR="https://vault.example.com"
# VAULT_TOKEN is set at login time — do not persist it in your profile
```

</div>

!!! danger "Never store Vault tokens in your shell profile"
    Vault tokens are short-lived by design. Set `VAULT_TOKEN` in your current session after logging in. Never write it to a file that persists across sessions.

---

## Local Development

For local development, see the [Vault Local Development](../../tutorials/vault-local.md) tutorial.

If your application also needs Consul, use the [Vault & Consul Local Stack](../../tutorials/vault-consul-local.md) tutorial.

---

## Next Step

[:octicons-arrow-right-24: Install Packer](packer.md)
