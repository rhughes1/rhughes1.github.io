# Java

Java is required for certain tooling and legacy integrations. Use Eclipse Temurin (Adoptium) — it is the open-source, production-grade distribution. Use `sdkman` to manage JDK versions.

**Required version:** JDK 21 (LTS)  
[:octicons-link-external-16: adoptium.net](https://adoptium.net){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Option 1 — WinGet**

```powershell
winget install --id EclipseAdoptium.Temurin.21.JDK -e
```

**Option 2 — Chocolatey**

```powershell
choco install temurin21 -y
```

</div>

<div class="os-block" data-os="macos">

```bash
brew install --cask temurin@21
```

</div>

<div class="os-block" data-os="ubuntu debian rhel arch">

Install `sdkman` first, then install the JDK through it:

```bash
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"

sdk install java 21.0.4-tem
sdk default java 21.0.4-tem
```

</div>

---

## Verify Installation

```bash
java -version
javac -version
```

---

## Next Step

[:octicons-arrow-right-24: Install VSCode](vscode.md)
