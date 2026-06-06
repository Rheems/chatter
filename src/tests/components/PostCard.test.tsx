import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

function PostCard({
  title,
  excerpt,
  author,
  tag,
  readingTime,
  likes,
}: {
  title: string;
  excerpt: string;
  author: string;
  tag: string;
  readingTime: string;
  likes: number;
}) {
  return (
    <article data-testid="post-card">
      <span data-testid="post-tag">{tag}</span>
      <h2 data-testid="post-title">{title}</h2>
      <p data-testid="post-excerpt">{excerpt}</p>
      <div data-testid="post-author">{author}</div>
      <span data-testid="post-reading-time">{readingTime}</span>
      <span data-testid="post-likes">{likes}</span>
    </article>
  );
}

const mockPost = {
  title: "Time Changes Yesterday",
  excerpt: "A haunting exploration of memory in modern Nigeria.",
  author: "Sefi Atta",
  tag: "Writing",
  readingTime: "12 min read",
  likes: 124,
};

describe("PostCard", () => {
  it("renders post title", () => {
    render(<PostCard {...mockPost} />);
    expect(screen.getByTestId("post-title")).toHaveTextContent(
      "Time Changes Yesterday",
    );
  });

  it("renders author name", () => {
    render(<PostCard {...mockPost} />);
    expect(screen.getByTestId("post-author")).toHaveTextContent("Sefi Atta");
  });

  it("renders tag correctly", () => {
    render(<PostCard {...mockPost} />);
    expect(screen.getByTestId("post-tag")).toHaveTextContent("Writing");
  });

  it("renders reading time", () => {
    render(<PostCard {...mockPost} />);
    expect(screen.getByTestId("post-reading-time")).toHaveTextContent(
      "12 min read",
    );
  });

  it("renders likes count", () => {
    render(<PostCard {...mockPost} />);
    expect(screen.getByTestId("post-likes")).toHaveTextContent("124");
  });

  it("renders excerpt", () => {
    render(<PostCard {...mockPost} />);
    expect(screen.getByTestId("post-excerpt")).toBeInTheDocument();
  });
});
