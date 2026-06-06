-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- Enable full text search
create extension if not exists "pg_trgm";

-- PROFILES TABLE
create table profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  username text unique not null,
  full_name text,
  avatar_url text,
  bio text,
  website text,
  twitter text,
  github text,
  follower_count integer default 0,
  following_count integer default 0,
  created_at timestamp with time zone default timezone('utc', now()),
  updated_at timestamp with time zone default timezone('utc', now())
);

-- POSTS TABLE
create table posts (
  id uuid default uuid_generate_v4() primary key,
  author_id uuid references profiles(id) on delete cascade not null,
  title text not null,
  slug text unique not null,
  excerpt text,
  content text not null,
  cover_image text,
  status text default 'draft' check (status in ('draft', 'published', 'archived')),
  reading_time integer default 0,
  view_count integer default 0,
  like_count integer default 0,
  comment_count integer default 0,
  bookmark_count integer default 0,
  published_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc', now()),
  updated_at timestamp with time zone default timezone('utc', now())
);

-- TAGS TABLE
create table tags (
  id uuid default uuid_generate_v4() primary key,
  name text unique not null,
  slug text unique not null,
  description text,
  post_count integer default 0,
  created_at timestamp with time zone default timezone('utc', now())
);

-- POST TAGS
create table post_tags (
  post_id uuid references posts(id) on delete cascade,
  tag_id uuid references tags(id) on delete cascade,
  primary key (post_id, tag_id)
);

-- LIKES TABLE
create table likes (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  post_id uuid references posts(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc', now()),
  unique(user_id, post_id)
);

-- BOOKMARKS TABLE
create table bookmarks (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  post_id uuid references posts(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc', now()),
  unique(user_id, post_id)
);

-- COMMENTS TABLE
create table comments (
  id uuid default uuid_generate_v4() primary key,
  post_id uuid references posts(id) on delete cascade not null,
  author_id uuid references profiles(id) on delete cascade not null,
  parent_id uuid references comments(id) on delete cascade,
  content text not null,
  like_count integer default 0,
  created_at timestamp with time zone default timezone('utc', now()),
  updated_at timestamp with time zone default timezone('utc', now())
);

-- FOLLOWS TABLE
create table follows (
  follower_id uuid references profiles(id) on delete cascade,
  following_id uuid references profiles(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc', now()),
  primary key (follower_id, following_id)
);

-- NOTIFICATIONS TABLE
create table notifications (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  actor_id uuid references profiles(id) on delete cascade not null,
  type text not null check (type in ('like', 'comment', 'follow', 'bookmark')),
  post_id uuid references posts(id) on delete cascade,
  read boolean default false,
  created_at timestamp with time zone default timezone('utc', now())
);

-- ANALYTICS TABLE
create table post_views (
  id uuid default uuid_generate_v4() primary key,
  post_id uuid references posts(id) on delete cascade not null,
  viewer_id uuid references profiles(id) on delete set null,
  country text,
  device text,
  viewed_at timestamp with time zone default timezone('utc', now())
);

-- AUTO CREATE PROFILE ON SIGNUP
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, full_name, avatar_url)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data->>'username',
      split_part(new.email, '@', 1)
    ),
    coalesce(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      split_part(new.email, '@', 1)
    ),
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();