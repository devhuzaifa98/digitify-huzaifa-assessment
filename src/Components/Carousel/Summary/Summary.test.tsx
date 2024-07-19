import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Summary } from "./Summary";
import { useCarousel } from "../../../Hooks/useCarousel";

jest.mock("../../../Hooks/useCarousel");

const mockUseCarousel = useCarousel as jest.Mock;

describe("Summary Component", () => {
  const mockAllSlides = [
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
  ];

  const mockSubmitForm = jest.fn();
  const mockJumpToSlide = jest.fn();

  beforeEach(() => {
    mockUseCarousel.mockReturnValue({
      allSlides: mockAllSlides,
      submitForm: mockSubmitForm,
      jumpToSlide: mockJumpToSlide,
    });
  });

  it("renders correctly", () => {
    render(<Summary />);
    expect(screen.getByText("Summary")).toBeInTheDocument();
    expect(
      screen.getByText("You have selected the following options:")
    ).toBeInTheDocument();
    expect(screen.getByText("Slide 1")).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
    expect(screen.getByText("Option B")).toBeInTheDocument();
  });

  it("handles 'Change' button clicks", () => {
    render(<Summary />);
    fireEvent.click(screen.getAllByText("Change")[0]);
    expect(mockJumpToSlide).toHaveBeenCalledWith(0);

    fireEvent.click(screen.getAllByText("Change")[1]);
    expect(mockJumpToSlide).toHaveBeenCalledWith(1);
  });

  it("handles 'Submit' button click", () => {
    render(<Summary />);
    fireEvent.click(screen.getByText("Submit"));
    expect(mockSubmitForm).toHaveBeenCalled();
  });
});
