import { render, screen } from "@testing-library/react";
import { Title } from "./Title";
import { useCarousel } from "../../hooks/useCarousel";

jest.mock("../../Hooks/useCarousel");

describe("Title Component", () => {
  const mockUseCarousel = {
    currentSlide: {
      title: "Test Title",
    },
  };

  beforeEach(() => {
    (useCarousel as jest.Mock).mockReturnValue(mockUseCarousel);
  });

  it("renders the current slide title", () => {
    render(<Title />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });
  it("animates correctly", async () => {
    render(<Title />);

    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toHaveStyle({
      opacity: 0,
      transform: "translateY(100%)",
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(titleElement).toHaveStyle({
      opacity: 1,
      transform: "translateY(0%)",
    });
  });
});
