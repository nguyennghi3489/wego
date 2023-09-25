import { PromotionType } from "../models/food";

export const mockFoodItem1 = {
  id: "628b5dec9cf7cc07f011a6e4",
  index: 321,
  rating: 1.2061,
  promotion: "1+1" as PromotionType,
  isNew: true,
  categoryId: "6288a89fac9e970731bfaa7b",
  minCookTime: 60,
  maxCookTime: 80,
  restaurant: "Temorak",
  name: "Food Item 1",
  imageUrl: "https://source.unsplash.com/random/400x400?Drinks",
};

export const mockFoodItem2 = {
  id: "628b5dec9cf7cc07f011a623",
  index: 180,
  rating: 1.2061,
  promotion: "1+1" as PromotionType,
  isNew: true,
  categoryId: "6288a89fac9e970731bfaa7b",
  minCookTime: 60,
  maxCookTime: 80,
  restaurant: "Temorak",
  name: "Food Item 2",
  imageUrl: "https://source.unsplash.com/random/400x400?Drinks",
};

export const mockFoodItem3 = {
  id: "628b5dec9cf7cc07f011a6e1",
  index: 123,
  rating: 1.2061,
  promotion: "1+1" as PromotionType,
  isNew: true,
  categoryId: "6288a89fac9e970731bfaa7b",
  minCookTime: 60,
  maxCookTime: 80,
  restaurant: "Temorak",
  name: "Food Item 3",
  imageUrl: "https://source.unsplash.com/random/400x400?Drinks",
};

export const generateFoodList = (
  categoryId: string = "",
  name: string,
  count: number
) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    const item = {
      id: name + i,
      index: i,
      rating: 3.9508,
      promotion: "gift",
      isNew: false,
      categoryId: categoryId,
      minCookTime: 80,
      maxCookTime: 100,
      restaurant: name,
      name: name + i,
    };
    result.push(item);
  }
  return result;
};
