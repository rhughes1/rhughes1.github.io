# rhughes1.github.io

Personal documentation site for platform engineering, cloud architecture, infrastructure standards, and tutorials.

The site is built with MkDocs Material and is organized around a few core areas:

- Principles
- Engineering Standards
- Developer Setup
- Contributing & Releases
- Infrastructure
- Tutorials

## Local development

Install the site dependencies, then run the docs locally:

```bash
pip install -r requirements.txt
mkdocs serve
```

Build the site for verification:

```bash
mkdocs build
```

## Site structure

- [`docs/index.md`](docs/index.md) - homepage and top-level navigation
- [`docs/principles/`](docs/principles/) - engineering principles
- [`docs/standards/`](docs/standards/) - Terraform, Packer, Ansible, and Go standards
- [`docs/developer-setup/`](docs/developer-setup/) - local setup and prerequisites
- [`docs/contributing-releases/`](docs/contributing-releases/) - contribution, issue, release, and versioning guidance
- [`docs/infrastructure/`](docs/infrastructure/) - corporate metadata, naming, and tagging standards
- [`docs/tutorials/`](docs/tutorials/) - step-by-step tutorials

## Internal standards

- [`codex/`](codex/) - internal standards for Codex and OpenSpec, including blog posts, tutorials, and artifact-specific work item guidance

## Contact

- [LinkedIn](https://www.linkedin.com/in/ryan-hughes-csm-0601453b/)
- [GitHub](https://github.com/rhughes1)
