import { act, cleanup, render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import nock, { restore } from "nock";
import { generateFoodList } from "./data/mock-food";
import { mockCategoryResponse } from "./data/mock-category";
import { PAGE_LIMIT } from "./apis/food";
import { getAllRegex } from "./helpers/regex";
import { BASE_API_URL } from "./apis/constants";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      keepPreviousData: false,
    },
  },
});

const LOAD_MORE_BUTTON = "Load More";
const ALL_CATEGORY_BUTTON = "All";
const SUSHI_FOOD_NAME = "SushiFood";
const allSushiFood = getAllRegex(SUSHI_FOOD_NAME);
const SUSHI_CATEGORY_NAME = "Sushi";
const SUSHI_FOOD_COUNT = 12;
const sushiId = mockCategoryResponse.find(
  (item) => item.name === SUSHI_CATEGORY_NAME
)?.id;
const mockSushiFood = generateFoodList(
  sushiId,
  SUSHI_FOOD_NAME,
  SUSHI_FOOD_COUNT
);
const PIZZA_FOOD_NAME = "PizzaFood";
const allPizzaFood = getAllRegex(PIZZA_FOOD_NAME);
const PIZZA_CATEGORY_NAME = "Pizza";
const PIZZA_FOOD_COUNT = 5;
const pizzaId = mockCategoryResponse.find(
  (item) => item.name === PIZZA_CATEGORY_NAME
)?.id;
const mockPizzaFood = generateFoodList(
  pizzaId,
  PIZZA_FOOD_NAME,
  PIZZA_FOOD_COUNT
);

nock(BASE_API_URL)
  .defaultReplyHeaders({
    "access-control-allow-origin": "*",
    "access-control-allow-credentials": "true",
  })
  .get("/f25ced0a-9ff7-4996-bdc7-430f281c48db")
  .reply(200, mockCategoryResponse);
nock(BASE_API_URL)
  .defaultReplyHeaders({
    "access-control-allow-origin": "*",
    "access-control-allow-credentials": "true",
  })
  .get("/a24cfec5-f76c-410b-a5ac-9f63fab28abb")
  .reply(200, [...mockSushiFood, ...mockPizzaFood]);

const setup = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};
describe("App", () => {
  afterEach(() => {
    cleanup();
    restore();
    queryClient.resetQueries();
  });
  test("should renders header correctly", async () => {
    await act(async () => setup());
    const categoryText = await screen.findByText(ALL_CATEGORY_BUTTON);
    expect(categoryText).toBeInTheDocument();
    const foodText = await screen.findByText(`${SUSHI_FOOD_NAME}0`);
    expect(foodText).toBeInTheDocument();
  });

  test("should renders categories data correctly", async () => {
    await act(async () => setup());
    const categoryText = await screen.findByText(ALL_CATEGORY_BUTTON);
    expect(categoryText).toBeInTheDocument();

    const sushiText = screen.getByText(SUSHI_CATEGORY_NAME);
    expect(sushiText).toBeInTheDocument();

    const pizzaText = screen.getByText(PIZZA_CATEGORY_NAME);
    expect(pizzaText).toBeInTheDocument();
  });

  test("should renders food data correctly", async () => {
    await act(async () => setup());
    const sushiFoods = await screen.findAllByText(allSushiFood);

    expect(sushiFoods).toHaveLength(PAGE_LIMIT);
  });

  test("should renders category filter result correctly", async () => {
    await act(async () => setup());
    const pizzaCategoryButton = await screen.findByText(PIZZA_CATEGORY_NAME);
    expect(pizzaCategoryButton).toBeInTheDocument();
    fireEvent.click(pizzaCategoryButton);

    const pizzaFoods = await screen.findAllByText(allPizzaFood);
    expect(pizzaFoods).toHaveLength(PIZZA_FOOD_COUNT);

    const sushiFoods = screen.queryAllByText(allSushiFood);
    expect(sushiFoods).toHaveLength(0);
  });

  test("should renders food search result correctly", async () => {
    await act(async () => setup());
    const categoryText = await screen.findByText(ALL_CATEGORY_BUTTON);
    expect(categoryText).toBeInTheDocument();
    const searchBoxInput = screen.getByLabelText("restaurantFilterTextBox");
    fireEvent.type(searchBoxInput, PIZZA_FOOD_NAME);
    const pizzaFoods = await screen.findAllByText(allPizzaFood);
    expect(pizzaFoods).toHaveLength(PIZZA_FOOD_COUNT);
    const sushiFoods = screen.queryAllByText(allSushiFood);
    expect(sushiFoods).toHaveLength(0);
  });

  test("should renders more food after click show more", async () => {
    await act(async () => setup());
    const loadMoreButton = await screen.findByText(LOAD_MORE_BUTTON);
    expect(loadMoreButton).toBeInTheDocument();
    const emptyPizzaFoods = screen.queryAllByText(allPizzaFood);
    expect(emptyPizzaFoods).toHaveLength(0);
    const sushiFoods = screen.queryAllByText(allSushiFood);
    expect(sushiFoods).toHaveLength(10);
    fireEvent.click(loadMoreButton);
    const allPizzaFoods = await screen.findAllByText(allPizzaFood);
    expect(allPizzaFoods).toHaveLength(PIZZA_FOOD_COUNT);
    const allSushiFoods = screen.queryAllByText(allSushiFood);
    expect(allSushiFoods).toHaveLength(SUSHI_FOOD_COUNT);
  });

  test("should not renders more food after click show more", async () => {
    await act(async () => setup());
    const categoryText = await screen.findByText(ALL_CATEGORY_BUTTON);
    expect(categoryText).toBeInTheDocument();
    const loadMoreButton = await screen.findByText(LOAD_MORE_BUTTON);
    expect(loadMoreButton).toBeInTheDocument();
    fireEvent.click(loadMoreButton);
    const allPizzaFoods = await screen.findAllByText(allPizzaFood);
    expect(allPizzaFoods).toHaveLength(PIZZA_FOOD_COUNT);
    expect(loadMoreButton).not.toBeInTheDocument();
  });
});
