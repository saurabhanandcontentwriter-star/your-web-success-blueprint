-- Anonymous website activity analytics: page views, clicks and engagement time.
create table if not exists public.visitor_activity (
  id uuid primary key default gen_random_uuid(),
  visitor_id text not null,
  session_id text not null,
  event text not null,
  page text,
  element text,
  element_href text,
  duration_seconds integer,
  referrer text,
  user_agent text,
  ip_address text,
  city text,
  district text,
  region text,
  country text,
  location text,
  location_source text,
  latitude double precision,
  longitude double precision,
  accuracy_meters double precision,
  created_at timestamptz not null default now()
);

create index if not exists visitor_activity_created_at_idx on public.visitor_activity (created_at desc);
create index if not exists visitor_activity_visitor_id_idx on public.visitor_activity (visitor_id, created_at desc);
create index if not exists visitor_activity_event_idx on public.visitor_activity (event, created_at desc);

alter table public.visitor_activity enable row level security;
-- No public read/write access. The Edge Function uses the server-side secret key.
