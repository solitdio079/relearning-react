import { vi,describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";
import userEvent from "@testing-library/user-event";




describe("Input values", () => {
  it("input value changes", async () => {
    const user = userEvent.setup()
   
    render(<App />);
    const textInput = screen.getByRole("textbox")
    expect(textInput).toBeInTheDocument()
    await user.type(textInput, "React")
    expect(textInput.value).toEqual("React")
   
  });
 
});

