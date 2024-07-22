import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SummaryTitle } from "./SummaryTitle";
import { useIsMobile } from "../../../hooks/useIsMobile";

jest.mock("../../../Hooks/useIsMobile");

describe("SummaryTitle Component", () => {
  it("renders with correct text", () => {
    render(<SummaryTitle />);

    const titleElement = screen.getByText("Verify your submission");
    expect(titleElement).toBeInTheDocument();
  });
  it("animates correctly", async () => {
    (useIsMobile as jest.Mock).mockReturnValue(false);
    render(<SummaryTitle />);

    const titleElement = screen.getByText("Verify your submission");
    expect(titleElement).toHaveStyle({
      transform: "translateX(-50px)",
      opacity: 0,
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(titleElement).toHaveStyle({
      transform: "none",
      opacity: 1,
    });
  });

  it("animates correctly on desktop", async () => {
    (useIsMobile as jest.Mock).mockReturnValue(false);

    render(<SummaryTitle />);

    const containerElement = screen.getByRole("summary-title-container");
    expect(containerElement).toHaveStyle({
      transform: "translateX(-100%)",
    });

    const titleElement = screen.getByRole("summary-title");
    expect(titleElement).toHaveStyle({
      transform: "translateX(-50px)",
      opacity: 0,
    });

    // Wait for animation to complete
    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(containerElement).toHaveStyle({
      transform: "translateX(0%)",
    });

    expect(titleElement).toHaveStyle({
      transform: "none",
      opacity: 1,
    });
  });

  it("animates correctly on mobile", async () => {
    (useIsMobile as jest.Mock).mockReturnValue(true);
    render(<SummaryTitle />);

    const containerElement = screen.getByRole("summary-title-container");
    expect(containerElement).toHaveStyle({
      transform: "translateY(-100%)", 
    });

    const titleElement = screen.getByRole("summary-title");
    expect(titleElement).toHaveStyle({
      transform: "translateX(-50px)", 
      opacity: 0,
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(containerElement).toHaveStyle({
      transform: "translateY(0%)",
    });

    expect(titleElement).toHaveStyle({
      transform: "none", // 'translateX' in CSS is 'transform' in JS
      opacity: 1,
    });
  });
});
