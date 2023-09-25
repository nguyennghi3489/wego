import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./";

const mockContent = "Hello World";
const mockFn = jest.fn();
describe("Food List Component", () => {
  test("should renders correctly", () => {
    render(<Button>{mockContent}</Button>);
    const button = screen.getByText(mockContent);
    expect(button).toBeInTheDocument();
  });
  test("should trigger onClick correctly", () => {
    render(<Button onClick={mockFn}>{mockContent}</Button>);
    const button = screen.getByText(mockContent);
    fireEvent.click(button);
    expect(mockFn).toBeCalled();
  });
});
