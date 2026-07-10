# Jira implementation subtask template

## Parent story

- Jira story:
- OpenSpec change:

## Slice boundary

This task implements only:

- 

This task must not touch:

- 

## Branch

```text
feat/<JIRA-KEY>-short-name
```

## Inputs for agent

- Read `AGENTS.md`.
- Read Jira parent story and this subtask through Atlassian MCP.
- Read `openspec/changes/<change-id>/`.
- Use `openspec-slice-implementer`.

## Acceptance criteria for this slice

- [ ] 
- [ ] 

## Validation

Required before push/handoff:

```bash
make verify
```

If `make verify` fails, fix only in-scope failures or report the exact blocker.
