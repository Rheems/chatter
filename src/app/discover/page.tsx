import Link from 'next/link'
import { TrendingUp, Users, BookOpen, Sparkles } from 'lucide-react'

const trendingPosts = [
  {
    id: '10',
    title: 'God is the Ultimate Tech Bro',
    author: 'Kareemah Ahmad',
    tag: 'Writing',
    readingTime: '3 min read',
    likes: 892,
  },
  {
    id: '7',
    title: 'Refactoring UI — Design Lessons Every Developer Needs',
    author: 'Adam Wathan',
    tag: 'Design',
    readingTime: '9 min read',
    likes: 445,
  },
  {
    id: '3',
    title: 'Things Fall Apart — A Modern Reading',
    author: 'Chinua Achebe',
    tag: 'Culture',
    readingTime: '15 min read',
    likes: 445,
  },
  {
    id: '8',
    title: 'Purple Hibiscus — Faith, Freedom and Family',
    author: 'Chimamanda Ngozi Adichie',
    tag: 'Writing',
    readingTime: '13 min read',
    likes: 312,
  },
  {
    id: '6',
    title: "Nigeria's Tech Renaissance",
    author: 'Tayo Oviosu',
    tag: 'Technology',
    readingTime: '8 min read',
    likes: 203,
  },
]

const featuredWriters = [
  {
    name: 'Chimamanda Ngozi Adichie',
    tag: 'Writing',
    posts: 12,
    followers: 4200,
  },
  {
    name: 'Chinua Achebe',
    tag: 'Culture',
    posts: 8,
    followers: 8900,
  },
  {
    name: 'Ayobami Adeyemi',
    tag: 'Writing',
    posts: 6,
    followers: 2100,
  },
  {
    name: 'Adam Wathan',
    tag: 'Design',
    posts: 15,
    followers: 12000,
  },
  {
    name: 'Kareemah Ahmad',
    tag: 'Writing',
    posts: 3,
    followers: 248,
  },
  {
    name: 'Dami Ajayi',
    tag: 'Africa',
    posts: 9,
    followers: 1800,
  },
]

const categories = [
  { name: 'Writing', icon: BookOpen, count: 24, color: 'bg-purple-500/10 text-purple-500' },
  { name: 'Technology', icon: Sparkles, count: 18, color: 'bg-blue-500/10 text-blue-500' },
  { name: 'Culture', icon: Users, count: 15, color: 'bg-red-500/10 text-red-500' },
  { name: 'Design', icon: TrendingUp, count: 12, color: 'bg-pink-500/10 text-pink-500' },
  { name: 'Africa', icon: BookOpen, count: 20, color: 'bg-yellow-500/10 text-yellow-500' },
  { name: 'Startups', icon: Sparkles, count: 9, color: 'bg-teal-500/10 text-teal-500' },
]

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0F1E]">

      {/* Hero */}
      <div className="bg-[#0F2B5B] border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl">
            <h1
              className="text-4xl font-bold text-white mb-3"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Discover
            </h1>
            <p className="text-white/60 text-lg">
              Explore trending posts, featured writers and popular topics
              from across the Chatter community.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 space-y-12">

        {/* Trending Posts */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-8 rounded-xl bg-[#F97316]/10 flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-[#F97316]" />
            </div>
            <h2
              className="text-2xl font-bold text-[#0F2B5B] dark:text-white"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Trending Right Now
            </h2>
          </div>

          <div className="space-y-3">
            {trendingPosts.map((post, i) => (
              <Link
                key={post.id}
                href={`/posts/${post.id}`}
                className="group flex items-center gap-4 bg-white dark:bg-white/5 rounded-2xl p-4 border border-gray-100 dark:border-white/10 hover:border-[#F97316]/30 hover:shadow-md transition-all"
              >
                <span className="text-2xl font-bold text-gray-200 dark:text-white/10 w-8 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-bold text-[#0F2B5B] dark:text-white group-hover:text-[#F97316] transition-colors line-clamp-1"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-gray-400 dark:text-white/30">
                      {post.author}
                    </span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#0F2B5B]/10 dark:bg-white/10 text-[#0F2B5B] dark:text-white">
                      {post.tag}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-white/30">
                      {post.readingTime}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-[#F97316] shrink-0">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {post.likes}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse By Category */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-8 rounded-xl bg-[#0F2B5B]/10 dark:bg-white/10 flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-[#0F2B5B] dark:text-white" />
            </div>
            <h2
              className="text-2xl font-bold text-[#0F2B5B] dark:text-white"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Browse By Category
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/browse?tag=${cat.name}`}
                className="group bg-white dark:bg-white/5 rounded-2xl p-4 border border-gray-100 dark:border-white/10 hover:border-[#F97316]/30 hover:shadow-md transition-all text-center"
              >
                <div className={`h-10 w-10 rounded-xl ${cat.color} flex items-center justify-center mx-auto mb-3`}>
                  <cat.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-bold text-[#0F2B5B] dark:text-white group-hover:text-[#F97316] transition-colors">
                  {cat.name}
                </p>
                <p className="text-xs text-gray-400 dark:text-white/30 mt-1">
                  {cat.count} posts
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Writers */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-8 rounded-xl bg-[#F97316]/10 flex items-center justify-center">
              <Users className="h-4 w-4 text-[#F97316]" />
            </div>
            <h2
              className="text-2xl font-bold text-[#0F2B5B] dark:text-white"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Featured Writers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredWriters.map((writer) => (
              <div
                key={writer.name}
                className="group bg-white dark:bg-white/5 rounded-2xl p-5 border border-gray-100 dark:border-white/10 hover:border-[#F97316]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-full bg-[#0F2B5B] flex items-center justify-center text-lg font-bold text-white shrink-0">
                    {writer.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="font-bold text-[#0F2B5B] dark:text-white text-sm group-hover:text-[#F97316] transition-colors"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {writer.name}
                    </p>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#0F2B5B]/10 dark:bg-white/10 text-[#0F2B5B] dark:text-white">
                      {writer.tag}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 dark:text-white/30 pt-3 border-t border-gray-100 dark:border-white/10">
                  <span>{writer.posts} posts</span>
                  <span>{writer.followers.toLocaleString()} followers</span>
                  <button className="text-xs font-semibold text-[#F97316] hover:text-[#EA6C0A] transition-colors">
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0F2B5B] rounded-2xl p-8 text-center space-y-4">
          <h2
            className="text-2xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Ready to share your story?
          </h2>
          <p className="text-white/60">
            Join thousands of writers already publishing on Chatter.
          </p>
          <Link
            href="/posts/new"
            className="inline-flex items-center justify-center h-11 px-8 rounded-full bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA6C0A] transition-all hover:-translate-y-0.5"
          >
            Start Writing Free
          </Link>
        </section>

      </div>
    </div>
  )
}