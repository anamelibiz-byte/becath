-- ═══════════════════════════════════════════════════
-- Catholic Daily App — Supabase Schema
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ═══════════════════════════════════════════════════

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ───────────────────────────────────────
-- PROFILES (extends auth.users)
-- ───────────────────────────────────────
create table if not exists profiles (
  id              uuid references auth.users on delete cascade primary key,
  email           text,
  is_pro          boolean default false,
  pro_expires_at  timestamptz,
  stripe_customer_id text,
  stripe_subscription_id text,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- RLS: users can only see their own profile
alter table profiles enable row level security;
create policy "Users can view own profile" on profiles
  for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles
  for update using (auth.uid() = id);

-- ───────────────────────────────────────
-- JOURNAL ENTRIES (cloud sync)
-- ───────────────────────────────────────
create table if not exists journal_entries (
  id          uuid default uuid_generate_v4() primary key,
  user_id     uuid references auth.users on delete cascade not null,
  content     text not null,
  prayer_type text default 'general',  -- rosary | chaplet | stations | personal | etc
  mood        text,                    -- grateful | peaceful | struggling | joyful
  scripture   text,                    -- optional scripture reference
  created_at  timestamptz default now(),
  updated_at  timestamptz default now(),
  synced_at   timestamptz default now()
);

-- RLS: users can only access their own entries
alter table journal_entries enable row level security;
create policy "Users can CRUD own journal" on journal_entries
  for all using (auth.uid() = user_id);

-- Index for fast user queries
create index idx_journal_user_date on journal_entries(user_id, created_at desc);

-- ───────────────────────────────────────
-- PRAYER STREAKS
-- ───────────────────────────────────────
create table if not exists prayer_streaks (
  user_id         uuid references auth.users on delete cascade primary key,
  streak_days     int default 0,
  longest_streak  int default 0,
  last_prayer_date date,
  total_prayers   int default 0,
  updated_at      timestamptz default now()
);

alter table prayer_streaks enable row level security;
create policy "Users can manage own streak" on prayer_streaks
  for all using (auth.uid() = user_id);

-- Auto-create streak row on profile creation
create or replace function public.handle_new_profile()
returns trigger as $$
begin
  insert into public.prayer_streaks (user_id)
  values (new.id);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_profile_created
  after insert on public.profiles
  for each row execute procedure public.handle_new_profile();

-- ───────────────────────────────────────
-- PUSH TOKENS (for Web Push notifications)
-- ───────────────────────────────────────
create table if not exists push_tokens (
  id          uuid default uuid_generate_v4() primary key,
  user_id     uuid references auth.users on delete cascade not null,
  token       text not null,           -- Web Push subscription JSON
  platform    text default 'web',      -- web | ios | android
  active      boolean default true,
  created_at  timestamptz default now()
);

alter table push_tokens enable row level security;
create policy "Users can manage own push tokens" on push_tokens
  for all using (auth.uid() = user_id);

-- ───────────────────────────────────────
-- SAINTS (daily saint data)
-- ───────────────────────────────────────
create table if not exists saints (
  id          serial primary key,
  name        text not null,
  feast_month int not null,            -- 1-12
  feast_day   int not null,            -- 1-31
  short_bio   text,
  quote       text,
  category    text,                    -- martyr | confessor | virgin | doctor | pope
  patron_of   text[]
);

-- Unique constraint: one main saint per calendar day
create unique index idx_saints_feast on saints(feast_month, feast_day);

-- Insert sample saints
insert into saints (name, feast_month, feast_day, short_bio, quote, category, patron_of) values
('St. Athanasius', 5, 2, 'Bishop of Alexandria. Defender of Christ''s divinity against Arianism. Exiled 5 times for the faith.', 'The Son of God became man so that we might become God.', 'doctor', ARRAY['theologians','orthodoxy']),
('St. Philip and St. James', 5, 3, 'Apostles of Christ. Philip brought Nathanael to Jesus. James led the Jerusalem church.', 'Lord, show us the Father, and we will be satisfied.', 'confessor', ARRAY['pastry chefs','Uruguay']),
('St. Pius V', 5, 30, 'Dominican friar who became Pope. Reformed the Church after Trent. Standardized the Latin Mass.', 'The first and chief reason for our happiness is the union of God and man in the person of Jesus Christ.', 'pope', ARRAY['popes']),
('St. Michael the Archangel', 9, 29, 'Prince of the heavenly host. Defeated Lucifer. Protector of the Church and the dying.', 'Who is like God?', 'confessor', ARRAY['soldiers','police','the sick','dying']),
('St. Thérèse of Lisieux', 10, 1, 'The Little Flower. Carmelite nun who discovered the Little Way of spiritual childhood.', 'I want to spend my heaven doing good on earth.', 'virgin', ARRAY['missionaries','France','florists']),
('Our Lady of Guadalupe', 12, 12, 'Apparition of the Virgin Mary to Juan Diego in 1531. Patroness of the Americas.', 'Am I not here who am your mother?', 'virgin', ARRAY['Mexico','Americas','unborn'])
on conflict do nothing;

-- ───────────────────────────────────────
-- ADMIN FUNCTION: Activate Pro via Stripe webhook
-- Called from Edge Function, not client
-- ───────────────────────────────────────
create or replace function activate_pro(
  p_user_id uuid,
  p_stripe_customer_id text,
  p_stripe_subscription_id text,
  p_expires_at timestamptz default null
)
returns void as $$
begin
  update profiles set
    is_pro = true,
    stripe_customer_id = p_stripe_customer_id,
    stripe_subscription_id = p_stripe_subscription_id,
    pro_expires_at = p_expires_at,
    updated_at = now()
  where id = p_user_id;
end;
$$ language plpgsql security definer;

create or replace function deactivate_pro(p_stripe_subscription_id text)
returns void as $$
begin
  update profiles set
    is_pro = false,
    pro_expires_at = null,
    updated_at = now()
  where stripe_subscription_id = p_stripe_subscription_id;
end;
$$ language plpgsql security definer;

-- ───────────────────────────────────────
-- REALTIME: enable for journal sync
-- ───────────────────────────────────────
alter publication supabase_realtime add table journal_entries;
alter publication supabase_realtime add table prayer_streaks;

-- ═══════════════════════════════════════════════════
-- DONE. Tables created:
--   profiles, journal_entries, prayer_streaks,
--   push_tokens, saints
-- Functions: activate_pro, deactivate_pro
-- ═══════════════════════════════════════════════════
