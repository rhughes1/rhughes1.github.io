# Prompt: Archive OpenSpec

```text
Use the openspec-archive-finisher skill.
Archive OpenSpec change <change-id>.

Preconditions:
- Implementation is complete.
- Review has no must-fix items.
- User explicitly requested archive.

Constraints:
- Do not modify application code.
- Sync completed behavior into current-state specs.
- Run openspec validate --specs --no-color and git diff --check.
- Return the required skill output format exactly.
```
