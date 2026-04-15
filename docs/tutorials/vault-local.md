---
title: Vault Local Development
description: Launch a local Vault dev server for secrets workflows and application testing.
technologies:
  - Vault
intent:
  - local environment
  - secrets management
time_to_complete: 10 min
difficulty: beginner
---

# Vault Local Development

This tutorial shows how to launch Vault locally for development. Use it when you need a local secrets backend for manual testing or for a locally built application.

## Prerequisites

- [Vault CLI](../developer-setup/prerequisites/vault.md)
- A terminal on your local machine

## Before you start

- Decide whether you want a one-off local dev server or a reusable shell session.
- Make sure nothing else is listening on port `8200`.

## Start Vault

Launch Vault in dev mode:

```bash
vault server -dev -dev-listen-address="127.0.0.1:8200" -dev-root-token-id="root"
```

Vault is ready when the server reports that it has started and unsealed.

## Point an application at Vault

Set the Vault address and token in the same shell session as your local application:

```bash
export VAULT_ADDR="http://127.0.0.1:8200"
export VAULT_TOKEN="root"
```

If the application runs in Docker, pass the same environment variables into the container.

## Verify

```bash
vault status
vault token lookup
```

## Next step

- [Vault & Consul Local Stack](vault-consul-local.md) if your application also needs Consul
- [Vault CLI installation](../developer-setup/prerequisites/vault.md) if you still need to install the tool

## Checklist

- [ ] Vault is listening on `127.0.0.1:8200`
- [ ] `VAULT_ADDR` and `VAULT_TOKEN` are set in the application shell
- [ ] `vault status` returns an active dev server
