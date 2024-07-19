import { render, screen } from "@testing-library/react";
import { Title } from "./Title";
import { useCarousel } from "../../Hooks/useCarousel";

jest.mock("../../Hooks/useCarousel");

describe("Title Component", () => {
  const mockCurrentSlide = {
    title: "Test Title",
  };

  beforeEach(() => {
    (useCarousel as jest.Mock).mockReturnValue({
      currentSlide: mockCurrentSlide,
    });
  });

  it("renders the current slide title", () => {
    render(<Title />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });
});
