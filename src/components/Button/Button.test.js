import React from "react";

import Button from "./Button";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Button component", () => {
  it("render the children", () => {
    render(<Button variant="primary">Click me</Button>);
    const buttonText = screen.getByText("Click me");
    expect(buttonText).toBeInTheDocument();
  });
  it("triggers the onClick prop", () => {
    const mockOnClick = jest.fn();
    render(
      <Button variant="primary" onClick={mockOnClick}>
        Click me
      </Button>
    );
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
  it("renders the correct variant class", () => {
    render(<Button variant="primary">Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("button--primary");
  });
});
