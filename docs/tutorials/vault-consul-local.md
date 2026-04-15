---
title: Vault & Consul Local Stack
description: Run Vault, Consul, and PostgreSQL locally for a built application to point at.
technologies:
  - Vault
  - Consul
  - Docker
  - PostgreSQL
intent:
  - local environment
  - secrets management
  - service discovery
time_to_complete: 20-30 min
difficulty: intermediate
---

# Vault & Consul Local Stack

This tutorial shows how to run Vault and Consul together for a locally built application. Use it when the app needs secrets from Vault, service discovery from Consul, and a local database for dynamic credentials or integration testing.

!!! warning "Dev mode is for local development only"
    Vault dev mode stores everything in memory. All secrets are lost when the process stops. Never use dev mode outside a local developer machine.

## Prerequisites

- [Docker & Docker Compose](../developer-setup/prerequisites/docker.md)
- [Vault CLI](../developer-setup/prerequisites/vault.md)
- [Consul CLI](../developer-setup/prerequisites/consul.md)

## Before you start

- Decide whether the application will run on the host or inside Docker.
- Confirm that ports `8200`, `8500`, and `5432` are free on the local machine.
- Decide whether you need PostgreSQL for dynamic credentials or only Vault and Consul.

## What this stack gives you

- Vault dev server on `127.0.0.1:8200`
- Consul dev agent on `127.0.0.1:8500`
- PostgreSQL on `127.0.0.1:5432`
- Environment variables your app can reuse locally

## Start the stack

Create a dedicated directory for the local stack:

```bash
mkdir -p ~/dev-stack
cd ~/dev-stack
```

Create `docker-compose.yml`:

```yaml
version: "3.8"

networks:
  dev-stack:
    driver: bridge

volumes:
  postgres-data:

services:
  consul:
    image: hashicorp/consul:1.18
    container_name: consul
    restart: unless-stopped
    ports:
      - "8500:8500"
      - "8600:8600/udp"
    command: >
      consul agent -dev
        -client=0.0.0.0
        -log-level=INFO
        -ui
    networks:
      - dev-stack
    healthcheck:
      test: ["CMD", "consul", "members"]
      interval: 10s
      timeout: 5s
      retries: 5

  vault:
    image: hashicorp/vault:1.17
    container_name: vault
    restart: unless-stopped
    ports:
      - "8200:8200"
    environment:
      VAULT_DEV_ROOT_TOKEN_ID: "root"
      VAULT_DEV_LISTEN_ADDRESS: "0.0.0.0:8200"
      VAULT_ADDR: "http://0.0.0.0:8200"
    cap_add:
      - IPC_LOCK
    command: vault server -dev
    networks:
      - dev-stack
    depends_on:
      consul:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "vault", "status"]
      interval: 10s
      timeout: 5s
      retries: 5

  postgres:
    image: postgres:16
    container_name: postgres
    restart: unless-stopped
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: vault
      POSTGRES_PASSWORD: vaultpassword
      POSTGRES_DB: appdb
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - dev-stack
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U vault"]
      interval: 10s
      timeout: 5s
      retries: 5
```

Start the stack and confirm the containers are healthy:

```bash
docker compose up -d
docker compose ps
```

## Point a local application at the stack

Set the connection variables your app needs:

```bash
export VAULT_ADDR="http://127.0.0.1:8200"
export VAULT_TOKEN="root"
export CONSUL_HTTP_ADDR="http://127.0.0.1:8500"
```

If the application runs in Docker, pass the same variables into the container and place it on the same `dev-stack` network.

## Verify

```bash
vault status
consul members
```

If you are using PostgreSQL for dynamic credentials, confirm it is healthy as well:

```bash
docker compose logs postgres
```

## Stop and tear down

```bash
docker compose stop
docker compose down
docker compose down -v
```

## Checklist

- [ ] Vault responds on `127.0.0.1:8200`
- [ ] Consul responds on `127.0.0.1:8500`
- [ ] PostgreSQL is healthy on `127.0.0.1:5432`
- [ ] `VAULT_ADDR`, `VAULT_TOKEN`, and `CONSUL_HTTP_ADDR` are set for the application
- [ ] The application can point to the local stack without extra manual setup

## WSL and Windows note

If you are using Docker Desktop with WSL 2, run `docker compose` from a WSL shell and keep Docker Desktop integration enabled for your distribution.
