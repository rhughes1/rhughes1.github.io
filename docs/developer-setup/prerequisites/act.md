# act

`act` lets you run GitHub Actions workflows locally using Docker. It eliminates the push-to-test cycle when developing or debugging pipeline changes.

**Current stable version:** 0.2.x  
[:octicons-link-external-16: github.com/nektos/act](https://github.com/nektos/act){ target=_blank }

!!! warning "Docker required"
    `act` runs workflows inside Docker containers. Ensure [Docker](docker.md) is installed and running before using `act`.

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Option 1 — WinGet**

```powershell
winget install --id nektos.act -e
```

**Option 2 — Chocolatey**

```powershell
choco install act-cli -y
```

</div>

<div class="os-block" data-os="macos">

```bash
brew install act
```

</div>

<div class="os-block" data-os="ubuntu debian rhel arch">

```bash
curl -s https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash
```

This installs `act` to `/usr/local/bin/act`.

</div>

---

## Verify Installation

```bash
act --version
```

---

## First Run

On first run, `act` prompts you to choose a Docker image size. Choose **Medium** for most workflows:

```bash
act
```

| Size | Image | Use Case |
|------|-------|----------|
| Micro | `node:16-buster-slim` | Simple Node.js workflows only |
| Medium | `catthehacker/ubuntu:act-22.04` | Most workflows — recommended |
| Large | Full GitHub-hosted image | Full compatibility, very large download |

---

## Common Usage

```bash
# List all workflows and jobs
act --list

# Run the default push event
act push

# Run a specific job
act push --job build

# Run a specific workflow file
act push --workflows .github/workflows/deploy.yml

# Pass secrets from a local file
act push --secret-file .secrets
```

---

## Secrets File

Create a `.secrets` file in your repository root for local testing (this file must be in `.gitignore`):

```bash
# .secrets — never commit this file
GITHUB_TOKEN=ghp_yourtoken
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
```

Ensure `.secrets` is in your `.gitignore`:

```bash
echo ".secrets" >> .gitignore
```

---
