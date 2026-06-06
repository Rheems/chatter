import { Search, TrendingUp, Users, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0F1E]">

      {/* Top Search Bar */}
      <div className="border-b border-gray-200 dark:border-white/10 bg-white dark:bg-[#0F2B5B]/50 sticky top-16 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts, writers, topics..."
              className="w-full h-10 pl-10 pr-4 rounded-full border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-sm outline-none focus:border-[#0F2B5B] dark:focus:border-[#F97316] transition-all"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">

          {/* Left Sidebar */}
          <aside className="hidden lg:block w-56 shrink-0 space-y-6">
            <div className="space-y-1">
              <p className="text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-wider px-3 mb-3">
                Your Feed
              </p>
              {feedFilters.map((filter) => (
                <button
                  key={filter.label}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    filter.active
                      ? 'bg-[#0F2B5B] text-white'
                      : 'text-gray-600 dark:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
                >
                  <filter.icon className="h-4 w-4" />
                  {filter.label}
                </button>
              ))}
            </div>

            <div>
              <p className="text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-wider px-3 mb-3">
                Popular Tags
              </p>
              <div className="flex flex-wrap gap-2 px-1">
                {popularTags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/browse?tag=${tag}`}
                    className="px-3 py-1 rounded-full border-2 border-[#0F2B5B]/20 dark:border-white/10 text-xs font-semibold text-[#0F2B5B] dark:text-white/60 hover:bg-[#0F2B5B] hover:text-white dark:hover:bg-white/10 transition-all"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Feed */}
          <main className="flex-1 min-w-0 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h1
                className="text-2xl font-bold text-[#0F2B5B] dark:text-white"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                For You
              </h1>
              <span className="text-sm text-gray-400 dark:text-white/30">
                {placeholderPosts.length} posts
              </span>
            </div>

            {placeholderPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10 hover:border-[#F97316]/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-[#0F2B5B] dark:bg-[#F97316] flex items-center justify-center text-sm font-bold text-white">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0F2B5B] dark:text-white">
                        {post.author}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-white/30">
                        {post.date}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#0F2B5B]/10 dark:bg-white/10 text-[#0F2B5B] dark:text-white">
                    {post.tag}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <h2
                    className="text-xl font-bold text-[#0F2B5B] dark:text-white group-hover:text-[#F97316] transition-colors leading-snug"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-white/50 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10">
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-400 dark:text-white/30">
                      {post.readingTime}
                    </span>
                    <button
                      aria-label="Like post"
                      className="flex items-center gap-1 text-xs text-gray-400 dark:text-white/30 hover:text-[#F97316] transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {post.likes}
                    </button>
                    <button
                      aria-label="Comment on post"
                      className="flex items-center gap-1 text-xs text-gray-400 dark:text-white/30 hover:text-[#0F2B5B] dark:hover:text-white transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {post.comments}
                    </button>
                    <button
                      aria-label="Bookmark post"
                      className="flex items-center gap-1 text-xs text-gray-400 dark:text-white/30 hover:text-[#0F2B5B] dark:hover:text-white transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z" />
                      </svg>
                    </button>
                  </div>
                  <Link
                    href={`/posts/${post.id}`}
                    className="text-xs font-semibold text-[#F97316] hover:text-[#EA6C0A] transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </main>

          {/* Right Sidebar */}
          <aside className="hidden xl:block w-64 shrink-0 space-y-6">
            <div className="bg-white dark:bg-white/5 rounded-2xl p-5 border border-gray-100 dark:border-white/10">
              <p
                className="text-sm font-bold text-[#0F2B5B] dark:text-white mb-4"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Who to follow
              </p>
              <div className="space-y-4">
                {suggestedWriters.map((writer) => (
                  <div key={writer.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-[#0F2B5B] flex items-center justify-center text-xs font-bold text-white">
                        {writer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#0F2B5B] dark:text-white">
                          {writer.name}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-white/30">
                          {writer.tag}
                        </p>
                      </div>
                    </div>
                    <button className="text-xs font-semibold text-[#F97316] hover:text-[#EA6C0A] transition-colors">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 rounded-2xl p-5 border border-gray-100 dark:border-white/10">
              <p
                className="text-sm font-bold text-[#0F2B5B] dark:text-white mb-4"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Trending Topics
              </p>
              <div className="space-y-2">
                {trendingTopics.map((topic, i) => (
                  <Link
                    key={topic}
                    href={`/browse?tag=${topic}`}
                    className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/50 hover:text-[#F97316] transition-colors"
                  >
                    <span className="text-xs font-bold text-[#F97316]">
                      #{i + 1}
                    </span>
                    {topic}
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center text-xs text-gray-300 dark:text-white/20 px-2">
              Built with love by Kareemah Ahmad
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}

const feedFilters = [
  { label: 'For You', icon: Sparkles, active: true },
  { label: 'Following', icon: Users, active: false },
  { label: 'Trending', icon: TrendingUp, active: false },
]

const popularTags = [
  'Technology', 'Writing', 'Africa',
  'Design', 'Culture', 'Startups',
]

const suggestedWriters = [
  { name: 'Chimamanda Adichie', tag: 'Writing' },
  { name: 'Tayo Oviosu', tag: 'Technology' },
  { name: 'Lola Shoneyin', tag: 'Culture' },
  { name: 'Dami Ajayi', tag: 'Africa' },
]

const trendingTopics = [
  'Lagos', 'Technology', 'Writing',
  'Startups', 'Africa', 'Design',
]

const placeholderPosts = [
  {
    id: '1',
    title: 'Time Changes Yesterday',
    excerpt: 'A young girl navigating life after the loss of her mother, caught between grief and a family moving forward without her blessing.',
    author: 'Sefi Atta',
    tag: 'Writing',
    readingTime: '12 min read',
    likes: 124,
    comments: 18,
    date: '2 hours ago',
  },
  {
    id: '2',
    title: 'Nearly Everybody in Lagos is Mad',
    excerpt: 'A razor-sharp, darkly comic portrait of Lagos life — the chaos, the hustle, the madness and the magic.',
    author: 'Dami Ajayi',
    tag: 'Africa',
    readingTime: '9 min read',
    likes: 89,
    comments: 12,
    date: '4 hours ago',
  },
  {
    id: '3',
    title: 'Things Fall Apart — A Modern Reading',
    excerpt: 'Okonkwo\'s story is not a footnote in someone else\'s history. It is the story. Never the footnote.',
    author: 'Chinua Achebe',
    tag: 'Culture',
    readingTime: '15 min read',
    likes: 445,
    comments: 67,
    date: '6 hours ago',
  },
  {
    id: '4',
    title: 'The Secret Lives of Baba Segi\'s Wives',
    excerpt: 'Baba Segi\'s household was happy until his fourth wife arrived. A bold story about women, secrets and survival.',
    author: 'Lola Shoneyin',
    tag: 'Culture',
    readingTime: '11 min read',
    likes: 167,
    comments: 28,
    date: '8 hours ago',
  },
  {
    id: '5',
    title: 'Stay With Me',
    excerpt: 'Yejide and Akin believed their marriage was different. Then three years passed without a child.',
    author: 'Ayobami Adeyemi',
    tag: 'Writing',
    readingTime: '10 min read',
    likes: 234,
    comments: 35,
    date: '1 day ago',
  },
  {
    id: '6',
    title: "Nigeria's Tech Renaissance",
    excerpt: 'From Paystack to Flutterwave. A generation of Nigerian builders that stopped waiting for permission.',
    author: 'Tayo Oviosu',
    tag: 'Technology',
    readingTime: '8 min read',
    likes: 203,
    comments: 31,
    date: '1 day ago',
  },
  {
    id: '7',
    title: 'Refactoring UI — Design Lessons Every Developer Needs',
    excerpt: 'This is not about making things pretty. It is about making things work visually. There is a difference.',
    author: 'Adam Wathan',
    tag: 'Design',
    readingTime: '9 min read',
    likes: 445,
    comments: 67,
    date: '2 days ago',
  },
  {
    id: '8',
    title: 'Purple Hibiscus — Faith, Freedom and Family',
    excerpt: 'Kambili had almost no voice. This is a story about finding your voice inside silence.',
    author: 'Chimamanda Ngozi Adichie',
    tag: 'Writing',
    readingTime: '13 min read',
    likes: 312,
    comments: 44,
    date: '2 days ago',
  },
  {
    id: '9',
    title: 'The Lagos Hustle — Building Wealth in Chaos',
    excerpt: 'Lagos does not wait for you to be ready. It will test you on day one and day one thousand.',
    author: 'Kemi Ogunkoya',
    tag: 'Startups',
    readingTime: '7 min read',
    likes: 178,
    comments: 23,
    date: '3 days ago',
  },
  {
    id: '10',
    title: 'God is the Ultimate Tech Bro',
    excerpt: 'Imagine the greatness that coded the sun, designed the ocean and launched the galaxies — without a laptop or a MacBook.',
    author: 'Kareemah Ahmad',
    tag: 'Writing',
    readingTime: '3 min read',
    likes: 892,
    comments: 156,
    date: 'Just now',
  },
]