# Tutorial standard

This page defines the standard shape for tutorials in this repository. Use it when writing a new tutorial or revising an existing one.

## Required front matter

Every tutorial should include:

- `title`
- `description`
- `technologies`
- `intent`
- `time_to_complete`

Optional fields:

- `difficulty`
- `prerequisites`
- `related_pages`

## Required page structure

Use this order for tutorial pages:

1. Title
2. Short intro
3. Time to complete
4. Prerequisites
5. Before you start
6. Steps
7. Verification
8. Next step
9. Checklist or summary

## Writing rules

- Keep the tutorial outcome focused on one primary task.
- Use short, imperative step headings.
- Prefer numbered steps for the main workflow.
- Include verification after the major workflow.
- Keep explanatory prose short and practical.
- Avoid mixing unrelated workflows in the same tutorial.

## Classification rules

- `technologies` should list the technologies actually used by the tutorial.
- `intent` should describe what the reader is trying to accomplish.
- `time_to_complete` should be approximate and realistic.
- `difficulty` should reflect how much context or setup is required.

## Recommended taxonomy values

### Technologies

Use stable product or platform names:

- Terraform
- Ansible
- Chef
- Vault
- Consul
- Docker
- GitHub
- HCP Terraform
- PostgreSQL
- AWS

### Intent

Use outcome-oriented labels:

- repository creation
- local environment
- platform bootstrap
- secrets management
- service discovery
- contribution workflow
- release workflow

## Cross-linking rules

- Link a tutorial from the Tutorials index.
- Link technology-specific tutorials from the relevant technology pages when appropriate.
- Keep the tutorial page itself canonical.
- Do not duplicate the full tutorial content in multiple places.
