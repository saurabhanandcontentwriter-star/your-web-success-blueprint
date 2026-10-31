-- Store newsletter signups submitted from the public website.
create table if not exists public.anyva_newsletters (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  created_at timestamptz not null default now(),
  constraint anyva_newsletters_email_unique unique (email),
  constraint anyva_newsletters_email_nonempty check (length(trim(email)) > 3)
);

alter table public.anyva_newsletters enable row level security;

-- Visitors can subscribe, but cannot read or enumerate subscriber records.
drop policy if exists "Anyone can subscribe to newsletter" on public.anyva_newsletters;
create policy "Anyone can subscribe to newsletter"
  on public.anyva_newsletters
  for insert
  to anon, authenticated
  with check (length(trim(email)) > 3);

-- Signed-in dashboard users can view subscribers.
drop policy if exists "Authenticated users can view newsletter subscribers" on public.anyva_newsletters;
create policy "Authenticated users can view newsletter subscribers"
  on public.anyva_newsletters
  for select
  to authenticated
  using (true);

grant insert on public.anyva_newsletters to anon, authenticated;
grant select on public.anyva_newsletters to authenticated;
