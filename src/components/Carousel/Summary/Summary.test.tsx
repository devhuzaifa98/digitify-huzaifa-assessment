import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Summary } from "./Summary";
import { useCarousel } from "../../../hooks/useCarousel";

jest.mock("../../../Hooks/useCarousel");

describe("Summary Component", () => {
  const mockUseCarousel = {
    allSlides: [
      {
        title: "Slide 1",
        options: [
          { label: "Option 1", isSelected: true },
          { label: "Option 2", isSelected: false },
        ],
      },
      {
        title: "Slide 2",
        options: [
          { label: "Option A", isSelected: false },
          { label: "Option B", isSelected: true },
        ],
      },
    ],
    submitForm: jest.fn(),
    jumpToSlide: jest.fn(),
  };

  beforeEach(() => {
    (useCarousel as jest.Mock).mockReturnValue(mockUseCarousel);
  });

  it("renders correctly", () => {
    render(<Summary />);
    expect(screen.getByText("Summary")).toBeInTheDocument();
    expect(
      screen.getByText("You have selected the following options:")
    ).toBeInTheDocument();
    expect(screen.getByText("1. Slide 1")).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("2. Slide 2")).toBeInTheDocument();
    expect(screen.getByText("Option B")).toBeInTheDocument();
  });

  it("handles 'Change' button clicks", () => {
    render(<Summary />);
    fireEvent.click(screen.getAllByText("Change")[0]);
    expect(mockUseCarousel.jumpToSlide).toHaveBeenCalledWith(0, true);
  });

  it("handles 'Submit' button click", () => {
    render(<Summary />);
    fireEvent.click(screen.getByText("Submit"));
    expect(mockUseCarousel.submitForm).toHaveBeenCalled();
  });

  it("animates correctly", async () => {
    render(<Summary />);

    const headerElement = screen.getByRole("summary-slide-header");
    expect(headerElement).toHaveStyle({
      transform: "translateX(-100px)",
      opacity: 0,
    });

    const listItemElement = screen.getByRole("answer-1");
    expect(listItemElement).toHaveStyle({
      transform: "translateX(-100px)",
      opacity: 0,
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(headerElement).toHaveStyle({
      transform: "none",
      opacity: 1,
    });

    expect(listItemElement).toHaveStyle({
      transform: "none",
      opacity: 1,
    });
  });
});
