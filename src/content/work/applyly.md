---
title: "Applyly"
year: "2026–present"
role: "Independent project"
summary: "A local-first job application tracker for managing applications, follow-ups, status history, and pipeline performance."
status: "published"
visibility: "public"
links:
  live: ""
  repository: "https://github.com/AscensusRisus/applyly"
  writing: ""
cover: ""
tags:
  - "React"
  - "TypeScript"
  - "vinext"
  - "Vite"
  - "Cloudflare Workers"
  - "Cloudflare D1"
  - "SQLite"
  - "Drizzle ORM"
---

## Problem

An ongoing job search involves application details, follow-ups, next actions, and a changing status for each opportunity. Applyly brings these into one structured workspace, with a history of how each application progresses.

## Contribution

I developed Applyly as an independent project across the React interface, API routes, and persistence layer. The application includes searchable and filterable pipeline views, editable application records, persistent status timelines with undo support, and an analytics dashboard covering stage distribution, pipeline health, employer response rates, funnel conversion, and activity over time.

Applyly also supports JSON backups, CSV and Excel transfers, and printable PDF exports. Imported backups are validated before they replace existing data, including checks for required fields, dates, URLs, email addresses, identifiers, timestamps, and chronological history. Restore and deletion operations require explicit confirmation to reduce accidental data loss.

## Engineering decisions

Applyly separates the React interface, same-origin API routes, and persistence layer. Reads, updates, status transitions, history operations, analytics, and backup validation all use a shared storage layer rather than independent data-handling paths.

The database stores the current application state separately from its historical status events. Analytics use this history to identify whether an application reached contact, assessment, interview, or offer stages. This supports timelines, undo operations, and application-to-interview and interview-to-offer conversion reporting across all-time and year-specific views.

The stack is React, TypeScript, vinext, Vite, Cloudflare Workers, Cloudflare D1, SQLite, and Drizzle ORM.

## Verification and limitations

The [public repository](https://github.com/AscensusRisus/applyly) contains the implementation, API contract, and build, lint, and regression-test workflows. The contract documents request payloads, validation behavior, error responses, status transitions, analytics output, and backup-format compatibility. The regression workflows cover persistence, API behavior, status history, analytics, and data transfer.

The current scope covers application tracking, historical analytics, and data ownership. Browser-extension pairing, permissions, authentication, and cross-origin access remain planned product work.
