import { render, screen, fireEvent } from "@testing-library/react";
import { Options } from "./Options";
import { useCarousel } from "../../hooks/useCarousel";

jest.mock("../../Hooks/useCarousel");

describe("Options Component", () => {
  const mockUseCarousel = {
    currentSlide: {
      title: "Slide 1",
      options: [
        { label: "Option 1", icon: "icon1.png", isSelected: false },
        { label: "Option 2", icon: "icon2.png", isSelected: false },
        { label: "Option 3", icon: "icon3.png", isSelected: true },
      ],
    },
    nextSlide: jest.fn(),
    selectOption: jest.fn(),
  };

  beforeEach(() => {
    (useCarousel as jest.Mock).mockReturnValue(mockUseCarousel);
  });

  it("renders with correct options", () => {
    render(<Options />);

    const options = screen.getAllByRole("button");
    expect(options.length).toBe(3);
    expect(screen.getByAltText("Option 1")).toBeInTheDocument();
    expect(screen.getByAltText("Option 2")).toBeInTheDocument();
    expect(screen.getByAltText("Option 3")).toBeInTheDocument();
  });

  it("calls selectOption and nextSlide on button click", () => {
    render(<Options />);

    const optionButtons = screen.getAllByRole("button");
    fireEvent.click(optionButtons[0]);

    expect(mockUseCarousel.selectOption).toHaveBeenCalledWith(0);
    expect(mockUseCarousel.nextSlide).toHaveBeenCalled();
  });

  it("animates correctly", async () => {
    render(<Options />);

    const optionElement = screen.getByRole("option-1");
    expect(optionElement).toHaveStyle({
      opacity: 0,
      transform: "translateY(100px)",
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(optionElement).toHaveStyle({
      opacity: 1,
      transform: "none",
    });
  });
});
