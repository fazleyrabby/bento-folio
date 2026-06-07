---
title: "Scaling a TypeScript monolith to 50 engineers"
description: "Module boundaries, build pipelines, and the lessons learned splitting one giant repo into something humans can actually navigate."
date: 2026-05-22
category: "Architecture"
cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
readingTime: "9 min"
tags: ["TypeScript", "Architecture"]
---

## The thesis

A monorepo only stops scaling when the humans inside it stop scaling. Here is how we kept ours boring.

### 1. Boundaries, not folders

Folders are vibes. Boundaries are enforced. We adopted a strict layer dependency rule via ESLint and a custom Nx generator.

### 2. Build time is a feature

We treated incremental build performance like a product metric — tracked weekly, regressions blocked PRs. p90 CI dropped from 12 min to 3 min.

### 3. Module ownership

CODEOWNERS at the package level, not file level. Reviewers were chosen automatically by ownership graph instead of by guesswork.

### Result

Forty-eight engineers, one repo, ~110 packages, and a green main branch for 11 weeks straight.
