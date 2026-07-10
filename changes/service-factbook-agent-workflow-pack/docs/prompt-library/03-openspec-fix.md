# Prompt: OpenSpec fix

```text
Use the openspec-fix skill to apply the must-fix and should-fix findings below to openspec/changes/<change-id>.

Findings:
<paste review findings>

Constraints:
- Modify only OpenSpec files.
- Do not implement application code.
- Preserve scope boundaries.
- Keep requirements testable and scenario-based.
- Run openspec validate <change-id> --strict --no-color and git diff --check.
```
