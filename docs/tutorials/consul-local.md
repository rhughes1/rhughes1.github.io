---
title: Consul Local Development
description: Launch a local Consul dev agent for service discovery and health-check workflows.
technologies:
  - Consul
intent:
  - local environment
  - service discovery
time_to_complete: 10 min
difficulty: beginner
---

# Consul Local Development

This tutorial shows how to launch Consul locally for development. Use it when you need service discovery, a local catalog, or a health endpoint for a locally built application.

## Prerequisites

- [Consul CLI](../developer-setup/prerequisites/consul.md)
- A terminal on your local machine

## Before you start

- Decide whether the application will call Consul from the host or from Docker.
- Make sure nothing else is listening on port `8500`.

## Start Consul

Launch Consul in dev mode:

```bash
consul agent -dev -client=0.0.0.0 -ui -log-level=INFO
```

Consul is ready when the HTTP server listens on port `8500`.

## Point an application at Consul

Set the Consul HTTP address in the same shell session as your local application:

```bash
export CONSUL_HTTP_ADDR="http://127.0.0.1:8500"
```

If the application runs in Docker, pass the same environment variable into the container.

## Verify

```bash
consul members
```

You can also open the Consul UI at `http://127.0.0.1:8500`.

## Next step

- [Vault & Consul Local Stack](vault-consul-local.md) if your application also needs Vault
- [Consul CLI installation](../developer-setup/prerequisites/consul.md) if you still need to install the tool

## Checklist

- [ ] Consul is listening on `127.0.0.1:8500`
- [ ] `CONSUL_HTTP_ADDR` is set in the application shell
- [ ] `consul members` returns a healthy dev agent
