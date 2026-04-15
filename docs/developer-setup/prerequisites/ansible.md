# Ansible

Ansible is used for configuration management and application deployment on existing infrastructure. It is agent-less and communicates over SSH.

**Current stable version:** 9.x (ansible-core 2.16+)  
[:octicons-link-external-16: docs.ansible.com](https://docs.ansible.com){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

!!! warning "Windows note"
    Ansible cannot run natively on Windows as a control node. Use **WSL 2** (Windows Subsystem for Linux) with Ubuntu and follow the Ubuntu instructions below.

    ```powershell
    wsl --install -d Ubuntu
    ```

    Then open your WSL terminal and continue with the Ubuntu steps.

</div>

<div class="os-block" data-os="macos">

```bash
brew install ansible
```

</div>

<div class="os-block" data-os="ubuntu debian">

```bash
sudo apt update
sudo apt install -y software-properties-common
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install -y ansible
```

</div>

<div class="os-block" data-os="rhel">

```bash
sudo dnf install -y epel-release
sudo dnf install -y ansible
```

</div>

<div class="os-block" data-os="arch">

```bash
sudo pacman -S --needed ansible
```

</div>

---

## Verify Installation

```bash
ansible --version
```

---

## Next Step

[:octicons-arrow-right-24: Install Chef](chef.md)
