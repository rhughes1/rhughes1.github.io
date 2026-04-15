# Azure CLI

The Azure CLI is used to manage Azure resources, automate cloud operations, and integrate with Azure DevOps and Entra ID.

**Current stable version:** 2.x  
[:octicons-link-external-16: learn.microsoft.com/cli/azure](https://learn.microsoft.com/en-us/cli/azure/){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Option 1 — WinGet (preferred)**

```powershell
winget install --id Microsoft.AzureCLI -e
```

**Option 2 — Chocolatey**

```powershell
choco install azure-cli -y
```

</div>

<div class="os-block" data-os="macos">

```bash
brew install azure-cli
```

</div>

<div class="os-block" data-os="ubuntu debian">

```bash
sudo apt update
sudo apt install -y ca-certificates curl apt-transport-https lsb-release gnupg

curl -sLS https://packages.microsoft.com/keys/microsoft.asc | \
  gpg --dearmor | sudo tee /etc/apt/keyrings/microsoft.gpg > /dev/null

AZ_DIST=$(lsb_release -cs)
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/microsoft.gpg] \
  https://packages.microsoft.com/repos/azure-cli/ $AZ_DIST main" | \
  sudo tee /etc/apt/sources.list.d/azure-cli.list

sudo apt update
sudo apt install -y azure-cli
```

</div>

<div class="os-block" data-os="rhel">

```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc

cat <<EOF | sudo tee /etc/yum.repos.d/azure-cli.repo
[azure-cli]
name=Azure CLI
baseurl=https://packages.microsoft.com/yumrepos/azure-cli
enabled=1
gpgcheck=1
gpgkey=https://packages.microsoft.com/keys/microsoft.asc
EOF

sudo dnf install -y azure-cli
```

</div>

<div class="os-block" data-os="arch">

```bash
sudo pacman -S --needed azure-cli
```

</div>

---

## Verify Installation

```bash
az --version
```

---

## Login

```bash
az login
```

This opens a browser for authentication. For headless/server environments:

```bash
az login --use-device-code
```

---

## Set Default Subscription

```bash
az account list --output table
az account set --subscription "YOUR_SUBSCRIPTION_NAME_OR_ID"
```

---

## Next Step

[:octicons-arrow-right-24: Install Terraform](terraform.md)
