---
title: Contributing & Releases
description: Contribution workflow, release behavior, and versioning guidance for repositories.
---

# Contributing & Releases

This section defines how changes move from branch to merge and from merge to release.

## Start here

<div class="grid cards" markdown>

-   :material-source-branch: **Contribution workflow**
    Branching, commits, pull requests, and issue reporting.

    [:octicons-arrow-right-24: Open contribution workflow](contribution-workflow.md)

-   :material-bug-outline: **Reporting an issue**
    Jira Cloud issue reporting with reproducible details and tool versions.

    [:octicons-arrow-right-24: Open issue reporting](reporting-a-issue.md)

-   :material-format-list-checks: **Work items**
    Jira as the work router, with agent-ready fields and templates.

    [:octicons-arrow-right-24: Open work items](jira-work-items.md)

-   :material-transit-connection-variant: **Agentic delivery**
    Route Jira work through specs, slices, validation, pull requests, and review gates.

    [:octicons-arrow-right-24: Open agentic delivery](agentic-delivery.md)

-   :material-source-branch-sync: **Agent lanes**
    One mutating agent, one branch, one slice.

    [:octicons-arrow-right-24: Open agent lanes](agent-lanes.md)

-   :material-clipboard-text-outline: **Pull request template**
    The required PR description format used across repositories.

    [:octicons-arrow-right-24: Open pull request template](pull-request-template.md)

-   :material-shield-check-outline: **Review gates**
    Required review output for implementation, security, docs, and spec reviews.

    [:octicons-arrow-right-24: Open review gates](review-gates.md)

-   :material-comment-text-multiple-outline: **Agent prompt library**
    Copy-ready prompts for Jira intake, implementation slices, reviews, and archive work.

    [:octicons-arrow-right-24: Open prompt library](agent-prompt-library.md)

-   :material-rocket-launch-outline: **Release workflow**
    Semantic versioning, merge behavior, and release automation.

    [:octicons-arrow-right-24: Open release workflow](release-workflow.md)

</div>

For repository and Terraform version rules, see [Versioning](versioning/index.md).

## Reading order

1. Read [Contribution workflow](contribution-workflow.md) to understand how changes enter a repository.
2. Read [Reporting an issue](reporting-a-issue.md) to capture bugs and documentation gaps cleanly.
3. Read [Work items](jira-work-items.md) to format Jira issues, stories, bugs, implementation subtasks, and review subtasks consistently.
4. Read [Agentic delivery](agentic-delivery.md) to understand how Jira work moves through specs, branches, validation, and review.
5. Read [Agent lanes](agent-lanes.md) before splitting work across tools or branches.
6. Read [Pull request template](pull-request-template.md) before opening a PR.
7. Read [Review gates](review-gates.md) before reviewing implementation, security, docs, or spec changes.
8. Read [Release workflow](release-workflow.md) to understand what happens after merge.
9. Read [Versioning](versioning/index.md) for repository and Terraform version rules.
