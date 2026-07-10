# Prompt: OpenCode local implementation slice

```text
You are working locally in service-factbook.
Read AGENTS.md first.
Use Jira issue <JIRA-KEY> as the work source through Atlassian MCP.
Use OpenSpec change <change-id>.
Create or switch to branch <branch> from develop.

Implement only this slice:
<slice>

Use MCP routing:
- Atlassian only for Jira context.
- Serena for precise symbol lookup.
- GitHub only for PR/CI metadata if needed.
- context7 only for current external library docs.

Run targeted checks while working.
Finish by running:
make verify

Do not push or mark complete unless make verify passes, or report the exact blocker.
```
