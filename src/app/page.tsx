import Link from "next/link";
import {
  ArrowRight,
  PenLine,
  TrendingUp,
  Users,
  BookOpen,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1E]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0F2B5B]">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #F97316 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, #F97316 0%, transparent 40%)`,
          }}
        />

        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Builder Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-sm text-white/70">
              <Sparkles className="h-3 w-3 text-[#F97316]" />
              Built by Kareemah Ahmad · First Full Stack Project 🚀
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Think it. <span className="text-[#F97316]">Write it.</span>
              <br />
              Share it.
            </h1>

            {/* Subtext */}
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Chatter is a publishing platform for African writers and readers
              who believe in bold, long-form, thoughtful content. Your voice
              deserves an audience.
            </p>

            {/* CTA Buttons */}
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

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 pt-4">
              {[
                { number: "10K+", label: "Writers" },
                { number: "50K+", label: "Readers" },
                { number: "100K+", label: "Posts" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">
                      {stat.number}
                    </p>
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
                  style={{ fontFamily: "var(--font-playfair)" }}
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
              style={{ fontFamily: "var(--font-playfair)" }}
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
              {/* Tag */}
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#0F2B5B]/10 dark:bg-white/10 text-[#0F2B5B] dark:text-white">
                {post.tag}
              </span>

              {/* Title */}
              <h3
                className="text-lg font-bold leading-snug text-[#0F2B5B] dark:text-white group-hover:text-[#F97316] transition-colors"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-gray-500 dark:text-white/50 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Footer */}
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
                <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-[#F97316] group-hover:translate-x-1 transition-all" />
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
              style={{ fontFamily: "var(--font-playfair)" }}
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
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to share your story?
            </h2>
            <p className="text-white/60 text-lg">
              Join thousands of writers already publishing on Chatter. Free
              forever. No credit card needed.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center h-12 px-10 text-sm font-semibold rounded-full bg-[#F97316] text-white hover:bg-[#EA6C0A] transition-all hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              Create Your Account Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <p className="text-white/30 text-sm pt-4">
              Built with ❤️ by Kareemah Ahmad · First Full Stack Project
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: PenLine,
    title: "Write Beautifully",
    description:
      "A distraction-free editor with Markdown support, image uploads and autosave so you never lose your work.",
  },
  {
    icon: Users,
    title: "Grow Your Voice",
    description:
      "Build a following, get notified when readers engage and track your growth with detailed analytics.",
  },
  {
    icon: BookOpen,
    title: "Discover Great Ideas",
    description:
      "A personalized feed based on your interests, trending posts and writers worth following.",
  },
];

const placeholderPosts = [
  {
    id: "1",
    title: "Time Changes Yesterday",
    excerpt:
      "A haunting exploration of memory, identity and the passage of time in modern Nigeria. Sefi Atta weaves together past and present in this unforgettable masterpiece that will leave you questioning everything you thought you knew about time.",
    author: "Sefi Atta",
    tag: "Writing",
    readingTime: "12 min read",
  },
  {
    id: "2",
    title: "Nearly Everybody in Lagos is Mad",
    excerpt:
      "A razor-sharp, darkly comic portrait of Lagos life — the chaos, the hustle, the madness and the magic of Africa's most electric city. Dami Ajayi captures the pulse of a city that never sleeps and never stops surprising you.",
    author: "Dami Ajayi",
    tag: "Africa",
    readingTime: "9 min read",
  },
  {
    id: "3",
    title: "Things Fall Apart — A Modern Reading",
    excerpt:
      "Chinua Achebe's timeless classic revisited through a 21st century lens. How does Okonkwo's story speak to today's Nigerian youth navigating tradition and modernity in an increasingly complex world?",
    author: "Chinua Achebe",
    tag: "Culture",
    readingTime: "15 min read",
  },
  {
    id: "4",
    title: "The Secret Lives of Baba Segi's Wives",
    excerpt:
      "Lola Shoneyin's bold and brilliant novel exposes the hidden world behind the walls of a polygamous household in Ibadan. A story of power, secrets, desire and the extraordinary resilience of women.",
    author: "Lola Shoneyin",
    tag: "Writing",
    readingTime: "11 min read",
  },
  {
    id: "5",
    title: "Stay With Me",
    excerpt:
      "Ayobami Adeyemi's devastating debut follows a Nigerian couple whose marriage is tested by infertility, family pressure and buried secrets. A story so real and raw it will break your heart.",
    author: "Ayobami Adeyemi",
    tag: "Culture",
    readingTime: "10 min read",
  },
  {
    id: "6",
    title: "Nigeria's Tech Renaissance",
    excerpt:
      "From Paystack to Flutterwave, Nigerian startups are rewriting the rules of African tech. Here's the inside story of how a generation of builders is creating world-class products from Lagos to Abuja.",
    author: "Tayo Oviosu",
    tag: "Technology",
    readingTime: "8 min read",
  },
  {
    id: "7",
    title: "Refactoring UI — Design Lessons Every Developer Needs",
    excerpt:
      "Adam Wathan and Steve Schoger distilled years of hard-won design knowledge into one book. These are the most powerful lessons that will transform how you build interfaces forever.",
    author: "Adam Wathan",
    tag: "Design",
    readingTime: "9 min read",
  },
  {
    id: "8",
    title: "Purple Hibiscus — Faith, Freedom and Family",
    excerpt:
      "Chimamanda Ngozi Adichie's debut novel follows fifteen-year-old Kambili as she navigates a devout but violent household in Enugu. A story about finding your voice in the most suffocating silence.",
    author: "Chimamanda Ngozi Adichie",
    tag: "Writing",
    readingTime: "13 min read",
  },
  {
    id: "9",
    title: "The Lagos Hustle — Building Wealth in Chaos",
    excerpt:
      "A practical guide to entrepreneurship in Nigeria's most competitive city. From market traders to tech founders, discover the mindset and strategies that separate those who make it.",
    author: "Kemi Ogunkoya",
    tag: "Startups",
    readingTime: "7 min read",
  },
];

const popularTags = [
  "Technology",
  "Writing",
  "Culture",
  "Design",
  "Africa",
  "Productivity",
  "Programming",
  "Startups",
  "Mental Health",
  "Finance",
  "Career",
  "Science",
];
