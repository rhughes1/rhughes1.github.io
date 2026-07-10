# Agent lanes

Use lanes so each tool has a job and no agent steps on another branch.

## Recommended lane assignment

| Lane | Primary tool | Good for | Avoid |
|---|---|---|---|
| Spec lane | ChatGPT, Codex, OpenCode | OpenSpec author/review/fix, decomposition | application code implementation |
| Backend lane | Codex Cloud or OpenCode | Go API, storage, CLI, tests | UI polish and screenshot-heavy work |
| UI lane | OpenCode local or Codex local | React/Vite/TypeScript, visual refinement | backend storage changes |
| Docs lane | Codex Cloud | docs, MkDocs pages, changelog notes | behavior changes without implementation |
| Review lane | Codex `/review`, implementation-review-gate | PR/code/security/spec review | modifying files unless asked |
| Cleanup lane | OpenCode local | pre-commit failures, small targeted fixes | ambiguous feature expansion |
| OpenHands lane | OpenHands Agent Canvas | isolated Jira/GitHub issue fixes, dependency/security cleanup, PR review experiments | primary service-factbook feature implementation until proven reliable |

## Parallel rules

1. Never run two mutating agents on the same branch.
2. Never let two agents edit the same file set unless one is read-only.
3. Split backend and UI branches only when the API contract is already stable.
4. Use draft PRs early to expose diffs and CI status.
5. Merge docs after behavior branches if docs depend on finalized behavior.
6. Stop parallel work if `develop` moves in a way that invalidates an active slice.

## Suggested parallel patterns

### Safe two-lane pattern

- Lane A: Codex Cloud implements backend/API slice.
- Lane B: OpenCode local implements UI slice against the approved API contract.
- Lane C: Codex review reads both PRs after CI.

### Safer first month pattern

- Codex Cloud: one implementation branch.
- OpenCode local: one cleanup/docs/test branch.
- You: review and merge.

### OpenHands experiment pattern

- OpenHands: one isolated bug/docs/dependency issue.
- Codex/OpenCode: primary feature work.
- Compare PR quality after three OpenHands PRs before expanding usage.
