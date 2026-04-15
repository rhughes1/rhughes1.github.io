---
title: Work items
description: Standard templates for epics, stories, and bugs.
---

# Work items

Use this page when creating or updating work items.

This page defines the standard description format for:

- Epics
- Stories
- Bugs

Use the matching section below when you open a work item. Keep the section order intact so the description is easy to read in Jira, Codex CLI, and OpenSpec.

If a Jira key exists, include it.
If no Jira key exists, use the same structure for a GitHub issue, repository-local proposal, or direct request.

## References

- [Atlassian: Epics](https://www.atlassian.com/agile/project-management/epics){ target=_blank }
- [Atlassian: User stories](https://www.atlassian.com/agile/project-management/user-stories){ target=_blank }

## Epic template

Use this format for epics:

```markdown
## Overview

## Scope

## Out of Scope

## Success Metrics

## Resources
```

### Epic guidance

- `Overview` should explain the business or technical goal.
- `Scope` should describe what is included.
- `Out of Scope` should describe what is explicitly excluded.
- `Success Metrics` should describe how the epic will be judged complete.
- `Resources` should list references, links, or supporting material.

### Epic example

```markdown
## Overview

We need a standard way to describe and validate work items so that documentation, implementation, and review stay aligned.

## Scope

- Jira epics
- Jira stories
- Jira bugs
- Supporting documentation for Codex CLI and OpenSpec

## Out of Scope

- Implementation details for a specific repository
- Release notes
- GitHub pull request templates

## Success Metrics

- Every new work item uses a consistent description format
- Codex CLI can infer the correct work item type from the key and headings
- OpenSpec can use the same structure when drafting proposals

## Resources

- Contributing & Releases
- Reporting an issue
- Pull request template
```

## Story template

Use this format for stories:

```markdown
As a [persona], I [want to], [so that]

## Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3
```

### Story guidance

- Keep the statement short and clear.
- Use one persona.
- Describe one outcome.
- Avoid implementation detail in the story sentence itself.
- Make the story SMART:
  - Specific
  - Measurable
  - Achievable
  - Relevant
  - Time-bound

### Story example

```markdown
As a platform engineer, I want a reusable Jira work item format, so that work requests are consistent across docs and automation.

## Acceptance Criteria

- [ ] The work item template is documented in the site
- [ ] The template includes explicit sections for the requested work item type
- [ ] Codex CLI can follow the template without additional explanation
- [ ] The template can be reused for future work items with the same structure
```

## Bug template

Use this format for bugs:

```markdown
## Steps to Reproduce

## Expected Results

## Actual Results

## Tooling Versions
```

### Bug guidance

- `Steps to Reproduce` should be numbered and repeatable.
- `Expected Results` should describe what should have happened.
- `Actual Results` should describe what happened instead.
- `Tooling Versions` should include the relevant versions involved in the failure.

### Bug example

```markdown
## Steps to Reproduce

1. Open the affected page.
2. Build the site with `mkdocs build --strict`.
3. Review the error output.

## Expected Results

The site builds successfully without warnings or errors.

## Actual Results

The build fails because of a broken link in a markdown page.

## Tooling Versions

- MkDocs
- MkDocs Material
- Python
- Browser version, if relevant
```

## How to use this with Codex CLI and OpenSpec

When you provide a work item key, use the matching section and keep the same heading order.

### For an epic key or epic request

- Fill in `Overview`
- Fill in `Scope`
- Fill in `Out of Scope`
- Fill in `Success Metrics`
- Fill in `Resources`

### For a story key or story request

- Write the description as:
  - `As a [persona], I [want to], [so that]`
- Add `Acceptance Criteria`
- Keep the acceptance criteria measurable and testable
- Make sure the story is SMART

### For a bug key or bug request

- Fill in:
  - `Steps to Reproduce`
  - `Expected Results`
  - `Actual Results`
  - `Tooling Versions`

### Rule for automation

- If the work item is an epic, story, or bug, use the corresponding template exactly.
- If the key is ambiguous, default to the bug template only when reproducibility is being requested.
- Keep section titles unchanged so they are easy for people and tools to parse.

## Related pages

- [Reporting an issue](reporting-a-issue.md)
- [Contribution workflow](contribution-workflow.md)
- [Pull request template](pull-request-template.md)
