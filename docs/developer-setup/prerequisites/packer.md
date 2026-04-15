# Packer

Packer automates the creation of machine images across multiple platforms. It is used to build golden AMIs and other VM images with a known-good, pre-baked configuration.

**Current stable version:** 1.x  
[:octicons-link-external-16: developer.hashicorp.com/packer](https://developer.hashicorp.com/packer){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

```powershell
winget install --id Hashicorp.Packer -e
```

</div>

<div class="os-block" data-os="macos">

```bash
brew tap hashicorp/tap
brew install hashicorp/tap/packer
```

</div>

<div class="os-block" data-os="ubuntu debian">

```bash
# Assumes HashiCorp apt repo is already configured
sudo apt update
sudo apt install -y packer
```

</div>

<div class="os-block" data-os="rhel">

```bash
sudo dnf install -y packer
```

</div>

<div class="os-block" data-os="arch">

```bash
sudo pacman -S --needed packer
```

</div>

---

## Verify Installation

```bash
packer version
```

---

## Next Step

[:octicons-arrow-right-24: Install Consul](consul.md)
