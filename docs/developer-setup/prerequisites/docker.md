# Docker

Docker provides containerization for local development, testing, and running demo applications. Docker Desktop is used on macOS and Windows; the Docker Engine is installed directly on Linux.

**Current stable version:** 26.x (Docker Engine), 4.x (Docker Desktop)  
[:octicons-link-external-16: docs.docker.com](https://docs.docker.com){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Docker Desktop (includes Docker Compose)**

```powershell
winget install --id Docker.DockerDesktop -e
```

After installation, launch Docker Desktop and complete the setup wizard. Ensure WSL 2 backend is enabled in Settings → General.

</div>

<div class="os-block" data-os="macos">

**Docker Desktop (includes Docker Compose)**

```bash
brew install --cask docker
```

Launch Docker from Applications and complete the initial setup.

</div>

<div class="os-block" data-os="ubuntu">

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg lsb-release

sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Allow running Docker without sudo
sudo usermod -aG docker $USER
newgrp docker
```

</div>

<div class="os-block" data-os="debian">

```bash
sudo apt update
sudo apt install -y ca-certificates curl gnupg lsb-release

sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | \
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/debian $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

sudo usermod -aG docker $USER
newgrp docker
```

</div>

<div class="os-block" data-os="rhel">

```bash
sudo dnf remove -y docker docker-client docker-client-latest \
  docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine

sudo dnf install -y dnf-plugins-core
sudo dnf config-manager --add-repo https://download.docker.com/linux/rhel/docker-ce.repo
sudo dnf install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

sudo systemctl enable --now docker

sudo usermod -aG docker $USER
newgrp docker
```

</div>

<div class="os-block" data-os="arch">

```bash
sudo pacman -S --needed docker docker-compose

sudo systemctl enable --now docker
sudo usermod -aG docker $USER
newgrp docker
```

</div>

---

## Verify Installation

```bash
docker version
docker run hello-world
```

---

## Next Step

[:octicons-arrow-right-24: Install Docker Compose](docker-compose.md)
