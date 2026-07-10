# service-factbook code review checklist

Use this with Codex `/review`, `implementation-review-gate`, and PR reviews.

## Blocking checks

- Does the implementation match the active OpenSpec change?
- Did the implementation avoid unrelated refactors and scope creep?
- Does `make verify` pass on this branch?
- Are public API response shapes, errors, status codes, and validation behavior tested?
- Are authn/authz/policy checks enforced on the backend, not only in the UI?
- Are secrets, passwords, tokens, session IDs, and sensitive values never logged, returned, persisted, or placed in audit metadata?
- Are storage migrations or persistence changes backward-compatible or explicitly documented?
- Are UI states covered: loading, empty, error, permission-denied, populated, destructive confirmation?
- Are docs updated for user-facing behavior changes?
- Are new dependencies justified and reflected in lockfiles?

## Review output format

```text
Must-fix:
- ...

Should-fix:
- ...

Nice-to-have:
- ...

Security concerns:
- ...

Validation:
- Commands run:
- Result:

Ready:
- Yes/No
- Rationale:
```

Return `Ready: No` if there are must-fix items or if validation could not be verified for security-sensitive, persistence-sensitive, or public API contract-sensitive behavior.
