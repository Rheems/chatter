export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F1E]">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1
          className="text-4xl font-bold text-[#0F2B5B] dark:text-white mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Post {params.id}
        </h1>
        <p className="text-gray-500 dark:text-white/50">
          Full post content coming soon.
        </p>
      </div>
    </div>
  );
}
