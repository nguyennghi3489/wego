import { QueryFunctionContext } from "react-query";
import { ICategory } from "../models/category";
import { IFood } from "../models/food";
import { IPagination } from "../models/common";

let allFoods: IFood[] = [];
const PAGE_LIMIT = 10;

export const getAllCategories = async (): Promise<ICategory[]> => {
  const response = await fetch(
    "https://run.mocky.io/v3/f25ced0a-9ff7-4996-bdc7-430f281c48db"
  );
  const categories = (await response.json()) as ICategory[];

  return categories;
};

export const getAllFoods = async (): Promise<IFood[]> => {
  const response = await fetch(
    "https://run.mocky.io/v3/a24cfec5-f76c-410b-a5ac-9f63fab28abb"
  );
  const foods = (await response.json()) as IFood[];
  return foods;
};

export const getFoodAtPage = async ({
  queryKey,
}: QueryFunctionContext<[string, number]>): Promise<IPagination<IFood[]>> => {
  const [_, page] = queryKey;

  if (allFoods.length <= 0) {
    allFoods = await getAllFoods();
  }
  const hasNextPage = page * PAGE_LIMIT < allFoods.length;

  return {
    items: allFoods.slice(page * PAGE_LIMIT, (page + 1) * PAGE_LIMIT),
    hasNextPage,
  };
};
