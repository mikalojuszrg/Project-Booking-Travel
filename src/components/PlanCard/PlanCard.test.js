import PlanCard from "./PlanCard";

import { screen, render, fireEvent } from "@testing-library/react";

describe("PlanCard component", () => {
  it("triggers the onClick prop", () => {
    const mockOnClick = jest.fn();
    render(<PlanCard data-testid="plan-card" onClick={mockOnClick} />);
    const card = screen.getByTestId("card");
    fireEvent.click(card);
    expect(mockOnClick).toHaveBeenCalled();
  });
  it("display the correct name", () => {
    const testName = "test plan";
    render(<PlanCard name={testName} data-testid="card" />);
    const card = screen.getByTestId("card").querySelector("h3");
    expect(card.textContent).toBe(testName);
  });
  it("has the correct image", () => {
    const testImg = "yoyo.jpg";
    render(<PlanCard name="Test Plan" image={testImg} data-testid="card" />);
    const card = screen.getByTestId("card").querySelector("img");
    expect(card.getAttribute("src")).toBe(testImg);
  });
});
