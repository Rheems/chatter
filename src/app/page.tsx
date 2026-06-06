import Link from 'next/link'
import { ArrowRight, PenLine, TrendingUp, Users, BookOpen, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1E]">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F2B5B]">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #F97316 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, #F97316 0%, transparent 40%)`
          }}
        />
        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <div className="max-w-4xl mx-auto text-center space-y-8">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm text-white/70">
              <Sparkles className="h-3 w-3 text-[#F97316]" />
              <span>Built by Kareemah Ahmad · First Full Stack Project</span>
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Think it.{' '}
              <span className="text-[#F97316]">Write it.</span>
              <br />
              Share it.
            </h1>

            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Chatter is a publishing platform for African writers and readers
              who believe in bold, long-form, thoughtful content.
              Your voice deserves an audience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/feed"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full bg-[#F97316] text-white hover:bg-[#EA6C0A] transition-all hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                Start Reading
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                Start Writing Free
                <PenLine className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 pt-4">
              {[
                { number: '10K+', label: 'Writers' },
                { number: '50K+', label: 'Readers' },
                { number: '100K+', label: 'Posts' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">{stat.number}</p>
                    <p className="text-xs text-white/50">{stat.label}</p>
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-white/20" />}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-gray-100 dark:border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group text-center space-y-4 p-8 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
              >
                <div className="h-14 w-14 rounded-2xl bg-[#0F2B5B]/10 dark:bg-white/10 flex items-center justify-center mx-auto group-hover:bg-[#F97316]/10 transition-colors">
                  <feature.icon className="h-7 w-7 text-[#0F2B5B] dark:text-white group-hover:text-[#F97316] transition-colors" />
                </div>
                <h3
                  className="font-bold text-xl text-[#0F2B5B] dark:text-white"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <div className="space-y-1">
            <h2
              className="text-3xl font-bold text-[#0F2B5B] dark:text-white"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Featured Posts
            </h2>
            <p className="text-gray-500 dark:text-white/50 text-sm">
              Handpicked stories from our community
            </p>
          </div>
          <Link
            href="/browse"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[#F97316] hover:text-[#EA6C0A] transition-colors"
          >
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderPosts.map((post) => (
            <article
              key={post.id}
              className="group border-l-4 border-l-[#F97316] rounded-xl p-6 space-y-4 bg-white dark:bg-white/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100 dark:border-white/10"
            >
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#0F2B5B]/10 dark:bg-white/10 text-[#0F2B5B] dark:text-white">
                {post.tag}
              </span>

              <h3
                className="text-lg font-bold leading-snug text-[#0F2B5B] dark:text-white group-hover:text-[#F97316] transition-colors"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {post.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-white/50 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#0F2B5B] dark:bg-[#F97316] flex items-center justify-center text-xs font-bold text-white">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0F2B5B] dark:text-white">
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-white/40">
                      {post.readingTime}
                    </p>
                  </div>
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
        </div>
      </section>

      {/* Explore Topics */}
      <section className="border-t border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5">
        <div className="container mx-auto px-4 py-16">
          <div className="space-y-1 mb-8">
            <h2
              className="text-3xl font-bold text-[#0F2B5B] dark:text-white"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Explore Topics
            </h2>
            <p className="text-gray-500 dark:text-white/50 text-sm">
              Find content that matches your interests
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {popularTags.map((tag) => (
              <Link
                key={tag}
                href={`/browse?tag=${tag}`}
                className="px-5 py-2.5 rounded-full border-2 border-[#0F2B5B] dark:border-white/20 text-sm font-semibold text-[#0F2B5B] dark:text-white hover:bg-[#0F2B5B] hover:text-white dark:hover:bg-white dark:hover:text-[#0F2B5B] transition-all hover:-translate-y-0.5"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0F2B5B]">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Ready to share your story?
            </h2>
            <p className="text-white/60 text-lg">
              Join thousands of writers already publishing on Chatter.
              Free forever. No credit card needed.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center h-12 px-10 text-sm font-semibold rounded-full bg-[#F97316] text-white hover:bg-[#EA6C0A] transition-all hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              Create Your Account Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <p className="text-white/30 text-sm pt-4">
              Built with love by Kareemah Ahmad · First Full Stack Project
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}

const features = [
  {
    icon: PenLine,
    title: 'Write Beautifully',
    description: 'A distraction-free editor with Markdown support, image uploads and autosave so you never lose your work.',
  },
  {
    icon: Users,
    title: 'Grow Your Voice',
    description: 'Build a following, get notified when readers engage and track your growth with detailed analytics.',
  },
  {
    icon: BookOpen,
    title: 'Discover Great Ideas',
    description: 'A personalized feed based on your interests, trending posts and writers worth following.',
  },
]

const placeholderPosts = [
  {
    id: '1',
    title: 'Time Changes Yesterday',
    excerpt: 'A young girl navigating life after the loss of her mother, caught between grief and a family moving forward without her blessing.',
    author: 'Sefi Atta',
    tag: 'Writing',
    readingTime: '12 min read',
  },
  {
    id: '2',
    title: 'Nearly Everybody in Lagos is Mad',
    excerpt: 'A razor-sharp, darkly comic portrait of Lagos life — the chaos, the hustle, the madness and the magic of Africa\'s most electric city.',
    author: 'Dami Ajayi',
    tag: 'Africa',
    readingTime: '9 min read',
  },
  {
    id: '3',
    title: 'Things Fall Apart — A Modern Reading',
    excerpt: 'Chinua Achebe\'s timeless classic revisited. Okonkwo\'s story is not a footnote in someone else\'s history. It is the story.',
    author: 'Chinua Achebe',
    tag: 'Culture',
    readingTime: '15 min read',
  },
  {
    id: '4',
    title: 'The Secret Lives of Baba Segi\'s Wives',
    excerpt: 'Baba Segi\'s household was happy until his fourth wife arrived. A bold novel about women, secrets and survival.',
    author: 'Lola Shoneyin',
    tag: 'Culture',
    readingTime: '11 min read',
  },
  {
    id: '5',
    title: 'Stay With Me',
    excerpt: 'Yejide and Akin believed their marriage was different. Then three years passed without a child and everything began to crack.',
    author: 'Ayobami Adeyemi',
    tag: 'Writing',
    readingTime: '10 min read',
  },
  {
    id: '6',
    title: "Nigeria's Tech Renaissance",
    excerpt: 'From Paystack to Flutterwave, Nigerian startups are rewriting the rules. A generation that stopped waiting for permission.',
    author: 'Tayo Oviosu',
    tag: 'Technology',
    readingTime: '8 min read',
  },
  {
    id: '7',
    title: 'Refactoring UI — Design Lessons Every Developer Needs',
    excerpt: 'This is not about making things pretty. It is about making things work visually. There is a difference.',
    author: 'Adam Wathan',
    tag: 'Design',
    readingTime: '9 min read',
  },
  {
    id: '8',
    title: 'Purple Hibiscus — Faith, Freedom and Family',
    excerpt: 'Kambili had almost no voice. In her father\'s house, speech was rationed. This is a story about finding your voice inside silence.',
    author: 'Chimamanda Ngozi Adichie',
    tag: 'Writing',
    readingTime: '13 min read',
  },
  {
    id: '9',
    title: 'The Lagos Hustle — Building Wealth in Chaos',
    excerpt: 'Lagos does not wait for you to be ready. It will test you on day one and it will test you on day one thousand.',
    author: 'Kemi Ogunkoya',
    tag: 'Startups',
    readingTime: '7 min read',
  },
  {
    id: '10',
    title: 'God is the Ultimate Tech Bro',
    excerpt: 'Imagine the greatness that coded the sun, designed the ocean and launched the galaxies — without a laptop or a MacBook.',
    author: 'Kareemah Ahmad',
    tag: 'Writing',
    readingTime: '3 min read',
  },
]

const popularTags = [
  'Technology', 'Writing', 'Culture',
  'Design', 'Africa', 'Productivity',
  'Programming', 'Startups', 'Mental Health',
  'Finance', 'Career', 'Science',
]