import { describe, it, expect } from "vitest";

// ── 1. Reading time calculator ──────────────────────────
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

describe("calculateReadingTime", () => {
  it("returns 1 for short content", () => {
    const content = "This is a short post.";
    expect(calculateReadingTime(content)).toBe(1);
  });

  it("calculates correctly for longer content", () => {
    const words = new Array(400).fill("word").join(" ");
    expect(calculateReadingTime(words)).toBe(2);
  });

  it("rounds up for partial minutes", () => {
    const words = new Array(201).fill("word").join(" ");
    expect(calculateReadingTime(words)).toBe(2);
  });
});

// ── 2. Slug generator ───────────────────────────────────
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

describe("generateSlug", () => {
  it("converts title to lowercase slug", () => {
    expect(generateSlug("Hello World")).toBe("hello-world");
  });

  it("removes special characters", () => {
    expect(generateSlug("Hello, World!")).toBe("hello-world");
  });

  it("handles multiple spaces", () => {
    expect(generateSlug("Hello   World")).toBe("hello-world");
  });

  it("handles already valid slug", () => {
    expect(generateSlug("hello-world")).toBe("hello-world");
  });
});

// ── 3. Password validation ──────────────────────────────
function validatePassword(password: string): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  if (password.length < 8) errors.push("At least 8 characters required");
  if (!/[A-Z]/.test(password))
    errors.push("At least one uppercase letter required");
  if (!/[0-9]/.test(password)) errors.push("At least one number required");
  if (!/[^A-Za-z0-9]/.test(password))
    errors.push("At least one special character required");
  return { valid: errors.length === 0, errors };
}

describe("validatePassword", () => {
  it("returns valid for strong password", () => {
    const result = validatePassword("StrongPass1!");
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("fails for short password", () => {
    const result = validatePassword("Ab1!");
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("At least 8 characters required");
  });

  it("fails for password without uppercase", () => {
    const result = validatePassword("weakpass1!");
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("At least one uppercase letter required");
  });

  it("fails for password without number", () => {
    const result = validatePassword("WeakPass!");
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("At least one number required");
  });

  it("fails for password without special character", () => {
    const result = validatePassword("WeakPass1");
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("At least one special character required");
  });
});

// ── 4. Feed sort algorithm ──────────────────────────────
interface Post {
  id: string;
  title: string;
  likes: number;
  views: number;
  createdAt: Date;
}

function sortPosts(posts: Post[], sortBy: "popular" | "recent"): Post[] {
  if (sortBy === "popular") {
    return [...posts].sort((a, b) => b.likes - a.likes);
  }
  return [...posts].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );
}

describe("sortPosts", () => {
  const posts: Post[] = [
    {
      id: "1",
      title: "Post 1",
      likes: 10,
      views: 100,
      createdAt: new Date("2026-01-01"),
    },
    {
      id: "2",
      title: "Post 2",
      likes: 50,
      views: 200,
      createdAt: new Date("2026-01-03"),
    },
    {
      id: "3",
      title: "Post 3",
      likes: 30,
      views: 150,
      createdAt: new Date("2026-01-02"),
    },
  ];

  it("sorts by popular (most likes first)", () => {
    const sorted = sortPosts(posts, "popular");
    expect(sorted[0].id).toBe("2");
    expect(sorted[1].id).toBe("3");
    expect(sorted[2].id).toBe("1");
  });

  it("sorts by recent (newest first)", () => {
    const sorted = sortPosts(posts, "recent");
    expect(sorted[0].id).toBe("2");
    expect(sorted[1].id).toBe("3");
    expect(sorted[2].id).toBe("1");
  });

  it("does not mutate original array", () => {
    const original = [...posts];
    sortPosts(posts, "popular");
    expect(posts).toEqual(original);
  });
});
