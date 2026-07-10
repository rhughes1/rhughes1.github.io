# Prompt: Jira intake to OpenSpec

```text
Use the Atlassian MCP to read Jira issue <JIRA-KEY>, including parent epic, comments, links, and acceptance criteria.
Then use the openspec-author skill to create an OpenSpec change for service-factbook.

Constraints:
- Read repo AGENTS.md first.
- Use change id: <change-id>.
- Create files under openspec/changes/<change-id>/.
- Include explicit in-scope and out-of-scope boundaries.
- Include concrete scenarios for each requirement.
- Include a tasks.md that can be split into backend, UI, tests, docs, and cleanup slices.
- Do not implement application code.
- Run openspec validate <change-id> --strict --no-color.

Output:
- Files created/changed
- Requirements/scenarios summary
- Validation command/result
- Open questions/blockers
```
