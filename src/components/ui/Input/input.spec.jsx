import { fireEvent, render, screen } from "@testing-library/react";
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

  it("should display loading component when loading is true", () => {
    render(<Input loading={true} />);
    expect(screen.getByTestId("loading-component")).toBeTruthy();
  });

  it("should dispatch onChange once when content is typed", async () => {
    const onChangeMock = jest.fn();
    render(<Input loading={true} onChange={onChangeMock} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    setTimeout(() => {
      expect(onChangeMock).toBeCalledTimes(1);
    }, 200);
  });
});
