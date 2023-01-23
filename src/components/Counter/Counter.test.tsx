import React from "react";
import { render, screen } from "@testing-library/react";

import { Counter } from "./Counter";

describe(Counter.name, () => {
  it("renders correctly", () => {
    render(<Counter initialValue={0} />);
    const counterValue = screen.getByText("Counter: 0");
    expect(counterValue).toBeInTheDocument();
  });
});
