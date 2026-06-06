import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function TagPill({
  tag,
  active = false,
  onClick,
}: {
  tag: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={active ? "active" : ""}
      data-testid="tag-pill"
    >
      {tag}
    </button>
  );
}

describe("TagPill", () => {
  it("renders tag name correctly", () => {
    render(<TagPill tag="Technology" />);
    expect(screen.getByText("Technology")).toBeInTheDocument();
  });

  it("applies active class when active prop is true", () => {
    render(<TagPill tag="Writing" active={true} />);
    const pill = screen.getByTestId("tag-pill");
    expect(pill).toHaveClass("active");
  });

  it("does not apply active class when inactive", () => {
    render(<TagPill tag="Design" active={false} />);
    const pill = screen.getByTestId("tag-pill");
    expect(pill).not.toHaveClass("active");
  });

  it("calls onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<TagPill tag="Africa" onClick={handleClick} />);
    await userEvent.click(screen.getByTestId("tag-pill"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
