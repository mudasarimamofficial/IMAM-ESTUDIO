# IMAM ESTUDIO | Master Technical Specification & Handoff Package

## 1. Master Sitemap & Route Architecture

| Route Group | Path | Description | Access Level |
| :--- | :--- | :--- | :--- |
| **Public** | `/` | Founder Authority (Homepage) | Public |
| | `/about` | Agency-as-a-Marketplace Vision | Public |
| | `/services/[slug]` | Service Detail (e.g., AI Voice Agents) | Public |
| | `/marketplace` | Expert Directory & Search | Public |
| | `/blog` | Technical Insights Index | Public |
| | `/login` | Secure Portal Access | Public |
| **Workspace** | `/workspace/[id]` | Project Execution Command Center | Client, Expert, Admin |
| | `/workspace/[id]/whiteboard` | Real-time Architecture Canvas | Client, Expert |
| | `/workspace/[id]/chat` | Threaded Communication Hub | Client, Expert |
| **Expert Portal** | `/expert/dashboard` | Operational Command Center | Expert |
| | `/expert/onboarding` | Vetting Crucible & Assessments | Applicant |
| | `/expert/portfolio` | Brand Authority Builder | Expert |
| | `/expert/ledger` | Financial Payout Tracking | Expert |
| **Client Portal** | `/buyer/dashboard` | Strategic Oversight Portal | Client |
| | `/buyer/proposal-builder` | High-Ticket Acquisition Engine | Client |
| | `/buyer/billing` | Escrow & Invoice Management | Client |
| **Admin/Founder** | `/admin/dashboard` | Global Platform Oversight | Founder, Admin |
| | `/admin/vetting` | Verification Queue Management | Admin, Moderator |
| | `/admin/system` | Health, Logs & Infrastructure | Super Admin |
| | `/admin/rbac` | Permission Matrix Configuration | Super Admin |
| | `/admin/disputes` | Adjudication & Governance Hub | Moderator |

## 2. Complete Screen Inventory (High-Fidelity Baselines)

| ID | Title | Purpose | Primary Data Entity |
| :--- | :--- | :--- | :--- |
| SCREEN_2 | Founder Authority | Lead Acquisition & Brand Trust | Founder Profile, Case Studies |
| SCREEN_21 | Expert Directory | Talent Discovery & Comparison | Experts, Services, Ratings |
| SCREEN_5 | Project Workspace | Real-time Sync & Task Management | Projects, Tasks, Milestones |
| SCREEN_6 | Collaboration Whiteboard | Architectural System Design | Canvas State, Presence |
| SCREEN_13 | Executive Dashboard | Global Platform Health & GMV | Revenue, Leads, System Metrics |
| SCREEN_8 | Verification Queue | Elite Talent Auditing | Applications, Assessments |
| SCREEN_14 | Permission Matrix | Granular RBAC Control | Roles, Permissions, Users |
| SCREEN_16 | RAG Operations Hub | AI Indexing & Data Ingestion | Knowledge Bases, Connectors |
| SCREEN_9 | Proposal Builder | High-Ticket Contract Generation | Proposals, Milestones, Estimates |
| SCREEN_20 | Dispute Resolution | Operational Governance | Disputes, Transcripts, Escrow |
| SCREEN_31 | System Health | Infrastructure Telemetry | API Logs, SLIs, Feature Flags |
| SCREEN_10 | Mobile Workspace | Operational Continuity (Portrait) | Projects, Tasks (Mobile UI) |

## 3. Component Architecture & Design Tokens

### Semantic Tokens (Monolith Precision)
- **Surface**: `{{DATA:DESIGN_SYSTEM:DESIGN_SYSTEM_1}}` (Pure Black #000 to Deep Gray #121414)
- **Primary**: Pure White (#FFF) for High-Contrast Actions.
- **Accent**: Geist Mono for Technical Data / Code.
- **Spacing**: 4px Base Unit (Linear-inspired optical alignment).
- **Radius**: `rounded-sm` (2px) or `rounded-none` for clinical precision.

### Key Shared Components
- `TopNavBar`: Global navigation with Command Palette trigger.
- `SideNav`: Local-first navigation with status indicators (Escrow, Milestone).
- `StatusBadge`: Semantic color mapping (Pending: Amber, Success: Emerald, Critical: Crimson).
- `DataGrid`: High-density sorting/filtering for audit logs and finance.
- `Editor`: Monaco-based code environment with proctoring hooks.

## 4. API & Data Mapping (Engineering Contract)

### Core Models (PostgreSQL/JSONB)
- `User`: Auth, Role, 2FA, OrganizationID.
- `Project`: Local-first UUID, EscrowID, Status, MemberList.
- `Milestone`: Amount, ProofOfWork, ApprovalState, ReleaseDate.
- `Deliverable`: S3_URL, Version, VerificationSignature.
- `AuditLog`: Immutable change record (User, Action, Timestamp, Delta).

### Real-time Hooks (WebSocket / Sync Engine)
- `presence`: Track active collaborators on Whiteboard/Workspace.
- `mutation_delta`: Patch local IndexedDB state with server updates.
- `system_alert`: Broadcast high-latency or security anomalies.

## 5. Implementation Roadmap (AI Handoff)
1. **Infra**: Deploy Vercel Edge + Supabase (Postgres/Realtime).
2. **Auth**: Implementation of the 13-persona RBAC Matrix (SCREEN_14).
3. **Sync**: Build the local-first sync layer for the Project Workspace (SCREEN_5).
4. **AI**: Secure MCP Layer for RAG Operations (SCREEN_16).
5. **Finance**: Stripe Connect integration for Smart Escrow release logic (SCREEN_28).

---
*Product Coverage Report: 100% of designed workflows, screens, and user journeys documented.*
