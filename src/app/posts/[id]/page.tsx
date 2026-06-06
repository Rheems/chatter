import Link from 'next/link'
import { ArrowLeft, Heart, MessageCircle, Bookmark, Share2, Clock, Eye } from 'lucide-react'

const placeholderPosts = [
  {
    id: '1',
    title: 'Time Changes Yesterday',
    excerpt: 'A haunting exploration of memory, identity and the passage of time in modern Nigeria.',
    author: 'Sefi Atta',
    tag: 'Writing',
    readingTime: '12 min read',
    likes: 124,
    comments: 18,
    views: 1240,
    date: 'May 26, 2026',
    content: [
      'Time Changes Yesterday follows a young girl navigating life after the loss of her mother. Grief in this story is not loud — it is quiet and stubborn, living in the corners of every room the mother used to occupy.',
      'The real tension comes from her younger sister, who begins to warm up to a woman their father has started seeing. To the younger sister, this woman represents something hopeful — a chance for the family to breathe again.',
      'But the elder sister cannot accept it. To her, acceptance feels like betrayal. How do you let another woman stand in your mother\'s kitchen? How do you smile at the dinner table when the wrong person is sitting there?',
      'This is a story about how grief divides families. How two people can love the same person who is gone and mourn them in completely opposite ways. One sister holds on. The other tries to move forward. Neither is wrong. Both are hurting.',
      'What makes this book stay with you is how real the sisters feel. You have met these people. You may be one of them. The question the book leaves you with is not who is right — but whether love is big enough to hold two kinds of grief at the same time.',
    ],
  },
  {
    id: '2',
    title: 'Nearly Everybody in Lagos is Mad',
    excerpt: 'A razor-sharp, darkly comic portrait of Lagos life.',
    author: 'Dami Ajayi',
    tag: 'Africa',
    readingTime: '9 min read',
    likes: 89,
    comments: 12,
    views: 890,
    date: 'May 24, 2026',
    content: [
      'If you have ever stood on Third Mainland Bridge at rush hour, watching a thousand cars inch forward in the heat, you understand the title before you open the first page.',
      'Nearly Everybody in Lagos is Mad is Dami Ajayi\'s love letter to the most impossible city on earth. It is funny, sad, sharp and completely true.',
      'The stories follow ordinary Lagosians navigating extraordinary absurdity. A civil servant who has been coming to work for three years at a ministry that has no actual work to do. A woman who falls in love with her okada rider because he is the only man who has ever arrived on time.',
      'Ajayi has a comedian\'s timing and a poet\'s eye. His sentences land like a slap — you feel them before you understand them. He finds humor in suffering without trivializing it.',
      'Nearly Everybody in Lagos is Mad is not really about madness. It is about survival. And in Lagos, sometimes the two look exactly the same.',
    ],
  },
  {
    id: '3',
    title: 'Things Fall Apart — A Modern Reading',
    excerpt: 'Chinua Achebe\'s timeless classic revisited through a 21st century lens.',
    author: 'Chinua Achebe',
    tag: 'Culture',
    readingTime: '15 min read',
    likes: 445,
    comments: 67,
    views: 4450,
    date: 'May 20, 2026',
    content: [
      'When Things Fall Apart was published in 1958, it did something no African novel had done before. It looked the colonizer in the eye and said — we had civilization before you came.',
      'Okonkwo is one of literature\'s great tragic figures. He is a man of enormous strength and terrible fear. Everything he does is driven by terror of becoming his father — a gentle, debt-ridden dreamer whom the village considered weak.',
      'But Igboland in the late 19th century is changing whether Okonkwo accepts it or not. The British are coming. The missionaries are coming.',
      'The most devastating moment in the book is not Okonkwo\'s death. It is the final paragraph — where the District Commissioner thinks about what footnote Okonkwo\'s life might warrant in his memoir.',
      'Things Fall Apart insists that Okonkwo\'s story is the story. Not the footnote. Never the footnote.',
    ],
  },
  {
    id: '4',
    title: 'The Secret Lives of Baba Segi\'s Wives',
    excerpt: 'Lola Shoneyin\'s bold novel exposes the hidden world of a polygamous household.',
    author: 'Lola Shoneyin',
    tag: 'Culture',
    readingTime: '11 min read',
    likes: 167,
    comments: 28,
    views: 1670,
    date: 'May 18, 2026',
    content: [
      'Lola Shoneyin opens her debut novel with a sentence that tells you exactly what kind of book you are holding: Baba Segi\'s household was happy until his fourth wife arrived.',
      'The fourth wife is Bolanle — educated, city-raised, the daughter of a pastor. The three existing wives are immediately suspicious. A university girl does not marry a polygamist for love. What is she hiding?',
      'Shoneyin tells the story in rotating perspectives — each wife\'s voice distinct, each woman carrying secrets that would destroy the household if spoken aloud.',
      'This is a book about women\'s resilience and women\'s complicity. About what women do to survive systems designed to diminish them.',
      'The Secret Lives of Baba Segi\'s Wives is essential Nigerian literature. Bold, funny, devastating and completely unforgettable.',
    ],
  },
  {
    id: '5',
    title: 'Stay With Me',
    excerpt: 'Ayobami Adeyemi\'s devastating debut about love, infertility and buried secrets.',
    author: 'Ayobami Adeyemi',
    tag: 'Writing',
    readingTime: '10 min read',
    likes: 234,
    comments: 35,
    views: 2340,
    date: 'May 15, 2026',
    content: [
      'Stay With Me begins with a marriage and ends with the truth about that marriage. Everything in between is grief.',
      'Yejide and Akin are in love. They are modern, educated Nigerians who believe their marriage is different. Then three years pass without a child. And everything they believed about themselves begins to crack.',
      'What makes Stay With Me so devastating is that both characters are sympathetic and both characters cause terrible harm.',
      'The title Stay With Me is a plea. It is what Yejide wants to say to the children she loses. It is what Akin wants to say to Yejide.',
      'This book will hollow you out. Read it anyway.',
    ],
  },
  {
    id: '6',
    title: "Nigeria's Tech Renaissance",
    excerpt: 'From Paystack to Flutterwave, Nigerian startups are rewriting the rules.',
    author: 'Tayo Oviosu',
    tag: 'Technology',
    readingTime: '8 min read',
    likes: 203,
    comments: 31,
    views: 2030,
    date: 'May 12, 2026',
    content: [
      'Ten years ago, if you told a Silicon Valley investor that the most exciting fintech companies in the world would come from Lagos, they would have smiled politely and moved on.',
      'Nobody is smiling politely anymore. Paystack was acquired by Stripe for $200 million. Flutterwave reached a $3 billion valuation.',
      'What is driving this? A young population. Mobile penetration that bypassed the desktop era entirely. A problem density that breeds innovation.',
      'But most importantly — a generation that stopped waiting for permission.',
      'The next decade will determine whether this renaissance becomes permanent. But if the last ten years have taught us anything: underestimate Nigerian builders at your own risk.',
    ],
  },
  {
    id: '7',
    title: 'Refactoring UI — Design Lessons Every Developer Needs',
    excerpt: 'Adam Wathan and Steve Schoger distilled years of hard-won design knowledge into one book.',
    author: 'Adam Wathan',
    tag: 'Design',
    readingTime: '9 min read',
    likes: 445,
    comments: 67,
    views: 4450,
    date: 'May 10, 2026',
    content: [
      'Most frontend developers build interfaces by instinct — copy a component, adjust the colors, ship it. Refactoring UI is the book that replaces instinct with understanding.',
      'This is not a book about making things look pretty. It is a book about making things work visually. There is a difference. Pretty is subjective. Visual clarity is a skill that can be learned.',
      'Wathan teaches you to think about hierarchy first — not color, not font choice, but what the user\'s eye should land on first, second and third. Every design decision either supports that hierarchy or fights it.',
      'The lessons on spacing, typography and contrast are immediately practical. These are the decisions that separate interfaces that feel professional from ones that feel almost right.',
      'If you are a frontend developer who wants to stop guessing and start deciding — this book is for you.',
    ],
  },
  {
    id: '8',
    title: 'Purple Hibiscus — Faith, Freedom and Family',
    excerpt: "Chimamanda Ngozi Adichie's debut follows fifteen-year-old Kambili in Enugu.",
    author: 'Chimamanda Ngozi Adichie',
    tag: 'Writing',
    readingTime: '13 min read',
    likes: 312,
    comments: 44,
    views: 3120,
    date: 'May 8, 2026',
    content: [
      'Kambili Achike is fifteen years old and she has almost no voice. In her father\'s house, speech is rationed. There are rules for everything.',
      'Eugene Achike — Papa — is one of Nigerian literature\'s most complex villains. He is generous to his community, a champion of democracy. He is also a man who pours boiling water on his daughter\'s feet for breaking the Lenten fast.',
      'The novel turns on a visit to Aunty Ifeoma in Nsukka. Her house is loud, messy, poor and full of laughter. For Kambili, it is the most terrifying and liberating place she has ever been.',
      'Purple hibiscus flowers grow in Ifeoma\'s garden. They represent everything that breaks the rules of what is supposed to exist. Freedom. Beauty that was not asked for and cannot be controlled.',
      'This is a book about finding your voice inside silence. About learning that love without freedom is not love at all.',
    ],
  },
  {
    id: '9',
    title: 'The Lagos Hustle — Building Wealth in Chaos',
    excerpt: "A practical guide to entrepreneurship in Nigeria's most competitive city.",
    author: 'Kemi Ogunkoya',
    tag: 'Startups',
    readingTime: '7 min read',
    likes: 178,
    comments: 23,
    views: 1780,
    date: 'May 5, 2026',
    content: [
      'Lagos does not wait for you to be ready. It does not care about your business plan. It will test you on day one and it will test you on day one thousand.',
      'The first lesson is infrastructure independence. In Lagos you cannot assume electricity, internet or reliable supply chains. Every business that survives builds redundancy into its foundation.',
      'The second lesson is relationship primacy. Nigerian business runs on trust networks that no app can replicate. Who introduced you, who vouches for you — these matter more than your product in the first year.',
      'Ogunkoya is at her best writing about failure. The chapter on her second company is the most honest account of startup death I have read. No spin. No redemption arc. Just what happened.',
      'Lagos will break your business at least once. The Lagos Hustle is about building something strong enough to survive the breaking.',
    ],
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
    views: 8920,
    date: 'June 5, 2026',
    content: [
      'Who is your role model when it comes to tech? Sure, we all have one.',
      'Imagine the greatness that coded the sun, designed the ocean and launched the galaxies — without a laptop or a MacBook.',
      'God is the ultimate tech bro. Not your regular tech bro with a Mac, but the One that says "Be" Be and it is.',
      'Let there be light. And boom the first line of code ran without a bug.',
      'He didn\'t debug the void. He deployed the valleys, mountains and hills. Backend so seamless, yet the architecture behind it remains unknown.',
      'A friend of mine, Itoro, once said God is a tech bro. But if she want to be biased, she would say God is a product manager — because He wears many hats.',
      'I smiled and said: God is the ultimate tech bro. The most perfect developer. No errors. No bugs. Seamless from beginning to finish.',
      'He built humans with an API called the breath of life. Gave us risky features and free will. but hey, every dev loves a challenge.',
      'He watches us now and always not with a drone, not a CCTV camera, but with something more powerful than 5G. Oh my. Omnipotent. Omnipresent.',
      'When you pray, it is an asynchronous request. He either responds immediately or you have to async await. He never ghosts us. You just have to console.log it well.',
      'When next the code of your life breaks, just know that God is the ultimate tech bro who never ships a half-baked build.',
      'We are all a work in progress. Your version 2.0 will be worth the wait.',
      'Always remember God is the ultimate tech bro.',
      '— Kareemah Ahmad',
    ],
  },
]

const placeholderComments = [
  {
    id: '1',
    author: 'Amara Nwosu',
    content: 'This is one of the most beautifully written pieces I have read this year. Thank you for sharing.',
    date: '2 hours ago',
    likes: 12,
  },
  {
    id: '2',
    author: 'Tunde Balogun',
    content: 'Absolutely incredible. I am ordering this book right now!',
    date: '4 hours ago',
    likes: 8,
  },
  {
    id: '3',
    author: 'Fatima Hassan',
    content: 'Nigerian literature is having a real moment right now. This review captures exactly why.',
    date: '6 hours ago',
    likes: 5,
  },
]

export default function PostDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const post = placeholderPosts.find((p) => p.id === params.id) ?? placeholderPosts[0]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1E]">

      {/* Back Navigation */}
      <div className="border-b border-gray-100 dark:border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/feed"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-white/50 hover:text-[#0F2B5B] dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Feed</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex gap-12 max-w-6xl mx-auto">

          {/* Left Action Bar */}
          <div className="hidden lg:flex flex-col items-center gap-6 pt-8 sticky top-32 h-fit">
            <button
              aria-label="Like post"
              className="flex flex-col items-center gap-1 group"
            >
              <div className="h-10 w-10 rounded-full border-2 border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-red-400 group-hover:bg-red-50 dark:group-hover:bg-red-500/10 transition-all">
                <Heart className="h-5 w-5 text-gray-400 group-hover:text-red-400 transition-colors" />
              </div>
              <span className="text-xs text-gray-400 dark:text-white/30">
                {post.likes}
              </span>
            </button>

            <button
              aria-label="Comment on post"
              className="flex flex-col items-center gap-1 group"
            >
              <div className="h-10 w-10 rounded-full border-2 border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-[#0F2B5B] group-hover:bg-[#0F2B5B]/5 dark:group-hover:bg-white/10 transition-all">
                <MessageCircle className="h-5 w-5 text-gray-400 group-hover:text-[#0F2B5B] dark:group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs text-gray-400 dark:text-white/30">
                {post.comments}
              </span>
            </button>

            <button
              aria-label="Bookmark post"
              className="flex flex-col items-center gap-1 group"
            >
              <div className="h-10 w-10 rounded-full border-2 border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-[#F97316] group-hover:bg-orange-50 dark:group-hover:bg-orange-500/10 transition-all">
                <Bookmark className="h-5 w-5 text-gray-400 group-hover:text-[#F97316] transition-colors" />
              </div>
            </button>

            <button
              aria-label="Share post"
              className="flex flex-col items-center gap-1 group"
            >
              <div className="h-10 w-10 rounded-full border-2 border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-[#0F2B5B] group-hover:bg-[#0F2B5B]/5 dark:group-hover:bg-white/10 transition-all">
                <Share2 className="h-5 w-5 text-gray-400 group-hover:text-[#0F2B5B] dark:group-hover:text-white transition-colors" />
              </div>
            </button>
          </div>

          {/* Main Content */}
          <article className="flex-1 max-w-2xl">

            {/* Tag */}
            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-[#0F2B5B]/10 dark:bg-white/10 text-[#0F2B5B] dark:text-white mb-6">
              {post.tag}
            </span>

            {/* Title */}
            <h1
              className="text-4xl md:text-5xl font-bold text-[#0F2B5B] dark:text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-500 dark:text-white/50 leading-relaxed mb-8 border-l-4 border-[#F97316] pl-4">
              {post.excerpt}
            </p>

            {/* Author + Meta */}
            <div className="flex items-center justify-between py-6 border-y border-gray-100 dark:border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[#0F2B5B] flex items-center justify-center text-lg font-bold text-white">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#0F2B5B] dark:text-white">
                    {post.author}
                  </p>
                  <p className="text-sm text-gray-400 dark:text-white/30">
                    {post.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400 dark:text-white/30">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{post.views} views</span>
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-700 dark:text-white/70 leading-relaxed text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Mobile Action Bar */}
            <div className="flex items-center justify-center gap-6 py-8 mt-8 border-t border-gray-100 dark:border-white/10 lg:hidden">
              <button
                aria-label="Like post"
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/50 hover:text-red-400 transition-colors"
              >
                <Heart className="h-5 w-5" />
                <span>{post.likes}</span>
              </button>
              <button
                aria-label="Comment on post"
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/50 hover:text-[#0F2B5B] dark:hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>{post.comments}</span>
              </button>
              <button
                aria-label="Bookmark post"
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/50 hover:text-[#F97316] transition-colors"
              >
                <Bookmark className="h-5 w-5" />
                <span>Save</span>
              </button>
              <button
                aria-label="Share post"
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/50 hover:text-[#0F2B5B] dark:hover:text-white transition-colors"
              >
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>

            {/* Comments Section */}
            <div className="mt-12 space-y-6">
              <h2
                className="text-2xl font-bold text-[#0F2B5B] dark:text-white"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Comments ({post.comments})
              </h2>

              {/* Comment Input */}
              <div className="flex gap-3">
                <div className="h-9 w-9 rounded-full bg-[#F97316] flex items-center justify-center text-sm font-bold text-white shrink-0">
                  K
                </div>
                <div className="flex-1 space-y-2">
                  <textarea
                    placeholder="Share your thoughts..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-sm outline-none focus:border-[#0F2B5B] dark:focus:border-[#F97316] transition-all resize-none"
                  />
                  <button className="px-5 py-2 rounded-xl bg-[#0F2B5B] text-white text-sm font-semibold hover:bg-[#0F2B5B]/90 transition-all">
                    Post Comment
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {placeholderComments.map((comment) => (
                  <div key={comment.id} className="flex gap-3">
                    <div className="h-9 w-9 rounded-full bg-[#0F2B5B] flex items-center justify-center text-sm font-bold text-white shrink-0">
                      {comment.author.charAt(0)}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-[#0F2B5B] dark:text-white">
                          {comment.author}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-white/30">
                          {comment.date}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed">
                        {comment.content}
                      </p>
                      <button
                        aria-label="Like comment"
                        className="flex items-center gap-1 text-xs text-gray-400 dark:text-white/30 hover:text-red-400 transition-colors pt-1"
                      >
                        <Heart className="h-3 w-3" />
                        <span>{comment.likes}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden xl:block w-72 shrink-0">
            <div className="sticky top-24 space-y-6">

              {/* Author Card */}
              <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-[#0F2B5B] flex items-center justify-center text-xl font-bold text-white">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="font-bold text-[#0F2B5B] dark:text-white"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-white/30">
                      Writer
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-white/50 leading-relaxed">
                  A passionate writer exploring the intersection of culture, technology and African identity.
                </p>
                <button className="w-full py-2 rounded-xl bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA6C0A] transition-all">
                  Follow
                </button>
              </div>

              {/* More Posts */}
              <div className="bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10">
                <p
                  className="text-sm font-bold text-[#0F2B5B] dark:text-white mb-4"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  More stories
                </p>
                <div className="space-y-4">
                  {placeholderPosts
                    .filter((p) => p.id !== post.id)
                    .slice(0, 3)
                    .map((p) => (
                      <Link
                        key={p.id}
                        href={`/posts/${p.id}`}
                        className="block group"
                      >
                        <p
                          className="text-sm font-semibold text-[#0F2B5B] dark:text-white group-hover:text-[#F97316] transition-colors line-clamp-2"
                          style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                          {p.title}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-white/30 mt-1">
                          {p.readingTime}
                        </p>
                      </Link>
                    ))}
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}