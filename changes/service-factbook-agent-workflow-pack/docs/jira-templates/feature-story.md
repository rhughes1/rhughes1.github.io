# Jira feature story template

## Goal

As a <user/persona>, I want <capability> so that <outcome>.

## Background

- Product area:
- Parent epic:
- Related standards/docs:
- Current behavior:
- Desired behavior:

## Acceptance criteria

- [ ] Given <context>, when <action>, then <observable result>.
- [ ] Given <context>, when <error/edge case>, then <safe/clear result>.
- [ ] Given insufficient permission, when <action>, then the backend rejects it and the UI shows a permission-denied state.

## Scope

In scope:

- 

Out of scope:

- 

## OpenSpec

- Requires OpenSpec: Yes/No
- Proposed change id:
- Capability/spec area:

## Implementation slices

- Backend/API/storage:
- UI:
- Tests:
- Docs:
- Cleanup:

## Validation

Required final command:

```bash
make verify
```

Targeted checks expected:

```bash
go test ./...
npm test --prefix ui -- --run
npm run build --prefix ui
openspec validate <change-id> --strict --no-color
```

## Agent instructions

- Branch name:
- Preferred lane:
- Do not touch:
- Reviewer focus:
