# Prompt: OpenHands small fix

```text
You are working in rhughes1/service-factbook.
Read AGENTS.md first.
Use only Jira issue <JIRA-KEY> as the work source.
Create branch <branch> from develop.

Task type: isolated fix/docs/test/security cleanup
Scope:
<scope>

Constraints:
- Keep the diff small.
- Do not modify OpenSpec unless explicitly required.
- Do not touch auth/session/policy/audit behavior unless this task explicitly says so.
- Do not add dependencies unless required and justified.
- Run targeted checks, then run make verify.
- Open a draft PR or produce a final diff summary.
```
