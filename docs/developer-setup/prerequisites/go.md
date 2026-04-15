# Go

Go is used for writing CLI tools, infrastructure utilities, and demo applications. Use the official installer or a version manager — avoid installing via system package managers as the versions are often outdated.

**Required version:** 1.22+  
[:octicons-link-external-16: go.dev](https://go.dev){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Option 1 — WinGet**

```powershell
winget install --id GoLang.Go -e
```

**Option 2 — Chocolatey**

```powershell
choco install golang -y
```

</div>

<div class="os-block" data-os="macos">

```bash
brew install go
```

</div>

<div class="os-block" data-os="ubuntu debian rhel arch">

```bash
GO_VERSION="1.22.5"
curl -fsSL "https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz" -o /tmp/go.tar.gz
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf /tmp/go.tar.gz
rm /tmp/go.tar.gz

echo 'export PATH="$PATH:/usr/local/go/bin"' >> ~/.bashrc
echo 'export GOPATH="$HOME/go"' >> ~/.bashrc
echo 'export PATH="$PATH:$GOPATH/bin"' >> ~/.bashrc
source ~/.bashrc
```

Check [go.dev/dl](https://go.dev/dl){ target=_blank } and update `GO_VERSION` to the latest stable release.

</div>

---

## Verify Installation

```bash
go version
```

---

## Next Step

[:octicons-arrow-right-24: Install Ruby](ruby.md)
