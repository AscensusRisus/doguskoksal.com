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

Applyly is a job application tracker designed for active, ongoing job searches. It brings application details, follow-ups, next actions, and status history into one structured workspace instead of treating applications as disconnected spreadsheet rows.

The application includes searchable and filterable pipeline views, editable application records, persistent status timelines with undo support, and an analytics dashboard covering stage distribution, pipeline health, employer response rates, funnel conversion, and activity over time.

A key design decision was to preserve the complete status history of every application. Insights are calculated from this history rather than only the latest status, allowing Applyly to identify whether an application reached contact, assessment, interview, or offer stages. It can therefore report meaningful transitions such as application-to-interview and interview-to-offer conversion across all-time and year-specific views.

Applyly also supports JSON backups, CSV and Excel transfers, and printable PDF exports. Imported backups are validated before they replace existing data, including checks for required fields, dates, URLs, email addresses, identifiers, timestamps, and chronological history. Restore and deletion operations require explicit confirmation to reduce accidental data loss.

### System design

Applyly separates the React interface, same-origin API routes, and persistence layer. Reads, updates, status transitions, history operations, analytics, and backup validation all use a shared storage layer rather than independent data-handling paths.

The database stores the current application state separately from its historical status events. This structure supports reliable timelines, undo operations, historical funnel analysis, and stage-based reporting without duplicating business logic throughout the application.

The API contract documents request payloads, validation behavior, error responses, supported status transitions, analytics output, and backup-format compatibility. The repository also includes build, lint, and regression-test workflows covering persistence, API behavior, status history, analytics, and data transfer.

### Technology

React, TypeScript, vinext, Vite, Cloudflare Workers, Cloudflare D1, SQLite, and Drizzle ORM.

Applyly is a working public project with a deliberately defined scope. The current release focuses on application tracking, historical analytics, and reliable data ownership. Browser-extension pairing, permissions, authentication, and cross-origin access remain planned product work rather than features claimed by the current version.
