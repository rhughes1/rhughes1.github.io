# HashiCorp Consul

Consul provides service discovery, health checking, and a distributed key-value store. The CLI is used for interacting with Consul clusters and verifying service health locally.

**Current stable version:** 1.x  
[:octicons-link-external-16: developer.hashicorp.com/consul](https://developer.hashicorp.com/consul){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

```powershell
winget install --id Hashicorp.Consul -e
```

</div>

<div class="os-block" data-os="macos">

```bash
brew tap hashicorp/tap
brew install hashicorp/tap/consul
```

</div>

<div class="os-block" data-os="ubuntu debian">

```bash
sudo apt update
sudo apt install -y consul
```

</div>

<div class="os-block" data-os="rhel">

```bash
sudo dnf install -y consul
```

</div>

<div class="os-block" data-os="arch">

```bash
sudo pacman -S --needed consul
```

</div>

---

## Verify Installation

```bash
consul version
```

---

## Next Step

[:octicons-arrow-right-24: Install Sentinel](sentinel.md)

---

## Local Development

For local development, see the [Consul Local Development](../../tutorials/consul-local.md) tutorial.

If your application also needs Vault, use the [Vault & Consul Local Stack](../../tutorials/vault-consul-local.md) tutorial.
