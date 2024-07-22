import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { useCarousel } from "../hooks/useCarousel";
import "@testing-library/jest-dom";

jest.mock("../Hooks/useCarousel");

describe("Sidebar", () => {
  test("renders sidebar with correct number of buttons", () => {
    (useCarousel as jest.Mock).mockReturnValue({
      currentSlideIndex: 0,
      totalSlides: 3,
      jumpToSlide: jest.fn(),
    });

    render(<Sidebar />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  test("highlight the current slide button", () => {
    (useCarousel as jest.Mock).mockReturnValue({
      currentSlideIndex: 1,
      totalSlides: 3,
      jumpToSlide: jest.fn(),
    });

    render(<Sidebar />);

    const buttons = screen.getAllByRole("button");
    expect(buttons[1]).toHaveClass("bg-gray-400");
    expect(buttons[0]).toHaveClass("bg-white");
    expect(buttons[2]).toHaveClass("bg-white");
  });

  test("calls jumpToSlide on button click", () => {
    const jumpToSlideMock = jest.fn();
    (useCarousel as jest.Mock).mockReturnValue({
      currentSlideIndex: 0,
      totalSlides: 3,
      jumpToSlide: jumpToSlideMock,
    });

    render(<Sidebar />);

    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[1]);

    expect(jumpToSlideMock).toHaveBeenCalledWith(1);
  });
});
