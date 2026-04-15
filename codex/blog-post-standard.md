# Blog post standard

This file defines the internal contract Codex should follow when generating blog posts.

## Post types

Use blog posts for:

- engineering writeups
- announcements
- updates

## Front matter

Required fields:

- `title`
- `date`
- `authors`
- `description`
- `categories`

### Rules

- `authors` must be GitHub usernames only
- use `rhughes1` for single-author posts
- `date` must use `YYYY-MM-DD`
- keep `description` concise and outcome-focused
- keep `categories` small and intentional

### Author profile data

The blog must define author profile data in `docs/blog/.authors.yml`.

Use the GitHub username as the author key, and provide:

- name
- description
- avatar

The avatar should point to the author's GitHub profile image or another stable image URL.

## Recommended structure

### Index excerpt

Place `<!-- more -->` immediately after the title section so the blog index stays title-only.

### Engineering writeup

- Overview
- Problem
- Approach
- Implementation
- Validation
- Outcome
- Next steps

### Announcement

- Overview
- What changed
- Why it matters
- Impact
- Next steps

### Update

- Overview
- What changed
- Current status
- What to expect next

## Style rules

- Write for engineers first
- Keep paragraphs short
- Prefer concrete details over marketing language
- Link to docs when implementation details already exist there
- Keep the post focused on one main message

## Codex guidance

When drafting a post, provide:

- post type
- topic
- intended audience
- key takeaway
- related docs or tutorials
- desired tone
