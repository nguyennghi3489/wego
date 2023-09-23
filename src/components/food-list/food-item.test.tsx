import { render, screen } from "@testing-library/react";
import { FoodItem } from "./food-item";
import { PromotionType } from "../../models/food";

const mockItem = {
  id: "628b5dec9cf7cc07f011a6e4",
  index: 180,
  rating: 1.2061,
  promotion: "1+1" as PromotionType,
  isNew: true,
  categoryId: "6288a89fac9e970731bfaa7b",
  minCookTime: 60,
  maxCookTime: 80,
  restaurant: "Temorak",
  name: "Temorak Drinks",
  imageUrl: "https://source.unsplash.com/random/400x400?Drinks",
};

describe("SearchBox", () => {
  test("should renders correctly", () => {
    render(<FoodItem item={mockItem} />);
    const foodName = screen.getByText(mockItem.name);
    expect(foodName).toBeInTheDocument();
    const cookDuration = screen.getByText(
      `${mockItem.minCookTime}-${mockItem.maxCookTime} min`
    );
    expect(cookDuration).toBeInTheDocument();
    const rating = screen.getByText(mockItem.rating);
    expect(rating).toBeInTheDocument();

    const foodImage = screen.getByRole("img");
    expect(foodImage).toHaveAttribute("src", mockItem.imageUrl);
    expect(foodImage).toHaveAttribute("alt", mockItem.restaurant);
  });
});
