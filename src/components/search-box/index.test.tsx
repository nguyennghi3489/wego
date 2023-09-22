import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBox } from "./";

const mockPlaceholder = "Enter Restaurant Name";
const mockSearchBoxText = "Restaurant A";
const mockSearchBoxName = "search-box";
const mockOnChangeFn = jest.fn();
describe("SearchBox", () => {
  test("should renders placeholder correctly", () => {
    render(
      <SearchBox placeholder={mockPlaceholder} value="" onChange={() => {}} />
    );
    const searchBoxPlaceholder = screen.getByPlaceholderText(mockPlaceholder);
    expect(searchBoxPlaceholder).toBeInTheDocument();
  });

  test("should renders input value correctly", () => {
    render(
      <SearchBox
        placeholder={mockPlaceholder}
        value={mockSearchBoxText}
        onChange={() => {}}
      />
    );

    const searchBoxText = screen.getByDisplayValue(mockSearchBoxText);
    expect(searchBoxText).toBeInTheDocument();
  });

  test("should trigger onChange when value change", () => {
    render(
      <SearchBox
        placeholder={mockPlaceholder}
        value={mockSearchBoxText}
        name={mockSearchBoxName}
        onChange={mockOnChangeFn}
      />
    );

    const searchBoxInput = screen.getByLabelText(mockSearchBoxName);
    fireEvent.change(searchBoxInput, { target: { value: "Restaurant B" } });

    expect(mockOnChangeFn).toBeCalled();
  });
});
