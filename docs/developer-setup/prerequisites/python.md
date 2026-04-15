# Python

Python is used for scripting, automation, and tools like Ansible and pre-commit. Use `pyenv` to manage Python versions — never modify the system Python.

**Required version:** 3.11+  
[:octicons-link-external-16: python.org](https://www.python.org){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Option 1 — WinGet (preferred)**

```powershell
winget install --id Python.Python.3.12 -e
```

**Option 2 — Chocolatey**

```powershell
choco install python --version=3.12.0 -y
```

For version management on Windows, use [pyenv-win](https://github.com/pyenv-win/pyenv-win){ target=_blank }:

```powershell
winget install --id pyenv-win.pyenv-win -e
```

</div>

<div class="os-block" data-os="macos">

```bash
# Install pyenv
brew install pyenv

# Add to shell profile (~/.zshrc or ~/.bashrc)
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
source ~/.zshrc

# Install Python
pyenv install 3.12.4
pyenv global 3.12.4
```

</div>

<div class="os-block" data-os="ubuntu debian">

```bash
sudo apt update
sudo apt install -y build-essential libssl-dev zlib1g-dev \
  libbz2-dev libreadline-dev libsqlite3-dev curl \
  libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev

curl https://pyenv.run | bash

echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
source ~/.bashrc

pyenv install 3.12.4
pyenv global 3.12.4
```

</div>

<div class="os-block" data-os="rhel">

```bash
sudo dnf install -y gcc zlib-devel bzip2 bzip2-devel readline-devel sqlite \
  sqlite-devel openssl-devel xz xz-devel libffi-devel findutils

curl https://pyenv.run | bash

echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
source ~/.bashrc

pyenv install 3.12.4
pyenv global 3.12.4
```

</div>

<div class="os-block" data-os="arch">

```bash
sudo pacman -S --needed pyenv base-devel openssl zlib xz tk libffi sqlite readline bzip2 ncurses

# Add to shell profile (~/.bashrc or ~/.zshrc)
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
source ~/.bashrc

# Install Python
pyenv install 3.12.4
pyenv global 3.12.4
```

</div>

---

## Verify Installation

```bash
python3 --version
pip3 --version
```

---

## Next Step

[:octicons-arrow-right-24: Install Go](go.md)
