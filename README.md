# ABCR Corporate Website

Production-oriented corporate infrastructure website for **ABCR Infra Projects Pvt. Ltd.**, using an original visual system and codebase while taking information-architecture cues from established Indian EPC/infrastructure websites.

## Stack

- Next.js App Router
- TypeScript
- Responsive CSS
- Server-side visitor/enquiry API routes
- Supabase-ready persistence layer (disabled until environment variables are supplied)
- SEO metadata, sitemap, robots and Organization structured data
- Privacy-aware anonymous page-view tracking

## Local setup

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` only when the dedicated ABCR Supabase project is available.

## Visitor backend

The browser creates an anonymous session ID and posts page-view metadata to `/api/visitor`. Client-side navigation is tracked per route. Raw IP addresses are not stored. The server is the only layer permitted to write analytics data.

Until Supabase is configured, the endpoint returns HTTP 202 and does not persist visitor information. The prepared migration is at `supabase/migrations/001_visitor_backend.sql`.

## Content provenance

The website currently separates verified/publicly available facts from presentation content.

Current company identity, public service areas, leadership names, contact channels and portfolio project names were gathered from ABCR's public website and then normalized for the new site. Corporate incorporation details (incorporation date, CIN and registered office) were cross-checked against public company-information sources before being added.

Project detail pages deliberately avoid inventing client names, values, quantities, milestones or completion status where ABCR has not supplied verified project documentation.

## Launch asset checklist

Do **not** treat the following placeholders as approved corporate assets:

- Current lettermark (`A`) is temporary until the genuine ABCR logo file is supplied.
- Infrastructure/project photography is representative stock photography, explicitly labelled where used in the portfolio.
- Leadership portraits are placeholders until approved photographs are supplied.
- Certificates, registrations, client logos, award artwork and company-profile PDFs have not yet been provided.
- Exact Rajasthan branch-office street address has not yet been verified.

Before final production cutover, replace those placeholders with ABCR-owned/approved assets and verify the production build in CI.
