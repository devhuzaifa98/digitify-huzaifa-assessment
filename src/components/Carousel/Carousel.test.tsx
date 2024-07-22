import { render, screen } from "@testing-library/react";
import { Carousel } from "./index";
import { useCarousel } from "../../hooks/useCarousel";

jest.mock("../../Hooks/useCarousel");
jest.mock("./Summary/SummarySlide", () => ({
  SummarySlide: () => <div data-testid="summary-slide">Summary Slide</div>,
}));
jest.mock("./Slide", () => ({
  StandardSlides: () => (
    <div data-testid="standard-slides">Standard Slides</div>
  ),
}));
jest.mock("../ThankYou", () => ({
  ThankYou: () => <div data-testid="thank-you">Thank You</div>,
}));

describe("Carousel Component", () => {
  it("renders SummarySlide when currentSlideIndex is the last slide and isSubmitted is false", () => {
    (useCarousel as jest.Mock).mockReturnValue({
      currentSlideIndex: 4,
      totalSlides: 5,
      isSubmitted: false,
    });

    render(<Carousel />);

    const summarySlide = screen.getByTestId("summary-slide");
    expect(summarySlide).toBeInTheDocument();
    expect(screen.queryByTestId("standard-slides")).not.toBeInTheDocument();
    expect(screen.queryByTestId("thank-you")).not.toBeInTheDocument();
  });

  it("renders StandardSlides when not on the summary slide and isSubmitted is false", () => {
    (useCarousel as jest.Mock).mockReturnValue({
      currentSlideIndex: 2,
      totalSlides: 5,
      isSubmitted: false,
    });

    render(<Carousel />);

    const standardSlides = screen.getByTestId("standard-slides");
    expect(standardSlides).toBeInTheDocument();
    expect(screen.queryByTestId("summary-slide")).not.toBeInTheDocument();
    expect(screen.queryByTestId("thank-you")).not.toBeInTheDocument();
  });

  it("renders ThankYou when isSubmitted is true", () => {
    (useCarousel as jest.Mock).mockReturnValue({
      currentSlideIndex: 4,
      totalSlides: 5,
      isSubmitted: true,
    });

    render(<Carousel />);

    const thankYou = screen.getByTestId("thank-you");
    expect(thankYou).toBeInTheDocument();
    expect(screen.queryByTestId("summary-slide")).not.toBeInTheDocument();
    expect(screen.queryByTestId("standard-slides")).not.toBeInTheDocument();
  });
});
