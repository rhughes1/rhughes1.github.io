# 5 · No Object Left Unmanaged

> Objects are created, read, updated, and destroyed through orchestration. At a minimum, you must be able to clean up anything that was once created, without leaving residue behind.

---

## The Idea

Every resource has a lifecycle. It is created for a purpose, it serves that purpose, and when the purpose ends, it is destroyed cleanly. There are no orphaned resources, no forgotten S3 buckets, no stale IAM roles, no dangling DNS records.

In a cloud environment, unmanaged resources are not just a cost problem — they are a security problem. An orphaned EC2 instance with an attached role is an attack surface. An S3 bucket no longer referenced in Terraform is a bucket that is no longer getting security policy updates.

The standard is simple: if it exists, it is managed. If it is not managed, it should not exist.

---

## What This Looks Like In Practice

### Terraform

- Every resource created by Terraform is destroyed by Terraform
- No resource is created outside of Terraform and then imported later without a ticket and a documented reason
- Workspaces and state files are themselves tracked and audited
- `terraform destroy` is tested in CI for ephemeral environments

### Cloud Accounts

- Tagging standards are enforced via policy — untagged resources are flagged and scheduled for review
- Cost anomaly detection is configured to catch resources that were provisioned and forgotten
- Periodic audits compare live cloud state against Terraform state to identify drift

### CI/CD

- Ephemeral environments (preview environments, PR environments) have a defined TTL and are destroyed automatically when the branch is deleted or the PR is merged

---

## The Enforced Standard

!!! danger "Non-negotiable"
    If you created it, you own its lifecycle. "I don't know who created that" is not an acceptable answer. Everything is tagged, everything is tracked, everything has an owner.
