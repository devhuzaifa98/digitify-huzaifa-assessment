import { render, screen } from "@testing-library/react";
import { SummarySlide } from "./SummarySlide";
import { useCarousel } from "../../../Hooks/useCarousel";

jest.mock("../../../Hooks/useCarousel");

jest.mock("./Summary", () => ({
  Summary: () => <div data-testid="summary">Summary</div>,
}));

jest.mock("./SummaryTitle", () => ({
  SummaryTitle: () => <div data-testid="summary-title">Summary Title</div>,
}));

describe("SummarySlide Component", () => {
  it("renders Summary and SummaryTitle components", () => {
    (useCarousel as jest.Mock).mockReturnValue({
      isSubmitted: false,
    });

    render(<SummarySlide />);

    expect(screen.getByTestId("summary")).toBeInTheDocument();

    expect(screen.getByTestId("summary-title")).toBeInTheDocument();
  });

  it("applies exit animation when not submitted", () => {
    (useCarousel as jest.Mock).mockReturnValue({
      isSubmitted: false,
    });

    const { container } = render(<SummarySlide />);

    // Check if motion.div has the correct exit animation
    const motionDiv = container.querySelector(
      'div[class="w-1/2 min-h-screen bg-primary flex justify-center items-center"]'
    );
    expect(motionDiv).toHaveStyle(`transform: translateX(-100%)`);
  });

  it("does not apply exit animation when submitted", () => {
    (useCarousel as jest.Mock).mockReturnValue({
      isSubmitted: true,
    });

    const { container } = render(<SummarySlide />);

    const motionDiv = container.querySelector(
      'div[class="w-1/2 min-h-screen bg-primary flex justify-center items-center"]'
    );
    expect(motionDiv).not.toHaveStyle(`transform: translateX(-100%)`);
  });
});
