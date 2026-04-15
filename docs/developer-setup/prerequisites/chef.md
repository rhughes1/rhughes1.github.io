# Chef Workstation

Chef Workstation provides the tools needed to develop and test Chef cookbooks locally, including `chef`, `knife`, `cookstyle`, and `inspec`.

**Current stable version:** Latest stable from Chef  
[:octicons-link-external-16: docs.chef.io/workstation](https://docs.chef.io/workstation/){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Option 1 — WinGet**

```powershell
winget install --id Chef.ChefWorkstation -e
```

**Option 2 — Chocolatey**

```powershell
choco install chef-workstation -y
```

</div>

<div class="os-block" data-os="macos">

```bash
brew install --cask chef-workstation
```

</div>

<div class="os-block" data-os="ubuntu debian arch">

```bash
curl -fsSL https://omnitruck.chef.io/install.sh | sudo bash -s -- -P chef-workstation
```

</div>

<div class="os-block" data-os="rhel">

```bash
curl -fsSL https://omnitruck.chef.io/install.sh | sudo bash -s -- -P chef-workstation
```

</div>

---

## Verify Installation

```bash
chef --version
inspec --version
cookstyle --version
```

---

## Next Step

[:octicons-arrow-right-24: Install Docker](docker.md)
