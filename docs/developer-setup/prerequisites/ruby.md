# Ruby

Ruby is used for Chef cookbook development and testing with InSpec. Use `rbenv` to manage Ruby versions.

**Required version:** 3.2+  
[:octicons-link-external-16: ruby-lang.org](https://www.ruby-lang.org){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Option 1 — WinGet**

```powershell
winget install --id RubyInstallerTeam.RubyWithDevKit.3.2 -e
```

**Option 2 — Chocolatey**

```powershell
choco install ruby -y
```

</div>

<div class="os-block" data-os="macos">

```bash
brew install rbenv ruby-build
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
source ~/.zshrc

rbenv install 3.3.4
rbenv global 3.3.4
```

</div>

<div class="os-block" data-os="ubuntu debian">

```bash
sudo apt update
sudo apt install -y rbenv ruby-build

echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc

rbenv install 3.3.4
rbenv global 3.3.4
```

</div>

<div class="os-block" data-os="rhel">

```bash
sudo dnf install -y rbenv ruby-build

echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc

rbenv install 3.3.4
rbenv global 3.3.4
```

</div>

<div class="os-block" data-os="arch">

```bash
sudo pacman -S --needed rbenv ruby-build

echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc

rbenv install 3.3.4
rbenv global 3.3.4
```

</div>

---

## Verify Installation

```bash
ruby --version
gem --version
```

---

## Next Step

[:octicons-arrow-right-24: Install Java](java.md)
