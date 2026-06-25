# Ansible Standards

!!! note "Coming soon"
    This page is under active development. Standards and patterns will be published here.

## Delivery model

Ansible playbook repositories default to mainline development when maintained by one developer. Branch from `main`, validate the change, and merge back to `main` through a pull request.

When multiple developers are contributing to a grouped playbook release, use the release branch flow from the [contribution workflow](../contributing-releases/contribution-workflow.md). Create a temporary `release/*` branch from `main`, merge feature branches into that release branch, validate the grouped release, and merge the release branch back to `main`.

## Related tutorials

- [New Ansible Playbook Repository](../tutorials/new-ansible-playbook.md)
