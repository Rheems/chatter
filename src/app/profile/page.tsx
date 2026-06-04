'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MapPin, Calendar, Settings, PenLine,
  Heart, MessageCircle, Bookmark, Eye
} from 'lucide-react'

const profileTabs = ['Posts', 'Bookmarks', 'About']

const userPosts = [
  {
    id: '1',
    title: 'Time Changes Yesterday',
    excerpt: 'A haunting exploration of memory, identity and the passage of time in modern Nigeria.',
    tag: 'Writing',
    readingTime: '12 min read',
    likes: 124,
    comments: 18,
    views: 1240,
    date: 'May 26, 2026',
  },
  {
    id: '3',
    title: "Nigeria's Tech Renaissance",
    excerpt: 'From Paystack to Flutterwave, Nigerian startups are rewriting the rules of African tech.',
    tag: 'Technology',
    readingTime: '8 min read',
    likes: 203,
    comments: 31,
    views: 2030,
    date: 'May 22, 2026',
  },
  {
    id: '5',
    title: 'Refactoring UI — Design Lessons Every Developer Needs',
    excerpt: 'Adam Wathan and Steve Schoger distilled years of hard-won design knowledge into one book.',
    tag: 'Design',
    readingTime: '9 min read',
    likes: 312,
    comments: 44,
    views: 3120,
    date: 'May 20, 2026',
  },
]

const bookmarkedPosts = [
  {
    id: '2',
    title: 'Nearly Everybody in Lagos is Mad',
    excerpt: 'A razor-sharp, darkly comic portrait of Lagos life.',
    author: 'Dami Ajayi',
    tag: 'Africa',
    readingTime: '9 min read',
  },
  {
    id: '4',
    title: 'Purple Hibiscus — Faith, Freedom and Family',
    excerpt: "Chimamanda Ngozi Adichie's debut novel follows fifteen-year-old Kambili in Enugu.",
    author: 'Chimamanda Ngozi Adichie',
    tag: 'Writing',
    readingTime: '13 min read',
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Posts')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0F1E]">

      {/* Cover */}
      <div className="h-48 bg-gradient-to-r from-[#0F2B5B] via-[#1a3a7a] to-[#0F2B5B] relative">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #F97316 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="container mx-auto px-4">

        {/* Profile Header */}
        <div className="relative -mt-16 mb-6">
          <div className="flex items-end justify-between">

            {/* Avatar */}
            <div className="h-32 w-32 rounded-2xl bg-[#0F2B5B] border-4 border-white dark:border-[#0A0F1E] flex items-center justify-center text-4xl font-bold text-white shadow-xl">
              K
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pb-2">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-gray-200 dark:border-white/10 text-sm font-semibold text-gray-600 dark:text-white/60 hover:border-[#0F2B5B] dark:hover:border-white/30 bg-white dark:bg-white/5 transition-all"
              >
                <Eye className="h-4 w-4" />
                <span>Analytics</span>
              </Link>
              <Link
                href="/posts/new"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA6C0A] transition-all"
              >
                <PenLine className="h-4 w-4" />
                <span>Write</span>
              </Link>
              <button className="p-2 rounded-xl border-2 border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/50 hover:border-[#0F2B5B] dark:hover:border-white/30 bg-white dark:bg-white/5 transition-all">
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Name and Bio */}
          <div className="mt-4 space-y-3">
            <div>
              <h1
                className="text-2xl font-bold text-[#0F2B5B] dark:text-white"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Kareemah Ahmad
              </h1>
              <p className="text-gray-500 dark:text-white/50 text-sm">
                @kareemah
              </p>
            </div>

            <p className="text-gray-600 dark:text-white/60 max-w-lg">
              Product Manager, Django Backend Engineer and Poet based in Bauchi, Nigeria.
              I write poems for school children and believe every African voice deserves
              an audience. Chatter is my first full stack project built with love.
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 dark:text-white/30">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /><span>Bauchi, Nigeria</span>
              </span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /><span>Joined May 2026</span></span>
              
               <a href="https://github.com/Rheems" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#F97316] transition-colors">GitHub</a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-2">
              <div className="text-center">
                <p className="text-xl font-bold text-[#0F2B5B] dark:text-white">
                  {userPosts.length}
                </p>
                <p className="text-xs text-gray-400 dark:text-white/30">
                  Posts
                </p>
              </div>
              <div className="w-px h-8 bg-gray-200 dark:bg-white/10" />
              <div className="text-center">
                <p className="text-xl font-bold text-[#0F2B5B] dark:text-white">
                  248
                </p>
                <p className="text-xs text-gray-400 dark:text-white/30">
                  Followers
                </p>
              </div>
              <div className="w-px h-8 bg-gray-200 dark:bg-white/10" />
              <div className="text-center">
                <p className="text-xl font-bold text-[#0F2B5B] dark:text-white">
                  89
                </p>
                <p className="text-xs text-gray-400 dark:text-white/30">
                  Following
                </p>
              </div>
              <div className="w-px h-8 bg-gray-200 dark:bg-white/10" />
              <div className="text-center">
                <p className="text-xl font-bold text-[#0F2B5B] dark:text-white">
                  6.2K
                </p>
                <p className="text-xs text-gray-400 dark:text-white/30">
                  Total Views
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-gray-200 dark:border-white/10 mb-6">
          {profileTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-semibold transition-all border-b-2 ${
                activeTab === tab
                  ? 'border-[#F97316] text-[#F97316]'
                  : 'border-transparent text-gray-500 dark:text-white/50 hover:text-[#0F2B5B] dark:hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="pb-16">

          {activeTab === 'Posts' && (
            <div className="space-y-4 max-w-2xl">
              {userPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white dark:bg-white/5 rounded-2xl p-6 border-l-4 border-l-[#F97316] border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#0F2B5B]/10 dark:bg-white/10 text-[#0F2B5B] dark:text-white mb-3">
                    {post.tag}
                  </span>
                  <h2
                    className="text-lg font-bold text-[#0F2B5B] dark:text-white group-hover:text-[#F97316] transition-colors mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-white/50 line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 dark:text-white/30 pt-3 border-t border-gray-100 dark:border-white/10">
                    <div className="flex items-center gap-4">
                      <span>{post.date}</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{post.views.toLocaleString()}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        <span>{post.likes}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{post.comments}</span>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'Bookmarks' && (
            <div className="space-y-4 max-w-2xl">
              {bookmarkedPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white dark:bg-white/5 rounded-2xl p-6 border-l-4 border-l-[#F97316] border border-gray-100 dark:border-white/10 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#0F2B5B]/10 dark:bg-white/10 text-[#0F2B5B] dark:text-white mb-3">
                    {post.tag}
                  </span>
                  <h2
                    className="text-lg font-bold text-[#0F2B5B] dark:text-white group-hover:text-[#F97316] transition-colors mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-white/50 line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 dark:text-white/30 pt-3 border-t border-gray-100 dark:border-white/10">
                    <span>By {post.author}</span>
                    <div className="flex items-center gap-1">
                      <Bookmark className="h-3 w-3 text-[#F97316]" />
                      <span>Saved</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'About' && (
            <div className="max-w-2xl space-y-6">
              <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10 space-y-4">
                <h3
                  className="text-lg font-bold text-[#0F2B5B] dark:text-white"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  About Kareemah
                </h3>
                <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                  Product Manager and Django Backend Engineer based in Bauchi, Nigeria.
                  I write poems and read them to school children because I believe words
                  have the power to shape young minds and build better futures.
                </p>
                <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                  Chatter is my first full stack project — a publishing platform built
                  for African writers and readers who believe in the power of long-form,
                  thoughtful content. Think it. Write it. Share it.
                </p>
              </div>

              <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10 space-y-4">
                <h3
                  className="text-lg font-bold text-[#0F2B5B] dark:text-white"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Topics I Write About
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Technology', 'Writing', 'Poetry', 'Africa', 'Education'].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full border-2 border-[#0F2B5B] dark:border-white/20 text-sm font-semibold text-[#0F2B5B] dark:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}