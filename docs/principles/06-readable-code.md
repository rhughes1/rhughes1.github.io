# 6 · Understanding the Code

> The next person can read and understand the code like a story.

---

## The Idea

Code that cannot be understood is code that cannot be trusted, maintained, or improved. The instinct to rewrite rather than read someone else's code is not a character flaw — it is a reasonable response to code that does not explain itself.

The solution is not to write less code. It is to write code that communicates intent as clearly as it communicates logic. A variable named `x` tells you nothing. A variable named `lease_duration_seconds` tells you everything. A function named `doStuff()` creates fear. A function named `rotateDatabaseCredentials()` creates confidence.

Think of the next person to inherit your work. They may be junior. They may be unfamiliar with the technology. They may be you in six months. Write for them.

---

## What This Looks Like In Practice

### Naming

- Variables, functions, modules, and resources use full, descriptive names
- Abbreviations are avoided unless they are universally understood in context (`url`, `id`, `aws`)
- Booleans are named as questions: `is_enabled`, `has_encryption`, `should_rotate`

### Structure

- Functions and modules do one thing. If you need to describe what a function does with the word "and", it should be two functions
- Files are organized to reflect the problem domain, not the implementation detail
- No commented-out code in the main branch — use version control for history

### Documentation

- Every Terraform module has a README generated from its inputs and outputs
- Every non-obvious decision has a comment explaining the *why*, not the *what*
- Architecture Decision Records (ADRs) capture the reasoning behind significant choices

### Style

- A linter and formatter are configured and enforced in CI for every language and tool used
- Style is not a matter of preference — it is enforced consistently so that no two files look like they were written by different people

---

## The Enforced Standard

!!! tip "The test"
    Hand the code to someone unfamiliar with it. If they cannot understand what it does within five minutes without asking you a question, it needs more clarity — not more comments, but clearer code.
