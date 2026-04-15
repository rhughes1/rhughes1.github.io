# tfsec

tfsec performs static analysis of Terraform configurations to surface security misconfigurations before they are applied.

**Current stable version:** 1.x  
[:octicons-link-external-16: aquasecurity.github.io/tfsec](https://aquasecurity.github.io/tfsec/){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

```powershell
choco install tfsec -y
```

</div>

<div class="os-block" data-os="macos">

```bash
brew install tfsec
```

</div>

<div class="os-block" data-os="ubuntu debian rhel arch">

```bash
curl -s https://raw.githubusercontent.com/aquasecurity/tfsec/master/scripts/install_linux.sh | bash
```

</div>

---

## Verify Installation

```bash
tfsec --version
```

---

## Usage

Run against any Terraform directory:

```bash
tfsec .
```

Run with a specific minimum severity:

```bash
tfsec . --minimum-severity HIGH
```

---

## Next Step

[:octicons-arrow-right-24: Install Vault](vault.md)
