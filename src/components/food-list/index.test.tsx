import { render, screen } from "@testing-library/react";
import { FoodList } from "./";
import {
  mockFoodItem1,
  mockFoodItem2,
  mockFoodItem3,
} from "../../data/mock-food-data";

const mockItems = {
  pages: [
    { data: [mockFoodItem1, mockFoodItem2, mockFoodItem3], nextCursor: 1 },
  ],
  pageParams: [],
};

describe("Food List Component", () => {
  test("should renders correctly", () => {
    render(<FoodList data={mockItems} />);
    const foodName1 = screen.getByText(mockFoodItem1.name);
    expect(foodName1).toBeInTheDocument();
    const foodName2 = screen.getByText(mockFoodItem2.name);
    expect(foodName2).toBeInTheDocument();
    const foodName3 = screen.getByText(mockFoodItem3.name);
    expect(foodName3).toBeInTheDocument();
  });
});
