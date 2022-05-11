import { render, screen } from "@testing-library/react";
import Input from ".";

describe("<Input />", () => {
  it("should render input component", () => {
    render(<Input />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();
  });

  it("should disable input when loading is true", () => {
    render(<Input loading={true} />);
    const input = screen.getByRole("textbox");
    expect(input.disabled).toBeTruthy();
  });
});
