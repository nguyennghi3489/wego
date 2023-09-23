import { render, screen, fireEvent } from "@testing-library/react";
import { CategoryBar } from "./";

const mockItem1 = { id: "1", name: "Sushi" };
const mockItem2 = { id: "2", name: "Pizza" };
const mockItem3 = { id: "3", name: "Burger" };
const mockItems = [mockItem1, mockItem2, mockItem3];
const mockPickItem = jest.fn();

describe("SearchBox", () => {
  test("should renders category bar correctly", () => {
    render(<CategoryBar items={mockItems} pickItem={() => {}} />);
    const allItem = screen.getByText("All");
    expect(allItem).toBeInTheDocument();
    const item1 = screen.getByText(mockItem1.name);
    expect(item1).toBeInTheDocument();
    const item2 = screen.getByText(mockItem2.name);
    expect(item2).toBeInTheDocument();
    const item3 = screen.getByText(mockItem3.name);
    expect(item3).toBeInTheDocument();
  });

  test("should activate on All Button in default", () => {
    render(<CategoryBar items={mockItems} pickItem={() => {}} />);
    const allItem = screen.getByText("All");
    expect(allItem).toHaveClass("isActivated");
  });

  test("should activate item and trigger pickItem function when click on item", () => {
    render(<CategoryBar items={mockItems} pickItem={mockPickItem} />);
    const item1 = screen.getByText(mockItem1.name);
    fireEvent.click(item1);
    expect(item1).toHaveClass("isActivated");
    expect(mockPickItem).toBeCalledWith(mockItem1.id);
  });
});
