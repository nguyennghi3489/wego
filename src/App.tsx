import { useState } from "react";
import { useQuery } from "react-query";
import { getAllCategories, getAllFoods } from "./apis/food";
import { SearchBox } from "./components/search-box";
import { CategoryBar } from "./components/category-bar";
import { FoodList } from "./components/food-list";
import styles from "./app.module.css";

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const onSearchChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
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
    data: foods,
  } = useQuery("foods", getAllFoods, { retry: 3 });

  if (isCategoriesLoading || isFoodsLoading) return <>Loading...</>;

  if (isCategoriesError || isFoodsError) return <>Something Wrong</>;

  return (
    <div className={styles.container}>
      <SearchBox
        placeholder="Enter Restaurant Name"
        value={searchText}
        onChange={onSearchChange}
      />
      {categories && <CategoryBar items={categories} pickItem={() => {}} />}
      {foods && <FoodList items={foods} />}
    </div>
  );
}

export default App;
