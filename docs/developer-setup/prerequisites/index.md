# Prerequisites

Everything you need installed before starting local development. Work through the categories below in order — each builds on the last.

---

!!! tip "OS Selection"
    Each tool page has an **Operating System selector** at the top. Select your OS once and all instructions on that page switch automatically. Your choice is remembered as you navigate between pages.

---

## Installation Order

| # | Category | Tools |
|---|----------|-------|
| 1 | [Core & Version Control](git.md) | Git, SSH, pre-commit |
| 2 | [Cloud CLIs](aws-cli.md) | AWS CLI, Azure CLI |
| 3 | [HashiCorp Suite](terraform.md) | Terraform, tflint, tfsec, Vault, Packer, Consul, Sentinel |
| 4 | [Configuration Management](ansible.md) | Ansible, Chef |
| 5 | [Containers & Orchestration](docker.md) | Docker, Docker Compose, kubectl |
| 6 | [Languages](python.md) | Python, Go, Ruby, Java |
| 7 | [IDE & Extensions](vscode.md) | VSCode + extensions |
| 8 | [Pipeline Testing](act.md) | act (GitHub Actions local runner) |

---

## Supported Operating Systems

| OS | Package Manager | Notes |
|----|----------------|-------|
| Windows | WinGet, Chocolatey | WinGet preferred; Chocolatey as fallback |
| macOS | Homebrew | Required — install first |
| Arch | pacman | Rolling release; use AUR helpers for packages not in the official repos |
| Ubuntu | apt | 20.04 LTS and 22.04 LTS |
| Debian | apt | Debian 11 (Bullseye) and 12 (Bookworm) |
| RHEL / CentOS | dnf / yum | RHEL 8/9, CentOS Stream 8/9 |

---

!!! warning "Before you start"
    On **Windows**, ensure you are running PowerShell as Administrator for WinGet and Chocolatey commands.  
    On **macOS**, install [Homebrew](https://brew.sh){ target=_blank } first if you have not already — nearly every tool on these pages depends on it.  
    On **Arch**, update first with `sudo pacman -Syu`.  
    On **Linux**, ensure your package index is up to date: `sudo apt update` (Debian/Ubuntu) or `sudo dnf check-update` (RHEL/CentOS).
