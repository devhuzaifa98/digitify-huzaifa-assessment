import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SummarySlide } from "./SummarySlide";
import { useCarousel } from "../../../hooks/useCarousel";
import { useIsMobile } from "../../../hooks/useIsMobile";

jest.mock("../../../Hooks/useCarousel");
jest.mock("../../../Hooks/useIsMobile");

jest.mock("./Summary", () => ({
  Summary: () => <div data-testid="summary">Summary</div>,
}));

jest.mock("./SummaryTitle", () => ({
  SummaryTitle: () => <div data-testid="summary-title">Summary Title</div>,
}));

describe("SummarySlide Component", () => {
  beforeEach(() => {
    (useCarousel as jest.Mock).mockReturnValue({
      isSubmitted: false,
    });
  });

  test("renders Summary and SummaryTitle components", () => {
    (useIsMobile as jest.Mock).mockReturnValue(false);

    render(<SummarySlide />);

    expect(screen.getByTestId("summary")).toBeInTheDocument();
    expect(screen.getByTestId("summary-title")).toBeInTheDocument();
  });
});
