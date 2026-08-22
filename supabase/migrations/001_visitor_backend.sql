-- ABCR visitor backend schema. Apply only after the dedicated Supabase project is connected.

create extension if not exists pgcrypto;

create table if not exists public.visitor_events (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,
  path text not null default '/',
  referrer text,
  language text,
  screen text,
  user_agent text,
  ip_address text,
  created_at timestamptz not null default now()
);

create index if not exists visitor_events_created_at_idx on public.visitor_events (created_at desc);
create index if not exists visitor_events_session_id_idx on public.visitor_events (session_id);
create index if not exists visitor_events_path_idx on public.visitor_events (path);

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  source_path text not null default '/',
  status text not null default 'new' check (status in ('new','contacted','qualified','closed','spam')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);
create index if not exists enquiries_status_idx on public.enquiries (status);

alter table public.visitor_events enable row level security;
alter table public.enquiries enable row level security;

-- No public insert policies are required because the website API writes server-side using the service role.
-- This keeps database credentials and direct table access away from site visitors.
