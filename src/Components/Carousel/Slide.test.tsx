import { render, screen } from "@testing-library/react";
import { StandardSlides } from "./Slide";

jest.mock("../Sidebar", () => ({
  Sidebar: () => <div data-testid="sidebar">Sidebar</div>,
}));

jest.mock("./Options", () => ({
  Options: () => <div data-testid="options">Options</div>,
}));

jest.mock("./Title", () => ({
  Title: () => <div data-testid="title">Title</div>,
}));

describe("StandardSlides Component", () => {
  it("renders Sidebar, Options, and Title components", () => {
    render(<StandardSlides />);

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();

    expect(screen.getByTestId("title")).toBeInTheDocument();

    expect(screen.getByTestId("options")).toBeInTheDocument();
  });
});
