# 3 · Testing — Live, Eat, Sleep BDD and TDD

> Behaviour Driven Development (BDD) and Test Driven Development (TDD) are vital in the business workflow. Always test as early as possible to catch errors early, prior to things reaching production.

---

## The Idea

Testing is not something you do after the code is written. It is the framework within which the code is written.

Test Driven Development means writing the test first, then writing the minimum code to make it pass. The test is the specification. The code is the implementation. When the acceptance criteria is met, you are done — not when it feels done, not when it looks right, but when the test passes.

Behaviour Driven Development extends this to the business level. Tests are written in language that describes business outcomes, not implementation details. This ensures that what you are testing is what actually matters to the system's consumers.

The combined effect: a codebase that is resilient to change, a development process that produces confident outcomes, and a team that can move quickly without fear of breaking things silently.

---

## What This Looks Like In Practice

### Infrastructure (InSpec / Terraform)

- InSpec profiles validate infrastructure state after provisioning
- Terraform modules include example configurations that are tested in CI via `terraform validate` and `terraform plan`
- Packer builds are validated before an image is promoted

### Application Code

- Unit tests are written before or alongside the code they test — never after
- Integration tests cover the seams between components, not just internals
- Acceptance tests are written in BDD style describing the expected behaviour from a user or system perspective

### Pipelines

- No code merges to `main` without passing tests
- Test coverage is tracked and regressions in coverage block merges
- Test results are published as pipeline artifacts for review

---

## The Enforced Standard

!!! warning "The rule"
    Build your test first. A feature is not complete until the acceptance criteria defined in the test is met. "It works on my machine" is not a test result.
