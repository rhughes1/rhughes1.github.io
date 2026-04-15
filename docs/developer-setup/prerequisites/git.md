# Git

Git is the version control system used across all repositories. Install it first — nearly every other tool in this guide assumes it is present.

**Current stable version:** 2.x (any recent 2.x release is fine)  
[:octicons-link-external-16: git-scm.com](https://git-scm.com){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

### Windows

**Option 1 — WinGet (preferred)**

```powershell
winget install --id Git.Git -e --source winget
```

**Option 2 — Chocolatey**

```powershell
choco install git -y
```

After installation, restart your terminal session.

</div>

<div class="os-block" data-os="macos">

### macOS

```bash
brew install git
```

!!! note
    macOS ships with an older Apple-provided Git. The Homebrew version takes precedence after installation — verify with `which git` (should return `/opt/homebrew/bin/git`).

</div>

<div class="os-block" data-os="ubuntu">

### Ubuntu

```bash
sudo apt update
sudo apt install -y git
```

</div>

<div class="os-block" data-os="debian">

### Debian

```bash
sudo apt update
sudo apt install -y git
```

</div>

<div class="os-block" data-os="rhel">

### RHEL / CentOS

**RHEL 8 / CentOS Stream 8**

```bash
sudo dnf install -y git
```

**RHEL 9 / CentOS Stream 9**

```bash
sudo dnf install -y git
```

</div>

<div class="os-block" data-os="arch">

### Arch

```bash
sudo pacman -S --needed git
```

</div>

---

## Verify Installation

```bash
git --version
```

Expected output: `git version 2.x.x`

---

## Global Configuration

Set these immediately after installation. They are applied to every commit you make.

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### Line Endings

Always configure Git to use Unix line endings (`LF`), regardless of your operating system. This prevents line-ending conflicts across the team.

<div class="os-block" data-os="windows">

```powershell
# Windows: check out as-is, commit with LF
git config --global core.autocrlf input
git config --global core.eol lf
```

</div>

<div class="os-block" data-os="macos ubuntu debian rhel">

```bash
git config --global core.autocrlf input
git config --global core.eol lf
```

</div>

### Default Branch

```bash
git config --global init.defaultBranch main
```

### Use SSH Instead of HTTPS

```bash
git config --global url."git@github.com:".insteadOf "https://github.com/"
```

This ensures all GitHub operations use SSH. Requires SSH keys to be configured — see the [SSH & GitHub](ssh.md) page.

### Verify Your Config

```bash
git config --global --list
```

---

## Next Step

[:octicons-arrow-right-24: Configure SSH keys and GitHub access](ssh.md)
