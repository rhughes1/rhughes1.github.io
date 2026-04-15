# 10 · Teamwork

> It's not just working together. It's about being able to consume what others built, better.

---

## The Idea

A team is not a collection of individuals who happen to share a Slack channel. A team is a system — and like any system, it has failure modes. The most common one is concentration: one person who knows everything, does everything, and is therefore the bottleneck for everything.

In any team sport, the moment one player is doing it all, that player gets targeted and the team fails. The same is true in engineering. The goal is not to have the best individual contributor. The goal is to have a team where anyone can pick up what anyone else has built, understand it, and make it better.

This is why the other nine principles exist. Code that is readable (Principle 6), codified (Principle 4), observable (Principle 8), and tested (Principle 3) is code that can be handed off without a knowledge transfer meeting that takes three hours and still leaves things unclear.

---

## What This Looks Like In Practice

### Knowledge Distribution

- No single person is the sole owner of any system or process in production
- Documentation is written as if the author will not be available to answer questions
- Pair programming and code review are not optional — they are how knowledge spreads

### Code Reuse

- Terraform modules, Ansible roles, and pipeline templates are shared artifacts, not one-off scripts
- When someone solves a problem, the solution is committed in a form that others can consume without asking the author how it works
- Internal documentation links to the code it describes — documentation that drifts from reality is worse than no documentation

### Onboarding

- A new team member should be able to reach a working local environment and understand the architecture within their first day, using only the [Developer Setup](../developer-setup/index.md) documentation
- Onboarding time is itself a metric — if it takes more than a day, the documentation needs improvement

### Review Culture

- Pull requests are reviewed for adherence to these principles, not just for correctness
- Feedback is specific, constructive, and references standards rather than personal preference
- The goal of review is shared understanding, not gatekeeping

---

## The Enforced Standard

!!! info "The test"
    If the most senior person on the team was unavailable for two weeks with no handoff, would the team be able to operate confidently? If not, that is a teamwork problem with a documentation and codification solution.
