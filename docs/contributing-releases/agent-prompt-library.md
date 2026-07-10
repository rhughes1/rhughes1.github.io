---
title: Agent prompt library
description: Copy-ready generic prompts for Jira intake, specs, implementation slices, review gates, and archive tasks.
---

# Agent prompt library

Use these prompts as small starting points. Replace placeholders with values from Jira and the target repository adapter.

Do not use this page to bypass repository instructions. Agents should still read the target repository's `AGENTS.md` or local equivalent before making changes.

## Jira intake to proposal

```text
Use Atlassian MCP to read Jira issue <JIRA-KEY>, including parent epic, comments, links, and acceptance criteria.
Then create or update the repository's required proposal or OpenSpec change for <repository>.

Constraints:
- Read the repository instructions first.
- Use change ID: <change-id>.
- Include explicit in-scope and out-of-scope boundaries.
- Include concrete scenarios or acceptance criteria for each requirement.
- Include tasks that can be split into implementation slices.
- Do not implement application code.
- Run the repository's proposal validation command if one exists.

Output:
- Files created or changed
- Requirements or scenarios summary
- Validation command and result
- Open questions or blockers
```

## Proposal or OpenSpec review

```text
Review the active proposal or OpenSpec change <change-id> for <repository>.

Read:
- Repository instructions
- Proposal or OpenSpec files
- Relevant current-state specs or docs
- Jira issue <JIRA-KEY> and parent epic if needed

Do not modify implementation code.
Run the repository's proposal validation command if practical.

Return findings using the review gate format:
- Must-fix
- Should-fix
- Nice-to-have
- Security concerns
- Validation
- Ready
```

## Proposal or OpenSpec fix

```text
Apply the must-fix and should-fix findings below to proposal or OpenSpec change <change-id>.

Findings:
<paste review findings>

Constraints:
- Modify only proposal, spec, or documentation files required for this change.
- Do not implement product or infrastructure code.
- Preserve scope boundaries.
- Keep requirements measurable and scenario-based.
- Run the repository's proposal validation command and a diff whitespace check if available.
```

## Implementation slice

```text
Repository: <repository>
Base branch: <base-branch>
Working branch: <branch>
Jira issue: <JIRA-KEY>
Proposal or OpenSpec change: <change-id or none>
Slice boundary: <slice>
Preferred lane: <lane>

Instructions:
- Read the repository instructions first.
- Use Atlassian MCP only for <JIRA-KEY> and parent epic context.
- Read the active proposal or OpenSpec change if one exists.
- Implement only this slice.
- Do not perform unrelated refactors.
- Do not add dependencies unless required and justified.
- Do not archive the proposal or OpenSpec change.

Validation:
- Run targeted checks for changed files.
- Before pushing or marking complete, run <validation-command>.
- If validation fails, fix in-scope failures.
- If validation cannot run, report the exact failure and do not claim completion.

Finish with:
- Files changed
- Validation command and result
- Remaining blockers
- Pull request or handoff notes
```

## Small isolated fix

```text
Repository: <repository>
Jira issue: <JIRA-KEY>
Base branch: <base-branch>
Working branch: <branch>

Task type: isolated fix, docs cleanup, test improvement, dependency cleanup, or security cleanup.

Scope:
<scope>

Constraints:
- Keep the diff small.
- Do not modify proposals or specs unless explicitly required.
- Do not touch sensitive behavior unless this task explicitly says so.
- Do not add dependencies unless required and justified.
- Run targeted checks, then run <validation-command>.
- Open a draft PR or produce a final diff summary.
```

## Implementation review

```text
Review branch or PR <branch-or-pr> against base <base-branch>.

Repository: <repository>
Jira issue: <JIRA-KEY>
Proposal or OpenSpec change: <change-id or none>

Read:
- Repository instructions
- Jira issue and parent epic through Atlassian MCP
- Active proposal or OpenSpec change if one exists
- Relevant current-state specs or docs
- Changed source, tests, and docs

Do not modify files.
Run targeted validation if practical.

Return findings using the review gate format:
- Must-fix
- Should-fix
- Nice-to-have
- Security concerns
- Validation
- Ready
```

## Archive or close proposal

```text
Archive, close, or sync completed proposal or OpenSpec change <change-id> for <repository>.

Preconditions:
- Implementation is complete.
- Review has no must-fix items.
- The user or repository workflow explicitly allows archive or closeout.

Constraints:
- Do not modify implementation code.
- Sync completed behavior into current-state specs or docs as required by the repository.
- Run the repository's final spec or documentation validation command.
- Return files changed, validation result, and any follow-up work.
```

## Split work into parallel lanes

```text
Read Jira issue <JIRA-KEY>, parent epic, repository instructions, and active proposal or OpenSpec change <change-id>.

Create a parallel implementation plan with one branch per mutating slice.

For each slice, provide:
- Jira subtask title
- Branch name
- Agent lane
- Files likely involved
- Files to avoid
- Validation commands
- Merge order
- Risk level

Rules:
- One mutating agent per branch.
- Avoid overlapping file ownership.
- Keep contracts stable before splitting dependent UI, backend, infrastructure, or docs work.
- Every implementation branch must finish with the repository's required validation command.
```

## Related pages

- [Work items](jira-work-items.md)
- [Agentic delivery](agentic-delivery.md)
- [Agent lanes](agent-lanes.md)
- [Review gates](review-gates.md)
