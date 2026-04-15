# 4 · Repeatability & Portability

> If you need to do it a second time, it should be written in code.

---

## The Idea

Codification is not a nice-to-have. It is the primary artifact of engineering work.

When you write something in code, you are doing several things at once:

- **Documenting** — the code describes exactly what was done, in a way that prose rarely can
- **Creating memory** — institutional knowledge that does not leave when a person does
- **Enabling handoff** — someone else can pick it up, understand it, and improve upon it
- **Signing your work** — code is a statement of quality and intent

The strongest argument for codifying something is not that you do it often — it is that you do it *infrequently*. The less often a process runs, the more likely it is to be forgotten, misremembered, or done inconsistently. A runbook that lives in someone's head is a single point of failure.

---

## What This Looks Like In Practice

### Infrastructure

- Everything is Terraform. There are no resources in any cloud account that were not created through code
- Packer builds AMIs and images so that server configuration is never done by hand on a running instance
- Ansible handles configuration that Packer cannot bake in at build time

### Processes & Runbooks

- Operational runbooks are committed to the documentation repo alongside the code they support
- Any manual step in a runbook is a candidate for automation in the next iteration
- If a process requires a human to run a script manually, that script should be a pipeline job with proper input validation

### Local Development

- Developer environments are defined in code (see [Developer Setup](../developer-setup/index.md))
- Tool versions are pinned and managed via version managers, not installed ad hoc

---

## The Enforced Standard

!!! info "The test"
    If a new person joined today and needed to perform the task you just completed, could they do it exactly as you did it by following only what exists in the repository? If not, something needs to be committed.
