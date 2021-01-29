import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  render(<BubblePage colorList={true}/>)

  const color = screen.queryByText(/colors/i)

  expect(color).not.toBeNull()
});
