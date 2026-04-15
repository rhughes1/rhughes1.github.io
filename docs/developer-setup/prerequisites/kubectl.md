# kubectl

kubectl is the Kubernetes command-line tool for deploying, inspecting, and managing applications on Kubernetes clusters.

**Current stable version:** Match your cluster version (within ±1 minor version)  
[:octicons-link-external-16: kubernetes.io/docs/tasks/tools](https://kubernetes.io/docs/tasks/tools/){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Option 1 — WinGet**

```powershell
winget install --id Kubernetes.kubectl -e
```

**Option 2 — Chocolatey**

```powershell
choco install kubernetes-cli -y
```

</div>

<div class="os-block" data-os="macos">

```bash
brew install kubectl
```

</div>

<div class="os-block" data-os="ubuntu debian">

```bash
sudo apt update
sudo apt install -y apt-transport-https ca-certificates curl gnupg

curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.30/deb/Release.key | \
  sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] \
  https://pkgs.k8s.io/core:/stable:/v1.30/deb/ /" | \
  sudo tee /etc/apt/sources.list.d/kubernetes.list

sudo apt update
sudo apt install -y kubectl
```

</div>

<div class="os-block" data-os="rhel">

```bash
cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://pkgs.k8s.io/core:/stable:/v1.30/rpm/
enabled=1
gpgcheck=1
gpgkey=https://pkgs.k8s.io/core:/stable:/v1.30/rpm/repodata/repomd.xml.key
EOF

sudo dnf install -y kubectl
```

</div>

<div class="os-block" data-os="arch">

```bash
sudo pacman -S --needed kubectl
```

</div>

---

## Verify Installation

```bash
kubectl version --client
```

---

## Shell Completion (Recommended)

<div class="os-block" data-os="macos ubuntu debian rhel">

```bash
# For bash
echo 'source <(kubectl completion bash)' >> ~/.bashrc

# For zsh
echo 'source <(kubectl completion zsh)' >> ~/.zshrc
```

</div>

<div class="os-block" data-os="windows">

```powershell
kubectl completion powershell | Out-String | Invoke-Expression
```

</div>

---

## Next Step

[:octicons-arrow-right-24: Install Python](python.md)
