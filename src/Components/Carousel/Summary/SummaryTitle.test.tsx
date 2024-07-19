import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SummaryTitle } from "./SummaryTitle";

describe("SummaryTitle Component", () => {
  it("renders with correct text", () => {
    render(<SummaryTitle />);

    const titleElement = screen.getByText("Verify your submission");
    expect(titleElement).toBeInTheDocument();
  });
});
