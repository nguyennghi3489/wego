import { render, screen } from "@testing-library/react";
import { FoodItem } from "./food-item";
import { mockFoodItem1 } from "../../data/mock-food-data";

describe("Food Item Component", () => {
  test("should renders correctly", () => {
    render(<FoodItem item={mockFoodItem1} />);
    const foodName = screen.getByText(mockFoodItem1.name);
    expect(foodName).toBeInTheDocument();
    const cookDuration = screen.getByText(
      `${mockFoodItem1.minCookTime}-${mockFoodItem1.maxCookTime} min`
    );
    expect(cookDuration).toBeInTheDocument();
    const rating = screen.getByText(mockFoodItem1.rating);
    expect(rating).toBeInTheDocument();

    const foodImage = screen.getByRole("img");
    expect(foodImage).toHaveAttribute("src", mockFoodItem1.imageUrl);
    expect(foodImage).toHaveAttribute("alt", mockFoodItem1.restaurant);
  });
});
