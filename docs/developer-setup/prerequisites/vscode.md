# Visual Studio Code

VSCode is the standard IDE. Extensions are required — the list below is the minimum set for working across the full toolchain used here.

**Current stable version:** Latest stable  
[:octicons-link-external-16: code.visualstudio.com](https://code.visualstudio.com){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Option 1 — WinGet (preferred)**

```powershell
winget install --id Microsoft.VisualStudioCode -e
```

**Option 2 — Chocolatey**

```powershell
choco install vscode -y
```

</div>

<div class="os-block" data-os="macos">

```bash
brew install --cask visual-studio-code
```

</div>

<div class="os-block" data-os="ubuntu debian">

```bash
sudo apt update
sudo apt install -y wget gpg

wget -qO- https://packages.microsoft.com/keys/microsoft.asc | \
  gpg --dearmor | sudo tee /etc/apt/keyrings/packages.microsoft.gpg > /dev/null

echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/packages.microsoft.gpg] \
  https://packages.microsoft.com/repos/code stable main" | \
  sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null

sudo apt update
sudo apt install -y code
```

</div>

<div class="os-block" data-os="rhel">

```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc

cat <<EOF | sudo tee /etc/yum.repos.d/vscode.repo
[code]
name=Visual Studio Code
baseurl=https://packages.microsoft.com/yumrepos/vscode
enabled=1
gpgcheck=1
gpgkey=https://packages.microsoft.com/keys/microsoft.asc
EOF

sudo dnf install -y code
```

</div>

<div class="os-block" data-os="arch">

```bash
sudo pacman -S --needed code
```

</div>

---

## Verify Installation

```bash
code --version
```

---

## Required Extensions

Install all extensions in a single command. Run this from your terminal after VSCode is installed:

```bash
code --install-extension EditorConfig.EditorConfig \
     --install-extension redhat.ansible \
     --install-extension hashicorp.terraform \
     --install-extension hashicorp.hcl \
     --install-extension GitHub.vscode-pull-request-github \
     --install-extension alefragnani.project-manager \
     --install-extension ms-azuretools.vscode-docker \
     --install-extension ms-kubernetes-tools.vscode-kubernetes-tools \
     --install-extension golang.go \
     --install-extension ms-python.python \
     --install-extension ms-python.black-formatter \
     --install-extension rebornix.ruby \
     --install-extension eamodio.gitlens \
     --install-extension github.vscode-github-actions \
     --install-extension ms-vscode-remote.remote-ssh \
     --install-extension ms-vscode-remote.remote-containers \
     --install-extension esbenp.prettier-vscode \
     --install-extension streetsidesoftware.code-spell-checker
```

---

## Extension Reference

| Extension | Publisher | Purpose |
|-----------|-----------|---------|
| EditorConfig | EditorConfig | Enforce `.editorconfig` rules across all file types |
| Ansible | Red Hat | Playbook syntax, linting, and auto-complete |
| HashiCorp Terraform | HashiCorp | HCL syntax, formatting, and validation |
| HashiCorp HCL | HashiCorp | HCL language support for Vault, Consul, and Packer configs |
| GitHub Pull Requests | GitHub | Review and manage PRs without leaving the editor |
| Project Manager | Alessandro Fragnani | Switch between repositories quickly |
| Docker | Microsoft | Manage containers, images, and Compose files |
| Kubernetes | Microsoft | Cluster management and manifest editing |
| Go | Go Team | Full Go language support including debugging |
| Python | Microsoft | Full Python language support |
| Black Formatter | Microsoft | Enforces Black code formatting on save |
| Ruby | Peng Lv | Ruby language support |
| GitLens | GitKraken | Enhanced Git history, blame, and diff tools |
| GitHub Actions | GitHub | Workflow syntax validation and status |
| Remote - SSH | Microsoft | Edit files on remote servers via SSH |
| Dev Containers | Microsoft | Develop inside Docker containers |
| Prettier | Prettier | Opinionated formatter for YAML, JSON, Markdown |
| Code Spell Checker | Street Side Software | Catches typos in code and documentation |

---

## Standard Settings

Commit a `.vscode/settings.json` to each repository with the following baseline:

```json
{
  "editor.formatOnSave": true,
  "editor.insertSpaces": true,
  "editor.tabSize": 2,
  "files.eol": "\n",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "[terraform]": {
    "editor.defaultFormatter": "hashicorp.terraform",
    "editor.tabSize": 2
  },
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.tabSize": 4
  },
  "[go]": {
    "editor.defaultFormatter": "golang.go",
    "editor.tabSize": 4
  },
  "[yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.wordWrap": "on"
  }
}
```

---

## EditorConfig

Commit a `.editorconfig` to every repository root. This enforces consistent formatting regardless of editor:

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
insert_final_newline = true

[*.{py,java}]
indent_size = 4

[Makefile]
indent_style = tab

[*.md]
trim_trailing_whitespace = false
```

---

## Next Step

[:octicons-arrow-right-24: Install act](act.md)
