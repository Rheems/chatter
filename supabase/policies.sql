-- Enable RLS on all tables
alter table profiles enable row level security;
alter table posts enable row level security;
alter table tags enable row level security;
alter table post_tags enable row level security;
alter table likes enable row level security;
alter table bookmarks enable row level security;
alter table comments enable row level security;
alter table follows enable row level security;
alter table notifications enable row level security;
alter table post_views enable row level security;

-- PROFILES POLICIES
create policy "Profiles are viewable by everyone"
  on profiles for select using (true);

create policy "Users can insert their own profile"
  on profiles for insert with check (auth.uid() = id);

create policy "Users can update their own profile"
  on profiles for update using (auth.uid() = id);

-- POSTS POLICIES
create policy "Published posts are viewable by everyone"
  on posts for select using (
    status = 'published' or auth.uid() = author_id
  );

create policy "Users can insert their own posts"
  on posts for insert with check (auth.uid() = author_id);

create policy "Users can update their own posts"
  on posts for update using (auth.uid() = author_id);

create policy "Users can delete their own posts"
  on posts for delete using (auth.uid() = author_id);

-- TAGS POLICIES
create policy "Tags are viewable by everyone"
  on tags for select using (true);

-- POST TAGS POLICIES
create policy "Post tags are viewable by everyone"
  on post_tags for select using (true);

create policy "Authors can manage their post tags"
  on post_tags for insert with check (
    auth.uid() = (select author_id from posts where id = post_id)
  );

create policy "Authors can delete their post tags"
  on post_tags for delete using (
    auth.uid() = (select author_id from posts where id = post_id)
  );

-- LIKES POLICIES
create policy "Likes are viewable by everyone"
  on likes for select using (true);

create policy "Users can like posts"
  on likes for insert with check (auth.uid() = user_id);

create policy "Users can unlike posts"
  on likes for delete using (auth.uid() = user_id);

-- BOOKMARKS POLICIES
create policy "Users can view their own bookmarks"
  on bookmarks for select using (auth.uid() = user_id);

create policy "Users can bookmark posts"
  on bookmarks for insert with check (auth.uid() = user_id);

create policy "Users can remove their bookmarks"
  on bookmarks for delete using (auth.uid() = user_id);

-- COMMENTS POLICIES
create policy "Comments are viewable by everyone"
  on comments for select using (true);

create policy "Users can insert comments"
  on comments for insert with check (auth.uid() = author_id);

create policy "Users can update their own comments"
  on comments for update using (auth.uid() = author_id);

create policy "Users can delete their own comments"
  on comments for delete using (auth.uid() = author_id);

-- FOLLOWS POLICIES
create policy "Follows are viewable by everyone"
  on follows for select using (true);

create policy "Users can follow others"
  on follows for insert with check (auth.uid() = follower_id);

create policy "Users can unfollow others"
  on follows for delete using (auth.uid() = follower_id);

-- NOTIFICATIONS POLICIES
create policy "Users can view their own notifications"
  on notifications for select using (auth.uid() = user_id);

create policy "Notifications can be inserted by system"
  on notifications for insert with check (true);

create policy "Users can mark their notifications as read"
  on notifications for update using (auth.uid() = user_id);

-- POST VIEWS POLICIES
create policy "Post views are insertable by everyone"
  on post_views for insert with check (true);

create policy "Post views are viewable by post author"
  on post_views for select using (
    auth.uid() = (select author_id from posts where id = post_id)
  );