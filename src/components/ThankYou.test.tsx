import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThankYou } from "./ThankYou";
import { useIsMobile } from "../hooks/useIsMobile";

jest.mock("../Hooks/useIsMobile");

describe("ThankYou Component", () => {
  test("renders without crashing", () => {
    (useIsMobile as jest.Mock).mockReturnValue(false);

    render(<ThankYou />);

    expect(screen.getByText("Thanks for your submission!")).toBeInTheDocument();
  });

  it("animates correctly on desktop", async () => {
    render(<ThankYou />);

    const containerElement = screen.getByRole("thank-you-container");
    expect(containerElement).toHaveStyle({
      width: "50%",
      position: "absolute",
      right: 0,
    });

    const textElement = screen.getByRole("thank-you-text");
    expect(textElement).toHaveStyle({
      transform: "translateX(-50px)",
      opacity: 0,
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(containerElement).toHaveStyle({
      width: "100%",
      right: 0,
    });

    expect(textElement).toHaveStyle({
      transform: "none",
      opacity: 1,
    });
  });

  it("animates correctly on mobile", async () => {
    (useIsMobile as jest.Mock).mockReturnValue(true);
    render(<ThankYou />);

    const containerElement = screen.getByRole("thank-you-container");
    expect(containerElement).toHaveStyle({
      height: "50%",
      position: "absolute",
      bottom: 0,
    });

    const textElement = screen.getByRole("thank-you-text");
    expect(textElement).toHaveStyle({
      transform: "translateX(-50px)",
      opacity: 0,
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    expect(containerElement).toHaveStyle({
      height: "100%",
      bottom: 0,
    });

    expect(textElement).toHaveStyle({
      transform: "none",
      opacity: 1,
    });
  });
});
