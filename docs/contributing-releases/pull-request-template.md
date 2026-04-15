---
title: Pull Request Template
description: Standard pull request description template used across repositories.
---

# Pull Request Template

Every repository should include a `.github/PULL_REQUEST_TEMPLATE.md` file at the root.

This template is enforced. A PR description that omits required sections should be corrected before merge.

## Template

```markdown
## Summary

<!-- What does this PR do? One or two sentences. Be specific. -->

## Changes

<!-- Bullet list of every discrete change made. -->
-
-

## Related Issues

<!-- Link every Jira issue this PR addresses. Remove this section if none. -->
- Jira: [PLAT-XXX](https://rhughes1.atlassian.net/browse/PLAT-XXX)

## Related Pull Requests

<!-- Link any related PRs in this or other repositories. Remove if none. -->
-

## Testing

<!-- Describe exactly how this was tested. Be specific — "it works" is not a test description. -->
- [ ] Pre-commit hooks pass locally (`pre-commit run --all-files`)
- [ ] CI checks pass on this PR
- [ ] Manual verification completed

**Manual verification steps taken:**

<!-- Describe what you ran, what you observed, and what confirmed it worked. -->

## Documentation

- [ ] README updated (if applicable)
- [ ] Inline code comments updated (if applicable)
- [ ] Site documentation updated at rhughes1.github.io (if applicable)

## Breaking Changes

<!-- Required for feat!: PRs. Describe what breaks and the migration path.
     Write N/A if this is not a breaking change. -->
N/A
```

## Field guidance

### Summary
Use one or two sentences. Add context the PR title cannot convey.

### Changes
List discrete changes, not a summary. If five files changed for five reasons, use five bullets.

### Related Issues
Link every Jira issue this PR addresses. If none exist, remove the section.

### Related Pull Requests
Use this for cross-repository or dependent changes.

### Testing
Describe the actual verification performed. A checkbox alone is not enough.

### Documentation
Call out any docs or inline comments that changed.

### Breaking Changes
Required for `feat!` PRs. Describe the break and the migration path.
