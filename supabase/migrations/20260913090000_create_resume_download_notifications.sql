-- Track resume downloads as first-class database notifications.
create table if not exists public.resume_download_notifications (
  id uuid primary key default gen_random_uuid(),
  event text not null default 'resume_download',
  page text,
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

create index if not exists resume_download_notifications_created_at_idx
  on public.resume_download_notifications (created_at desc);

alter table public.resume_download_notifications enable row level security;

-- No public read/write access. The Edge Function writes using the server-side
-- secret key, so visitor browsers never receive database privileges.
