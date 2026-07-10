# Agent workflow for service-factbook

This is the operating model for using Jira, OpenSpec, Codex Cloud, OpenCode, MCP servers, and optional OpenHands without Ryan becoming the bottleneck.

## Core loop

1. **Jira intake**
   - Create or choose a Jira issue.
   - Make sure the issue has a goal, acceptance criteria, exclusions, validation expectations, and likely affected area.
   - Link the parent epic when applicable.

2. **OpenSpec authoring**
   - Use `openspec-author` for any feature/API/security/storage/UI behavior change.
   - The output must create or update files under `openspec/changes/<change-id>/`.
   - Run `openspec validate <change-id> --strict --no-color`.

3. **OpenSpec review**
   - Use `openspec-review-panel`.
   - If any must-fix exists, do not implement.
   - Apply fixes with `openspec-fix`.

4. **Slice planning**
   - Split work into independent implementation slices:
     - backend/API/storage/CLI
     - UI
     - tests/fixtures
     - docs/examples
     - cleanup/pre-commit
   - One slice equals one branch and one agent lane.

5. **Implementation**
   - Use `openspec-slice-implementer`.
   - Each agent gets one Jira key, one branch, one OpenSpec change, and one implementation boundary.
   - Run targeted checks while working.
   - Run `make verify` before pushing or marking complete.

6. **Review**
   - Use `implementation-review-gate` against the branch/PR.
   - Must-fix items block merge.
   - Should-fix items are fixed unless explicitly deferred.

7. **Archive**
   - Use `openspec-archive-finisher` only after implementation is merged or explicitly accepted.
   - Archive in a separate task/branch when possible.

## Done means

- Jira acceptance criteria are satisfied.
- OpenSpec is implemented without scope creep.
- `make verify` passes.
- PR template is complete.
- Security-sensitive behavior is reviewed.
- UI changes include screenshots or notes.
- Implementation review has no must-fix items.
