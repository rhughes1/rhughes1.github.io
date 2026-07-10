# Prompt: Split work into parallel lanes

```text
Read Jira issue <JIRA-KEY>, parent epic, AGENTS.md, and openspec/changes/<change-id>.
Create a parallel implementation plan with one branch per slice.

For each slice, provide:
- Jira subtask title
- Branch name
- Agent lane: Codex Cloud / OpenCode local / OpenHands / review-only
- Files likely involved
- Files to avoid
- Validation commands
- Merge order
- Risk level

Rules:
- One mutating agent per branch.
- Avoid overlapping file ownership.
- Backend/API contract comes before UI unless already specified.
- Every implementation branch must finish with make verify.
```
