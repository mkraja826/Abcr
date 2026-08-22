# ABCR Corporate Website

Production-oriented corporate infrastructure website inspired by the information architecture of major Indian EPC companies, with an original ABCR visual system and codebase.

## Stack

- Next.js App Router
- TypeScript
- Responsive CSS
- Server-side visitor/enquiry API routes
- Supabase-ready persistence layer (disabled until environment variables are supplied)

## Local setup

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` only when the dedicated ABCR Supabase project is available.

## Visitor backend

The browser creates an anonymous session ID and posts page-view metadata to `/api/visitor`. The server is the only layer permitted to write analytics data. Until Supabase is configured, the endpoint returns HTTP 202 and does not persist visitor information.

The prepared database migration is at `supabase/migrations/001_visitor_backend.sql`.

## Important content note

Homepage copy and project titles are initial positioning content, not verified company facts. Replace statistics, sectors, project details, contact information and photography with approved ABCR material before production launch.
