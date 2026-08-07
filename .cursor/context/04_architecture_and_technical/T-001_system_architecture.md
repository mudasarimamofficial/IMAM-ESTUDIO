---
id: T-001
title: System Architecture
date: 2026-08-08
tags: [architecture, stack]
---
# System Architecture

- **Frontend:** Next.js (App Router) + Tailwind CSS + Dexie (IndexedDB).
- **Backend:** Supabase PostgreSQL with RLS.
- **Real-time:** Supabase Realtime (WebSockets) for workspace sync.
- **Payments:** Stripe Connect (escrow).
- **Queues/Cache:** Not yet - can use Supabase or Redis later.
- **Storage tiers:** persistent (profiles, projects, messages), ephemeral (session data), never stored (raw secrets).
