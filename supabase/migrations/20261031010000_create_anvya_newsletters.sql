-- Correctly named ANVYA newsletter subscribers table.
create table if not exists public.anvya_newsletters (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  created_at timestamptz not null default now(),
  constraint anvya_newsletters_email_unique unique (email),
  constraint anvya_newsletters_email_nonempty check (length(trim(email)) > 3)
);

alter table public.anvya_newsletters enable row level security;

drop policy if exists "Public ANVYA newsletter signup" on public.anvya_newsletters;
create policy "Public ANVYA newsletter signup"
  on public.anvya_newsletters
  for insert
  to anon, authenticated
  with check (length(trim(email)) > 3);

drop policy if exists "Authenticated users can view ANVYA subscribers" on public.anvya_newsletters;
create policy "Authenticated users can view ANVYA subscribers"
  on public.anvya_newsletters
  for select
  to authenticated
  using (true);

grant insert on public.anvya_newsletters to anon, authenticated;
grant select on public.anvya_newsletters to authenticated;
