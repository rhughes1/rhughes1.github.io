# SSH & GitHub

SSH keys are used for all GitHub operations — cloning, pushing, and pulling. HTTPS authentication is not used here.

!!! tip "Arch"
    If `ssh-keygen`, `ssh-agent`, or `ssh-add` are not available yet, install the OpenSSH client first:

    ```bash
    sudo pacman -S --needed openssh
    ```

---

<div class="os-selector-bar"></div>

## Generate an SSH Key

Use `ed25519` — it is faster and more secure than the older RSA algorithm.

<div class="os-block" data-os="windows">

Run the following in **PowerShell**:

```powershell
ssh-keygen -t ed25519 -C "your@email.com"
```

When prompted:

- **File location**: Press `Enter` to accept the default (`C:\Users\YOU\.ssh\id_ed25519`)
- **Passphrase**: Set a strong passphrase — do not leave it empty

</div>

<div class="os-block" data-os="macos ubuntu debian rhel">

```bash
ssh-keygen -t ed25519 -C "your@email.com"
```

When prompted:

- **File location**: Press `Enter` to accept the default (`~/.ssh/id_ed25519`)
- **Passphrase**: Set a strong passphrase — do not leave it empty

</div>

---

## Start the SSH Agent and Add Your Key

<div class="os-block" data-os="windows">

```powershell
# Start the agent (run once per session, or configure it as a service)
Get-Service -Name ssh-agent | Set-Service -StartupType Automatic
Start-Service ssh-agent

# Add your key
ssh-add $env:USERPROFILE\.ssh\id_ed25519
```

</div>

<div class="os-block" data-os="macos">

macOS automatically manages the SSH agent. Add your key and store the passphrase in Keychain:

```bash
eval "$(ssh-agent -s)"
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

Then add the following to `~/.ssh/config` (create the file if it does not exist):

```
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

</div>

<div class="os-block" data-os="ubuntu debian">

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

To persist the agent across sessions, add the following to your `~/.bashrc` or `~/.zshrc`:

```bash
# Start SSH agent if not already running
if [ -z "$SSH_AUTH_SOCK" ]; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_ed25519
fi
```

</div>

<div class="os-block" data-os="rhel">

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

To persist the agent across sessions, add the following to your `~/.bashrc`:

```bash
if [ -z "$SSH_AUTH_SOCK" ]; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_ed25519
fi
```

</div>

---

## Add Your Public Key to GitHub

1. Copy your public key to the clipboard:

<div class="os-block" data-os="windows">

```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | Set-Clipboard
```

</div>

<div class="os-block" data-os="macos">

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

</div>

<div class="os-block" data-os="ubuntu debian rhel">

```bash
cat ~/.ssh/id_ed25519.pub
# Copy the output manually
```

</div>

2. Go to [GitHub → Settings → SSH and GPG keys](https://github.com/settings/keys){ target=_blank }
3. Click **New SSH key**
4. Set a descriptive title (e.g. `Work Laptop - 2026`)
5. Paste the public key and click **Add SSH key**

---

## Verify the Connection

```bash
ssh -T git@github.com
```

Expected output:

```
Hi rhughes1! You've successfully authenticated, but GitHub does not provide shell access.
```

---

## SSH Config File (Recommended)

Create or edit `~/.ssh/config` to simplify connections:

<div class="os-block" data-os="windows">

Create `C:\Users\YOU\.ssh\config`:

</div>

<div class="os-block" data-os="macos ubuntu debian rhel">

Create or edit `~/.ssh/config`:

</div>

```
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes
```

Set correct permissions on the config file:

<div class="os-block" data-os="macos ubuntu debian rhel">

```bash
chmod 600 ~/.ssh/config
```

</div>

<div class="os-block" data-os="windows">

Windows manages SSH file permissions differently — no manual chmod required when using the built-in OpenSSH client.

</div>

---

## Next Step

[:octicons-arrow-right-24: Install pre-commit](pre-commit.md)
