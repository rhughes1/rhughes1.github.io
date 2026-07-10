# Codex Cloud environment setup

Use this file as the checklist for configuring the Codex Cloud environment for `rhughes1/service-factbook`.

## Branch

- Default branch for normal work: `develop`.
- For tasks, select the exact branch or commit SHA that matches the Jira task.

## Setup script

Paste the contents of `scripts/codex-cloud-setup.sh` into the Codex Cloud setup script field.

The setup script should install dependencies and tools only. It should not be the final quality gate.

## Maintenance script

Paste the contents of `scripts/codex-cloud-maintenance.sh` into the maintenance script field.

The maintenance script should refresh dependencies after a cached environment resumes.

## Internet access

- Keep agent internet access off by default.
- Enable limited internet only when a task requires external package/docs/network access.
- Prefer setup-time dependency installation over agent-time internet.

## Required prompt line for implementation tasks

Every Codex Cloud implementation task should include:

```text
Before pushing or marking the task complete, run `make verify`. If it fails, fix failures within scope. If it cannot run, report the exact failure and do not claim completion.
```

## Cache reset triggers

Reset Codex Cloud environment cache after changes to:

- Go version
- Node version
- package manager lockfile
- pre-commit config
- OpenSpec CLI version
- setup or maintenance scripts
- repo-level validation flow
