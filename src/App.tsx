import { useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { AiOutlinePlus } from "react-icons/ai";
import { getAllCategories, getFoodAtPage } from "./apis/food";
import { SearchBox } from "./components/search-box";
import { CategoryBar } from "./components/category-bar";
import { FoodList } from "./components/food-list";
import { Button } from "./components/button";
import { IQuery } from "./models/query";
import styles from "./app.module.css";

const FILTER_DEFAULT = {
  name: undefined,
  categoryId: undefined,
};

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const [query, setQuery] = useState<IQuery>(FILTER_DEFAULT);

  const onSearchNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
    setQuery({ ...query, name: event.currentTarget.value });
  };

  const onCategoryIdChange = (id: string) => {
    setQuery({ ...query, categoryId: id });
  };

  const {
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    data: categories,
  } = useQuery("categories", getAllCategories, {
    retry: 3,
  });
  const {
    isLoading: isFoodsLoading,
    isError: isFoodsError,
    data,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["foods", query],
    retry: 3,
    queryFn: getFoodAtPage,
    keepPreviousData: true,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  if (isCategoriesLoading || isFoodsLoading) return <>Loading...</>;

  if (isCategoriesError || isFoodsError) return <>Something Wrong</>;

  return (
    <div className={styles.container}>
      <SearchBox
        placeholder="Enter Restaurant Name"
        value={searchText}
        onChange={onSearchNameChange}
        name="restaurantFilterTextBox"
      />
      {categories && (
        <CategoryBar items={categories} pickItem={onCategoryIdChange} />
      )}
      {data && <FoodList data={data} />}
      {hasNextPage && (
        <div className={styles.pagination}>
          <Button onClick={fetchNextPage}>
            <span className={styles.loadMore}>
              <AiOutlinePlus size={15} />
              <span>Load More</span>
            </span>
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
