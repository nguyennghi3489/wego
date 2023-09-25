import { QueryFunctionContext } from "react-query";
import { ICategory } from "../models/category";
import { IFood } from "../models/food";
import { IPagination } from "../models/common";
import { IQuery } from "../models/query";

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
  pageParam = 0,
  queryKey,
}: QueryFunctionContext<[string, number | IQuery]>): Promise<
  IPagination<IFood[]>
> => {
  console.log(queryKey);
  const [_, filter] = queryKey;
  const { name, categoryId } = filter as IQuery;
  if (allFoods.length <= 0) {
    allFoods = await getAllFoods();
  }

  let filterData = allFoods;
  if (name) {
    filterData = filterData.filter((item) =>
      item.name.toLocaleLowerCase().includes(name.toLowerCase())
    );
    console.log(filterData);
  }
  if (categoryId) {
    filterData = filterData.filter((item) => item.categoryId === categoryId);
  }
  if (!name && !categoryId) {
    filterData = allFoods;
  }

  const nextCursor =
    pageParam * PAGE_LIMIT < filterData.length ? pageParam + 1 : null;

  return {
    data: filterData.slice(
      pageParam * PAGE_LIMIT,
      (pageParam + 1) * PAGE_LIMIT
    ),
    nextCursor,
  };
};
