# Prompt: Codex Cloud implementation slice

```text
Use the openspec-slice-implementer skill.

Repository: rhughes1/service-factbook
Base branch: develop
Working branch: <branch>
Jira issue: <JIRA-KEY>
OpenSpec change: <change-id>
Slice boundary: <backend/API/storage/CLI/UI/tests/docs/cleanup>

Use Atlassian MCP only for <JIRA-KEY> and parent epic context.
Read AGENTS.md first.
Read openspec/changes/<change-id>/ and relevant current-state specs.
Implement only this slice.
Do not archive the OpenSpec change.
Do not perform unrelated refactors.
Do not add dependencies unless required and justified.

Validation:
- Run targeted checks for changed files.
- Before pushing or marking complete, run `make verify`.
- If `make verify` fails, fix in-scope failures.
- If it cannot run, report the exact failure and do not claim completion.

Finish with the skill output format exactly.
```
