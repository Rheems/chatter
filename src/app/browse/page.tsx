'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Filter } from 'lucide-react'

const allTags = [
  'All', 'Technology', 'Writing', 'Culture',
  'Design', 'Africa', 'Productivity', 'Programming',
  'Startups', 'Mental Health', 'Finance', 'Career', 'Science',
]

const allPosts = [
  {
    id: '1',
    title: 'Time Changes Yesterday',
    excerpt: 'A young girl navigating life after the loss of her mother, caught between grief and a family moving forward without her blessing.',
    author: 'Sefi Atta',
    tag: 'Writing',
    readingTime: '12 min read',
    likes: 124,
  },
  {
    id: '2',
    title: 'Nearly Everybody in Lagos is Mad',
    excerpt: 'A razor-sharp, darkly comic portrait of Lagos life — the chaos, the hustle, the madness and the magic.',
    author: 'Dami Ajayi',
    tag: 'Africa',
    readingTime: '9 min read',
    likes: 89,
  },
  {
    id: '3',
    title: 'Things Fall Apart — A Modern Reading',
    excerpt: 'Okonkwo\'s story is not a footnote in someone else\'s history. It is the story. Never the footnote.',
    author: 'Chinua Achebe',
    tag: 'Culture',
    readingTime: '15 min read',
    likes: 445,
  },
  {
    id: '4',
    title: 'The Secret Lives of Baba Segi\'s Wives',
    excerpt: 'Baba Segi\'s household was happy until his fourth wife arrived. A bold story about women, secrets and survival.',
    author: 'Lola Shoneyin',
    tag: 'Culture',
    readingTime: '11 min read',
    likes: 167,
  },
  {
    id: '5',
    title: 'Stay With Me',
    excerpt: 'Yejide and Akin believed their marriage was different. Then three years passed without a child.',
    author: 'Ayobami Adeyemi',
    tag: 'Writing',
    readingTime: '10 min read',
    likes: 234,
  },
  {
    id: '6',
    title: "Nigeria's Tech Renaissance",
    excerpt: 'From Paystack to Flutterwave. A generation of Nigerian builders that stopped waiting for permission.',
    author: 'Tayo Oviosu',
    tag: 'Technology',
    readingTime: '8 min read',
    likes: 203,
  },
  {
    id: '7',
    title: 'Refactoring UI — Design Lessons Every Developer Needs',
    excerpt: 'This is not about making things pretty. It is about making things work visually. There is a difference.',
    author: 'Adam Wathan',
    tag: 'Design',
    readingTime: '9 min read',
    likes: 445,
  },
  {
    id: '8',
    title: 'Purple Hibiscus — Faith, Freedom and Family',
    excerpt: 'Kambili had almost no voice. This is a story about finding your voice inside silence.',
    author: 'Chimamanda Ngozi Adichie',
    tag: 'Writing',
    readingTime: '13 min read',
    likes: 312,
  },
  {
    id: '9',
    title: 'The Lagos Hustle — Building Wealth in Chaos',
    excerpt: 'Lagos does not wait for you to be ready. It will test you on day one and day one thousand.',
    author: 'Kemi Ogunkoya',
    tag: 'Startups',
    readingTime: '7 min read',
    likes: 178,
  },
  {
    id: '10',
    title: 'God is the Ultimate Tech Bro',
    excerpt: 'Imagine the greatness that coded the sun, designed the ocean and launched the galaxies — without a laptop or a MacBook.',
    author: 'Kareemah Ahmad',
    tag: 'Writing',
    readingTime: '3 min read',
    likes: 892,
  },
]

export default function BrowsePage() {
  const [activeTag, setActiveTag] = useState('All')
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('popular')

  const filtered = allPosts
    .filter((post) => {
      const matchesTag = activeTag === 'All' || post.tag === activeTag
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.author.toLowerCase().includes(search.toLowerCase()) ||
        post.tag.toLowerCase().includes(search.toLowerCase())
      return matchesTag && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === 'popular') return b.likes - a.likes
      return 0
    })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0F1E]">

      {/* Hero */}
      <div className="bg-[#0F2B5B] border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h1
              className="text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Browse Posts
            </h1>
            <p className="text-white/60">
              Discover stories, ideas and knowledge from writers across Africa
            </p>
            <div className="relative mt-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <input
                type="text"
                placeholder="Search posts, authors, topics..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-12 pl-11 pr-4 rounded-full bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 text-sm outline-none focus:border-[#F97316] transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

        {/* Tags Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                activeTag === tag
                  ? 'bg-[#0F2B5B] text-white border-[#0F2B5B]'
                  : 'bg-white dark:bg-white/5 text-gray-600 dark:text-white/60 border-gray-200 dark:border-white/10 hover:border-[#0F2B5B] dark:hover:border-white/30'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Sort + Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500 dark:text-white/40">
            <span className="font-bold text-[#0F2B5B] dark:text-white">
              {filtered.length}
            </span> posts found
          </p>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              aria-label="Sort posts by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border-2 border-gray-200 dark:border-white/10 rounded-xl px-3 py-1.5 bg-white dark:bg-white/5 text-gray-600 dark:text-white outline-none focus:border-[#0F2B5B] dark:focus:border-[#F97316] transition-all"
            >
              <option value="popular">Most Popular</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>
        </div>

        {/* Posts Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-white/5 rounded-2xl p-6 border-l-4 border-l-[#F97316] border border-gray-100 dark:border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#0F2B5B]/10 dark:bg-white/10 text-[#0F2B5B] dark:text-white mb-3">
                  {post.tag}
                </span>

                <h2
                  className="text-lg font-bold text-[#0F2B5B] dark:text-white group-hover:text-[#F97316] transition-colors leading-snug mb-2"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {post.title}
                </h2>

                <p className="text-sm text-gray-500 dark:text-white/50 line-clamp-2 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-[#0F2B5B] flex items-center justify-center text-xs font-bold text-white">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#0F2B5B] dark:text-white">
                        {post.author}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-white/30">
                        {post.readingTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <svg className="h-3 w-3 text-[#F97316]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {post.likes}
                  </div>
                </div>

                <Link
                  href={`/posts/${post.id}`}
                  className="mt-3 block text-xs font-semibold text-[#F97316] hover:text-[#EA6C0A] transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 space-y-4">
            <div className="h-16 w-16 rounded-2xl bg-[#0F2B5B]/10 dark:bg-white/10 flex items-center justify-center mx-auto">
              <Search className="h-8 w-8 text-[#0F2B5B]/30 dark:text-white/30" />
            </div>
            <h3
              className="text-xl font-bold text-[#0F2B5B] dark:text-white"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              No posts found
            </h3>
            <p className="text-gray-400 dark:text-white/30 text-sm">
              Try a different search term or tag
            </p>
            <button
              onClick={() => { setSearch(''); setActiveTag('All') }}
              className="text-sm font-semibold text-[#F97316] hover:text-[#EA6C0A] transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </div>
  )
}