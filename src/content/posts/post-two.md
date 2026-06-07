---
title: "The dev environment I actually use in 2026"
description: "Five years of YAML archaeology condensed into a setup that finally feels boring — in a good way."
date: 2026-04-10
category: "DX"
cover: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1600&q=80"
readingTime: "6 min"
tags: ["Docker", "Tooling"]
---

## Boring is the point

The best dev environment is one nobody remembers configuring. Here is mine.

- **Containers:** OrbStack — faster than Docker Desktop, half the RAM
- **Editor:** Cursor with a tight ruleset and four sharp slash commands
- **Terminal:** Ghostty + Starship + Atuin
- **DB:** Postgres 16 with a snapshotted seed volume
- **Cache:** Redis 7
- **Mail:** Mailpit for local SMTP

Setup time for a new machine: 11 minutes. Down from 90.
