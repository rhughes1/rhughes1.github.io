# HashiCorp Sentinel

The Sentinel CLI is used to develop, test, and validate Sentinel policies locally before they are applied in HCP Terraform or Vault.

**Current stable version:** 0.x  
[:octicons-link-external-16: developer.hashicorp.com/sentinel](https://developer.hashicorp.com/sentinel){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

Sentinel is distributed as a standalone binary. Download the appropriate release from the HashiCorp releases page.

<div class="os-block" data-os="windows">

```powershell
# Download from https://releases.hashicorp.com/sentinel/
# Extract the zip and move sentinel.exe to a directory in your PATH
# e.g. C:\tools\sentinel\

winget install --id Hashicorp.Sentinel -e
```

If WinGet does not have the latest version, download directly:

```powershell
$version = "0.26.0"
Invoke-WebRequest -Uri "https://releases.hashicorp.com/sentinel/${version}/sentinel_${version}_windows_amd64.zip" `
  -OutFile "$env:TEMP\sentinel.zip"
Expand-Archive "$env:TEMP\sentinel.zip" -DestinationPath "C:\tools\sentinel"
# Add C:\tools\sentinel to your PATH
```

</div>

<div class="os-block" data-os="macos">

```bash
brew tap hashicorp/tap
brew install hashicorp/tap/sentinel
```

</div>

<div class="os-block" data-os="ubuntu debian rhel arch">

```bash
SENTINEL_VERSION="0.26.0"
curl -fsSL "https://releases.hashicorp.com/sentinel/${SENTINEL_VERSION}/sentinel_${SENTINEL_VERSION}_linux_amd64.zip" \
  -o /tmp/sentinel.zip
unzip /tmp/sentinel.zip -d /tmp/sentinel-bin
sudo mv /tmp/sentinel-bin/sentinel /usr/local/bin/sentinel
sudo chmod +x /usr/local/bin/sentinel
rm -rf /tmp/sentinel.zip /tmp/sentinel-bin
```

Check the [HashiCorp releases page](https://releases.hashicorp.com/sentinel/){ target=_blank } and update `SENTINEL_VERSION` to the latest stable release.

</div>

---

## Verify Installation

```bash
sentinel version
```

---

## Next Step

[:octicons-arrow-right-24: Install Ansible](ansible.md)
