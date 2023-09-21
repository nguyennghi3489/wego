import { ICategory } from "../models/category";
import { IFood } from "../models/food";

export const getAllCategories = async (): Promise<ICategory[]> => {
  const response = await fetch(
    "https://run.mocky.io/v3/f25ced0a-9ff7-4996-bdc7-430f281c48db"
  );
  const categories = await response.json();

  return categories;
};

export const getAllFoods = async (): Promise<IFood[]> => {
  const response = await fetch(
    "https://run.mocky.io/v3/f25ced0a-9ff7-4996-bdc7-430f281c48db"
  );
  const foods = await response.json();

  return foods;
};
