# AWS CLI

The AWS Command Line Interface is used for interacting with AWS services, managing infrastructure, and scripting cloud operations.

**Current stable version:** v2 (v1 is not supported here)  
[:octicons-link-external-16: aws.amazon.com/cli](https://aws.amazon.com/cli/){ target=_blank }

---

<div class="os-selector-bar"></div>

## Installation

<div class="os-block" data-os="windows">

**Option 1 — WinGet (preferred)**

```powershell
winget install --id Amazon.AWSCLI -e
```

**Option 2 — Chocolatey**

```powershell
choco install awscli -y
```

</div>

<div class="os-block" data-os="macos">

```bash
brew install awscli
```

</div>

<div class="os-block" data-os="ubuntu debian">

```bash
sudo apt update
sudo apt install -y unzip curl

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "/tmp/awscliv2.zip"
unzip /tmp/awscliv2.zip -d /tmp/
sudo /tmp/aws/install
rm -rf /tmp/awscliv2.zip /tmp/aws
```

</div>

<div class="os-block" data-os="rhel">

```bash
sudo dnf install -y unzip curl

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "/tmp/awscliv2.zip"
unzip /tmp/awscliv2.zip -d /tmp/
sudo /tmp/aws/install
rm -rf /tmp/awscliv2.zip /tmp/aws
```

</div>

<div class="os-block" data-os="arch">

```bash
sudo pacman -S --needed aws-cli
```

</div>

---

## Verify Installation

```bash
aws --version
```

Expected output: `aws-cli/2.x.x Python/3.x.x ...`

---

## Configuration

Configure your default credentials and region:

```bash
aws configure
```

You will be prompted for:

| Prompt | Value |
|--------|-------|
| AWS Access Key ID | Your IAM access key |
| AWS Secret Access Key | Your IAM secret key |
| Default region name | e.g. `us-east-1` |
| Default output format | `json` |

!!! warning "Credential security"
    Long-lived IAM access keys are a last resort. Prefer AWS SSO / Identity Center where available. Static credentials stored in `~/.aws/credentials` must never be committed to a repository.

---

## Next Step

[:octicons-arrow-right-24: Install Azure CLI](azure-cli.md)
