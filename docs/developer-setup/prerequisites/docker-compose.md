# Docker Compose

Docker Compose orchestrates multi-container applications for local development. On Linux, it is installed as a Docker plugin. On macOS and Windows, it is bundled with Docker Desktop.

**Current stable version:** v2.x (plugin)  
[:octicons-link-external-16: docs.docker.com/compose](https://docs.docker.com/compose/){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows macos">

Docker Compose is included with **Docker Desktop**. No separate installation required.

Verify it is available:

```bash
docker compose version
```

</div>

<div class="os-block" data-os="ubuntu debian rhel">

Docker Compose v2 is installed as part of the Docker Engine setup via `docker-compose-plugin`. If you followed the [Docker](docker.md) installation page, it is already installed.

Verify:

```bash
docker compose version
```

If the command is not found, install the plugin explicitly:

```bash
sudo apt install -y docker-compose-plugin   # Ubuntu / Debian
sudo dnf install -y docker-compose-plugin   # RHEL / CentOS
```

</div>

<div class="os-block" data-os="arch">

Docker Compose is included with the `docker-compose` package on Arch. If you have Docker installed, add Compose with pacman:

```bash
sudo pacman -S --needed docker-compose
```

Verify:

```bash
docker compose version
```

</div>

---

## Verify Installation

```bash
docker compose version
```

Expected output: `Docker Compose version v2.x.x`

!!! warning "v1 vs v2"
    This environment uses Compose v2 (`docker compose`) — note the space, not a hyphen. The older `docker-compose` (v1) is not used. If you see `docker-compose` anywhere in legacy documentation, translate it to `docker compose`.

---

## Next Step

[:octicons-arrow-right-24: Install kubectl](kubectl.md)
